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
          <!-- Or just automate reoccuring events so that it calculates next -->

          <!-- Create filter for eomji categories i.e. parties, frisbee events, foundation -->

          <!-- Skal bestyrelsesmøder være en del af kalenderen? muligvis med links til referat ? -->
          <!-- Create a timeline instead of table ? -->

          <h2 class="q-mb-md">{{ $t("Reoccurring events") }}</h2>
          <q-markup-table flat bordered separator="none">
            <tbody>
              <tr v-for="(item, index) in events" :key="index">
                <td class="text-left">{{ item.emoji }}</td>
                <td class="text-left">{{ item.name }}</td>
                <td class="text-left">{{ $t(item.occurence) }}</td>
                <td class="text-left">{{ $t(item.next) }}</td>
              </tr>
            </tbody>
          </q-markup-table>

          <!-- <q-timeline :layout="layout" color="secondary">
               <q-timeline-entry heading>
               Timeline heading
               <br />
               ({{
                  $q.screen.lt.sm
                  ? "Dense"
                  : $q.screen.lt.md
                  ? "Comfortable"
                  : "Loose"
                  }}
               layout)
               </q-timeline-entry>

               <q-timeline-entry
               v-for="(item, index) in events"
               :key="index"
               :title="item.name"
               :subtitle="item.occurence"
               :side="index % 2 == 0 ? 'left' : 'right'"
               :icon="item.emoji"
               >
               <div>
               {{ item.next }}
               </div>
               </q-timeline-entry>
               </q-timeline> -->

        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { computed } from "vue";
export default {
  name: "Calendar",
  setup() {
    const $q = useQuasar();

    return {
      layout: computed(() => {
        return $q.screen.lt.sm
          ? "dense"
          : $q.screen.lt.md
          ? "comfortable"
          : "loose";
      }),
    };
  },
  data() {
    return {
      events: [
        {
          emoji: "🥏",
          name: "Indendørsfinalstævne",
          occurence: "Unkown but often in March",
          next: "",
        },
        {
          emoji: "🤓",
          name: "Generalforsamling",
          occurence: "2nd Saturday in march",
          next: "",
        },
        {
          emoji: "🥏",
          name: "BUM",
          occurence: "Unkown but often in late May or early June",
          next: "",
        },
        {
          emoji: "🥳",
          name: "Summer Party",
          occurence: "2nd Saturday in July",
          next: "",
        },
        {
          emoji: "🥏",
          name: "Udendørsfinalstævne",
          occurence: "Unkown but often in September",
          next: "",
        },
        {
          emoji: "🥳",
          name: "Christmas Party",
          occurence: "2nd Saturday in December",
          next: "",
        },
      ],
    };
  },
  computed: {},
};
</script>

<style></style>
