<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href={{ asset('online-course.png') }}>
    <title>Courses Land</title>

    <!-- Sikkha interface -->

    <link rel="stylesheet" href={{ asset('Interface/css/bootstrap.min.css') }}>
    <link rel="stylesheet" href={{ asset('Interface/css/fontawesome-all.min.css') }}>
    {{-- <link rel="stylesheet" href={{ asset('Interface/css/owl.carousel.min.css') }}> --}}
    {{-- <link rel="stylesheet" href={{ asset('Interface/css/animate.min.css') }}> --}}
    {{-- <link rel="stylesheet" href={{ asset('Interface/css/magnific-popup.css') }}> --}}
    {{-- <link rel="stylesheet" href={{ asset('Interface/css/slick.css') }}> --}}
    {{-- <link rel="stylesheet" href={{ asset('Interface/css/meanmenu.css') }}> --}}
    {{-- <link rel="stylesheet" href={{ asset('Interface/css/responsive.css') }}> --}}

    <!-- Sikkha -->

    <!-- Form Fonts start -->
    <link href="http://fonts.googleapis.com/css?family=Hind:300,400,500,600,700&amp;subset=devanagari,latin-ext"
        rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.css"
        integrity="sha512-xnwMSDv7Nv5JmXb48gKD5ExVOnXAbNpBWVAXTo9BJWRJRygG8nwQI81o5bYe8myc9kiEF/qhMGPjkSsF06hyHA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- Form Fonts end -->

    {{-- Dashboard styles --}}

    {{-- <link rel="stylesheet" href={{ asset('Dashboard/plugins/jvectormap/jquery-jvectormap-2.0.3.min.css') }}>
    <link rel="stylesheet" href={{ asset('Dashboard/plugins/charts-c3/plugin.css') }}>
    <link rel="stylesheet" href={{ asset('Dashboard/plugins/morrisjs/morris.min.css') }}>
    <link rel="stylesheet" href={{ asset('Dashboard/plugins/bootstrap/css/bootstrap.min.css') }}> --}}
    <link rel="stylesheet" href={{ asset('Dashboard/plugins/dropify/css/dropify.min.css') }}>

    {{-- Dashboard styles --}}

</head>

<body class="antialiased">
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="appid"></div>
    {{-- <script src="https://www.gstatic.com/firebasejs/7.23.0/firebase.js"></script> --}}
    {{-- <script src="https://www.gstatic.com/firebasejs/9.4.1/firebase.js"></script> --}}

    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src={{ asset('Interface/js/vendor/modernizr-3.5.0.min.js') }}></script>
    <script src={{ asset('Interface/js/vendor/jquery-1.12.4.min.js') }}></script>
    <script src={{ asset('Interface/js/popper.min.js') }}></script>
    <script src={{ asset('Interface/js/bootstrap.min.js') }}></script>
    <script src={{ asset('Interface/js/owl.carousel.min.js') }}></script>
    <script src={{ asset('Interface/js/isotope.pkgd.min.js') }}></script>
    <script src={{ asset('Interface/js/one-page-nav-min.js') }}></script>
    <script src={{ asset('Interface/js/slick.min.js') }}></script>
    <script src={{ asset('Interface/js/ajax-form.js') }}></script>
    <script src={{ asset('Interface/js/wow.min.js') }}></script>
    <script src={{ asset('Interface/js/jquery.meanmenu.min.js') }}></script>
    <script src={{ asset('Interface/js/jquery.scrollUp.min.js') }}></script>
    <script src={{ asset('Interface/js/jquery.barfiller.js') }}></script>
    <script src={{ asset('Interface/js/imagesloaded.pkgd.min.js') }}></script>
    <script src={{ asset('Interface/js/jquery.counterup.min.js') }}></script>
    <script src={{ asset('Interface/js/waypoints.min.js') }}></script>
    <script src={{ asset('Interface/js/jquery.magnific-popup.min.js') }}></script>
    <script src={{ asset('Interface/js/plugins.js') }}></script>
    <script src={{ asset('Interface/js/main.js') }}></script>

    {{-- Dashboard scripts --}}

    <script src={{ asset('Dashboard/bundles/libscripts.bundle.js') }}></script>
    <!-- Lib Scripts Plugin Js ( jquery.v3.2.1, Bootstrap4 js) -->
    <script src={{ asset('Dashboard/bundles/vendorscripts.bundle.js') }}></script>

    <script src={{ asset('Dashboard/bundles/jvectormap.bundle.js') }}></script>
    <script src={{ asset('Dashboard/bundles/sparkline.bundle.js') }}></script>
    <script src={{ asset('Dashboard/bundles/c3.bundle.js') }}></script>
    <script src={{ asset('Dashboard/bundles/mainscripts.bundle.js') }}></script>
    <script src={{ asset('Dashboard/js/pages/index.js') }}></script>

    {{-- Dashboard scripts --}}

</body>

</html>
