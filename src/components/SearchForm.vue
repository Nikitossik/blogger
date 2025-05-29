<template>
  <div class="flex flex-col items-start gap-4">
    <div class="flex w-full gap-4">
      <div class="relative flex-1">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-primary-700">
          <v-icon name="fa-search" scale="1.2" />
        </span>
        <input
          v-model="query"
          type="text"
          placeholder="Search articles..."
          class="w-full pl-10 pr-4 py-2 rounded-full border-2 border-primary-700 focus:outline-primary-800 bg-primary-50 text-primary-900"
        />
      </div>
      <button
        @click="search"
        class="bg-primary-700 cursor-pointer text-neutral py-2.5 px-6 rounded-[14px] text-sm/relaxed transition hover:bg-primary-600 focus:ring-primary-700 focus:ring-2 focus:ring-offset-4"
      >
        Go!
      </button>
      <button
        @click="resetFilters"
        class="bg-primary-600 cursor-pointer text-neutral py-2.5 px-6 rounded-[14px] text-sm/relaxed transition hover:bg-primary-500 focus:ring-primary-500 focus:ring-2 focus:ring-offset-4"
      >
        Reset filters
      </button>
    </div>
    <div class="flex flex-wrap gap-3">
      <SearchBadge
        v-for="(badge, index) in badges"
        :key="index"
        :name="badge"
      />
    </div>
  </div>
</template>

<script>
import SearchBadge from './SearchBadge.vue'

export default {
  components: {
    SearchBadge
  },
  data() {
    return {
      query: '',
      badges: ['Health', 'Productivity', 'Self-Improvement', 'Inspiration']
    }
  },
  methods: {
    search() {
      console.log('Searching for:', this.query)
    },
    resetFilters() {
      this.query = ''
      console.log('Filters reset')
    }
  }
}
</script>
