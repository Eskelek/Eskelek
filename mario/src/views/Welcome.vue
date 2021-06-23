<template>
  <div class="bod">
    <h1>COMING SOON</h1>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const store = useStore()
    const router = useRouter()
    const tndkr = ref('')

    onMounted(() => {
      window.addEventListener('keyup', checkKey)
    })

    const makeTndkr = () => {
      store.dispatch('setTndkrStatus', true)
      router.push({
        name: 'Home'
      })
    }

    const checkKey = (e) => {
      if (e.code === 'Enter') {
        if (tndkr.value === 'tndkrBackspace') {
          tndkr.value = ''
          makeTndkr()
        }
        return
      }
      tndkr.value += e.key
    }

    return { tndkr, makeTndkr, checkKey }
  }
}
</script>

<style lang="scss" scoped>
  .bod {
    position: fixed;
    background: #854c2f;
    top: 0;
    z-index: 1000;
    left: 0;
    height: 100vh;
    flex-direction: column;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 50px;
    }
  }
</style>
