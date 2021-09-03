<script>
    export default {
        data: () => ({
            definition: "",
            loading: false
        }),
		async mounted() {
            this.loading = true
            let { data } = await this.$axios.post('/api/word/definition', {
                word: this.$route.query.w
            })

            loading: false
            if(data.success) {
                this.definition = data.data.definition
            }

            this.loading = false
        }
    }
</script>

<template>
    <div class="px-36 py-12">
		<h1>Definition</h1>

        <h2 class="mt-8 capitalize text-secondary">{{this.$route.query.w}}: </h2>
        <p v-if="loading">loading...</p>
        <p v-else class="text-gray-600">{{this.definition}}</p>
	</div>
</template>

<style>
    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.7rem;
        font-weight: 500;
    }
</style>