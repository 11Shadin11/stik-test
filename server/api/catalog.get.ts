export default defineEventHandler(async () => {
  return useStorage('assets:server').getItem('data.json')
})