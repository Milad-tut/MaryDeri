<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-primary">
        <q-toolbar-title class=" text-white text-center">
          maryderi
        </q-toolbar-title>

        <div class="absolute-right" style="top: 5px; left: 10px;">
           <q-btn outlined label="ثبت نام / ورود" rounded color="secondary"/>
          
        </div>
      </q-toolbar>
    </q-header>



    <q-page-container class= "">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'



export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup () {
    const leftDrawerOpen = ref(false)
    
    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
