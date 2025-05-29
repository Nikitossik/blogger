<template>
    <section class="pt-48">
      <div class="max-w-6xl px-4 mx-auto">
        <div class="flex items-center gap-6">
          <div class="basis-[466px] grow-0 text-text-neutral">
            <h1 class="font-medium text-[45px] leading-none mb-4">
              Welcome to my personal lifestyle blog
            </h1>
            <p class="text-2xl mb-4">
              Explore the best tips for improving your everyday life
            </p>
            <a
              href="#"
              class="bg-primary-700 text-neutral py-2.5 px-6 rounded-[14px] text-sm/relaxed transition hover:bg-primary-600 focus:ring-primary-700 focus:ring-2 focus:ring-offset-4"
            >
              Explore
            </a>
          </div>
          <div class="flex-auto">
            <img :src="hero" alt="Hero image" />
          </div>
        </div>
      </div>
    </section>

    <section class="pt-12">
      <div class="max-w-6xl px-4 mx-auto">
        <h2 class="font-medium text-[32px] leading-none mb-9">
          Popular articles
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ArticleCard
            v-for="article in articles"
            :key="article.id"
            :title="article.title"
            :tags="article.tags"
            :desc="article.desc"
            :coverImage="article.coverImage"
          />
        </div>
      </div>
    </section>

    <NewsLetter />
</template>

<script>
import hero from '../assets/hero.png'
import articles from '../data'

import ArticleCard from '../components/ArticleCard.vue'
import NewsLetter from '../components/NewsLetter.vue'

export default {
  components: {
    ArticleCard,
    NewsLetter
  },
  data() {
    return {
      hero,
      articles: articles.slice(0, 3)
    }
  }
}
</script>
