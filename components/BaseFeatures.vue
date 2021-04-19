<template>
  <section class="features">
    <div class="container container--features">
      <h2 class="ally-hidden">
        <slot name="title" />
      </h2>
      <ul class="features__list">
        <li
          v-for="(feature, index) of features"
          :key="`features__item--${index + 1}`"
          class="features__item"
          :class="`features__item--${index + 1}`"
        >
          <p class="features__text-lead text text--lead">
            {{ feature.title }}
          </p>
          <p class="features__text text text--basic">
            {{ feature.text }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    features: {
      type: Array,
      required: true,
      validator(features) {
        if (features.length !== 4) return false
        return features.every((feature) => feature.title && feature.text)
      },
    },
  },
}
</script>
