<template>
  <div class="header">{{ msg }}</div>
</template>
<script>
export default {
  data() {
    return {
      msg: "默认"
    };
  },
  created() {
    this.bus.$on("bus-value", val => {
      this.msg = val;
    });
  },
  beforeDestroy() {
    this.bus.$off("bus-value");
  }
};
</script>
<style scoped>
.header {
  width: 100%;
  margin: 0 auto;
  height: 80px;
  line-height: 80px;
  background: #dddddd;
}
</style>
