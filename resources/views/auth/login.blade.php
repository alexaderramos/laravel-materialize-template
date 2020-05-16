@extends('layouts.auth')

@section('content')
    <div id="login-page" class="row">
        <div class="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
            <form class="login-form" method="POST" action="{{ route('login') }}" >
                @csrf
                <div class="row">
                    <div class="input-field col s12">
                        <h5 class="ml-4">Acceder</h5>
                    </div>
                </div>
                <div class="row margin">
                    <div class="input-field col s12">
                        <i class="material-icons prefix pt-2">person_outline</i>
                        <input id="email" type="email" class="@error('email') error @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                        @error('email')
                        <div class="alert-error-auth">
                            <small class="error-auth" role="alert">
                                {{ $message }}
                            </small>
                        </div>
                        @enderror
                        <label for="email">Email</label>
                    </div>
                </div>
                <div class="row margin">
                    <div class="input-field col s12">
                        <i class="material-icons prefix pt-2">lock_outline</i>
                        <input id="password" type="password" class=" @error('password') error @enderror" name="password" required autocomplete="current-password">
                        @error('password')
                        <div>
                            <small class="error-auth" role="alert">
                                {{ $message }}
                            </small>
                        </div>
                        @enderror
                        <label for="password">Contraseña</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12 m12 l12 ml-2 mt-1">
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span>Recuerdame</span>
                            </label>
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <button type="submit" class="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12">Ingresar</button>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6 m6 l6">
                        <p class="margin medium-small"><a href="{{route('register')}}">Registrar ahora</a></p>
                    </div>
                    <div class="input-field col s6 m6 l6">
                        <p class="margin right-align medium-small"><a href="{{route('password.request')}}">¿Olvidaste tu contraseña?</a></p>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection
