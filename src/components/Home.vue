<template>
  <div id="Home">
    <div class="comtainer-fluid">
      <div id="carouselId" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselId" data-slide-to="0" class="active"></li>
          <li data-target="#carouselId" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="https://image.shutterstock.com/z/stock-photo-two-colleagues-website-designer-working-digital-tablet-and-computer-laptop-with-smart-phone-and-387623077.jpg"
              width="800px"
              height="400px"
              alt="Primer slide"
            >
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://image.shutterstock.com/image-photo/realize-your-interior-dream-mixed-450w-533636479.jpg"
              width="800px"
              height="400px"
              alt="Second slide"
            >
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselId"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Anterior</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselId"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Siguiente</span>
        </a>
      </div>
      <div class="row my-3">
        <div class="col-md-8">
          <h2>Diseño de construccion</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui magnam sit minima facilis corrupti dolores voluptas pariatur placeat nobis nesciunt! Laboriosam similique esse fuga magnam optio sunt! Excepturi, asperiores illum!
            <br>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui magnam sit minima facilis corrupti dolores voluptas pariatur placeat nobis nesciunt! Laboriosam similique esse fuga magnam optio sunt! Excepturi, asperiores illum!
          </p>
        </div>
        <div class="col-md-4">
          <a
            data-src="https://image.shutterstock.com/image-illustration/city-skyine-paris-la-defense-450w-1342134257.jpg"
            href="#modal"
            data-toggle="modal"
            data-target="#modal"
            @click.prevent="seeModal"
          >
            <img
              src="https://image.shutterstock.com/image-illustration/city-skyine-paris-la-defense-450w-1342134257.jpg"
              class="img-fluid img-thumbnail"
            >
          </a>
        </div>
        <div class="col-md-4">
          <a
            data-src="https://image.shutterstock.com/image-photo/skyline-inside-design-modern-building-450w-346524188.jpg"
            href="#modal"
            data-toggle="modal"
            data-target="#modal"
            @click.prevent="seeModal"
          >
            <img
              src="https://image.shutterstock.com/image-photo/skyline-inside-design-modern-building-450w-346524188.jpg"
              class="img-fluid img-thumbnail"
            >
          </a>
        </div>
        <div class="col-md-8">
          <h2>Construccion Moderna</h2>
          <p>
            <i class="fab fa-facebook-f"></i>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui magnam sit minima facilis corrupti dolores voluptas pariatur placeat nobis nesciunt! Laboriosam similique esse fuga magnam optio sunt! Excepturi, asperiores illum!
            <br>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui magnam sit minima facilis corrupti dolores voluptas pariatur placeat nobis nesciunt! Laboriosam similique esse fuga magnam optio sunt! Excepturi, asperiores illum!
          </p>
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
  name: "Home",
  data() {
    return {};
  },
  mounted() {
    $(".carousel").carousel({
      interval: 2000
    });
  },
  methods: {
    seeModal: function() {
      $("#modal").on("show.bs.modal", function(event) {
        var button = $(event.relatedTarget);
        var recipient = button.data("src");
        var modal = $(this);
        modal.find(".modal-body .img-fluid").attr("src", recipient);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
</style>
