<template>  
  <div>
    <div class="navBarBackDrop" @click="showMenu=false;" />

    <div class="topBar">
      <ClientOnly> 
        <b-row align-h="between" class="px-3" no-gutters>
          <b-col cols="auto" class="topBarLeft">
            <div class="logo" @click="scrollTo('top')"></div>
          </b-col>
          <b-col cols="6" class="topBarRight">
            <div class="snsBtnContainer mx-4">
              <reference types="vite-svg-loader" >
                <b-row class="px-3">
                  <b-col>
                    <NuxtLink to="https://www.facebook.com/Miconproject" target="_blank"> <FbIcon class="snsBtn" /></NuxtLink> 
                  </b-col>
                  <b-col>
                    <NuxtLink to="https://www.youtube.com/channel/UCz1HT4pcoYorlvOZ22Q1yew" target="_blank"><YTIcon class="snsBtn" /></NuxtLink>
                  </b-col>
                  <b-col>
                    <NuxtLink to="https://twitter.com/miconproject" target="_blank"><TWIcon class="snsBtn" /></NuxtLink>
                  </b-col>
                  <b-col>
                    <NuxtLink to="https://discord.com/invite/4AFXAWBjWw" target="_blank"><DCIcon class="snsBtn" /></NuxtLink>
                  </b-col>
                </b-row>
              </reference>
            </div>
            <div class="langSelector px-3">
              <template v-for="(locale,index) in $i18n.availableLocales" :key="locale">
                <a :class="$i18n.locale==locale?'selected':''" href="" @click="$i18n.locale=locale">{{ locale.toUpperCase() }}</a> {{ index==$i18n.availableLocales.length-1?'':' / ' }}
              </template>      
            </div>
          </b-col>
        </b-row>
      </ClientOnly>
    </div>

    <div class="process">
      <ScrollProcess :persent="process" />
    </div>


      

      

    <div class="navBar" style="visibility: hidden;">
      <div class="navItemList py-5">       

        
        <ClientOnly>
          <img :src="LogoSM" class="navLogo" @click="scrollTo('top')" />
          <div class="navList pt-5 mt-5">
            <h2 style="color:#5A79BB;"> Mic On Project /</h2>
            <div class="mop navItems py-4">
              <div class="navItem my-2" v-for="item in navItemList.mop" :key="item.name" @click="scrollTo(item.link)" >{{ $t(item.name) }}</div>
            </div>
          </div>  
          <div class="navList pt-5 mt-5">
            <h2 style="color:#C4A3BF;"> Vtuber /</h2>
            <div class="vtuber navItems py-4">
              <div v-for="item in navItemList.vtuber" :key="item.name" @click="showMenu=!showMenu">
                <NuxtLink class="navItem my-2" :to="item.link" :target="item.blank">{{ $t(item.name) }}</NuxtLink>
              </div>
            </div>
          </div>
        </ClientOnly>
        
        

        
      </div>      
      <div class="navBarBtn prevent-select" @click="showMenu=!showMenu">
        <i class="fa-solid fa-bars turns90" ></i>
      </div>
    </div>  
  </div>
</template>


<script setup lang="ts">
  import FbIcon from '@/assets/sns/fb.svg?component'
  import YTIcon from '@/assets/sns/yt.svg?component'
  import TWIcon from '@/assets/sns/tw.svg?component'
  import DCIcon from '@/assets/sns/dc.svg?component'
  import LogoSM from '@/assets/logo/logo_original_sm.png'
  
</script>

