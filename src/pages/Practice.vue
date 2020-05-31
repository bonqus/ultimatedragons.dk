<template>
  <q-page class="flex flex-center">
    <q-select
      v-model="lang"
      :options="langOptions"
      label="Quasar Language"
      dense
      borderless
      emit-value
      map-options
      options-dense
      style="min-width: 150px"
    />
    {{ $t("failed") }}
  </q-page>
</template>

<script>
export default {
  name: "Practice",
  data() {
    return {
      lang: this.$i18n.locale,
      // $i18n.availableLocales
      langOptions: [
        { value: "en-us", label: "English" },
        { value: "da-dk", label: "Danish" }
      ]
    };
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>
