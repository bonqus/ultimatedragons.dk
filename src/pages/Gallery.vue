<template>
  <q-page class="row bg-black text-white ">
    <q-scroll-area class="q-px-md col">
      <div class="row">
        <div
          class="q-px-md q-pb-xl offset-md-4 col-md-4 offset-sm-2 col-sm-8 col-xs"
        >
          <!-- <h2 class="q-mb-md">{{ $t("Latest Pictures") }}</h2> -->

          <insta-feed
            token="IGQVJYbE1ucndIMThHQjY4cU9NaWdFcEhSZA21pZA3VfUXpKY0pCY19xV3kxc2h5VUpKUS1iSU02U3F2MVBTb1pEY1ZAhRU1RSEhrT1J6XzdObURqRFA3Y1JVSW10Y05IMlhPWHlMN3dJN1dwUkpjMGhFTQZDZD"
            fields="media_url,media_type,caption,permalink"
            container-class="image-container"
            :mediatypes="['IMAGE']"
          >
            <template v-slot:loading="props">
              <h6 v-if="props.loading" class="fancy-loading">
                {{ $t("Loading") }}
              </h6>
            </template>

            <template v-slot:feeds="props">
              <div class="instagram-image q-mb-xl">
                <a :href="props.feed.permalink" rel="noopener" target="_blank">
                  <q-img
                    :src="props.feed.media_url"
                    alt="Instagram post"
                    width="100%"
                  />
                </a>

                <div class="text-white text-center q-mt-sm">
                  {{ props.feed.caption }}
                </div>
              </div>
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
  }
};
</script>
