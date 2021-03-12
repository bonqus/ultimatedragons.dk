<template>
  <q-page class="row bg-black text-white ">
    <q-scroll-area class="q-px-md col">
      <q-btn v-show="false" @click="sendStuff()">
        hej
      </q-btn>
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
    },
    sendStuff() {
      // send a POST request
      const GOOGLE_FORM_NAME_ID = "entry.717164993";
      const GOOGLE_FORM_AGE_ID = "entry.452129453";
      const GOOGLE_FORM_SEX_ID = "entry.1999305236";
      const CORS_PROXY = "https://cors-escape.herokuapp.com/";

      const GOOGLE_FORM_ACTION_URL =
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdEyndlFX_uqiIzDk4cu-24a0VU22evl8DHR4Xmt5e4mYYLcA/formResponse";

      // this.$axios({
      //   method: "post",
      //   url: CORS_PROXY + GOOGLE_FORM_ACTION_URL,
      //   data: {
      //     [GOOGLE_FORM_NAME_ID]: "lkol",
      //     [GOOGLE_FORM_AGE_ID]: "9",
      //     [GOOGLE_FORM_SEX_ID]: "hej"
      //   }
      // })
      //   .then(() => {
      //     console.log("BRO");
      //   })
      //   .catch(error => {
      //     console.log("whatever");
      //   });
      const formData = new FormData();
      formData.append(GOOGLE_FORM_NAME_ID, "lkol");
      formData.append(GOOGLE_FORM_AGE_ID, "9");
      formData.append(GOOGLE_FORM_SEX_ID, "hej");

      this.$axios.post(CORS_PROXY + GOOGLE_FORM_ACTION_URL, formData);
    }
  }
};
</script>
