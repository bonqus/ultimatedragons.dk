<template>
  <page>
    <h2 class="q-mb-none">{{ $t(season) }} {{ $t("season") }}</h2>
    <h6 class="q-mt-none row items-center justify-between">
      {{ dateInterval }}
      <q-btn @click="toggleSeason()" round :icon="seasonIcon" />
    </h6>

    <h2 class="q-mb-md">{{ $t("Open") }}</h2>
    <q-markup-table flat bordered separator="none" class="cursor-pointer">
      <tbody>
        <tr
          v-for="(item, index) in openPractice"
          :key="index"
          @click="showMap(item.map)"
        >
          <td class="text-left">{{ item.name }}</td>
          <td class="text-left">{{ $t(item.day) }}</td>
          <td class="text-right">{{ item.time }}</td>
        </tr>
      </tbody>
    </q-markup-table>

    <h2 class="q-mb-md">{{ $t("Women") }}</h2>
    <q-markup-table flat bordered separator="none" class="cursor-pointer">
      <tbody>
        <tr
          v-for="(item, index) in womenPractice"
          :key="index"
          @click="showMap(item.map)"
        >
          <td class="text-left">{{ item.name }}</td>
          <td class="text-left">{{ $t(item.day) }}</td>
          <td class="text-right">{{ item.time }}</td>
        </tr>
      </tbody>
    </q-markup-table>

    <h2 class="q-mb-md">{{ $t("Mixed") }}</h2>
    <q-markup-table flat bordered separator="none" class="cursor-pointer">
      <tbody>
        <tr
          v-for="(item, index) in mixPractice"
          :key="index"
          @click="showMap(item.map)"
        >
          <td class="text-left">{{ item.name }}</td>
          <td class="text-left">{{ $t(item.day) }}</td>
          <td class="text-right">{{ item.time }}</td>
        </tr>
      </tbody>
    </q-markup-table>
    <q-dialog v-model="map.show">
      <map-dialog :src="map.src" />
    </q-dialog>
  </page>
</template>
<script>
import meta from "src/utils/meta.js";
import MapDialog from "components/MapDialog.vue";
import { useMeta } from "quasar";
const maps = {
  Faelledparken: {
    src: "https://www.google.com/maps/embed/v1/place?q=55.700525%2C%2012.568412&key=AIzaSyANaCyizbUBRWXlKKzgpyinlHjG9a8T2gQ",
  },
  Lundehusparken: {
    src: "https://www.google.com/maps/embed/v1/place?q=55.717213%2C%2012.548236&key=AIzaSyANaCyizbUBRWXlKKzgpyinlHjG9a8T2gQ",
  },
  Prismen: {
    src: "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJOZL8gEpTUkYRW0ZZQvJh8z8&key=AIzaSyANaCyizbUBRWXlKKzgpyinlHjG9a8T2gQ",
  },
  DGI: {
    src: "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJX8mNz3ZTUkYR5IcuWNz0yfg&key=AIzaSyANaCyizbUBRWXlKKzgpyinlHjG9a8T2gQ",
  },
};

const practice = [
  {
    team: "open",
    season: "Summer",
    map: maps.Faelledparken,
    name: "Fælledparken",
    day: "Monday",
    time: "17:30 - 19:30",
  },
  {
    team: "open",
    season: "Summer",
    map: maps.Lundehusparken,
    name: "Lundehusparken",
    day: "Thursday",
    time: "17:30 - 19:30",
  },
  {
    team: "open",
    season: "Winter",
    map: maps.Prismen,
    name: "Prismen",
    day: "Tuesday",
    time: "20:00 - 22:00",
  },
  {
    team: "open",
    season: "Winter",
    map: maps.DGI,
    name: "DGI Byen",
    day: "Sunday",
    time: "20:00 - 22:00",
  },
  {
    team: "mix",
    season: "Summer",
    map: maps.Faelledparken,
    name: "Fælledparken",
    day: "Monday",
    time: "17:30 - 19:30",
  },
  {
    team: "mix",
    season: "Summer",
    map: maps.Lundehusparken,
    name: "Lundehusparken",
    day: "Thursday",
    time: "17:30 - 19:30",
  },
  {
    team: "mix",
    season: "Winter",
    map: maps.DGI,
    name: "DGI Byen",
    day: "Sunday",
    time: "20:00 - 22:00",
  },
  {
    team: "women",
    season: "Summer",
    map: maps.Faelledparken,
    name: "Fælledparken",
    day: "Monday",
    time: "17:30 - 19:30",
  },
  {
    team: "women",
    season: "Summer",
    map: maps.Lundehusparken,
    name: "Lundehusparken",
    day: "Thursday",
    time: "17:30 - 19:30",
  },
  {
    team: "women",
    season: "Winter",
    map: maps.Prismen,
    name: "Prismen",
    day: "Wednesday",
    time: "18:30 - 20:30",
  },
  {
    team: "women",
    season: "Winter",
    map: maps.DGI,
    name: "DGI Byen",
    day: "Sunday",
    time: "20:00 - 22:00",
  },
];

const metaTags = {
  description: "Practice time and place.",
  title: "Ultimate Dragons | Practice",
  url: "https://ultimatedragons.dk/practice",
  img: "https://ultimatedragons.dk/dragons.png",
};
export default {
  name: "PracticePage",
  setup() {
    useMeta(meta(metaTags));
  },
  data() {
    return {
      map: { show: false, src: "" },
      season: this.currentSeason(),
    };
  },
  computed: {
    seasonIcon: function () {
      if (this.season === "Summer") return "wb_sunny";
      return "ac_unit";
    },
    dateInterval: function () {
      if (this.season === "Summer") return "April 1 - September 30";
      return "October 1 - March 31";
    },
    mixPractice: function () {
      return practice.filter(
        (p) => p.team === "mix" && p.season === this.season
      );
    },
    womenPractice: function () {
      return practice.filter(
        (p) => p.team === "women" && p.season === this.season
      );
    },
    openPractice: function () {
      return practice.filter(
        (p) => p.team === "open" && p.season === this.season
      );
    },
  },
  methods: {
    showMap: function (map) {
      this.map.src = map.src;
      this.map.show = true;
    },
    currentSeason: function () {
      const toDay = new Date();
      const month = toDay.getMonth() + 1;
      if (month > 9 || month < 4) return "Winter";
      return "Summer";
    },
    toggleSeason: function () {
      if (this.season === "Summer") {
        this.season = "Winter";
      } else this.season = "Summer";
    },
  },
  components: {
    MapDialog,
  },
};
</script>
