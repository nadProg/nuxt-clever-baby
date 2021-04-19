<template>
  <div
    ref="sliderWrapper"
    aria-live="polite"
    aria-labelledby="teachers-title"
    tabindex="0"
    @focusin="onSliderFocus"
    @keydown.left="onKeydownLeft"
    @keydown.right="onKeydownRight"
  >
    <VueSlickCarousel ref="slider" v-bind="sliderOptions">
      <template #default>
        <slot />
      </template>
      <template #prevArrow>
        <button type="button" aria-label="Назад" tabindex="-1">
          <svg class="teacher__slider-icon" width="15" height="8">
            <use href="#icon-arrow-left" />
          </svg>
        </button>
      </template>
      <template #nextArrow>
        <button type="button" aria-label="Вперед" tabindex="-1">
          <svg class="teacher__slider-icon" width="15" height="8">
            <use href="#icon-arrow-right" />
          </svg>
        </button>
      </template>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  components: {
    VueSlickCarousel,
  },
  data: () => ({
    sliderOptions: {
      accessibility: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true,
      responsive: [
        {
          breakpoint: 1365,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
  }),
  methods: {
    onSliderFocus() {
      this.$refs.sliderWrapper.focus()
    },
    onKeydownLeft() {
      this.$refs.slider.prev()
    },
    onKeydownRight() {
      this.$refs.slider.next()
    },
  },
}
</script>
<style lang="scss">
.slick-slider {
  z-index: 0;
  padding-bottom: 30px;
}

.slick-arrow {
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 50%;
  display: flex;
  padding: 5px;
  cursor: pointer;
  transition: opacity 500ms;
  border: none;
  outline: none;
  background: none;
  stroke: #122659;
  justify-content: center;
  align-items: center;
}

.slick-arrow:hover {
  opacity: 0.75;
}

$arrow-shift: 75%;

.slick-prev {
  transform: translateX(-50%) translateX(-$arrow-shift);
}

.slick-next {
  transform: translateX(-50%) translateX($arrow-shift);
}

@media (max-width: 767px) {
  .slick-slider {
    padding-bottom: 0;
  }

  .slick-arrow {
    transform: translateY(-50%);
    left: initial;
  }

  $arrow-shift: 0;

  .slick-prev {
    left: $arrow-shift;
  }

  .slick-next {
    right: $arrow-shift;
  }
}
</style>
