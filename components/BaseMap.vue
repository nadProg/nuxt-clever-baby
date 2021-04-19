<template>
  <div ref="root" class="contacts__map-wrapper">
    <client-only v-if="isMapLoaded">
      <l-map ref="map" :center="center" :zoom="zoom" class="contacts__map map">
        <l-tile-layer
          :url="url"
          :attribution="attribution"
          @tileerror="$emit('error')"
        />
        <l-marker
          :lat-lng="center"
          tabindex="-1"
          :options="{ keyboard: false }"
        />
      </l-map>
    </client-only>
    <picture v-else>
      <source
        type="image/webp"
        srcset="/img/map-768w.webp 1x, /img/map-768w-2x.webp 2x"
        sizes="768px"
        media="(max-width: 768px)"
      />
      <source
        type="image/webp"
        srcset="/img/map-1366w.webp 1x, /img/map-1366w-2x.webp 2x"
        sizes="1366px"
      />
      <source
        type="image/jpeg"
        srcset="/img/map-768w.jpg 1x, /img/map-768w-2x.jpg 2x"
        sizes="768px"
        media="(max-width: 768px)"
      />
      <img
        class="contacts__map-fallback"
        srcset="/img/map-1366w.jpg 1x, /img/map-1366w-2x.jpg 2x"
        sizes="1366px"
        :alt="address"
      />
    </picture>
  </div>
</template>
<script>
export default {
  props: {
    isMapLoaded: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Array,
      required: true,
      validator: (center) => {
        if (center.length !== 2) return false
        return typeof center[0] === 'number' && typeof center[1] === 'number'
      },
    },
    address: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    zoom: 16,
  }),
  mounted() {
    delete this.$L.Icon.Default.prototype._getIconUrl
    this.$L.Icon.Default.mergeOptions({
      iconRetinaUrl: null,
      iconUrl: '/img/icon-location.svg',
      shadowUrl: null,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    })

    if (!this.isMapLoaded) return

    this.$nextTick(() => {
      const links = this.$refs.root.querySelectorAll('a')
      links.forEach((link) => {
        link.tabIndex = '-1'
      })
    })
  },
}
</script>
<style>
.map {
  transition: box-shadow 300ms;
}

.map:focus {
  box-shadow: 0 0 5px 0 var(--color-navy);
}
</style>
