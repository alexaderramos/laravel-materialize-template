import PerfectScrollbar from "perfect-scrollbar";

var sidenavMain = $(".sidenav-main"),
    contentOverlay = $(".content-overlay"),
    navCollapsible = $(".navbar .nav-collapsible"),
    breadcrumbsWrapper = $("#breadcrumbs-wrapper");

function defaultMenuCollapse() {
    $("body").hasClass("menu-collapse") && 993 < $(window).width() && (sidenavMain.removeClass("nav-lock"), $(".nav-collapsible .navbar-toggler i").text("radio_button_unchecked"), navCollapsible.removeClass("sideNav-lock"), toogleMenuCollapse(), navigationCollapse())
}

function toogleMenuCollapse() {
    sidenavMain.hasClass("nav-expanded") && !sidenavMain.hasClass("nav-lock") && sidenavMain.toggleClass("nav-expanded"), $("#main").toggleClass("main-full")
}

function navigationCollapse() {
    if (!$(".sidenav-main.nav-collapsible").hasClass("nav-lock")) {
        var n = $(".collapsible .open").children().length;
        $(".sidenav-main.nav-collapsible, .navbar .nav-collapsible").addClass("nav-collapsed").removeClass("nav-expanded"), $("#slide-out > li.open > a").parent().addClass("close").removeClass("open"), setTimeout(function() {
            if (1 < n) {
                var e = $(".sidenav-main .collapsible");
                M.Collapsible.getInstance(e).close($(".collapsible .close").index())
            }
        }, 100)
    }
}

