<template>
  <page>
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
  </page>
</template>
<script>
import meta from "src/utils/meta.js";

export default {
  name: "ContactPage",
  data() {
    return {
      boardMembers: [
        {
          name: "Benjamin Toppenberg Lazar",
          role: "Chairman",
          email: "ultimatedragonsdenmark+chairman@gmail.com",
        },
        {
          name: "Ditte Schønnemann Jørgensen",
          role: "Vice Chairman",
          email: "ultimatedragonsdenmark+vicechairman@gmail.com",
        },
        {
          name: "Mathias Bohn Rassmusen",
          role: "Treasurer",
          email: "ultimatedragonsdenmark+treasurer@gmail.com",
        },
        {
          name: "Laura Toppenberg Lazar",
          role: "Board Member",
          email: "ultimatedragonsdenmark@gmail.com",
        },
        {
          name: "Anita Pedersen",
          role: "Board Member",
          email: "ultimatedragonsdenmark@gmail.com",
        },
        {
          name: "Jonathan Ortved Melcher",
          role: "Alternate",
          email: "ultimatedragonsdenmark@gmail.com",
        },
      ],
      metaTags: {
        description: "Contact Ultimate Dragons",
        title: "Ultimate Dragons | Contact",
        url: "ultimatedragons.dk/dashboard",
        img: "~assets/dragons-logo.png",
      },
    };
  },
  methods: {
    contact(member) {
      this.$q.dialog({
        title: member.name,
        message: member.email,
      });
    },
  },
  meta,
};
</script>
