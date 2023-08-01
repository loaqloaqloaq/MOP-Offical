<template>
  <div class="footer">
    <div class="line line1" />
    <div class="line line2" />
    <div class="line line3" />
    <div class="line line4" />
    <div class="line line5" />
    
    <b-row class="footer-text my-4" align-h="around">
      <b-col cols="5">
        <img :src="MOPFullLOGO" class="logo" />
      </b-col>
      <b-col cols="6">
        Copyright © 2023 Mic On Project<br>
        Website By 3s Design
      </b-col>
    </b-row>     
    
  </div>
</template>

<script lang="ts" setup>
  import MOPFullLOGO from '@/assets/logo/logo_original.webp'
</script>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({ 
methods:{
  scrollTop(){
    if(process.client) (document.querySelector('.cellContainer') as Element).scrollTop=0  }
  }

})
</script>

<style lang="scss" scoped>  
  .line{    
    height:5px;
    width:100vw;    
    margin-bottom:5px;
  }
  .line1{    
    margin-top:5px;
    background:$MOP-LogoC-100;
  }
  .line2{
    background:$MOP-Logo2-100;
  }
  .line3{
    background:$AISU-Light-100;
  }
  .line4{
    background:$NAO-Light-100;
  }
  .line5{
    background:$SHIZU-Light-100;
  }
  .footer-text{  
    .logo{
      height:70px;
    } 
    *{
      letter-spacing: 0;
      font-size:12px ; 
      font-weight: 700; 
      display: flex;
      align-items: center;
      justify-content: center;
    }   
  }
</style>