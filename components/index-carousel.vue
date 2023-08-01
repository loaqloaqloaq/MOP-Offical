<script setup lang="ts">
  
</script>
<script lang="ts">
import g1 from '@/assets/goods/g1.webp'
import g2 from '@/assets/goods/g2.webp'
import g3 from '@/assets/goods/g3.webp'
import { defineComponent } from 'vue'
export default defineComponent({ 
  props:{    
    content:{
      type:String
    },      
  },
  data(){
    return {   
      songs:[
        'q12WXh4MerU',
        'VHjDguC4d_c',
        'NgjXCFqnXis',
        'gttM41HeoFo',
        'VYQO9zcvXB4'
      ],     
      images:[
        {img:g1,url:'https://shokenhkv.com/product/mop012/'},
        {img:g2,url:'https://shokenhkv.com/product/mop013/'},
        {img:g3,url:'https://shokenhkv.com/product/mop010/'}
      ],
      option:{
        'space-between':0,
        'modules':[SwiperAutoplay],
        'slides-per-view':1,
        'loop':true,
        'effect':'creative',
        'grabCursor':false,
        'speed':5000,
        'freeMode':true,
        'freeModeMomentum':false,
        'autoplay':{
          delay: 3000,
          disableOnInteraction: true
        },        
      },
      option1:{
        'space-between':0,
        'modules':[SwiperAutoplay],
        'slides-per-view':1,
        'loop':true,
        'effect':'creative',
        'grabCursor':false,
        'speed':5000,
        'freeMode':true,
        'freeModeMomentum':false,
        'autoplay':{
          delay: 2500,
          disableOnInteraction: true
        },        
      } 
    }
  },
  methods:{
    gotoNewTab(url:string): void{
      if(process.client){
        window.open(url, '_blank')?.focus();
      }
    },
  }
});
</script>
<template>
  <client-only>
    <Swiper   
      v-bind="option"   
      class="swiper"
      v-if="content=='video'"
    >
      <SwiperSlide v-for="i in songs" :key="i" class="swiperSlide">
        <div class="ytContinaer">
        <iframe :src="'https://www.youtube.com/embed/'+i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="ytEmbed"></iframe>
        </div>
      </SwiperSlide>
    </Swiper>

    <Swiper   
      v-bind="option1"   
      class="swiper"
      v-else
    >
      <SwiperSlide v-for="i in images" :key="i.url" class="swiperSlide">
        <div class="goodsimgdiv" @click="gotoNewTab(i.url)">
          <img :src="i.img" class="goodsimg" />
        </div>
      </SwiperSlide>
    </Swiper>
  </client-only>
</template>
<style lang="scss" scoped>
.swiper{
  height:28vh; 
  aspect-ratio:  4 / 3 ; 
}
.img{
  height:28vh; 
  aspect-ratio:  4 / 3 ; 
}
.ytContinaer{
  height:28vh; 
  aspect-ratio:  4 / 3 ;     
}
.goodsimgdiv{
  height:28vh; 
  aspect-ratio:  16 / 9 ;   
  overflow: hidden;  
  .goodsimg{
    height:100%;
  }
}
.ytEmbed{
  height:28vh; 
  aspect-ratio:  4 / 3 ; 
}

</style>