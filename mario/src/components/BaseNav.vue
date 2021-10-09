<template>
  <nav class="navigation">
    <div class="siteWrap">
      <div class="navigation__row">
        <div class="navigation__logo">
          <router-link to="/">
            <img loading="lazy" alt="Tendokore" title="Tendokore. Retrograding the Present. Retro indie publisher" src="../assets/img/tendokore/tendokoreLogo50.png">
          </router-link>
        </div>
        <div class="navigation__media" v-if="firebaseTexts">
          <a v-if="firebaseTexts.mail && firebaseTexts.mail !== '0'" :href="`mailto: ${firebaseTexts.mail}`" class="media__anchor--mail"><font-awesome-icon :icon="iconMail" /></a>
          <a v-if="firebaseTexts.facebook && firebaseTexts.facebook !== '0'" rel="noopener noreferrer" target="_blank" :href="firebaseTexts.facebook" class="media__anchor--Facebook"><font-awesome-icon :icon="iconFacebook" /></a>
          <a v-if="firebaseTexts.twitter && firebaseTexts.twitter !== '0'" rel="noopener noreferrer" target="_blank" :href="firebaseTexts.twitter" class="media__anchor--Twitter"><font-awesome-icon :icon="iconTwitter" /></a>
          <a v-if="firebaseTexts.steam && firebaseTexts.steam !== '0'" rel="noopener noreferrer" target="_blank" :href="firebaseTexts.steam" class="media__anchor--Steam"><font-awesome-icon :icon="iconSteam" /></a>
          <a v-if="firebaseTexts.forum && firebaseTexts.forum !== '0'" rel="noopener noreferrer" target="_blank" :href="firebaseTexts.forum" class="media__anchor--Forum"><font-awesome-icon :icon="iconUsers" /></a>
          <a v-if="firebaseTexts.discord && firebaseTexts.discord !== '0'" rel="noopener noreferrer" target="_blank" :href="firebaseTexts.discord" class="media__anchor--discord"><font-awesome-icon :icon="iconDiscord" /></a>
        </div>
        <div class="navigation__newsletter">
        </div>
      </div>
    </div>
    <ul class="navigation__menu siteWrap" v-if="firebaseTexts && firebaseTexts.menu">
      <li v-for="(position, index) in firebaseTexts.menu" :key="`menu-pos-${index}`">
        <template v-if="position.active">
          <a v-if="internalLinkValues.some(item => position.url.includes(item))" class="rpgui-button" :href="position.url" rel="noopener noreferrer" target="_blank">
            {{ position.text ? position.text : '' }}
          </a>
          <router-link v-else-if="position.url.includes('#')" class="rpgui-button rou" :to="{ path: '/', hash: position.url }">
            {{ position.text ? position.text : '' }}
          </router-link>
          <a v-else class="rpgui-button" :href="position.url">
            {{ position.text ? position.text : '' }}
          </a>
        </template>
      </li>
    </ul>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faUsers } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faSteam, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { onMounted } from 'vue'
export default {
  name: 'BaseNav',
  props: {
    firebaseTexts: {}
  },
  components: {
    FontAwesomeIcon
  },
  setup () {
    onMounted(() => {
      const newsletter = document.getElementById('mc-embedded-subscribe-form')
      const newsletterArea = document.querySelector('.navigation__newsletter')
      newsletterArea.appendChild(newsletter)
    })
    const iconDiscord = faDiscord
    const iconMail = faEnvelope
    const iconFacebook = faFacebook
    const iconUsers = faUsers
    const iconTwitter = faTwitter
    const iconSteam = faSteam
    const internalLinkValues = ['http', 'https', 'www']

    return { iconMail, iconFacebook, iconUsers, iconTwitter, iconSteam, iconDiscord, internalLinkValues }
  }
}
</script>

<style lang="scss">
@import "src/assets/styles/variables.scss";
.navigation {
  padding: 0 12px;
  background: $dark;
  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 0;
  }
  &__menu {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 4px 0;
    li {
      margin: 0;
    }
    a {
      color: #fff;
      height: 40px;
      font-size: 0.8rem;
      justify-content: center;
      display: inline-flex;
      align-items: center;
    }
  }
  &__logo {
    height: 45px;
    width: 130px;
    margin: 0 auto 0 0;
    img {
      image-rendering: initial;
      height: 100%;
      max-width: 100%;
      width: auto;
      object-fit: contain;
      filter: invert(1);
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
    max-width: 300px;
    .rpgui-content label {
      display: none;
    }
    #mc-embedded-subscribe {
      font-size: 8px;
      padding: 0 2px 0 4px;
      cursor: url('/img/point.8d954a35.png') 10 0, auto;
    }
    #mc_embed_signup_scroll {
      display: flex;
      max-width: 300px;
      label {
        display: none !important;
      }
      .clear, #mce-EMAIL {
        display: inline-block;
        font-size: 12px;
        color: #fff;
        border: 1px solid #4e4a4e;
        &::placeholder {
          color: #fff;
        }
      }
      input:-webkit-autofill{
        -webkit-text-fill-color: #fff !important;
      }
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
          transition: background-color 5000s ease-in-out 0s;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .navigation {
    &__row {
      flex-wrap: wrap;
    }
    &__logo {
      height: 50px;
    }
    &__media {
      a {
        padding-right: 10px;
      }
    }
    &__menu {
      a {
        padding-left: 25px;
        padding-right: 25px;
        height: 32px;
      }
    }
    &__newsletter {
      margin-top: 6px;
      flex-basis: 100%;
      input {
        min-height: 24px;
        line-height: 24px;
        font-size: 10px;
      }
    }
  }
}
@media screen and (max-width: 440px) {
  .navigation__row {
    justify-content: center;
  }
  .navigation__flex {
    justify-content: center;
  }
  .navigation__newsletter {
    max-width: 100%;
    form {
      width: 100%;
    }
    #mc_embed_signup_scroll {
      max-width: 100%;
    }
  }
}
</style>
