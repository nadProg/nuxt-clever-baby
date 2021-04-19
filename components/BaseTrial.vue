<template>
  <section class="trial text text--basic">
    <div class="container bg-decor bg-decor--trial">
      <div class="trial__wrapper">
        <h2 class="trial__title title title--trial">
          <slot name="title" />
        </h2>
        <p class="trial__text">
          <slot name="text" />
        </p>
        <nuxt-link class="trial__reserve-btn btn btn--reserve" to="/" />
      </div>
    </div>
  </section>
</template>
<script>
export default {}
</script>
