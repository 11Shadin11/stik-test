<script setup lang="ts">
</script>

<template>
  <div class="fixed w-full h-[86px] bg-white flex items-center justify-between px-4 md:px-[41px] z-50">

    <div class="flex items-center gap-x-[16px]" :class="{'invisible': !isMobile()}">
      <ui-icon name="user" />
      <ui-icon name="search" />
    </div>
    
    <div class="absolute left-1/2 transform -translate-x-1/2">
      <img src="/logo.svg" alt="logo" class="h-8 md:h-10">
    </div>

    <div class="flex items-center">
      <div v-show="!isMobile()" class="flex items-center gap-x-[16px]">
        <ui-icon name="search" />
        <ui-icon name="stroke" />
        <ui-icon name="user" />
      </div>
      
      <ui-icon name="basket" class="ml-[16px]" />
    </div>
  </div>
</template>