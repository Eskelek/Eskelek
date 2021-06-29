<template>
  <div class="yt">
    <div :id="`player${privKey}`"></div>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default ({
  props: {
    yLink: String,
    privKey: String
  },
  setup (props) {
    const loadPlayer = () => {
      if (typeof (window.YT) === 'undefined' || typeof (window.YT.Player) === 'undefined') {
        var tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        var firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

        setTimeout(function () {
          loadPlayer()
        }, 100)
      } else {
        onYouTubePlayer()
        console.log('else')
      }
    }

    onMounted(() => {
      loadPlayer()
    })

    let player

    const onYouTubePlayer = function () {
      player = new window.YT.Player(`player${props.privKey}`, {
        height: '490',
        width: '880',
        videoId: props.yLink,
        playerVars: { controls: 1, showinfo: 0, rel: 0, showsearch: 0, iv_load_policy: 3 },
        events: {
          onStateChange: onPlayerStateChange,
          onError: catchError
        }
      })
    }

    var done = false
    function onPlayerStateChange (event) {
      if (event.data === player.PLAYING && !done) {
        done = true
      } else if (event.data === player.ENDED) {
        location.reload()
      }
    }

    function catchError (event) {
      if (event.data === 100) console.log('error yt')
    }

    return { }
  }
})
</script>

<style lang="scss">
  .yt {
    width: 100% !important;
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
