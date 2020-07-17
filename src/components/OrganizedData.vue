<template>
    <div>
        <div class="form-group">
            <button
                class="btn btn-success category-button"
                data-toggle="collapse"
                :data-target="'#' + id"
            >
                {{ title }} ({{ valuesArray.length }})
            </button>
        </div>
        <div :id="id" class="collapse">
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
        id: {
            type: String,
            required: true
        },
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

<style lang="less" scoped>
.category-button {
    width: 100%;
}
</style>
