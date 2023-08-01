<template>
  <div class="Schedule">
    <div v-if="loading" class="loading">
      <Loading />
    </div>
    <div v-else>

      <div class="part fade" v-if="streaming.length>0">
        <div class="title fade">
          <div class="smTitle">Streaming /</div>
          <div class="lgTitle">{{$t('Streaming')}}</div>
        </div>
        <div class="videoList">
          <div class="video" v-for="s in streaming" :key="s.id"  @click="goto(s?.id||'')">
            <div class="thumbnail fade">
              <img @load="loaded++" :src="s?.snippet?.thumbnails?.maxres?.url" class="w-100"  />
            </div>
            <div class="vName fade" :class="getV(s?.snippet?.channelId??'').class">{{ getV(s?.snippet?.channelId??'').name }}&nbsp;&nbsp;/</div>
            <div class="vTitle fade">{{s?.snippet?.title}}</div>
            <div class="vDate fade">{{$t('Streaming')}}</div>
          </div>
        </div>
      </div>

      <div class="part fade" v-if="coming.length>0">
        <div class="title fade">
          <div class="smTitle">Coming Soon /</div>
          <div class="lgTitle">{{$t('Coming Soon')}}</div>
        </div>
        <div class="videoList ">
          <div class="video " v-for="s in coming" :key="s.id"  @click="goto(s?.id||'')">
            <div class="thumbnail fade">
              <img @load="loaded++" :src="s?.snippet?.thumbnails?.maxres?.url" class="w-100"  />
            </div>
            <div class="vName fade" :class="getV(s?.snippet?.channelId??'').class">{{ getV(s?.snippet?.channelId??'').name }}&nbsp;&nbsp;/</div>
            <div class="vTitle fade">{{s?.snippet?.title}}</div>
            <div class="vDate fade">{{dateFormatter(s?.date||"")}}</div>
          </div>
        </div>
      </div>

      <div class="part" v-if="data.length>0">
        <div class="title fade">
          <div class="smTitle">Archive /</div>
          <div class="lgTitle"> {{$t('Archive')}} </div>
        </div>
        <div class="videoList">
          <b-row no-gutters>
            <b-col class="video smVideo" cols="6" v-for="s in data" :key="s.id" @click="goto(s?.id||'')">
              <div class="thumbnail fade">
                <img @load="loaded++" :src="s?.snippet?.thumbnails?.maxres?.url" class="w-100"  />
              </div>
            </b-col>
          </b-row>          
        </div>
      </div>

    </div>
    <mobile-footer class="footer" />
  </div>
</template>
<script lang="ts" setup> 

  interface VideoDataRes {
    data?:VideoData[]
  }
  interface VideoData{
    etag?: string;
    id?: string;
    kind?: string;
    liveStreamingDetails?: {
      actualEndTime?: string;
      actualStartTime?: string;
      scheduledStartTime?: string;
    };
    snippet?: {
      channelId?: string;
      channelTitle?: string;
      liveBroadcastContent?: string;
      publishedAt?: string;
      thumbnails?: {
        default?: {
          height?: number;
          url?: string;
          width?: number;
        };
        high?: {
          height?: number;
          url?: string;
          width?: number;
        };
        maxres?: {
          height?: number;
          url?: string;
          width?: number;
        };
        medium?: {
          height?: number;
          url?: string;
          width?: number;
        };
        standard?: {
          height?: number;
          url?: string;
          width?: number;
        };
      };
      title?: string;
    };
    date?: string;
  }
  
