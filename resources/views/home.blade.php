@extends('layouts.template')

@section('breadcrumb')
    @component('layouts.components.breadcrumb')
        @slot('currentPage','Home')
    @endcomponent
@endsection

@section('content')
        <div class="section">
            <div class="card">
                <div class="card-content">
                    <p class="caption mb-0">
                        Estas logeado
                    </p>
                </div>
            </div>
        </div><!-- START RIGHT SIDEBAR NAV -->

@endsection
