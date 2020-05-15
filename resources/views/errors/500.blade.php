<!DOCTYPE html>

<html class="loading" lang="en" data-textdirection="ltr">
<!-- BEGIN: Head-->


<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">

    <title>404</title>

    <script src="{{asset('js/app.js')}}" defer></script>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">

</head>
<!-- END: Head-->
<body class="vertical-layout page-header-light vertical-menu-collapsible vertical-menu-nav-dark preload-transitions 1-column  bg-full-screen-image  blank-page blank-page" data-open="click" data-menu="vertical-menu-nav-dark" data-col="1-column">
<div id="app">
    <div class="row">
        <div class="col s12">
            <div class="container"><div class="section section-404 p-0 m-0 height-100vh">
                    <div class="row">
                        <!-- 404 -->
                        <div class="col s12 center-align white">
                            <img src="{{asset('app-assets/images/gallery/error-2.png')}}" class="bg-image-404" alt="">
                            <h1 class="error-code m-0">500</h1>
                            <h6 class="mb-2">PAGINA NO ENCONTRADA</h6>
                            <a class="btn waves-effect waves-light gradient-45deg-deep-purple-blue gradient-shadow mb-4" href="{{route('home')}}">Ir a Home</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-overlay"></div>
        </div>
    </div>
</div>

</body>
</html>
