import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import BlogPage from "../pages/BlogPage.vue";
import AboutPage from "../pages/AboutPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import ArticlePage from "../pages/ArticlePage.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/blog", name: "Blog", component: BlogPage },
  { path: "/about", name: "About", component: AboutPage },
  { path: "/contact", name: "Contact", component: ContactPage },
  { path: "/article", name: "Article", component: ArticlePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
