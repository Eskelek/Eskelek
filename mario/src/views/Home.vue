<template>
  <MainIntroduction :head="firebaseTexts ? firebaseTexts.main_title : ''" :subhead="firebaseTexts ? firebaseTexts.main_description : ''"/>
  <main class="home">
    <div class="game siteWrap rpgui-container framed" v-for="(game, gameIndex) in games" :key="`slider${gameIndex}`">
      <div class="game__mainInfo">
        <h2 class="heading">{{ game.title }}</h2>
        <p class="subheading">{{ game.description }}</p>
      </div>
      <swiper
        :slides-per-view="1"
        :space-between="0"
        :pagination="{ clickable: true }"
      >
        <swiper-slide v-for="(slide, ind) in game.slides" :key="`${gameIndex}slide${ind}`">
          <img v-if="slide.file_image" :src="slide.file_image">
          <img v-else-if="slide.external_image" :src="slide.external_image">
          <YoutubeBase v-else-if="slide.youtube_link" :yLink="slide.youtube_link"/>
        </swiper-slide>
        ...
      </swiper>
      <div class="game__info">
        <div class="maker">
          <p>Made By:</p>
          <a rel="noopener noreferrer" target="_blank" class="maker__link" :href="game.maker.maker_link">{{game.maker.maker_name}}</a>
        </div>
        <div class="tabs">
          <a rel="noopener noreferrer" target="_blank" :href="game.steam_link">
            <font-awesome-icon :icon="iconSteam" />
          </a>
          <a rel="noopener noreferrer" target="_blank" :href="game.switch_link">
            <img src="@/assets/img/tendokore/switchred.jpg" title="switch" alt="switch">
          </a>
          <a rel="noopener noreferrer" target="_blank" :href="game.ps_link">
            <font-awesome-icon :icon="iconPS" />
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// components
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import MainIntroduction from '../components/MainIntroduction.vue'
import YoutubeBase from '../components/YoutubeBase.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// icons
import { faSteam, faPlaystation } from '@fortawesome/free-brands-svg-icons'

// composable
import getGames from '../composables/getGames'

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'

SwiperCore.use([Navigation, Pagination])

export default {
  name: 'Home',
  props: {
    firebaseTexts: {}
  },
  components: {
    Swiper,
    FontAwesomeIcon,
    YoutubeBase,
    SwiperSlide,
    MainIntroduction
  },
  setup () {
    const { games, errorGames, loadGames } = getGames()

    const iconPS = faPlaystation
    const iconSteam = faSteam

    loadGames()

    return { games, errorGames, iconSteam, iconPS }
  }
}

</script>

<style lang="scss">
  .swiper-pagination-bullet {
    width: 16px;
    height: 16px;
    border: 1px solid #000;
    background: #854c2f;
    opacity: 0.5;
    transition: 0.3s;
    margin: 0 5px;
  }
  .swiper-pagination-bullet-active, .swiper-pagination-bullet:hover  {
    background: yellow;
    border-color: yellow;
    opacity: 1;
  }
</style>

<style lang="scss" scoped>
@import "src/assets/styles/variables.scss";
.game {
  padding: 0;
  position: static;
  text-align: center;
  margin-bottom: 1.5rem;
  .swiper-slide {
    height: 500px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  &__mainInfo {
    padding: 1rem;
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
      a {
        margin-left: 0.5rem;
        font-size: 3rem;
        img {
          height: 3rem;
          width: 3rem;
          object-fit: contain;
          filter: hue-rotate(253deg) invert(1) brightness(1.2);
          transform: translateY(5px);
        }
      }
    }
    .maker {
      display: inline-flex;
      align-items: center;
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
</style>
