
// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({  
  sourcemap: {
    server: false,
    client: false,
  }, 
  modules: [
    'nuxt-lazy-load',
    'nuxt-swiper'
  ],  
  ssr:true,  
  app:{
    head: {
      title: "Mic On Project",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0" },
        { name: "description", content: "遊走虛實之間\n携手探索無限\n來自香港的Vtuber社團\n與你創造更多奇跡！" },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Mic On Project' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://miconproject.com/' },
        { hid: 'og:title', property: 'og:title', content: 'Mic On Project' },
        { hid: 'og:description', property: 'og:description', content: '遊走虛實之間，携手探索無限。\n來自香港的Vtuber社團，與你創造更多奇跡！' },
        { hid: 'og:image', property: 'og:image', content: 'https://miconproject.com/preview.jpg' },
        { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
        { hid: 'keywords', property: 'keywords', content: 'mic on project, vtuber, hkvtuber, virtual youtuber, Hong Kong, mop' },
      ],
      link: [
        { rel: "icon",type: "image/x-icon", href: "/favicon.ico" },  
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css' }       
      ],
      script:[
        {src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"},
        {src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"},
        {src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollToPlugin.min.js"},
        {src:"https://html2canvas.hertzen.com/dist/html2canvas.js"},
        {src:"https://unpkg.com/vue"},
        {src:"https://unpkg.com/vue-dragscroll"}
      ],
    },
  },  
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-vue-3/dist/bootstrap-vue-3.css",   
    '@fortawesome/fontawesome-svg-core/styles.css',  
  ],//追加  
  vite: {      
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/main.scss";',
        },
      },
    },    
    plugins: [
      svgLoader()
    ] ,    
  }, 
  nitro: {
    routeRules: {
      '/api/**': { proxy: 'https://api.miconproject.com/**' }      
    }
  }
 
})
