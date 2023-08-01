<script setup lang="ts">
import m1 from '@/assets/photo/01.webp'
import m2 from '@/assets/photo/02.webp'
import m3 from '@/assets/photo/03.webp'
import m4 from '@/assets/photo/04.webp'
import m5 from '@/assets/photo/05.webp'
import m6 from '@/assets/photo/06.webp'
import m7 from '@/assets/photo/07.webp'
import m8 from '@/assets/photo/08.webp'
</script>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({ 
  data(){
    return {
      m:[
        m1,m2,m3,m4,m5,m6,m7,m8
      ], 
      option:{
        'space-between':0,
        'modules':[SwiperAutoplay],
        'slides-per-view':1.5,
        'loop':true,
        'effect':'creative',
        'grabCursor':false,
        'speed':5000,
        'freeMode':true,
        'freeModeMomentum':false,
        'autoplay':{
          delay: 1,
          disableOnInteraction: false
        },
        breakpoints: {
          // スライドの表示枚数：500px以上の場合
          1000: {
            slidesPerView: 3,
          }
        }
      }     
    }
    
  }
});
</script>
<template>
 
  <Swiper   
    v-bind="option"   
    class="swiper imgSwiper"
  >
    <SwiperSlide v-for="p in m" :key="p" class="swiperSlide">
      <div class="imgDiv">
        <img :src="p" class="img" data-not-lazy />
      </div>
    </SwiperSlide>
  </Swiper>

</template>
<style lang="scss" scoped>  
 .swiper {  
  border: $NAO-Dark-100  solid 5px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);

 } 
 .imgDiv{ 
  margin:20px 10px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);
  overflow: hidden;  
  width:fit-content;
  height:fit-content;
  .img{
    width:100%;
    height:auto;
  }
}
.swiper-wrapper {
  -webkit-transition-timing-function:linear!important; 
  -o-transition-timing-function:linear!important;
  transition-timing-function:linear!important; 
}
</style>