<script setup lang="ts">
const props = defineProps({
  slides: {
    type: Array as () => string[],
    required: true
  }
});

const emit = defineEmits(['updateSelected']);

const currentIndex = ref(0);

const isFirstSlide = computed(() => currentIndex.value === 0);
const isLastSlide = computed(() => currentIndex.value === props.slides.length - 1);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.slides.length;
  emit('updateSelected', currentIndex.value);
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.slides.length) % props.slides.length;
  emit('updateSelected', currentIndex.value);
};

</script>

<template>
  <div class="slider-wrapper">
    <div class="slider-container">

      <button class="arrow left-[16px]" :class="{ 'opacity-50 cursor-not-allowed': isFirstSlide }" @click="prevSlide" :disabled="isFirstSlide">
        <ui-icon name="arrow-left" />
      </button>

      <div class="slides-viewport">
        <div v-for="(slide, index) in slides" :key="index" class="slide" :class="{ active: currentIndex === index }">
          <img :src="slide" class="slide-image"/>
        </div>
      </div>

      <button class="arrow right-[26px]" :class="{ 'opacity-50 cursor-not-allowed': isLastSlide }" @click="nextSlide" :disabled="isLastSlide">
        <ui-icon name="arrow-right" />
      </button>

    </div>
  </div>
</template>

<style scoped>
.slider-wrapper {
  position: relative;
  width: 600px;
  height: 750px;
  margin: 0 auto;
  overflow: hidden;
}

.slider-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.slide.active {
  opacity: 1;
  z-index: 1;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
}
</style>