</script>
<script lang="ts">
import { defineComponent } from 'vue'
import g from '@/mixins/g.ts'  
export default defineComponent({ 
  mixins:[g],
  data():{
    data:VideoData[],
    streaming:VideoData[],
    coming:VideoData[],
    loading:boolean,
    newV:VideoData,    
    loaded:number,
    filter:{
      name:string,
      value:string,
    }[],
    selectedFilter:{
      name:string,
      value:string,
    }[]
  }{    
    return {  
      data:[],
      coming:[],
      streaming:[],
      loading:true,
      newV:{},      
      loaded:0,
      filter:[
        {
          name:this.$t('aisu.name'),
          value:'aisu',
        },
        {
          name:this.$t('shizu.name'),
          value:'shizu',
        }
      ],
      selectedFilter:[
        {
          name:this.$t('aisu.name'),
          value:'aisu',
        },
        {
          name:this.$t('shizu.name'),
          value:'shizu',
        }
      ]
    }
  },   
  async created(){
    var tmp: VideoDataRes = await $fetch('/api/get');
    this.data=tmp?.data??[];    
    for(var d of this.data){
      if(d.snippet?.liveBroadcastContent=='live'){
        this.streaming.push(d)
        this.data=this.data.filter((dt=>dt.id!=d.id))
      }
      else if(d.snippet?.liveBroadcastContent=='upcoming'){
        this.coming.unshift(d)
        this.data=this.data.filter((dt=>dt.id!=d.id))
      }
    }    
    this.loading=false; 
  },
  mounted(){
    
  },
  beforeDestroy(): void {
    window.removeEventListener('scroll', this.scrollAnimation);      
  },
  watch:{
    loaded(newVal){
      if(newVal==20){
        window.addEventListener('scroll', this.scrollAnimation);  
        nextTick(()=>{          
          nextTick(()=>{          
            nextTick(()=>{          
              this.scrollAnimation();         
            })          
          })          
        })           
      }
    }
  },
  methods:{
    Filter(v:{
      name:string,
      value:string,
    }):void{
      if(this.selectedFilter.map(e=>e.value).includes(v.value)){
        this.selectedFilter=this.selectedFilter.filter(e=>e.value!=v.value);        
      }
      else{
        this.selectedFilter.push(v);
      }
      console.log(this.selectedFilter)
    },
    getFilterId():string[]{
      var tmp:string[];
      tmp=[];  
      if(this.selectedFilter.find(e=>e.value=='shizu')) tmp.push('UCEhykV_2vzBujoNWANH2-4Q')
      if(this.selectedFilter.find(e=>e.value=='aisu')) tmp.push('UCnwgM2M3C4JOVdOZ0OLu_bA')

      return tmp
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
          if (elementTop < windowHeight - elementVisible && imgs[i].getAttribute("data-src")) {
            imgs[i].src=imgs[i].getAttribute("data-src") as string;
            imgs[i].removeAttribute("data-src");
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
    goto(id:string):void{
      if(process.client && id != ''){
        const url='https://www.youtube.com/watch?v='+id
        window.open(url, '_blank')?.focus();
      }
    },   
    dateFormatter(dateStr:string | Date):string{
      if(dateStr){ 
        var date=typeof dateStr=='string'?new Date(dateStr):dateStr;
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const day = String(date.getUTCDate()).padStart(2, '0');
        var hours = date.getUTCHours() + 8;
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        var period = 'am';
        if (hours >= 12) {
          period = 'pm';
          if (hours > 12) {
            hours -= 12;
          }
        }
        return `${year}-${month}-${day} ${String(hours).padStart(2, '0')}:${minutes}${period}`;
      }
      return ''
    },         
    getV(id:string):{class:string,name:string}{
      if(id=='UCEhykV_2vzBujoNWANH2-4Q'){
        return {
          class:'shizu',
          name:this.$t('shizu.name')
        }
      }
      else if(id=='UCnwgM2M3C4JOVdOZ0OLu_bA'){
        return {
          class:'aisu',
          name:this.$t('aisu.name')
        }
      }
      return {
        class:'',
        name:''
      }
    }
  }
})
</script>
<style lang="scss" scoped>
  .Schedule{
    padding-top:60px;
    background: #888;
    background:url('~/assets/svg/BG-Dots.svg');
    background-size:3000px ;
    background-repeat: repeat;     
    background-attachment: local;    
    min-height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: flex;
    flex-direction: column;
    .loading{      
      width:100vw;
      height:calc(100vh - 60px);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .part{
      margin-top:3rem;
      width:85vw;
      .smTitle{
        @include mobile-font-size($subTitle-font-sizes,0px);
        letter-spacing:0.3rem;
        font-weight: 700;
      }
      .lgTitle{
        @include mobile-font-size($title-font-sizes,0px);
        letter-spacing:0.3rem;
        font-weight: 700;
      }
      .videoList{             
        .video{
          margin-top:1.5rem;  
          .thumbnail{
            display: flex;
            align-items: center;
            justify-content: center;            
            width:fit-content;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.2);
          }
          .vName{
            margin-top:1.5rem;
            @include mobile-font-size($title-font-sizes,0px);
            font-weight: 700;
            &.aisu{
              color:$AISU-Dark-100
            }
            &.shizu{
              color:$SHIZU-Dark-100
            }
          }
          .vTitle{
            @include mobile-font-size($title-font-sizes,0px);
            font-weight: 700;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .vDate{
            @include mobile-font-size($subTitle-font-sizes,0px);
            color:#555;
          }    
          &.smVideo{
            margin-top:0;
            padding:0.3rem; 
            &:nth-child(odd){
              padding-left:0;
            }
            &:nth-child(even){
              padding-right:0;
            }
          }    
        }
      }
      
    }
    .footer{
      margin-top:0.5rem;
    }
  }
</style>
