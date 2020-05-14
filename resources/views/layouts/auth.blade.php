<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="app">
    <div class="section-auth-navbar">

        <nav class="gradient-45deg-purple-deep-orange gradient-shadow">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Laravel</a>
                <ul id="nav-mobile" class="right ">
                    @include('layouts.components.auth.auth-links')
                </ul>
            </div>
        </nav>
    </div>

    <div class="container">
        @yield('content')
    </div>

</div>

</body>
</html>
