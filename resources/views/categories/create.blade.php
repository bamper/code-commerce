@extends('layout.default')

@section('title', 'Categories')

@section('content')
    <div class="content">
        {!! Form::open(['route' => 'categories.store']) !!}
        <div class="row">
            <div class="col-lg-10 col-lg-offset-1">
                <legend>New Category</legend>
                <br>
            </div>
            <div class="col-lg-10 col-lg-offset-1">
                @if ($errors->any())
                    <div class="alert alert-danger fade in">
                        <a href="#" class="close" data-dismiss="alert">&times;</a>
                        <strong>Error!</strong>
                        <ul class="alert">
                            @foreach($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
                <div class="form-group">
                    {!! Form::label('name', 'Name') !!}
                    {!! Form::text('name', null, ['class' => 'form-control', 'placeholder' => 'Category name']) !!}
                </div>
                <div class="form-group">
                    {!! Form::label('description', 'Description') !!}
                    {!! Form::textarea('description', null, ['class' => 'form-control', 'placeholder' => 'Category description']) !!}
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 col-md-offset-7 col-lg-2 col-lg-offset-7">
                {!! Form::submit('Add Category', ['class' => 'btn btn-success form-control']) !!}
            </div>
        </div>
        {!! Form::close() !!}
    </div>
@endsection