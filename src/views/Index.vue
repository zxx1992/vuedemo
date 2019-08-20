<template>
  <div class="layout">
    <Header></Header>
    <router-link :to="{name:'home'}">Home</router-link>|
    <router-link :to="{name:'about'}">About</router-link>|
    <router-link :to="{name:'layout'}">Layout</router-link>
    <!-- 根据路由配置，缓存数据 -->
    <keep-alive>
    <router-view  v-if="this.$route.meta.keepAlive"/>
    </keep-alive>
    <router-view  v-if="!this.$route.meta.keepAlive"></router-view >
  </div>
</template>
<script>
import Header from "../views/Header";
export default {
  components: {
    Header
  },
  data() {
    return {};
  },
  mounted() {
  }
};
</script>
