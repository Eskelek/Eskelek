<template>
  <div>
  <PopupWindow v-if="isPopupTimeRight" :popupObj="popUpInformations" />
  <CustomBack v-if="customBackgroundImage && isCustomBackTimeRight" :backImage="customBackgroundImage" :backFull="customBackgroundFull" :backLink="customBackgroundLink" />
  <main class="home">
    <MainIntroduction :head="firebaseTexts ? firebaseTexts.main_title : ''" :subhead="firebaseTexts ? firebaseTexts.main_description : ''"/>
    <div class="games-kind" v-if="comingSoonGames.length">
      <p class="games-kind__heading siteWrap">Coming Soon</p>
      <div class="game siteWrap rpgui-container framed" v-for="(game, gameIndex) in comingSoonGames" :key="`slider-coming${gameIndex}`">
        <div class="game__mainInfo">
          <h2 v-if="game.title && game.title !== '0'" class="heading">{{ game.title }}</h2>
          <p v-if="game.description && game.description !== '0'" class="subheading">{{ game.description }}</p>
        </div>
        <swiper
          :slides-per-view="1"
          :space-between="0"
          navigation
          @slideChange="onSlideChange"
          :pagination="{ clickable: true }"
        >
          <swiper-slide v-for="(slide, ind) in game.slides" :key="`${gameIndex}slide-coming${ind}`">
            <img loading="lazy" v-if="slide.file_image" :src="slide.file_image" alt="Sorry - broken photo" title="Tendokore game photos">
            <img loading="lazy" v-else-if="slide.external_image" :class="ind != 0 ? 'lazyimg' : ''" :src="ind == 0 ? slide.external_image : ''" :data-src="slide.external_image" alt="Sorry - broken photo" title="Tendokore game photos">
            <YoutubeBase v-else-if="slide.youtube_link" :yLink="slide.youtube_link" :privKey="`c${gameIndex}ytb${ind}`" :key="`com${gameIndex}ytbox${ind}`"/>
            <div v-if="slide.show_slide_description" class="game__slide-info">
              <h3 v-if="slide.title && slide.title !== '0'" class="game__slide-title">
                {{ slide.title }}
              </h3>
              <p v-if="slide.description && slide.description !== '0'" class="game__slide-description">
                {{ slide.description }}
              </p>
            </div>
          </swiper-slide>
          ...
        </swiper>
        <div class="game__info">
          <div class="maker" v-if="game.maker && game.maker.maker_name && game.maker.maker_name !== '0'">
            <p class="maker__by">Developed by:</p>
            <a rel="noopener noreferrer" target="_blank" class="maker__link" :href="game.maker.maker_link ? game.maker.maker_link : ''">{{game.maker.maker_name}}</a>
          </div>
          <div class="tabs">
            <div v-if="game.buy_now_label" class="tabs__buy">
              <button>BUY NOW</button>
            </div>
            <div v-if="game.preorder_label" class="tabs__preorder">
              <button>PREORDER</button>
            </div>
            <a v-if="game.steam_link && game.steam_link !== '0'" rel="noopener noreferrer" target="_blank" :href="game.steam_link">
              <font-awesome-icon :icon="iconSteam" />
            </a>
            <a v-if="game.switch_link && game.switch_link !== '0'" rel="noopener noreferrer" target="_blank" :href="game.switch_link">
              <img loading="lazy" src="@/assets/img/tendokore/switch_poop.png" title="switch" alt="switch">
            </a>
            <a v-if="game.ps_link && game.ps_link !== '0'" rel="noopener noreferrer" target="_blank" :href="game.ps_link">
              <font-awesome-icon :icon="iconPS" />
            </a>
            <a v-if="game.xbox_link && game.xbox_link !== '0'" rel="noopener noreferrer" target="_blank" :href="game.xbox_link">
              <font-awesome-icon :icon="iconXbox" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="games-kind" v-if="releasedGames.length">
      <p class="games-kind__heading siteWrap">Released Games</p>
      <div class="game siteWrap rpgui-container framed" v-for="(game, gameIndex) in releasedGames" :key="`slider-released${gameIndex}`">
        <div class="game__mainInfo">
          <h2 v-if="game.title && game.title !== '0'" class="heading">{{ game.title }}</h2>
          <p v-if="game.description && game.description !== '0'" class="subheading">{{ game.description }}</p>
        </div>
        <swiper
          :slides-per-view="1"
          :space-between="0"
          @slideChange="onSlideChange"
          navigation
          :pagination="{ clickable: true }"
        >
          <swiper-slide v-for="(slide, ind) in game.slides" :key="`${gameIndex}slide-release${ind}`" :class="{ withText : slide.show_slide_description}">
            <img loading="lazy" v-if="slide.file_image" :src="slide.file_image" alt="Sorry - broken photo" title="Tendokore game photos">
            <img loading="lazy" v-else-if="slide.external_image" :class="ind != 0 ? 'lazyimg' : ''" :src="ind == 0 ? slide.external_image : ''" :data-src="slide.external_image" alt="Sorry - broken photo" title="Tendokore game photos">
            <YoutubeBase v-else-if="slide.youtube_link" :yLink="slide.youtube_link" :privKey="`r${gameIndex}ytb${ind}`" :key="`rel-${gameIndex}ytbox${ind}`"/>
            <div v-if="slide.show_slide_description" class="game__slide-info">
              <h3 v-if="slide.title && slide.title !== '0'" class="game__slide-title">
                {{ slide.title }}
              </h3>
              <p v-if="slide.description && slide.description !== '0'" class="game__slide-description">
                {{ slide.description }}
              </p>
            </div>
          </swiper-slide>
          ...
        </swiper>
        <div class="game__info">
          <div class="maker" v-if="game.maker && game.maker.maker_name && game.maker.maker_name !== '0'">
            <p class="maker__by">Developed by:</p>
            <a rel="noopener noreferrer" target="_blank" class="maker__link" :href="game.maker.maker_link ? game.maker.maker_link : ''">{{game.maker.maker_name}}</a>
          </div>
          <div class="tabs">
            <div v-if="game.buy_now_label" class="tabs__buy">
              <button>BUY NOW</button>
            </div>
            <div v-if="game.preorder_label" class="tabs__preorder">
              <button>PREORDER</button>
            </div>
            <a v-if="game.steam_link && game.steam_link !== '0'" rel="noopener noreferrer" target="_blank" :href="game.steam_link">
              <font-awesome-icon :icon="iconSteam" />
            </a>
            <a v-if="game.switch_link && game.switch_link !== '0'" rel="noopener noreferrer" target="_blank" :href="game.switch_link">
              <img loading="lazy" src="@/assets/img/tendokore/switch_poop.png" title="switch" alt="switch">
            </a>
            <a v-if="game.ps_link && game.ps_link !== '0'" rel="noopener noreferrer" target="_blank" :href="game.ps_link">
              <font-awesome-icon :icon="iconPS" />
            </a>
            <a v-if="game.xbox_link && game.xbox_link !== '0'" rel="noopener noreferrer" target="_blank" :href="game.xbox_link">
              <font-awesome-icon :icon="iconXbox" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
  </div>