function slideOutChat() {
    var e = $(".search").val();
    if ("" != e) {
        var n = '<li class="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat"><div class="user-content speech-bubble-right"><p class="medium-small">' + e + "</p></div></li>";
        $("#right-sidebar-nav #slide-out-chat .chat-body .collection").append(n), $(".search").val("");
        var a = $("#right-sidebar-nav #slide-out-chat .chat-body .collection");
        0 < a.length && (a[0].scrollTop = a[0].scrollHeight)
    }
}
defaultMenuCollapse(), $(window).on("load", function() {
    $("body").removeClass("preload-transitions")
}), $(function() {
    "use strict";

    function e() {
        var e = " -webkit- -moz- -o- -ms- ".split(" "),
            n = function(e) {
                return window.matchMedia(e).matches
            };
        return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) || n(["(", e.join("touch-enabled),("), "heartz", ")"].join(""))
    }
    $(".tabs").tabs(), $(".datepicker").datepicker({
        autoClose: !0,
        format: "dd/mm/yyyy",
        container: "body",
        onDraw: function() {
            $(".datepicker-container").find(".datepicker-select").addClass("browser-default"), $(".datepicker-container .select-dropdown.dropdown-trigger").remove()
        }
    }), $("#tabs-swipe-demo").length && $("#tabs-swipe-demo").tabs({
        swipeable: !0
    }), $("select").formSelect();
    var n = document.getElementById("indeterminate-checkbox");
    null !== n && (n.indeterminate = !0), $(".slider").slider({
        full_width: !0
    }), $(".dropdown-trigger").dropdown(), $(".dropdown-button").dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: !1,
        hover: !0,
        gutter: 0,
        coverTrigger: !0,
        alignment: "left"
    }), $(".notification-button, .profile-button, .translation-button, .dropdown-settings").dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: !1,
        hover: !1,
        gutter: 0,
        coverTrigger: !1,
        alignment: "right",
        hover: !1,
        closeOnClick: !0
    }), $(".dropdown-menu").dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: !1,
        hover: !1,
        gutter: 0,
        coverTrigger: !1,
        alignment: "right",
        hover: !1,
        closeOnClick: !1
    }), $(".dropdownSub-menu").dropdown({
        closeOnClick: !1,
        constrainWidth: !1,
        alignment: "left",
        inDuration: 300,
        outDuration: 225,
        gutter: 0,
        coverTrigger: !0,
        hover: !0
    }), $(".dropdown-submenu").on("mouseenter", function() {
        var e = $(this);
        $(this).find(".dropdownSub-menu").dropdown("open");
        var n = e.find(".dropdown-content");
        if (n) {
            var a = n.offset().left,
                l = n.width();
            0 < $("html[data-textdirection='rtl']").length ? l <= a ? e.find(".dropdown-content").removeClass("right-open").addClass("left-open") : e.find(".dropdown-content").removeClass("left-open").addClass("right-open") : window.innerWidth - (a + l) <= l ? e.find(".dropdown-content").removeClass("left-open").addClass("right-open") : e.find(".dropdown-content").removeClass("right-open").addClass("left-open")
        }
    }), $(".dropdown-submenu").on("mouseleave", function() {
        var e = $(this);
        e.find(".dropdownSub-menu").dropdown("close"), e.find(".dropdown-content").removeClass("right-open"), e.find(".dropdown-content").removeClass("left-open")
    }), $(".fixed-action-btn").floatingActionButton(), $(".fixed-action-btn.horizontal").floatingActionButton({
        direction: "left"
    }), $(".fixed-action-btn.click-to-toggle").floatingActionButton({
        direction: "left",
        hoverEnabled: !1
    }), $(".fixed-action-btn.toolbar").floatingActionButton({
        toolbarEnabled: !0
    }), $(".tab-demo").show().tabs(), $(".tab-demo-active").show().tabs(), $(".scrollspy").scrollSpy(), $(".tooltipped").tooltip({
        delay: 50
    });
    var a = document.querySelectorAll(".collapsible");
    M.Collapsible.init(a);
    var l = document.querySelector(".collapsible.expandable");
    M.Collapsible.init(l, {
        accordion: !1
    });
    if (breadcrumbsWrapper.attr("data-image")) {
        var o = breadcrumbsWrapper.attr("data-image");
        breadcrumbsWrapper.addClass("breadcrumbs-bg-image"), breadcrumbsWrapper.css("background-image", "url(" + o + ")")
    }
    var t, i = $("li.active .collapsible-sub .collapsible"),
        s = document.querySelectorAll(".sidenav-main .collapsible");
    if (M.Collapsible.init(s, {
        accordion: !0,
        onOpenStart: function() {
            $(".collapsible > li.open").removeClass("open"), setTimeout(function() {
                $("#slide-out > li.active > a").parent().addClass("open")
            }, 10)
        }
    }), $("body").hasClass("menu-collapse")) {
        var d = $(".sidenav-main .collapsible");
        1 < $("#slide-out > li.active").children().length && $("#slide-out > li.active > a").parent().addClass("close"), M.Collapsible.getInstance(d).close($(".collapsible .close").index())
    } else 1 < $("#slide-out > li.active").children().length && $("#slide-out > li.active > a").parent().addClass("open");
    if (0 < i.find("a.active").length && (i.find("a.active").closest("div.collapsible-body").show(), i.find("a.active").closest("div.collapsible-body").closest("li").addClass("active")), t = 0 < $(".sidenav-main li a.active").parent("li.active").parent("ul.collapsible-sub").length ? $(".sidenav-main li a.active").parent("li.active").parent("ul.collapsible-sub").position() : $(".sidenav-main li a.active").parent("li.active").position(), setTimeout(function() {
        void 0 !== t && $(".sidenav-main ul").stop().animate({
            scrollTop: t.top - 300
        }, 300)
    }, 300), $(".nav-collapsible .navbar-toggler").click(function() {
        toogleMenuCollapse(), "radio_button_unchecked" == $(this).children().text() ? ($(this).children().text("radio_button_checked"), sidenavMain.addClass("nav-lock"), navCollapsible.addClass("sideNav-lock")) : ($(this).children().text("radio_button_unchecked"), sidenavMain.removeClass("nav-lock"), navCollapsible.removeClass("sideNav-lock"))
    }), $(".sidenav-main.nav-collapsible, .navbar .brand-sidebar").mouseenter(function() {
        $(".sidenav-main.nav-collapsible").hasClass("nav-lock") || ($(".sidenav-main.nav-collapsible, .navbar .nav-collapsible").addClass("nav-expanded").removeClass("nav-collapsed"), $("#slide-out > li.close > a").parent().addClass("open").removeClass("close"), setTimeout(function() {
            if (1 < $(".collapsible .open").children().length) {
                var e = $(".sidenav-main .collapsible");
                M.Collapsible.getInstance(e).open($(".collapsible .open").index())
            }
        }, 100))
    }), $(".sidenav-main.nav-collapsible, .navbar .brand-sidebar").mouseleave(function() {
        navigationCollapse()
    }), $(".sidenav").sidenav({
        edge: "left"
    }), $(".slide-out-right-sidenav").sidenav({
        edge: "right"
    }), $(".slide-out-right-sidenav-chat").sidenav({
        edge: "right"
    }), e()) $(".leftside-navigation,.slide-out-right-body, .chat-body .collection, #ul-horizontal-nav").css("overflow", "scroll");
    else {
        if (0 < $("#slide-out.leftside-navigation").length && !$("#slide-out.leftside-navigation").hasClass("native-scroll")) new PerfectScrollbar(".leftside-navigation", {
            wheelSpeed: 2,
            wheelPropagation: !1,
            minScrollbarLength: 20
        });
        if (0 < $(".slide-out-right-body").length) new PerfectScrollbar(".slide-out-right-body, .chat-body .collection", {
            suppressScrollX: !0,
            wheelPropagation: !1
        });
        if (0 < $(".chat-body .collection").length) new PerfectScrollbar(".chat-body .collection", {
            suppressScrollX: !0
        });
        if (0 < $("#ul-horizontal-nav").length) var c = new PerfectScrollbar("#ul-horizontal-nav", {
            wheelPropagation: !1
        });
        $("#ul-horizontal-nav").on("mouseenter", function() {
            c.update()
        })
    }
    $("#messages .header-search-input").on("keyup", function() {
        $(".chat-user").css("animation", "none");
        var e = $(this).val().toLowerCase();
        "" != e ? $(".right-sidebar-chat .right-sidebar-chat-item").filter(function() {
            $(this).toggle(-1 < $(this).text().toLowerCase().indexOf(e))
        }) : $(".right-sidebar-chat .right-sidebar-chat-item").show()
    });
    var r = $("#right-sidebar-nav #slide-out-chat .chat-body .collection");

    function e() {
        try {
            return document.createEvent("TouchEvent"), !0
        } catch (e) {
            return !1
        }
    }
    0 < r.length && (r[0].scrollTop = r[0].scrollHeight), $(".toggle-fullscreen").click(function() {
        document.fullScreenElement && null !== document.fullScreenElement || !document.mozFullScreen && !document.webkitIsFullScreen ? document.documentElement.requestFullScreen ? document.documentElement.requestFullScreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullScreen ? document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : document.documentElement.msRequestFullscreen && (document.msFullscreenElement ? document.msExitFullscreen() : document.documentElement.msRequestFullscreen()) : document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
    }), e() && $("#nav-mobile").css({
        overflow: "auto"
    }), i18next.use(window.i18nextXHRBackend).init({
        debug: !1,
        fallbackLng: "en",
        backend: {
            loadPath: "../../../app-assets/data/locales/{{lng}}.json"
        },
        returnObjects: !0
    }, function(e, n) {
        jqueryI18next.init(i18next, $)
    }), $(".dropdown-language .dropdown-item").on("click", function() {
        var e = $(this);
        e.siblings(".selected").removeClass("selected"), e.addClass("selected");
        var n = e.find(".flag-icon").attr("class");
        $(".translation-button .flag-icon").removeClass().addClass(n);
        var a = e.find("a").data("language");
        i18next.changeLanguage(a, function(e, n) {
            $(".sidenav-main, #horizontal-nav").localize()
        })
    }), 0 < $("#ul-horizontal-nav li.active").length && $("#ul-horizontal-nav li.active").closest("ul").parents("li").addClass("active"), 0 < $("html[data-textdirection='rtl']").length && ($(".sidenav").sidenav({
        edge: "right"
    }), $(".slide-out-right-sidenav").sidenav({
        edge: "left"
    }), $(".slide-out-right-sidenav-chat").sidenav({
        edge: "left"
    }))
}), $(window).on("resize", function() {
    $(window).width() < 994 ? sidenavMain.hasClass("nav-collapsed") && (sidenavMain.removeClass("nav-collapsed").addClass("nav-lock nav-expanded"), navCollapsible.removeClass("nav-collapsed").addClass("sideNav-lock")) : 993 < $(window).width() && $("body").hasClass("menu-collapse") && sidenavMain.hasClass("nav-lock") && (sidenavMain.removeClass("nav-lock nav-expanded").addClass("nav-collapsed"), navCollapsible.removeClass("sideNav-lock").addClass("nav-collapsed"))
});



