<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <q-toolbar class="text-white row bg-black">
        <q-tabs align="center" class="offset-1 col-10" v-if="$q.screen.gt.xs">
          <q-route-tab
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
            :label="$t(link.label)"
            exact
          />
        </q-tabs>

        <q-btn
          v-else
          flat
          @click="drawerLeft = !drawerLeft"
          round
          dense
          icon="menu"
        />
        <q-space />
        <q-select
          v-model="lang"
          :options="langOptions"
          borderless
          map-options
          emit-value
        />
      </q-toolbar>
    </q-header>
    <q-drawer v-model="drawerLeft" content-class="bg-black">
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item
            v-for="(link, i) in links"
            :key="i"
            clickable
            v-ripple
            :to="link.to"
          >
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>

            <q-item-section>
              {{ $t(link.label) }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink";

export default {
  name: "MainLayout",
  data() {
    return {
      drawerLeft: false,
      lang: this.$i18n.locale,
      // $i18n.availableLocales
      langOptions: [
        { value: "en-US", label: "English" },
        { value: "da-DK", label: "Dansk" }
      ],
      links: [
        { icon: "group", label: "Practice", to: "/practice" },
        { icon: "store", label: "Shop", to: "/shop" },
        { icon: "alternate_email", label: "Contact", to: "/contact" }
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
