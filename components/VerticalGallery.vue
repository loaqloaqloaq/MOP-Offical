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
    }
  }
});
</script>
<template>
 
  <Swiper    
    :space-between="0"
    :modules="[SwiperAutoplay]"
    :slides-per-view="3.5"
    :loop="true"
    :effect="'creative'"
    :direction="'vertical'"
    :grabCursor="false"
    :speed="5000"    
    :freeMode=true
    :freeModeMomentum=false
    :autoplay="{
      delay: 1,
      disableOnInteraction: false,   
    }"    
    class="swiper imgSwiper"
  >
    <SwiperSlide v-for="p in m" :key="p" class="swiperSlide">
      <div class="imgDiv">
        <img :data-src="p" class="img" />
      </div>
    </SwiperSlide>
  </Swiper>

</template>
<style lang="scss" scoped>  
 .swiper {
  padding:0 15px;
  margin : 0 5vh;
  border-left: $NAO-Dark-100  solid 5px;
  border-right: $NAO-Dark-100  solid 5px;
  background: #fff;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);
 } 
 .imgDiv{ 
  margin:10px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  .img{
    width:45vh;
  }
}
</style>

<style lang="scss">
.imgSwiper{
  .swiper-wrapper {
    -webkit-transition-timing-function:linear!important; 
    -o-transition-timing-function:linear!important;
    transition-timing-function:linear!important; 
  }
}
</style>