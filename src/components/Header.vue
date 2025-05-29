<template>
  <header class="fixed top-0 left-0 w-full bg-primary-700 text-neutral z-50">
    <div class="max-w-6xl px-4 mx-auto">
      <div class="py-5 flex items-center gap-4">

        <div class="basis-36 shrink-0">
          <router-link to="/">
            <img :src="logo" alt="Blogger Logo" />
          </router-link>
        </div>

        <nav class="basis-full flex justify-center">
          <ul class="no-underline flex gap-4">
            <li v-for="item in navItems" :key="item.name">
              <router-link
                :to="item.path"
                class="py-2.5 px-6 rounded-[14px] text-sm/relaxed font-semibold transition hover:bg-white/12 focus:outline-white/40 focus:outline-2 focus:outline-offset-4"
                :class="{ 'bg-white/12': isActiveRoute(item.path) }"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </nav>

        <ul class="no-underline flex gap-5">
          <li v-for="(icon, index) in socialIcons" :key="index">
            <a href="#">
              <v-icon :name="icon" scale="1.5" fill="white" />
            </a>
          </li>
        </ul>

      </div>
    </div>
  </header>
</template>

<script>
import logo from '../assets/logo.svg'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()

    const isActiveRoute = (path) => {
      return route.path === path
    }

    return { isActiveRoute }
  },
  data() {
    return {
      logo,
      navItems: [
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" }
      ],
      socialIcons: [
        "fa-facebook",
        "fa-twitter",
        "fa-linkedin",
        "fa-youtube"
      ]
    }
  }
}
</script>
