<template>
    <div>
        <div>
            <p>Região: {{ generationData.main_region.name | handleName }}</p>
        </div>
        <hr>
        <div>
            <organized-data
                title="Jogos desta geração"
                :values-array="generationData.version_groups"
                name-separator=" | "
            />
        </div>
        <hr>
        <div>
            <organized-data
                title="Habilidades"
                empty-message="Nenhuma habilidade nesta geração"
                :values-array="generationData.abilities"
            />
        </div>
        <hr>
        <div>
            <organized-data
                title="Tipos"
                empty-message="Nenhum tipo nesta geração"
                :values-array="generationData.types"
            />
        </div>
        <hr>
        <div>
            <organized-data
                title="Espécies de Pokémon"
                :values-array="generationData.pokemon_species"
            />
        </div>
        <hr>
        <div>
            <organized-data
                title="Movimentos"
                :values-array="generationData.moves"
            />
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
