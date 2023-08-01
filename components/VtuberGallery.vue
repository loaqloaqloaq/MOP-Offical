
<script setup lang="ts">
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
</script>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({ 
  props:{
    images:{
      type:Object,
      default: function () {
        return []
      }
    },
    v:{
      type:String,
      default:()=>''
    }
  },
  data(){
    return {
            
    }
  }
});
</script>
<template>
  <Carousel :wrapAround="true">
    <Slide v-for="i in images" :key="i">
      <div class="imgDiv">
        <img :src="i" class="img" :class="v+'fill'" data-not-lazy>
      </div>
    </Slide>
    <template #addons v-if="images.length>1">
      <Navigation />      
    </template>
  </Carousel>
</template>

<style lang="scss" scoped>  
  .img{
    width:100%;
    height:auto;         
  }
  .imgDiv{
    overflow:visible ;
    padding-bottom:30px ;
  }
  .Aisufill{
    filter: drop-shadow(1.5vh 1.5vh 0px $AISU-Light-100); 
  }
  .Shizufill{
    filter: drop-shadow(1.5vh 1.5vh 0px $SHIZU-Light-100); 
  } 



</style>