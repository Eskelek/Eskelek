<template>
    <YouTube
      class="yt"
        :src="yLink"
        @ready="onReady"
        ref="youtube" />
</template>

<script>
import { defineComponent } from 'vue'
import YouTube from 'vue3-youtube'

export default defineComponent({
  props: {
    yLink: String
  },
  components: { YouTube },
  methods: {
    // onReady () {
    //   this.$refs.youtube.playVideo()
    // }
  }
})
</script>

<style lang="scss" scoped>
  .yt {
    width: 100% !important;
    height: 100% !important;
  }
</style>
