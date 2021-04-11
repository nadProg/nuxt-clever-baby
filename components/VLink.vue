<template>
  <a :class="base" :href="href">
    <slot />
  </a>
</template>
<script>
export default {
  props: {
    href: {
      type: String,
      default: '#',
    },
  },
  data: () => ({
    base: 'link',
  }),
  computed: {
    classList() {
      return [this.base, `${this.base}--${this.section}`]
    },
  },
}
</script>
<style>
.link {
  font: inherit;
  transition: opacity 300ms;
  text-decoration: none;
  color: inherit;
  outline-offset: 5px;
}

.link:hover {
  opacity: 0.75;
}

.link:focus {
  opacity: 1;
  outline-width: 2px;
  outline-color: yellow;
}
</style>
