<template>
  <div>
    <inputAddReduce
      v-model="value"
      :max="max"
      :min="min"
      :step="step"
      @handleAdd="handleAdd"
      @handleReduce="handleReduce"
      @handleKeydown="handleKeydown"
    ></inputAddReduce>
  </div>
</template>
<script>
import inputAddReduce from "../components/InputAddReduce";
export default {
  components: {
    inputAddReduce
  },
  data() {
    return {
      value: 5,
      max: 50,
      min: 1,
      step: 10
    };
  },
  methods: {
    // 练习2：增加step，自增自检以step为间隔
    // 这里是不是可以直接用this.step
    handleAdd(step) {
      if (this.value === this.max) return;
      this.value += step;
    },
    handleReduce(step) {
      if (this.value === this.min) return;
      this.value -= step;
    },
    // 练习1：输入框聚焦后，上下键可自增自减
    handleKeydown(event) {
      if(event.keyCode == 38) {
          this.handleAdd()
      }
      if(event.keyCode == 40) {
          this.handleReduce()
      }
    }
  }
};
</script>
