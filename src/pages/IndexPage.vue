<template>
  <q-page>
    <h1 class="text-center">
      Ilhan Branch
    </h1>
    <q-btn color="primary" icon="check" label="OK" @click="onClick" />
    <q-chip icon="event">Add to calendar</q-chip>
    <q-chip icon="bookmark">Bookmark</q-chip>
    <q-chip icon="alarm" label="Set alarm" />
    <q-chip class="glossy" icon="directions">Get directions</q-chip>
    <q-btn-toggle v-model="model" toggle-color="primary" :options="[
  { label: 'One', value: 'one' },
  { label: 'Two', value: 'two' },
  { label: 'Three', value: 'three' }
]" />
    <q-checkbox v-model="right" label="Label on Right" />
    <q-img src="https://placeimg.com/500/300/nature" :ratio="16 / 9" />
  </q-page>
</template>

<script>
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'IndexPage',
  setup () {
    return {
      model: ref(null),
      right: ref(false),
    }
  }
})
</script>
