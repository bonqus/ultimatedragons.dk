<template>
  <q-page class="row bg-black text-white ">
    <q-scroll-area class="q-px-md col">
      <div class="row">
        <div
          class="q-px-md q-pb-xl offset-md-4 col-md-4 offset-sm-2 col-sm-8 col-xs"
        >
          <h2 class="text-center">2020/2021 {{ $t("Members") }} {{ $t("Indoor") }}</h2>
          <q-input class="q-mb-md" v-model="search" filled type="search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
          <transition-group
            name="list-transition"
            tag="div"
            class="q-list q-list--dense q-list--dark"
          >
            <q-item v-for="member in membersfiltered" :key="member">
              <q-item-section>
                <q-item-label>{{ member }}</q-item-label>
              </q-item-section>
            </q-item>
          </transition-group>
        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script>
export default {
  name: "MembershipPage",
  data() {
    return {
      search: "",
      members: [
        "Anders Wulff Kringelbach",
        "Anita Pedersen",
        "Casper Foltmar Gammelgaard",
        "Christine Albrechtsen",
        "Christoph Markus Schläpfer",
        "Esben Larsen Rasmussen",
        "Jeppe Qin Hansen",
        "Kirsten Hell Knudsen",
        "Maria Marker",
        "Mathias Bohn Rasmussen",
        "Mette Godiksen",
        "Peter Alexander Garnæs",
        "Rikke Brouw Hyldahl",
        "Sofie Bejder",
        "Sophie Jelstrup",
        "Søren Alstrup",
        "Thomas Ryde"
      ]
    };
  },
  computed: {
    membersfiltered() {
      if (this.search === "") {
        return [...this.members].sort();
      }
      return [
        ...this.members.filter(m =>
          m.toLowerCase().includes(this.search.toLowerCase())
        )
      ].sort();
    }
  }
};
</script>

<style>
.list-transition-enter,
.list-transition-leave-to {
  transition: all 0.5s;
  opacity: 0;
}
.list-transition-leave-active {
  transition: all 0.5s;
  position: absolute;
  opacity: 0;
}
.list-transition-move {
  transition: all 0.5s;
}
</style>
