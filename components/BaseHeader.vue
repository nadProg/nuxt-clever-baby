<template>
  <header class="header">
    <VContainer section="header">
      <nav class="nav js-nav">
        <div class="nav__logo-btn-wrapper js-nav__btn-logo-wrapper">
          <button
            class="nav__btn js-nav__menu-btn link"
            type="button"
            hidden=""
            aria-label="Открыть меню"
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
          <slot :slotClass="'nav__logo'" name="logo" />
        </div>
        <ul class="nav__site-nav site-nav text text--site-nav js-nav__site-nav">
          <li
            v-for="siteNavItem of siteNavItems"
            :key="siteNavItem.anchor"
            class="site-nav__item"
          >
            <VLink class="site-nav__link" :href="`#${siteNavItem.anchor}`">
              {{ siteNavItem.content }}
            </VLink>
          </li>
        </ul>
        <VLink
          class="nav__phone text text--contacts js-nav__phone"
          :href="`tel:${phone.replace(/[ \(\)-]/g, '')}`"
        >
          <svg class="nav__icon-phone" width="15" height="15">
            <use href="#icon-phone" />
          </svg>
          {{ phone }}
        </VLink>
      </nav>
    </VContainer>
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
  },
}
</script>
<style lang="scss">
@import '@/assets/styles/breaks';

.header {
  padding: 40px 0;

  @media (max-width: $desktop) {
    background-color: var(--color-white);
  }
}

.nav {
  display: flex;
  overflow: hidden;
  align-items: center;
  @media (max-width: $desktop) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.nav .link {
  outline: none;
  &:focus {
    filter: drop-shadow(0 0 1px var(--color-navy));
  }
}

.nav__logo-btn-wrapper {
  display: flex;
  margin-right: 55px;
  flex-shrink: 0;
  @media (max-width: $desktop) {
    margin-bottom: 40px;
  }
}

.nav__logo {
  width: 143px;
}

.nav__btn {
  position: relative;
  display: none;
  width: 24px;
  height: 24px;
  margin-right: 25px;
  padding: 0;
  cursor: pointer;
  transition: filter 300ms;
  border: none;
  outline: none;
  background: none;

  .nav__icon-btn--open {
    transform: rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }

  .nav__icon-btn--close {
    transform: scale(1);
    opacity: 1;
  }

  @media (max-width: $desktop) {
    display: inline-block;
  }
}

.nav__btn:hover {
  filter: drop-shadow(0 0 1px var(--color-navy));
}

.nav__icon-btn-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.js-nav__menu-btn--close {
  .nav__icon-btn--open {
    transform: rotate(0);
    opacity: 1;
  }

  .nav__icon-btn--close {
    transform: scale(0) rotate(180deg);
    opacity: 0;
  }
}

.nav__site-nav {
  margin: 0 0 -20px 0;
  padding: 0;
}

.nav__phone {
  display: flex;
  margin-left: auto;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  @media (max-width: $desktop) {
    margin-top: 35px;
    margin-left: 0;
  }
}

.nav__icon-phone {
  margin-right: 10px;
}

.site-nav {
  display: flex;
  width: 600px;
  padding: 0;
  list-style: none;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: $desktop) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.site-nav__item {
  margin: 0 20px 20px 0;
  padding: 0;
}

.site-nav__link {
  padding: 5px 0;
}
</style>
