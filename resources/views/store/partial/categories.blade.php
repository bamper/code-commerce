
@section('categories')
<div class="col-sm-3">
    <div class="left-sidebar">
        <h2>Categorias</h2>
        <!--category-products-->
        <div class="panel-group category-products" id="accordian">

            @foreach($categories as $category)
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title"><a href="{{ route('store.category', $category->id) }}">{{ $category->name }}</a></h4>
                </div>
            </div>
            @endforeach

        </div>
        <!--/category-products-->
    </div>
</div>
@stop
