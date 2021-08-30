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
					<div class="flex content-center mb-4">
						<i class="fi-rr-bulb mr-1 font-medium" style="font-size: 1rem; color: #5D63BF"></i>
						<span class="sub-text-heading font-medium">Build your vocab with less effort.</span>
					</div>

					<h1>
						The most advance way of improving vocabulary with the help of our 
						<span class="text-primary">Artificial 
							<span style="color: #FC0C75" class="text-primary">Intelligence</span>
						</span>.
					</h1>

					<div class="flex mt-10 p-3 px-5 flex bg-gray-100 max-w-xs rounded shadow-inner">
						<input class="flex-1 bg-gray-100 text-gray-500" placeholder="Word meaning?">
						<i class="fi-rr-search text-primary cursor-pointer"></i>
					</div>
				</div>
				<div class="flex">
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
		margin-top: 4.6rem;
	}
	
	/* left panel */
	.sub-text-heading {
		color: #5D63BF;
		transform: translateY(-2px);
	}

	h1 {
		line-height: 3.8rem;
		font-size: 2.2rem;
		color: #040001;
		font-weight: 700;
		max-width: 38rem;
	}

	/* ******* */
</style>
