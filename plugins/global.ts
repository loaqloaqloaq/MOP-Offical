export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
      scopedSlots: ()=> nuxtApp.scopedSlots,     
    }
  }
})