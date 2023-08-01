<template>
  <div class="d-flex footer">
    <div class="line line1" />
    <div class="line line2" />
    <div class="line line3" />
    <div class="line line4" />
    <div class="line line5" />
    <div class="footer-text">
      <img :src="MOPFullLOGO" class="logo my-5" />
      Copyright © 2023 Mic On Project<br>
      Website By 3s Design
      <b-button variant="outline-dark" class="bkBtn my-5" @click="scrollTop()"> BACK </b-button>
    </div>
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
    if(process.client) (document.querySelector('.cellContainer') as Element).scrollTop=0
  }
}

})
</script>

<style lang="scss" scoped>
  .footer{
    padding-right: 100px;
  }
  .line{
    transform: skewX(-15deg);
    width:5px;
    height:100vh;    
    margin-right:10px;
  }
  .line1{
    
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
    height:100vh;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: flex-end;
    letter-spacing: 0;
    font-size:12px ; 
    font-weight: 700; 
    .logo{
      width:150px;
    }
    .bkBtn{
      width:100px;  
    }
  }
</style>