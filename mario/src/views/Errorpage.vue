<template>
  <div class="errorPage">
    <h1>
      <span>404</span>We couldn`t find that page.
    </h1>
    <router-link to="/" class="rpgui-button">
      Go to homepage
    </router-link>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.errorPage {
    padding: 2rem ;
    text-align: center;
    display: flex;
    min-height: 65vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 2rem;
      position: relative;
      text-shadow: 2px 2px 4px #000;
      filter: drop-shadow(2px 4px 6px rgba(0,0,0, .5));
      span {
        font-size: 14rem;
        font-family: 'Roboto', sans-serif;
        color: #f9ac20;
        position: absolute;
        z-index: -10;
        left: -6rem;
        top: -9.5rem;
      }
    }
    a {
      z-index: 10;
      margin-top: 50px;
      color: #fff;
      display: inline-flex;
      align-items: center;
    }
}
@media(max-width: 1024px) {
  .errorPage {
    h1 {
      span {
        font-size: 200px;
        left: 50%;
        top: 0;
        transform: translateX(-50%) translateY(-50%);
      }
    }
  }
}
@media(max-width: 600px) {
  .errorPage {
    h1 {
      font-size: 1.8rem;
      span {
        font-size: 40vw;
        left: 50%;
        top: -8rem;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
