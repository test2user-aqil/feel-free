<form method="POST" class="registration-form">
	<hgroup class="text-center">
		<h2 class="font-medium text-xl">Login</h2>
		<h3 class="font-bold text-sm">Welcome back!</h3>
	</hgroup>

	<div>
		<label for="username">Username</label>
		<input type="text" id="username" name="username" required />
	</div>

	<div>
		<label for="password">Password</label>
		<input type="password" id="password" name="password" required />
	</div>

	<button type="submit" class="btn-primary">Login</button>
	<p class="text-xs text-center">
		Don't have an account? <a href="/register" class="link">Register</a>
	</p>
</form>
