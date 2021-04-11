<template>
  <BaseHeader :site-nav-items="siteNavItems" :phone="phone">
    <template #logo="{ slotClass }">
      <TheLogo :class="slotClass" />
    </template>
  </BaseHeader>
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
  }),
}
</script>
