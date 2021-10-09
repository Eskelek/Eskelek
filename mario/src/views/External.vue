<template>
  <main v-html="externalhtml">
  </main>
</template>

<script>
export default {
  props: {
    externalhtml: [String]
  }
}
</script>
