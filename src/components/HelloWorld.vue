<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ initMsg }}</h1>
    <h1 :style="style">{{ isNotString }}{{isNotString.length}}</h1>
    <Button type="primary" @click="handleAdd">Add</Button>
    /
    <Button type="error" @click="handleReduce">Reduce</Button>
    /
    <Button type="success" @click="handleClick">+</Button>
    <input :value="value" @input="updateValue">
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha"
          target="_blank"
          rel="noopener"
          >unit-mocha</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress"
          target="_blank"
          rel="noopener"
          >e2e-cypress</a
        >
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
          >Community Chat</a
        >
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
          >Twitter</a
        >
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    message: {
      type: String,
      validator:function (value) {
        return value.substr(1,6)
      }
    },
    // 这里如果props的值类型非字符串，则父组件中需要使用v-bind指令，不然取到的为字符串
    isNotString: {
      // type:Array,
      required: true,
      default: function () {
        return []
      }
    },
    width: Number,
    value: 0
  },
  data () {
    return {
      initMsg: this.message,
      counter: 0
    }
  },
  mounted() {
    this.initMsg = "子组件改变父组件传过来的值",
    console.log(this.$parent)
  },
  computed: {
    style() {
      return {
        width: this.width + 'px'
      }
    }
  },
  methods: {
    // 触发父组件的方法
    handleAdd() {
      this.counter++;
      this.$emit('increase', this.counter)
    },
    handleReduce() {
      this.counter--;
      this.$emit('reduce', this.counter)
    },

    handleClick() {
      this.counter++;
      this.$emit('input', this.counter)
    },
    updateValue(event) {
      console.log(event)
      this.$emit('input', event.target.value)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
