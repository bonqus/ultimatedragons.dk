<template>
  <q-page class="row bg-black text-white ">
    <q-scroll-area class="q-px-md col">
      <div class="row">
        <div class="q-px-md q-pb-xl offset-md-4 col-md-4 offset-sm-2 col-sm-8 col-xs">
          <h2 class="q-mb-md">{{ $t("Open") }}</h2>
          <q-markup-table flat bordered separator="none" class="cursor-pointer">
            <tbody>
              <tr @click="mapf = true">
                <td class="text-left">Fælledparken</td>
                <td class="text-left">{{ $t("Monday") }}</td>
                <td class="text-right">17:30 - 19:30</td>
              </tr>
              <tr @click="mapl = true">
                <td class="text-left">Lundehusparken</td>
                <td class="text-left">{{ $t("Thursday") }}</td>
                <td class="text-right">17:30 - 19:30</td>
              </tr>
            </tbody>
          </q-markup-table>

          <h2 class="q-mb-md">{{ $t("Women") }}</h2>
          <q-markup-table flat bordered separator="none" class="cursor-pointer">
            <tbody>
              <tr @click="mapf = true">
                <td class="text-left">Fælledparken</td>
                <td class="text-left">{{ $t("Tuesday") }}</td>
                <td class="text-right">17:00 - 19:00</td>
              </tr>
              <tr @click="mapl = true">
                <td class="text-left">Lundehusparken</td>
                <td class="text-left">{{ $t("Thursday") }}</td>
                <td class="text-right">17:30 - 19:30</td>
              </tr>
            </tbody>
          </q-markup-table>

          <h2 class="q-mb-md">{{ $t("Mixed") }}</h2>
          <q-markup-table flat bordered separator="none" class="cursor-pointer">
            <tbody>
              <tr @click="mapl = true">
                <td class="text-left">Lundehusparken</td>
                <td class="text-left">{{ $t("Thursday") }}</td>
                <td class="text-right">17:30 - 19:30</td>
              </tr>
            </tbody>
          </q-markup-table>
        </div>
      </div>
    </q-scroll-area>
    <q-dialog v-model="mapl">
      <q-card
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
            src="https://www.google.com/maps/embed/v1/place?q=55.717213%2C%2012.548236&key=AIzaSyANaCyizbUBRWXlKKzgpyinlHjG9a8T2gQ"
            allowfullscreen
          ></iframe>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat :label="$t('OK')" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="mapf">
      <q-card
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
      mapf: false,
      mapl: false
    };
  }
};
</script>
