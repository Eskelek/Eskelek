<template>
  <footer class="footer" id="about-us">
    <div class="siteWrap">
      <div v-if="firebaseTexts.footer_description" class="footer__description">
        <p>{{ firebaseTexts.footer_description }}</p>
      </div>
      <div class="footer__links">
        <a target="_blank" rel="noopener noreferrer" :href="policy.long_policy">Privacy Policy</a>
        <a target="_blank" rel="noopener noreferrer" :href="policy.cookie_policy">Cookie Policy</a>
      </div>
      <div class="footer__more">
        <div class="logo">
          <router-link to="/">
            <img loading="lazy" alt="Tendoko" title="Tendoko" src="../assets/img/tendokore/tendokoreLogo50.png">
          </router-link>
        </div>
        <ul v-if="firebaseTexts.footer_rules" class="rules">
          <li v-for="(rule, ind) in firebaseTexts.footer_rules" :key="`rule-0${ind}`">
            {{rule}}
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBase',
  props: {
    firebaseTexts: {},
    policy: {}
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/variables.scss";
.footer {
  padding: 1rem 12px;
  background: $dark;
  &__description {
    margin-bottom: 1rem;
    text-align: justify;
  }
  &__links {
    display: flex;
    justify-content: center;
    a {
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
    }
  }
  &__more {
    text-align: center;
    .logo {
      margin-top: 10px;
      height: 50px;
      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
        filter: invert(1);
        image-rendering: initial;
      }
    }
    .rules {
      margin-top: 1rem;
      li {
        font-size: 0.6rem;
        line-height: 1.5;
        padding-bottom: 2px;
      }
    }
  }
}
</style>
