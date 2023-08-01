<template>
  <div class="" ref="cellContainer">   
    <div id="timetable" class="timetable">
      <img src="~/assets/timetable/purple.webp" class="BG" />
      <div class="week">{{ mondayString() }} ~ {{ sundayString() }} </div>
      <div class="mon title"> <div>{{ getDateLiveTitle(dates[0]) }}</div> </div>
      <div class="tue title"> <div>{{ getDateLiveTitle(dates[1]) }}</div> </div>
      <div class="wed title"> <div>{{ getDateLiveTitle(dates[2]) }}</div> </div>
      <div class="thu title"> <div>{{ getDateLiveTitle(dates[3]) }}</div> </div>
      <div class="fri title"> <div>{{ getDateLiveTitle(dates[4]) }}</div> </div>
      <div class="sat title"> <div>{{ getDateLiveTitle(dates[5]) }}</div> </div>
      <div class="sun title"> <div>{{ getDateLiveTitle(dates[6]) }}</div> </div>
    </div>
    <button class="submit" @click="genImage()">生成</button>
  </div>
  </template>
  
  <script lang="ts" setup> 
  definePageMeta({
    layout: false,
  });
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
      thisWeek:boolean,
      dates:Date[],
      titles:String[]
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
        thisWeek:false,
        dates:[],
        titles:["","","","","","",""]
      }
    },
    watch:{
   
    },
    async created(){
      var tmp: VideoDataRes = await $fetch('/api/get');
      this.data=tmp?.data??[];    
      for(var d of this.data){        
        if(d.snippet?.liveBroadcastContent=='upcoming' && d.snippet?.channelId=="UCnwgM2M3C4JOVdOZ0OLu_bA" && this.dateWithinWeek(d.date??"",this.thisWeek) ){
          this.coming.unshift(d)
          this.data=this.data.filter((dt=>dt.id!=d.id))
        }
      }
      this.loading=false;           
    },
    mounted(){        
      this.updateDates();  
    },
    beforeDestroy(): void {
      (document.querySelector('.cellContainer') as Element).removeEventListener('scroll', this.scrollAnimation);   
      (document.querySelector('.cellContainer') as Element).removeEventListener('scroll', this.imgLazyLoad);
    },
    computed:{         
    },  
    methods:{  
      genImage(){
        if(process.client){         
          var node = document.getElementById('timetable');
          /*domtoimage.toBlob(node)
          .then(function (blob:any) {
              window.saveAs(blob, 'my-node.png');
          })
          .catch(function (error:any) {
            console.error('oops, something went wrong!', error);
          });
          */                
          html2canvas(
            document.body,
            {
              windowWidth:1200,
              windowHeight:734,
              width:1200,
              height:734,            
            }
            ).then((canvas) => {            
            const base64image = canvas.toDataURL("image/png");
            /*            
            var image = new Image();
            image.src=base64image;            
            var newTab = window.open("");
            newTab?.document.write(image.outerHTML); 
            */
            var a = document.createElement("a"); //Create <a>
            a.href = base64image; //Image Base64 Goes here
            a.download = "timtable.png"; //File name Here
            a.click(); //Downloaded file
                                          
          });
        }
      },
      checkSameDate(a:Date,b:Date):boolean{
        if(!a || !b) return false      
        return (
          a.getFullYear() === b.getFullYear() &&
          a.getMonth() === b.getMonth() &&
          a.getDate() === b.getDate()
        );
      },
      getDateLiveTitle(d:Date):String{
        for( var c of this.coming){
          if(this.checkSameDate(new Date(c.date??""),d)) return (c.snippet?.title||"").split("|")[0].replace('🔴','')??""
        }
        return "休息"
      },
      updateDates(){
        this.dates=[]
        var tmp=this.getMonday(this.thisWeek)
        for(var i=0;i<7;i++){
          this.dates.push(tmp);
          tmp=this.getNextDate(tmp);
        }                 
      },  
      getMonday(thisWeek:boolean=true): Date {
        var d = new Date();        
        var offset =  thisWeek?0:7;   
        var day = d.getDay(),
            diff = d.getDate() - day + (day == 0 ? -6:1) + offset; // adjust when day is sunday           
        return new Date(d.setDate(diff));
      },      
      getSunday(thisWeek:boolean=true): Date {
        var d = new Date();       
        var offset =  thisWeek?0:7;
        var day = d.getDay(),
            diff = d.getDate() - day + (day == 0 ? -6:1) + 6 + offset; // adjust when day is sunday
        return new Date(d.setDate(diff));
      },
      getNextDate(d:string | Date):Date{
        d = new Date(d);
        d.setHours(0,0,0);
        var day = d.getDay(),
            diff = d.getDate() + 1; // adjust when day is sunday
        return new Date(d.setDate(diff));
      },
      dateWithinWeek(d:string | Date, thisWeek:boolean=true):boolean{
        d = new Date(d);
        var inWeek= d >= this.getMonday(thisWeek) && d <= this.getSunday(thisWeek)        
        return inWeek
      },
      mondayString():String{
        return this.dateFormatter(this.getMonday(this.thisWeek),false,false)
      },
      sundayString():String{
        return this.dateFormatter(this.getSunday(this.thisWeek),false,false)
      },
      dateFormatter(dateStr:string | Date, showTime:boolean = true , showYear:boolean = true):string{
        if(dateStr){ 
          var date=typeof dateStr=='string'?new Date(dateStr):dateStr;
          var year = date.getUTCFullYear();
          var month = String(date.getUTCMonth() + 1);
          var day = String(date.getUTCDate()).padStart(2, '0');
          var hours = date.getUTCHours() + 8;
          if(hours>=24){
            day = String(date.getUTCDate()+1).padStart(2, '0');
            hours -= 24;
          }
          const minutes = String(date.getUTCMinutes()).padStart(2, '0');
          var period = 'am';
          if (hours >= 12) {
            period = 'pm';
            if (hours > 12) {
              hours -= 12;
            }
          }
          var str=`${showYear?year+'/':''}${month}/${day}`
          if(showTime) str+=` ${String(hours).padStart(2, '0')}:${minutes}${period}`
          return str;
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
  .imagesize{
    width: 1200px !important;
    height: 734px !important;
  }
  .timetable{
    width: 1200px !important;
    height: 734px !important;
    position: relative;
    *{
      position: absolute;
    }
    .BG{      
      top:0;
      left: 0;
    }
    .week{
      top:50px;
      left:100px;
      font-size:36px;
      font-weight: 800;
    }
    .title{ 
      left:655px;   
      //background: #999999;  
      width: 480px;
      height: 65px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      *{
        line-height: 1.5rem;
        letter-spacing: 0;        
        font-weight: 800; 
        color:#CABBFF    
      }
    }
    .mon{      
      top:50px;
    }
    .tue{     
      top:146px;
    }
    .wed{      
      top:242px;
    }
    .thu{      
      top:338px;
    }
    .fri{      
      top:434px;
    }
    .sat{      
      top:530px;
    }
    .sun{      
      top:625px;
    }
  }
  .submit{
    
  }
  
  </style>
  