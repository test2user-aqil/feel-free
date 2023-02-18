<form action="?/createArticle" method="POST">
	<h3>New Article</h3>
	<label for="id"> Id </label>
	<input type="text" id="id" name="id" />
	<label for="title"> Title </label>
	<input type="text" id="title" name="title" />
	<label for="title"> Content </label>
	<textarea id="content" name="content" rows={5} />
	<button type="submit">Publish Article</button>
</form>
