<script lang="ts">
	import { formatRelative } from 'date-fns';
	export let id: string;
	export let title: string;
	export let description = '';
	export let date: Date;
	export let author = '';
	export let username = '';

	let formattedDate = formatRelative(date, new Date());
	formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
</script>

<div
	class="bg-black flex flex-col justify-between h-auto rounded-xl drop-shadow-xl border border-dark-900"
>
	<div class="p-4">
		<a href={`/a/${id}`} class="font-serif font-semibold text-2xl hover:text-sky-200"> {title} </a>
	</div>

	<p class="py-2 px-4 text-sm">
		{description ? description : ''}
	</p>

	<div class="border-t border-dark-800 py-2 px-4 flex justify-between items-center">
		<p class="text-sm">{formattedDate}</p>
		<a href={`/u/${username}`} class="font-semibold underline hover:text-sky-300">{author}</a>
	</div>
</div>
