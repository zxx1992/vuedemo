<template>
  <div class="layout">
    <!-- <Header></Header>
    <router-link :to="{name:'home'}">Home</router-link>|
    <router-link :to="{name:'about'}">About</router-link>
    <router-view />-->
    <Sider
      breakpoint="md"
      class="sider"
      collapsible
      :collapsed-width="78"
      v-model="isCollapsed"
    >
      <Menu
        theme="dark"
        width="auto"
        active-name="1-3"
        accordion
        :open-names="['1']"
        :class="menuitemClasses"
      >
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-paper" />文科
          </template>
          <MenuItem :to="{ name: 'home' }" name="1-1">政治</MenuItem>
          <MenuItem :to="{ name: 'home' }" name="1-2">历史</MenuItem>
          <MenuItem :to="{ name: 'home' }" name="1-3">地理</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-paper" />理科
          </template>
          <MenuItem :to="{ name: 'about' }" name="2-1">物理</MenuItem>
          <MenuItem :to="{ name: 'about' }" name="2-2">化学</MenuItem>
          <MenuItem :to="{ name: 'about' }" name="2-3">生物</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout class="layout_sec">
      <Header class="header"></Header>
      <Content class="content">
        <!-- <Breadcrumb class="nav_sec" separator=">">
          <BreadcrumbItem :to="{name:'about'}">
            <Icon type="ios-home-outline"></Icon>课程1
          </BreadcrumbItem>
          <BreadcrumbItem :to="{name:'home'}">
            <Icon type="ios-home-outline"></Icon>课程2
          </BreadcrumbItem>
          <BreadcrumbItem :to="{name:'home'}">
            <Icon type="ios-home-outline"></Icon>课程3
          </BreadcrumbItem>
        </Breadcrumb> -->
        <Tabs
          size="small"
          closable
          type="card"
          @on-tab-remove="handleTableRemove"
        >
          <TabPane
            v-for="(item, index) in tabs"
            :key="index"
            :label="item.name"
            v-if="tab"
            +index
          >
            {{ item.content }}</TabPane
          >
          <!-- <TabPane label="2" icon="logo-apple" v-if="tab1">2</TabPane>
          <TabPane label="3" icon="logo-apple" v-if="tab2">3</TabPane> -->
        </Tabs>
        <Card>
          <div style="height: 600px">Content</div>
        </Card>
      </Content>
    </Layout>
    <Feedback></Feedback>
  </div>
</template>
<script>
import Header from "../views/Header";
export default {
  components: {
    Header
  },
  data() {
    return {
      isCollapsed: false,
      tab0: true,
      tab1: true,
      tab2: true,
      tabs: [
        { name: 0, tab0: true, content: "1111111111" },
        { name: 1, tab1: true, content: "2222222222" },
        { name: 2, tab2: true, content: "3333333333" }
      ]
    };
  },
  computed: {
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "menuitemClasses" : ""];
    }
  },
  methods: {
    handleTabRemove(name) {
      this["tab" + name] = false;
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
  }
  .layout_sec {
    margin-left: 200px;
    .header {
      background: #fff;
      box-shadow: 0 2px 3px 2px #cccccc;
    }
    .content {
      padding: 0 16px 16px;
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
