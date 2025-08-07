export interface Color {
  name: string
  value: string
}
export interface Sizes {
  value: string
  count: string
}

export interface Product {
  id: string
  title: string
  sizes: Sizes[]
  color: Color[]
  price: number
  old_price?: number
  currency: string
  description: string
  composition: string
  care: string
  images: string[]
}