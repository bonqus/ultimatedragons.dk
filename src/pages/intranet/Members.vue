<template>
  <page>
    <h2>2022 {{ $t("Members") }} {{ $t("Outdoor") }}</h2>
    {{ $t("Last Update") }}: 2022-05-24
    <q-btn-toggle
      v-model="sex"
      class="q-py-md"
      spread
      toggle-color="primary"
      :options="sexOptions"
    />
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
      <q-item v-for="member in membersfiltered" :key="member.name">
        <q-item-section>
          <q-item-label>{{ member.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </transition-group>
  </page>
</template>

<script>
export default {
  name: "MembershipPage",
  data() {
    return {
      search: "",
      sex: "all",
      members: [
        { name: "Alexandra Pickett Porrazzo", sex: "Kvinde" },
        { name: "Anita Pedersen", sex: "Kvinde" },
        { name: "Christine Albrechtsen", sex: "Kvinde" },
        { name: "Esben Larsen Rasmussen", sex: "Mand" },
        { name: "Jonathan Ortved Melcher", sex: "Mand" },
        { name: "Laura Toppenberg Lazar", sex: "Kvinde" },
        { name: "Lærke Marie Høgh Bünger", sex: "Kvinde" },
        { name: "Mathilde Sif Holm Jacobsen Eiby", sex: "Kvinde" },
        { name: "Peter Alexander Garnæs", sex: "Mand" },
        { name: "Rikke Brouw Hyldahl", sex: "Kvinde" },
        { name: "Thomas Ryde", sex: "Mand" },
        { name: "Thomas Siggaard Andersen", sex: "Mand" },
        { name: "Yannick Elias Heiser", sex: "Mand" },
      ],
    };
  },
  computed: {
    membersfiltered() {
      if (this.search === "") {
        return [...this.members]
          .filter((m) => this.sex == "all" || m.sex === this.sex)
          .sort((a, b) => (a.name > b.name ? 1 : -1));
      }
      return [
        ...this.members.filter((m) =>
          m.name.toLowerCase().includes(this.search.toLowerCase())
        ),
      ]
        .filter((m) => this.sex == "all" || m.sex === this.sex)
        .sort((a, b) => (a.name > b.name ? 1 : -1));
    },
    sexOptions() {
      return [
        { label: this.$t("All"), value: "all" },
        { label: this.$t("Men"), value: "Mand" },
        { label: this.$t("Women"), value: "Kvinde" },
      ];
    },
  },
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
