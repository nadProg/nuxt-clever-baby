<template>
  <footer id="page-footer" class="footer text text--basic">
    <div class="container container--footer">
      <div class="footer__wrapper">
        <p class="footer__copyright">
          <slot name="copyright" />
        </p>
        <nuxt-link class="footer__policy-link link" to="/">
          <slot name="policy" />
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>
<script>
export default {}
</script>
