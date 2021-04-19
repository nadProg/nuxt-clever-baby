<template>
  <BaseAbout id="about" class="about text text--basic">
    <template #title>Как проходит обучение</template>
    <template #text-column="{ lead, text }">
      <p :class="lead">Играя — обучаем, обучая — развиваем</p>
      <p :class="text">
        Мы взяли все самое лучшее из традиционных и современных методик обучения
        и развития детей. Обучение английскому языку происходит легко и
        интересно, ведь малыши не зубрят материал по учебникам, а познают его
        через игру, сказки, книги и музыку.
      </p>
      <p :class="text">
        Наша методика также включает в себя обучение по программе Cambridge.
        Благодаря этому, наши ученики без труда сдают международные и
        государственные экзамены.
      </p>
    </template>
    <template #video-column="{ lead, video }">
      <p :class="lead">Посмотрите, как проходят наши занятия</p>
      <TheVideoPlayer :class="video" />
    </template>
  </BaseAbout>
</template>
<script>
export default {}
</script>
