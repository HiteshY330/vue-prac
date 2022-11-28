import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import FirstComp from "../components/FirstComp.vue";
import SolutionPage from "../components/SolutionPage.vue";
import NewPage from "../components/NewPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/firstcomp",
    name: "comp",
    component: FirstComp,
  },
  {
    path: "/mixin",
    name: "Mixin",
    component: SolutionPage,
  },
  {
    path: "/newpage",
    name: "newpage",
    component: NewPage,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

/*const routes = routerOptions.map(route =>{
  return{
    ...route,
    component:() => import(`@/components/${componentPath}.vue`)
  }
})*/

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
