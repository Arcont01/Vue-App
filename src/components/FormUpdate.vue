<template>
  <div class="card">
    <div class="card-body">
      <div>
        <div class="row">
          <div class="col">
            <h5 class="card-title">{{title}}</h5>
          </div>
          <div class="col d-flex justify-content-md-end">
            <button @click.prevent="changeDisable" class="btn btn-warning">Editar</button>
          </div>
        </div>
      </div>
      <form @submit.prevent="submitted" class="needs-validation" novalidate>
        <fieldset id="fieldset" disabled>
          <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" :value="formUpd.name" id="nameUpd" class="form-control">
          </div>
          <div class="form-group">
            <label for="job">Trabajo</label>
            <input type="text" :value="formUpd.job" id="jobUpd" class="form-control">
          </div>
          <button type="submit" class="btn btn-success">Guardar</button>
          <button type="button" @click.prevent="clear" class="btn btn-secondary">Limpiar</button>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "FormCreate",
  data() {
    return {
      title: "Modificar Usuario",
      disabled: true,
      formUpd: {
        name: "",
        job: ""
      }
    };
  },
  mounted() {
    axios
      .get("https://reqres.in/api/user/2")
      .then(response => {
        this.formUpd.name = response.data.data.name;
        this.formUpd.job = `zion resident`;
      })
      .catch(error => {
        console.log("error");
      });
  },
  methods: {
    clear: function () {
        this.formUpd.name = this.formUpd.job = "";  
    },
    changeDisable: function(){
        if(document.getElementById("fieldset").disabled){
            document.getElementById("fieldset").disabled = false
        } else {
            document.getElementById("fieldset").disabled = true
        }
    },
    submitted: function() {
      axios
        .put("https://reqres.in/api/users/2", {
          name: this.formUpd.name,
          job: this.formUpd.job
        })
        .then(response => {
          this.formUpd.name = response.data.name;
          this.formUpd.job = response.data.job;
          Swal.fire({
            type: "success",
            title: "Exito!",
            timer: 3000,
            html: `<ul>
                  <li>Nombre: ${response.data.name}</li>
                  <li>Trabajo: ${response.data.job}</li>
                  <li>Fecha actualizado: ${response.data.updatedAt}</li>
                  </ul>`
          });
        })
        .catch(function(error) {
          Swal.fire({
            type: "error",
            title: "Error!",
            timer: 3000
          });
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
</style>

