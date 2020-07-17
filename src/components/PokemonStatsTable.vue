<template>
    <div v-if="pokemonStats" class="row">
        <div class="col-md-12">
            <h5 class="text-centered">Pokémon Stats</h5>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Base Value</th>
                        <th scope="col">Effort</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in pokemonStats" :key="index">
                        <th scope="row">{{ item.stat.name | handleName }}</th>
                        <td>{{ item.base_stat }}</td>
                        <td>{{ item.effort }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        pokemonStats: {
            type: Array,
            default: null
        }
    }
}
</script>
