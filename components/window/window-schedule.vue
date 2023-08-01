<template>
<div class="cellContainer" ref="cellContainer"> 
    <div class="cell">

        <div class="list" v-if="!loading" :key="data.length" >

          <div class="column" v-if="streaming.length>0">
              <div class="titleSet">
                <div class="smallTitle">
                  Streaming /
                </div>
                <div class="largeTitle">
                 {{$t('Streaming')}}
                </div>
              </div>
              <div class="videoRowContainer">
                <div class="lgVideo fade" v-for="(s,index) of streaming" :key="s.id" :class="index>0?'ml-2':''" >
                  <div class="thumbnail"  @click="goto(s?.id||'')">
                    <img :src="s?.snippet?.thumbnails?.maxres?.url" class="h-100"  />
                  </div>
                  <div class="vName" :class="getV(s?.snippet?.channelId??'').class">{{ getV(s?.snippet?.channelId??'').name }}&nbsp;&nbsp;/</div>
                  <div class="vTitle">{{s?.snippet?.title}}</div>
                  <div class="vDate">{{$t('Streaming')}}</div>
                </div>
              </div>
            </div>

            <!--div class="column" v-else>
              <div class="titleSet">
                <div class="smallTitle">
                  New Video /
                </div>
                <div class="largeTitle">
                 {{$t('NewVideo')}}
                </div>
              </div>              
              <div class="lgVideo fade">
                <div class="thumbnail"  @click="goto(newV?.id||'')">
                  <img :src="newV?.snippet?.thumbnails?.maxres?.url" class="h-100"  />
                </div>
                <div class="vName" :class="getV(newV?.snippet?.channelId??'').class">{{ getV(newV?.snippet?.channelId??'').name }}&nbsp;&nbsp;/</div>
                <div class="vTitle">{{newV?.snippet?.title}}</div>
                <div class="vDate">{{dateFormatter(newV?.date||"")}}</div>                
              </div>
            </div -->   
            
            
            <div class="column" v-if="coming.length>0">
              <div class="titleSet">
                <div class="smallTitle">
                  Coming Soon /
                </div>
                <div class="largeTitle">
                 {{$t('Coming Soon')}}
                </div>
              </div>              
              <div class="videoContainer">
                <div class="videoList" v-for="vs in comingList" :key="(vs?vs[0]?.id+`-`+vs[1]?.id:'')+selectedFilter.join(',')">

                  <div class="video fade" v-for="(v,index) in vs" :key="v.id" :class="index==1?'delay1':''">
                    <div class="thumbnail"  @click="goto(v?.id||'')">
                      <img :src="v?.snippet?.thumbnails?.maxres?.url" class="h-100" @load="loaded++" />
                    </div>
                    <div class="vName" :class="getV(v?.snippet?.channelId??'').class">{{ getV(v?.snippet?.channelId??'').name }}&nbsp;&nbsp;/</div>
                    <div class="vTitle">{{v?.snippet?.title}}</div>
                    <div class="vDate">{{dateFormatter(v?.date||"")}}</div>
                    <div class="videoMagrin" v-if="index==0" />
                  </div>  

                </div>
              </div>
            </div>  

            
            <div class="column">
              <div class="titleSet">
                <div class="smallTitle">
                  Archive /
                </div>
                <div class="largeTitle">
                 {{$t('Archive')}} 
                 <!--b-button class="filterBtn" size="sm" pill :variant="selectedFilter.map(s=>s.value).includes(filter[0].value)? 'primary':'outline-primary'" @click="Filter(filter[0])">{{$t('aisu.name')}}</b-button>
                 <b-button class="filterBtn" size="sm" pill :variant="selectedFilter.map(s=>s.value).includes(filter[1].value)? 'warning':'outline-warning'" @click="Filter(filter[1])">{{$t('shizu.name')}}</b-button-->
                </div>
              </div>
              <div class="videoContainer" v-if="videoList.length>0">
                <div class="videoList" v-for="vs in videoList" :key="(vs?vs[0]?.id+`-`+vs[1]?.id:'')+selectedFilter.join(',')">

                  <div class="video fade" v-for="(v,index) in vs" :key="v.id" :class="index==1?'delay1':''">
                    <div class="thumbnail"  @click="goto(v?.id||'')">
                      <img :src="v?.snippet?.thumbnails?.maxres?.url" class="h-100" @load="loaded++" />
                    </div>
                    <div class="vName" :class="getV(v?.snippet?.channelId??'').class">{{ getV(v?.snippet?.channelId??'').name }}&nbsp;&nbsp;/</div>
                    <div class="vTitle">{{v?.snippet?.title}}</div>
                    <div class="vDate">{{dateFormatter(v?.date||"")}}</div>
                    <div class="videoMagrin" v-if="index==0" />
                  </div>  

                </div>
              </div>
              <div class="videoContainer" v-else>
                沒有記錄
              </div>
            </div>


        </div>

        <div v-else class="loading">
          <Loading />
        </div>
        <Footer class="footer"></Footer>
    </div>

    
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
    process:any,
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
    const process = inject<number>('process');
    return {  
      data:[],
      coming:[],
      streaming:[],
      loading:true,
      newV:{},
      process:process,
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
  watch:{
    selectedFilter(){
      this.process=((document.querySelector('.cellContainer') as Element)?.scrollTop + window.innerWidth) / (document.querySelector('.cellContainer') as Element)?.scrollHeight * 100;
    },
    loaded(newVal){      
      if(newVal>=3) {
        (document.querySelector('.cellContainer') as Element).addEventListener('scroll', this.scrollAnimation);
        nextTick(()=>{          
          this.scrollAnimation();         
        })
      }
    },
    'data.length'(newVal){
      if(newVal > 0){
        nextTick(()=>{          
          this.process=((document.querySelector('.cellContainer') as Element)?.scrollTop + window.innerWidth) / (document.querySelector('.cellContainer') as Element)?.scrollHeight * 100;          
        })
      }
      else{
        this.process=0;
      }
    },    
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
    nextTick(()=>{          
      this.process=((document.querySelector('.cellContainer') as Element)?.scrollTop + window.innerWidth) / (document.querySelector('.cellContainer') as Element)?.scrollHeight * 100;      
      (document.querySelector('.cellContainer') as Element).addEventListener('scroll', this.imgLazyLoad);      
    })   
  },
  beforeDestroy(): void {
    (document.querySelector('.cellContainer') as Element).removeEventListener('scroll', this.scrollAnimation);   
    (document.querySelector('.cellContainer') as Element).removeEventListener('scroll', this.imgLazyLoad);
  },
  computed:{    
    videoList():[VideoData[]?]{
      var filter=this.getFilterId();
      var filtered=this.data.filter(d=>filter.includes(d.snippet?.channelId??''))
      var tmps:[VideoData[]?]=[];
      for(var i=0;i<filtered.length;i+=2){
        var tmp=[];
        if(filtered[i]) tmp.push(filtered[i])
        if(filtered[i+1]) tmp.push(filtered[i+1])
        tmps.push(tmp)
      }
      return tmps;
    },
    comingList():[VideoData[]?]{
      var tmps:[VideoData[]?]=[];
      for(var i=0;i<this.coming.length;i+=2){
        var tmp=[];
        if(this.coming[i]) tmp.push(this.coming[i])
        if(this.coming[i+1]) tmp.push(this.coming[i+1])
        tmps.push(tmp)
      }
      return tmps;
    },
    streamingList():[VideoData[]?]{
      var tmps:[VideoData[]?]=[];
      for(var i=0;i<this.streaming.length;i+=2){
        var tmp=[];
        if(this.streaming[i]) tmp.push(this.streaming[i])
        if(this.streaming[i+1]) tmp.push(this.streaming[i+1])
        tmps.push(tmp)
      }
      return tmps;
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
      if (process.client) {       
        const cellContents = document.querySelectorAll<HTMLElement>('.fade');
        for (let i = 0; i < cellContents.length; i++) {
          const windowHeight = window.innerWidth;
          const elementTop = cellContents[i].getBoundingClientRect().left;
          const elementVisible = 200;
          if (elementTop < windowHeight - elementVisible) {
            cellContents[i].classList.add('active');
          }
        }
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
.loading{
  width:100vw;
  height:100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cell{
  display: flex;
  align-items: center;
  &>*{
    height:75vh;
  }
  .thumbnail{
    cursor: pointer;
  }
  .titleSet{
    .smallTitle{
      @include font-size($subTitle-font-sizes,0px);
      letter-spacing:0.3rem;
      font-weight: 700;
    }
    .largeTitle{
      margin-top:-1vh;
      margin-bottom:1.5rem; 
      @include font-size($title-font-sizes,0px);
      letter-spacing:0.3rem;
      font-weight: 700;
      .filterBtn{
        margin-left:3vh;        
      }
      .filterBtn:first-child{
        margin-left:8vh;        
      }
    }
  }
  .list{       
    display: flex;
    align-items: center; 
    .column{
      margin: 0 2.5vh;      
      &:first-child{
        margin-left:5vh;
        margin-right:0;
      }
      &:last-child{
        margin-right:10vh;
      }
      .videoRowContainer{
        display: flex;
        margin-right:2.5vh; 
      }
      .lgVideo{      
        height:65vh;  
        .thumbnail{
          display: flex;
          align-items: center;
          justify-content: center;
          height:50vh;
          width:fit-content;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.2);
        }
        .vName{
          margin-top:1.5rem;  
          @include font-size($vName-font-sizes,0px);
          font-weight: 700;
          &.aisu{
            color:$AISU-Dark-100
          }
          &.shizu{
            color:$SHIZU-Dark-100
          }
        }
        .vTitle{
          @include font-size($subSlogan-font-sizes,0px);
          font-weight: 700;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .vDate{
          @include font-size($subTitle-font-sizes,0px);
          color:#555;
        }        
      }
      .videoContainer{
        display: flex;
        height:65vh;         
        .videoList{   
          margin:0 2.5vh; 
          &:first-child {            
            margin-left: 0;
          }           
          .videoMagrin{
            height:1rem;
          }    
          .video{          
            .thumbnail{
              display: flex;
              align-items: center;
              justify-content: center;
              height:22vh;
              width:fit-content;
              border-radius: 15px;
              overflow: hidden;
              box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.2);
            }
            .vName{            
              margin-top:0.5rem;   
              @include font-size($vName-font-sizes,10px);
              font-weight: 700;
              &.aisu{
                color:$AISU-Dark-100
              }
              &.shizu{
                color:$SHIZU-Dark-100
              }
            }
            .vTitle{
              @include font-size($subSlogan-font-sizes,0px);
              font-weight: 700;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
              line-height: 1.5em;
              height: 3em;
            }
            .vDate{
              @include font-size($subTitle-font-sizes,0px);
              color:#555;
            }
          }
        }
      }
    }
  }
  .footer{
    margin-left:5vh;
    height:100vh;
  }
}
</style>
