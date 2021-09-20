<script>
    export default {
        data: () => ({
            definition: "",
            synonyms: [],
            sentenses: [],
            loading: false
        }),
		async mounted() {
            this.loading = true

            // fetch defination
            let definition = await this.$axios.post('/api/word/definition', {
                word: this.$route.query.word
            })

            if(definition.data.success) {
                this.definition = definition.data.data.definition
            }

            // fetch synonyms
            let synonym = await this.$axios.post('/api/word/synonym', {
                word: this.$route.query.word
            })

            if(synonym.data.success) {
                this.synonyms = synonym.data.data
            }

            // fetch sentenses
            let sentence = await this.$axios.post('/api/word/sentence', {
                word: this.$route.query.word
            })

            if(sentence.data.success) {
                this.sentence = sentence.data.data
            }

            this.loading = false
        }
    }
</script>

<template>
    <div>
        <div class="px-36 py-12">
            <h1>Definition</h1>

            <h2 class="mt-8 capitalize text-secondary">{{this.$route.query.word}}: </h2>
            <p v-if="loading">loading...</p>
            <p v-else class="text-gray-600">{{this.definition || 'No defination found'}}</p>

            <hr />
        </div>
    </div>
</template>

<style>
    h1 {
        font-size: 1.7rem;
    }

    h2 {
        font-size: 1.3rem;
        font-weight: 500;
    }
</style>