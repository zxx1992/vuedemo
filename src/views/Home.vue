<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
      :class="{ default: true, set: true }"
    />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- v-model指令的双向数据绑定 -->
    <Input type="text" v-model="message" />
    <!-- <Input type="text" @input="handleInput"/> -->
    <p style="white-space: nowrap">输入的内容：{{ message }}</p>
    <div class="radio">
      <input type="radio" v-model="picked" value="html" id="html" />
      <label for="html">html</label>
      <input type="radio" v-model="picked" value="js" id="js" />
      <label for="js">js</label>
      <input type="radio" v-model="picked" value="css" id="css" />
      <label for="css">css</label>
      <p>选中的项：{{ picked }}</p>
    </div>
    <div class="checkbox">
      <input type="checkbox" v-model="checked" value="html" id="html" />
      <label for="html">html</label>
      <input type="checkbox" v-model="checked" value="js" id="js" />
      <label for="js">js</label>
      <input type="checkbox" v-model="checked" value="css" id="css" />
      <label for="css">css</label>
      <p>选中的项：{{ checked }}</p>
      <!-- <Header></Header> -->
    </div>
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
    HelloWorld: () => import("@/components/HelloWorld.vue"),
    About: () => import("../views/About")
    // HelloWorld
  },
  data() {
    return {
      message: "",
      picked: "js",
      checked: ["html", "js"]
    };
  },
  methods: {
    // handleInput: function(e) {
    //   console.log(e)
    //   this.message = e;
    // }
  },
  watch: {
    message(newVal, old) {
      console.log(newVal);
      console.log(old);
    }
  }
};
</script>
<style lang="less"></style>
