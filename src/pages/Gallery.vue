<template>
  <q-page class="row bg-black text-white ">
    <q-scroll-area class="q-px-md col">
      <div class="row">
        <div
          class="q-px-md q-pb-xl offset-md-4 col-md-4 offset-sm-2 col-sm-8 col-xs"
        >
          <!-- <h2 class="q-mb-md">{{ $t("Galleri") }}</h2> -->

          <insta-feed
            token="IGQVJYbE1ucndIMThHQjY4cU9NaWdFcEhSZA21pZA3VfUXpKY0pCY19xV3kxc2h5VUpKUS1iSU02U3F2MVBTb1pEY1ZAhRU1RSEhrT1J6XzdObURqRFA3Y1JVSW10Y05IMlhPWHlMN3dJN1dwUkpjMGhFTQZDZD"
            fields="media_url,media_type,caption,permalink"
            :mediatypes="['IMAGE']"
          >
            <template v-slot:loading="props">
              <h6 v-if="props.loading" class="fancy-loading">
                {{ $t("Loading") }}
              </h6>
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
        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>
<script>
import InstaFeed from "components/InstaFeed.vue";
export default {
  name: "ContactPage",
  components: {
    InstaFeed
  },
  methods: {
    followLink: function(link) {
      window.open(link, "_blank");
    }
  }
};
</script>
