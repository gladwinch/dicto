<script>
	import NavBar from '../components/Navbar.vue'

	export default {
		components: {
			NavBar
		}
	}
</script>

<template>
	<div>
		<div class="px-12 py-8 slide-1">
			<nav-bar />

			<div class="info-container">
				<div>
					<div class="flex content-center mb-6">
						<i class="fi-rr-bulb mr-1 font-medium" style="font-size: 1rem; color: #5D63BF"></i>
						<span class="sub-text-heading font-medium">Build your vocal with less effort.</span>
					</div>

					<h1>
						The most advance way of improving vocabulary with the help of our <span class="text-primary">Artificial Intelligence</span>.
					</h1>

					<div class="mt-10 p-2 flex">
						<input placeholder="Word meaning?">
						<button>Search</button>
					</div>
				</div>
				<div class="flex">
					<img src="../static/phone.svg" style="transform: translateY(-4rem)" >
					<img src="../static/phone2.svg" style="transform: translateY(-4rem)" >
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	@import url('https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css');

	.slide-1 {
		height: 100vh;
		background-image: url(../assets/svgs/slide-1.svg);
		background-repeat: no-repeat
	}

	.info-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin-top: 5rem;
	}
	
	/* left panel */
	.sub-text-heading {
		color: #5D63BF;
		transform: translateY(-2px);
	}

	h1 {
		line-height: 3.8rem;
		font-size: 2.6rem;
		color: #040001;
		font-weight: 700;
		max-width: 38rem;
	}

	/* ******* */
</style>
