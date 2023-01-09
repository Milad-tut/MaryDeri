<template>,
<q-page>
<div class="text-h1 text-center">maryderi</div>
<div class="row full-width justify-center">
   <q-img src="images/leather-4.jpg" spinner-color="white" style="height: 400px; max-width: 1400px;  border:2px solid #fff;

  border-radius:25px;" class="q-mt-xl" /> 
</div>
<div class="row full-width justify-center q-my-md">
   <div class="col-10 row justify-center q-col-gutter-lg">
      <div class="col-4">
        <q-img src="https://marvel-b1-cdn.bc0a.com/f00000000084691/www.krsaddleshop.com/img/2022-10__01/KRSS_MAIN_SLIDER_TEMPLATE_03b.jpg"
        spinner-color="white" style="height: 240px;  border:2px solid #fff;
  
  border-radius:25px;" @click="$router.push('/products/women wallet')" >
   <div class="absolute-top-left hidden text-subtitle2">
            women_wallet
          </div>
  </q-img>
      </div>
      <div class="col-4"><q-img src="https://marvel-b1-cdn.bc0a.com/f00000000084691/www.krsaddleshop.com/img/landing_page_assets/cms-page__office-spotlight_bg.jpg"
         spinner-color="white" style="height: 240px;  border:2px solid #fff;
  
  border-radius:25px;" @click="$router.push('/products/purse')">
   <div class="absolute-top-left hidden text-subtitle2">
            purse
          </div>
  </q-img>
      </div>
      <div class="col-4"><q-img src="https://trulyexperiences.com/blog/wp-content/uploads/2020/03/brown-binoculars-camera-and-bag-kit-2282479-scaled-e1584029733887.jpg"
         spinner-color="white" style="height: 240px;  border:2px solid #fff;
  
  border-radius:25px;" @click="$router.push('/products/shoes')">
 <div class="absolute-top-left hidden text-subtitle2">
            shoes
          </div>
  </q-img>

      </div>
      <div class="col-4"><q-img src="https://assets.aspinaloflondon.com/images/block-feature-2021-large/1486204-106718-image-3-storage.jpg"
         spinner-color="white" style="height: 240px;  border:2px solid #fff;
  
  border-radius:25px;" @click="$router.push('/products/belt')">
   <div class="absolute-top-left hidden text-subtitle2">
            belt
          </div>
  </q-img>
      </div>
      <div class="col-4"><q-img src="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw96fe84ef/2022/HO22/set_12262022_global/1226_SemiAnnual_Sale_Global_Grid_2_hover.jpg"
         spinner-color="white" style="height: 240px;  border:2px solid #fff;

  border-radius:25px;" @click="$router.push('/products/wristlet')">
   <div class="absolute-top-left hidden text-subtitle2">
            wristlet
          </div>
  </q-img>
      </div>
      <div class="col-4"><q-img src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2022_21/1874437/31-03-2017-000009012-son-2048x-628e6013ea8ad.jpg"
         spinner-color="white" style="height: 240px;  border:2px solid #fff;
  
  border-radius:25px;" @click="$router.push('/products/wristband')">
   <div class="absolute-top-left hidden text-subtitle2">
            wristband
          </div>
  </q-img>
      </div>
   </div>
</div>

</q-page>
</template>
<script setup></script>
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