<script setup lang="ts">
const props = defineProps({
  slides: {
    type: Array as () => string[],
    default: () => [],
    required: true
  },
  activeIndex: {
    type: Number,
    required: true
  }
});
</script>

<template>
  <div class="slider-wrapper">
    <div v-for="(slide, index) in slides" :key="index" class="thumbnail-container pb-[4px] w-full relative">
      <img :src="slide" class="slide-image":class="{ 'active': props.activeIndex !== index }"/>
    </div>
  </div>
</template>

<style scoped>
.slider-wrapper {
  display: flex;
  flex-direction: column;
  width: 70px;
  gap: 4px;
}

.thumbnail-container {
  position: relative;
  width: 70px;
  height: 88px;
  cursor: pointer;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}

.slide-image:not(.active) {
  opacity: 0.5;
}
</style>