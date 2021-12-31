<script>
    export default {
        async asyncData({ query, $axios }) {
            console.log("query: ", query)
            let data = await $axios.$get(`/api/word/search?word=${query.word}`)
            console.log("from server: ", data)
            let { definition, synonyms, sentence } = data.data
            return {
                definition: definition.split(' '),
                synonyms,
                sentence
            }
        }
    }
</script>

<template>
    <div>
        <div class="px-36 py-12">
            <h1 class="capitalize text-secondary">{{this.$route.query.word }}</h1>

            <h3 class="mt-8 capitalize">Definition: </h3>
            <div class="text-gray-600 pb-4 flex align-center flex-wrap">
                <span v-for="(item, i) in definition" :key="i" class="mr-1 word-item">{{ item }}</span>
            </div>

            <h3 class="mt-2 capitalize">Synonyms: </h3>
            <div class="my-4 flex ">
                <div 
                    class="bg-green-400 px-3 mr-2 py-1 rounded text-white text-center border-green-500 border-2" 
                    v-for="item in synonyms" :key="item"
                    style="font-size: 0.9rem"
                >
                    {{ item }}
                </div>
            </div>

            <h3 class="mt-6 capitalize">Sentences:</h3>
            <ul class="my-4">
                <li class="text-gray-600 pb-1" v-for="item in sentence" :key="item">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<style>
    h1 {
        font-size: 1.7rem;
    }

    h3 {
        font-size: 1.2rem;
        font-weight: 500;
    }

    .word-item {
        transition: 0.2s;
        cursor: pointer;
        transition-timing-function: ease-in
    }

    .word-item:hover {
        transform: scale(1.4);
        background: rgb(235, 85, 223);
        padding: 0px 3px;
        border-radius: 4px;
        color: white
    }
</style>