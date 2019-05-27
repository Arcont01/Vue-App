<template>
  <div>
    <div class="container-fluid">
      <div class="d-flex justify-content-center my-3">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-secondary"
            id="all-button"
            @click.prevent="select($event)"
          >Todos</button>
          <button
            type="button"
            class="btn btn-secondary"
            id="disenio-button"
            @click.prevent="select($event)"
          >Diseños</button>
          <button
            type="button"
            class="btn btn-secondary"
            id="construccion-button"
            @click.prevent="select($event)"
          >Construcciones</button>
        </div>
      </div>
      <div class="d-flex flex-row flex-wrap justify-content-center">
        <div class="d-flex flex-column">
          <div v-for="(image, index) in images1" :key="image.id" :class="image.class">
            <a
              :data-src="image.src"
              href="#modal"
              data-toggle="modal"
              data-target="#modal"
              @click.prevent="seeModal"
            >
              <img
                :src="image.src"
                :id="images1-index"
                width="400px"
                class="img-fluid img-thumbnail mb-2"
              >
            </a>
          </div>
        </div>
        <div class="d-flex flex-column">
          <div v-for="(image, index) in images2" :key="image.id" :class="image.class">
            <a
              :data-src="image.src"
              href="#modal"
              data-toggle="modal"
              data-target="#modal"
              @click.prevent="seeModal"
            >
              <img
                :src="image.src"
                :id="images2-index"
                width="400px"
                class="img-fluid img-thumbnail mb-2"
              >
            </a>
          </div>
        </div>
        <div class="d-flex flex-column">
          <div v-for="(image, index) in images3" :key="image.id" :class="image.class">
            <a
              :data-src="image.src"
              href="#modal"
              data-toggle="modal"
              data-target="#modal"
              @click.prevent="seeModal"
            >
              <img
                :src="image.src"
                :id="images3-index"
                width="400px"
                class="img-fluid img-thumbnail mb-2"
              >
            </a>
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
            <img src="#" class="img-fluid" alt="image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "Portafolio",
  data() {
    return {
      msg: "Portafolio",
      images1: [
        {
          id: 1,
          src:
            "https://image.shutterstock.com/image-photo/urban-geometry-looking-glass-building-450w-334910669.jpg",
          class: "construccion"
        },
        {
          id: 2,
          src:
            "https://image.shutterstock.com/image-photo/architecture-show-her-model-simulate-450w-423528364.jpg",
          class: "disenio"
        },
        {
          id: 3,
          src:
            "https://image.shutterstock.com/image-illustration/hand-drafting-design-villa-building-450w-497743579.jpg",
          class: "disenio"
        },
        {
          id: 4,
          src:
            "https://image.shutterstock.com/image-photo/beautiful-retro-luxury-light-lamp-450w-279671069.jpg",
          class: "construccion"
        }
      ],
      images2: [
        {
          id: 1,
          src:
            "https://image.shutterstock.com/image-illustration/abstract-sketch-design-interior-kitchen-450w-353998463.jpg",
          class: "disenio"
        },
        {
          id: 2,
          src:
            "https://image.shutterstock.com/image-photo/italy-sicily-ragusa-province-countryside-450w-1340545043.jpg",
          class: "construccion"
        },
        {
          id: 3,
          src:
            "https://image.shutterstock.com/image-photo/projecting-pencil-on-big-urban-450w-241266958.jpg",
          class: "disenio"
        },
        {
          id: 4,
          src:
            "https://image.shutterstock.com/image-photo/architect-man-working-blueprintsengineer-inspection-450w-751974061.jpg",
          class: "disenio"
        }
      ],
      images3: [
        {
          id: 1,
          src:
            "https://image.shutterstock.com/image-photo/close-engineer-hands-discussing-building-450w-657900391.jpg",
          class: "disenio"
        },
        {
          id: 2,
          src:
            "https://image.shutterstock.com/image-photo/modern-office-building-facade-glass-450w-221616010.jpg",
          class: "construccion"
        },
        {
          id: 3,
          src:
            "https://image.shutterstock.com/image-photo/abstract-modern-architecture-high-contrast-450w-568015594.jpg",
          class: "construccion"
        },
        {
          id: 4,
          src:
            "https://image.shutterstock.com/image-vector/architecture-blueprint-backgroundpaper-art-style-450w-1147015811.jpg",
          class: "disenio"
        }
      ]
    };
  },
  methods: {
    seeModal: function() {
      $("#modal").on("show.bs.modal", function(event) {
        var button = $(event.relatedTarget);
        var recipient = button.data("src");
        var modal = $(this);
        modal.find(".modal-body .img-fluid").attr("src", recipient);
      });
    },
    select: function(event) {
      var targetId = event.currentTarget.id;
      if (targetId === "disenio-button") {
        $(".construccion").hide();
        $(".disenio").show();
      } else if (targetId === "construccion-button") {
        $(".construccion").show();
        $(".disenio").hide();
      } else {
        $(".construccion").show();
        $(".disenio").show();
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
</style>
