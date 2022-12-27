<template>
  <q-page>
    <h1 class="text-center">
      Wellcome Ilhan
    </h1>
    <q-btn color="primary" icon="check" label="OK" @click="onClick" />
    <q-chip icon="event">Add to calendar</q-chip>
    <q-chip icon="bookmark">Bookmark</q-chip>
    <q-chip icon="alarm" label="Set alarm" />
    <q-chip class="glossy" icon="directions">Get directions</q-chip>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'IndexPage'
})
</script>