var searchListLi=$(".search-list li"),searchList=$(".search-list"),searchSm=$(".search-sm"),searchBoxSm=$(".search-input-sm .search-box-sm"),searchListSm=$(".search-list-sm");$(function(){"use strict";if($(".header-search-input").focus(function(){$(this).parent("div").addClass("header-search-wrapper-focus")}).blur(function(){$(this).parent("div").removeClass("header-search-wrapper-focus")}),$(".search-button").click(function(e){searchSm.is(":hidden")?(searchSm.show(),searchBoxSm.focus()):(searchSm.hide(),searchBoxSm.val(""))}),$(".search-input-sm").on("click",function(){searchBoxSm.focus()}),$(".search-sm-close").click(function(e){searchSm.hide(),searchBoxSm.val("")}),0<$(".search-list").length)var e=new PerfectScrollbar(".search-list",{wheelSpeed:2,wheelPropagation:!1,minScrollbarLength:20});if(0<searchListSm.length)var s=new PerfectScrollbar(".search-list-sm",{wheelSpeed:2,wheelPropagation:!1,minScrollbarLength:20});var a=$(".header-search-wrapper .header-search-input,.search-input-sm .search-box-sm").data("search");$(".search-sm-close").on("click",function(){searchBoxSm.val(""),searchBoxSm.blur(),searchListLi.remove(),searchList.addClass("display-none"),contentOverlay.hasClass("show")&&contentOverlay.removeClass("show")}),contentOverlay.on("click",function(){searchListLi.remove(),contentOverlay.removeClass("show"),searchSm.hide(),searchBoxSm.val(""),searchList.addClass("display-none"),$(".search-input-sm .search-box-sm, .header-search-input").val("")}),$(".header-search-wrapper .header-search-input, .search-input-sm .search-box-sm").on("keyup",function(e){contentOverlay.addClass("show"),searchList.removeClass("display-none");var s=$(this);if(38!==e.keyCode&&40!==e.keyCode&&13!==e.keyCode){27==e.keyCode&&(contentOverlay.removeClass("show"),s.val(""),s.blur());var t=$(this).val().toLowerCase();if($("ul.search-list li").remove(),""!=t){var i="",c="",l="",n=0;$.getJSON("../../../app-assets/data/"+a+".json",function(e){for(var s=0;s<e.listItems.length;s++)(0==e.listItems[s].name.toLowerCase().indexOf(t)&&n<4||0!=e.listItems[s].name.toLowerCase().indexOf(t)&&-1<e.listItems[s].name.toLowerCase().indexOf(t)&&n<4)&&(i+='<li class="auto-suggestion '+(0===n?"current_item":"")+'"><a class="collection-item" href='+e.listItems[s].url+'><div class="display-flex"><div class="display-flex align-item-center flex-grow-1"><span class="material-icons" data-icon="'+e.listItems[s].icon+'">'+e.listItems[s].icon+'</span><div class="member-info display-flex flex-column"><span class="black-text">'+e.listItems[s].name+'</span><small class="grey-text">'+e.listItems[s].category+"</small></div></div></div></a></li>",n++);""==i&&""==c&&(c=$("#search-not-found").html());var a=$("#page-search-title").html(),r=$("#default-search-main").html();l=a.concat(i,c,r),$("ul.search-list").html(l)})}else contentOverlay.hasClass("show")&&(contentOverlay.removeClass("show"),searchList.addClass("display-none"))}$(".header-search-wrapper .current_item").length&&(searchList.scrollTop(0),searchList.scrollTop($(".search-list .current_item:first").offset().top-searchList.height())),$(".search-input-sm .current_item").length&&(searchListSm.scrollTop(0),searchListSm.scrollTop($(".search-list-sm .current_item:first").offset().top-searchListSm.height()))}),$("#navbarForm").on("submit",function(e){e.preventDefault()}),$(window).on("keydown",function(e){var s,a,r=$(".search-list li.current_item");if(40===e.keyCode?(s=r.next(),r.removeClass("current_item"),r=s.addClass("current_item")):38===e.keyCode&&(a=r.prev(),r.removeClass("current_item"),r=a.addClass("current_item")),13===e.keyCode&&0<$(".search-list li.current_item").length){var t=$("li.current_item a");window.location=$("li.current_item a").attr("href"),$(t).trigger("click")}}),searchList.mouseenter(function(){0<$(".search-list").length&&e.update(),0<searchListSm.length&&s.update()}),$(document).on("mouseenter",".search-list li",function(e){$(this).siblings().removeClass("current_item"),$(this).addClass("current_item")}),$(document).on("click",".search-list li",function(e){e.stopPropagation()})}),$(window).on("resize",function(){$(window).width()<992&&($(".header-search-input").val(""),$(".header-search-input").closest(".search-list li").remove()),993<$(window).width()&&(searchSm.hide(),searchBoxSm.val(""),$(".search-input-sm .search-box-sm").val(""))});
