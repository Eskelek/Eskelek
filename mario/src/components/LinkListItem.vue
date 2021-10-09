<template>
  <li v-show="content.link && content.link !== '0'">
    <div class="item__styles" v-html="stylesCss"></div>
    <a target="_blank" rel="noopener noreferrer" class="item__link" v-if="content.link" :href="content.link">
      <div class="item__img-holder">
        <img v-if="content.icon && content.icon !== '0'" alt="link Icon" loading="lazy" class="item__icon" :src="content.icon">
      </div>
      <p v-if="content.text && content.text !== '0'" class="item__text">{{ content.text }}</p>
    </a>
  </li>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'LinkListItem',
  props: {
    indexVal: [Number],
    content: {
      type: [Array, Object],
      required: true
    }
  },
  setup (props) {
    const stylesCss = computed(() => {
      return `
        <style>
          .links__item--${props.indexVal} {
            background: ${props.content.background_color || ''} !important;
          }
          .links__item--${props.indexVal}:hover {
            background: ${props.content.background_color_hover} !important;
          }
          .links__item--${props.indexVal} .item__text {
            color: ${props.content.text_color || ''} !important;
          }
          .links__item--${props.indexVal}:hover .item__text {
            color: ${props.content.text_color_hover || ''} !important;
          }
        </style>
      `
    })

    return { stylesCss }
  }
}
</script>

<style lang="scss" scoped>
  .links__item {
    background-color: #fff;
    position: relative;
    border-radius: 4px;
    margin: 10px 0;
    transition: 0.3s;
    &:hover {
      background-color: transparent;
      transform: translateY(-4px);
    }
    .item {
      &__styles {
        position: absolute;
        z-index: -100;
        visibility: hidden;
      }
      &__link {
        display: flex;
        align-items: center;
        padding: 6px;
        &:hover {
          text-decoration: none;
        }
      }
      &__text {
        padding: 0 12px;
        text-align: center;
        color: #333;
        font-family: 'Roboto', sans-serif;
        text-shadow: none;
        font-weight: 600;
        transition: 0.3s;
        &:hover {
          color: #fff;
          text-decoration: none;
        }
      }
      &__img-holder {
        height: 45px;
        width: 45px;
        flex-basis: 45px;
        flex-grow: 0;
        flex-shrink: 0;
        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
          image-rendering: initial;
        }
      }
    }
  }
</style>
