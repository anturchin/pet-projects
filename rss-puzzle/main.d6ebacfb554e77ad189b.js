(()=>{"use strict";var e,t,n={226:(e,t,n)=>{n.d(t,{Y:()=>r});class r{constructor(e){this.element=document.createElement(e.tag),e.classNames&&this.setCssSelector(e.classNames),e.textContent&&this.setTextContent(e.textContent),e.callback&&this.setCallback(e.callback)}getElement(){return this.element}addInnerElement(e){e instanceof r?this.element.append(e.getElement()):this.element.append(e)}setCssSelector(e){e.forEach((e=>this.element.classList.add(e)))}setTextContent(e){this.element.textContent=e}setCallback(e){this.element.addEventListener("click",e)}}},440:(e,t,n)=>{n.d(t,{q:()=>r});class r{static saveUserData({firstName:e,lastName:t}){const n={firstName:e,lastName:t},r=JSON.stringify(n);localStorage.setItem("userData",r)}static getUserData(){const e=localStorage.getItem("userData");return e?JSON.parse(e):null}static removeUserData(){localStorage.removeItem("userData")}static saveGameIndexes({currentRoundIndex:e}){const t={currentRoundIndex:e},n=JSON.stringify(t);localStorage.setItem("gameIndexes",n)}static getGameIndexes(){const e=localStorage.getItem("gameIndexes");return e?JSON.parse(e):null}static removeGameIndexes(){localStorage.removeItem("gameIndexes")}}},766:(e,t,n)=>{n.d(t,{S:()=>a});var r=n(226);class a{constructor(e){this.viewHtmlElementCreator=this.createElement(e)}createElement(e){return new r.Y(e)}getElement(){return this.viewHtmlElementCreator.getElement()}addInnerElement(e){this.viewHtmlElementCreator.addInnerElement(e)}render(e){console.log(e)}}}},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var s=r[e]={exports:{}};return n[e](s,s.exports,a),s.exports}a.m=n,a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,n)=>(a.f[n](e,t),t)),[])),a.u=e=>e+"."+{478:"bac98aa840dde70bed49",665:"0bd0b66522016dc3d4e7",894:"7e782135119b5f56fe6f",954:"d69385603c3c7e387195"}[e]+".js",a.miniCssF=e=>"css/"+e+"."+{665:"cfeb1191",894:"529b5e49",954:"0cc3b6b1"}[e]+".css",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="RSS Puzzle:",a.l=(n,r,s,o)=>{if(e[n])e[n].push(r);else{var l,i;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+s){l=u;break}}l||(i=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.setAttribute("data-webpack",t+s),l.src=n),e[n]=[r];var h=(t,r)=>{l.onerror=l.onload=null,clearTimeout(m);var a=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(r))),t)return t(r)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=h.bind(null,l.onerror),l.onload=h.bind(null,l.onload),i&&document.head.appendChild(l)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{if("undefined"!=typeof document){var e={792:0};a.f.miniCss=(t,n)=>{e[t]?n.push(e[t]):0!==e[t]&&{665:1,894:1,954:1}[t]&&n.push(e[t]=(e=>new Promise(((t,n)=>{var r=a.miniCssF(e),s=a.p+r;if(((e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=(o=n[r]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){var o;if((a=(o=s[r]).getAttribute("data-href"))===e||a===t)return o}})(r,s))return t();((e,t,n,r,s)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",a.nc&&(o.nonce=a.nc),o.onerror=o.onload=n=>{if(o.onerror=o.onload=null,"load"===n.type)r();else{var a=n&&n.type,l=n&&n.target&&n.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+l+")");i.name="ChunkLoadError",i.code="CSS_CHUNK_LOAD_FAILED",i.type=a,i.request=l,o.parentNode&&o.parentNode.removeChild(o),s(i)}},o.href=t,document.head.appendChild(o)})(e,s,0,t,n)})))(t).then((()=>{e[t]=0}),(n=>{throw delete e[t],n})))}}})(),(()=>{var e={792:0};a.f.j=(t,n)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var s=new Promise(((n,a)=>r=e[t]=[n,a]));n.push(r[2]=s);var o=a.p+a.u(t),l=new Error;a.l(o,(n=>{if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var s=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",l.name="ChunkLoadError",l.type=s,l.request=o,r[1](l)}}),"chunk-"+t,t)}};var t=(t,n)=>{var r,s,[o,l,i]=n,c=0;if(o.some((t=>0!==e[t]))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);i&&i(a)}for(t&&t(n);c<o.length;c++)s=o[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0},n=self.webpackChunkRSS_Puzzle=self.webpackChunkRSS_Puzzle||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{var e=a(766);class t extends e.S{constructor(){super({tag:"div",classNames:["container"],callback:null})}render(){throw new Error("Method not implemented.")}destroy(){throw new Error("Method not implemented.")}}class n extends e.S{constructor(){super({tag:"a",classNames:["footer__link"],callback:null,textContent:"anturchin"}),this.setLink()}setLink(){this.viewHtmlElementCreator.getElement().setAttribute("href","https://github.com/anturchin")}render(){throw new Error("Method not implemented.")}destroy(){throw new Error("Method not implemented.")}}class r extends e.S{constructor(){super({tag:"p",classNames:["footer__author"],callback:null,textContent:"The author's github: "}),this.setupFooterAuthorContent()}setupFooterAuthorContent(){this.viewHtmlElementCreator.addInnerElement((new n).getElement())}render(){throw new Error("Method not implemented.")}destroy(){throw new Error("Method not implemented.")}}class s extends e.S{constructor(){super({tag:"footer",classNames:["footer"],callback:null}),this.setupFooterContent()}setupFooterContent(){const e=new t;e.addInnerElement((new r).getElement()),this.viewHtmlElementCreator.addInnerElement(e.getElement())}render(){throw new Error("Method not implemented.")}destroy(){throw new Error("Method not implemented.")}}const o=a.p+"images/logo..svg";class l extends e.S{constructor(){super({tag:"img",classNames:["header__logo"],callback:null}),this.setImgPath()}setImgPath(){this.viewHtmlElementCreator.getElement().setAttribute("src",o)}}var i=a(440);class c extends e.S{constructor(e,t){super({tag:"button",classNames:["user__logout"],callback:null,textContent:"logout"}),this.router=e,this.header=t,this.setAddEventListener()}setAddEventListener(){this.viewHtmlElementCreator.getElement().addEventListener("click",(()=>{this.clearDataUserInLocalStorage(),this.header.updateWrapperHeader(),this.router.navigate("/login")}))}clearDataUserInLocalStorage(){i.q.removeUserData(),i.q.removeGameIndexes()}}class d extends e.S{constructor(e,t){super({tag:"p",classNames:["user__name"],callback:null,textContent:`${e} ${t}`})}}class u extends e.S{constructor(e,t,n,r){super({tag:"div",classNames:["user"],callback:null}),this.setupUserContent(e,t,n,r)}setupUserContent(e,t,n,r){[new d(e,t).getElement(),new c(n,r).getElement()].forEach((e=>this.viewHtmlElementCreator.addInnerElement(e)))}}class h extends e.S{constructor(e,t){super({tag:"div",classNames:["header__wrapper"],callback:null}),this.router=e,this.setupWrapperContent(t)}setupWrapperContent(e){const t=(new l).getElement();this.viewHtmlElementCreator.addInnerElement(t),this.renderUserComponent(e)}createUserComponent(e){const t=i.q.getUserData();return t?new u(t.firstName,t.lastName,this.router,e):null}renderUserComponent(e){if(this.isUserLoggedIn()){const t=this.createUserComponent(e);t&&this.viewHtmlElementCreator.addInnerElement(t.getElement())}}isUserLoggedIn(){return!!i.q.getUserData()}}class m extends e.S{constructor(e){super({tag:"header",classNames:["header"],callback:null}),this.router=e,this.setupHeaderContent()}setupHeaderContent(){const e=new h(this.router,this).getElement(),n=new t;n.addInnerElement(e),this.viewHtmlElementCreator.addInnerElement(n.getElement())}updateWrapperHeader(){this.viewHtmlElementCreator.getElement().innerHTML="",this.setupHeaderContent()}}class p extends e.S{constructor(e){super({tag:"main",classNames:["main"],callback:null}),this.router=e,this.setupMainContent()}setupMainContent(){const e=(new t).getElement();this.viewHtmlElementCreator.addInnerElement(e)}clearContent(e){e.innerHTML=""}render(e){const t=this.viewHtmlElementCreator.getElement().querySelector(".container");t&&this.clearContent(t);const n=e.getElement();null==t||t.append(n)}}class g{constructor({path:e,callback:t}){this.path=e,this.callback=t}}class f{constructor(){this.routes=[],this.mainInstance=null,this.headerInstance=null}addRoute({path:e,callback:t}){this.routes.push(new g({path:e,callback:t}))}addMainAndHeaderInstance(e,t){this.mainInstance=e,this.headerInstance=t}navigate(e){return t=this,n=void 0,a=function*(){const t=this.routes.find((t=>t.path===e));t?this.mainInstance&&this.headerInstance?(yield t.callback(this.mainInstance,this,this.headerInstance),console.log(`route: ${e}`)):this.mainInstance&&(yield t.callback(this.mainInstance,this),console.log(`route: ${e}`)):console.error(`not found route: ${e}`)},new((r=void 0)||(r=Promise))((function(e,s){function o(e){try{i(a.next(e))}catch(e){s(e)}}function l(e){try{i(a.throw(e))}catch(e){s(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(o,l)}i((a=a.apply(t,n||[])).next())}));var t,n,r,a}}var v=function(e,t,n,r){return new(n||(n=Promise))((function(a,s){function o(e){try{i(r.next(e))}catch(e){s(e)}}function l(e){try{i(r.throw(e))}catch(e){s(e)}}function i(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}i((r=r.apply(e,t||[])).next())}))};const E=[{path:"/login",callback:(e,t,n)=>v(void 0,void 0,void 0,(function*(){const{Login:r}=yield a.e(665).then(a.bind(a,665));n&&e.render(new r(t,n))}))},{path:"/start",callback:(e,t)=>v(void 0,void 0,void 0,(function*(){const{StartScreen:n}=yield a.e(894).then(a.bind(a,155));e.render(new n(t))}))},{path:"/game",callback:(e,t)=>v(void 0,void 0,void 0,(function*(){const{Game:n}=yield a.e(954).then(a.bind(a,38));e.render(new n(t))}))},{path:"/statistic",callback:(e,t)=>v(void 0,void 0,void 0,(function*(){const{Statistics:n}=yield a.e(478).then(a.bind(a,478));e.render(new n(t))}))}];(new class{constructor(){this.router=new f,this.header=new m(this.router),this.mainInstance=new p(this.router),this.footer=new s,this.setupRouter()}render(){const e=this.header.getElement(),t=this.mainInstance.getElement(),n=this.footer.getElement(),r=document.querySelector("body");r&&r.append(e,t,n)}isUserLoggedIn(){return!!i.q.getUserData()}setupRouter(){this.router.addMainAndHeaderInstance(this.mainInstance,this.header),E.forEach((({path:e,callback:t})=>{this.router.addRoute({path:e,callback:t})})),this.isUserLoggedIn()?this.router.navigate("/start"):this.router.navigate("/login")}}).render()})()})();