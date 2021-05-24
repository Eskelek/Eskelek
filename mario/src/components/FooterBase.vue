<template>
  <footer class="footer">
    <div class="siteWrap">
      <div class="footer__description">
        <p>{{ firebaseTexts ? firebaseTexts.footer_description: '' }}</p>
      </div>
      <div class="footer__links">
        <router-link :to="{ name: 'Policy' }">Polityka Prywatności</router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBase',
  props: {
    firebaseTexts: {}
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/variables.scss";
.footer {
  padding: 1rem 0;
  margin-top: 2rem;
  background: $dark;
  &__description {
    margin-bottom: 1rem;
  }
  &__links {
    display: flex;
    justify-content: center;
  }
}
</style>
