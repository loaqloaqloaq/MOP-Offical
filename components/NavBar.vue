<template>
  <div>
    <window-navbar v-if="!$isMobile() && !showMobile" />
    <mobile-navbar v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import g from '@/mixins/g.ts'  
export default defineComponent({  
  mixins:[g],
})
</script>