<div>
	<nav
		class="w-full h-14 flex items-center p-3 md:px-14 bg-black text-slate-200 border-b border-b-indigo-500"
	>
		<a href="/" class="flex items-center gap-2">
			<img src="/icon.svg" alt="Icon" />
			<img src="/logo.svg" alt="Logo" />
		</a>
	</nav>
	<div>
		<main class="max-w-4xl mx-auto flex flex-col gap-2">
			<slot />
		</main>
	</div>
</div>
