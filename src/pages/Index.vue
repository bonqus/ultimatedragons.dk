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
        <div class="col-xs-11 col-sm-8 col-md-5 col-lg-4 column flex-center text-center">
          <h1 class="text-grey">
            {{ $t("Ultimate frisbee in the heart of Copenhagen") }}
          </h1>
          <q-img
            @click="$router.push('teams')"
            src="~assets/dragons-logo.png"
          />
          <q-btn flat class="text-grey" label="Enter the dragon" to="/teams" />

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

          <span class="text-grey q-mb-md">
            {{
              $t(
                "The most social ultimate frisbee club in Denmark, with room for all levels of experience."
              )
            }}
          </span>
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
