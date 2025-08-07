<script setup lang="ts">
const props = defineProps({
  slides: {
    type: Array as () => string[],
    required: true
  }
});

const selectedSlide = ref(0);

const updateSelected = (index: number) => {
  selectedSlide.value = index;
};
</script>

<template>
<div class="flex items-start md:w-max w-full gap-x-[30px]">
  <SliderMini v-if="!isMobile()" :slides="slides" :activeIndex="selectedSlide"/>
  <SliderMain :slides="slides" @update-selected="updateSelected"/>
</div>
</template>

<style scoped>
</style>