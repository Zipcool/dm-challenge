<template>
    <div v-if="showModal">
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-dialog" role="document">
                        <div v-if="pokemonDataLoaded" class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">#{{ nationalPokedexNumber }} - {{ pokemon.name | handleName }}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="setShowModal(false)">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-md-4 text-left">
                                        <h5>Species Data</h5>
                                        <p v-if="pokemonSpecies.evolves_from_species">
                                            <strong>Evolves from:</strong> {{ pokemonSpecies.evolves_from_species.name | handleName }}
                                        </p>
                                        <p v-if="pokemonSpecies.habitat">
                                            <strong>Habitat:</strong> {{ pokemonSpecies.habitat.name | handleName }}
                                        </p>
                                        <p v-if="pokemonSpecies.color">
                                            <strong>Color:</strong> {{ pokemonSpecies.color.name | handleName }}
                                        </p>
                                        <p v-if="pokemonSpecies.shape">
                                            <strong>Shape:</strong> {{ pokemonSpecies.shape.name | handleName }}
                                        </p>
                                        <p v-if="pokemonSpecies.growth_rate">
                                            <strong>Growth rate:</strong> {{ pokemonSpecies.growth_rate.name | handleName }}
                                        </p>
                                        <p v-if="pokemonSpecies.genera">
                                            <strong>Genus:</strong> {{ pokemonSpecies.genera[7].genus }}
                                        </p>
                                    </div>
                                    <div class="col-md-4">
                                        <h5>Pokémon Data</h5>
                                        <p v-if="pokemonData.base_experience">
                                            <strong>Base experience:</strong> {{ pokemonData.base_experience }}
                                        </p>
                                        <p v-if="pokemonData.height">
                                            <strong>Height:</strong> {{ pokemonData.height }}
                                        </p>
                                        <p v-if="pokemonData.weight">
                                            <strong>Weight:</strong> {{ pokemonData.weight }}
                                        </p>
                                        <p v-if="pokemonData.types">
                                            <strong>Types:</strong> {{ pokemonTypes | handleName(", ") }}
                                        </p>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="row">
                                            <span class="col-md-12 font-weight-bold">Normal</span>
                                            <div class="col-md-12">
                                                <img :src="pokemonData.sprites.front_default">
                                                <img :src="pokemonData.sprites.back_default">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <span class="col-md-12 font-weight-bold">Shiny</span>
                                            <div class="col-md-12">
                                                <img :src="pokemonData.sprites.front_shiny">
                                                <img :src="pokemonData.sprites.back_shiny">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <pokemon-stats-table :pokemon-stats="pokemonData.stats" />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" @click="setShowModal(false)">Fechar</button>
                            </div>
                        </div>
                        <div
                            v-else
                            class="loading-banner"
                        >
                            <h2>Carregando dados...</h2>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { EventBus } from "@/plugins/event-bus.js"
import PokemonStatsTable from "./PokemonStatsTable"

export default {
    components: {
        PokemonStatsTable
    },
    props: {
        pokemon: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            showModal: false,
            pokemonData: null,
            pokemonSpecies: null
        }
    },
    computed: {
        pokemonDataLoaded() {
            return this.pokemonData && this.pokemonSpecies
        },
        nationalPokedexNumber() {
            return this.pokemonSpecies ? this.pokemonSpecies.pokedex_numbers[0].entry_number : null
        },
        pokemonTypes() {
            return this.pokemonData.types ? this.pokemonData.types.map(item => item.type.name).join("-") : null
        }
    },
    watch: {
        pokemon: {
            handler(newPokemon) {
                if (newPokemon) {
                    console.log(["newPokemon!:", newPokemon])
                    this.getPokemonData(newPokemon.name)
                    this.getPokemonSpecies(newPokemon.url)
                }
            },
            immediate: true
        }
    },
    created() {
        EventBus.$on("show-pokemon-modal", this.setShowModal)
    },
    beforeDestroy() {
        EventBus.$off("show-pokemon-modal", this.setShowModal)
    },
    methods: {
        setShowModal(value) {
            if (!value) {
                this.pokemonData = null
                this.pokemonSpecies = null
            }
            this.showModal = value
        },
        getPokemonData(name) {
            this.$api.get("/pokemon/" + name)
                .then(response => {
                    console.log(response)
                    this.pokemonData = response.data
                })
        },
        getPokemonSpecies(url) {
            this.$api.get(url)
                .then(response => {
                    console.log(response)
                    this.pokemonSpecies = response.data
                })
        }
    }
}
</script>

<style lang="less" scoped>
.modal-dialog {
    max-width: 800px;
}

.modal-body {
    p {
        margin-bottom: 8px;
    }
}

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.loading-banner {
    color: white;
    text-shadow: 2px 2px black;
    z-index: 9999;
}
</style>
