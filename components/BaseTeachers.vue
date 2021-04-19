<template>
  <section id="teachers" class="teachers text text--basic">
    <div class="container bg-decor bg-decor--teachers">
      <header class="teachers__header">
        <h2 id="teachers-title" class="teachers__title title">
          <slot name="header-title" />
        </h2>
        <p class="teachers__header-text">
          <slot name="header-text" />
        </p>
      </header>
      <BaseTeachersCarousel class="teachers__slider">
        <figure
          v-for="teacher of teachers"
          :key="teacher.id"
          class="teacher-card"
        >
          <picture>
            <source
              type="image/webp"
              :srcset="`/img/${teacher.img}-220w.webp 1x, /img/${teacher.img}-220w-2x.webp 2x`"
            />
            <img
              class="teacher-card__img"
              :srcset="`/img/${teacher.img}-220w.jpg 1x, /img/${teacher.img}-220w-2x.jpg 2x`"
              :src="`/img/${teacher.img}-220w.jpg`"
              width="220"
              height="219"
              :alt="`Преподаватель ${teacher.name}`"
            />
          </picture>
          <figcaption>
            <p class="teacher-card__name text text--teacher-name">
              {{ teacher.name }}
            </p>
            <p class="teacher-card__country text text--teacher-country">
              {{ teacher.country }}
            </p>
          </figcaption>
        </figure>
      </BaseTeachersCarousel>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    teachers: {
      type: Array,
      required: true,
      validator() {
        return true
      },
    },
  },
}
</script>
