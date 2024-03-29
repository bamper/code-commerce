@extends('store.store')

@section('categories')
    @include('store.partial.categories')
@stop

@section('content')
    <div class="col-sm-9 padding-right">
        <div class="product-details"><!--product-details-->
            <div class="col-sm-5">
                <div class="view-product">
                    @if(count($product->images))
                        <img src="{{ url('/uploads/'.$product->images->first()->id . '.' . $product->images->first()->extension) }}"
                             alt="{{ $product->name }}" width="300" height="300"/>
                    @else
                        <img src="{{ url('images/no-img.png') }}" alt="{{ $product->name }}" width="200"/>
                    @endif
                </div>
                <div id="similar-product" class="carousel slide" data-ride="carousel">
                    <!-- Wrapper for slides -->
                    <div class="carousel-inner">
                        <div class="item active">
                            @foreach($product->images as $image)
                                <a href="#"><img src="{{ url('uploads/' . $image->id . '.' . $image->extension) }}"
                                                 alt="" width="80"></a>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-7">
                <div class="product-information"><!--/product-information-->
                    <h2>{{ $product->name }}</h2>

                    <p>{{ $product->description }}</p>
                <span>
                    <span>R$ {{ number_format($product->price, 2, ',', '.') }}</span>
                    <a href="{{ route('cart.add', ['id' => $product->id]) }}" class="btn btn-fefault cart">
                        <i class="fa fa-shopping-cart"></i>
                        Adicionar no Carrinho
                    </a>
                </span>
                </div><!--/product-information-->
                <div class="tags-list">
                    <div class="row">
                        @foreach($product->tags as $tag)
                            <div class="col-md-12">
                                <div class="bootstrap-tagsinput">
                                    <a href="{{ route('store.product.tag', $tag->id) }}" class="pull-right">
                                        <span class="tag label label-primary"><span class="fa fa-tags"> </span> {{ $tag->name }}</span></a>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div><!--/product-details-->
    </div>
@stop