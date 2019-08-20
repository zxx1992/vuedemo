<template>
  <div class="about">
    <!-- <h1 v-clock>{{rawhtml}}</h1> -->
    <h1>{{rawhtml}}</h1>
    <h2><span v-html="rawhtml"></span></h2>
    <template v-if="data.length">
      <div class="list">
        <ul>
          <li v-for="(item, index) in data" :key="index">{{item.name}}</li>
        </ul>
      </div>
    <Page
      class="pageSize"
      :total="pageTotal"
      show-sizer
      :page-size="pageSize"
      @on-page-size-change="getPageSize"
    />
    </template>
    <div v-else>暂无数据</div>
    <Button type="primary" @click="vClockTest">默认按钮</Button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        // { name: "a", index: "0" },
        // { name: "b", index: "1" },
        // { name: "c", index: "2" },
        // { name: "d", index: "0" },
        // { name: "e", index: "1" },
        // { name: "f", index: "2" },
        // { name: "g", index: "0" },
        // { name: "h", index: "1" },
        // { name: "i", index: "2" },
        // { name: "j", index: "0" },
        // { name: "k", index: "1" },
        // { name: "l", index: "2" },
        // { name: "m", index: "0" },
        // { name: "n", index: "1" },
        // { name: "o", index: "2" },
        // { name: "p", index: "0" },
        // { name: "q", index: "1" },
        // { name: "r", index: "2" },
        // { name: "s", index: "0" },
        // { name: "t", index: "1" },
        // { name: "u", index: "2" },
        // { name: "v", index: "0" },
        // { name: "w", index: "1" },
        // { name: "x", index: "2" },
        // { name: "y", index: "0" },
        // { name: "z", index: "1" },
        // { name: "aa", index: "2" },
        // { name: "q", index: "1" },
        // { name: "r", index: "2" },
        // { name: "s", index: "0" },
        // { name: "t", index: "1" },
        // { name: "u", index: "2" },
        // { name: "v", index: "0" },
        // { name: "w", index: "1" },
        // { name: "x", index: "2" },
        // { name: "y", index: "0" },
        // { name: "z", index: "1" },
        // { name: "q", index: "1" },
        // { name: "r", index: "2" },
        // { name: "s", index: "0" },
        // { name: "t", index: "1" },
        // { name: "u", index: "2" },
        // { name: "v", index: "0" },
        // { name: "w", index: "1" },
        // { name: "x", index: "2" },
        // { name: "y", index: "0" },
        // { name: "z", index: "1" },
        // { name: "q", index: "1" },
        // { name: "r", index: "2" },
        // { name: "s", index: "0" },
        // { name: "t", index: "1" },
        // { name: "u", index: "2" },
        // { name: "v", index: "0" },
        // { name: "w", index: "1" },
        // { name: "x", index: "2" },
        // { name: "y", index: "0" },
        // { name: "z", index: "1" }
      ],
      pageSize: 10,
      pageTotal: 0,
      rawhtml: '<span style="color:red">我是v-html指令</span>'
    };
  },
  methods: {
    getPageSize(pageSize) {
      console.log(pageSize);
    },
    // 当设置了keep-alive为true后，会缓存数据，只让某个页面返回到顶部
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    vClockTest () {
      this.rawhtml = 'v-clock指令，dom只渲染一次'
    }
  },
  activated() {
    this.scrollToTop();
  },
  mounted() {}
};
</script>
<style lang="scss">
.about {
}
.pageSize {
  margin-bottom: 30px;
}
</style>
