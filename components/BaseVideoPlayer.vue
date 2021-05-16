<template>
  <div :class="classList">
    <vue-plyr>
      <video
        ref="video"
        class="video-player__video"
        preload="metadata"
        width="431"
        height="231"
        poster="."
      >
        <source type="video/webm" :src="`video/${videoName}.webm`" />
        <source type="video/mp4" :src="`video/${videoName}.mp4`" />
      </video>
    </vue-plyr>
  </div>
</template>
<script>
export default {
  props: {
    videoName: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    plyr: null,
    initial: true,
    base: 'video-player',
  }),
  computed: {
    classList() {
      return [
        this.base,
        `${this.base}--${this.initial ? 'initial' : 'playing'}`,
      ]
    },
  },
  created() {
    this.onVideoPlayerClick = this.onVideoPlayerClick.bind(this)
  },
  mounted() {
    this.plyr = this.$refs.video.closest('.plyr')
    if (!this.plyr) return

    this.plyr.tabIndex = '-1'
    this.plyr.addEventListener('click', this.onVideoPlayerClick)
  },
  beforeDestroy() {
    if (!this.plyr) return
    this.plyr.addEventListener('click', this.onVideoPlayerClick)
  },
  methods: {
    onVideoPlayerClick(evt) {
      this.initial = false
      evt.currentTarget.removeEventListener('click', this.onVideoPlayerClick)
    },
  },
}
</script>
<style lang="scss">
.plyr {
  --plyr-color-main: var(--color-wheat);
  --plyr-video-background: transparent;
}

.plyr,
.plyr__video-wrapper {
  background: transparent !important;
}

.plyr__control.plyr__tab-focus {
  outline: medium solid var(--plyr-color-main);
}

.video-player--initial {
  .plyr__controls {
    display: none;
  }
}
</style>
