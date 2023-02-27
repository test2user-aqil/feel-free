<script lang="ts">
	import type { PageData } from './$types';
	import '../app.css';

	export let data: PageData;
</script>

<div>
	<nav
		class="w-full h-14 flex justify-between items-center p-3 md:px-14 bg-black text-slate-200 border-b border-b-indigo-500"
	>
		<a href="/" class="flex items-center gap-2">
			<img src="/icon.svg" alt="Icon" />
			<img src="/logo.svg" alt="Logo" />
		</a>
		<ul>
			<form method="POST" class="flex flex-row md:gap-4 gap-2 items-center">
				{#if !data.user}
					<li><a href="/login" role="button" class="btn-secondary">Login</a></li>
					<li><a href="/register" class="btn-primary">Register</a></li>
				{:else}
					<li><button formaction="/logout" type="submit" class="btn-secondary"> Logout</button></li>
					<li>
						<a href="/new" class="btn-primary">Create New</a>
					</li>
				{/if}
			</form>
		</ul>
	</nav>
	<div>
		<main class="max-w-4xl mx-auto flex flex-col gap-2">
			<slot />
		</main>
	</div>
</div>
