import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
// 路由懒加载，
const Home = () => import('./views/Home.vue');

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("./views/Index.vue"),
      redirect: { name: "layout" },
      children: [
        {
          path: "home",
          name: "home",
          component: Home,
          // 缓存组件
          meta: {
            keepAlive: true
          }
        },
        {
          path: "about",
          name: "about",
          component: () =>
            import(/* webpackChunkName: "about" */ "./views/About.vue"),
          meta: {
            keepAlive: true
          }
        },
        {
          path: "layout",
          name: "layout",
          // 坑1：箭头函数后面的import内容无花括号，表示知己return，如果加了花括号，则采用return语法
          // component: () => import(/* webpackChunkName: "layout" */ "./views/Layout.vue"),
          component: () => {
            return import(/* webpackChunkName: "layout" */ "./views/Layout.vue")
          },
          meta: {
            keepAlive: true
          },
          redirect: {name: "shopbox"},
          children: [
            {
              path:"shopbox",
              name:"shopbox",
              component: () => import(/* webpackChunkName: "shopbox" */ "./views/Shopbox.vue")
            },
            {
              path:"chapterOne",
              name:"chapterOne",
              component: () => import(/* webpackChunkName: "chapterOne" */ "./views/ChapterOne.vue")
            },
            {
              path:"chapterTwo",
              name:"chapterTwo",
              component: () => import(/* webpackChunkName: "chapterOne" */ "./views/ChapterTwo.vue")
            }
          ]
        }
      ]
    }
  ],
  // 针对于浏览器窗口，注意: 这个功能只在支持 history.pushState 的浏览器中可用。
  scrollBehavior (to, from, savedPosition) {
    // return {x: 200, y: 300}
  }
});
// 路由跳转后钩子，跳到页面顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
export default router
