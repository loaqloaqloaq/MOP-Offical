<template>  
  <div class="mNavBar">
    <div class="topBar">
      <div class="logo" @click="scrollTo('top')"></div>
      <div @click="showMenu=true;">
        <font-awesome-icon icon="fa-solid fa-bars" class="bars"  />
      </div>
    </div>
    <div class="navMenu" :class="showMenu?'show':''">
      <font-awesome-icon icon="fa-solid fa-xmark" class="xmark" @click="showMenu=false;" />
      <client-only>
        <img :src="LogoSM" class="navLogo" @click="scrollTo('top')" />
        <div class="langSelector px-3 mx-4 my-4">
          <template v-for="(locale,index) in $i18n.availableLocales" :key="locale">
            <a :class="$i18n.locale==locale?'selected':''" href="" @click="$i18n.locale=locale">{{ locale.toUpperCase() }}</a> {{ index==$i18n.availableLocales.length-1?'':' / ' }}
          </template>      
        </div>
        <div class="navItemContainer">
          <div class="navList pt-4 mt-4">
              <h2 style="color:#5A79BB;" class="navTitle" :class="$i18n.locale=='en'?'en':''"> Mic On Project /</h2>
              <div class="mop navItems py-4" :class="$i18n.locale=='en'?'en':''">
                <div class="navItem my-2"  v-for="item in navItemList.mop" :key="item.name" @click="scrollTo(item.link)" >{{ $t(item.name) }}</div>
              </div>
            </div>  
            <div class="navList pt-3 mt-3">
              <h2 style="color:#C4A3BF;" class="navTitle" :class="$i18n.locale=='en'?'en':''"> Vtuber /</h2>
              <div class="vtuber navItems py-4" :class="$i18n.locale=='en'?'en':''">
                <NuxtLink class="navItem my-2"  v-for="item in navItemList.vtuber" :key="item.name" :to="item.link" :target="item.blank" @click="showMenu=!showMenu">{{ $t(item.name) }}</NuxtLink>
              </div>
            </div>
        </div>
      </client-only>
    </div>
  </div>

  <div class="scrollText">
    Scroll
    <Arrow class="arrow" />
  </div>

</template>


<script setup lang="ts">
  import FbIcon from '@/assets/sns/fb.svg?component'
  import YTIcon from '@/assets/sns/yt.svg?component'
  import TWIcon from '@/assets/sns/tw.svg?component'
  import DCIcon from '@/assets/sns/dc.svg?component'
  import LogoSM from '@/assets/logo/logo_original_sm.png'
  import Arrow from '@/assets/svg/Arrow.svg?component'  
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({  
  data(){
    return{
      showMenu:false, 
      navItemList:{
        mop:[
          {link:'.aboutMOP',name:'What is Mic On Project'},
          {link:'.vtuber',name:'Vtuber'},
          {link:'.aboutUs',name:'About Us'},
          {link:'https://twitter.com/miconproject',name:'News',blank:'_blank'}
        ],
        vtuber:[
          {link:'/schedule',name:'Schedule',blank:''},          
        ]
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  },  
  methods:{
    onScroll() {
      if(window?.top?.scrollY>50){        
        document.querySelector('.scrollText')?.classList.add('disabled');
      }else{        
        document.querySelector('.scrollText')?.classList.remove('disabled');
      }
      if(window?.top?.scrollY>0){
        document.querySelector('.mNavBar')?.setAttribute('style','background:#fff8;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);');
      }
      else{
        document.querySelector('.mNavBar')?.removeAttribute('style');
      }
    },
    scrollTo(e:string){
      if(process.client) {
        if(e.startsWith('http'))  window.open(e, '_blank')?.focus();
        else if(e=='top'){
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        else{ 
          this.$router.push('/#'+e.replace('.','').replace('BG',''));
          var element = document.querySelector(e);
          var headerOffset = 45;
          var elementPosition = element?.getBoundingClientRect().top || 0;
          var offsetPosition = elementPosition + window.pageYOffset - headerOffset;        
          window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
          });
        }
      }
      this.showMenu=false;
    }
  },
  watch:{
    $route(to, from) {
      nextTick(()=>{
        console.log(to)
        if(to.hash) {          
          this.scrollTo(to.hash.replace('#','.'));          
        }        
      });     
    },    
    showMenu(newVal){  
      console.log(newVal)
    }
  },

})
</script>


<style scoped lang="scss">
  .mNavBar{
    position: fixed;    
    width:100vw;
    z-index:999;
    background:#fff0;   
    transition:background 0.2s ;       
    .topBar{      
      height:60px;
      margin: 1vh 5vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo{
        -webkit-mask-image: url("~/assets/logo/logo_original_sm.png");
        mask-image: url("~/assets/logo/logo_original_sm.png");    
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        mask-size: 152px 55px;
        -webkit-mask-size: 152px 55px;
        background: #000;
        width:152px;
        height:55px;        
      }
      .bars{
        height:25px;
      }
      
    }
    .navMenu{
      width:100vw;
      height:100vh;
      background: #fff;
      position: fixed;
      top:0;
      left:100vw;
      transition: left 0.5s;     
      overflow-y:scroll ; 
      .xmark{
        position: absolute;
        top:20px;
        right:5vw;
        height:30px;
      }
      .navLogo{
        width:50%;
        max-width:250px;
        margin-top: 5vh;
      }
      .navItemContainer{
        margin-left:5vh;
        .navTitle{
          font-weight: 700;
        }
        .navItem{
          text-decoration: none;
          font-size: 19px;
          @media screen and (min-width:500 ) {
            font-size: 14px;
          }
          color:#4e4e4e;    
          transition: 0.2s;
          font-weight: 600;
          cursor: pointer;
        }
      }
      .langSelector{       
        font-size: 18px;
        font-weight: 700;
        background: #fff;
        padding: 5px;
        height:35px;
        border-radius: 9px;
        width:max-content;
        display: flex;
        justify-content: center;
        align-items: center;
        border:#000 1px solid;        
        *{
          text-decoration: none;
          transition: 0.2s;
          letter-spacing: 0;
          color:#888;
        }
        *:hover{    
          color:#222;
        }
        
        .selected{
          color:#222;
        }
      }
      .navItems{
        display: flex;
        flex-direction: column;        
      }
      
    }
    .show{
      left:0 !important;
    }
  }

  .scrollText{    
    z-index:999;
    position: absolute;      
    bottom:10vh;
    right:-3vh;
    font-weight: 800;
    @include font-size($m-tag-font-sizes,0px);
    filter: drop-shadow(0px 0px 2px rgb(255 255 255 / 1)) ;
    transform: rotate(90deg);
    opacity: 1;
    transition: opacity 0.5s;
    .arrow{
      height:25px;  
      stroke:#000; 
      stroke-width:3px;  
    }
    &.disabled{
      opacity: 0;
    }
  }
  

   

</style>