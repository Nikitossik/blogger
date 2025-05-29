<template>
   <section class="pt-48 pb-12">
    <div class="max-w-[984px] px-4 mx-auto text-text-neutral">
        <div class="flex gap-6 items-center mb-12">
            <div class="flex-1">
                <h1 class="font-medium text-[45px] leading-none mb-4">Morning Habits for a Productive Day</h1>
                <p class="text-2xl">Start your day right with simple habits that set the tone for productivity, focus, and positive energy.</p>
            </div>
            <div class="flex-1">
                <img src="../assets//articles/article.png" alt="Morning Habits for a Productive Day">
            </div>
        </div>
        <p class="mb-2">Starting your day with the right habits can set the tone for a productive and focused day. 
            Mornings are a fresh start, offering a unique opportunity to prepare your mind and body for what lies ahead. 
            Here are some simple but effective habits to help you make the most of your mornings.</p>
        <h2 class="text-2xl mb-4">Wake Up Early and Avoid Snoozing</h2>
        <p class="mb-2">Waking up early gives you a head start and creates time to plan your day. Resist the temptation to hit the snooze button—getting up as soon as your alarm rings helps build discipline and sets a positive tone.</p>
        <h2 class="text-2xl mb-4">Hydrate and Energize</h2>
        <p class="mb-2">Begin your day with a glass of water to rehydrate your body after hours of rest. Add a healthy breakfast to fuel your energy levels, making it easier to focus throughout the day.</p>
        <h2 class="text-2xl mb-4">Move Your Body</h2>
        <p class="mb-2">Incorporating light exercise, such as stretching, yoga, or a quick walk, boosts blood circulation and releases endorphins. This small effort can significantly improve your mood and mental clarity.</p>
        <h2 class="text-2xl mb-4">Set Daily Goals</h2>
        <p class="mb-2">Take five minutes to write down your priorities for the day. Focus on three main tasks to ensure you stay productive without feeling overwhelmed.</p>
        <p class="mb-2">Adopting these habits doesn’t require a lot of time or effort but can make a profound difference in your productivity and overall well-being. Try them tomorrow and see the results for yourself!</p>
    </div>
   </section>
   <section class="pt-12">
      <div class="max-w-6xl px-4 mx-auto">
        <h2 class="font-medium text-[32px] leading-none mb-9">
          Also might interest you
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

import articles from '../data'

import ArticleCard from '../components/ArticleCard.vue'
import NewsLetter from '../components/NewsLetter.vue'

export default {
    name: 'ArticlePage',
    components: {
        ArticleCard,
        NewsLetter
    },
    data() {
    return {
        articles: articles.slice(0, 3)
    }
  }
  
}
</script>
