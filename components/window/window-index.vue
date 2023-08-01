<template>
  <div class="cellContainer" > 
    <!-- introl -->
    
    <div class="cell introl">
      <div class="introlBG"> 

        <Star class="starS lblue fx" />
        <Star class="starM lpink fx" />
        <Star class="starL lyellow fx" />

        <Circle class="circleS lyellow fx" />
        <Circle class="circleM lblue fx" />

        <div class="lines">
          <Line2 class="line line1 pink" />
          <div class="lineMargin" />
          <Line1 class="line line2 blue" />
          <div class="lineMargin" />
          <Line3 class="line line3 yellow" />
        </div>
        <div class="scrollText">
          Scroll
          <Arrow class="arrow" />
        </div>
      </div>
      

      <div class="introlContainer">
        <div class="stands pt-5">
          <ClientOnly>
            <img @error="e=>onImgError(e)" :data-src="screenHeight > 700 ? aisu.lg: aisu.md" class="stand aisu" />
            <img @error="e=>onImgError(e)" :data-src="screenHeight > 700 ? shizu.lg: shizu.md" class="stand shizu" />
          </ClientOnly>
        </div>
        <div class="slogan" v-html="i('Slogan')" />          
        <div class="subSlogan" v-html="i('subSlogan')" />  
        <div class="indexBtns">
          <div class="aboutBtn py-2 px-4" @click="goto('.aboutMOP')" > {{ i('aboutBtn') }} <Arrow class="arrow" /></div>
          <div class="scheduleBtn py-2 px-4" @click="goto('/schedule')" > {{ i('Schedule') }} <Arrow class="arrow" /></div>
        </div>
        <div class="newVideo" >
          <index-carousel :content="'video'" />
        </div>
        <div class="newEvent" >
          <index-carousel :content="'image'" />
        </div>
      </div>

    </div>   
    <!-- end introl -->
    <!-- aboutMOP -->    
    <div class="cell aboutMOP">
      <div class="aboutMOPBG" />
      <div class="topBox" >
        <div class="titleSet">
          <div class="smTitle">Mic On Project /</div>
          <div class="title">{{ i('What is Mic On Project') }}</div>
        </div>
      </div>

      <div class="middleBox customScrollBar" :class="$i18n.locale=='en'?'en':''" v-dragscroll>
        <div class="content fade" v-html="i('aboutMOP')"> </div>
        <b-row class="btnLogo fade" no-gutters align-h="between" align-v="center">
          <b-col cols="auto" class="fade delay1">
            <div class="btn" @click="goto('.aboutUs')" >{{ i('moreBtn') }}</div>
          </b-col>
          <b-col cols="auto" class="fade delay2">
            <img @error="e=>onImgError(e)" :data-src="MOPMicLOGO" class="logo" />
          </b-col> 
        </b-row>
      </div>
      <div class="bottomBox">
      </div>
    </div> 
    <!-- end aboutMOP -->
    <!-- Vtuber -->
    <div class="cell Vtuber">

      <div class="vtuberPBG" />

      <div class="topBox" >
        <div class="titleSet">
          <div class="smTitle">Mic On Project /</div>
          <div class="title">{{ i('Vtuber') }}</div>
        </div>
      </div>

      <div class="middleBox customScrollBar" v-dragscroll>

        <b-row no-gutters class="vNav px-5 my-4 fade">
          <b-col cols="12" class="aisuNav" @click="goto('.Aisu')">
            <img @error="e=>onImgError(e)" :data-src="aisu.logo" class="logo fade" />
            <b-row class="w-100 text fade" no-gutters align-h="between" align-v="center">
              <b-col cols="auto">
                {{ i('aisu.name') }}
              </b-col>
              <b-col cols="auto">
                <Arrow class="arrow" />
              </b-col> 
            </b-row>
          </b-col>

          <b-col cols="12" class="shizuNav" @click="goto('.Shizu')">
            <img @error="e=>onImgError(e)" :data-src="shizu.logo" class="logo fade delay1" />
            <b-row class="w-100 text fade delay1" no-gutters align-h="between" align-v="center">
              <b-col cols="auto">
                {{ i('shizu.name') }}
              </b-col>
              <b-col cols="auto">
                <Arrow class="arrow" />
              </b-col> 
            </b-row>
          </b-col>
        
        </b-row>
      </div>

      <div class="bottomBox">
      </div>
    </div> 
    <!-- end Vtuber -->
    <!-- Aisu -->
    <div class="cell Aisu">
      <div class="AisuBG" />
      <div class="gallery">
        <VtuberGallery :images="aisu.ss" :v="aisu.class" class="stand" />
        <!--img @error="e=>onImgError(e)" :data-src="screenHeight > 700 ? aisu.lg: aisu.md" class="stand" /--> 
      </div>
      <div class="content">
        <div class="topBox" >
          <div class="titleSet">
            <div class="smTitle">Mic On Project 00 /</div>
            <div class="title">{{ i('aisu.name') }}</div>
          </div>
          <div class="sign">            
            <img @error="e=>onImgError(e)" :data-src="aisu.sign" class="W-100" />
          </div>
        </div>
        <div class="middleBox customScrollBar" :class="$i18n.locale=='en'?'en':''" v-dragscroll>
          <b-row class="w-100 h-100 pt-2 desc fade" no-gutters align-h="between">
            <b-col cols="12" class="mt-2 fade dalay1">
              <img @error="e=>onImgError(e)" :data-src="aisu.logo" class="logo" />
            </b-col>
            <b-col cols="12" class="my-2 fade delay2" >  
              <div class="text" v-html="i('aisu.text')" />    
            </b-col>              
            <b-col cols="12" class="my-1 info fade delay3" >  
              <div class="left">
                <a style="color:black;font-size:10px;letter-spacing:0.1em;font-weight: 800;">Fans name:</a><br>
                {{ i('aisu.fanName') }}
                <div class="tags mt-3">
                  <div class="tag my-2" v-for="tag in $tm('aisu.tag')" :key="tag">
                    #{{ $rt(tag) }}
                  </div>
                </div>
              </div> 
              <div class="right">
                <img @error="e=>onImgError(e)" :data-src="aisu.q" class="qimg" />
              </div>    
            </b-col> 
            <b-col cols="12" class="mb-3 btns fade delay4" >  
              <div class="left">
                <div class="square dark" />
                <div class="square light" />
                <div class="square light" />
                <div class="square light" />
              </div> 
              <div class="right">
                <div class="vyt sns mx-3" @click="gotoNewTab(aisu.yt)">
                  <vYtH class="snsBtn" />
                  <vYt class="snsBtn hover" />                  
                </div>
                <div class="vtw sns mx-3" @click="gotoNewTab(aisu.tw)">
                  <vTwH class="snsBtn" />
                  <vTw class="snsBtn hover" />   
                </div>
                <div class="vfb sns mx-3" @click="gotoNewTab(aisu.fb)">
                  <vFbH class="snsBtn" />
                  <vFb class="snsBtn hover" />  
                </div>
                <div class="vfb sns mx-3" @click="gotoNewTab(aisu.ig)">
                  <vIgH class="snsBtn" />
                  <vIg class="snsBtn hover" />  
                </div>
              </div>    
            </b-col>             
          </b-row>
        </div>
        <div class="bottomBox" />
      </div> 
    </div> 
    <!-- end Aisu -->
    <!-- Shizu -->
    <div class="cell Shizu">
      <div class="ShizuBG" />
      <div class="gallery">
        <VtuberGallery :images="shizu.ss" :v="shizu.class" class="stand" />        
      </div>
      <div class="content">
        <div class="topBox" >
          <div class="titleSet">
            <div class="smTitle">Mic On Project 00 /</div>
            <div class="title">{{ i('shizu.name') }}</div>
          </div>
          <div class="sign">
            <img @error="e=>onImgError(e)" :data-src="shizu.sign" class="W-100" />
          </div>
        </div>
        <div class="middleBox customScrollBar" :class="$i18n.locale=='en'?'en':''" v-dragscroll>
          <b-row class="w-100 h-100 desc pt-2 fade" no-gutters align-h="between">
            <b-col cols="12" class="mt-2 fade dalay1">
              <img @error="e=>onImgError(e)" :data-src="shizu.logo" class="logo" />
            </b-col>
            <b-col cols="12" class="my-2 fade delay2" >  
              <div class="text" v-html="i('shizu.text')" />    
            </b-col>              
            <b-col cols="12" class="my-1 info fade delay3" >  
              <div class="left">
                <a style="color:black;font-size:10px;letter-spacing:0.1em;font-weight: 800;">Fans name:</a><br>
                {{ i('shizu.fanName') }}
                <div class="tags mt-3">
                  <div class="tag my-2" v-for="tag in $tm('shizu.tag')" :key="tag">
                    #{{ $rt(tag) }}
                  </div>
                </div>
              </div> 
              <div class="right">
                <img @error="e=>onImgError(e)" :data-src="shizu.q" class="qimg" />
              </div>    
            </b-col> 
            <b-col cols="12" class="mb-3 btns fade delay4" >  
              <div class="left">
                <div class="square dark" />
                <div class="square light" />
                <div class="square light" />
                <div class="square light" />
              </div> 
              <div class="right">
                <div class="vyt sns mx-3" @click="gotoNewTab(shizu.yt)">
                  <vYtH class="snsBtn" />
                  <vYt class="snsBtn hover" />                  
                </div>
                <div class="vtw sns mx-3" @click="gotoNewTab(shizu.tw)">
                  <vTwH class="snsBtn" />
                  <vTw class="snsBtn hover" />   
                </div>
                <div class="vfb sns mx-3" @click="gotoNewTab(shizu.fb)">
                  <vFbH class="snsBtn" />
                  <vFb class="snsBtn hover" />  
                </div>
                <div class="vfb sns mx-3" @click="gotoNewTab(shizu.ig)">
                  <vIgH class="snsBtn" />
                  <vIg class="snsBtn hover" />  
                </div>
              </div>    
            </b-col>             
          </b-row>
        </div>
        <div class="bottomBox" />
      </div> 
    </div> 
    <!-- end Shizu -->
    <!-- aboutUs -->
    <div class="cell aboutUs">
      <div class="aboutUsBG" />
      <div>
        <div class="topBox" >
          <div class="left">
            <div class="titleSet">
              <div class="smTitle">Mic On Project /</div>
              <div class="title">{{ i("About Us") }}</div>
            </div>
          </div>
          <div class="right">            
          </div>
        </div>

        <div class="middleBox">
          <div class="left customScrollBar" v-dragscroll>   
            <div class="px-4 fade">
              <div class="pb-3 pb-lg-4 fade" v-for="(p,index) in $tm('About Us Text')" :key="p.title" :class="index>0?'delay1':''">
                <div class="aboutTitle" v-html="ii(p.title)" />
                <div class="aboutText pt-2" v-html="ii(p.text)" />
              </div> 
            </div>
          </div>

          <div class="right customScrollBar" v-dragscroll>
            <img @error="e=>onImgError(e)" :data-src="MOPFullLOGO" class="MOPlogo fade" />
            <client-only>
              <b-row class="MOPsns mt-2 mt-lg-3 fade">

                <b-col :cols="3" class="d-flex justify-content-center align-items-center mt-4" @click="gotoNewTab('https://discord.com/invite/4AFXAWBjWw')">
                  <vDc class="dcBtn sbtn"></vDc>
                </b-col>
                <b-col cols="9"  class="d-flex justify-content-center align-items-center mt-4" @click="gotoNewTab('https://discord.com/invite/4AFXAWBjWw')">
                  <div class="sText" >{{ $t("mop.dc") }}</div>
                </b-col>

                <b-col :cols="3" class="d-flex justify-content-center align-items-center mt-4" @click="gotoNewTab('https://twitter.com/miconproject')">
                  <vTwH class="twBtn sbtn" />
                </b-col>
                <b-col cols="9"  class="d-flex justify-content-center align-items-center mt-4" @click="gotoNewTab('https://twitter.com/miconproject')">
                  <div class="sText" >@miconproject</div>
                </b-col>  

                <b-col :cols="3" class="d-flex justify-content-center align-items-center mt-4" @click="gotoNewTab('https://www.youtube.com/channel/UCz1HT4pcoYorlvOZ22Q1yew')">
                  <vYtH class="ytBtn sbtn" />
                </b-col>
                <b-col cols="9"  class="d-flex justify-content-center align-items-center mt-4" @click="gotoNewTab('https://www.youtube.com/channel/UCz1HT4pcoYorlvOZ22Q1yew')">
                  <div class="sText" >{{ $t("mop.yt") }}</div>
                </b-col>              

                <b-col :cols="3" class="d-flex justify-content-center align-items-center mt-4" @click="gotoNewTab('https://www.facebook.com/Miconproject')">
                  <vFbH class="fbBtn sbtn" />
                </b-col>
                <b-col cols="9"  class="d-flex justify-content-center align-items-center mt-4" @click="gotoNewTab('https://www.facebook.com/Miconproject')">
                  <div class="sText" >{{ $t("mop.fb") }}</div>
                </b-col>

                <b-col :cols="3" class="d-flex justify-content-center align-items-center mt-4" @click="mailto('mailto:info@miconproject.com')">
                  <div class="mailCircle">
                    <font-awesome-icon :icon="['fass', 'envelope']" />
                  </div>
                </b-col>
                <b-col cols="9"  class="d-flex justify-content-center align-items-center mt-4"  @click="mailto('mailto:info@miconproject.com')">
                  <div class="sText" >info@miconproject.com</div>
                </b-col>

              </b-row>
            </client-only>
          </div>
        </div>

        <div class="bottomBox">
          <div class="left">
          </div>
          <div class="right">
          </div>
        </div>
      </div>

      <VerticalGallery class="fade" />
      
    </div>

    <Footer class="footer cell"></Footer>
  </div>
  
  

  

