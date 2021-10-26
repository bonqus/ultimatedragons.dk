<template>
  <page>
    <h2 class="q-mb-md">{{ $t("Membership") }}</h2>
    <q-markup-table flat bordered separator="none">
      <tbody>
        <tr>
          <td class="text-left">{{ $t("1 season") }}</td>
          <td class="text-right">{{ $n(350, "currency") }}</td>
        </tr>
        <tr>
          <td class="text-left">{{ $t("2 seasons") }}</td>
          <td class="text-right">{{ $n(600, "currency") }}</td>
        </tr>
        <tr>
          <td class="text-left">* {{ $t("2 seasons incl. disc") }} *</td>
          <td class="text-right">{{ $n(600, "currency") }}</td>
        </tr>
      </tbody>
    </q-markup-table>

    <span class="text-caption">
      * {{ $t("Only newly registered members recieve a disc.") }} *
    </span>

    <h2 class="q-mb-md">{{ $t("Players uniform") }}</h2>
    <q-markup-table flat bordered separator="none">
      <tbody>
        <tr>
          <td class="text-left">{{ $t("Short Sleeve Jersey") }}</td>
          <td class="text-right">~{{ $n(170, "currency") }}</td>
        </tr>
        <tr>
          <td class="text-left">{{ $t("Long Sleeve Jersey") }}</td>
          <td class="text-right">~{{ $n(190, "currency") }}</td>
        </tr>
        <tr>
          <td class="text-left">{{ $t("Tanktop Jersey") }}</td>
          <td class="text-right">~{{ $n(150, "currency") }}</td>
        </tr>
        <tr>
          <td class="text-left">{{ $t("Shorts") }}</td>
          <td class="text-right">~{{ $n(140, "currency") }}</td>
        </tr>
      </tbody>
    </q-markup-table>
    <span class="text-caption">
      {{ $t("The price of the players uniform is indicative and not fixed.") }}
    </span>
    <h2 class="q-mb-md">{{ $t("Discs") }}</h2>
    <q-markup-table flat bordered separator="none" class="cursor-pointer">
      <thead>
        <tr>
          <th class="text-left">{{ $t("Color") }}</th>
          <th class="text-right">{{ $t("Members") }}</th>
          <th class="text-right">{{ $t("Price") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(disc, i) in discs" :key="i" @click="show_disc(disc)">
          <td class="text-left">{{ $t(disc.label) }}</td>
          <td class="text-right">{{ $n(60, "currency") }}</td>
          <td class="text-right">{{ $n(100, "currency") }}</td>
        </tr>
      </tbody>
    </q-markup-table>

    <h2 class="q-mb-md">{{ $t("Payment options") }}</h2>
    <q-field
      borderless
      :label="$t('Account_number')"
      stack-label
      class="col-auto"
    >
      <template v-slot:control>
        <div class="self-center full-width no-outline" tabindex="0">
          {{ account_number }}
        </div>
      </template>

      <template v-slot:append>
        <q-btn
          no-caps
          icon-right="file_copy"
          :label="$t('Copy_to_clipholder')"
          @click="copy(account_number, 'Account_number')"
        />
      </template>
    </q-field>

    <q-field
      borderless
      :label="$t('Registration_number')"
      stack-label
      class="col-auto"
    >
      <template v-slot:control>
        <div class="self-center full-width no-outline" tabindex="1">
          {{ registration_number }}
        </div>
      </template>
      <template v-slot:append>
        <q-btn
          no-caps
          icon-right="file_copy"
          :label="$t('Copy_to_clipholder')"
          @click="copy(registration_number, 'Registration_number')"
        />
      </template>
    </q-field>
    <span class="text-caption">
      {{ $t("For bank transfers, the payer's full name must be noted.") }}
    </span>
    <q-dialog v-model="disc_dialog">
      <q-card style="max-width: 600px; width: 100%">
        <q-img :src="disc.src" />
        <q-card-actions align="right">
          <q-btn flat :label="$t('OK')" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </page>
</template>

<script>
import meta from "src/utils/meta.js";
import { copyToClipboard } from "quasar";
export default {
  name: "ShopPage",
  data() {
    return {
      account_number: 4387858569,
      registration_number: 2253,
      disc_dialog: false,
      discs: [
        { label: "Black", src: require("assets/discs/black.png") },
        { label: "Grey", src: require("assets/discs/grey.png") },
        { label: "Red", src: require("assets/discs/red.png") },
        { label: "Yellow", src: require("assets/discs/yellow.png") },
      ],
      disc: null,
      metaTags: {
        description: "Buy an Ultimate Dragons membership, disc or uniform.",
        title: "Ultimate Dragons | Shop",
        url: "ultimatedragons.dk/shop",
        img: "~assets/dragons-logo.png",
      },
    };
  },
  methods: {
    show_disc(disc) {
      this.disc = disc;
      this.disc_dialog = true;
    },
    copy(n, text) {
      copyToClipboard(n)
        .then(() => {
          this.$q.notify(this.$t(text) + " " + this.$t("copied_to_clipboard"));
        })
        .catch(() => {
          console.log("Well that didn't work");
        });
    },
  },
  meta,
};
</script>
