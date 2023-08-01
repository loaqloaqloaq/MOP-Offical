<template>
  <div class="bar">
    <div class="barline" />
    <div class="barbox" :style="`width:${persent}%;`" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  persent: number; 
}
const Props = withDefaults(defineProps<Props>(), {
  persent: 0,  
});
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({    
  watch:{
    
  },
  mounted(){
    
  }
})
</script>
<style lang="scss" scoped>
.bar{
  width:100%;
  height:10px;
  position: relative;
  .barline{
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    width:100%;
    height:1px;    
    background: #000;
  }
  .barbox{
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    height:100%;    
    background: #000;
  }
}

</style>
