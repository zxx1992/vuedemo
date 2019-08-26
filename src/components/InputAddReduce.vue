
/*
输入框组件
*/

<template>
  <div>
    <input type="text" :value="currenVal" @change="handleChange" @keydown="handleKeydown"/>
    <Button @click="handleAdd" :disabled="currenVal > max ? true : false">Add</Button>
    <Button @click="handleReduce" :disabled="currenVal < min ? true : false">Reduce</Button>
  </div>
</template>
<script>
function isValueNumber(value) {
  return /(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/.test(value + " ");
}
export default {
  // 通过prop,父组件向子组件传值
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    step: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currenVal: this.value
    };
  },
  methods: {
    // 子组件通过绑定事件，向父组件传值
    handleAdd() {
      // 触发父组件中的方法，
      this.$emit("handleAdd", this.step);
      // if (this.currenVal >= this.max) return;
      // this.currenVal++;
    },
    handleReduce() {
      this.$emit("handleReduce", this.step);
      // if (this.currenVal <= this.min) return;
      // this.currenVal--;
    },
    updatedVal(val) {
      if (val > this.max) val = this.max;
      if (val < this.min) val = this.min;
      this.currenVal = val;
    },
    handleChange(event) {
      var val = event.target.value.trim();
      if (isValueNumber(val)) {
        var max = this.max;
        var min = this.min;
        val = Number(val);
        this.currenVal = val;
        if (val > max) this.currenVal = max;
        if (val < min) this.currenVal = min;
      } else {
        event.target.value = this.currenVal;
      }
    },
    handleKeydown(event) {
      this.$emit("handleKeydown",event)
    }
  },
  mounted() {
    this.updatedVal(this.value);
  },
  watch: {
    currenVal(val) {
      this.$emit("input", val);
      this.$emit("on-change", val);
    },
    value(val) {
      this.updatedVal(val);
    }
  }
};
</script>