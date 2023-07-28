import"./jwt.5024b243.js";import{b as C,a as $}from"./http.9fcca5a9.js";var P=Object.defineProperty,L=(a,e,t)=>e in a?P(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,y=(a,e,t)=>(L(a,typeof e!="symbol"?e+"":e,t),t);function T(a){return(a||"").replace(/^\d+-/,"")}function R(a){let e=a>>16&255,t=a>>8&255,i=a&255;return`rgb(${e},${t},${i})`}function h(a,e={},t){let i=document.createElementNS("http://www.w3.org/2000/svg",a);for(let s in e)!e.hasOwnProperty(s)||i.setAttribute(s,e[s]);return t&&t.appendChild(i),i}const m=2.7,D=4,S=2,k={black:["#000"],gray:["#000","#333","#666","#999","#ccc","#ddd","#eee"],white:["#fff"],red:["#cf2a27","#ea9999","#eo6666","#cc0000","#990000","#660000"],orange:["#ff9900","#f9cb9c","#f6b26b","#e69138","#b45f06","#783f04"],yellow:["#ffff00","#ffe599","#ffd966","#f1c232","#bf9000","#7f6000"],green:["#009e0f","#b6d7a8","#93c47d","#6aa84f","#38761d","#274e13"],cyan:["#00ffff","#a2c4c9","#76a5af","#45818e","#134f5c","#0c343d"],blue:["#2b78e4","#9fc5f8","#6fa8dc","#597eaa","#085394","#073763"],purple:["#9900ff","#b4a7d6","#8e7cc3","#674ea7","#351c75","#20124d"],pink:["#ff00ff","#d5a6bd","#c27ba0","#a64d79","#741b47","#4c1130"]};class A{constructor(e,t){y(this,"svgRoot"),y(this,"fontFamily"),y(this,"canvasRenderingContext2D"),this.svgRoot=e,this.fontFamily=t,this.canvasRenderingContext2D=document.createElement("canvas").getContext("2d")}render(e,t){let i=e.typeID;i in this?this[i](e,t):console.log(`'${i}' control type not implemented`)}parseColor(e,t){return e===void 0?`rgb(${t})`:R(e)}parseFontProperties(e){var t,i,s;return{style:(t=e.properties)!=null&&t.italic?"italic":"normal",weight:(i=e.properties)!=null&&i.bold?"bold":"normal",size:(s=e.properties)!=null&&s.size?e.properties.size+"px":"13px",family:this.fontFamily}}measureText(e,t){return this.canvasRenderingContext2D.font=t,this.canvasRenderingContext2D.measureText(e)}drawRectangle(e,t){var i,s,o,r,c,l;h("rect",{x:parseInt(e.x)+m/2,y:parseInt(e.y)+m/2,width:parseInt((i=e.w)!=null?i:e.measuredW)-m,height:parseInt((s=e.h)!=null?s:e.measuredH)-m,rx:S,fill:this.parseColor((o=e.properties)==null?void 0:o.color,"255,255,255"),"fill-opacity":(c=(r=e.properties)==null?void 0:r.backgroundAlpha)!=null?c:1,stroke:this.parseColor((l=e.properties)==null?void 0:l.borderColor,"0,0,0"),"stroke-width":m},t)}addText(e,t,i,s){var o,r;let c=(o=e.properties.text)!=null?o:"",l=parseInt(e.x),n=parseInt(e.y),d=this.parseFontProperties(e),u=this.measureText(c,`${d.style} ${d.weight} ${d.size} ${d.family}`),g=s==="center"?l+((r=e.w)!=null?r:e.measuredW)/2-u.width/2:l,b=n+e.measuredH/2+u.actualBoundingBoxAscent/2,I=h("text",{x:g,y:b,fill:i,"font-style":d.style,"font-weight":d.weight,"font-size":d.size},t);if(!c.includes("{color:")){let f=h("tspan",{},I);f.textContent=c;return}c.split(/{color:|{color}/).forEach(f=>{if(f.includes("}")){let[p,E]=f.split("}");if(!p.startsWith("#")){let v=parseInt(p.slice(-1));p=isNaN(v)?k[p][0]:k[p][v]}let x=h("tspan",{fill:p},I);x.textContent=E}else{let p=h("tspan",{},I);p.textContent=f}})}TextArea(e,t){this.drawRectangle(e,t)}Canvas(e,t){this.drawRectangle(e,t)}Label(e,t){var i;this.addText(e,t,this.parseColor((i=e.properties)==null?void 0:i.color,"0,0,0"),"left")}TextInput(e,t){var i;this.drawRectangle(e,t),this.addText(e,t,this.parseColor((i=e.properties)==null?void 0:i.textColor,"0,0,0"),"center")}Arrow(e,t){var i,s,o;let r=parseInt(e.x),c=parseInt(e.y),{p0:l,p1:n,p2:d}=e.properties,u;((i=e.properties)==null?void 0:i.stroke)==="dotted"?u="0.8 12":((s=e.properties)==null?void 0:s.stroke)==="dashed"&&(u="28 46");let g={x:(d.x-l.x)*n.x,y:(d.y-l.y)*n.x};h("path",{d:`M${r+l.x} ${c+l.y}Q${r+l.x+g.x+g.y*n.y*3.6} ${c+l.y+g.y+-g.x*n.y*3.6} ${r+d.x} ${c+d.y}`,fill:"none",stroke:this.parseColor((o=e.properties)==null?void 0:o.color,"0,0,0"),"stroke-width":D,"stroke-linecap":"round","stroke-linejoin":"round","stroke-dasharray":u},t)}Icon(e,t){var i;let s=parseInt(e.x),o=parseInt(e.y),r=10;h("circle",{cx:s+r,cy:o+r,r,fill:this.parseColor((i=e.properties)==null?void 0:i.color,"0,0,0")},t),e.properties.icon.ID==="check-circle"&&h("path",{d:`M${s+4.5} ${o+r}L${s+8.5} ${o+r+4} ${s+15} ${o+r-2.5}`,fill:"none",stroke:"#fff","stroke-width":3.5,"stroke-linecap":"round","stroke-linejoin":"round"},t)}HRule(e,t){var i,s,o,r;let c=parseInt(e.x),l=parseInt(e.y),n;((i=e.properties)==null?void 0:i.stroke)==="dotted"?n="0.8, 8":((s=e.properties)==null?void 0:s.stroke)==="dashed"&&(n="18, 30"),h("path",{d:`M${c} ${l}L${c+parseInt((o=e.w)!=null?o:e.measuredW)} ${l}`,fill:"none",stroke:this.parseColor((r=e.properties)==null?void 0:r.color,"0,0,0"),"stroke-width":m,"stroke-linecap":"round","stroke-linejoin":"round","stroke-dasharray":n},t)}__group__(e,t){var i;const s=((i=e?.properties)==null?void 0:i.controlName)||"",o=T(s);let r=localStorage.getItem(o)==="done";const c=s.startsWith("check:");if(!r&&c){const n=s.replace("check:",""),d=T(n);r=localStorage.getItem(d)==="done"}let l=h("g",{...s?{class:`clickable-group ${r?"done":""}`,"data-group-id":s}:{}},t);e.children.controls.control.sort((n,d)=>n.zOrder-d.zOrder).forEach(n=>{n.x=parseInt(n.x,10)+parseInt(e.x,10),n.y=parseInt(n.y,10)+parseInt(e.y,10),this.render(n,l)})}}async function B(a,e={}){if(e={padding:5,fontFamily:"balsamiq",fontURL:"https://fonts.gstatic.com/s/balsamiqsans/v3/P5sEzZiAbNrN8SB3lQQX7Pncwd4XIA.woff2",...e},e.fontURL){let n=new FontFace(e.fontFamily,`url(${e.fontURL})`);await n.load(),document.fonts.add&&document.fonts.add(n)}let t=a.mockup,i=t.measuredW-t.mockupW-e.padding,s=t.measuredH-t.mockupH-e.padding,o=parseInt(t.mockupW)+e.padding*2,r=parseInt(t.mockupH)+e.padding*2,c=h("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:`${i} ${s} ${o} ${r}`,style:"font-family: balsamiq"}),l=new A(c,e.fontFamily);return t.controls.control.sort((n,d)=>n.zOrder-d.zOrder).forEach(n=>{l.render(n,c)}),c}async function w({resourceId:a,resourceType:e,topicId:t}){return await C("https://api.roadmap.sh/v1-toggle-mark-resource-done",{resourceId:a,resourceType:e,topicId:t})}async function M({resourceId:a,resourceType:e}){return await $("https://api.roadmap.sh/v1-get-user-resource-progress",{resourceId:a,resourceType:e})}class O{constructor(){this.resourceId="",this.resourceType="",this.jsonUrl="",this.loaderHTML=null,this.containerId="resource-svg-wrap",this.loaderId="resource-loader",this.init=this.init.bind(this),this.onDOMLoaded=this.onDOMLoaded.bind(this),this.jsonToSvg=this.jsonToSvg.bind(this),this.handleSvgClick=this.handleSvgClick.bind(this),this.prepareConfig=this.prepareConfig.bind(this),this.switchRoadmap=this.switchRoadmap.bind(this)}get loaderEl(){return document.getElementById(this.loaderId)}get containerEl(){return document.getElementById(this.containerId)}prepareConfig(){if(!this.containerEl)return!1;this.loaderHTML=this.loaderEl.innerHTML;const e=this.containerEl.dataset;return this.resourceType=e.resourceType,this.resourceId=e.resourceId,this.jsonUrl=e.jsonUrl,!0}async topicToggleDone(){const{response:e,error:t}=await M({resourceId:this.resourceId,resourceType:this.resourceType});if(!e){console.error(t);return}const{done:i}=e;i.forEach(s=>{const o=document.querySelector(`[data-group-id$="-${s}"]`);o&&o.classList.add("done")})}jsonToSvg(e){return e?(console.log(this.resourceType,this.resourceId),this.containerEl.innerHTML=this.loaderHTML,Promise.all([fetch(e).then(t=>t.json()).then(t=>B(t,{fontURL:"/fonts/balsamiq.woff2"})).then(t=>{this.containerEl.replaceChildren(t)}).catch(t=>{const i=`
          <strong>There was an error.</strong><br>
          
          Try loading the page again. or submit an issue on GitHub with following:<br><br>

          ${t.message} <br /> ${t.stack}
        `;this.containerEl.innerHTML=`<div class="error py-5 text-center text-red-600 mx-auto">${i}</div>`}),this.topicToggleDone()])):(console.error("jsonUrl not defined in frontmatter"),null)}onDOMLoaded(){if(!this.prepareConfig())return;const t=new URLSearchParams(window.location.search).get("r");t?this.switchRoadmap(`/jsons/roadmaps/${t}.json`):this.jsonToSvg(this.jsonUrl)}switchRoadmap(e){const t=e.split("/").pop().replace(".json","");if(window?.history?.pushState){const s=new URL(window.location),o=this.resourceType[0];s.searchParams.delete(o),s.searchParams.set(o,t),window.history.pushState(null,"",s.toString())}const i=this.resourceType.replace(/\b\w/g,s=>s.toUpperCase());window.fireEvent({category:`${i.replace("-","")}Click`,action:`${this.resourceId}/switch-version`,label:`${t}`}),this.jsonToSvg(e).then(()=>{this.containerEl.setAttribute("style","")})}handleSvgClick(e){const t=e.target.closest("g")||{},i=t.dataset?t.dataset.groupId:"";if(!i)return;if(e.stopImmediatePropagation(),/^ext_link/.test(i)){window.open(`https://${i.replace("ext_link:","")}`);return}if(/^json:/.test(i)){const o=i.replace("json:","");this.switchRoadmap(o);return}if(/^check:/.test(i)){window.dispatchEvent(new CustomEvent(`${this.resourceType}.topic.toggle`,{detail:{topicId:i.replace("check:",""),resourceType:this.resourceType,resourceId:this.resourceId}}));return}const s=i.replace(/^\d+-/,"");window.dispatchEvent(new CustomEvent(`${this.resourceType}.topic.click`,{detail:{topicId:s,resourceId:this.resourceId,resourceType:this.resourceType}}))}init(){window.addEventListener("DOMContentLoaded",this.onDOMLoaded),window.addEventListener("click",this.handleSvgClick)}}const j=new O;j.init();class U{constructor(){this.init=this.init.bind(this),this.onScroll=this.onScroll.bind(this),this.shareIconsId="page-share-icons"}get shareIconsEl(){return document.getElementById(this.shareIconsId)}onScroll(){if(window.scrollY<100||window.innerWidth<1050)return this.shareIconsEl.classList.add("hidden"),null;this.shareIconsEl.classList.remove("hidden")}init(){this.shareIconsEl&&window.addEventListener("scroll",this.onScroll,{passive:!0})}}const F=new U;F.init();class q{constructor(){this.overlayId="topic-overlay",this.contentId="topic-content",this.loaderId="topic-loader",this.topicBodyId="topic-body",this.topicActionsId="topic-actions",this.markTopicDoneId="mark-topic-done",this.markTopicPendingId="mark-topic-pending",this.closeTopicId="close-topic",this.contributionTextId="contrib-meta",this.activeResourceType=null,this.activeResourceId=null,this.activeTopicId=null,this.handleRoadmapTopicClick=this.handleRoadmapTopicClick.bind(this),this.handleBestPracticeTopicClick=this.handleBestPracticeTopicClick.bind(this),this.handleBestPracticeTopicToggle=this.handleBestPracticeTopicToggle.bind(this),this.handleBestPracticeTopicPending=this.handleBestPracticeTopicPending.bind(this),this.close=this.close.bind(this),this.resetDOM=this.resetDOM.bind(this),this.populate=this.populate.bind(this),this.handleOverlayClick=this.handleOverlayClick.bind(this),this.markAsDone=this.markAsDone.bind(this),this.markAsPending=this.markAsPending.bind(this),this.querySvgElementsByTopicId=this.querySvgElementsByTopicId.bind(this),this.rightClickListener=this.rightClickListener.bind(this),this.isTopicDone=this.isTopicDone.bind(this),this.init=this.init.bind(this)}get loaderEl(){return document.getElementById(this.loaderId)}get markTopicDoneEl(){return document.getElementById(this.markTopicDoneId)}get markTopicPendingEl(){return document.getElementById(this.markTopicPendingId)}get topicActionsEl(){return document.getElementById(this.topicActionsId)}get contributionTextEl(){return document.getElementById(this.contributionTextId)}get contentEl(){return document.getElementById(this.contentId)}get overlayEl(){return document.getElementById(this.overlayId)}rightClickListener(e){console.log(e.detail);const t=e.target?.closest("g")?.dataset?.groupId;t&&(e.preventDefault(),console.log("Right click on topic",t,this.activeResourceId,this.activeResourceType),this.isTopicDone(t)?this.markAsPending(t,this.activeResourceId,this.activeResourceType):this.markAsDone(t,this.activeResourceId,this.activeResourceType))}resetDOM(e=!1){e?this.overlayEl.classList.add("hidden"):this.overlayEl.classList.remove("hidden"),this.loaderEl.classList.remove("hidden"),this.topicActionsEl.classList.add("hidden"),this.contributionTextEl.classList.add("hidden"),this.contentEl.replaceChildren("")}close(){this.resetDOM(!0),this.activeResourceId=null,this.activeTopicId=null}isTopicDone(e){const t=e.replace(/^\d+-/,"");return document.querySelector(`[data-group-id$="-${t}"]`)?.classList.contains("done")}populate(e){this.contentEl.replaceChildren(e),this.loaderEl.classList.add("hidden"),this.topicActionsEl.classList.remove("hidden"),this.contributionTextEl.classList.remove("hidden"),this.isTopicDone(this.activeTopicId)?(this.markTopicDoneEl.classList.add("hidden"),this.markTopicPendingEl.classList.remove("hidden")):(this.markTopicDoneEl.classList.remove("hidden"),this.markTopicPendingEl.classList.add("hidden"))}renderTopicFromUrl(e){return fetch(e).then(t=>t.text()).then(t=>new DOMParser().parseFromString(t,"text/html").getElementById("main-content")).then(t=>{this.populate(t)}).catch(t=>{console.error(t),this.populate("Error loading the content!")})}handleBestPracticeTopicToggle(e){const{resourceId:t,topicId:i}=e.detail;if(!i||!t){console.log("Missing topic or bestPracticeId: ",e.detail);return}localStorage.getItem(i)==="done"?this.markAsPending(i,t,"best-practice"):this.markAsDone(i,t,"best-practice")}handleBestPracticeTopicPending(e){const{resourceId:t,topicId:i}=e.detail;if(!i||!t){console.log("Missing topic or bestPracticeId: ",e.detail);return}this.markAsPending(i,t,"best-practice")}handleBestPracticeTopicClick(e){const{resourceId:t,topicId:i}=e.detail;if(!i||!t){console.log("Missing topic or bestPracticeId: ",e.detail);return}this.activeResourceType="best-practice",this.activeResourceId=t,this.activeTopicId=i,this.resetDOM();const s=`/best-practices/${t}/${i.replaceAll(":","/")}`;this.renderTopicFromUrl(s).then(()=>null)}handleRoadmapTopicClick(e){const{resourceId:t,topicId:i}=e.detail;if(console.log(e.detail),!i||!t){console.log("Missing topic or roadmap: ",e.detail);return}this.activeResourceType="roadmap",this.activeResourceId=t,this.activeTopicId=i,this.resetDOM();const s=`/${t}/${i.replaceAll(":","/")}`;window.fireEvent({category:"RoadmapClick",action:`${t}/load-topic`,label:s}),this.renderTopicFromUrl(s).then(()=>null)}querySvgElementsByTopicId(e){const t=[];return document.querySelectorAll(`[data-group-id$="-${e}"]`).forEach(i=>{const s=i?.dataset?.groupId||"";new RegExp(`^\\d+-${e}$`).test(s)&&t.push(i)}),document.querySelectorAll(`[data-group-id="${e}"]`).forEach(i=>{t.push(i)}),document.querySelectorAll(`[data-group-id="check:${e}"]`).forEach(i=>{t.push(i)}),t}async markAsDone(e,t,i){const s=e.replace(/^\d+-/,"");console.log("Marking as done: ",s,t,i);const{response:o,error:r}=await w({resourceId:t,topicId:s,resourceType:i});o?(this.close(),this.querySvgElementsByTopicId(s).forEach(c=>{c?.classList?.add("done")})):console.error(r)}async markAsPending(e,t,i){const s=e.replace(/^\d+-/,""),{response:o,error:r}=await w({resourceId:t,topicId:s,resourceType:i});o?(this.close(),this.querySvgElementsByTopicId(s).forEach(c=>{c?.classList?.remove("done")})):console.error(r)}handleOverlayClick(e){if(!e.target.closest(`#${this.topicBodyId}`)){this.close();return}(e.target.id===this.markTopicDoneId||e.target.closest(`#${this.markTopicDoneId}`))&&this.markAsDone(this.activeTopicId,this.activeResourceId,this.activeResourceType),(e.target.id===this.markTopicPendingId||e.target.closest(`#${this.markTopicPendingId}`))&&this.markAsPending(this.activeTopicId,this.activeResourceId,this.activeResourceType);const o=e.target.dataset.popup||e.target.closest("button[data-popup]");(e.target.id===this.closeTopicId||e.target.closest(`#${this.closeTopicId}`)||o)&&this.close()}init(){window.addEventListener("best-practice.topic.click",this.handleBestPracticeTopicClick),window.addEventListener("best-practice.topic.toggle",this.handleBestPracticeTopicToggle),window.addEventListener("roadmap.topic.click",this.handleRoadmapTopicClick),window.addEventListener("click",this.handleOverlayClick),window.addEventListener("contextmenu",this.rightClickListener),window.addEventListener("keydown",e=>{e.key.toLowerCase()==="escape"&&this.close()})}}const z=new q;z.init();
