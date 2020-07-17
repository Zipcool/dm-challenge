<template>
    <div>
        <div class="form-group">
            <button
                class="btn btn-success category-button"
                data-toggle="collapse"
                :data-target="'#' + id"
            >
                {{ title }} ({{ itemsArray.length }})
            </button>
        </div>
        <div :id="id" class="collapse">
            <template
                v-if="!isEmpty(itemsArray)"
            >
                <div
                    v-if="interactableData"
                    class="interactable-data-group"
                    :class="{ 'btn-group-vertical': interactableData }"
                >
                    <button
                        v-for="(item, index) in itemsArray"
                        :key="index"
                        class="btn btn-outline-success"
                        @click="$emit('data-item-clicked', item)"
                    >
                        {{ item.name | handleName(nameSeparator) }}
                    </button>
                </div>
                <div v-else>
                    <p
                        v-for="(item, index) in itemsArray"
                        :key="index"
                    >
                        {{ item.name | handleName(nameSeparator) }}
                    </p>
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
        itemsArray: {
            type: Array,
            default() {
                return []
            }
        },
        nameSeparator: {
            type: String,
            default: " "
        },
        interactableData: {
            type: Boolean,
            default: false
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
.interactable-data-group {
    width: calc(100% - 10px);
    margin: 0 5px;
}
</style>
