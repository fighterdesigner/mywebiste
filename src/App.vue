<template>
  <div id="app">
    <the-header />
     <router-view />
    <the-footer />
  </div>
</template>

<script>
    
    import TheHeader from "./components/global/TheHeader.vue";
    import TheFooter from "./components/global/TheFooter.vue";
    
    
export default {
    name: "app",
    components: {
        TheHeader,
        TheFooter
    }

}
    
</script>

<style lang="scss">

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background: #FB8C00
}    
    
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
