<template>
  <header class="header">
    <div class="container container--header">
      <nav class="nav" :class="navStatusClass">
        <div class="nav__logo-btn-wrapper">
          <button
            class="nav__btn link"
            type="button"
            hidden=""
            :aria-label="burgerAriaLabel"
            @click="$emit('burger-click')"
          >
            <span class="nav__icon-btn-wrapper">
              <svg
                class="nav__icon-btn nav__icon-btn--open"
                width="24"
                height="12"
              >
                <use href="#icon-burger-btn" />
              </svg>
            </span>
            <span class="nav__icon-btn-wrapper">
              <svg
                class="nav__icon-btn nav__icon-btn--close"
                width="18"
                height="18"
              >
                <use href="#icon-close-btn" />
              </svg>
            </span>
          </button>
          <nuxt-link class="nav__logo link logo" to="/">
            <svg width="143" height="23">
              <use href="#logo" />
            </svg>
          </nuxt-link>
        </div>
        <ul class="nav__site-nav site-nav text">
          <li
            v-for="siteNavItem of siteNavItems"
            :key="siteNavItem.anchor"
            class="site-nav__item"
          >
            <a
              class="site-nav__link link"
              :href="`#${siteNavItem.anchor}`"
              @click.prevent="$emit('navlink-click', `#${siteNavItem.anchor}`)"
            >
              {{ siteNavItem.content }}
            </a>
          </li>
        </ul>
        <a
          class="nav__phone text link"
          :href="`tel:${phone.replace(/[ \(\)-]/g, '')}`"
        >
          <svg class="nav__icon-phone" width="15" height="15">
            <use href="#icon-phone" />
          </svg>
          {{ phone }}
        </a>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    siteNavItems: {
      type: Array,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    isExpanded: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    navStatusClass() {
      return `nav--${this.isExpanded ? 'open' : 'close'}`
    },
    burgerAriaLabel() {
      return `${this.isExpanded ? 'Закрыть' : 'Открыть'} меню`
    },
  },
}
</script>
