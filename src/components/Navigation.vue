<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <router-link class="navbar-brand" to="/">App</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link class="nav-item nav-link" to="/">Inicio<span class="sr-only">(current)</span></router-link>
      <router-link class="nav-item nav-link" to="/Proyectos">Proyectos</router-link>
      <router-link class="nav-item nav-link" to="/Portafolio">Portafolio</router-link>
      <router-link class="nav-item nav-link" to="/Usuarios">Usuarios</router-link>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
.sticky-top{
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1020;
}

.bg-dark{
    background-color: $morado-color !important;
}

</style>
