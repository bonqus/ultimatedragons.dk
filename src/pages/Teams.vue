<template>
  <q-page class="row bg-black text-white ">
    <q-scroll-area class="q-px-md col" dark>
      <div class="row">
        <div class="q-px-md offset-md-4 col-md-4 offset-sm-2 col-sm-8 col-xs">
          <h2 class="q-mb-md">{{ $t("Open") }}</h2>
          <h3 class="q-mb-md q-mt-none">{{ $t("Practice") }}</h3>
          <q-markup-table dark flat bordered separator="none">
            <tbody>
              <tr>
                <td class="text-left">Fælledparken</td>
                <td class="text-left">{{ $t("Tuesday") }}</td>
                <td class="text-right">17:30 - 19:30</td>
              </tr>
              <tr>
                <td class="text-left">Fælledparken</td>
                <td class="text-left">{{ $t("Thursday") }}</td>
                <td class="text-right">17:30 - 19:30</td>
              </tr>
            </tbody>
          </q-markup-table>

          <h2 class="q-mb-md">{{ $t("Women") }}</h2>
          <h3 class="q-mb-md q-mt-none">{{ $t("Practice") }}</h3>
          <q-markup-table dark flat bordered separator="none">
            <tbody>
              <tr>
                <td class="text-left">Fælledparken</td>
                <td class="text-left">{{ $t("Tuesday") }}</td>
                <td class="text-right">17:00 - 19:00</td>
              </tr>
              <tr>
                <td class="text-left">Fælledparken</td>
                <td class="text-left">{{ $t("Thursday") }}</td>
                <td class="text-right">17:00 - 19:00</td>
              </tr>
            </tbody>
          </q-markup-table>

          <h2 class="q-mb-md">{{ $t("Mixed") }}</h2>
          <span>
            At the moment there are no mixed practices due to the corona virus
            outbreak.
          </span>
        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>