</template>

<script setup lang="ts">  
  //SVG
  import Circle from '@/assets/svg/BG-Float-Ellipse.svg?component'
  import Star from '@/assets/svg/BG-Float-Star.svg?component'
  import Line1 from '@/assets/svg/BG-Line-x1.svg?component'
  import Line2 from '@/assets/svg/BG-Line-x2.svg?component'
  import Line3 from '@/assets/svg/BG-Line-x3.svg?component'  

  import Arrow from '@/assets/svg/Arrow.svg?component'  

  import AisuLG from '@/assets/chara/aisu/img_lg.webp'
  import AisuMD from '@/assets/chara/aisu/img_md.webp'
  import AisuSM from '@/assets/chara/aisu/img_sm.webp'
  import AisuQ from '@/assets/chara/aisu/q.webp'
  import AisuSign from '@/assets/chara/aisu/sign_new.webp'
  import AisuLOGO from '@/assets/chara/aisu/LOGO_NEW-AISU.webp'
  import AisuS1 from '@/assets/chara/aisu/s1.webp'
  import AisuS2 from '@/assets/chara/aisu/s2.webp'
  import AisuS3 from '@/assets/chara/aisu/s3.webp'

  import ShizuLG from '@/assets/chara/shizu/img_lg.webp'
  import ShizuMD from '@/assets/chara/shizu/img_md.webp'
  import ShizuSM from '@/assets/chara/shizu/img_sm.webp'
  import ShizuQ from '@/assets/chara/shizu/q.webp'
  import ShizuSign from '@/assets/chara/shizu/sign.webp'
  import ShizuLOGO from '@/assets/chara/shizu/logo.webp'
  import ShizuS1 from '@/assets/chara/shizu/s1.webp'
  

  import MOPMicLOGO from '@/assets/logo/logo_square_mic.webp'
  import MOPFullLOGO from '@/assets/logo/logo_original.webp'

  import vFb from '@/assets/sns/v-fb.svg?component'
  import vFbH from '@/assets/sns/v-fb-hover.svg?component'

  import vYt from '@/assets/sns/v-yt.svg?component'
  import vYtH from '@/assets/sns/v-yt-hover.svg?component'

  import vTw from '@/assets/sns/v-tw.svg?component'
  import vTwH from '@/assets/sns/v-tw-hover.svg?component'

  import vIg from '@/assets/sns/v-ig.svg?component'
  import vIgH from '@/assets/sns/v-ig-hover.svg?component'

  import vDc from '@/assets/sns/v-dc.svg?component'
  
