<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title"></h5>
      <table id="table-users" class="table table-striped table-bordered" style="width:100%">
      </table>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "Table",
  data() {
    return {
      dataTable: null
    };
  },
  mounted: function() {
    $(document).ready(function($) {
      this.dataTable = $("#table-users").DataTable({
        responsive: true,
        dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
          "<'row'<'col-sm-12'tr>>" +
          "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        ajax: 'https://reqres.in/api/users',
        columns: [
            {title: 'Correo', data: 'email', name: 'email'},
            {title: 'Nombre', data: 'first_name', name: 'first_name'},
            {title: 'Apellido', data: 'last_name', name: 'last_name'},
        ]
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>

</style>

