<script>
    export default {

    }
</script>

<template>
    <div class="navbar">		
		<img src="../static/logo.png" alt="logo" class="logo">

		<div>
			<a href="vold" class="login text-primary p-3 font-medium">Log In</a>
			<a href="vold" class="signup p-3 px-6 bg-primary text-white rounded-md ml-2 shadow-xl font-medium">Sign Up Today</a>
		</div>
	</div>
</template>

<style>
	.navbar {
		/* padding: 2rem; */
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		height: 2.2rem;
		width: auto;
		box-shadow: 4px 20px 40px -10px rgba(0,0,0,0.54)
	}
</style>
