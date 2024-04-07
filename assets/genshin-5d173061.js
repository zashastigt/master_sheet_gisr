import{c as C,j as e,R,r as s}from"./client-c0733c20.js";import{u as E,g as v,A as u,F as g,a as F,S as H,P as p}from"./index-432f4125.js";import{g as N,H as W}from"./header-3ad83e53.js";const B={label:"Pyro",urlKey:"pyro"},D={label:"Cryo",urlKey:"cryo"},_={label:"Hydro",urlKey:"hydro"},A={label:"Electro",urlKey:"electro"},M={label:"Anemo",urlKey:"anemo"},T={label:"Geo",urlKey:"geo"},k={label:"Dendro",urlKey:"dendro"},J={pyro:B,cryo:D,hydro:_,electro:A,anemo:M,geo:T,dendro:k},V={label:"Sword",urlKey:"Sword"},q={label:"Claymore",urlKey:"Claymore"},Q={label:"Bow",urlKey:"Bow"},$={label:"Polearm",urlKey:"Polearm"},z={label:"Catalyst",urlKey:"Catalyst"},O={sword:V,claymore:q,bow:Q,polearm:$,catalyst:z},U="/master_sheet_gisr/assets/charGI-67b90e88.webp",X="/master_sheet_gisr/assets/weaponsGI-d3942744.webp";function Y(){const[a,G]=s.useState(!0),[x,i]=s.useState({}),[w,l]=s.useState({}),[S,b]=s.useState(!0),[n,j]=s.useState(""),[r,I]=s.useState([]),[c,f]=s.useState(!1),[h,K]=s.useState(!1),[d,o]=s.useState([]),m=E({query:"(max-width: 600px)"});if(s.useEffect(()=>{v().then(async y=>await N().then(t=>{i(u(y.Character,t.Genshin,t.Genshin.GIPity)),l(u(y.Weapon,t.Genshin,t.Genshin.GIPity)),o(t.Genshin.GIPity),b(!1)}))},[]),S)return e.jsx("div",{children:"Loading..."});const L=g(x,"Genshin",n,r,"Character",i),P=g(w,"Genshin",n,r,"Weapon",l);return e.jsxs(e.Fragment,{children:[e.jsx(F,{isMobile:m,filterLHidden:c,filterRHidden:h,listShown:a,filter:r,setFilter:I,element:J,elementImgs:"GenshinElementImgs",elementExt:"svg",group:O,groupImgs:"GenshinWeaponImgs",groupExt:"png"}),e.jsx(H,{searchValue:n,setSearchValue:j}),e.jsx(W,{isMobile:m,filterLHidden:c,setFilterLHidden:f,filterRHidden:h,setFilterRHidden:K,Links:[["../StarRail/","Star Rail"],["../Genshin/","Genshin Impact"],["../Genshin/Teams/","Genshin Teams"]]}),e.jsxs("div",{className:"switch",children:[e.jsx("img",{alt:"character",src:U}),e.jsx("button",{className:"",onClick:()=>G(!a),children:e.jsx("div",{className:`slider ${a?"sliderLeft":"sliderRight"}`})}),e.jsx("img",{className:"moreWhite",alt:"weapon",src:X})]}),a?e.jsxs("div",{className:"characterList",children:[e.jsx(p,{game:"Genshin",pities:d,setPities:o}),L]}):e.jsxs("div",{className:"weaponList",children:[e.jsx(p,{game:"Genshin",pities:d,setPities:o}),P]})]})}C.createRoot(document.getElementById("root")).render(e.jsx(R.StrictMode,{children:e.jsx("div",{className:"container",children:e.jsx(Y,{})})}));
