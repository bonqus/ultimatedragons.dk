<template>
  <page>
    <h2>2021-22 {{ $t("Members") }} {{ $t("Indoor") }}</h2>
    {{ $t("Last Update") }}: 2021-10-14
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
        { name: "Anders Hvidkjær", sex: "Mand" },
        { name: "Anders Kyvsgaard Budolfsen", sex: "Mand" },
        { name: "Benjamin Toppenberg Lazar", sex: "Mand" },
        { name: "Ditte Schønnemann Jørgensen", sex: "Kvinde" },
        { name: "Jakob Eiby", sex: "Mand" },
        { name: "Jonas Hagsholm Pedersen", sex: "Mand" },
        { name: "Jonathan Ortved Melcher", sex: "Mand" },
        { name: "Kirsten Hell Knudsen", sex: "Kvinde" },
        { name: "Laura Toppenberg Lazar", sex: "Kvinde" },
        { name: "Mathias Bohn Rasmussen", sex: "Mand" },
        { name: "Mette Godiksen", sex: "Kvinde" },
        { name: "Nemo Bo Molbech", sex: "Mand" },
        { name: "Oliver Clemmensen", sex: "Mand" },
        { name: "Oliver Elleholm Kristoffersen", sex: "Mand" },
        { name: "Oskar Holm Møller", sex: "Mand" },
        { name: "Rikke Brouw Hyldahl", sex: "Kvinde" },
        { name: "Sophie Jelstrup", sex: "Kvinde" },
        { name: "Thomas Robert Träff", sex: "Mand" },
        { name: "Thomas Ryde ", sex: "Mand" },
        { name: "Thomas Siggaard Andersen", sex: "Mand" },
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
