<template>
  <div class="policy rpgui-container framed-golden-2" :class="{ shoved : policyLoaded }">
    <p>{{ policyText }}</p>
    <div class="policy__buttons">
      <button class="rpgui-button" type="button" @click="acceptCookie">Akceptuje</button>
      <router-link :to="{ name: 'Policy' }"><button class="rpgui-button" type="button">Czytaj więcej</button></router-link>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'ShortPolicy',
  props: {
    policyText: String
  },
  setup () {
    const policyLoaded = ref(false)
    const store = useStore()

    onMounted(() => {
      setTimeout(() => {
        policyLoaded.value = true
      }, 1000)
    })

    const acceptCookie = () => {
      store.dispatch('setCookieStatus', true)
    }

    return { policyLoaded, acceptCookie }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/styles/variables.scss";
  .policy {
    position: fixed;
    bottom: 20%;
    left: 50%;
    width: 0;
    opacity: 0;
    &.shoved {
      animation: drive 1s steps(6, start) forwards;
    }
    &__buttons {
      display: flex;
      justify-content: flex-end;
    }
  }
  @keyframes drive {
    to {
      opacity: 1;
      width: 80%;
      bottom: 20px;
      left: 10%;
    }
  }
</style>
