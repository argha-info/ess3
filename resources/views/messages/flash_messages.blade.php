@if (Session::has('success'))
<div class="alert alert-success full float-none" id="successMessage">{{ Session::get('success') }}
</div>
@elseif (Session::has('status'))
<div class="alert alert-success" id="statusMessage" role="alert">{{ session('status') }}</div>
@elseif (Session::has('error'))
<div class="alert alert-danger full float-none" id="errorMessage">{{ Session::get('error') }}
</div>
@endif
@if ($errors->any())
<div class="alert alert-danger full float-none" id="displayErrorMessage">
	<ul>
		@foreach ($errors->all() as $error)
		<li>{{ $error }}</li>
		@endforeach
	</ul>
</div>
@endif