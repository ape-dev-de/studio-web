<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        // Hinter Traefik-Ingress: X-Forwarded-* Header von allen Proxies
        // akzeptieren, damit URL::asset()/route() den echten Host
        // (neu.ape-dev.de) + Scheme (https) statt der internen Pod-IP
        // (10.42.x.y:8080) sieht. K8s-Cluster: kein externer Proxy
        // umgeht den Ingress, daher '*' akzeptabel.
        $middleware->trustProxies(at: '*');
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();
