(self["webpackChunkultimatedragons_dk"]=self["webpackChunkultimatedragons_dk"]||[]).push([[78],{989:(e,t,n)=>{"use strict";function r(e){const t={meta:{}};return e?(e.title&&(t.title=e.title,t.meta.ogTitle={name:"og:title",content:e.title},t.meta.twitterTitle={name:"twitter:title",content:e.title}),e.description&&(t.meta.description={name:"description",content:e.description},t.meta.ogDescription={name:"og:description",content:e.description},t.meta.twitterDescription={name:"twitter:description",content:e.description}),e.url&&(t.meta.ogUrl={name:"og:url",content:e.url},t.meta.twitterUrl={name:"twitter:url",content:e.url},t.meta.canonical={rel:"canonical",href:e.url}),e.img&&(t.meta.ogImage={name:"og:image",content:e.img},t.meta.twitterImage={name:"twitter:image",content:e.img}),t):t}n.d(t,{Z:()=>r})},8078:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});var r=n(3673),a=n(2323);const i={class:"fancy-alert"};function o(e,t,n,o,s,l){const d=(0,r.up)("q-skeleton"),c=(0,r.up)("q-card-section"),m=(0,r.up)("q-card"),p=(0,r.up)("q-img"),u=(0,r.up)("insta-feed"),g=(0,r.up)("page");return(0,r.wg)(),(0,r.j4)(g,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{token:"IGQVJYNldROUQyQ1NDTzJRbS1RbHRoeGNDUmdPTjVvSm5zNjQ4ZAXZAldVhrZAkxtSFVSeG95bEs1U3NSSHB1Q1JUazFVY2VBUUpFcW1VS29YM2phem1tcDQxMmkzd3J1cmZAaV05qYV9GTUVKNXdQVDM1MAZDZD",fields:"media_url,media_type,caption,permalink",mediatypes:["IMAGE"]},{loading:(0,r.w5)((e=>[e.loading?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},(0,r.Ko)(3,(e=>(0,r.Wm)(m,{key:e,class:"q-mb-lg"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{height:"400px",square:""}),(0,r.Wm)(c,{class:"text-white text-center text-body1",style:{"overflow-wrap":"anywhere"}},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{type:"text"})])),_:1})])),_:2},1024))),64)):(0,r.kq)("",!0)])),feeds:(0,r.w5)((e=>[(0,r.Wm)(m,{class:"q-mb-lg"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{src:e.feed.media_url,alt:"Instagram post",class:"cursor-pointer",onClick:t=>l.followLink(e.feed.permalink)},null,8,["src","onClick"]),(0,r.Wm)(c,{class:"text-white text-center text-body1",style:{"overflow-wrap":"anywhere"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(e.feed.caption),1)])),_:2},1024)])),_:2},1024)])),error:(0,r.w5)((e=>[(0,r._)("div",i,(0,a.zw)(e.error),1)])),_:1})])),_:1})}var s=n(989);function l(e,t,n,a,i,o){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.WI)(e.$slots,"loading",{loading:e.loading}),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.feeds,((t,n)=>(0,r.WI)(e.$slots,"feeds",{index:n,feed:t}))),256)),(0,r.WI)(e.$slots,"error",{error:e.error})])}var d=n(52),c=n.n(d);const m={props:{token:{type:String,required:!0},fields:{type:String,required:!0},count:{type:Number,default:6},mediatypes:{type:Array,required:!0}},data:()=>({error:null,loading:!1,feeds:[]}),mounted(){this.getUserFeed()},methods:{getUserFeed(){this.loading=!0,c().get("https://graph.instagram.com/me/media",{params:{access_token:this.token,fields:this.fields}}).then((e=>{if(this.loading=!1,400===e.status&&(this.error=e.error.message),200===e.status)for(const t in e.data.data)this.feeds.push(e.data.data[t])})).catch((e=>{throw e}))}}};var p=n(4260);const u=(0,p.Z)(m,[["render",l]]),g=u;var w=n(794);const f={description:"Check out the newest photos of Ultimate Dragons",title:"Ultimate Dragons | Gallery",url:"https://ultimatedragons.dk/gallery",img:n(7546)},h={name:"GalleryPage",setup(){(0,w.Z)((0,s.Z)(f))},components:{InstaFeed:g},methods:{followLink:function(e){window.open(e,"_blank")}}};var k=n(151),y=n(4103),Z=n(5589),U=n(4152),_=n(7518),D=n.n(_);const q=(0,p.Z)(h,[["render",o]]),x=q;D()(h,"components",{QCard:k.Z,QSkeleton:y.ZP,QCardSection:Z.Z,QImg:U.Z})},7546:(e,t,n)=>{e.exports=n.p+"img/dragons-logo.d1d25877.png"}}]);