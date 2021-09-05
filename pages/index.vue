<script>
	import NavBar from '../components/Navbar.vue'
	import _debounce from 'lodash.debounce'

	export default {
		components: {
			NavBar
		},
		data: () => ({
			suggestions: [],
			loading: false,
			word: ""
		}),
		methods: {
			async autoComplete() {
				if(!this.word) return
				this.loading = true
				const { data } = await this.$axios.get(`/api/auto/word?word=${this.word}`)

				if(data.success) {
					this.suggestions = data.data
				}

				this.loading = false
			},
			searchWord() {
				if(!this.word) return 

				this.$router.push({
					path: `/definition?word=${this.word}`
				})
			}
		},
		computed: {
			debouncedOnChange () {
				return _debounce(this.autoComplete, 500)
            }
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

					<div class="relative max-w-xs">
						<div class="flex mt-10 p-3 px-5 flex bg-gray-100 rounded shadow-inner">
							<form @submit="searchWord" class="flex-1">
								<input 
									class="bg-gray-100 text-gray-500" 
									placeholder="Word meaning?"
									@keydown="debouncedOnChange"
									v-model="word"
								>
							</form>
							<i @click="searchWord" class="fi-rr-search text-primary cursor-pointer" v-if="!loading"></i>
							<img src="../static/utils/loading.gif" alt="loading" v-else class="h-6 w-auto">
						</div>

						<div class="rounded overflow-hidden max-w-xs shadow-sm absolute min-w-full">
							<div 
								class="p-3 px-5 bg-gray-100 text-gray-500 cursor-pointer hover:bg-gray-200" 
								v-for="text in suggestions" :key="text"
								@click="word=text; suggestions=[]"

							>
								{{ text }}
							</div>
						</div>
					</div>

				</div>

				<div class="flex right-panel p-26">
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

	@media only screen and (max-width: 800px) {
		.info-container {
			grid-template-columns: 1fr;
		}

		.right-panel {
			display: hidden;
		}

		h1 {
			font-size: 1.5rem;
			line-height: 2.2rem
		}
	}
</style>
