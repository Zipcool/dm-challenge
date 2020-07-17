<template>
    <div>
        <div>
            <p>Região: {{ generationData.main_region.name }}</p>
        </div>
        <hr>
        <div>
            <button @click="showAbilities = !showAbilities">{{ showAbilities ? "Esconder habilidades" : "Mostrar habilidades"}}</button>
            <div v-show="showAbilities">
                <template
                    v-if="generationData.abilities.length > 0"
                >
                    <div
                        v-for="(ability, index) in generationData.abilities"
                        :key="index"
                    >{{ ability }}</div>
                </template>
                <p v-else>Nenhuma habilidade nesta geração</p>
            </div>
        </div>
        <hr>
        <div>
            <label>Tipos:</label>
            <p>{{ generationData.types }}</p>
        </div>
        <hr>
        <div>
            <label>Espécies de Pokémon:</label>
            <p>{{ generationData.pokemon_species }}</p>
        </div>
        <div>
            <label>Moves:</label>
            <p>{{ generationData.abilities }}</p>
        </div>
        <div>
            <label>Versões:</label>
            <p>{{ generationData.version_groups }}</p>
        </div>
    </div>
</template>

<script>
export default {
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
