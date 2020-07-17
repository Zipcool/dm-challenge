<template>
    <div>
        <div class="row">
            <div class="col-md-2">
                <organized-data
                    id="version_groups"
                    title="Jogos desta geração"
                    :values-array="generationData.version_groups"
                    name-separator=" | "
                />
            </div>
            <hr>
            <div class="col-md-3">
                <organized-data
                    id="abilities"
                    title="Habilidades"
                    empty-message="Nenhuma habilidade nesta geração"
                    :values-array="generationData.abilities"
                />
            </div>
            <hr>
            <div class="col-md-2">
                <organized-data
                    id="types"
                    title="Tipos introduzidos"
                    empty-message="Nenhum tipo foi introduzido nesta geração"
                    :values-array="generationData.types"
                />
            </div>
            <hr>
            <div class="col-md-3">
                <organized-data
                    id="pokemon_species"
                    title="Espécies de Pokémon"
                    :values-array="generationData.pokemon_species"
                />
            </div>
            <hr>
            <div class="col-md-2">
                <organized-data
                    id="moves"
                    title="Movimentos"
                    :values-array="generationData.moves"
                />
            </div>
        </div>
    </div>
</template>

<script>
import OrganizedData from "../components/OrganizedData"

export default {
    components: {
        OrganizedData
    },
    props: {
        generationData: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            showAbilities: false
        }
    },
    created() {
    }
}
</script>

<style lang="less" scoped>

</style>
