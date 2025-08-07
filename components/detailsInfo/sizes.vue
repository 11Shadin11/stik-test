<script setup lang="ts">

import type { Sizes } from "~/models/catalog"

const props = defineProps<{
  sizes: Sizes[]
}>()

const count = (size: Sizes) => +size.count <= 5 ? 'мало' : ''

const isNaN = (value: string) => Number.isNaN(Number(value))

</script>
<template>
  <div>
    <div class="pb-[9px]">Размеры</div>
    
    <div class="flex items-start gap-x-[14px]">
      <div v-for="size in props.sizes" class="flex flex-col items-center">
        
        <div class="w-[65px] h-[31px] border-[1px] border-black flex items-center justify-center">{{ size.value }}</div>
        
        <div class="text-[#BDBDBD]">
          <div v-if="!isNaN(size.count)">{{ count(size) }}</div>
          
          <div v-else>подписка</div>
        </div>
      </div>
    </div>

  </div>
</template>