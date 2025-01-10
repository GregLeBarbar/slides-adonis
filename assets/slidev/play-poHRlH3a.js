const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-DSW3Kpmy.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-CrKaqdcu.js","assets/modules/vue-DXp0LslI.js","assets/modules/shiki-XzYYocnl.js","assets/modules/shiki-Bxv373Z5.css","assets/slidev/SlideWrapper-BU53mrCE.js","assets/index-8dXya5q4.js","assets/index-mm01Mcxy.css","assets/SlideWrapper-DchzhrKm.css","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-CnREb31Y.js","assets/slidev/shortcuts-BljfSW8v.js","assets/slidev/context-DJx7__cX.js","assets/modules/unplugin-icons-seqC59Rz.js","assets/shortcuts-DHgzE6mW.css","assets/DrawingControls-Cxk9a9ub.css"])))=>i.map(i=>d[i]);
import{d as g,ad as D,o,c,B as e,b as _,e as a,f as B,i as C,g as n,al as N,z as E,k as S,ac as P,am as $,Q as k,l as m,F as z,h as R,t as I}from"../modules/vue-DXp0LslI.js";import{c as L,a as T}from"./SlideWrapper-BU53mrCE.js";import{q as b,a as M,v as W,w as x,x as h,d as w,y as A,k as V,z as H}from"../index-8dXya5q4.js";import{b as O,G as U,c as F,u as G,r as j,a as q,S as K,_ as Q,o as X}from"./shortcuts-BljfSW8v.js";import{b as Y}from"../modules/unplugin-icons-seqC59Rz.js";import"../modules/shiki-XzYYocnl.js";import"./context-DJx7__cX.js";import"./IconButton.vue_vue_type_script_setup_true_lang-CnREb31Y.js";const J="/slides-adonis/assets/logo-BYkHSa_O.png",Z={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-modal"},ee=g({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(f,{emit:u}){const d=f,s=D(d,"modelValue",u);function i(){s.value=!1}return(p,t)=>(o(),c(N,null,[e(s)?(o(),_("div",Z,[a("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:t[0]||(t[0]=r=>i())}),a("div",{class:C(["m-auto rounded-md bg-main shadow",d.class]),"dark:border":"~ main"},[B(p.$slots,"default")],2)])):n("v-if",!0)],1024))}}),te={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},oe=["innerHTML"],se=g({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(f,{emit:u}){const s=D(f,"modelValue",u),i=E(()=>typeof b.info=="string");return(p,t)=>(o(),c(ee,{modelValue:e(s),"onUpdate:modelValue":t[0]||(t[0]=r=>$(s)?s.value=r:null),class:"px-6 py-4"},{default:S(()=>[a("div",te,[i.value?(o(),_("div",{key:0,class:"mb-4",innerHTML:e(b).info},null,8,oe)):n("v-if",!0),t[1]||(t[1]=a("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[a("div",{class:"flex gap-1 children:my-auto"},[a("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),a("img",{class:"w-5 h-5",src:J,alt:"Slidev logo"}),a("div",{style:{color:"#2082A6"}},[a("b",null,"Sli"),P("dev ")])])],-1))])]),_:1},8,["modelValue"]))}}),ae=g({__name:"Controls",setup(f){const{isEmbedded:u}=M(),d=!b.drawings.presenterOnly&&!u.value,l=k();d&&W(()=>import("./DrawingControls-DSW3Kpmy.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then(p=>l.value=p.default);const s=k(),i=k();return(p,t)=>(o(),_(z,null,[l.value?(o(),c(e(l),{key:0})):n("v-if",!0),m(O),m(U),s.value?(o(),c(e(s),{key:1})):n("v-if",!0),i.value?(o(),c(e(i),{key:2,modelValue:e(x),"onUpdate:modelValue":t[0]||(t[0]=r=>$(x)?x.value=r:null)},null,8,["modelValue"])):n("v-if",!0),e(b).info?(o(),c(se,{key:3,modelValue:e(h),"onUpdate:modelValue":t[1]||(t[1]=r=>$(h)?h.value=r:null)},null,8,["modelValue"])):n("v-if",!0),m(F)],64))}}),le={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ne=g({__name:"PresenterMouse",setup(f){return(u,d)=>{const l=Y;return e(w).cursor?(o(),_("div",le,[m(l,{class:"absolute stroke-white dark:stroke-black",style:R({left:`${e(w).cursor.x}%`,top:`${e(w).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):n("v-if",!0)}}}),_e=g({__name:"play",setup(f){const{next:u,prev:d,isPrintMode:l}=M(),{isDrawing:s}=L(),i=I();function p(y){var v;V.value||y.button===0&&((v=y.target)==null?void 0:v.id)==="slide-container"&&(y.pageX/window.innerWidth>.5?u():d())}G(i),j(),q();const t=E(()=>A.value||V.value),r=k();return(y,v)=>(o(),_(z,null,[a("div",{id:"page-root",ref_key:"root",ref:i,class:C(["grid",e(H)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[m(T,{style:{background:"var(--slidev-slide-container-background, black)"},"is-main":"",onPointerdown:p,onContextmenu:e(X)},{default:S(()=>[m(K,{"render-context":"slide"}),m(ne)]),controls:S(()=>[e(l)?n("v-if",!0):(o(),_("div",{key:0,class:C(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100 focus-within:opacity-100 focus-visible:opacity-100",[t.value?"!opacity-100 right-0":"opacity-0 p-2",e(s)?"pointer-events-none":""]])},[m(Q,{persist:t.value},null,8,["persist"])],2))]),_:1},8,["onContextmenu"]),r.value&&e(V)?(o(),c(e(r),{key:0,resize:!0})):n("v-if",!0)],2),e(l)?n("v-if",!0):(o(),c(ae,{key:0})),v[0]||(v[0]=a("div",{id:"twoslash-container"},null,-1))],64))}});export{_e as default};