</template>

<script>
// components
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

// icons
import { faSteam, faPlaystation, faXbox } from '@fortawesome/free-brands-svg-icons'

// composable
import { useStore } from 'vuex'
import getGames from '../composables/getGames'

// Import Swiper styles
import 'swiper/swiper-bundle.css'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import { defineAsyncComponent, ref, computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

SwiperCore.use([Navigation, Pagination])

export default {
  name: 'Home',
  props: {
    policy: {},
    firebaseTexts: {}
  },
  components: {
    FontAwesomeIcon,
    YoutubeBase: defineAsyncComponent(() =>
      import('../components/YoutubeBase.vue')
    ),
    MainIntroduction: defineAsyncComponent(() =>
      import('../components/MainIntroduction.vue')
    ),
    PopupWindow: defineAsyncComponent(() =>
      import('../components/PopupWindow.vue')
    ),
    CustomBack: defineAsyncComponent(() =>
      import('../components/CustomBack.vue')
    ),
    Swiper,
    SwiperSlide
  },
  setup (props) {
    const { games, errorGames, loadGames } = getGames()
    loadGames()
    const gamesFilt = ref(games)

    const store = useStore()

    const onSlideChange = () => {
      const lazyImages = document.getElementsByClassName('lazyimg')
      for (const limg of lazyImages) {
        limg.src = limg.dataset.src
      }
    }

    const popUpInformations = computed(() => {
      if (props.firebaseTexts && props.firebaseTexts.popup) {
        return props.firebaseTexts.popup
      }
      return ''
    })

    const customBackground = computed(() => {
      if (props.firebaseTexts && props.firebaseTexts.customBackground) {
        return props.firebaseTexts.customBackground
      }
      return ''
    })

    const sortByOrder = (a, b) => {
      return a.order - b.order
    }

    const comingSoonGames = computed(() => {
      const cGames = gamesFilt.value.filter((game) => {
        return game.released === false
      })
      if (cGames.length > 0) {
        store.dispatch('setComingSoonGames', cGames.sort(sortByOrder))
        return cGames.sort(sortByOrder)
      } else {
        return store.getters.getComingSoonGames
      }
    })
    const releasedGames = computed(() => {
      const rGames = gamesFilt.value.filter((game) => {
        return game.released === true
      })
      if (rGames.length > 0) {
        store.dispatch('setReleasedGames', rGames.sort(sortByOrder))
        return rGames.sort(sortByOrder)
      } else {
        return store.getters.getReleasedGames
      }
    })
    const iconPS = faPlaystation
    const iconSteam = faSteam
    const iconXbox = faXbox
    const today = new Date()
    const plTime = today.toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Europe/Warsaw' }).replace(',', '').replaceAll('/', '-')
    const isPopupTimeRight = computed(() => {
      if (popUpInformations.value.dateStart === '0' || popUpInformations.value.dateEnd === '0') {
        return false
      }
      return popUpInformations.value.dateStart < plTime && popUpInformations.value.dateEnd > plTime
    })
    const customBackgroundImage = computed(() => {
      return (customBackground.value.fullImage && customBackground.value.fullImage !== '0') ? customBackground.value.fullImage : ((customBackground.value.pattern && customBackground.value.pattern !== '0') ? customBackground.value.pattern : false)
    })
    const customBackgroundFull = computed(() => {
      return (customBackground.value.fullImage && customBackground.value.fullImage !== '0') || false
    })
    const customBackgroundLink = computed(() => {
      return (customBackground.value.link && customBackground.value.link !== '0') || false
    })
    const isCustomBackTimeRight = computed(() => {
      if (customBackground.value.dateStart === '0' || customBackground.value.dateEnd === '0') {
        return false
      }
      return customBackground.value.dateStart < plTime && customBackground.value.dateEnd > plTime
    })

    return { onSlideChange, releasedGames, comingSoonGames, errorGames, iconSteam, iconPS, iconXbox, isPopupTimeRight, popUpInformations, customBackgroundImage, customBackgroundFull, customBackgroundLink, isCustomBackTimeRight }
  }
}

</script>

<style lang="scss">
  .swiper-container {
    position: relative;
  }
  .swiper-container-horizontal > .swiper-pagination-clickable .swiper-pagination-bullet {
    margin: 0 8px;
  }
  .swiper-pagination {
    position: absolute;
    top: 10px;
    width: 100%;
    z-index: 10;
    bottom: unset !important;
  }
  .swiper-pagination-bullet {
    width: 16px;
    height: 16px;
    z-index: 10000;
    border: 1px solid #000;
    background: #854c2f;
    display: inline-block;
    border-radius: 0;
    opacity: 0.9;
    transition: 0.3s;
  }
  .swiper-pagination-bullet-active, .swiper-pagination-bullet:hover  {
    background: #d27d2c;
    border-color: #d27d2c;
    opacity: 1;
  }
  .swiper-button-prev, .swiper-button-next {
    color: #d27d2c
  }
</style>

<style lang="scss" scoped>
@import "src/assets/styles/variables.scss";
.home {
  padding: 0 8px;
  margin: 0 auto;
  background: #854c2f;
  max-width: 900px;
  width: 100%;
  z-index: 0;
}
.games-kind {
  padding-bottom: 2rem;
  &__heading {
    text-align: center;
    font-size: 1.1rem;
    padding-bottom: 1rem;
  }
}
.game {
  padding: 0;
  position: static;
  text-align: center;
  margin-bottom: 1.5rem;
  .swiper-slide {
    height: auto;
    background: $dark;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
    &.withText {
      padding-top: 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img, .yt {
        max-width: 70%;
        margin-left: auto;
        margin-right: auto;
        height: auto !important;
      }
      .yt {
        padding-bottom: 40%;
      }
    }
  }
  &__slide-info {
    padding: 4px 1rem;
    background: $dark;
  }
  &__slide-title {
    font-size: 0.8rem;
    text-decoration: none;
    padding: 0.5rem 0;
    margin: 0;
  }
  &__slide-description {
    padding: 0.5rem 0;
    font-size: 0.7rem;
    margin: 0;
  }
  &__mainInfo {
    padding: 1rem;
    p {
      font-size: 0.85rem;
    }
  }
  &__info {
    position: relative;
    padding: 0.5rem 1rem;
    height: auto;
    width: 100%;
    background: rgba($dark, .5);
    text-align: center;
    display: flex;
    justify-content: space-between;
    .tabs {
      display: inline-flex;
      justify-content: flex-end;
      align-items: center;
      &__buy, &__preorder {
        height: 100%;
        button {
          cursor: url("../assets/img/cursor/default.png"), auto !important;
          padding: 6px 4px 4px 4px;
          border-radius: 3px;
          margin: -2px 2px;
          height: calc(100% + 4px);
          background: red;
          border: 1px solid red;
          color: #fff;
        }
      }
      a {
        margin-left: 0.5rem;
        font-size: 2rem;
        display: inline-flex;
        align-items: center;
        img {
          height: 2rem;
          width: 2rem;
          object-fit: contain;
          image-rendering: optimizeSpeed;
        }
      }
    }
    .maker {
      display: inline-flex;
      align-items: center;
      flex-wrap: wrap;
      &__by {
        font-size: 0.8rem;
        padding-right: 8px;
      }
      &__heading {
        font-size: 1.2rem;
        padding: 0.5rem 0 1rem 0;
      }
      &__subheading {
        padding: 0.5rem;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .game {
    margin-bottom: 1rem;
    .swiper-slide {
      &.withText {
        img, .yt {
          max-width: 90%;
        }
        .yt {
          padding-bottom: 56%;
        }
      }
    }
    &__info {
      flex-wrap: wrap;
      .tabs {
        flex-basis: 100%;
        justify-content: flex-start;
        margin-top: 4px;
        &__buy {
          button {
            height: 100%;
            margin: 0 4px 0 0;
          }
        }
      }
      .maker {
        &__heading {
          font-size: 14px;
        }
        &__subheading {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
