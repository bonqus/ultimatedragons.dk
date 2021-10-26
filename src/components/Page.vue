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
          <slot>
          </slot>
        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>
