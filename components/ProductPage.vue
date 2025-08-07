<script setup lang="ts">
import type { Product } from "~/models/catalog"

const { data: catalogData } = await useFetch<Product[]>('/api/catalog')

const selectedProduct = ref<Product | null>(catalogData.value?.[0] ?? null)

const images = computed(() => selectedProduct.value?.images ?? [])

</script>
<template>
  <div v-if="selectedProduct">
    <div>
      <div class="md:flex items-start flex-wrap gap-x-[61px]">
        <slider :slides="images"/>
        <detailsInfo :product="selectedProduct" :class="{'mt-[31px] px-[16px]': isMobile() }"/>
      </div>
  
      <div>
        //relatedProducts
      </div>
    </div>
  </div>
</template>