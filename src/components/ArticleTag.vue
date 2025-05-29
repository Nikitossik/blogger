<template>
  <a
    href="#"
    class="rounded-lg bg-primary-500 text-primary-800 text-sm font-medium py-0.5 px-2"
  >
    #{{ name }}
  </a>
</template>

<script>
export default {
  props: {
    name: String
  }
}
</script>
