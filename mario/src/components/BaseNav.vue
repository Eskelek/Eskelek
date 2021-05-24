<template>
  <nav class="navigation">
    <div class="siteWrap">
      <div class="navigation__row">
        <div class="navigation__logo">
          <router-link to="/">
            <img alt="Tendoko" title="Tendoko" src="../assets/img/tendokore/tendokoreLogo.jpg">
          </router-link>
        </div>
        <div class="navigation__media" v-if="firebaseTexts">
          <a :href="`mailto: ${firebaseTexts.mail ? firebaseTexts.mail : ''}`" class="media__anchor--mail"><font-awesome-icon :icon="iconMail" /></a>
          <a rel="noopener noreferrer" target="_blank" :href="firebaseTexts.facebook ? firebaseTexts.facebook : ''" class="media__anchor--Facebook"><font-awesome-icon :icon="iconFacebook" /></a>
          <a rel="noopener noreferrer" target="_blank" :href="firebaseTexts.discord ? firebaseTexts.discord : ''" class="media__anchor--discord"><font-awesome-icon :icon="iconDiscord" /></a>
        </div>
        <div class="navigation__newsletter">
          <input type="email" placeholder="Join Our Newsletter">
          <button>SEND</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faDiscord } from '@fortawesome/free-brands-svg-icons'
export default {
  name: 'BaseNav',
  props: {
    firebaseTexts: {}
  },
  components: {
    FontAwesomeIcon
  },
  setup () {
    const iconMail = faEnvelope
    const iconFacebook = faFacebook
    const iconDiscord = faDiscord

    return { iconMail, iconFacebook, iconDiscord }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/variables.scss";

.navigation {
  background: $dark;
  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
  }
  &__logo {
    height: 75px;
    width: 130px;
    margin-right: 20px;
    img {
      height: 100%;
      max-width: 100%;
      width: auto;
      object-fit: contain;
      filter: invert(1) contrast(0.8);
    }
  }
  &__media {
    a {
      padding: 0 1vw;
      color: #fff;
      font-size: 2rem;
    }
  }
  &__newsletter {
    display: inline-flex;
  }
}
</style>
