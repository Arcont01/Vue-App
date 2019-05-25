<template>
  <div id="app" class="background-app">
    <Navigation></Navigation>
    <router-view/>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
export default {
  name: 'App',
  components: {
    'Navigation': Navigation,
    'Navgate' : Navigation
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';
.background-app{
    background-color: $gris-color;
}
</style>
