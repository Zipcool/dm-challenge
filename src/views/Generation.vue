<template>
    <div>
        <div class="row">
            <div class="col-md-3">
                <collapsable-data-column
                    id="pokemon_species"
                    title="Pokémons"
                    :items-array="generationData.pokemon_species"
                    :interactable-data="true"
                    @data-item-clicked="openPokemonModal"
                />
            </div>
            <hr>
            <div class="col-md-2">
                <collapsable-data-column
                    id="version_groups"
                    title="Jogos desta geração"
                    :items-array="generationData.version_groups"
                    name-separator=" | "
                />
            </div>
            <hr>
            <div class="col-md-2">
                <collapsable-data-column
                    id="types"
                    title="Tipos introduzidos"
                    empty-message="Nenhum tipo foi introduzido nesta geração"
                    :items-array="generationData.types"
                />
            </div>
            <hr>
            <div class="col-md-2">
                <collapsable-data-column
                    id="abilities"
                    title="Habilidades"
                    empty-message="Nenhuma habilidade nesta geração"
                    :items-array="generationData.abilities"
                />
            </div>
            <hr>
            <div class="col-md-3">
                <collapsable-data-column
                    id="moves"
                    title="Movimentos"
                    :items-array="generationData.moves"
                />
            </div>
        </div>
        <pokemon-modal
            :show-modal="showPokemonModal"
            :pokemon="selectedPokemon"
        />
    </div>
</template>

<script>
import CollapsableDataColumn from "../components/CollapsableDataColumn"
import PokemonModal from "../components/PokemonModal"
import { EventBus } from "@/plugins/event-bus.js"

export default {
    components: {
        CollapsableDataColumn,
        PokemonModal
    },
    props: {
        generationData: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            showAbilities: false,
            showPokemonModal: false,
            selectedPokemon: null
        }
    },
    methods: {
        openPokemonModal(item) {
            this.selectedPokemon = item
            EventBus.$emit("show-pokemon-modal", true)
        }
    }
}
</script>

<style lang="less" scoped>

</style>