<script lang="ts">
import { defineComponent } from 'vue'
import g from '@/mixins/g.ts'  
export default defineComponent({  
  mixins:[g],
  data(){
    const process = inject<number>('process');
    return{      
      showMenu:false, 
      navItemList:{
        mop:[
          {link:'.aboutMOPBG',name:'What is Mic On Project'},
          {link:'.vtuberPBG',name:'Vtuber'},
          {link:'.aboutUsBG',name:'About Us'},
          {link:'https://twitter.com/miconproject',name:'News',blank:'_blank'}
        ],
        vtuber:[
          {link:'/schedule',name:'Schedule',blank:''}          
        ]
      },
      process,
    }
  },
  mounted(){        
    if(process.client){        
      this.$nextTick(() => {
        this.process=((document.querySelector('.cellContainer') as Element)?.scrollTop + window.innerWidth) / (document.querySelector('.cellContainer') as Element)?.scrollHeight * 100          
      }) 
        
      let widht = document.querySelector<HTMLElement>(".navBar")?.offsetWidth ?? 0;
      let left = widht*-1+50;          
      (document.querySelector<HTMLElement>(".navBar") as HTMLElement).style.cssText = `transition: 0s; left: ${left}px`;    
      (document.querySelector('.cellContainer') as Element)?.addEventListener('scroll', this.scrollProcessPre);      
    }       
    
  },
  beforeDestroy(): void {
    (document.querySelector('.cellContainer') as Element)?.removeEventListener('scroll', this.scrollProcessPre);    
  },
  methods:{   
    scrollProcessPre(){
      this.process=((document.querySelector('.cellContainer') as Element)?.scrollTop + window.innerWidth) / (document.querySelector('.cellContainer') as Element)?.scrollHeight * 100
    },
    scrollTo(e:string){
      if(process.client) {
        if(e.startsWith('http'))  window.open(e, '_blank')?.focus();
        else if(e=='top'){
          this.$router.push('/');  
          (document.querySelector('.cellContainer') as Element).scrollTop=0;
        }
        else{           
          this.$router.push('/#'+e.replace('.','').replace('BG',''))          
          var offset=100;
          var target =(document.querySelector(e) as Element).getBoundingClientRect().left;
          (document.querySelector('.cellContainer') as Element).scrollTop+= target - offset;
        }
      }
      this.showMenu=false;
    }
  },
  watch:{       
    $route(to, from) {
      nextTick(()=>{
        if(to.hash) {          
          this.scrollTo(to.hash.replace('#','.')+"BG");          
        }
        if(process.client) {
          this.process=((document.querySelector('.cellContainer') as Element)?.scrollTop + window.innerWidth) / (document.querySelector('.cellContainer') as Element)?.scrollHeight * 100;
          (document.querySelector('.cellContainer') as Element)?.addEventListener('scroll', this.scrollProcessPre);   
        }
      });     
    }, 
    showMenu(newVal){  
      if(process.client){
        if(newVal){          
          (document.querySelector(".navBar") as HTMLElement).style.cssText = "";
          (document.querySelector(".navBarBackDrop") as HTMLElement).style.cssText = 'visibility:visible;opacity:0.5;';
        }
        else{
          let width = (document.querySelector(".navBar") as HTMLElement)?.offsetWidth;
          let left = width ? width * -1 + 50 : 0;
          (document.querySelector(".navBar") as HTMLElement).style.cssText = `left:${left}px`;
          (document.querySelector(".navBarBackDrop") as HTMLElement).style.cssText = 'visibility:visible;opacity:0.0;';
          setTimeout(() => {  (document.querySelector(".navBarBackDrop") as HTMLElement).style.cssText = ''; }, 500);    
        }
      }
      
    }
  },
  showMobile(newVal:boolean){
    if(process.client){      
      if(newVal){
        (document.querySelector('.cellContainer') as Element)?.removeEventListener('scroll', this.scrollProcessPre);    
      }
      else{        
        this.process=((document.querySelector('.cellContainer') as Element)?.scrollTop + window.innerWidth) / (document.querySelector('.cellContainer') as Element)?.scrollHeight * 100     
        let widht = document.querySelector<HTMLElement>(".navBar")?.offsetWidth ?? 0;
        let left = widht*-1+50;          
        (document.querySelector<HTMLElement>(".navBar") as HTMLElement).style.cssText = `transition: 0s; left: ${left}px`;    
        (document.querySelector('.cellContainer') as Element)?.addEventListener('scroll', this.scrollProcessPre);
      }
    }
      
  }

})
</script>


<style scoped>
.prevent-select {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}
  .navBarBackDrop{
    position: fixed;
    left:0;
    top:0;
    height:100vh;
    width:100vw;
    background: #000000;
    opacity: 0.0;
    z-index: 1;
    visibility: hidden;
    transition: opacity 0.5s;
    cursor: pointer;
  }
  .topBar{
    position: fixed;
    top:30px;
    left:60px;
    width:calc(100vw - 120px);
    z-index: 2;
  }  
  .process{
    position: fixed;
    bottom:30px;
    right:50px;
    width:20vh;
    z-index: 2;
  }
  .topBarLeft{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .topBarRight{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .snsBtnContainer{
    background: #fff;
    padding: 5px;
    border-radius: 9px;
    width:max-content;   
    height:35px;
    border:#000 1px solid;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .snsBtn{
    height:20px;
    transition: 0.2s;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .snsBtn:hover{
    transform: scale(1.2);
  }
  .langSelector{       
    font-size: 14px;
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
  }
  .langSelector *{
    text-decoration: none;
    transition: 0.2s;
    letter-spacing: 0;
    color:#888;
  }
  .langSelector *:hover{    
    color:#222;
  }
  
  .langSelector .selected{
    color:#222;
  }
  .logo{
    -webkit-mask-image: url("~/assets/logo/logo_original_sm.png");
    mask-image: url("~/assets/logo/logo_original_sm.png");    
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    mask-size: 200px 72px;
    -webkit-mask-size: 200px 72px;
    background: #000;
    width:200px;
    height:72px;        
  }

  .navBar{
    height: 100vh;    
    width:100vw;
    max-width: 500px;
    position:fixed;
    top:0;
    left:0;
    z-index: 2;   
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row; 
    background: #FFF;
    transition: left 0.5s;    
  }
  .navBarBtn{
    position: absolute;
    right:0;
    display: flex;
    justify-content: center;
    align-items: center;
    width:50px;
    height: 100vh;
    background: #FFF;
    cursor: pointer;
    border-left:#000 solid 2px;
    border-right:#000 solid 2px;
  }
  .navLogo{
    width:200px;
    height: 72px;    
  }

  .turns90{
    transform: rotate(90deg) scale(1.5);
  }
  .navItemList{
    height:100vh;
    width:500px;
    max-width:80%;
    display: flex;    
    flex-direction:column;    
    overflow: scroll; 
  }
  .navItemList *{
    font-weight: 800;
    letter-spacing: .2rem;
  }
  .navItems{
    display: flex;
    flex-direction: column;        
  }
  .navItem{
    text-decoration: none;
    font-size: 19px;
    color:#4e4e4e;    
    transition: 0.2s;
    font-weight: 600;
    cursor: pointer;
  }
  .mop > .navItem:hover{
    color:#5A79BB;
  }
  .vtuber > .navItem:hover{
    color:#C4A3BF;
  }
</style>