<div class="col s10 m6 l6 breadcrumbs-left">
    <h5 class="breadcrumbs-title mt-0 mb-0"><span>{{ $currentPage }}</span></h5>
    <ol class="breadcrumbs mb-0">
        {{$links ?? ''}}
        <li class="breadcrumb-item active">{{$currentPage}}</li>
    </ol>

</div>
