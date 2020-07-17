<template>
    <div class="about">
        <h2>Selecione uma geração:</h2>
        <hr>
        <div>
            <button
                v-for="(generation, index) in generations"
                :key="index"
                @click="selectGeneration(generation)"
            >
                {{ generation.name }}
            </button>
        </div>
        <div v-if="selectedGeneration">
            <h2>Selecionada: {{ selectedGeneration.name }}</h2>
            <generation
                v-if="generationData"
                :generation-data="generationData"
            />
        </div>
    </div>
</template>

<script>
import axios from "axios"
import Generation from "./Generation"

export default {
    components: {
        Generation
    },
    data() {
        return {
            generations: null,
            selectedGeneration: null,
            generationData: null
        }
    },
    created() {
        this.getGenerations()
    },
    methods: {
        getGenerations() {
            axios.get("https://pokeapi.co/api/v2/generation")
                .then(response => {
                    console.log(response)
                    this.generations = response.data.results
                })
        },
        selectGeneration(generation) {
            console.log("Getting generation data...")
            this.selectedGeneration = generation
            this.getGenerationData(generation.url)
        },
        getGenerationData(url) {
            axios.get(url)
                .then(response => {
                    console.log(response)
                    this.generationData = response.data
                })
        }
    }
}
</script>
