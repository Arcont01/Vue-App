<template>
  <div id="Usuarios">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 mt-4">
          <app-form-create/>
        </div>
        <div class="col-md-6 mt-4">
          <app-form-update/>
        </div>
        <div class="col-md-12 mt-4 mb-4">
          <app-table/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormCreate from "./FormCreate";
import Table from "./Table";
import FormUpdate from "./FormUpdate";
export default {
  name: "Usuarios",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {
    "app-form-create": FormCreate,
    "app-form-update": FormUpdate,
    "app-table": Table
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
