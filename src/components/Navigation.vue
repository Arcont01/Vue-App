<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <router-link class="navbar-brand" to="/"><strong>Arquitectura</strong></router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link class="nav-item nav-link" to="/"><strong>Inicio</strong><span class="sr-only">(current)</span></router-link>
      <router-link class="nav-item nav-link" to="/Proyectos"><strong>Proyectos</strong></router-link>
      <router-link class="nav-item nav-link" to="/Portafolio"><strong>Portafolio</strong></router-link>
      <router-link class="nav-item nav-link" to="/Usuarios"><strong>Usuarios</strong></router-link>
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

.navbar-dark .navbar-nav .nav-link {
    color: rgb(255, 255, 255);
    font-family: 'Poppins', sans-serif;
    &:hover{
      color: rgba(255, 255, 255, 0.8);
    }
}

.navbar-dark .navbar-brand{
  font-family: 'Poppins', sans-serif;
}
</style>
