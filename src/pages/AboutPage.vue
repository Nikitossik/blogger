<template>
  <section class="pt-48">
    <div class="max-w-6xl mx-auto px-4 ">
      <div class="flex justify-center">
      <div class="max-w-[956px] w-full">
      <div class="text-text-neutral bg-primary-500 rounded-3xl shadow-lg relative py-12 pl-9 pr-[268px] max-w-[758px]">
        <h2 class="text-4xl mb-4">
          About Us: Inspiring Balance and Growth in Everyday Life
        </h2>
        <p class="text-base leading-relaxed">
          Welcome to our blog, a space dedicated to helping you live a more balanced, fulfilling, and inspired life. Here, we explore the essentials of health, self-improvement, productivity, and daily inspiration, offering practical advice and uplifting ideas to guide your journey. Whether you're looking to optimize your habits, find clarity in a busy world, or simply discover new ways to stay motivated, our content is designed to meet you where you are and help you move forward.
        </p>

        
      <div class="w-[392px] h-auto rounded-2xl absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2">
        <img
          src="../assets/about.png"
          alt="Profile"
          class="object-cover"
        />
      </div>
</div>
      </div>
      </div>
    </div>
  </section>
  <NewsLetter />
</template>

<script>

import NewsLetter from '../components/NewsLetter.vue'


export default {
  components: {
    NewsLetter
  },
  name: 'AboutPage'
}
</script>