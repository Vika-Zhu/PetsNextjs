(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8349:function(e,t,r){Promise.resolve().then(r.bind(r,9142)),Promise.resolve().then(r.t.bind(r,112,23)),Promise.resolve().then(r.t.bind(r,7666,23)),Promise.resolve().then(r.t.bind(r,6360,23))},6168:function(e,t,r){"use strict";r.d(t,{CT:function(){return selectBreedFilter},En:function(){return o},Ft:function(){return i},Hn:function(){return l},K5:function(){return selectBreedFilterByName},QS:function(){return selectTypeImage},Yk:function(){return selectImageCount},f5:function(){return c},jg:function(){return u},mc:function(){return d},nO:function(){return selectUploadDataOrder}});var n=r(5726);let a=(0,n.oM)({name:"headerSearch",initialState:{idBreed:"",nameBreed:"",imageCount:5,uploadDateOrder:"ASC",typeImage:"jpg,png,gif"},reducers:{textAdd:(e,t)=>{e.nameBreed=t.payload},reset:e=>{e.idBreed="",e.imageCount=20,e.uploadDateOrder=""},setBreedFilter:(e,t)=>{e.idBreed=t.payload},imageCount:(e,t)=>{e.imageCount=t.payload},uploadDateSort:(e,t)=>{e.uploadDateOrder=t.payload},typeImageFilter:(e,t)=>{e.typeImage=t.payload}}}),selectBreedFilter=e=>e.breed.idBreed,selectImageCount=e=>e.breed.imageCount,selectUploadDataOrder=e=>e.breed.uploadDateOrder,selectTypeImage=e=>e.breed.typeImage,selectBreedFilterByName=e=>e.breed.nameBreed,{textAdd:o,reset:d,setBreedFilter:u,imageCount:i,uploadDateSort:l,typeImageFilter:c}=a.actions;t.ZP=a.reducer},9142:function(e,t,r){"use strict";r.r(t),r.d(t,{ReduxProvider:function(){return ReduxProvider}});var n=r(7437),a=r(5726),o=r(6168);let d=(0,a.xC)({reducer:{breed:o.ZP}});var u=r(3198);function ReduxProvider(e){let{children:t}=e;return(0,n.jsxs)(u.zt,{store:d,children:[" ",t," "]})}r(2265)},6360:function(){},7666:function(){},112:function(e){e.exports={style:{fontFamily:"'__Jost_54b096', '__Jost_Fallback_54b096'",fontStyle:"normal"},className:"__className_54b096"}}},function(e){e.O(0,[713,971,864,744],function(){return e(e.s=8349)}),_N_E=e.O()}]);