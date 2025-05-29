<template>
  <button
    class="bg-primary-100 cursor-pointer text-primary-800 text-sm font-medium py-1 px-3 rounded-lg shadow hover:bg-primary-200 transition"
  >
    {{ name }}
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>