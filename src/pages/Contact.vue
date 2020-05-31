<template>
  <q-page class="row bg-black text-white ">
    <q-scroll-area class="q-px-md col" dark>
      <div class="row">
        <div class="q-px-md offset-md-4 col-md-4 offset-sm-2 col-sm-8 col-xs">
          <h2 class="q-mb-md">{{ $t("Board of Directors") }}</h2>
          <q-markup-table dark flat bordered separator="none">
            <tbody>
              <tr>
                <td class="text-left">{{ $t("Chairman") }}</td>
                <td class="text-right">Benjamin Toppenberg Lazar</td>
              </tr>
              <tr>
                <td class="text-left">{{ $t("Vice Chairman") }}</td>
                <td class="text-right">Kirsten Hell Knudsen</td>
              </tr>
              <tr>
                <td class="text-left">{{ $t("Treasurer") }}</td>
                <td class="text-right">Mathias Bohn Rassmusen</td>
              </tr>
              <tr>
                <td class="text-left">{{ $t("Board Member") }}</td>
                <td class="text-right">Laura Toppenberg Lazar</td>
              </tr>
              <tr>
                <td class="text-left">{{ $t("Board Member") }}</td>
                <td class="text-right">Anita Pedersen</td>
              </tr>
              <tr>
                <td class="text-left">{{ $t("Alternate") }}</td>
                <td class="text-right">Søren Alstrup</td>
              </tr>
            </tbody>
          </q-markup-table>
        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>
