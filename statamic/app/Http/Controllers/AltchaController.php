<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Cache;

class AltchaController extends Controller
{
    /**
     * Generate a new ALTCHA challenge.
     *
     * The client must find `number` such that SHA-256(salt + number) === challenge.
     * The signature lets the server verify without storing state.
     * Expiration is encoded in the salt per ALTCHA spec: salt?expires=timestamp
     */
    public function challenge(): JsonResponse
    {
        $hmacKey = config('app.key');
        $maxNumber = 50000;
        $secretNumber = random_int(0, $maxNumber);
        $expires = time() + 300; // 5 minutes

        // Salt includes expiration per ALTCHA spec
        $salt = bin2hex(random_bytes(12)) . '?expires=' . $expires;

        $challenge = hash('sha256', $salt . $secretNumber);
        $signature = hash_hmac('sha256', $challenge, $hmacKey);

        return response()->json([
            'algorithm' => 'SHA-256',
            'challenge' => $challenge,
            'maxnumber' => $maxNumber,
            'salt' => $salt,
            'signature' => $signature,
        ])->header('Cache-Control', 'no-store, private');
    }

    /**
     * Verify an ALTCHA solution submitted with a form.
     *
     * Checks: payload structure, expiration, SHA-256 hash, HMAC signature, replay.
     */
    public static function verify(?string $payload): bool
    {
        if (empty($payload)) {
            return false;
        }

        $data = json_decode(base64_decode($payload), true);

        if (!$data || !isset($data['algorithm'], $data['challenge'], $data['number'], $data['salt'], $data['signature'])) {
            return false;
        }

        if ($data['algorithm'] !== 'SHA-256') {
            return false;
        }

        // Check expiration from salt
        $saltParts = explode('?', $data['salt'], 2);
        if (count($saltParts) > 1) {
            parse_str($saltParts[1], $params);
            if (isset($params['expires']) && time() > (int) $params['expires']) {
                return false;
            }
        }

        $hmacKey = config('app.key');

        // Recompute and verify
        $expectedChallenge = hash('sha256', $data['salt'] . $data['number']);
        $expectedSignature = hash_hmac('sha256', $expectedChallenge, $hmacKey);

        if (!hash_equals($expectedChallenge, $data['challenge'])) {
            return false;
        }

        if (!hash_equals($expectedSignature, $data['signature'])) {
            return false;
        }

        // Replay protection: each challenge can only be used once
        $cacheKey = 'altcha_used:' . $data['challenge'];
        if (Cache::has($cacheKey)) {
            return false;
        }
        Cache::put($cacheKey, true, 600); // Keep for 10 minutes

        return true;
    }
}
