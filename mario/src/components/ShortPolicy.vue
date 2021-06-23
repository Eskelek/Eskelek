<template>
  <div class="policy rpgui-container framed-golden-2" :class="{ shoved : policyLoaded }">
    <p v-if="policyText && policyText !== '0'">{{ policyText }}</p>
    <div class="policy__buttons">
      <button class="rpgui-button" type="button" @click="acceptCookie">OK</button>
      <router-link :to="{ name: 'Policy' }"><button class="rpgui-button" type="button">Read More</button></router-link>
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
    margin-top: 6px;
    display: flex;
    justify-content: flex-end;
  }
  p {
    font-size: 14px;
  }
  .rpgui-button {
    height: 40px;
    font-size: 12px;
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
@media screen and (max-width: 1200px) {
  .policy{
    p {
      font-size: 10px;
    }
    .rpgui-button {
      height: 30px;
      font-size: 10px;
    }
    &__buttons {
      justify-content: center;
    }
  }
}
</style>
