<template>
  <div class="introduction">
    <div class="siteWrap">
      <h1 v-if="head && head !=='0'" class="introduction__heading">{{ head }}</h1>
      <p v-if="subhead && subhead !=='0'" class="introduction__subheading">{{ subhead }}</p>
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
  padding: 1rem 12px 1rem;
  &__heading {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
  }
  &__subheading {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
}
@media screen and (max-width: 768px) {
  .introduction {
    &__heading {
      font-size: 1.2rem;
    }
    &__subheading {
      font-size: 14px;
    }
  }
}
</style>
