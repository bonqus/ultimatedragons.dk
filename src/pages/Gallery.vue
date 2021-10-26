<template>
  <page class="row bg-black text-white">
    <!-- <h2 class="q-mb-md">{{ $t("Galleri") }}</h2> -->

    <insta-feed
      token="IGQVJYbE1ucndIMThHQjY4cU9NaWdFcEhSZA21pZA3VfUXpKY0pCY19xV3kxc2h5VUpKUS1iSU02U3F2MVBTb1pEY1ZAhRU1RSEhrT1J6XzdObURqRFA3Y1JVSW10Y05IMlhPWHlMN3dJN1dwUkpjMGhFTQZDZD"
      fields="media_url,media_type,caption,permalink"
      :mediatypes="['IMAGE']"
    >
      <template v-slot:loading="props">
        <template v-if="props.loading">
          <q-card v-for="k in 3" :key="k" class="q-mb-lg">
            <q-skeleton height="400px" square />
            <q-card-section
              class="text-white text-center text-body1"
              style="overflow-wrap: anywhere"
            >
              <q-skeleton type="text" />
            </q-card-section>
          </q-card>
        </template>
      </template>

      <template v-slot:feeds="props">
        <q-card class="q-mb-lg">
          <q-img
            :src="props.feed.media_url"
            alt="Instagram post"
            class="cursor-pointer"
            @click="followLink(props.feed.permalink)"
          />
          <q-card-section
            class="text-white text-center text-body1"
            style="overflow-wrap: anywhere"
          >
            {{ props.feed.caption }}
          </q-card-section>
        </q-card>
      </template>

      <template v-slot:error="props">
        <div class="fancy-alert">
          {{ props.error }}
        </div>
      </template>
    </insta-feed>
  </page>
</template>
<script>
import meta from "src/utils/meta.js";
import InstaFeed from "components/InstaFeed.vue";
export default {
  name: "GalleryPage",
  components: {
    InstaFeed,
  },
  data() {
    return {
      metaTags: {
        description: "Check out the newest photos of Ultimate Dragons",
        title: "Ultimate Dragons | Gallery",
        url: "ultimatedragons.dk/gallery",
        img: "~assets/dragons-logo.png",
      },
    };
  },
  methods: {
    followLink: function (link) {
      window.open(link, "_blank");
    },
  },
  meta,
};
</script>
