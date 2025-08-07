<script setup lang="ts">
import { ref } from 'vue';

const sections = ref([
  {
    title: 'ОПИСАНИЕ',
    content: 'Здесь будет текст описания товара...',
    isOpen: false
  },
  {
    title: 'СОСТАВ И УХОД',
    content: 'Состав: 100% хлопок. Уход: стирать при 30°C...',
    isOpen: false
  }
]);

const toggleSection = (index: number) => {
  if(sections.value[index]) {
    sections.value[index].isOpen = !sections.value[index].isOpen;
  }
};
</script>

<template>
  <div class=" w-full border-t border-b border-gray-200 divide-y divide-gray-200">
    <div v-for="(section, index) in sections" :key="index" class="py-4">
      
      <div @click="toggleSection(index)" class="flex justify-between items-center w-full text-left font-medium uppercase">
        <span>{{ section.title }}</span>
        
        <ui-icon name="plus"/>

      </div>

      <div v-show="section.isOpen" class="mt-2 pt-2 text-sm text-gray-600">
        {{ section.content }}
      </div>
    </div>
  </div>
</template>