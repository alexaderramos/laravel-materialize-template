<li class="navigation-header"><a class="navigation-header-text">Principal</a><i class="navigation-header-icon material-icons">more_horiz</i>
</li>
<li class="{{Route::is('home')?'active':''}} bold">
    <a class="waves-effect waves-cyan {{Route::is('home')?'active':''}}" href="{{route('home')}}">
        <i class="material-icons">home</i><span class="menu-title" >Home</span>
    </a>
</li>

<li class="navigation-header"><a class="navigation-header-text">Pages </a><i class="navigation-header-icon material-icons">more_horiz</i>
</li>
<li class="bold"><a class="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)"><i class="material-icons">content_paste</i><span class="menu-title" data-i18n="Pages">Pages</span></a>
    <div class="collapsible-body">
        <ul class="collapsible collapsible-sub" data-collapsible="accordion">

            <li class=""><a class="" href="page-blank.html"><i class="material-icons">radio_button_unchecked</i><span data-i18n="Page Blank">Page Blank</span></a>
            </li>
            <li><a href="page-collapse.html"><i class="material-icons">radio_button_unchecked</i><span data-i18n="Page Collapse">Page Collapse</span></a>
            </li>
        </ul>
    </div>
</li>
