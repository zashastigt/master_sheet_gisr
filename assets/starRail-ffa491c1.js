import{c as j,j as e,R as w,r as t}from"./client-18074b33.js";import{b as K,F as c,a as P,S as f,P as o}from"./pityBox-d21b4d90.js";const E={label:"Fire",urlKey:"Fire"},L={label:"Ice",urlKey:"Ice"},v={label:"Physical",urlKey:"Physical"},I={label:"Lightning",urlKey:"Lightning"},N={label:"Wind",urlKey:"Wind"},H={label:"Imaginary",urlKey:"Imaginary"},F={label:"Quantum",urlKey:"Quantum"},W={fire:E,ice:L,physical:v,lightning:I,wind:N,imaginary:H,quantum:F},C={label:"Abundance",urlKey:"Abundance"},B={label:"Destruction",urlKey:"Destruction"},D={label:"Erudition",urlKey:"Erudition"},q={label:"Harmony",urlKey:"Harmony"},A={label:"Nihility",urlKey:"Nihility"},Q={label:"Preservation",urlKey:"Preservation"},V={label:"Hunt",urlKey:"Hunt"},k={abundance:C,destruction:B,Erudition:D,Harmony:q,Nihility:A,Preservation:Q,Hunt:V};function M(){const[a,u]=t.useState(!0),[h,m]=t.useState({}),[d,y]=t.useState({}),[g,S]=t.useState(!0),[s,p]=t.useState(""),[i,b]=t.useState([]),[l,n]=t.useState([]);if(t.useEffect(()=>{K().then(r=>{m(r.Characters),y(r.Weapons),n(r.SRPity),S(!1)})},[]),g)return e.jsx("div",{children:"Loading..."});const x=c(h,"StarRail",s,i,"Character"),R=c(d,"StarRail",s,i,"Weapon");return e.jsxs(e.Fragment,{children:[e.jsx(P,{listShown:a,filter:i,setFilter:b,element:W,elementImgs:"StarRailElementImgs",elementExt:"webp",group:k,groupImgs:"StarRailPathImgs",groupExt:"webp"}),e.jsx(f,{searchValue:s,setSearchValue:p}),e.jsxs("div",{className:"switch",children:[e.jsx("img",{alt:"character",src:"https://hsr.honeyhunterworld.com/img/menu/char.webp?x54196"}),e.jsx("button",{className:"",onClick:()=>u(!a),children:e.jsx("div",{className:`slider ${a?"sliderLeft":"sliderRight"}`})}),e.jsx("img",{alt:"weapon",src:"https://hsr.honeyhunterworld.com/img/menu/weapon.webp?x5419"})]}),a?e.jsxs("div",{className:"characterList",children:[e.jsx(o,{game:"StarRail",pities:l,setPities:n}),x]}):e.jsxs("div",{className:"weaponList",children:[e.jsx(o,{game:"StarRail",pities:l,setPities:n}),R]})]})}j.createRoot(document.getElementById("root")).render(e.jsx(w.StrictMode,{children:e.jsx("div",{className:"container",children:e.jsx(M,{})})}));
