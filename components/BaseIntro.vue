<template>
  <section id="intro" class="intro text">
    <div class="container bg-decor bg-decor--intro">
      <h2 class="ally-hidden">
        <slot name="section-title" />
      </h2>
      <h3 class="intro__title title title--intro">
        <slot name="title" />
        <span class="intro__subtitle title__subtitle">
          <slot name="subtitle" />
        </span>
      </h3>
      <p class="intro__text">
        <slot name="text" />
      </p>
      <nuxt-link class="intro__reserve-btn btn btn--reserve" to="/">
        <slot name="reserve-btn" />
      </nuxt-link>
    </div>
  </section>
</template>
<script>
export default {}
</script>
