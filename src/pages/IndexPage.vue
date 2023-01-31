<template>,
<q-page> 
<div class="text-h1 text-center">maryderi</div>
<div class="row full-width justify-center">
   <q-img src="images/leather-4.jpg" spinner-color="white" style="height: 400px; max-width: 1400px;  border:2px solid #fff;

  border-radius:25px;" class="q-mt-xl" /> 
</div>
<div class="row full-width justify-center q-my-md">
   <div class="col-xs-12 col-sm-10 row justify-center q-col-gutter-lg">
      <div v-for="compo in image" :key="`compo-image-${compo}`" class="col-md-4 col-sm-6 col-xs-12">
       <ImageCompo :image="compo.image" :title="compo.title"/>    
      </div>
   </div>
</div>

</q-page>
</template>
<script setup>
import ImageCompo from 'src/components/ImageCompo.vue';
import { ref } from 'vue';
const image = ref([
   {image: 'https://marvel-b1-cdn.bc0a.com/f00000000084691/www.krsaddleshop.com/img/2022-10__01/KRSS_MAIN_SLIDER_TEMPLATE_03b.jpg', title:'women_wallet' },
   {image: 'https://marvel-b1-cdn.bc0a.com/f00000000084691/www.krsaddleshop.com/img/landing_page_assets/cms-page__office-spotlight_bg.jpg', title:' purse'},
   {image: 'https://trulyexperiences.com/blog/wp-content/uploads/2020/03/brown-binoculars-camera-and-bag-kit-2282479-scaled-e1584029733887.jpg', title:'shoes'},
   {image: 'https://assets.aspinaloflondon.com/images/block-feature-2021-large/1486204-106718-image-3-storage.jpg', title:'belt'},
   {image: 'https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw96fe84ef/2022/HO22/set_12262022_global/1226_SemiAnnual_Sale_Global_Grid_2_hover.jpg', title:'wristlet'},
   {image: 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2022_21/1874437/31-03-2017-000009012-son-2048x-628e6013ea8ad.jpg', title: 'wristband'},
])
</script>
