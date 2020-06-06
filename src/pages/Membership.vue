<template>
  <q-page class="row bg-black text-white ">
    <q-scroll-area class="q-px-md col" dark>
      <div class="row">
        <div class="q-px-md offset-md-4 col-md-4 offset-sm-2 col-sm-8 col-xs">
          <h2>{{ $t("Members") }}</h2>
          <q-input class="q-mb-md" dark v-model="search" filled type="search">
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
        "Benjamin Toppenberg Lazar",
        "Ditte Schønnemann Jørgensen",
        "Hanne Hovmark Kristensen",
        "Jakob Eiby",
        "Javier Andaluz Pinedo",
        "Jonas Hagsholm Pedersen",
        "Karen Singers",
        "Laura Toppenberg Lazar",
        "Martin Jacobensen",
        "Mathias Bohn Rasmussen",
        "Mette Godiksen",
        "Mind Jinnapat Indrapiromkul",
        "Oliver Clemmensen",
        "Peter Alexander Garnæs",
        "Rasmus Haase",
        "Rebecca Mole",
        "Sophie Jelstrup",
        "Tekla Marie Emborg",
        "Thomas Robert Träff",
        "Thomas Siggaard Andersen",
        "Casper Foltmar Gammelgaard",
        "Maria Marker",
        "Christine Albrechtsen",
        "Rikke Brouw Hyldahl"
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
