<template>
  <page>
    <h2 class="q-mb-md">{{ $t("Committees") }}</h2>

    <q-markup-table flat bordered separator="none">
      <tbody>
        <tr v-for="(item, index) in events" :key="index">
          <q-expansion-item
            :icon="item.icon"
            :label="item.name"
            :default-opened="item.default"
            group="committees"
          >
            <q-card class="bg-grey-9">
              <q-card-section>
                <div class="text-subtitle2">{{ $t("Members") }}</div>
                <span v-for="(member, index) in item.members" :key="index">
                  {{ member }}
                </span>
              </q-card-section>
              <q-card-section>
                <div class="text-subtitle2">{{ $t("Tasks") }}</div>
                {{ item.text }}
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </tr>
      </tbody>
    </q-markup-table>
  </page>
</template>

<script>
export default {
  name: "Committees",
  data() {
    return {
      events: [
        {
          default: true,
          icon: "🥳",
          name: "Social",
          members: ["Ditte"],
          text: "Vi står for at arrangere sociale aktiviteter i klubben! Både ad hoc ideer og de store årlige fester 🔥",
        },
        {
          default: false,
          icon: "🥏",
          name: "Træner",
          members: ["Benjamin"],
          text: "Træning",
        },
        {
          default: false,
          icon: "🏆",
          name: "Turnerings",
          members: ["Søren"],
          text: "DM runder",
        },
        {
          default: false,
          icon: "✨",
          name: "SoMe",
          members: ["Laura", "Rikke", "Thomas", "Mathilde"],
          text: "Vi er Dragons udadtil 🧚‍♂️ Vi laver posts fra træningskampe, sociale arrangementer, turneringer og hvad end vi synes kan tiltrække flere til klubben 🐣",
        },
        {
          default: false,
          icon: "🚧",
          name: "Klubudvikling",
          members: ["Anita"],
          text: "Hvordan får vi nye medlemmer?",
        },
        {
          default: false,
          icon: "👕",
          name: "Merchandise",
          members: ["Mathias"],
          text: "Ultimate Dragons Design DNA",
        },
      ],
    };
  },
  computed: {},
};
</script>

<style></style>