</script>

<script lang="ts">
import g from '@/mixins/g.ts'  
import 'vue3-carousel/dist/carousel.css'

import { defineComponent } from 'vue'
import MIndex from '~/components/mobile/mobile-index.vue'
export default defineComponent({
  components: { MIndex },  
  mixins:[g],
  data(){
    return{   
      
      options:{
        autoplay:200,
        transition:1000,
        itemsToShow: 1,
        wrapAround:true,        
        touchDrag:false,
        mouseDrag:false
      },        
      aisu:{
        key:'aisu',
        class:"Aisu",
        lg:AisuLG,
        md:AisuMD,
        sm:AisuSM,
        ss:[AisuS1,AisuS2,AisuS3],
        logo:AisuLOGO,
        sign:AisuSign,
        q:AisuQ,
        yt:"https://miconproject.com/yt/KobayashiAisu",
        tw:"https://twitter.com/kobayashi_aisu",
        fb:"https://www.facebook.com/KobayashiAisu",
        ig:"https://www.instagram.com/kobayashi_aisu/"
      },
      shizu:{
        key:'shizu',
        class:"Shizu",
        lg:ShizuLG,
        md:ShizuMD,
        sm:ShizuSM,
        ss:[ShizuS1],
        logo:ShizuLOGO,
        sign:ShizuSign,
        q:ShizuQ,
        yt:'https://miconproject.com/yt/AkatsukiShizu',
        tw:'https://twitter.com/Akatsuki_shizuu',
        fb:'https://www.facebook.com/akatsukishizu0707',
        ig:"https://www.instagram.com/shizu_hkvtuber/"
      },
    }
  },
  mounted(): void {
    if (process.client) {
      (document.querySelector('.cellContainer') as Element).addEventListener('scroll', this.scrollAnimation);
      (document.querySelector('.cellContainer') as Element).addEventListener('scroll', this.imgLazyLoad);
      this.imgLazyLoad();
      this.scrollAnimation();
      document.addEventListener('contextmenu', event => event.preventDefault());   
      document.addEventListener("keydown", e => {
        if (e.key === 's' && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
          e.preventDefault();          
        }
      }, false);
    }
  },
  beforeDestroy(): void {
    (document.querySelector('.cellContainer') as Element).removeEventListener('scroll', this.scrollAnimation);
    (document.querySelector('.cellContainer') as Element).removeEventListener('scroll', this.imgLazyLoad);
  },
  methods:{
    resize(url:string,w:number,h:number) :string{
      if(process.client){
        url="https://"+location.host+url;
        return `http://www.miconproject.com:8080/resize?url=${url}${h>0?'&h='+h:""}${w>0?'&w='+w:""}&format=WebP`
      }
      else return url
    },    
    gotoNewTab(url:string): void{
      if(process.client){
        window.open(url, '_blank')?.focus();
      }
    },
    mailto(url:string):void{
      window.location.href = url;
    },
    onImgError(e : Event): void{
      let img = e.target as HTMLImageElement;
      img.src=img.src;      
    },
    i(text: string): string {
      return this.$t(text).replace(/\n/g, '<br>');
    },
    ii(text: string): string {
      return text.replace(/\n/g, '<br>');
    },
    goto(e: string): void {
      if(process.client) {
        if(e.startsWith(".")){
          var offset=100;
          var target =(document.querySelector(e) as Element).getBoundingClientRect().left;
          (document.querySelector('.cellContainer') as Element).scrollTop+= target - offset;
        }
        else if(e.startsWith("/")){
          location.href=e;
        }
      }
    },
    scrollAnimation(): void {
      if (process.client) {       
        const cellContents = document.querySelectorAll<HTMLElement>('.fade');
        for (let i = 0; i < cellContents.length; i++) {
          const windowHeight = window.innerWidth;
          const elementTop = cellContents[i].getBoundingClientRect().left;
          const elementVisible = 0;
          if (elementTop < windowHeight - elementVisible) {
            cellContents[i].classList.add('active');
          }
        }
      }
    },
    imgLazyLoad(): void {
      if (process.client) {       
        const imgs = document.querySelectorAll<HTMLImageElement>('img');
        for (let i = 0; i < imgs.length; i++) {
          const windowHeight = window.innerWidth;
          const elementTop = imgs[i].getBoundingClientRect().left;
          const elementVisible = 0;
          if (elementTop < windowHeight - elementVisible && imgs[i].getAttribute("data-data-src")) {
            imgs[i].src=imgs[i].getAttribute("data-data-src") as string;
            imgs[i].removeAttribute("data-data-src");
          }
        }
      }
    }
  },
  watch:{
    showMobile(newVal){
      if(process.client && newVal){
        (document.querySelector('.cellContainer') as Element).removeEventListener('scroll', this.scrollAnimation);
        (document.querySelector('.cellContainer') as Element).removeEventListener('scroll', this.imgLazyLoad);
      }
      else if(process.client){
        (document.querySelector('.cellContainer') as Element).addEventListener('scroll', this.scrollAnimation);
        (document.querySelector('.cellContainer') as Element).addEventListener('scroll', this.imgLazyLoad);
        this.imgLazyLoad();
        this.scrollAnimation();
      }
    }
  }
})
</script>
<style scoped>
.customScrollBar{    
  overflow-y:auto;
}
/* width */
.customScrollBar::-webkit-scrollbar {
  width: 24px;
}
/* Handle */
.customScrollBar::-webkit-scrollbar-thumb { 
  border: 10px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  border-radius: 9999px;
  background-color: #AAAAAA; 
}


