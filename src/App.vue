<template>
  <div id="app">
    <Header></Header>
    <!-- <Index></Index> -->
    <router-view />
    <Feedback></Feedback>
  </div>
</template>
<script>
import Header from "./views/Header";
import Index from "./views/Index";
export default {
  components: {
    Header,
    Index
  }
}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
