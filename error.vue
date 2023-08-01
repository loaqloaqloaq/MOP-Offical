<script setup lang="ts">
const error = useError()
</script>

<template>
  <div class="error">
   !此頁面不存在或正在維護!
  </div>
</template>
<style scoped>
  .error{
    width:100vw;
    height:100vh;
    font-size:48px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>