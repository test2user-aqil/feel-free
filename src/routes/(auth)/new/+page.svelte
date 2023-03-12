<script lang="ts">
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<svelte:head>
	<title>New Article &bull; Feel Free</title>
</svelte:head>

<form
	action="?/createArticle"
	method="POST"
	autocomplete="off"
	class="flex flex-col md:px-5 px-3 py-5 gap-5 article-form"
>
	<h3 class="font-semibold text-2xl text-center mt-4">New Article</h3>

	<div class="flex flex-col gap-3">
		<!-- Error Messages -->
		{#if form?.errors?.id}
			<span class="err-msg">{form?.errors?.id[0]}</span>
		{/if}
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
		<div class="grid md:grid-cols-2 gap-3">
			<!-- Id Input -->
			<div class="flex md:items-center flex-col md:flex-row md:gap-3 gap-1">
				<label for="id"> Id </label>
				<input type="text" id="id" name="id" class="input grow" value={form?.data?.id ?? ''} />
			</div>

			<!-- Title Input -->
			<div class="flex md:items-center flex-col md:flex-row md:gap-3 gap-1">
				<label for="title"> Title </label>
				<input
					type="text"
					id="title"
					name="title"
					class="input grow"
					value={form?.data?.title ?? ''}
				/>
			</div>
		</div>

		<!-- Description Input -->
		<div class="flex items-stretch flex-col gap-1">
			<label for="description"> Description </label>
			<input
				type="text"
				id="description"
				name="description"
				class="input"
				value={form?.data?.description ?? ''}
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
				value={form?.data?.content ?? ''}
			/>
			<span class="absolute bottom-1 right-4 font-mono font-bold text-xs text-white/30 select-none"
				>MD Supported</span
			>
		</div>
	</div>

	<!-- Submit Buttons -->
	<div class="flex justify-between items-center gap-2">
		<a href="/" class="btn-danger-bordered sm:flex-1 text-center">Cancel</a>
		<button type="submit" class="btn-primary sm:flex-1">Publish Article</button>
	</div>
</form>
