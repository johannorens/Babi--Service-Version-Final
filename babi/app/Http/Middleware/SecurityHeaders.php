<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SecurityHeaders
{
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

<<<<<<< HEAD
        if (!$request->is('telescope*')) {
            $response->headers->set(
                'Content-Security-Policy',
                "default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.bunny.net; script-src 'self' 'unsafe-inline'; font-src 'self' data: https://fonts.bunny.net;"
            );
        }

=======
        // Content Security Policy
        $response->headers->set(
            'Content-Security-Policy',
            "default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; script-src 'self'; font-src 'self' data:;"
        );

        // HSTS uniquement en HTTPS
>>>>>>> 6c03ecf332601b4c1e49d51010559e0121cfec08
        if ($request->secure()) {
            $response->headers->set(
                'Strict-Transport-Security',
                'max-age=31536000; includeSubDomains; preload'
            );
        }

        $response->headers->set('X-Frame-Options', 'DENY');
        $response->headers->set('X-Content-Type-Options', 'nosniff');
        $response->headers->set('Referrer-Policy', 'strict-origin-when-cross-origin');
<<<<<<< HEAD

=======
>>>>>>> 6c03ecf332601b4c1e49d51010559e0121cfec08
        $response->headers->set(
            'Permissions-Policy',
            'camera=(), microphone=(), geolocation=()'
        );

        return $response;
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 6c03ecf332601b4c1e49d51010559e0121cfec08
