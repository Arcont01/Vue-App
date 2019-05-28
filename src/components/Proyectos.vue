<template>
  <div id="Proyectos">
    <div class="container-fluid">
      <div class="row">
        <div class="card-columns my-3 mx-3">
          <div class="card border-primary" v-for="post in posts" :key="post.id">
            <img class="card-img-top" :src="post.url" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title text-center title-color">{{post.title}}</h5>
              <p class="card-text">{{post.descriptions}}</p>
              <div class="d-flex justify-content-center my-2">
                <button class="btn btn-fb mx-1" type="button"><i class="fab fa-facebook-f fa-lg"></i></button>
                <button class="btn btn-twitter mx-1" type="button"><i class="fab fa-twitter fa-lg"></i></button>
                <button class="btn btn-insta mx-1" type="button"><i class="fab fa-instagram fa-lg"></i></button>
              </div>
              <a
                href="#comments"
                :id="post.id"
                class="btn btn-success btn-block"
                data-toggle="modal"
                data-target="#modal"
                @click.prevent="comments($event)"
              >Ver comentarios</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form v-for="c in comment" :key="c.id">
              <fieldset disabled>
                <h5 class="text-center title-color">comentario de {{c.name}}</h5>
                <div class="form-group">
                  <label for="email">Correo</label>
                  <input type="email" class="form-control" id="email" :value="c.email">
                </div>
                <div class="form-group">
                  <label for="comment">Example textarea</label>
                  <textarea class="form-control" id="comment" rows="3" v-model="c.body"></textarea>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
export default {
  name: "Proyectos",
  data() {
    return {
      comment: [],
      msg: "Proyectos",
      posts: [
        {
          id: 1,
          title: "PROYECTO 1",
          descriptions:
            "proyecto sobre arquitectura de una construccion de una alberca privada",
          url:
            "https://image.shutterstock.com/image-illustration/house-pool-design-minimal-3d-450w-557340937.jpg"
        },
        {
          id: 2,
          title: "PROYECTO 2",
          descriptions:
            "proyecto sobre arquitectura de una construccion de una sala minimalista",
          url:
            "https://image.shutterstock.com/image-illustration/minimalist-interior-designlight-pink-armchair-450w-559578772.jpg"
        },
        {
          id: 3,
          title: "PROYECTO 3",
          descriptions:
            "proyecto sobre arquitectura de una construccion de una cocina minimalista",
          url:
            "https://image.shutterstock.com/image-photo/modern-kitchen-black-furniture-wooden-450w-448253599.jpg"
        },
        {
          id: 4,
          title: "PROYECTO 4",
          descriptions: "diseño de arquitectura de una casa minimalista",
          url:
            "https://image.shutterstock.com/image-illustration/hand-drafting-design-villa-pool-450w-1211995189.jpg"
        },
        {
          id: 5,
          title: "PROYECTO 5",
          descriptions:
            "proyecto sobre arquitectura de una construccion pegada a la playa",
          url:
            "https://image.shutterstock.com/image-photo/white-architecture-on-santorini-island-450w-257429302.jpg"
        },
        {
          id: 6,
          title: "PROYECTO 6",
          descriptions: "Diseño sobre una residencia ",
          url:
            "https://image.shutterstock.com/image-illustration/hand-drafting-modern-white-villa-450w-1212003364.jpg"
        },
        {
          id: 7,
          title: "PROYECTO 7",
          descriptions:
            "proyecto sobre arquitectura de una construccion de una recamara",
          url:
            "https://image.shutterstock.com/image-illustration/3d-rendering-illustration-modern-wooden-450w-542149822.jpg"
        },
        {
          id: 8,
          title: "PROYECTO 8",
          descriptions:
            "proyecto sobre arquitectura de una construccion de un baño",
          url:
            "https://image.shutterstock.com/image-photo/modern-bathroom-interior-minimalistic-shower-450w-509672029.jpg"
        },
        {
          id: 9,
          title: "PROYECTO 9",
          descriptions:
            "proyecto sobre arquitectura de una construccion de una bodega",
          url:
            "https://image.shutterstock.com/image-illustration/dark-concrete-empty-room-modern-450w-699878440.jpg"
        },
        {
          id: 10,
          title: "PROYECTO 10",
          descriptions:
            "proyecto sobre arquitectura de una construccion de una casa minimalista",
          url:
            "https://image.shutterstock.com/image-illustration/house-pool-design-modern-3d-450w-524604805.jpg"
        }
      ]
    };
  },
  methods: {
    comments: function(event) {
      var targetId = event.currentTarget.id;
      axios
        .get(`https://jsonplaceholder.typicode.com/comments?postId=${targetId}`)
        .then(response => {
          this.comment = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

.title-color {
  color: $morado-oscuro-color;
}
</style>
