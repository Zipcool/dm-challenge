<template>
    <div class="about">
        <h5 class="form-group">Selecione uma geração Pokémon abaixo para revelar mais informações:</h5>
        <div class="btn-group form-group" role="group" aria-label="Seletor de gerações">
            <button
                v-for="(generation, index) in generations"
                class="btn btn-outline-primary"
                :key="index"
                @click="selectGeneration(generation)"
            >
                {{ generation.name | handleGenerationName }}
            </button>
        </div>
        <div
            v-if="selectedGeneration"
            class="gen-panel"
        >
            <h2>{{ selectedGeneration.name | handleGenerationName }}</h2>
            <p v-if="generationData">Região: {{ generationData.main_region.name | handleName }}</p>
            <hr>
            <div class="gen-panel__data">
                <generation
                    v-if="generationData"
                    :generation-data="generationData"
                />
            </div>
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
    filters: {
        handleGenerationName(value) {
            if (!value) {
                return ""
            }

            const genNumber = value.toString().split("-")[1].toUpperCase()

            return "Geração " + genNumber
        }
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

<style lang="less" scoped>
.gen-panel {
    min-height: calc(100vh - 271px);
    width: 100%;
    margin: 10px auto;
    border: 1px solid #a6acb1;
    padding: 5px;
    border-radius: 10px;

    h2 {
        margin: 0 0 5px 0;
    }
    p {
        margin: 0;
    }
    hr {
        border-top: 5px solid #e8eaeb;
        margin: 10px -5px;
    }

    &__data {
        padding: 10px 20px;
    }
}
</style>
