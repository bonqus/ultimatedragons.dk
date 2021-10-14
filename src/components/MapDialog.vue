<template>
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
        :src="src"
        allowfullscreen
      ></iframe>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat :label="$t('OK')" v-close-popup />
    </q-card-actions>
  </q-card>
</template>
<script>
export default {
  name: "MapDialog",
  props: {
    src: {
      type: String,
      required: true
    }
  }
};
</script>
