<template>
    <section class="pt-48">
      <div class="max-w-6xl px-4 mx-auto">
        <SearchForm/>
        <div class="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
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

import articles from '../data'

import SearchForm from '../components/SearchForm.vue'
import ArticleCard from '../components/ArticleCard.vue'
import NewsLetter from '../components/NewsLetter.vue'

export default {
    components: {
    ArticleCard,
    NewsLetter,
    SearchForm
  },
  data() {
    return {
      articles
  } },
  name: 'BlogPage'
}
</script>