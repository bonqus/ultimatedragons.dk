"use strict";(self["webpackChunkultimatedragons_dk"]=self["webpackChunkultimatedragons_dk"]||[]).push([[537],{5537:(e,a,n)=>{n.r(a),n.d(a,{default:()=>w});var s=n(3673),t=n(2323),l=n(8880);function m(e,a,n,m,r,i){const d=(0,s.up)("q-btn-toggle"),o=(0,s.up)("q-icon"),u=(0,s.up)("q-input"),h=(0,s.up)("q-item-label"),p=(0,s.up)("q-item-section"),x=(0,s.up)("q-item"),c=(0,s.up)("page");return(0,s.wg)(),(0,s.j4)(c,null,{default:(0,s.w5)((()=>[(0,s._)("h2",null,"2022 "+(0,t.zw)(e.$t("Members"))+" "+(0,t.zw)(e.$t("Outdoor")),1),(0,s.Uk)(" "+(0,t.zw)(e.$t("Last Update"))+": 2022-08-25 ",1),(0,s.Wm)(d,{modelValue:r.sex,"onUpdate:modelValue":a[0]||(a[0]=e=>r.sex=e),class:"q-py-md",spread:"","toggle-color":"primary",options:i.sexOptions},null,8,["modelValue","options"]),(0,s.Wm)(u,{class:"q-mb-md",modelValue:r.search,"onUpdate:modelValue":a[1]||(a[1]=e=>r.search=e),filled:"",type:"search"},{append:(0,s.w5)((()=>[(0,s.Wm)(o,{name:"search"})])),_:1},8,["modelValue"]),(0,s.Wm)(l.W3,{name:"list-transition",tag:"div",class:"q-list q-list--dense q-list--dark"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.membersfiltered,(e=>((0,s.wg)(),(0,s.j4)(x,{key:e.name},{default:(0,s.w5)((()=>[(0,s.Wm)(p,null,{default:(0,s.w5)((()=>[(0,s.Wm)(h,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,t.zw)(e.name),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})}n(71),n(3610);const r=JSON.parse('[{"name":"Alexandra Pickett Porrazzo","sex":"Kvinde"},{"name":"Anita Pedersen","sex":"Kvinde"},{"name":"Christine Albrechtsen","sex":"Kvinde"},{"name":"Ditte Schønnemann Jørgensen","sex":"Kvinde"},{"name":"Benjamin Toppenberg Lazar","sex":"Mand"},{"name":"Casper Foltmar Gammelgaard","sex":"Mand"},{"name":"Jonas Hagsholm Pedersen","sex":"Mand"},{"name":"Jakob Eiby","sex":"Mand"},{"name":"Oliver Clemmensen","sex":"Mand"},{"name":"Esben Larsen Rasmussen","sex":"Mand"},{"name":"Jonathan Ortved Melcher","sex":"Mand"},{"name":"Laura Toppenberg Lazar","sex":"Kvinde"},{"name":"Lærke Marie Høgh Bünger","sex":"Kvinde"},{"name":"Mathilde Sif Holm Jacobsen Eiby","sex":"Kvinde"},{"name":"Peter Alexander Garnæs","sex":"Mand"},{"name":"Rikke Brouw Hyldahl","sex":"Kvinde"},{"name":"Mathias Bohn Rasmussen","sex":"Mand"},{"name":"Mathias Sunesen","sex":"Mand"},{"name":"Thomas Ryde","sex":"Mand"},{"name":"Mette Godiksen","sex":"Kvinde"},{"name":"Thomas Siggaard Andersen","sex":"Mand"},{"name":"Yannick Elias Heiser","sex":"Mand"}]'),i={name:"MembershipPage",data(){return{search:"",sex:"all",members:r}},computed:{membersfiltered(){return""===this.search?[...this.members].filter((e=>"all"==this.sex||e.sex===this.sex)).sort(((e,a)=>e.name>a.name?1:-1)):[...this.members.filter((e=>e.name.toLowerCase().includes(this.search.toLowerCase())))].filter((e=>"all"==this.sex||e.sex===this.sex)).sort(((e,a)=>e.name>a.name?1:-1))},sexOptions(){return[{label:this.$t("All"),value:"all"},{label:this.$t("Men"),value:"Mand"},{label:this.$t("Women"),value:"Kvinde"}]}}};var d=n(4260),o=n(8761),u=n(4842),h=n(4554),p=n(7011),x=n(3414),c=n(2035),b=n(2350),g=n(7518),M=n.n(g);const v=(0,d.Z)(i,[["render",m]]),w=v;M()(i,"components",{QBtnToggle:o.Z,QInput:u.Z,QIcon:h.Z,QList:p.Z,QItem:x.Z,QItemSection:c.Z,QItemLabel:b.Z})}}]);