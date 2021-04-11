<template>
  <div :class="classList">
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    section: {
      type: String,
      default: 'section',
    },
  },
  data: () => ({
    base: 'container',
  }),
  computed: {
    classList() {
      return [this.base, `${this.base}--${this.section}`]
    },
  },
}
</script>
<style lang="scss">
@import '@/assets/styles/breaks';

.container {
  width: 1170px;
  margin: 0 auto;
  padding: 0 100px;

  @media (max-width: $desktop) {
    width: 100%;
    padding: 0 45px;
  }

  @media (max-width: $table) {
    min-width: 320px;
    padding: 0 15px;
  }
}

.container--header,
.container--footer {
  padding: 0;

  @media (max-width: $desktop) {
    width: 100%;
    padding: 0 45px;
  }

  @media (max-width: $table) {
    min-width: 290px;
    padding: 0 15px;
  }
}

.container--features {
  @media (max-width: $table) {
    padding: 0;
  }
}
</style>
