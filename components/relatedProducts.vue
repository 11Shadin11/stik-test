<script setup lang="ts">
import type { Product } from "~/models/catalog"

const props = defineProps<{
  products: Product[]
}>()

const emit = defineEmits(['updateSelected']);

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU').format(price)
}

const selectProduct = (product: Product) => {
  emit('updateSelected', product)
}
</script>

<template>
  <div class="mt-10 md:mx-[40px] mx-[16px]">
    <div class="uppercase">похожие товары</div>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-[31px]">
      <div v-for="product in products" :key="product.id" class="flex flex-col" @click="selectProduct(product)">
        
        <img :src="product.images[0]" class="product-image"/>
        
        <div class="flex flex-col mt-[15px] ml-[15px] text-[10px]">
          <div>{{ product.title }}</div>
          
          <div class="flex items-center gap-2 mt-[10px]">
            <span class="current-price">{{ formatPrice(product.price) }} {{ product.currency }}</span>
            <span v-if="product.old_price" class="text-gray-500 line-through">
              {{ formatPrice(product.old_price) }} {{ product.currency }}
            </span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-image {
  @apply w-full h-auto object-cover mb-2;
  aspect-ratio: 3/4;
}
</style>