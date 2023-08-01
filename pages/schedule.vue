<template>
  <window-schedule v-if="!$isMobile() && !showMobile" />
  <mobile-schedule v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import g from '@/mixins/g.ts'  
export default defineComponent({  
  mixins:[g],
  watch:{
    showMobile(newVal){
      if (newVal) {
        document.body.style.overflowY = 'scroll';
      }
      else{
        if(!this.$isMobile()){
          document.body.style.overflowY = 'hidden';
          window.scrollTo({top:0,behavior: 'instant'});
        }
      }
    }
  },
  mounted(){
    if (this.showMobile || this.$isMobile()) {
        document.body.style.overflowY = 'scroll';
    }
    else{
      document.body.style.overflowY = 'hidden';
      window.scrollTo({top:0,behavior: 'instant'});
    }
  }
})
</script>
