<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
<!-- BEGIN: Head-->

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">

    <title>User Register | Materialize - Material Design Admin Template</title>

    <script src="{{asset('js/app.js')}}"></script>
    <link rel="stylesheet" type="text/css" href="{{asset('css/app.css')}}">

</head>
<!-- END: Head-->
<body class="vertical-layout page-header-light vertical-menu-collapsible vertical-menu-nav-dark preload-transitions 1-column {{Route::is('register')?'register-bg':''}}   blank-page blank-page" data-open="click" data-menu="vertical-menu-nav-dark" data-col="1-column">
<div class="row">
    <div class="col s12">
        <div class="container">
           @yield('content')
        </div>
        <div class="content-overlay"></div>
    </div>
</div>


</body>
</html>
{{--
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
--}}
