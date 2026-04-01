<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- Inline script to detect system dark mode preference and apply it immediately --}}
    <script>
        (function () {
            const appearance = '{{ $appearance ?? 'system' }}';

            if (appearance === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                if (prefersDark) {
                    document.documentElement.classList.add('dark');
                }
            }
        })();
    </script>

    {{-- Inline style to set the HTML background color based on our theme in app.css --}}
    <style>
        html {
            background-color: oklch(1 0 0);
        }

        html.dark {
            background-color: oklch(0.145 0 0);
        }
    </style>

    <title>MI NU 02 Situwangi</title>
    <meta name="description" content="Website Resmi MI NU 02 Situwangi, Banjarnegara. Temukan informasi akademik, pendaftaran siswa baru, profil sekolah, dan berita terkini.">

    <link rel="icon" type="image/png" sizes="192x192" href="{{ asset('assets/image/logo-kemenag.png') }}">
    <link rel="apple-touch-icon" href="{{ asset('assets/image/logo-kemenag.png') }}">

    <meta property="og:site_name" content="MI NU 02 Situwangi">
    <meta property="og:title" content="Website Resmi MI NU 02 Situwangi">
    <meta property="og:image" content="{{ asset('assets/image/logo-kemenag.png') }}">

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
