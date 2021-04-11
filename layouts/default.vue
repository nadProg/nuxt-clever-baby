<template>
  <div>
    <TheSprite />
    <TheHeader />
    <Nuxt />
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/fonts';
@import '@/assets/styles/text';
@import '@/assets/styles/custom-colors';
@import '@/assets/styles/custom-fonts';

.ally-hidden {
  position: absolute;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
}
</style>
