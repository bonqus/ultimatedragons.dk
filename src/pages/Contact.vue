<template>
  <q-page class="row bg-black text-white ">
    <q-scroll-area class="q-px-md col">
      <div class="row">
        <div
          class="q-px-md q-pb-xl offset-md-4 col-md-4 offset-sm-2 col-sm-8 col-xs"
        >
          <h2 class="q-mb-md">{{ $t("Board of Directors") }}</h2>
          <q-markup-table flat bordered separator="none">
            <tbody>
              <tr
                v-for="member in boardMembers"
                :key="member.name"
                @click="contact(member)"
              >
                <td class="text-left">{{ $t(member.role) }}</td>
                <td class="text-right">{{ member.name }}</td>
              </tr>
            </tbody>
          </q-markup-table>
          <div class="q-pa-md q-gutter-md row justify-center">
            <q-btn
              round
              type="a"
              href="https://www.facebook.com/UltimateDragons"
              target="__blank"
              icon="ion-logo-facebook"
              to=""
            />
            <q-btn
              round
              type="a"
              href="https://www.instagram.com/ultimatedragons"
              target="__blank"
              icon="ion-logo-instagram"
              to=""
            />
          </div>
        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>
<script>
export default {
  name: "ContactPage",
  data() {
    return {
      boardMembers: [
        {
          name: "Benjamin Toppenberg Lazar",
          role: "Chairman",
          email: "ultimatedragonsdenmark+chairman@gmail.com"
        },
        {
          name: "Ditte Schønnemann Jørgensen",
          role: "Vice Chairman",
          email: "ultimatedragonsdenmark+vicechairman@gmail.com"
        },
        {
          name: "Mathias Bohn Rassmusen",
          role: "Treasurer",
          email: "ultimatedragonsdenmark+treasurer@gmail.com"
        },
        {
          name: "Laura Toppenberg Lazar",
          role: "Board Member",
          email: "ultimatedragonsdenmark@gmail.com"
        },
        {
          name: "Søren Alstrup",
          role: "Board Member",
          email: "ultimatedragonsdenmark@gmail.com"
        },
        {
          name: "Anita Pedersen",
          role: "Alternate",
          email: "ultimatedragonsdenmark@gmail.com"
        }
      ]
    };
  },
  methods: {
    contact(member) {
      this.$q.dialog({
        title: member.name,
        message: member.email
      });
    }
  }
};
</script>
