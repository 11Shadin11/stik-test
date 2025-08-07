<script setup lang="ts">
import type { Product } from "~/models/catalog"

const props = defineProps<{
  product: Product
}>()

const sizes = computed(() => props.product.sizes ?? [])
const colors = computed(() => props.product.color ?? [])

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('ru-RU').format(price)
}

</script>
<template>
  <div>
    <div class="flex items-center justify-between">
      <div>{{ product.title }}</div>
      <ui-icon v-if="isMobile()" name="stroke"/>
    </div>
    <div class="pt-[8px]">
      <span class="current-price">{{ formatPrice(product.price) }} {{ product.currency }}</span>
      <span v-if="product.old_price" class="old-price">
        {{ formatPrice(product.old_price) }} {{ product.currency }}
      </span>
    </div>


    <details-info-sizes :sizes="sizes" class="pt-[31px]"/>

    <details-info-colors :colors="colors" class="pt-[34px]"/>

    <div v-if="!isMobile()" class="flex items-start mt-[36px] gap-x-[10px] w-full">
      <div class="w-[306px] h-[44px] bg-[#000] text-[#fff] flex items-center justify-center uppercase">добавить в корзину</div>
      <div class="w-[44px] h-[44px] border-[1px] border-black flex items-center justify-center">
        <ui-icon name="stroke"/>
      </div>
    </div>

    <details-info-accordion class="mt-[40px]"/>
  </div>
</template>