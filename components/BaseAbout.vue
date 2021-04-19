<template>
  <section id="about" class="about">
    <div class="container bg-decor bg-decor--about">
      <h2 class="about__title title">
        <slot name="title" />
      </h2>
      <div class="about__wrapper">
        <div class="about__column about__column--text">
          <slot name="text-column" :text="classes.text" :lead="classes.lead" />
        </div>
        <div class="about__column about__column--video">
          <slot
            name="video-column"
            :text="classes.text"
            :lead="classes.lead"
            :video="classes.video"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    classes: {
      text: ['about__text', 'text', 'text--basic'],
      lead: ['about__text-lead', 'text', 'text--lead'],
      video: 'about__video-player',
    },
  }),
}
</script>
