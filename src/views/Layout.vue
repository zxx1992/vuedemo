<template>
  <div class="layout">
    <Sider breakpoint="md" class="sider" collapsible :collapsed-width="78" v-model="isCollapsed">
      <Menu
        theme="dark"
        width="auto"
        active-name=""
        accordion
        :open-names="['1']"
        :class="menuitemClasses"
      >
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-paper" />文科
          </template>
          <MenuItem :to="{ name: 'shopbox' }" name="1-1">购物车</MenuItem>
          <MenuItem :to="{ name: 'chapterOne' }" name="1-2">chapterOne</MenuItem>
          <MenuItem :to="{ name: 'chapterTwo' }" name="1-3">chapterTwo</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-paper" />理科
          </template>
          <MenuItem :to="{ name: 'tabs' }" name="2-1">tabs</MenuItem>
          <MenuItem :to="{ name: '' }" name="2-2">化学</MenuItem>
          <MenuItem :to="{ name: '' }" name="2-3">生物</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout class="layout_sec">
      <Content class="content">
        <router-view/>
      </Content>
    </Layout>
  </div>
</template>
<script>
export default {
  name: 'layout',
  components: {
  },
  data() {
    return {
      isCollapsed: false,
      tabs: [
        { name: "about", index: "0" },
        { name: "home", index: "1" },
        { name: "about", index: "2" }
      ]
    };
  },
  computed: {
    // 侧边栏折叠
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "menuitemClasses" : ""];
    }
  },
  methods: {
    handleTableRemove(name) {
      this["tab" + name] = false;
    },
    // 获取标签页内容
    getTabsContent(name) {
      let _routername = this.tabs[name].name;
      this.$router.push({ name: _routername });
    }
  }
};
</script>
<style lang="scss" scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  .sider {
    position: fixed;
    height: 100vh;
    left: 0;
    // overflow: auto;
    padding-top: 16px;
  }
  .layout_sec {
    margin-left: 200px;
    .header {
      background: #fff;
      box-shadow: 0 2px 3px 2px #cccccc;
    }
    .content {
      // padding: 0 16px 16px;
      .nav_sec {
        margin: 16px 0;
      }
    }
  }
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
</style>
