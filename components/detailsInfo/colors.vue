<script setup lang="ts">

import type { Color } from "~/models/catalog"

const props = defineProps<{
  colors: Color[]
}>()

const selectedColor = ref<Color>(props.colors[0] ? props.colors[0] : {name: '', value: ''})

const selectColor = (color: Color) => {
  selectedColor.value = color
}

</script>
<template>
  <div class="font-sans">
    <div class="pb-[9px]">Цвет: {{ selectedColor.name }}</div>
    
    <div class="flex items-start gap-x-[14px]">
      <div v-for="color in props.colors" class="flex flex-col items-center" @click="selectColor(color)">

        <div class="w-[28px] h-[27px] border-[1px] border-[#BDBDBD]" :style="{background:color.value}" />
        
        <div class="w-[34px] h-[1px] border-b-[1px] border-[#4F4F4F] pt-[3px]" v-if="color.value === selectedColor.value"/>
    </div>
    <hr>
    </div>

  </div>
</template>