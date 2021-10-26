<template>
  <q-page class="row bg-black text-white">
    <q-scroll-area class="q-px-md col">
      <div class="row">
        <div
          class="
            q-px-md q-pb-xl
            offset-md-4
            col-md-4
            offset-sm-2
            col-sm-8 col-xs
          "
        >
          <!-- <h2 class="q-mb-md">{{ $t("Upcomming events") }}</h2> -->

          <!-- Ideas: hook it up to google calendar or sheets so that other people can add events -->
          <!-- Or just automate reoccuring events so that it calculates text -->

          <!-- Create filter for eomji categories i.e. parties, frisbee events, foundation -->

          <!-- Skal bestyrelsesmøder være en del af kalenderen? muligvis med links til referat ? -->

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
                  <q-card>
                    <q-card-section>
                      {{ item.text }}
                    </q-card-section>
                    <q-card-section>
                      <span
                        v-for="(member, index) in item.members"
                        :key="index"
                      >
                        {{ member }}
                      </span>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </tr>
            </tbody>
          </q-markup-table>
        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script>
export default {
  name: "Committees",
  data() {
    return {
      events: [
        {
          default: true,
          icon: "🥏",
          name: "Social",
          members: ["Ditte"],
          text: "Sommmerfest og julefrokost",
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
          members: ["Laura"],
          text: "Facebook Instagram stuff",
        },
        {
          default: false,
          icon: "🥏",
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
