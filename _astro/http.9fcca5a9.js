import{a as o,T as c}from"./jwt.5024b243.js";async function a(t,r){try{const e=await fetch(t,{credentials:"include",...r,headers:new Headers({"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${o.get(c)}`,...r?.headers??{}})}),n=await e.json();return e.ok?{response:n,error:void 0}:{response:void 0,error:n}}catch(e){return{response:void 0,error:{status:0,message:e.message}}}}async function d(t,r,e){return a(t,{...e,method:"POST",body:JSON.stringify(r)})}async function h(t,r,e){const n=new URLSearchParams(r).toString(),s=n?`${t}?${n}`:t;return a(s,{credentials:"include",method:"GET",...e})}async function p(t,r,e){return a(t,{...e,method:"PATCH",body:JSON.stringify(r)})}export{h as a,p as b,d as h};
