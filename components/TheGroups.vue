<template>
  <BaseGroups :groups="groups">
    <template #header-title> Наши группы </template>
    <template #header-text>
      В группах занимается до 5 человек. Все дети в группе примерно одного
      возраста и уровня знаний.
    </template>
    <template #reserve-btn> Записаться </template>
  </BaseGroups>
</template>
<script>
export default {
  data: () => ({
    groups: [
      {
        title: 'Бэбики-1',
        timesInWeek: '1 раз',
        lessonDuration: '1,5 часа',
        monthPrice: 2500,
      },
      {
        title: 'Бэбики-2',
        timesInWeek: '2 раз',
        lessonDuration: '1,5 часа',
        monthPrice: 4000,
      },
      {
        title: 'Бэбики-3',
        timesInWeek: '3 раза',
        lessonDuration: '1 час',
        monthPrice: 4000,
      },
    ],
  }),
}
</script>
