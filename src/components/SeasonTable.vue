<template>
  <q-markup-table flat bordered separator="none" class="cursor-pointer">
    <tbody>
      <tr>
        <td class="text-left">{{ $t("Summer") }}</td>
        <td class="text-left">{{ $t("Outdoor") }}</td>
        <td class="text-right">April 1</td>
        <td class="text-center">-</td>
        <td class="text-right">$t("September 30")</td>
      </tr>
      <tr class="bg-primary">
        <td class="text-left">{{ $t("Winter") }}</td>
        <td class="text-left">{{ $t("Indoor") }}</td>
        <td class="text-right">October 1 </td>
        <td class="text-center">-</td>
        <td class="text-right">March 31</td>
      </tr>
    </tbody>
  </q-markup-table>
</template>

<script>
  export default {
    name: 'SeasonTable',
    props: {
      title: {
        type: String,
        required: true
      },

      caption: {
        type: String,
        default: ''
      },

      link: {
        type: String,
        default: '#'
      },

      season: {
        type: String,
        default: 'summer'
      }
    }
  }
</script>
