<template>
  <main class="siteWrap">
    <div v-if="policy.long_policy && policy.long_policy !== '0'" class="policy">
      <a class="rpgui-button" target="_blank" rel="noopener noreferrer" :href="policy.long_policy ? policy.long_policy : ''">Read Privacy Policy</a>
    </div>
    <div v-if="policy.cookie_policy && policy.cookie_policy !== '0'" class="policy" id="cookiePolicy">
      <a class="rpgui-button" target="_blank" rel="noopener noreferrer" :href="policy.cookie_policy ? policy.cookie_policy : ''">Read Cookie Policy</a>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    firebaseTexts: {},
    policy: {}
  }
}
</script>
<style lang="scss" scoped>
  .policy {
    padding: 2rem 0 0;
    text-align: center;
    a {
      padding-left: 40px;
      padding-right: 40px;
      font-size: 12px;
      display: inline-flex;
      align-items: center;
      color: #fff;
    }
  }
</style>
