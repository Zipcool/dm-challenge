import Vue from "vue"
import App from "./App.vue"
import router from "./router"

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

new Vue({
    router,
    render: h => h(App)
}).$mount("#app")
