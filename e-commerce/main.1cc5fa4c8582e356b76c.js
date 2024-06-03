(()=>{"use strict";var t,e,n={385:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},185:(t,e,n)=>{n.d(e,{Y:()=>s});class s{constructor(t){this.element=document.createElement(t.tag),t.classNames&&this.setCssSelector(t.classNames),t.textContent&&this.setTextContent(t.textContent),t.callback&&this.setCallback(t.callback)}getElement(){return this.element}addInnerElement(t){t instanceof s?this.element.append(t.getElement()):this.element.append(t)}setCssSelector(t){t.forEach((t=>{this.element.classList.add(t)}))}setTextContent(t){this.element.textContent=t}setInnerHtml(t){this.element.innerHTML=t}setCallback(t){this.element.addEventListener("click",t)}}},241:(t,e,n)=>{n.d(e,{q:()=>s});class s{static saveUserData(t){const e=JSON.stringify(t);localStorage.setItem("userData",e)}static getUserData(){const t=localStorage.getItem("userData");return t?JSON.parse(t):null}static removeUserData(){localStorage.removeItem("userData")}static saveToken(t){localStorage.setItem("authToken",t)}static getToken(){return localStorage.getItem("authToken")}static removeToken(){localStorage.removeItem("authToken")}}},940:(t,e,n)=>{n.d(e,{S:()=>r});var s=n(185);class r{constructor(t){this.viewHtmlElement=this.createElement(t)}createElement(t){return new s.Y(t)}getElement(){return this.viewHtmlElement.getElement()}addInnerElement(t){this.viewHtmlElement.addInnerElement(t)}render(t){console.log(t)}}},848:(t,e,n)=>{n.d(e,{$:()=>r});var s=n(940);class r extends s.S{constructor(t){super({tag:"button",classNames:["button"]}),this.setupInput(t),this.addClickHandler(t.onClick)}setupInput(t){const e=this.getElement();e.textContent=t.label,t.disabled&&(e.disabled=t.disabled)}addClickHandler(t){t&&this.getElement().addEventListener("click",t)}}},25:(t,e,n)=>{t.exports=n.p+"images/free-icon-online-shopping-7619281..png"}},s={};function r(t){var e=s[t];if(void 0!==e)return e.exports;var o=s[t]={exports:{}};return n[t](o,o.exports,r),o.exports}r.m=n,r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.f={},r.e=t=>Promise.all(Object.keys(r.f).reduce(((e,n)=>(r.f[n](t,e),e)),[])),r.u=t=>t+"."+{174:"c61a233ac08f0c27cacf",437:"031b7fb9df44b99c4508",452:"6b0e139d7539d92aff19",544:"27a4e13e39d5be4eea8a",666:"5606cc54703a5b1eb67d",827:"cf38aa05b4fe39db4abd",951:"b7a8136427d153e5864f",983:"d8babdc00a8bf22a54fd"}[t]+".js",r.miniCssF=t=>"css/"+t+"."+{174:"c2ab9bb4",544:"30a799a5",666:"137e0079",827:"65f5934e",951:"46094154",983:"dbe55be9"}[t]+".css",r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t={},e="e-commerce:",r.l=(n,s,o,i)=>{if(t[n])t[n].push(s);else{var a,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==e+o){a=u;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",e+o),a.src=n),t[n]=[s];var h=(e,s)=>{a.onerror=a.onload=null,clearTimeout(m);var r=t[n];if(delete t[n],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((t=>t(s))),e)return e(s)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),l&&document.head.appendChild(a)}},r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var s=n.length-1;s>-1&&(!t||!/^http(s?):/.test(t));)t=n[s--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{if("undefined"!=typeof document){var t={792:0};r.f.miniCss=(e,n)=>{t[e]?n.push(t[e]):0!==t[e]&&{174:1,544:1,666:1,827:1,951:1,983:1}[e]&&n.push(t[e]=(t=>new Promise(((e,n)=>{var s=r.miniCssF(t),o=r.p+s;if(((t,e)=>{for(var n=document.getElementsByTagName("link"),s=0;s<n.length;s++){var r=(i=n[s]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===t||r===e))return i}var o=document.getElementsByTagName("style");for(s=0;s<o.length;s++){var i;if((r=(i=o[s]).getAttribute("data-href"))===t||r===e)return i}})(s,o))return e();((t,e,n,s,o)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",r.nc&&(i.nonce=r.nc),i.onerror=i.onload=n=>{if(i.onerror=i.onload=null,"load"===n.type)s();else{var r=n&&n.type,a=n&&n.target&&n.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+r+": "+a+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=a,i.parentNode&&i.parentNode.removeChild(i),o(l)}},i.href=e,document.head.appendChild(i)})(t,o,0,e,n)})))(e).then((()=>{t[e]=0}),(n=>{throw delete t[e],n})))}}})(),(()=>{r.b=document.baseURI||self.location.href;var t={792:0};r.f.j=(e,n)=>{var s=r.o(t,e)?t[e]:void 0;if(0!==s)if(s)n.push(s[2]);else{var o=new Promise(((n,r)=>s=t[e]=[n,r]));n.push(s[2]=o);var i=r.p+r.u(e),a=new Error;r.l(i,(n=>{if(r.o(t,e)&&(0!==(s=t[e])&&(t[e]=void 0),s)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,s[1](a)}}),"chunk-"+e,e)}};var e=(e,n)=>{var s,o,[i,a,l]=n,c=0;if(i.some((e=>0!==t[e]))){for(s in a)r.o(a,s)&&(r.m[s]=a[s]);l&&l(r)}for(e&&e(n);c<i.length;c++)o=i[c],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0},n=self.webpackChunke_commerce=self.webpackChunke_commerce||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),(()=>{var t=r(385),e=r.n(t),n=new URL(r(25),r.b);e()(n);var s=r(241),o=function(t,e,n,s){return new(n||(n=Promise))((function(r,o){function i(t){try{l(s.next(t))}catch(t){o(t)}}function a(t){try{l(s.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}l((s=s.apply(t,e||[])).next())}))};const i=["phone","laptop","watch","tablet"];class a{static initialRoutes(t,e){return[{path:"login",callback:()=>o(this,void 0,void 0,(function*(){yield e.updateContent("login")}))},{path:"registration",callback:()=>o(this,void 0,void 0,(function*(){yield e.updateContent("registration")}))},{path:"main",callback:()=>o(this,void 0,void 0,(function*(){yield e.updateContent("main")}))},{path:"not-found",callback:()=>o(this,void 0,void 0,(function*(){yield e.updateContent("notFound")}))},{path:"category",callback:()=>o(this,void 0,void 0,(function*(){yield e.updateContent("category")}))},{path:"profile",callback:()=>o(this,void 0,void 0,(function*(){yield e.updateContent("profile")}))},...i.map((t=>({path:`product/${t}`,callback:()=>o(this,void 0,void 0,(function*(){yield e.updateContent("product",t)}))}))),...i.map((t=>({path:`product/${t}/:id`,callback:n=>o(this,void 0,void 0,(function*(){yield e.updateContent("product-detail",t,n)}))})))]}}var l=function(t,e,n,s){return new(n||(n=Promise))((function(r,o){function i(t){try{l(s.next(t))}catch(t){o(t)}}function a(t){try{l(s.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}l((s=s.apply(t,e||[])).next())}))};class c{constructor(t){this.routes=[],this.addRoute(a.initialRoutes(this,t)),window.addEventListener("popstate",(()=>{this.navigate(this.getUrl())})),window.addEventListener("hashchange",(()=>{this.navigate(this.getUrl())}))}getUrl(){return window.location.hash.slice(1)||"main"}addRoute(t){t.forEach((t=>this.routes.push(t)))}findRoute(t){const e=t.split("/");return this.routes.reduce(((t,n)=>{if(t)return t;const s=n.path.split("/");if(s.length===e.length){const t=[];if(s.every(((n,s)=>n.startsWith(":")?(t.push(e[s]),!0):n===e[s])))return Object.assign(Object.assign({},n),{params:t})}}),void 0)}updateUrl(t){window.location.hash=`#${t}`}showNotFoundPage(){return l(this,void 0,void 0,(function*(){var t;yield null===(t=this.findRoute("not-found"))||void 0===t?void 0:t.callback()}))}navigate(t){return l(this,void 0,void 0,(function*(){const e=this.findRoute(t);if(e){if(s.q.getUserData()&&("login"===e.path||"registration"===e.path))return void this.updateUrl("main");e.params&&e.params.length?yield e.callback(...e.params):yield e.callback(),this.updateUrl(t)}else yield this.showNotFoundPage()}))}}var d=r(940);class u extends d.S{constructor(){super({tag:"a",classNames:["footer__link"],textContent:"E-Mail"}),this.setupLink()}setupLink(){this.viewHtmlElement.getElement().setAttribute("href","mailto:FadStore@gmail.com")}}const h=r.p+"images/envelope-solid..svg";class m extends d.S{constructor(){super({tag:"img",classNames:["footer__img"]}),this.setSvgPath()}setSvgPath(){this.viewHtmlElement.getElement().setAttribute("src",h)}}class g extends d.S{constructor(){super({tag:"p",classNames:["subtitle"],textContent:"Contact"})}}class p extends d.S{constructor(){super({tag:"div",classNames:["footer__container"]}),this.setupContacts()}setupContacts(){const t=(new m).getElement();this.viewHtmlElement.addInnerElement(t);const e=(new g).getElement();this.viewHtmlElement.addInnerElement(e);const n=(new u).getElement();this.viewHtmlElement.addInnerElement(n)}}class v extends d.S{constructor(){super({tag:"p",classNames:["subtitle"],textContent:"Address"})}}const f=r.p+"images/map-pin-solid..svg";class w extends d.S{constructor(){super({tag:"img",classNames:["footer__img"]}),this.setSvgPath()}setSvgPath(){this.viewHtmlElement.getElement().setAttribute("src",f)}}class b extends d.S{constructor(){super({tag:"a",classNames:["footer__link"],textContent:"Location"}),this.setLink()}setLink(){this.viewHtmlElement.getElement().setAttribute("href","https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%96%D1%83%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE,+%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3,+191014/@59.9323888,30.3497675,13.57z/data=!4m15!1m8!3m7!1s0x469631a3db450ec9:0x3aad5b4a38113633!2z0YPQuy4g0JbRg9C60L7QstGB0LrQvtCz0L4sINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTEwMTQ!3b1!8m2!3d59.935874!4d30.3558349!16s%2Fg%2F122pwsld!3m5!1s0x469631a3db450ec9:0x3aad5b4a38113633!8m2!3d59.935874!4d30.3558349!16s%2Fg%2F122pwsld?entry=ttu")}}class E extends d.S{constructor(){super({tag:"div",classNames:["footer__container"]}),this.setupAddress()}setupAddress(){const t=(new w).getElement();this.viewHtmlElement.addInnerElement(t);const e=(new v).getElement();this.viewHtmlElement.addInnerElement(e);const n=(new b).getElement();this.viewHtmlElement.addInnerElement(n)}}class y extends d.S{constructor(){super({tag:"p",classNames:["subtitle"],textContent:"Support"})}}class C extends d.S{constructor(){super({tag:"a",classNames:["footer__link"],textContent:"Reference"}),this.setupLink()}setupLink(){this.viewHtmlElement.getElement().setAttribute("href","#")}}const k=r.p+"images/person-solid..svg";class S extends d.S{constructor(){super({tag:"img",classNames:["footer__img"]}),this.setSvgPath()}setSvgPath(){this.viewHtmlElement.getElement().setAttribute("src",k)}}class L extends d.S{constructor(){super({tag:"div",classNames:["footer__container"]}),this.setupSupport()}setupSupport(){const t=(new S).getElement();this.viewHtmlElement.addInnerElement(t);const e=(new y).getElement();this.viewHtmlElement.addInnerElement(e);const n=(new C).getElement();this.viewHtmlElement.addInnerElement(n)}}class x extends d.S{constructor(){super({tag:"footer",classNames:["footer"]}),this.setupFooterContent()}setupFooterContent(){const t=(new p).getElement();this.viewHtmlElement.addInnerElement(t);const e=(new E).getElement();this.viewHtmlElement.addInnerElement(e);const n=(new L).getElement();this.viewHtmlElement.addInnerElement(n)}}class N{constructor(t){this.footer=new x,this.router=t}render(){return this.footer.getElement()}}class D extends d.S{constructor(t){super({tag:"li",classNames:["nav-list_item"],textContent:t}),this.setupNavItem()}setupNavItem(){const t=this.viewHtmlElement.getElement();t.dataset.navItem=t.textContent||""}}const P=["Home","Category","Sign in","Sign up","Profile","Logout"];class H extends d.S{constructor(){super({tag:"ul",classNames:["nav-list","hidden"]}),this.navItems=[],this.setupNavList()}getNavItems(){return this.navItems}setupNavList(){P.forEach((t=>{const e=new D(t);this.navItems.push(e),this.viewHtmlElement.addInnerElement(e.getElement())}))}}const I=r.p+"images/bag-shopping-solid..svg";class _ extends d.S{constructor(){super({tag:"img",classNames:["nav-list__item-bag"]}),this.setSvgPath()}setSvgPath(){this.viewHtmlElement.getElement().setAttribute("src",I)}}var A=r(848);class T extends d.S{constructor(){super({tag:"header",classNames:["header"]}),this.navList=null,this.toggleButton=null,this.setupHeaderContent(),this.setupToggleBtn(),this.setupResizeListener(),this.updateNavList()}getNavList(){return this.navList}setupHeaderContent(){this.navList=new H;const t=(new _).getElement();this.viewHtmlElement.addInnerElement(this.navList.getElement()),this.viewHtmlElement.addInnerElement(t)}setupToggleBtn(){this.toggleButton=new A.$({label:"☰",onClick:()=>this.toggleNavList()}),this.viewHtmlElement.addInnerElement(this.toggleButton.getElement()),this.updateBtnVisible()}setupResizeListener(){window.addEventListener("resize",(()=>{this.updateBtnVisible(),this.updateNavList()}))}updateBtnVisible(){var t;const e=null===(t=this.toggleButton)||void 0===t?void 0:t.getElement();e&&(window.innerWidth<=485?e.style.display="block":e.style.display="none")}updateNavList(){var t;const e=null===(t=this.navList)||void 0===t?void 0:t.getElement();e&&(e.style.display=window.innerWidth<=485?"none":"flex")}toggleNavList(){if(this.navList){const t=this.navList.getElement();t.style.display="none"===t.style.display?"flex":"none"}}}class B{constructor(t,e){this.header=new T,this.router=t,this.authPublisher=e,this.authPublisher.registerObserver(this.constructor.name,this),this.onClick=this.onClick.bind(this),this.setEventListener()}updateData(t){this.updateHeaderOptions(t)}render(){return this.header.getElement()}updateHeaderOptions(t=null!==s.q.getUserData()){var e;const n=null===(e=this.header.getNavList())||void 0===e?void 0:e.getNavItems();null==n||n.forEach((e=>{const n=e.getElement(),s=n.getAttribute("data-nav-item");t?"Logout"===s||"Home"===s||"Category"===s||"Profile"===s?n.classList.remove("hidden"):n.classList.add("hidden"):"Sign in"===s||"Sign up"===s||"Home"===s||"Category"===s?n.classList.remove("hidden"):n.classList.add("hidden")}))}onClick(t){const e=t.target.getAttribute("data-nav-item");e&&"Home"===e&&this.router.navigate("main"),e&&"Sign in"===e&&this.router.navigate("login"),e&&"Sign up"===e&&this.router.navigate("registration"),e&&"Category"===e&&this.router.navigate("category"),e&&"Logout"===e&&s.q.getUserData()&&(s.q.removeUserData(),this.router.navigate("login"),this.updateHeaderOptions(!1)),e&&"Profile"===e&&s.q.getUserData()&&this.router.navigate("profile")}setEventListener(){const t=this.header.getNavList();null==t||t.getElement().addEventListener("click",this.onClick)}}class R extends d.S{constructor(){super({tag:"main"})}updateContent(t){this.getElement().innerHTML="",this.getElement().append(t)}}var U=function(t,e,n,s){return new(n||(n=Promise))((function(r,o){function i(t){try{l(s.next(t))}catch(t){o(t)}}function a(t){try{l(s.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}l((s=s.apply(t,e||[])).next())}))};class F{constructor(t){this.router=null,this.wrapper=new R,this.authPublisher=t}setRouter(t){this.router=t}getRouter(){return this.router}updateContent(t,e,n){return U(this,void 0,void 0,(function*(){try{let s;s="product-detail"===t&&e&&n?yield this.loadProductDetailController(e,n):"product"===t&&e?yield this.loadProductController(e):yield this.loadController(t);const r=yield s.getElement();this.wrapper.updateContent(r)}catch(t){console.error(t);const e=document.createElement("div");e.innerHTML="<h1>Page Not Found</h1>",this.wrapper.updateContent(e)}}))}render(){return this.wrapper.getElement()}loadProductController(t){return U(this,void 0,void 0,(function*(){const{ProductController:e}=yield r.e(827).then(r.bind(r,827));return new e(t)}))}loadProductDetailController(t,e){return U(this,void 0,void 0,(function*(){const{ProductDetailController:n}=yield r.e(983).then(r.bind(r,983));return new n(t,e)}))}loadController(t){return U(this,void 0,void 0,(function*(){switch(t){case"login":{const{LoginController:t}=yield r.e(951).then(r.bind(r,951));return new t(this.getRouter(),this.authPublisher)}case"registration":{const{RegistrationController:t}=yield r.e(544).then(r.bind(r,544));return new t(this.getRouter(),this.authPublisher)}case"main":{const{MainController:t}=yield r.e(437).then(r.bind(r,437));return new t}case"category":{const{CategoryController:t}=yield r.e(174).then(r.bind(r,174));return new t(this.getRouter())}case"profile":{const{ProfileController:t}=yield r.e(452).then(r.bind(r,452));return new t}case"notFound":{const{NotFoundController:t}=yield r.e(666).then(r.bind(r,666));return new t}default:throw new Error(`Controller ${t} not found`)}}))}}class O{static getToken(){return t=this,e=void 0,s=function*(){const t=`${this.AUTH_URL}/oauth/token`;try{const e=yield fetch(t,{method:"POST",headers:{Authorization:`Basic ${btoa(`${this.clientID}:${this.clientSecret}`)}`,"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"client_credentials",scope:this.scope})});if(!e.ok){const t=yield e.json();return{statusCode:t.statusCode,msg:t.message}}return yield e.json()}catch(t){throw console.error(t),t}},new((n=void 0)||(n=Promise))((function(r,o){function i(t){try{l(s.next(t))}catch(t){o(t)}}function a(t){try{l(s.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}l((s=s.apply(t,e||[])).next())}));var t,e,n,s}}O.clientID="hRGagGlXqckAWUF1-I1Hkzrk",O.clientSecret="qCgigNxcu7qi7RyfaEX6YWF8EIIpksCT",O.scope="manage_project:fad-team manage_api_clients:fad-team view_api_clients:fad-team",O.AUTH_URL="https://auth.europe-west1.gcp.commercetools.com";class j{constructor(){this.observers=new Map}registerObserver(t,e){this.observers.set(t,e)}removeObserver(t){this.observers.delete(t)}notifyObservers(t){this.observers.forEach((e=>e.updateData(t)))}}(new class{constructor(){this.authPublisher=new j,this.pageController=new F(this.authPublisher),this.router=new c(this.pageController),this.pageController.setRouter(this.router),this.headerController=new B(this.router,this.authPublisher),this.footerController=new N(this.router),this.initializeApp()}render(){this.router.getUrl()?this.router.navigate(this.router.getUrl()):this.router.navigate("main");const t=this.headerController.render(),e=this.pageController.render(),n=this.footerController.render(),r=document.querySelector("body");r&&(this.authPublisher.notifyObservers(!!s.q.getUserData()),r.append(t,e,n))}initializeApp(){return t=this,e=void 0,r=function*(){try{const t=yield O.getToken();"access_token"in t&&s.q.saveToken(t.access_token)}catch(t){console.error("Failed to fetch token:",t)}},new((n=void 0)||(n=Promise))((function(s,o){function i(t){try{l(r.next(t))}catch(t){o(t)}}function a(t){try{l(r.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}l((r=r.apply(t,e||[])).next())}));var t,e,n,r}}).render()})()})();