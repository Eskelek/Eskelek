<template>
  <div class="linksPage">
    <div v-html="stylesCss"></div>
    <div class="sitewrap">
      <div class="avatar">
        <img v-if="pageLinksSettingsVal && pageLinksSettingsVal.avatar_url && pageLinksSettingsVal.avatar_url !== '0'" loading="lazy" alt="tendokore avatar" class="avatar__img" :src="pageLinksSettingsVal.avatar_url">
        <h1 v-if="pageLinksSettingsVal && pageLinksSettingsVal.text_under_avatar && pageLinksSettingsVal.text_under_avatar !== '0'" class="avatar__header">{{ pageLinksSettingsVal.text_under_avatar }}</h1>
      </div>
      <div class="links">
        <ul class="links__list" v-if="linksList">
          <LinkListItem v-for="(linkItem, index) in linksList" :key="`linklist-${index}`" class="links__item" :class="`links__item--${index}`" :content="linkItem" :indexVal="index"/>
        </ul>
      </div>
      <div class="social-row" v-if="pageLinksSettingsVal && pageLinksSettingsVal.social">
        <a v-if="pageLinksSettingsVal.social.facebook && pageLinksSettingsVal.social.facebook !== '0'" rel="noopener noreferrer" target="_blank" class="social-row__icon-box social-row__icon-box--fb" :href="pageLinksSettingsVal.social.facebook">
          <font-awesome-icon :icon="iconFacebook" />
        </a>
        <a v-if="pageLinksSettingsVal.social.discord && pageLinksSettingsVal.social.discord !== '0'" rel="noopener noreferrer" target="_blank" class="social-row__icon-box social-row__icon-box--fb" :href="pageLinksSettingsVal.social.discord">
          <font-awesome-icon :icon="iconDiscord" />
        </a>
        <a v-if="pageLinksSettingsVal.social.twitter && pageLinksSettingsVal.social.twitter !== '0'" rel="noopener noreferrer" target="_blank" class="social-row__icon-box social-row__icon-box--fb" :href="pageLinksSettingsVal.social.twitter">
          <font-awesome-icon :icon="iconTwitter" />
        </a>
        <a v-if="pageLinksSettingsVal.social.forum && pageLinksSettingsVal.social.forum !== '0'" rel="noopener noreferrer" target="_blank" class="social-row__icon-box social-row__icon-box--fb" :href="pageLinksSettingsVal.social.forum">
          <font-awesome-icon :icon="iconUsers" />
        </a>
        <a v-if="pageLinksSettingsVal.social.steam && pageLinksSettingsVal.social.steam !== '0'" rel="noopener noreferrer" target="_blank" class="social-row__icon-box social-row__icon-box--fb" :href="pageLinksSettingsVal.social.steam">
          <font-awesome-icon :icon="iconSteam" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import LinkListItem from '../components/LinkListItem.vue'
import { computed, ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faSteam, faDiscord } from '@fortawesome/free-brands-svg-icons'
// composable
import getLinks from '../composables/getLinks'
export default {
  props: {
    firebaseTexts: {},
    policy: {}
  },
  components: {
    LinkListItem,
    FontAwesomeIcon
  },
  setup () {
    const { links, errorLinks, loadLinks } = getLinks()
    loadLinks()
    const pageLinksSettings = ref(links)
    const pageLinksSettingsVal = computed(() => {
      return pageLinksSettings.value[0]
    })
    const isBackgroundIsFull = computed(() => {
      if (pageLinksSettingsVal.value && pageLinksSettingsVal.value.background_image) {
        if (pageLinksSettingsVal.value.background_image === '0') {
          return false
        }
        return pageLinksSettingsVal.value.background_image || false
      }
      return false
    })
    const linksList = computed(() => {
      if (pageLinksSettingsVal.value && pageLinksSettingsVal.value.linkList) {
        return pageLinksSettingsVal.value.linkList || false
      }
      return []
    })
    const iconDiscord = faDiscord
    const iconFacebook = faFacebook
    const iconUsers = faUsers
    const iconTwitter = faTwitter
    const iconSteam = faSteam
    const stylesCss = computed(() => {
      if (pageLinksSettingsVal.value) {
        return `
        <style>
          body {
            background: ${pageLinksSettingsVal.value.background_color};
            background-image: url(${isBackgroundIsFull.value || pageLinksSettingsVal.value.background_pattern});
            background-size: ${isBackgroundIsFull.value ? 'cover' : 'unset'};
            background-position: center;
            background-repeat: ${isBackgroundIsFull.value ? 'no-repeat' : 'repeat'};
            image-rendering: initial;
          }
        </style>
      `
      }
      return ''
    })

    return { iconFacebook, iconUsers, iconTwitter, iconSteam, iconDiscord, linksList, pageLinksSettingsVal, isBackgroundIsFull, stylesCss, errorLinks }
  }
}
</script>
<style lang="scss" scoped>
  .linksPage {
    min-height: 70vh;
    text-align: center;
    padding: 24px 16px;
    .avatar {
      margin-bottom: 50px;
      margin-top: 16px;
      img {
        max-width: 100%;
      }
      &__header {
        font-family: 'Roboto', sans-serif;
        text-shadow: 1px 1px 1px #333;
      }
    }
    .sitewrap {
      max-width: 680px;
      margin: 0 auto;
    }
    .social-row {
      margin-top: 16px;
      a {
        color: #fff;
        font-size: 32px;
        padding: 10px;
        transition: 0.3s;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
  @media (max-width: 450px) {
    .linksPage {
      padding: 16px 16px;
      .avatar {
        margin-bottom: 20px;
        margin-top: 0px;
      }
      .social-row {
        a {
          padding: 8px;
        }
      }
    }
  }
</style>
