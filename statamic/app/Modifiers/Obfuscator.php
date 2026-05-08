<?php

namespace App\Modifiers;

use Statamic\Modifiers\Modifier;

class Obfuscator extends Modifier
{
    protected static $handle = 'obfuscator';

    public function index($value, $params, $context)
    {
        $email = trim($value);

        if (empty($email) || !str_contains($email, '@')) {
            return $value;
        }

        $id = 'eml_' . substr(md5($email . uniqid()), 0, 8);

        // Split email into char codes — never appears as string in HTML
        $codes = array_map('ord', str_split($email));
        $codesJs = implode(',', $codes);

        // Build inline JS that reconstructs email + mailto link at runtime
        return '<span id="' . $id . '" class="obfuscated-email"></span>'
            . '<script>(function(){var c=[' . $codesJs . '],s="";'
            . 'for(var i=0;i<c.length;i++)s+=String.fromCharCode(c[i]);'
            . 'var el=document.getElementById("' . $id . '");'
            . 'var a=document.createElement("a");'
            . 'a.href="mai"+"lto:"+s;a.textContent=s;'
            . 'a.className=el.className||"";'
            . 'el.parentNode.replaceChild(a,el)})()</script>'
            . '<noscript>E-Mail-Adresse kann ohne JavaScript nicht angezeigt werden.</noscript>';
    }
}
