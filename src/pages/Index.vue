<template>
  <q-layout view="hHh Lpr lff" class="bg-grey-1">
    <q-page-container>
      <q-page class="row flex-center bg-black ">
        <!-- <div style="position: fixed; z-index: 0; width: 100%; height: 100%">
             <iframe frameborder="0" height="100%" width="100%"
             src="https://www.youtube.com/embed/XGnnYiwK4Dw?rel=0;&autoplay=1;&controls=0;&showinfo=0;&autohide=1;&loop=1;"
             allow="accelerometer; autoplay; autohide; loop; showinfo; encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen>
             </iframe>
             </div> -->
        <div class="col-5 column">
          <q-img src="~assets/dragons-logo.png" />
          <q-btn
            flat
            class="text-center text-grey"
            label="Enter the dragon"
            to="/teams"
          />

          <!-- <q-video
               src="https://www.youtu.be/XGnnYiwK4Dw?rel=0"
               /> -->
          <!-- <q-video src="https://www.youtube.com/embed/XGnnYiwK4Dw" /> -->
          <!-- <iframe
               src="https://www.youtube.com/embed/XGnnYiwK4Dw?autoplay=1"
               frameborder="0"
               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
               allowfullscreen
               ></iframe> -->
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "PageIndex"
};
</script>
