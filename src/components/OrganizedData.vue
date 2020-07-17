<template>
    <div>
        <button @click="showData = !showData">{{ title }} ({{ valuesArray.length }})</button>
        <div v-show="showData">
            <template
                v-if="!isEmpty(valuesArray)"
            >
                <div
                    v-for="(value, index) in valuesArray"
                    :key="index"
                >
                    <p>{{ value.name | handleName(nameSeparator) }}</p>
                </div>
            </template>
            <p v-else>{{ emptyMessage }}</p>
        </div>
    </div>
</template>

<script>
import { isEmpty } from "lodash"

export default {
    props: {
        title: {
            type: String,
            default: "Título"
        },
        emptyMessage: {
            type: String,
            default: "Nenhum valor encontrado"
        },
        valuesArray: {
            type: Array,
            default() {
                return []
            }
        },
        nameSeparator: {
            type: String,
            default: " "
        }
    },
    data() {
        return {
            showData: false
        }
    },
    computed: {
        isEmpty() {
            return isEmpty
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
