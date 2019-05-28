<template>
    <div class="card border-primary">
        <div class="card-body">
            <h5 class="card-title">Agregar usuario</h5>
            <form @submit.prevent="submitted" class="needs-validation" novalidate>
                <div class="form-group">
                    <label for="name">Nombre</label>
                    <input type="text" v-model="form.name" id="name" class="form-control">
                </div>
                <div class="form-group">
                    <label for="job">Trabajo</label>
                    <input type="text" v-model="form.job" id="job" class="form-control">
                </div>
                <button type="submit" class="btn btn-success">Guardar</button>
                <button type="button" @click.prevent="clear" class="btn btn-secondary">Limpiar</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
  name: 'FormCreate',
  data () {
    return {
      form: {
          name:'',
          job: ''
      }
    }
  },
  methods: {
      clear: function () {
        this.form.name = this.form.job = "";  
      },
      submitted: function(){
          axios.post('https://reqres.in/api/users', {
              name: this.form.name,
              job: this.form.job,
          })
          .then(response => {
              Swal.fire({
                  type: 'success',
                  title: 'Exito!',
                  timer: 3000,
                  html: `<ul>
                  <li>Nombre: ${response.data.name}</li>
                  <li>Trabajo: ${response.data.job}</li>
                  <li>Fecha creado: ${response.data.createdAt}</li>
                  </ul>`
              });
              document.getElementById('name').value = ""
              document.getElementById('job').value = ""
          }) 
          .catch(error => {
              Swal.fire({
                  type: 'error',
                  title: 'Error!',
                  timer: 3000,
              })
          })
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/scss/style.scss';
</style>

