<script setup>
const props = defineProps({
  name: { type: String, required: true },
  size: { type: Number, default: 20 }
})

const iconContent = ref('')

import(`~/assets/icons/${props.name}.svg?raw`).then(module => {
  console.log(module)
  iconContent.value = module.default
})
</script>

<template>
  <div 
    class="cursor-pointer"
    :style="{
      width: size + 'px',
      height: size + 'px',
      display: 'inline-block'
    }"
    v-html="iconContent"
  />
</template>
