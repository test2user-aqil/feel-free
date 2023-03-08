<svelte:head>
	<title>New Article &bull; Feel Free</title>
</svelte:head>

<form
	action="?/createArticle"
	method="POST"
	autocomplete="off"
	class="flex flex-col md:px-5 px-3 gap-5"
>
	<h3 class="font-semibold text-2xl text-center mt-4">New Article</h3>

	<div class="flex flex-col gap-3">
		<div class="grid md:grid-cols-2 gap-3">
			<div class="flex md:items-center flex-col md:flex-row md:gap-3 gap-1">
				<label for="id"> Id </label>
				<input type="text" id="id" name="id" class="input grow" />
			</div>
			<div class="flex md:items-center flex-col md:flex-row md:gap-3 gap-1">
				<label for="title"> Title </label>
				<input type="text" id="title" name="title" class="input grow" />
			</div>
		</div>
		<div class="flex items-stretch flex-col gap-1">
			<label for="description"> Description </label>
			<input type="text" id="description" name="description" class="input" />
		</div>
		<div class="flex items-stretch flex-col gap-1">
			<label for="content" class="mt-1"> Content </label>
			<textarea id="content" name="content" rows={5} class="input w-full" />
		</div>
	</div>

	<div class="flex justify-between items-center gap-2">
		<a href="/" class="btn-danger-bordered sm:flex-1 text-center">Cancel</a>
		<button type="submit" class="btn-primary sm:flex-1">Publish Article</button>
	</div>
</form>
