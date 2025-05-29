<template>
  <div class="flex flex-col min-h-screen bg-neutral">
    <Header />
    <main class="flex-auto bg-primary">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>