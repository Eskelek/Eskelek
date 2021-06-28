<template>
    <YouTube
      class="yt"
        :src="yLink"
        :ref="`youtube${privKey}`"
        :key="`privKey${privKey}`"/>
</template>

<script>
import { defineComponent } from 'vue'
import YouTube from 'vue3-youtube'

export default defineComponent({
  props: {
    yLink: String,
    privKey: String
  },
  components: { YouTube }
})
</script>

<style lang="scss">
  .yt {
    width: 100% !important;
  }
</style>
