<script lang="ts">
	import type { PageData } from './$types';
	import '../app.css';

	export let data: PageData;
</script>

<div>
	<nav>
		<ul>
			<li>
				<strong>
					<a href="/"> Feel-Free </a>
				</strong>
			</li>
		</ul>
		<ul>
			<form method="POST">
				<li><a href="/">Home</a></li>
				{#if !data.user}
					<li><a href="/register">Register</a></li>
					<li><a href="/login" role="button">Login</a></li>
				{:else}
					<li><button formaction="/logout" type="submit"> Logout</button></li>
				{/if}
			</form>
		</ul>
	</nav>
	<slot />
</div>
