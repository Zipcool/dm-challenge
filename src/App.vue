<template>
    <div id="app">
        <div class="title-banner">
            <h1>Pokémon Tech Challenge</h1>
            <h5>Autor: Marcos Righi Brasil</h5>
        </div>
        <div></div>
        <!-- <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div> -->
        <router-view/>
    </div>
</template>

<style lang="less">
#app {
    font-family: "Roboto", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    padding: 20px;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>

<style lang="less" scoped>
.title-banner {
    padding: 10px;
    background-color: #d2d2d2;
    border-radius: 10px;
    margin-bottom: 20px;

    h1 {
        margin: 0;
    }
    h5 {
        margin: 5px 0 0 0;
    }
}

</style>
