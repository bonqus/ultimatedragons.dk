<template>
  <q-page class="row bg-black text-white ">
    <q-scroll-area class="q-px-md col" dark>
      <div class="row">
        <div class="q-px-md offset-md-4 col-md-4 offset-sm-2 col-sm-8 col-xs">
          <h2 class="q-mb-md">{{ $t("Board of Directors") }}</h2>
          <q-markup-table dark flat bordered separator="none">
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
          name: "Kirsten Hell Knudsen",
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
          name: "Anita Pedersen",
          role: "Board Member",
          email: "ultimatedragonsdenmark@gmail.com"
        },
        {
          name: "Søren Alstrup",
          role: "Alternate",
          email: "ultimatedragonsdenmark@gmail.com"
        }
      ]
    };
  },
  methods: {
    contact(member) {
      this.$q.dialog({
        dark: true,
        title: member.name,
        message: member.email
      });
    }
  }
};
</script>
