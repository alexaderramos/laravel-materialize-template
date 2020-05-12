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
                        Sample blank page for getting start!! Created and designed by Google, Material Design is a design
                        language that combines the classic principles of successful design along with innovation and
                        technology.
                    </p>
                </div>
            </div>
        </div><!-- START RIGHT SIDEBAR NAV -->

@endsection
