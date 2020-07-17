<template>
    <div v-if="showModal">
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-dialog" role="document">
                        <div v-if="pokemonData" class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">#{{ nationalPokedexNumber }} - {{ pokemonData.name | handleName }}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="setShowModal(false)">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p v-if="pokemonData.evolves_from_species">Evolução de: {{ pokemonData.evolves_from_species.name | handleName }}</p>
                                <p v-if="pokemonData.habitat">Habitat: {{ pokemonData.habitat.name | handleName }}</p>
                                <p v-if="pokemonData.color">Cor: {{ pokemonData.color.name | handleName }}</p>
                                <p v-if="pokemonData.shape">Forma: {{ pokemonData.shape.name | handleName }}</p>
                                <p v-if="pokemonData.growth_rate">Ritmo de crescimento: {{ pokemonData.growth_rate.name | handleName }}</p>
                                <p v-if="pokemonData.genera">Gênero: {{ pokemonData.genera[7].genus }}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" @click="setShowModal(false)">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import axios from "axios"
import { EventBus } from "@/plugins/event-bus.js"

export default {
    props: {
        pokemonUrl: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            showModal: false,
            pokemonData: null
        }
    },
    computed: {
        nationalPokedexNumber() {
            return this.pokemonData ? this.pokemonData.pokedex_numbers[0].entry_number : null
        }
    },
    watch: {
        pokemonUrl: {
            handler(url) {
                if (url) {
                    this.getPokemonData(url)
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
            this.showModal = value
        },
        getPokemonData(url) {
            axios.get(url)
                .then(response => {
                    console.log(response)
                    this.pokemonData = response.data
                })
        }
    }
}
</script>

<style lang="less" scoped>
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
</style>
