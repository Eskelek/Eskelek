<template>
  <div class="introduction">
    <div class="siteWrap">
      <h1 class="introduction__heading">{{ head }}</h1>
      <p class="introduction__subheading">{{ subhead }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainIntroduction',
  props: {
    head: String,
    subhead: String
  }
}
</script>

<style scoped lang="scss">
  .introduction {
    text-align: center;
    padding: 1rem 0 3rem;
    &__heading {
      font-size: 1.5rem;
      font-weight: 700;
    }
    &__subheading {
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
</style>
