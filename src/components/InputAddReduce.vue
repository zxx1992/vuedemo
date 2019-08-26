
/*
输入框组件
*/

<template>
  <div>
    <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
    <Button @click="handleAdd" :disabled="value > 10 ? true : false">Add</Button>
    <Button @click="handleReduce" :disabled="value < 1 ? true : false">Reduce</Button>
  </div>
</template>
<script>
export default {
  // 通过prop,父组件向子组件传值
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  methods: {
    // 子组件通过绑定事件，向父组件传值
    handleAdd() {
      // 触发父组件中的方法，
      this.$emit("handleAdd");
    },
    handleReduce() {
      this.$emit("handleReduce");
    }
  }
};
</script>