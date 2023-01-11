<template>
    <div>
        <q-img :src="props.image"
        spinner-color="white" style="
        height: 240px;  border:2px solid #fff;
  border-radius:25px;
  
  " @click="$router.push('/products/women wallet')" >
   <div class="absolute-top-left hidden text-subtitle2">
           {{ props.title }}
          </div>
  </q-img>

    </div>
</template>

<script setup>
const props = defineProps({
    Image: {
        default: '',
        type: String
    },
    title: {
default:'',
type: String
    }
})
</script>

<style lang="scss">
.q-img__image{
   border-radius: 20px;
   cursor:pointer;
}
.q-img:hover {
   box-shadow:
  2.3px 1.6px 2.3px -3px rgba(0, 0, 0, 0.038),
  6.4px 4.5px 6.4px -3px rgba(0, 0, 0, 0.055),
  15.4px 10.9px 15.4px -3px rgba(0, 0, 0, 0.072),
  51px 36px 51px -3px rgba(0, 0, 0, 0.11);
  transform: scale(1.04);
  transition: all 0.3s ease-in-out;
}
.q-img:hover>div>div{
   display: block !important;
   transition: all 0.3s ease-in-out;
   transform:translateX(50px) translateY(40px);
}
</style>