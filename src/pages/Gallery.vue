<template>
  <page>
    <!-- <h2 class="q-mb-md">{{ $t("Galleri") }}</h2> -->

    <insta-feed
      token="IGQVJWRFRtcG9MbVhyQnUzX1F3MldIdTRhTDJaMGt3MU5QbmIta0Q2SGxpWm9CNEU4bnNGQXkwemEyWDJZAZA3lsaG9DWWpRNGZAWcklta1h5UDVsZAlFuUERZAclhJUGhCSzl5c3BUc19oVDBFeWcyaURSUQZDZD"
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
import { useMeta } from "quasar";

const metaTags = {
  description: "Check out the newest photos of Ultimate Dragons",
  title: "Ultimate Dragons | Gallery",
  url: "https://ultimatedragons.dk/gallery",
  img: require("assets/dragons-logo.png"),
};
export default {
  name: "GalleryPage",
  setup() {
    useMeta(meta(metaTags));
  },
  components: {
    InstaFeed,
  },
  methods: {
    followLink: function (link) {
      window.open(link, "_blank");
    },
  },
};
</script>
