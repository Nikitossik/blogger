<template>
  <div class="bg-primary-800/10 rounded-xl overflow-hidden">
      <img :src="coverImage" :alt="title" />
      <div class="p-4 flex flex-col items-start basis-full text-text-neutral">
        <h3 class="text-[22px] mb-4 font-medium leading-none">{{ title }}</h3>
        <div class="flex gap-2.5 items-start mb-2">
          <ArticleTag v-for="(tag, index) in tags" :key="index" :name="tag" />
        </div>
        <p class="mb-4">{{ desc }}</p>
        <router-link
          to="/article"
          class="bg-primary-500 text-text-neutral py-2.5 px-6 rounded-full text-sm/relaxed transition hover:bg-primary-400 focus:ring-primary-500 focus:ring-2 focus:ring-offset-4"
        >
          Read
        </router-link>
    </div>
  </div>
</template>

<script>
import ArticleTag from './ArticleTag.vue'

export default {
  components: { ArticleTag },
  props: {
    title: String,
    tags: Array,
    desc: String,
    coverImage: String
  }
}
</script>
