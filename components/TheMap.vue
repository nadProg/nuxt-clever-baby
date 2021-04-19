<template>
  <BaseMap
    :is-map-loaded="isMapLoaded"
    :center="center"
    :address="address"
    @error="onError"
  />
</template>
<script>
export default {
  data: () => ({
    isMapLoaded: true,
    center: [59.9397027199454, 30.323531627655033],
    address: 'Санкт-Петербург, ул. Большая Конюшенная, 19',
  }),
  methods: {
    onError(evt) {
      this.isMapLoaded = false
    },
  },
}
</script>
