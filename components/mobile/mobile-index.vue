<template>  
  <div class="mobileContent">
  
    <!-- introl -->
    <div class="introl">
      <div class="BG">  
        <Star class="starS lblue fx" />
        <Star class="starM lpink fx" />
        <Star class="starL lyellow fx" />

        <Circle class="circleS lyellow fx" />
        <Circle class="circleM lpink fx" />
        <Circle class="circleL lblue fx" />

        <div class="lines">
          <Line2 class="line line1 pink" />
          <div class="lineMargin" />
          <Line1 class="line line2 blue" />
          <div class="lineMargin" />
          <Line3 class="line line3 yellow" />          
        </div>
        
      </div>

      <div class="stands">          
        <img @error="e=>onImgError(e)" :src="aisu.in" class="stand aisu" />
        <img @error="e=>onImgError(e)" :src="shizu.in" class="stand shizu" />          
      </div>
      <div class="slogan" :class="$i18n.locale=='en'?'en':''" v-html="($i18n.locale=='en' ? i('subSlogan') : i('Slogan'))" />        
    </div>

    <!-- aboutMOP-->
    <div class="aboutMOP">
      <div class="header">
        <div class="smTitle" >Mic On Project /</div>
        <div class="title" >{{ i('What is Mic On Project') }}</div>
      </div>
      <div class="box"> 
        <div class="content fade" :class="$i18n.locale=='en'?'en':''" v-html="i('aboutMOP')"> </div>
        <b-row class="btnLogo fade" no-gutters align-h="between" align-v="center">
          <b-col cols="auto" class="fade delay1">
            <div class="btn mt-3" @click="scrollTo('.aboutUs')" >{{ i('moreBtn') }}</div>
          </b-col>
          <b-col cols="auto mt-3" class="fade delay2">
            <img @error="e=>onImgError(e)" :data-src="MOPMicLOGO" class="logo" />
          </b-col> 
        </b-row>
      </div>
    </div>

    <!-- vtuber -->
    <div class="vtuber">

      <div class="header">
        <div class="smTitle">Mic On Project /</div>
        <div class="title">{{ i('Vtuber') }}</div>
      </div>

      <div class="box"> 
        <img :src="aisu.logo" class="vNav fade" @click="scrollTo('.Aisu')" />
        <img :src="shizu.logo" class="vNav fade"  @click="scrollTo('.Shizu')"  />
      </div>
    </div>

    <!-- v introduce -->
    <div v-for="v in [aisu,shizu]" :key="v.class" :class="v.class">
      <div class="header">
        <div class="smTitle">Mic On Project 00 /</div>
        <div class="title">{{ i(v.key+'.name') }}</div>
      </div>
      <div class="box" :class="$i18n.locale=='en'?'en':''"> 
        <b-row class="w-100">
          <b-col cols="12" class="fade">
            <VtuberGallery :images="v.lg" :v="v.class" class="stand" />
            <!--img v-else :src="v.lg[0]" class="stand fill"  /-->
          </b-col>
          <b-col cols="12">
            
            <div class="desc">
              <div class="logoContainer">
                <img :src="v.logo" class="logo fade"  />
              </div>
              <b-row class="snsBts py-3 fade" noGutters align-h="center">  
                <b-col cols="3" class="btn">              
                  <vYtH class="ytBtn sbtn" @click="gotoNewTab(v.yt)" />
                </b-col>
                <b-col cols="3" class="btn"> 
                  <vTwH class="twBtn sbtn" @click="gotoNewTab(v.tw)" />
                </b-col>
                <b-col cols="3" class="btn"> 
                  <vFbH class="fbBtn sbtn" @click="gotoNewTab(v.fb)" />
                </b-col>    
                <b-col cols="3" class="btn"> 
                  <vIgH class="igBtn sbtn" @click="gotoNewTab(v.ig)" />
                </b-col>            
              </b-row>
              <div class="text mb-4 fade" v-html="i(v.key+'.text')" /> 
              <a style="color:black;font-size:10px;letter-spacing:0.1em;font-weight: 800;text-decoration: none;" class="fade">Fans name:</a><br>
              <div class="fanName fade">{{ i(v.key+'.fanName') }}</div>
              <div class="tags mt-3 fade">
                <div class="tag my-2" v-for="tag in $tm(v.key+'.tag')" :key="tag">
                  #{{ $rt(tag) }}
                </div>
              </div>
              <div class="squares fade">
                <div class="square dark" />
                <div class="square light" />
                <div class="square light" />
                <div class="square light" />
              </div> 
            </div>
          </b-col>
        </b-row>
      </div>
    </div>

    <!-- aboutUs-->
    <div class="aboutUs">
      <div class="header">
        <div class="smTitle" >Mic On Project /</div>
        <div class="title" >{{ i('About Us') }}</div>
      </div>
      <div class="box"> 
        <div class="pb-3 pb-lg-4 content fade" v-for="(p,index) in $tm('About Us Text')" :key="p.title" :class="index>0?'delay1':''">
          <div class="aboutTitle" v-html="ii(p.title)" />
          <div class="aboutText pt-2" v-html="ii(p.text)" />
        </div> 
      </div>
      <HorizontalGallery class="hg fade"></HorizontalGallery>

      <div class="snsBtnsContainer">
        <img :src="MOPFullLOGO" class="logo" />
        <client-only>
          <b-row class="MOPsns mt-2 mt-lg-3 fade">

            <b-col :cols="3" class="d-flex justify-content-center align-items-center mt-4" @click="gotoNewTab('https://discord.com/invite/4AFXAWBjWw')">
              <vDc class="dcBtn sbtn"></vDc>
            </b-col>
            <b-col cols="9" class="d-flex justify-content-center align-items-center mt-4" @click="gotoNewTab('https://discord.com/invite/4AFXAWBjWw')">
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
            <b-col cols="9" class="d-flex justify-content-center align-items-center mt-4" @click="gotoNewTab('https://www.facebook.com/Miconproject')">
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
    
    <mobile-footer />

   

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
import { defineComponent } from 'vue'
import g from '@/mixins/g.ts'  
export default defineComponent({  
mixins:[g],
data(){
  return{
    aisu:{
        key:'aisu',
        class:"Aisu",
        in:AisuLG,
        lg:[AisuS1,AisuS2,AisuS3],
        md:AisuMD,
        sm:AisuSM,
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
        in:ShizuLG,
        lg:[ShizuS1],
        md:ShizuMD,
        sm:ShizuSM,
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
      window.addEventListener('scroll', this.scrollAnimation);
      window.addEventListener('scroll', this.imgLazyLoad);
      window.addEventListener("load", this.enClass);
      document.addEventListener('contextmenu', event => event.preventDefault());   
      document.addEventListener("keydown", e => {
        if (e.key === 's' && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
          e.preventDefault();          
        }
      }, false);
      this.imgLazyLoad();
      this.scrollAnimation();
      this.enClass
    }
  },
beforeDestroy(): void {
  window.removeEventListener('scroll', this.scrollAnimation);
  window.removeEventListener('scroll', this.imgLazyLoad);
  window.removeEventListener("load", this.enClass);
},
methods:{
  mailto(url:string):void{
    window.location.href = url;
  },
  i(text: string): string {
    return this.$t(text).replace(/\n/g, '<br>');
  },
  ii(text: string): string {
    return text.replace(/\n/g, '<br>');
  },
  onImgError(e : Event): void{
    let img = e.target as HTMLImageElement;
    img.src=img.src;      
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
  },
  scrollAnimation(): void {    
       
    var cellContents = document.querySelectorAll(".fade");    
    for (var i = 0; i < cellContents.length; i++) {
      var windowHeight = window.innerHeight;       
      var elementTop = cellContents[i].getBoundingClientRect().top;
      var elementVisible = 60;
      if (elementTop < windowHeight - elementVisible) {
        cellContents[i].classList.add("active");    
      }
    }
    if(window.pageXOffset>0.1){
      window.pageXOffset=0;
    }
    
  },
  enClass():void{
    if (process.client) {
      if(this.$i18n.locale=='en'){
        var divs=document.querySelectorAll('div')
        for (let i = 0; i < divs.length; i++) {
          divs[i].classList.add('en')
        }
      }      
    }
  },
  goto(e: string): void {
    if(process.client) {
      var offset=100;
      var target =(document.querySelector(e) as Element).getBoundingClientRect().left;
      window.scrollTo({ top: target-offset, behavior: 'smooth' });
    }
  },
  gotoNewTab(url:string): void{
    if(process.client){
      window.open(url, '_blank')?.focus();
    }
  },
  scrollTo(e:string){
    if(process.client) {    
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
},
watch:{   
  showMobile(newVal){
    nextTick(()=>{
      if(process.client && newVal){
        window.addEventListener('scroll', this.scrollAnimation);
        window.addEventListener('scroll', this.imgLazyLoad);
        window.addEventListener("load", this.enClass);
        this.imgLazyLoad();
        this.scrollAnimation();
        this.enClass
      }
      else if(process.client){
        window.removeEventListener('scroll', this.scrollAnimation);
        window.removeEventListener('scroll', this.imgLazyLoad);
        window.removeEventListener("load", this.enClass);
      }
    });    
  }
},

})
</script>


<style lang="scss">  
  .mobileContent{
    *{
      line-height: 1em;
    }
    .header{
      width:90%;
      max-width:700px;     
      border-radius: 0 0 15px 0 ;
      padding-left: 5%;
      padding-top: 5%;
      padding-bottom: 5%;
      *{
        color:#fff;          
      }        
    }
    .smTitle{    
      @include mobile-font-size($subTitle-font-sizes,0px);
      letter-spacing:0.3rem;
      line-height: 2rem;
      font-weight: 600;
      @media (orientation: landscape) {
        font-size:16px;        
      }
    }
    .title{
      @include mobile-font-size($title-font-sizes,0px);
      letter-spacing:0.3rem;
      font-weight: 700;
      @media (orientation: landscape) {
        font-size:32px;        
      }
    }
    min-height:100vh;
    width: 100vw; 
    overflow-x:hidden;
    background: #888;
    background:url('~/assets/svg/BG-Dots.svg');
    background-size:3000px ;
    background-repeat: repeat;     
    background-attachment: local;     
    .introl{
      height:max-content;
      position: relative;
      overflow:hidden;
      .BG{     
        position: absolute;
        top:-60px;
        left:0;
        width: 100vw;
        height:100%;   
        opacity: 0;     
        animation: fadein 1s normal forwards ease-in-out;
        &>*{
          position: absolute;
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
        .lines{    
          left:50%;       
          transform: translateX(calc(-50%));         
          height:100%;
          min-height: 100vh;
          width: max-content;
          display: flex;
          flex-direction: row;        
        }
        .line{
          height:120%;
          min-height: 100vh;
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
          margin:0 -15vw;         
        }  
        .starS{
          top:120vw;
          left:30vw;
          width:40vw;
          animation: rotation 15s infinite ease-in-out;
          animation-delay: random(500) + ms;
        }
        .starM{
          top:60vw;
          left:-30vw;
          width:60vw;
          animation: rotation 17s infinite ease-in-out;
          animation-delay: random(500) + ms;
        }
        .starL{
          top:150vw;
          right:-30vw;
          width:80vw;
          animation: rotation 20s infinite ease-in-out;
          animation-delay: random(500) + ms;
        }
        .circleS{
          top:85vw;
          left:55vw;
          width:20vw;
          animation: float 7s infinite ease-in-out;
          animation-delay: random(2000) + ms;
        }
        .circleM{
          top:20vw;
          left:65vw;
          width:25vw;
          animation: float 8s infinite ease-in-out;
          animation-delay: random(2000) + ms;
        }
        .circleL{
          top:25vw;
          left:5vw;
          width:35vw;
          animation: float 9s infinite ease-in-out;
          animation-delay: random(2000) + ms;
        }          
      } 
      .stands{           
          margin-top:60px;     
          margin-bottom:100px;      
          width: 100vw;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;               
        }
      .stand{
        width: 120vw;
        filter: drop-shadow(10px 5px 5px rgb(0 0 0 / 0.3));
      }     
      .aisu{
        opacity: 0;
        animation: charafadein 1s normal forwards ease-in-out;
        animation-delay: 1.4s;
        margin-right:-40vw;
      }  
      .shizu{
        opacity: 0;        
        animation: charafadein 1s normal forwards ease-in-out;
        animation-delay: 1.6s;
        margin-left:-40vw;
      }   
      .slogan{
        position: absolute;
        bottom:15%;
        left:10%;
        font-weight:700;
        line-height: 1.5em;
        filter: drop-shadow(0px 0px 5px rgb(255 255 255 / 1)) ;
        @include mobile-font-size($mobile-slogan-font-sizes,0px);
        opacity: 0;
        animation: charafadein 1s normal forwards ease-in-out;
        animation-delay: 1.8s;
        @media (orientation: landscape) {
          font-size:50px;
          line-height: 80px;
        }

      }     
    }
    .aboutMOP{     
      background:$MOP-LogoC-50;
      border-top: $MOP-LogoC-100 solid 30px;
      border-bottom: $MOP-LogoC-100 solid 5px;
      width:100vw;      
      .header{        
        background:$MOP-LogoC-100 ;       
      }
      .box{
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
        background: #fff;
        border:$MOP-LogoC-100 solid 5px;
        border-radius: 15px;
        margin:10%;
        display: flex;
        align-items: center ;
        justify-content: flex-start;
        flex-direction:column ;
        .content{
          margin-top:10%;        
          width:80%;
          color:#5A79BA;
          @include mobile-font-size($m-font-sizes,0px);
          line-height: 2.0;
          font-weight: 600;
        }
        .btnLogo{
          margin-top:10%;
          margin-bottom:5%;
          width:80%;                
          .btn{
            background: #FFFF;
            border:#5A79BA solid 2px;
            @include padding($btn-padding); 
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
            font-weight: 600;
            color:#5A79BA;
            @include mobile-font-size($m-font-sizes,0px);        
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
    }
    .vtuber{
      background:$MOP-Logo2-50;
      border-top: $MOP-Logo2-100 solid 30px;
      border-bottom: $MOP-Logo2-100 solid 5px;
      width:100vw;      
      .header{        
        background:$MOP-Logo2-100 ;       
      }
      .box{
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
        background: #fff;
        border:$MOP-Logo2-100 solid 5px;
        border-radius: 15px;
        margin:10%;
        display: flex;
        align-items: center ;
        justify-content: flex-start;
        flex-direction:column ;        
        padding: 10% 0;
        .vNav{
          cursor: pointer;
          width:80%;
          margin:5%;
        }
      }
    }
    .Aisu{
      background:$AISU-Light-50;
      border-top: $AISU-Light-100 solid 30px;
      border-bottom: $AISU-Light-100 solid 5px;
      width:100vw;     
      line-height:1.5em; 
      .header{        
        background: $AISU-Light-100 ;     
        *{
          color:  $AISU-Dark-100;
        }
      }
      .box{
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
        background: #fff;
        border:$AISU-Light-100 solid 5px;
        border-radius: 15px;
        margin:10%;
        cursor: pointer;
        position:relative;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1.5em;
        font-weight: 600; 
        *{
          line-height: 1.5em;
          font-weight: 600; 
        }
        .stand{   
          margin-top:5%;     
          width:100%;  
        }               
        
        .desc{  
          .logoContainer{
            display: flex;
            align-items: center;
            justify-content: center;
            width:100%;
            .logo{
              width:95%;              
            }
          }      
          
          margin:0 5vw;
          .btn{
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: visible;
          }
          .sbtn{
            cursor: pointer;
            width:100%;
            max-width:8vw;
            min-width: 10%;              
            *{
              transition: fill 0.2s , stroke 0.2s;
            }
            .st0{
              fill:$MOP-LogoC-100;
            }
            .st9{
              fill:#FFF;
            }
            .st19{
              fill:$AISU-Dark-100;
              stroke-miterlimit:10;
              stroke:$AISU-Dark-100;
            }           
            &:hover{
              .st0{
                fill:#FFF;
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
          .text{
            @include mobile-font-size($m-font-sizes,0px);                              
          }
          .fanName{            
            color: $AISU-Dark-100;
          }
          .tag{
            @include font-size($m-tag-font-sizes,0px); 
            color:#fff;
            border-radius: 30px;
            padding: 3px 10px;
            background: $AISU-Dark-100;
          }
          .squares{
            margin: 5% 0;
            display: flex;
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
        }
      }
    }
    .Shizu{
      background:$SHIZU-Light-50;
      border-top: $SHIZU-Light-100 solid 30px;
      border-bottom: $SHIZU-Light-100 solid 5px;
      width:100vw;     
      line-height:1.5em; 
      .header{        
        background: $SHIZU-Light-100 ;     
        *{
          color:  $SHIZU-Dark-100;
        }
      }
      .box{
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
        background: #fff;
        border:$SHIZU-Light-100 solid 5px;
        border-radius: 15px;
        margin:10%;
        cursor: pointer;
        position:relative;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1.5em;
        font-weight: 600; 
        *{
          line-height: 1.5em;
          font-weight: 600; 
        }
        .stand{         
          width:100%; 
          margin-top:5%;   
        }        
        
        .desc{
          margin:0 5vw;
          .logoContainer{
            display: flex;
            align-items: center;
            justify-content: center;
            width:100%;
            .logo{
              width:95%;              
            }
          } 
          .btn{
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .sbtn{
            cursor: pointer;
            width:100%;
            max-width:8vw;
            min-width: 10%;              
            *{
              transition: fill 0.2s , stroke 0.2s;
            }
            .st0{
              fill:$SHIZU-Dark-100;
            }
            .st9{
              fill:#FFF;
            }
            .st19{
              fill:$SHIZU-Dark-100;
              stroke-miterlimit:10;
              stroke:$SHIZU-Dark-100;
            }           
            &:hover{
              .st0{
                fill:#FFF;
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
          .text{
            @include mobile-font-size($m-font-sizes,0px);                              
          }
          .fanName{            
            color: $SHIZU-Dark-100;
          }
          .tag{
            @include font-size($m-tag-font-sizes,0px); 
            color:#fff;
            border-radius: 30px;
            padding: 3px 10px;
            background: $SHIZU-Dark-100;
          }
          .squares{
            margin: 5% 0;
            display: flex;
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
        }
      }
    }
    .aboutUs{
      background:$NAO-Light-50;
      border-top: $NAO-Dark-100 solid 30px;
      border-bottom: $NAO-Dark-100 solid 5px;
      width:100vw;  
      .header{        
        background: $NAO-Dark-100 ;
      }   
      .box{
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
        background: #fff;
        border:$NAO-Dark-100 solid 5px;
        border-radius: 15px;
        margin:10% 10% 0 10%;
        display: flex;
        align-items: center ;
        justify-content: flex-start;
        flex-direction:column ;
        .content{
          margin-top:10%;     
          margin-bottom:10%;    
          width:80%;          
          .aboutTitle{
            @include mobile-font-size($mobile-about-font-sizes,0px);
            letter-spacing: 0;
            line-height: 2.0;
            font-weight: 800;
          }
          .aboutText{
            @include mobile-font-size($font-sizes,0px);
            letter-spacing: 0;
            line-height: 2.0;
            font-weight: 600;
          }
        }
      }
      .hg{
        margin:5% 10% 0 10%;
      }
      .snsBtnsContainer{
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3); 
        background: #fff;
        border:$NAO-Dark-100 solid 5px;
        border-radius: 15px;
        margin:5% 10% 10% 10%;
        padding: 5%;
        display: flex;
        align-items: center ;
        justify-content: flex-start;
        flex-direction:column ;
        .logo{
          width:100%;
        }
        .MOPsns{
          width:100%;
          .mailCircle{
            width:45px;
            aspect-ratio: 1 / 1;
            font-size:18px;
            max-width: 80%;
            border-radius: 50%;
            background:$MOP-LogoC-100;
            color:#fff;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: background 0.2s, color 0.2s;
            &:hover{
              width:44px;              
              background:#fff;
              color:$MOP-LogoC-100;
              border:$MOP-LogoC-100 solid 1px
            }
          }
          .sbtn{
            cursor: pointer;
            width:45px;
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
            @include font-size($m-tag-font-sizes,0px);     
            border-radius: 20px;
            background: #C4A3BF; 
            color:#fff;
            font-weight: 700;
            padding: 7px 10px;            
          }
        }
      }
    }
  }

</style>