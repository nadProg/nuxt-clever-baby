<template>
  <BaseTeachers id="teachers" :teachers="teachers">
    <template #header-title> Наши преподаватели </template>
    <template #header-text>
      Все наши преподаватели — носители английского языка и имеют необходимое
      образование и опыт работы с детьми
    </template>
  </BaseTeachers>
</template>
<script>
export default {
  data: () => ({
    teachers: [
      {
        id: 'teacher-1',
        img: 'teacher-1',
        name: 'Kate Smith',
        country: 'США',
      },
      {
        id: 'teacher-2',
        img: 'teacher-2',
        name: 'Samuel King',
        country: 'США',
      },
      {
        id: 'teacher-3',
        img: 'teacher-3',
        name: 'Nikole Young',
        country: 'Канада',
      },
      {
        id: 'teacher-4',
        img: 'teacher-4',
        name: 'Karoline Bush',
        country: 'Канада',
      },
      {
        id: 'teacher-5',
        img: 'teacher-1',
        name: 'Kate Smith',
        country: 'Канада',
      },
      {
        id: 'teacher-6',
        img: 'teacher-2',
        name: 'Samuel King',
        country: 'США',
      },
      {
        id: 'teacher-7',
        img: 'teacher-3',
        name: 'Nikole Young',
        country: 'Канада',
      },
      {
        id: 'teacher-8',
        img: 'teacher-4',
        name: 'Karoline Bush',
        country: 'США',
      },
      {
        id: 'teacher-9',
        img: 'teacher-1',
        name: 'Kate Smith',
        country: 'США',
      },
      {
        id: 'teacher-10',
        img: 'teacher-2',
        name: 'Samuel King',
        country: 'Канада',
      },
      {
        id: 'teacher-11',
        img: 'teacher-3',
        name: 'Nikole Young',
        country: 'Канада',
      },
      {
        id: 'teacher-12',
        img: 'teacher-4',
        name: 'Karoline Bush',
        country: 'Канада',
      },
    ],
  }),
}
</script>
