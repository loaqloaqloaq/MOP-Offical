
<template>
<!-- =========================================== -->
<!-- =^==========^====_________=======________== -->
<!-- =|\========/|===|         |=====|        |= -->
<!-- =|=\======/=|===|         |=====|________|= -->
<!-- =|==\====/==|===|         |=====|========== -->
<!-- =|===\==/===|===|         |=====|========== -->
<!-- =|====\/====|===|_________|=====|========== -->
<!-- =========================================== -->
<!-- ============做咩偷睇，呢到無野睇呀=========== -->
  <div class="layout">   
    
    <NavBar class="fixedUI" /> 
    <slot class="container" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const process = 0;
    provide('process', process);
    // ... component logic

    return {};
  },
  watch:{
    "$i18n.locale"(newVal,oldVal){
      localStorage.setItem('i18n', newVal);
    }
  },
  mounted(){    
    this.$i18n.locale = localStorage?.getItem('i18n') || this.$i18n.locale;
    const log=  '===========================================\n'+
                '=^==========^====_________=======________==\n' +
                '=|\\========/|===|         |=====|        |=\n' +
                '=|=\\======/=|===|         |=====|________|=\n'+
                '=|==\\====/==|===|         |=====|==========\n'+
                '=|===\\==/===|===|         |=====|==========\n'+
                '=|====\\/====|===|_________|=====|==========\n'+
                '===========================================\n'+
                '============做咩偷睇，呢到無野睇呀===========\n';
    console.log(log)
  },
  methods:{
    
  }

})
</script>

<style lang="scss" scoped>

</style>

<style>
  .fixedUI{
    z-index: 2;
  } 
  * {
    margin: 0;
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  

</style>