</style>

<style lang="scss">     
  .cellContainer{  
    width: 100vh;   
    height: calc(100vw - 50px); 
    scroll-behavior: smooth;
    overflow: hidden auto;
    transform-origin: right top;
    transform: rotate(-90deg) translateY(calc( -100vh + 50px ));
    background: #888;
    background:url('~/assets/svg/BG-Dots.svg');
    background-repeat: repeat;     
    background-attachment: local;   
    position: relative;  
    .cell{ 
      height: 100vh;        
      position: absolute;
      transform-origin: left top;
      transform: rotate(90deg) translateY(calc(-100vh));
    }
    .cell::before{
      position: absolute;
    }

    .introl::before{
      content: "";
      position: absolute;
      width: 200%;
      height: 200%;
      top: -50%;
      left: -50%;
      z-index: -1;
      background: url('~/assets/logo/logo_sm_bg.png');
      opacity:0.3;
      background-size:6% auto;
      background-repeat: repeat;
      background-color: #FFF;
      transform: rotate(-20deg);    
    }
    $introlWidth: calc( 100vh / 9 * 18 ); 
    
    $offset:10vh;
    .introl{
      height:100vh;   
      margin-bottom: calc($introlWidth - 100vh + $offset );  
      aspect-ratio: 18 / 9;
      overflow: hidden;
      .introlBG{   
        opacity: 0;
        animation: fadein 1s normal forwards ease-in-out;
        position: relative;
        > *{
          position: absolute;
        }
        .lines{    
          left:50%;
          transform: translateX(calc(-50% - 50px));
          width: max-content;
          display: flex;
          flex-direction: row;        
        }
        .line{
          height:100vh;
          filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
        }   
        .line2{      
          opacity: 0;
          animation: fadein 1s normal forwards ease-in-out;
          animation-delay: 0.4s;
        }
        .line1{      
          opacity: 0;
          animation: fadein 1s normal forwards ease-in-out;
          animation-delay: 0.8s;
        }
        .line3{      
          opacity: 0;
          animation: fadein 1s normal forwards ease-in-out;
          animation-delay: 1.2s;
        }
        .lineMargin{
          margin:0 3vh;
        }   
        .starS{
          left:5%;
          top:5vh;
          height:25vh;
          animation: rotation 15s infinite ease-in-out;
          animation-delay: random(500) + ms;
        }
        .starM{
          left:1%;
          top:60vh;
          height:50vh;
          animation: rotation 17s infinite reverse;
          animation-delay: random(500) + ms;
        }
        .starL{
          right:3%;
          height:50vh;
          animation: rotation 20s infinite ease-in-out;
          animation-delay: random(500) + ms;
        }
        .circleS{
          top:40vh;
          left:20vh;
          height:10vh;
          animation: float 7s infinite ease-in-out;
          animation-delay: random(500) + ms;
        }
        .circleM{
          top:10vh;
          left:100vh;
          height:20vh;
          animation: float 8s infinite ease-in-out;
          animation-delay: random(500) + ms;
        }
        .scrollText{
          top:90vh;
          left:170vh;
          height:3vh;
          font-weight: 800;
          font-size:18px;
          .arrow{
            height:3vh;  
            stroke:#000; 
            stroke-width:2px;  
          }
        }
        .fx{
          filter: drop-shadow(3px -3px 2px rgb(0 0 0 / 0.4))  blur(3px);
        }
        .pink{
          fill:#F7D4D9;
        }
        .blue{
          fill:#C1E7FF;
        }
        .yellow{
          fill:#FFFBB9;
        }
        .lpink{
          fill:#FBE9EC;
        }
        .lblue{
          fill:#E0F3FF;
        }
        .lyellow{
          fill:#FFFDDC;
        }        
      }
      .introlContainer{
        position: relative;
        > *{
          position: absolute;
        }
        .stands{
          height:100vh;
          width: $introlWidth;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          transform: translateX( -50px );        
        }
        .stand{
          height:130vh;
          filter: drop-shadow(10px 5px 5px rgb(0 0 0 / 0.3));
        }     
        .aisu{
          opacity: 0;
          animation: charafadein 1s normal forwards ease-in-out;
          animation-delay: 1.4s;
        }  
        .shizu{
          opacity: 0;
          margin-left:-45vh;
          animation: charafadein 1s normal forwards ease-in-out;
          animation-delay: 1.6s;
        }        
        .slogan{
          letter-spacing: .5rem; 
          line-height: 1.7;
          @include font-size($slogan-font-sizes,0px);
          font-weight: 700;
          left:8vh;
          top:29vh;
          opacity: 0;
          animation: charafadein 1s normal forwards ease-in-out;
          animation-delay: 2.8s;
        }
        .subSlogan{
          letter-spacing: .1rem; 
          line-height: 2.0;
          @include font-size($subSlogan-font-sizes,0px);
          font-weight: 600;
          left:8vh;
          top:66vh;
          opacity: 0;
          animation: charafadein 1s normal forwards ease-in-out;
          animation-delay: 3s;
        }
        .indexBtns{
          top:88vh;
          left:7vh;
          display: flex;
          .scheduleBtn{
            opacity: 0;
            animation: charafadein 1s normal forwards ease-in-out;
            animation-delay: 3.2s;
            margin-left:2vh ;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            
            border:$SHIZU-Dark-100 2px solid;
            color:$SHIZU-Dark-100 ;
            border-radius: 30px;
            background: #FFF;
            filter: drop-shadow(5px 5px 5px rgb(0 0 0 / 0.3));
            font-size: 15px;
            font-weight: 600;
            transition: transform 0.2s , filter 0.2s ;            
            cursor: pointer;
            .arrow{          
              height:26px;
              width:30px;
              margin-left:10px;
              stroke:$SHIZU-Dark-100 ; 
              stroke-width:3px;         
            } 
            &:hover{
              transform: translate(3px,3px);
              filter: drop-shadow(0px 0px 2px rgb(0 0 0 / 0.3));
            }
          }
          .aboutBtn{
            opacity: 0;
            animation: charafadein 1s normal forwards ease-in-out;
            animation-delay: 3.2s;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            
            border:#5A79BA 2px solid;
            color:#5A79BA;
            border-radius: 30px;
            background: #FFF;
            filter: drop-shadow(5px 5px 5px rgb(0 0 0 / 0.3));
            font-size: 15px;
            font-weight: 600;
            transition: transform 0.2s , filter 0.2s ;            
            cursor: pointer;
            .arrow{          
              height:26px;
              width:30px;
              margin-left:10px;
              stroke:#5A79BA; 
              stroke-width:3px;         
            } 
            &:hover{
              transform: translate(3px,3px);
              filter: drop-shadow(0px 0px 2px rgb(0 0 0 / 0.3));
            }       
          }          
        }
        .newVideo{
          height:28vh;         
          background:#FFF;
          border:$MOP-LogoC-100 solid 3px;
          border-radius: 15px;
          left:150vh;
          top:20vh;
          box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          height:28vh; 
          aspect-ratio:  4 / 3 ; 
          cursor: pointer;
          &:hover{
            transform: scale(1.1);
          }
          opacity: 0;
          animation: charafadein 1s normal forwards ease-in-out;
          animation-delay: 3.4s;          
        }
        
        .newEvent{
          height:28vh;         
          background:#FFF; 
          border:$MOP-Logo2-100 solid 3px;
          border-radius: 15px;
          left:150vh;
          top:53vh;
          box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          height:28vh; 
          aspect-ratio:  4 / 3 ; 
          &:hover{
            transform: scale(1.1);
          }
          opacity: 0;
          animation: charafadein 1s normal forwards ease-in-out;
          animation-delay: 3.6s;
          .ytEmbed{
            height:28vh; 
            aspect-ratio:  4 / 3 ; 
          }
        }
      }
      
    }      
   
    .aboutMOPBG::before{
      content: "";
      position: absolute;
      height:100vh; 
      aspect-ratio:  8 / 5 ;    
      background: #5A79BA7F;  
      transform: skewX(-15deg); 
      border-left:#5A79BA  solid 5px;
      box-shadow: 13px 0 7px -2px rgba(0, 0, 0, 0.2) inset;       
    }
    $offset:8vh;
    $aboutMOPWidth: calc(100vh / 5 * 8);
    .aboutMOP{   
      top:$introlWidth+$offset;  
      .topBox{
        margin-left: 20vh;
        width: 80vh;
        height:30vh;      
        background: #5A79BABF;
        border-radius: 20px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
        transform: translateY(-2vh);
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        padding-top:2vh ;
        *{
          color:#FFF;
        }  
        .titleSet{
          padding: 5vh;
        }      
      }
      .middleBox{
        margin-left: 40vh;
        margin-top: 5vh;
        width: 80vh;
        height:50vh;      
        background: #EAEEF7;
        border:#5A79BA solid 4px;
        border-radius: 20px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
        transform: translateY(-2vh);    
        padding-top:2vh ;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;

        &::-webkit-scrollbar-thumb {
          background-color: #5A79BA;
        }
        
        .content{
          margin: 0 5vh;
          margin-top: 3vh;
          color:#5A79BA;
          @include font-size($font-sizes,0px);
          line-height: 2.0;
          font-weight: 600;
        }
        .btnLogo{
          margin-top:10%;
          width: 100%;
          padding: 0 5vh;        
          .btn{
            background: #FFFF;
            border:#5A79BA solid 2px;
            @include padding($btn-padding); 
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
            font-weight: 600;
            color:#5A79BA;
            @include font-size($font-sizes,0px);          
            transition: box-shadow 0.2s ,transform 0.2s;    
            &:hover{
              box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3);
              transform: translateX(5px) translateY(5px);
            }    
          }       
          .logo{
            height:10vh;
            width: auto;
          }
        }
        
      }
      .bottomBox{
        margin-left: 60vh;
        margin-top: 5vh;
        width: 80vh;
        height:20vh;      
        background: #5A79BABF;
        border-radius: 20px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
        transform: translateY(-2vh);
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        padding-top:2vh ;
      }    
    }
    .smTitle{    
      @include font-size($subTitle-font-sizes,0px);
      letter-spacing:0.3rem;
      font-weight: 600;
    }
    .title{
      @include font-size($title-font-sizes,0px);
      letter-spacing:0.3rem;
      font-weight: 600;
    }
    $vtuberWidth: 110vh;
    .vtuberPBG::before{
      content: "";
      position: absolute;
      height:100vh; 
      aspect-ratio:  11 / 10 ;    
      background: $MOP-Logo2-50;  
      transform: skewX(-15deg); 
      border-left:$MOP-Logo2-100 solid 5px;
      box-shadow: 13px 0 7px -2px rgba(0, 0, 0, 0.2) inset;       
    }
    
    .Vtuber{  
        top:$introlWidth+$aboutMOPWidth+$offset;   
        .topBox{
          margin-left: 20vh;
          width: 50vh;
          height:30vh;      
          background: $MOP-Logo2-75;
          border-radius: 20px;
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
          transform: translateY(-2vh);
          display: flex;
          justify-content: flex-end;
          flex-direction: column;
          padding-top:2vh ;
          *{
            color:#FFF;
          }  
          .titleSet{
            padding: 5vh;
          }      
        }
        .middleBox{
          margin-left: 30vh;
          margin-top: 5vh;
          width: 50vh;
          height:50vh;      
          background: #FFF;
          border:$MOP-Logo2-100 solid 4px;
          border-radius: 20px;
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
          transform: translateY(-2vh);           
          opacity: 75%;
          overflow-y: scroll;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          &::-webkit-scrollbar-thumb {
            background-color: $MOP-Logo2-100;
          }
          .vNav{
            .arrow{
              stroke-width:3px;
              stroke: $MOP-Logo2-100;
              height:30px;
              width:30px;
              margin-left:10px;
            } 
            .aisuNav{  
              margin: 1vh 0vh;     
              transition: transform 0.2s;   
              cursor: pointer; 
              display: flex;
              flex-direction: column;
              justify-content:center;
              align-items: center;
              .logo{
                width:80%;
              }
              .text{
                padding: 15px 3vh;
                font-size: 20px;
                font-weight: 800;
                color:$MOP-Logo2-100;
              }
              &:hover{
                transform:scale(1.1);
              }
            }
            .shizuNav{ 
              margin: 1vh 0;   
              transition: transform 0.2s; 
              cursor: pointer;  
              display: flex;
              flex-direction: column;
              justify-content:center;
              align-items: center;
              .logo{
                width:80%;
              }
              img{
                transform: scale(0.95);
              }   
              .text{
                padding:10px 3vh;
                font-size: 20px;
                font-weight: 800;
                color:$MOP-Logo2-100;
              }
              &:hover{
                transform:scale(1.1);
              }
            }
          }  
        }
        .bottomBox{
          margin-left: 40vh;
          margin-top: 5vh;
          width: 50vh;
          height:20vh;      
          background: $MOP-Logo2-75;
          border-radius: 20px;
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
          transform: translateY(-2vh);
          display: flex;
          justify-content: flex-end;
          flex-direction: column;
          padding-top:2vh ;
        }
      }

    $AisuWidth:calc(100vh / 9 * 17);
    .AisuBG::before{
      content: "";
      position: absolute;
      height:100vh; 
      aspect-ratio:  17 / 9 ;    
      background: $AISU-Light-50;  
      transform: skewX(-15deg); 
      border-left:$AISU-Light-100 solid 5px;
      box-shadow: 13px 0 7px -2px rgba(0, 0, 0, 0.2) inset;       
    }
    
    .Aisu{  
      top:$introlWidth+$aboutMOPWidth+$vtuberWidth+$offset;   
      display: flex;
      flex-direction: row;
      .gallery{        
        overflow: hidden;
        padding-left: 2vw;
        transform: translateY(2vw) skew(-15deg) translateX(-0.3vw);   
        padding-right: 5vw;
        .stand{       
          height:100vh;     
          width:65vh;               
          transform: skew(15deg);    
        }
      }
      
      .topBox{
        margin-left: -15vh;
        width: 80vh;
        height:30vh;      
        background: $AISU-Light-75;
        border-radius: 20px;
        border:#fff solid 5px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
        transform: translateY(-2vh);
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-direction: row;
        padding-top:2vh ;
        .subTitle{
          color:#000;
        }  
        .title{
          color:$AISU-Dark-100;
          font-weight: 700;
        } 
        .titleSet{
          padding: 5vh;
        }   
        .sign{
          margin: 3vh;
          height: 60%;
          border-radius: 20px;
          background: #fff;
          opacity: 0.95;
          padding: 10px;
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
          img{
            height:100%;
          }
        }   
      }
      .middleBox{
        margin-left: 0vh;
        margin-top: 5vh;
        width: 80vh;
        height:50vh;      
        background: #FFF8;
        border:$AISU-Light-100 solid 4px;
        border-radius: 20px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
        transform: translateY(-2vh);  
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; 
        &::-webkit-scrollbar-thumb {
          background-color: $AISU-Dark-100;
        }     
        *{
          color:$AISU-Dark-100;
        }
        .desc{
          padding: 0 4vh;
        }
        .logo{
          height:10vh;
        }
        .text{
          @include font-size($font-sizes,2px); 
          font-weight: 600;
        }
        .info{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .left{
            font-weight: 700;
            @include font-size($font-sizes,0px);          
            .tag{
              @include font-size($font-sizes,4px);             
              color:#fff;
              border-radius: 30px;
              padding: 3px 10px;
              background: $AISU-Dark-100;
            }
          }
          .right{
            .qimg{
              height:200px;
              margin-top: -1vh;
              margin-right:10px;
            }
          }
        }
        .btns{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          height:40px;
          .left{
            display: flex;
            flex-direction: row;
            .square{
              border-radius: 5px;
              height:20px;
              width:20px;
              margin: 0 10px;
            }
            .dark{
              background: $AISU-Dark-100;
            }
            .light{
              background: $AISU-Light-100;
            }
          }
          .right{
            display: flex;
            flex-direction: row;
            .sns{  
              position: relative;
              height:40px;
              width: 40px;
              margin: 10px 0;
              cursor: pointer;
              .hover{
                opacity: 1;
                transition: opacity 0.2s;
                &:hover{
                  opacity: 0;
                }
              }
              .snsBtn{              
                position: absolute;
                top:0;
                left:0;
                .st0{
                  fill:#FFFFFF;
                }
                .st9{
                  fill:$AISU-Dark-100;
                }
                .st19{
                  fill:#FFFFFF;
                  stroke-miterlimit:10;
                  stroke:$AISU-Dark-100;
                } 
              }
            }
          }
        }
      }

      .bottomBox{
        margin-left: 15vh;
        margin-top: 5vh;
        width: 80vh;
        height:20vh;      
        background: $AISU-Light-75;
        border-radius: 20px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
        transform: translateY(-2vh);
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        padding-top:2vh ;
      }
    }


    .ShizuBG::before{
      content: "";
      position: absolute;
      height:100vh; 
      aspect-ratio:  17 / 9 ;    
      background: $SHIZU-Light-50;  
      transform: skewX(-15deg); 
      border-left:$SHIZU-Light-100 solid 5px;
      box-shadow: 13px 0 7px -2px rgba(0, 0, 0, 0.2) inset;       
    }
    $ShizuWidth:calc(100vh / 9 * 17);
    .Shizu{  
      top:$introlWidth+$aboutMOPWidth+$vtuberWidth+$AisuWidth+$offset;   
      display: flex;
      flex-direction: row;
      .gallery{        
        overflow: hidden;
        padding-left: 2vw;
        transform: translateY(2vw) skew(-15deg) translateX(-0.3vw);   
        padding-right: 5vw;
        .stand{       
          height:100vh;     
          width:65vh;               
          transform: skew(15deg);    
        }
      }
      .topBox{
        margin-left: -15vh;
        width: 80vh;
        height:30vh;      
        background: $SHIZU-Light-75;
        border-radius: 20px;
        border:#fff solid 5px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
        transform: translateY(-2vh);
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-direction: row;
        padding-top:2vh ;
        .subTitle{
          color:#000;
        }  
        .title{
          color:$SHIZU-Dark-100;
          font-weight: 700;
        } 
        .titleSet{
          padding: 5vh;
        }   
        .sign{
          margin: 3vh;
          height: 60%;
          border-radius: 20px;
          background: #fff;
          opacity: 0.95;
          padding: 10px;
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
          img{
            height:100%;
          }
        }   
      }
      .middleBox{
        margin-left: 0vh;
        margin-top: 5vh;
        width: 80vh;
        height:50vh;      
        background: #FFFC;
        border:$SHIZU-Light-100 solid 4px;
        border-radius: 20px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
        transform: translateY(-2vh);  
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &::-webkit-scrollbar-thumb {
          background-color: $SHIZU-Dark-100;
        } 
        *{
          color:$SHIZU-Dark-100;
        }
        .desc{
          padding: 0 4vh;
        }
        .logo{
          height:10vh;
        }
        .text{
          @include font-size($font-sizes,2px); 
          font-weight: 600;
          color:#000;
        }
        .info{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .left{
            font-weight: 700;
            @include font-size($font-sizes,0px); 
            .tag{
              @include font-size($font-sizes,4px); 
              color:#fff;
              border-radius: 30px;
              padding: 3px 10px;
              background: $SHIZU-Dark-100;
            }
          }
          .right{
            .qimg{
              height:200px;
              margin-top: -1vh;
              margin-right:2vh;
            }
          }
        }
        .btns{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          height:40px;
          .left{
            display: flex;
            flex-direction: row;
            .square{
              border-radius: 5px;
              height:20px;
              width:20px;
              margin: 0 10px;
            }
            .dark{
              background: $SHIZU-Dark-100;
            }
            .light{
              background: $SHIZU-Light-100;
            }
          }
          .right{
            display: flex;
            flex-direction: row;
            .sns{  
              position: relative;
              height:40px;
              width: 40px;
              margin: 10px 0;
              cursor: pointer;
              .hover{
                opacity: 1;
                transition: opacity 0.2s;
                &:hover{
                  opacity: 0;
                }
              }
              .snsBtn{              
                position: absolute;
                top:0;
                left:0;
                .st0{
                  fill:#FFFFFF;
                }
                .st9{
                  fill:$SHIZU-Dark-100;
                }
                .st19{
                  fill:#FFFFFF;
                  stroke-miterlimit:10;
                  stroke:$SHIZU-Dark-100;
                } 
              }
            }
          }
        }
      }

      .bottomBox{
        margin-left: 15vh;
        margin-top: 5vh;
        width: 80vh;
        height:20vh;      
        background: $SHIZU-Light-75;
        border-radius: 20px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
        transform: translateY(-2vh);
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        padding-top:2vh ;
      }
    }

    $aboutUsWidth:calc( 100vh / 6 * 15 );
    .aboutUsBG::before{
      content: "";
      position: absolute;
      height:100vh; 
      aspect-ratio:  15 / 6 ;    
      background: $NAO-Light-75;  
      transform: skewX(-15deg); 
      border-left:$NAO-Dark-100  solid 5px;
      box-shadow: 13px 0 7px -2px rgba(0, 0, 0, 0.2) inset;       
    }  
    .aboutUs{   
      top:$introlWidth+$aboutMOPWidth+$vtuberWidth+$AisuWidth+$ShizuWidth+$offset;     
      display: flex;
      flex-direction: row;
      .topBox{
        margin-left: 20vh;      
        display: flex;
        flex-direction: row; 
        .left{
          width: 80vh;
          height:30vh;
          background: $NAO-Dark-75;
          border-radius: 20px;
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
          transform: translateY(-2vh);
          display: flex;
          justify-content: flex-end;
          flex-direction: column;
          padding-top:2vh ;
        }   
        .right{
          margin-left:5vh;
          width: 70vh;
          height:30vh;
          background: #fff;
          border: $NAO-Dark-100 solid 4px;
          border-radius: 20px;
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
          transform: translateY(-2vh);
          display: flex;
          justify-content: flex-end;
          flex-direction: column;
          padding-top:2vh ;
        }    
        
        *{
          color:#FFF;
        }  
        .titleSet{
          padding: 5vh;
        }      
      }
      .middleBox{
        margin-left: 40vh;
        margin-top: 5vh;      
        display: flex;
        flex-direction: row; 
        .left{
          width: 80vh;
          height:50vh;      
          background: #FFFC;
          border:$NAO-Dark-100 solid 4px;
          border-radius: 20px;
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
          transform: translateY(-2vh);    
          padding-top:3vh ;
          display: flex;    
          flex-direction: column; 
          align-items:center;  
          @media only screen and (min-height: 1000px) {
            padding-top:0vh ;                
            align-items:center;            
            justify-content: center;
          }
          &::-webkit-scrollbar-thumb {
            background-color: $NAO-Dark-100;
          } 
          .aboutTitle{
            @include font-size($about-font-sizes,0px);
            letter-spacing: 0;
            color:$NAO-Dark-100;
            font-weight: 700;
          }
          .aboutText{
            @include font-size($about-font-sizes,4px);
            letter-spacing: 0;
            font-weight: 600;
          }        
        }
        .right{
          margin-left:5vh;
          width: 50vh;
          height:50vh;      
          background: #FFFC;
          border:$NAO-Dark-100 solid 4px;
          border-radius: 20px;
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
          transform: translateY(-2vh);    
          padding-top:1vh ;
          overflow-y: scroll;   
          display: flex;    
          flex-direction: column; 
          align-items:center;         
          @media only screen and (min-height: 1000px) {
            padding-top:0vh ;            
            justify-content: center;
          }
          &::-webkit-scrollbar-thumb {
            background-color: $NAO-Dark-100;
          } 
          .MOPlogo{
            width:250px;
            max-width: 100%;
          }
          .MOPsns{
            width:400px;
            max-width: 100%;
            .mailCircle{
              width:50px;
              aspect-ratio: 1 / 1;
              font-size:25px;
              max-width: 80%;
              border-radius: 50%;
              background:$MOP-LogoC-100;
              color:#fff;
              display: flex;
              justify-content: center;
              align-items: center;
              transition: background 0.2s, color 0.2s;
              &:hover{
                width:49px;
                height:49px;
                background:#fff;
                color:$MOP-LogoC-100;
                border:$MOP-LogoC-100 solid 1px
              }
            }
            .sbtn{
              cursor: pointer;
              width:50px;
              max-width: 80%;
              *{
                transition: fill 0.2s , stroke 0.2s;
              }
              &:hover{
                .st0{
                  fill:#FFF;
                }
                .st9{
                  fill:$MOP-LogoC-100;
                }
                .st19{
                  fill:#FFFFFF;
                  stroke-miterlimit:10;
                  stroke:$MOP-LogoC-100;
                }
              }
            }
            .dcBtn{           
              .c{
                fill:$MOP-LogoC-100;
                stroke:$MOP-LogoC-0;  
                stroke-miterlimit:10          
              }
              .p{
                fill:#FFF;              
              }
              &:hover{                
                .c{
                  fill:#FFF;
                  stroke:$MOP-LogoC-100;  
                }
                .p{
                  fill:$MOP-LogoC-100;    
                }
              }
            }
            .st0{
              fill:$MOP-LogoC-100;
            }
            .st9{
              fill:#FFF;
            }
            .st19{
              fill:$MOP-LogoC-100;
              stroke-miterlimit:10;
              stroke:$MOP-LogoC-100;
            }           
            .sText{
              cursor: pointer;
              width:100%;
              letter-spacing: 0;            
              @include font-size($font-sizes,4px);     
              border-radius: 20px;
              background: #C4A3BF; 
              color:#fff;
              font-weight: 700;
              padding: 7px 10px;            
            }
          }
        }
      }   
      .bottomBox{
        margin-left: 60vh;
        margin-top: 5vh;
        display: flex;
        flex-direction: row; 
        .left{
          width: 80vh;
          height:20vh;      
          background:#fff;
          border: $NAO-Dark-100 solid 4px;
          border-radius: 20px;
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
          transform: translateY(-2vh);
          display: flex;
          justify-content: flex-end;
          flex-direction: column;
          padding-top:2vh ;
        }
        .right{
          margin-left:5vh;
          width: 30vh;
          height:20vh;      
          background: $NAO-Dark-100;
          border-radius: 20px;
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
          transform: translateY(-2vh);
          display: flex;
          justify-content: flex-end;
          flex-direction: column;
          padding-top:2vh ;
        }
      }    
    }
    .footer{
      top:$introlWidth+$aboutMOPWidth+$vtuberWidth+$AisuWidth+$ShizuWidth+$aboutUsWidth+$offset
    }
    
    .cell:last-child{
      margin:0
    }
    .slider{
      position: sticky;
      right:0;
      background: #000000ee;
    }  
    .en *{
      letter-spacing: 0;
    }  
  }
  .cellContainer::before{
    position: relative; 
  }  
</style>
