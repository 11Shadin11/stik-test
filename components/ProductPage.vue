<script setup lang="ts">
import type { Product } from "~/models/catalog"

const { data: catalogData } = await useFetch<Product[]>('/api/catalog')

const selectedProduct = ref<Product | null>(catalogData.value?.[0] ?? null)

const images = computed(() => selectedProduct.value?.images ?? [])

const relatedProductsList = computed(() => catalogData.value?.filter(product => product.id !== selectedProduct.value?.id) ?? [])

const updateSelected = (product: Product) => {
  selectedProduct.value = product
}
</script>
<template>
  <div v-if="selectedProduct" class=" pb-[106px]">
    <div class="md:flex justify-center">
      <div>
        <div class="md:flex items-start flex-wrap gap-x-[61px]">
          <slider :slides="images"/>
          <detailsInfo :product="selectedProduct" :class="{'mt-[31px] px-[16px]': isMobile() }"/>
        </div>
    
      </div>
    </div>
    <div>
      <relatedProducts :products="relatedProductsList" :selectedProduct="selectedProduct" @updateSelected="updateSelected"/>
    </div>
  </div>
</template>