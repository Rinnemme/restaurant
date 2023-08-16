(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>f});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),s=t(667),c=t.n(s),d=new URL(t(562),t.b),l=new URL(t(600),t.b),u=i()(r()),p=c()(d),h=c()(l);u.push([e.id,`@font-face {\n    font-family: 'Quicksand';\n    font-style: normal;\n    font-weight: 400;\n    font-display: swap;\n    src: url(${p}) format('woff2');\n  }\n\n  @font-face {\n    font-family: 'Libre Baskerville';\n    font-style: normal;\n    font-weight: 400;\n    font-display: swap;\n    src: url(${h}) format('woff2');\n  }\n\n:root {\n    --blue: rgb(0,114,181);\n    --blue-semiopaque: rgba(0,114,181,0.5);\n    --green: rgb(64, 159, 91);\n    --green-semiopaque: rgba(64, 159, 91,0.5);\n    --amaranth: rgb(182,23,75);\n    --amaranth-semiopaque: rgba(182,23,75,0.5);\n    --black: rgb(50,50,50);\n}\n\nbody {\n    margin:0;\n    display: flex;\n    color: var(--black);\n    flex-direction: column;\n    box-sizing:border-box;\n    font-family: 'Quicksand';\n    background: linear-gradient(rgba(20,20,20,0.5),rgba(20,20,20,0.5)), url("https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80");\n    background-attachment:fixed;\n    /* background-color:rgb(240, 240, 240); */\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items:center;\n}\n\n#header {\n    width:100%;\n    height:50px;\n    margin-bottom:50px;\n    display:flex;\n    align-items:center;\n    position:sticky;\n    top:0;\n    justify-content:center;\n    background-color:white;\n    box-shadow:0px 5px 20px rgba(0, 0, 0, 0.534);\n}\n\n#logo {\n    width:30px;\n    position:absolute;\n    left:10px;\n}\n\n#header>button {\n    height:100%;\n    width: 90px;\n    background-color:transparent;\n    border-left: 1px solid rgb(240, 240, 240);\n    border-top: none;\n    border-bottom:none;\n    border-right:none;\n    color: var(--black);\n    font-family: 'Quicksand';\n}\n\n#header>button:hover {\n    cursor:pointer;\n    color:white;\n    transition:.3s ease-in;\n}\n\n#header>button:active {\n    background-color:black;\n    transition:.1s;\n}\n\n#home-button:hover {\n    background-color: var(--blue);\n}\n\n#menu-button:hover {\n    background-color: var(--green);\n}\n\n#locations-button:hover {\n    background-color: var(--amaranth)\n}\n\n#header>#locations-button {\n    border-right:1px solid rgb(240, 240, 240);\n}\n\n#page-content {\n    width:clamp(350px,100%,700px);\n    display:flex;\n    flex-direction:column;\n    gap:40px;\n    margin-bottom:50px;\n}\n\n#page-content>div {\n    box-shadow:3px 3px 8px rgba(0, 0, 0, 0.1);\n}\n\n#title-card {\n    width:100%;\n    height:300px;\n    font-size:3em;\n    font-family: 'Libre Baskerville';\n    color:white;\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);\n}\n\n.info-header {\n    height:60px;\n    color:white;\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    font-family: 'Libre Baskerville';\n    font-size:1.3em;\n    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);\n}\n\n.blue-br {\n    background-color:var(--blue);\n}\n\n.green-br {\n    background-color:var(--green);\n}\n\n.amaranth-br {\n    background-color:var(--amaranth);\n}\n\n.black-br {\n    background-color:var(--black);\n}\n\n.info-main {\n    background-color:white;\n    padding:30px;\n    display:grid;\n    gap:30px;\n    grid-template-columns: repeat(auto-fit, minmax(200px,1fr));\n    grid-auto-rows: 100%;\n}\n\n.info-main>.info-image {\n    width:100%;\n    height:165px;\n    object-fit: cover;\n}`,""]);const f=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=o.base?c[0]+o.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var f=r(h,o);o.byIndex=s,n.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},600:(e,n,t)=>{e.exports=t.p+"501a90b418c10528cd4e.woff2"},562:(e,n,t)=>{e.exports=t.p+"21e7a597c46fc2f57f9e.woff2"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=t.p+"83c5f723e5cf7bda402a.png";var n=t(379),o=t.n(n),r=t(795),a=t.n(r),i=t(569),s=t.n(i),c=t(565),d=t.n(c),l=t(216),u=t.n(l),p=t(589),h=t.n(p),f=t(28),m={};m.styleTagTransform=h(),m.setAttributes=d(),m.insert=s().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=u(),o()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const b=[{name:"Washington Park (Denver)",address:"701 S Franklin St, Denver, CO 80209",phone:"(393) 123-4567",weekhours:"Mon - Fri 8:00 - 20:00",weekendhours:"Sat & Sun 08:00 - 14:00",photo:t.p+"9738a0651e6189705368.png"},{name:"Prospect Park (New York)",address:"Prospect Park, Brooklyn, NY 11215",phone:"(212) 123-4567",weekhours:"Mon - Fri 8:00 - 20:00",weekendhours:"Sat & Sun 08:00 - 14:00",photo:t.p+"b1dc45a5bd8ecd1e9df2.png"},{name:"Mission Trails Regional Park (San Diego)",address:"1 Father Junipero Serra Trail, San Diego, CA 92119",phone:"(619) 123-4567",weekhours:"Mon - Fri 8:00 - 20:00",weekendhours:"Sat & Sun 08:00 - 14:00",photo:t.p+"b71eeead6ff4f20b691a.png"},{name:"Hollinger Park (Ontario)",address:"565 Algonquin Blvd E, Timmins, ON P4N 1B7, Canada",phone:"+1 705-264-1275",weekhours:"Mon - Fri 8:00 - 20:00",weekendhours:"Sat & Sun 08:00 - 14:00",photo:t.p+"5d7d77532ee59300ae14.png"}];function g(){const e=document.getElementById("page-content");e.innerHTML="";const n=document.createElement("div");n.setAttribute("id","title-card"),n.textContent="Nomnivore",n.style.background="linear-gradient(var(--blue-semiopaque),var(--blue)), url('https://media.istockphoto.com/id/627281636/photo/earth-night-space.jpg?s=612x612&w=0&k=20&c=nJyJIXDX2InYCCcP3rIxFEhGmJ_x8cEmFK90CeD9Y0s=')",n.style.backgroundSize="cover",e.appendChild(n);const t=document.createElement("div");t.classList.add("info-block");const o=document.createElement("div");o.classList.add("info-main"),o.innerHTML="Welcome to Nomnivore! We pride ourselves on being \n    the first restaurant ever tried by the aliens whose existence was uncovered to the \n    public in the Year of our Lord 2023, and reasonably so, given that we truly have a \n    bit of everything our magnificent planet offers. We're like if the New York City food \n    scene was a single restaurant! <br><br>\n    \n    However, unlike certain chains whose extensive and diverse menu seems to suggest a \n    wide breadth of culinary expertise - but whose dishes feel appropriately devoid of \n    love and personality for an establishment bearing 'factory' in its name - our dishes \n    are made with love, and apart from a few staples, the menu of our locations varies \n    specifically because we only offer that with which we know our chefs are intimately \n    familiar and will delight in and excel at cooking.",t.appendChild(o),e.appendChild(t);const r=document.createElement("div");r.classList.add("info-block");const a=document.createElement("div");a.classList.add("info-header"),a.classList.add("blue-br"),a.textContent="History";const i=document.createElement("div");i.classList.add("info-main"),i.innerHTML="Since time immemorial, all carbon-based lifeforms have \n    required sustenance in order to perpetuate their meager existence, the meaning of \n    which has been contemplated with considerable vigor from the moment René Descartes \n    discovered thinking. However, it was only relatively recently in the history of this \n    particular galaxy's sentient life when we learned that this sustenance can be prepared \n    in a way that not only is effective at sustaining us, but which causes the gustatory \n    cells with which the human tongue is rife to send signals to our brain that result in \n    a release of chemicals we have collectively decided constitute something called pleasure. \n    <br><br>\n    \n    From here, two things happened: first, beautifully diverse methods of curating and \n    preparing foods were developed in all corners of our Earth; and second, through a \n    combination of imperialism and appropriation, cheap imitations of one culture's techniques \n    began cropping up within other cultures, diminishing their differentiable qualities and \n    consequently lowering the value that diversity in food preparation provides. Nomnivore \n    was established in 2023 to act as an antithesis to the latter, which is to say that our\n    history is only beginning, but our mission is one most imperative to humanity's collective\n    culinary integrity.",r.appendChild(a),r.appendChild(i),e.appendChild(r)}window.onload=(function(){const n=document.getElementById("content"),t=document.createElement("div");t.setAttribute("id","header");const o=document.createElement("img");o.setAttribute("id","logo"),o.src=e;const r=document.createElement("button");r.setAttribute("id","home-button"),r.textContent="Home",r.onclick=function(){g()};const a=document.createElement("button");a.setAttribute("id","menu-button"),a.textContent="Menu";const i=document.createElement("button");i.setAttribute("id","locations-button"),i.textContent="Locations",i.onclick=function(){!function(){const e=document.getElementById("page-content");e.innerHTML="";const n=document.createElement("div");n.setAttribute("id","title-card"),n.textContent="Locations",n.style.background="linear-gradient(var(--amaranth-semiopaque),var(--amaranth)), url('https://previews.123rf.com/images/artphotoclub/artphotoclub1504/artphotoclub150401005/38814340-vintage-paper-with-world-map.jpg')",n.style.backgroundSize="cover",e.appendChild(n);const t=document.createElement("div");t.classList.add("info-block");const o=document.createElement("div");o.classList.add("info-main"),o.innerHTML="All of our locations are subterranean edifices, accessible\n    via hatches located somewhere within various public parks, which we have purchased from \n    their respective cities, and which we maintain with great care. If you need guidance toward \n    the entrance hatch for any particular location, feel free to call that location.",t.appendChild(o),e.appendChild(t),b.forEach((n=>{const t=document.createElement("div");t.classList.add("info-block");const o=document.createElement("div");o.classList.add("info-header"),o.classList.add("amaranth-br"),o.textContent=`${n.name}`;const r=document.createElement("div");r.classList.add("info-main");const a=document.createElement("div");a.innerHTML=`${n.address}<br>${n.phone}<br>${n.weekhours}<br>${n.weekendhours}`;const i=document.createElement("img");i.classList.add("info-image"),i.src=n.photo,r.appendChild(a),r.appendChild(i),t.appendChild(o),t.appendChild(r),e.appendChild(t)}))}()},t.appendChild(o),t.appendChild(r),t.appendChild(a),t.appendChild(i),n.appendChild(t);const s=document.createElement("div");s.setAttribute("id","page-content"),n.appendChild(s)}(),void g())})()})();