@extends('layouts.auth')

@section('content')
    <div class="row mt-6">
        <div class="col  l4 offset-l4 m6 offset-m3 s12 ">
            <div class="card">
                <div class="card-content">
                    <h5 class="center">Acceder</h5>
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="row">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">mail</i>
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
                        <div class="row">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">lock_outline</i>
                                <input id="password" type="password" class=" @error('password') error @enderror" name="password" required autocomplete="current-password">
                                @error('password')
                                <div>
                                    <small class="error-auth" role="alert">
                                        {{ $message }}
                                    </small>
                                </div>
                                @enderror
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12 center">
                                <button class="btn cyan waves-effect waves-light" type="submit" name="action">
                                    <i class="material-icons left">lock_open</i> Ingresa
                                </button>
                            </div>
                            <div>
                                @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
