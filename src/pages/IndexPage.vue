<template>
 <div class="q-pa-md q-gutter-sm">
    <q-banner dense class="bg-primary text-white">
      Unfortunately, the credit card did not go through, please try again.
      <template v-slot:action>
        <q-btn flat color="white" label="Dismiss" />
        <q-btn flat color="white" label="Update Credit Card" />
      </template>
    </q-banner>

    <q-banner dense class="bg-grey-3">
      <template v-slot:avatar>
        <q-icon name="signal_wifi_off" color="primary" />
      </template>
      You have lost connection to the internet. This app is offline.
      <template v-slot:action>
        <q-btn flat color="primary" label="Turn on Wifi" />
      </template>
    </q-banner>

    <q-banner dense inline-actions class="text-white bg-red">
      You have lost connection to the internet. This app is offline.
      <template v-slot:action>
        <q-btn flat color="white" label="Turn ON Wifi" />
      </template>
    </q-banner>
  </div>

  <q-page>
    <h1 class="text-center">
      Wellcome Ilhan 
          </h1>
   <div class="text-center">       
    <q-btn color="info" icon="check" label="OK" @click="onClick" />
    <q-chip icon="event">Add to calendar</q-chip>
    <q-chip icon="bookmark">Bookmark</q-chip>
    <q-chip icon="alarm" label="Set alarm" />
    <q-chip class="glossy" icon="directions">Get directions</q-chip>
   </div> 

  <div class="text-center">
    <q-btn round color="info" icon="shopping_cart" />
    <q-btn round color="secondary" icon="navigation" />
    <q-btn round color="amber" glossy text-color="black" icon="layers_clear" />
    <q-btn round color="brown-5" icon="directions" />
    <q-btn round color="deep-orange" icon="edit_location" />
    <q-btn round color="purple" glossy icon="local_grocery_store" />
    <q-btn round color="black" icon="my_location" />
  </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'IndexPage'
})
</script>
