<template>
  <q-page class="row bg-black text-white ">
    <q-scroll-area class="q-px-md col" dark>
      <div class="row">
        <div class="q-px-md offset-md-4 col-md-4 offset-sm-2 col-sm-8 col-xs">
          <h2 class="q-mb-md">{{ $t("Open") }}</h2>
          <h3 class="q-mb-md q-mt-none">{{ $t("Practice") }}</h3>
          <q-markup-table dark flat bordered separator="none">
            <tbody>
              <tr @click="map = true">
                <td class="text-left">Fælledparken</td>
                <td class="text-left">{{ $t("Tuesday") }}</td>
                <td class="text-right">17:30 - 19:30</td>
              </tr>
              <tr @click="map = true">
                <td class="text-left">Fælledparken</td>
                <td class="text-left">{{ $t("Thursday") }}</td>
                <td class="text-right">17:30 - 19:30</td>
              </tr>
            </tbody>
          </q-markup-table>

          <h2 class="q-mb-md">{{ $t("Women") }}</h2>
          <h3 class="q-mb-md q-mt-none">{{ $t("Practice") }}</h3>
          <q-markup-table dark flat bordered separator="none">
            <tbody>
              <tr @click="map = true">
                <td class="text-left">Fælledparken</td>
                <td class="text-left">{{ $t("Tuesday") }}</td>
                <td class="text-right">17:00 - 19:00</td>
              </tr>
              <tr @click="map = true">
                <td class="text-left">Fælledparken</td>
                <td class="text-left">{{ $t("Thursday") }}</td>
                <td class="text-right">17:00 - 19:00</td>
              </tr>
            </tbody>
          </q-markup-table>

          <h2 class="q-mb-md">{{ $t("Mixed") }}</h2>
          <span>
            {{
              $t(
                "All mixed practice has been canceled due to the coronavirus outbreak."
              )
            }}
          </span>
        </div>
      </div>
    </q-scroll-area>
    <q-dialog v-model="map">
      <q-card
        dark
        class="column"
        style="
        height: 500px;
        width: 500px;
        "
      >
        <q-card-section
          class="col q-pa-none"
          style="
          -webkit-filter: grayscale(100%);
          filter: grayscale(100%);"
        >
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
            style="border:0"
            marginheight="0"
            marginwidth="0"
            src="https://www.google.com/maps/embed/v1/place?q=55.700525%2C%2012.568412&key=AIzaSyANaCyizbUBRWXlKKzgpyinlHjG9a8T2gQ"
            allowfullscreen
          ></iframe>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat :label="$t('OK')" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script>
export default {
  name: "TeamsPage",
  data() {
    return {
      map: false
    };
  }
};
</script>
