import{c as P,j as t,R as f,r as e}from"./client-18074b33.js";import{b as K,A as m,F as h,a as L,S as E,P as d}from"./AddDuplicatesToJson-f1a762e3.js";import{g as I,H as v}from"./header-c1b89668.js";const H={label:"Fire",urlKey:"Fire"},N={label:"Ice",urlKey:"Ice"},F={label:"Physical",urlKey:"Physical"},W={label:"Lightning",urlKey:"Lightning"},C={label:"Wind",urlKey:"Wind"},D={label:"Imaginary",urlKey:"Imaginary"},A={label:"Quantum",urlKey:"Quantum"},G={fire:H,ice:N,physical:F,lightning:W,wind:C,imaginary:D,quantum:A},_={label:"Abundance",urlKey:"Abundance"},B={label:"Destruction",urlKey:"Destruction"},T={label:"Erudition",urlKey:"Erudition"},k={label:"Harmony",urlKey:"Harmony"},q={label:"Nihility",urlKey:"Nihility"},J={label:"Preservation",urlKey:"Preservation"},Q={label:"Hunt",urlKey:"Hunt"},V={abundance:_,destruction:B,Erudition:T,Harmony:k,Nihility:q,Preservation:J,Hunt:Q},M="/master_sheet_gisr/assets/charSR-9c3353f0.webp",$="/master_sheet_gisr/assets/weaponSR-6bfdd09e.webp";function z(){const[s,S]=e.useState(!0),[y,l]=e.useState({}),[g,c]=e.useState({}),[R,p]=e.useState(!0),[i,b]=e.useState(""),[n,x]=e.useState([]),[o,r]=e.useState([]);if(e.useEffect(()=>{K().then(async u=>await I().then(a=>{l(m(u.Character,a.StarRail,a.StarRail.SRPity)),c(m(u.Weapon,a.StarRail,a.StarRail.SRPity)),r(a.StarRail.SRPity),p(!1)}))},[]),R)return t.jsx("div",{children:"Loading..."});const j=h(y,"StarRail",i,n,"Character",l),w=h(g,"StarRail",i,n,"Weapon",c);return t.jsxs(t.Fragment,{children:[t.jsx(L,{listShown:s,filter:n,setFilter:x,element:G,elementImgs:"StarRailElementImgs",elementExt:"webp",group:V,groupImgs:"StarRailPathImgs",groupExt:"webp"}),t.jsx(E,{searchValue:i,setSearchValue:b}),t.jsx(v,{Links:[["../StarRail/","Star Rail"],["../Genshin/","Genshin Impact"],["../Genshin/Teams/","Genshin Teams"]]}),t.jsxs("div",{className:"switch",children:[t.jsx("img",{alt:"character",src:M}),t.jsx("button",{className:"",onClick:()=>S(!s),children:t.jsx("div",{className:`slider ${s?"sliderLeft":"sliderRight"}`})}),t.jsx("img",{alt:"weapon",src:$})]}),s?t.jsxs("div",{className:"characterList",children:[t.jsx(d,{game:"StarRail",pities:o,setPities:r}),j]}):t.jsxs("div",{className:"weaponList",children:[t.jsx(d,{game:"StarRail",pities:o,setPities:r}),w]})]})}P.createRoot(document.getElementById("root")).render(t.jsx(f.StrictMode,{children:t.jsx("div",{className:"container",children:t.jsx(z,{})})}));