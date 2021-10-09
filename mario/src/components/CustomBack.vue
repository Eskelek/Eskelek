<template>
  <div class="custom-back">
    <div v-html="stylesCss"></div>
    <component
      :is="divOrLink"
      :href="externalLink || ''"
      :rel="externalLink ? 'noopener noreferrer' : ''"
      :target="externalLink ? '_blank' : ''"
      class="custom-back__holder"
    >
    </component>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'popupWindow',
  props: {
    backLink: [String],
    backImage: [String],
    backFull: [Boolean]
  },
  setup (props) {
    const externalLink = (props.backLink && props.backLink !== '0') ? props.backLink : false
    const divOrLink = computed(() => {
      if (externalLink) {
        return 'a'
      }
      return 'div'
    })
    const stylesCss = computed(() => {
      return `
        <style>
          .custom-back__holder {
            background-image: url(${props.backImage});
            background-size: ${props.backFull ? 'cover' : 'unset'};
            background-position: center;
            background-repeat: ${props.backFull ? 'no-repeat' : 'repeat'};
            image-rendering: initial;
          }
        </style>
      `
    })

    return { divOrLink, externalLink, stylesCss }
  }
}
</script>

<style lang="scss" scoped>
  .custom-back {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 0;
    &__holder {
      image-rendering: initial;
      display: block;
      height: 100%;
      width: 100%;
    }
  }
  @media (max-width: 1024px) {
    .custom-back {
      position: static;
      max-width: 900px;
      margin: 0 auto;
      &__holder {
        height: auto;
        aspect-ratio: 16/9;
      }
    }
  }
</style>
