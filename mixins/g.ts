import { defineComponent } from 'vue'
export default defineComponent({  
  data() {
      return {
        screenHeight:0,
        showMobile:false,
      }
  },
  
  mounted() {
    if(process.client) this.showMobile=window.innerHeight > window.innerWidth && window.innerHeight<886;
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
    this.onResize();
  },

  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },
  methods:{
    onResize(){
      if(process.client) this.screenHeight = window.innerHeight
      if(process.client){
        this.showMobile=window.innerHeight > window.innerWidth && window.innerHeight<886;
        if( !this.showMobile && !this.$isMobile() ){
          window.scrollTo({ top: 0});
        }
      }
    }
  }
})