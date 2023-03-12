<script lang="ts">
	import type { PageData, ActionData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	let title = data.article?.title;
	let description = data.article?.description;
	let content = data.article?.content;
</script>

<svelte:head>
	<title>Edit Article &bull; Feel Free</title>
</svelte:head>

<form
	action="?/updateArticle"
	method="POST"
	autocomplete="off"
	class="flex flex-col md:px-5 px-3 py-5 gap-5 article-form"
>
	<h3 class="font-semibold text-2xl text-center mt-4">Update Article</h3>

	<div class="flex flex-col gap-3">
		<!-- Error Messages -->
		{#if form?.errors?.title}
			<span class="err-msg">{form?.errors?.title[0]}</span>
		{/if}
		{#if form?.errors?.description}
			<span class="err-msg">{form?.errors?.description[0]}</span>
		{/if}
		{#if form?.errors?.content}
			<span class="err-msg">{form?.errors?.content[0]}</span>
		{/if}
		<!-- Inputs -->

		<!-- Title Input -->
		<div class="flex items-stretch flex-col gap-1">
			<label for="title"> Title </label>
			<input type="text" id="title" name="title" class="input grow" bind:value={title} />
		</div>

		<!-- Description Input -->
		<div class="flex items-stretch flex-col gap-1">
			<label for="description"> Description </label>
			<input
				type="text"
				id="description"
				name="description"
				class="input"
				bind:value={description}
			/>
		</div>

		<!-- Content Input -->
		<div class="flex items-stretch flex-col gap-1 relative">
			<label for="content" class="mt-1"> Content </label>
			<textarea
				id="content"
				name="content"
				rows={7}
				class="input w-full font-mono"
				bind:value={content}
			/>
			<span class="absolute bottom-1 right-4 font-mono font-bold text-xs text-white/30 select-none"
				>MD Supported</span
			>
		</div>
	</div>

	<!-- Submit Buttons -->
	<div class="flex justify-between items-center gap-2">
		<form action="?/deleteArticle" method="POST" class="flex justify-items-stretch sm:flex-1">
			<button type="submit" class="btn-danger-bordered text-center flex-1">Delete Aritcle</button>
		</form>
		<a href="/" class="btn-danger-bordered sm:flex-1 text-center">Cancel</a>
		<button type="submit" class="btn-primary sm:flex-1">Apply Changes</button>
	</div>
</form>
