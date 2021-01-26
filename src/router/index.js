import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ContactezNous from "../views/ContactezNous.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/contactez-nous",
    name: "ContactezNous",
    component: ContactezNous
  },
    {
        path: "/telecharger",
        name: "Telecharger",
        component: () => import("../views/Telecharger.vue")
    }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
