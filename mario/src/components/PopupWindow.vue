<template>
  <div class="popup" :class="popupClasses">
    <a target="_blank" rel="noopener noreferrer" class="popup__link rpgui-container framed" :href="popupLink">
      <img alt='annocoument' loading="lazy" class="popup__image" :src="popupImage">
      <div class="popup__remove" @click="hidePopup">
        <span class="first"></span>
        <span class="second"></span>
      </div>
    </a>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  name: 'popupWindow',
  props: {
    popupObj: [Object, Array]
  },
  setup (props) {
    const popupClasses = ref([])
    const popupImage = props.popupObj.image || false
    const popupLink = props.popupObj.link || false

    const hidePopup = (e) => {
      e.preventDefault()
      e.stopPropagation()
      popupClasses.value = popupClasses.value.filter(e => e !== 'visible')
      setTimeout(() => {
        popupClasses.value = popupClasses.value.filter(e => e !== 'displayed')
      }, 500)
    }

    onMounted(() => {
      popupClasses.value.push('displayed')
      setTimeout(() => {
        popupClasses.value.push('visible')
      }, 10)
    })

    return { popupImage, popupLink, popupClasses, hidePopup }
  }
}
</script>

<style lang="scss" scoped>
  .popup {
    display: none;
    opacity: 0;
    position: fixed;
    top: 0;
    z-index: 100;
    left: 0;
    background: rgba(0,0,0, 0.8);
    min-height: 100vh;
    padding: 20px;
    width: 100%;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    &.displayed {
      display: flex;
    }
    &.visible {
      opacity: 1;
      .popup__link {
        transform: scale(1);
      }
    }
    &__link {
      transform: scale(0.1);
      padding: 0;
      width: 100%;
      max-width: 800px;
      aspect-ratio: 16/9;
      position: relative;
      transition: 0.5s;
    }
    &__remove {
      position: absolute;
      top: -48px;
      right: -10px;
      height: 30px;
      width: 30px;
      transition: 0.5s;
      &:hover {
        transform: scale(1.2);
        .first {
          transform: rotate(135deg);
        }
        .second {
          transform: rotate(45deg);
        }
      }
      span {
        height: 4px;
        display: block;
        border-radius: 4px;
        background: #fff;
        width: 30px;
        position: relative;
        transition: 0.5s;
      }
      .first {
        top: 12px;
        transform: rotate(45deg);
      }
      .second {
        top: 8px;
        transform: rotate(135deg);
      }
    }
    &__image {
      top: 0;
      left: 0;
      image-rendering: initial;
      height: 100%;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
  @media (max-width: 450px) {
    .popup {
      position: fixed;
      padding: 20px 10px;
    }
  }
</style>
