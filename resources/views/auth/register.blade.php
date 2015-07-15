@extends('store.store')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-primary">
                    <div class="panel-heading panel-title"><span class="fa fa-user-plus"></span> Registrar nova conta</div>
                    <div class="panel-body">
                        @if (count($errors) > 0)
                            <div class="alert alert-danger">
                                <strong>Ops!</strong> Houve algum problema com o seu registro.<br><br>
                                <ul>
                                    @foreach ($errors->all() as $error)
                                        <li>{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif

                        <br>

                        <form class="form form-horizontal" role="form" data-toggle="validator" method="POST" action="{{ url('/auth/register') }}">
                            <input type="hidden" name="_token" value="{{ csrf_token() }}">

                            <div class="form-group">
                                <label class="col-md-3 control-label">Nome</label>

                                <div class="col-md-7">
                                    <input type="text" class="form-control" name="name" value="{{ old('name') }}" data-error="O nome é obrigatório" required>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-3 control-label">E-Mail</label>

                                <div class="col-md-7">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                                        <input type="email" class="form-control" name="email" value="{{ old('email') }}" data-error="O e-mail é obrigatório" required>
                                    </div>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-3 control-label">Senha</label>

                                <div class="col-md-7">
                                    <div class="input-group">
                                        <span class="input-group-addon">&nbsp<i class="fa fa-unlock-alt"></i></span>
                                        <input type="password" class="form-control" name="password" data-error="A senha é obrigatória" required>
                                    </div>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-3 control-label">Confirmar Senha</label>

                                <div class="col-md-7">
                                    <div class="input-group">
                                        <span class="input-group-addon">&nbsp<i class="fa fa-unlock-alt"></i></span>
                                        <input type="password" class="form-control" name="password_confirmation" data-error="A confirmação de senha é obrigatória" required>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-8 control-label sub-title">DADOS DE ENTREGA / COBRANÇA</label>

                                <div class="col-md-2">
                                    <div class="clearfix"></div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-3 control-label">Endereço</label>

                                <div class="col-md-7">
                                    <input type="text" class="form-control" name="address" value="{{ old('address') }}" data-error="O endereço é obrigatório" required>
                                    <div class="help-block with-errors"></div>
                                </div>


                            </div>

                            <div class="form-group">
                                <label class="col-md-3 control-label">Número</label>

                                <div class="col-md-2">
                                    <input type="text" class="form-control" name="number" value="{{ old('number') }}" required>
                                </div>

                                <label class="col-md-1 control-label">Bairro</label>
                                <div class="form-group col-md-4">
                                    <input type="text" class="form-control" name="neigbh" value="{{ old('neigbh') }}">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-3 control-label">Cidade</label>

                                <div class="col-md-4">
                                    <input type="text" class="form-control" name="city" value="{{ old('city') }}" required>
                                </div>

                                <label class="col-md-1 control-label">UF</label>

                                <div class="form-group col-md-2">
                                    <select name="state" class="form-control combobox" required>
                                        <option></option>
                                        <option value="AC">AC</option>
                                        <option value="AL">AL</option>
                                        <option value="AP">AP</option>
                                        <option value="AM">AM</option>
                                        <option value="BA">BA</option>
                                        <option value="CE">CE</option>
                                        <option value="DF">DF</option>
                                        <option value="ES">ES</option>
                                        <option value="GO">GO</option>
                                        <option value="MA">MA</option>
                                        <option value="MT">MT</option>
                                        <option value="MS">MS</option>
                                        <option value="MG">MG</option>
                                        <option value="PA">PA</option>
                                        <option value="PB">PB</option>
                                        <option value="PR">PR</option>
                                        <option value="PE">PE</option>
                                        <option value="PI">PI</option>
                                        <option value="RJ">RJ</option>
                                        <option value="RN">RN</option>
                                        <option value="RS">RS</option>
                                        <option value="RO">RO</option>
                                        <option value="RR">RR</option>
                                        <option value="SC">SC</option>
                                        <option value="SP">SP</option>
                                        <option value="SE">SE</option>
                                        <option value="TO">TO</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-3 control-label">CEP</label>
                                <div class="col-md-2">
                                    <input type="text" class="form-control" name="zip" value="{{ old('zip') }}" required>
                                </div>
                            </div>
                            <br>
                            <div class="form-group">
                                <label class="col-md-3 control-label">Telefone</label>
                                <div class="col-md-3">
                                    <input type="text" class="form-control" name="phone" value="{{ old('phone') }}">
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-7 col-md-offset-3">
                                    <button type="submit" class="btn btn-primary form-control">
                                        <span class="fa fa-user-plus"></span> Enviar Registro
                                    </button>
                                    <hr>
                                    <a href="{{ url('auth/login') }}" class="btn btn-default form-control">
                                        <span class="fa fa-arrow-left"></span> Ops, já tenho login <span class="fa fa-smile-o"></span></a>
                                    <br><br>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
    <br>
    <br>
@endsection
@section('script')
    <script>
        $(document).ready(function() {

            $('.form').validator({
                html: true,
                disable: false
            });

            $('.combobox').val('{{ old('state') }}');
        });
    </script>
@endsection
