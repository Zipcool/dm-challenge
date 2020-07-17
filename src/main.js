import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import axios from "axios"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

Vue.config.productionTip = false

Vue.filter("handleName", (value, joinChar = " ") => {
    if (!value) {
        return ""
    }

    const stringValues = value.toString().split("-")
    const capitalizedValues = []

    stringValues.forEach(stringValue => {
        capitalizedValues.push(stringValue.charAt(0).toUpperCase() + stringValue.slice(1))
    })

    return capitalizedValues.join(joinChar)
})

Vue.prototype.$api = axios.create({
    baseURL: "https://pokeapi.co/api/v2"
})

new Vue({
    router,
    render: h => h(App)
}).$mount("#app")
