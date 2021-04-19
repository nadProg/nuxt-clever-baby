<template>
  <BaseHeader
    :site-nav-items="siteNavItems"
    :phone="phone"
    :is-expanded="isExpanded"
    @burger-click="onBurgerClick"
    @navlink-click="onNavlinkClick"
  />
</template>
<script>
export default {
  data: () => ({
    siteNavItems: [
      { content: 'Методика', anchor: 'about' },
      { content: 'Преподаватели', anchor: 'teachers' },
      { content: 'Группы', anchor: 'groups' },
      { content: 'Отзывы', anchor: 'testimonials' },
      { content: 'Контакты', anchor: 'contacts' },
    ],
    phone: '+ 7 (495) 983-47-19',
    isExpanded: true,
  }),
  methods: {
    onBurgerClick() {
      this.isExpanded = !this.isExpanded
    },
    onNavlinkClick(anchor) {
      const element = document.querySelector(anchor)
      if (element) {
        element.scrollIntoView({ block: 'start', behavior: 'smooth' })
      }
    },
  },
}
</script>
