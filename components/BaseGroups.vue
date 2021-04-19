<template>
  <section id="groups" class="groups">
    <div class="container bg-decor bg-decor--groups">
      <header class="groups__header">
        <h2 class="groups__title title">
          <slot name="header-title" />
        </h2>
        <p class="groups__text text text--basic">
          <slot name="header-text" />
        </p>
      </header>
      <ul class="groups__list">
        <li
          v-for="(group, index) of groups"
          :key="`group-item--babik-${index + 1}`"
          class="groups__item"
        >
          <div
            class="group-item text"
            :class="`group-item--babik-${index + 1}`"
          >
            <h3 class="group-item__name text text--lead">
              {{ group.title }}
            </h3>
            <p class="group-item__text">{{ group.timesInWeek }} в неделю</p>
            <p class="group-item__text">{{ group.lessonDuration }} занятие</p>
            <p class="group-item__text">
              <b class="group-item__price"> {{ group.monthPrice }} &#8381;</b>
              в месяц
            </p>
            <nuxt-link
              class="group-item__reserve-btn btn btn--reserve"
              to="/"
            />
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    groups: {
      type: Array,
      required: true,
      validator(groups) {
        return groups.every(
          (group) =>
            group.title &&
            group.timesInWeek &&
            group.lessonDuration &&
            group.monthPrice
        )
      },
    },
  },
}
</script>
