<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" :class="{'default': true,'set':true}"/>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Input type="text"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// 组件懒加载
// const HelloWorld = () => import("@/components/HelloWorld.vue");
export default {
  name: "home",
  components: {
    "HelloWorld": () => import("@/components/HelloWorld.vue"),
    "About": () => import("../views/About"),
    "Header": () => import("../views/Header.vue")
    // HelloWorld
  },
  data() {
    return {

    }
  }
};
</script>
<style lang="less">

</style>
