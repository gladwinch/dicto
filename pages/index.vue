<script>
	export default {
		data: () => ({
			words: [],
			word: ""
		})
	}
</script>

<template>
	<div>
		<!-- navbar -->
		<div class="navbar">

			<!-- logo -->
			<div style="position: relative">
				<img src="../assets/logo.png" alt="logo" class="logo-img">
				<span class="icon-text pb-4">icto</span>
			</div>

			<!-- navigation section -->
			<div class="d-flex">
				<div class="menu-item mr-4">About</div>
				<div class="menu-item mr-4">Tutorial</div>
				<div class="menu-item">Contact</div>
			</div>

			<!-- menu -->
			<img 
				src="../assets/icons/menu.png" 
				alt="logo" class="hame-menu" style="height: 1.8rem; width: auto; cursor: pointer"
			>
		</div>

		<!-- content -->
		<div class="d-flex justify-center align-center pb-12" style="height: 86vh">
			<div style="width: 30rem" class="d-flex align-center">

				<v-combobox
					placeholder="Word of meaning"
					v-model="word"
					:items="words"
					append-icon=""
					clearable
					solo
					flat
					height="20"
					:full-width="true"
					clear-icon="$close"
					class="input-box"
					id="titleinput"
				></v-combobox>

				<v-btn height="60" flat>Seach</v-btn>
			</div>
		</div>
	</div>
</template>

<style scoped>

	/* navbar */
	.navbar {
		height: 14vh;
		padding: 0 1.6rem;
		display: flex;
		align-items: center;
		box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06);
		justify-content: space-between;
	}

	.logo-img {
		height: 3rem;
		width: auto;
	}

	.icon-text {
		font-size: 1.5rem;
		font-weight: 500;
		margin-bottom: 20px;
		color: rgb(249,124,21);
		position: absolute;
		top: 16px;
	}

	.menu-item {
		color: #9b9b9b;
		font-weight: 400;
		font-size: 0.9rem;
	}

	/* ------- */

	/* content */

	.input-box {
		box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06);
	}

	/* -------- */

</style>
