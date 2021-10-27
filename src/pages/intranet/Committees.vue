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
                <div class="text-subtitle2">{{ $t("Lead") }}</div>
                {{ item.lead }}
              </q-card-section>
              <q-card-section v-if="item.members.length">
                <div class="text-subtitle2">{{ $t("Members") }}</div>
                  {{ item.members.join(', ') }}
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
          lead: "Ditte",
          members: ["Christine", "Anders", "Jonas", "Ålen", "Eiby"],
          text: "Vi står for at arrangere sociale aktiviteter i klubben! Både ad hoc ideer og de store årlige fester 🔥",
        },
        {
          default: false,
          icon: "🥏",
          name: "Træner",
          lead: "Benjamin",
          members: ["Laura", "Mathias", "Ålen"],
          text: "Træning, udstyr, opvarming, FB begivenheder.",
        },
        {
          default: false,
          icon: "🏆",
          name: "Turnering",
          lead: "Jonathan",
          members: ["Søren", "Maria"],
          text: "DM runder, tilmelding, låne spillertøj, kørselsark opslag i den forbindelse. Turneringer, finde og søge, informér Dragons (Begivenhed)",
        },
        {
          default: false,
          icon: "✨",
          name: "SoMe",
          lead: "Laura",
          members: ["Rikke", "Ryde", "Mathilde"],
          text: "Vi er Dragons udadtil 🧚‍♂️ Vi laver posts fra træningskampe, sociale arrangementer, turneringer og hvad end vi synes kan tiltrække flere til klubben 🐣",
        },
        {
          default: false,
          icon: "🚧",
          name: "Klubudvikling",
          lead: "Anita",
          members: ["Mette", "Siggy"],
          text: "Begynder træninger, find træner, opret begivenhed, nye initiativer til promovering af klubben",
        },
        {
          default: false,
          icon: "👕",
          name: "Merchandise",
          lead: "Mathias",
          members: [],
          text: "Design og bestilling af merch, i.e. spillertøj, disc osv.",
        },
      ],
    };
  },
  computed: {},
};
</script>

<style></style>
