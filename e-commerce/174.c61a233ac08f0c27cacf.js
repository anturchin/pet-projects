"use strict";(self.webpackChunke_commerce=self.webpackChunke_commerce||[]).push([[174],{174:(t,e,s)=>{s.r(e),s.d(e,{CategoryController:()=>u});var r=s(940);class a extends r.S{constructor(t){super({tag:"li",classNames:["category__nav-list_item"],textContent:t.title}),this.setupCategoryItem(t),this.createImg(t)}setupCategoryItem(t){this.viewHtmlElement.getElement().dataset.categoryItem=t.categoryName,this.viewHtmlElement.getElement().setAttribute("src",t.url)}createImg(t){const e=document.createElement("img");e.classList.add("li__img-category"),e.src=t.url,this.viewHtmlElement.addInnerElement(e)}}class n extends r.S{constructor(t){super({tag:"ul",classNames:["category__nav-list"]}),this.categoryItems=[],this.setupCategoryList(t)}getCategoryItems(){return this.categoryItems}setupCategoryList(t){t.forEach((t=>{const e=new a(t);this.categoryItems.push(e)})),this.getElement().append(...this.categoryItems.map((t=>t.getElement())))}}class o extends r.S{constructor(){super({tag:"section",classNames:["category"]}),this.categoryList=null}renderCategoryList(t){this.categoryList=new n(t),this.viewHtmlElement.addInnerElement(this.categoryList.getElement())}getCategoryList(){return this.categoryList}}class i{static getCategoryList(t){return e=this,s=void 0,a=function*(){const e=`${this.API_URL}/${this.projectKey}/categories`;try{const s=yield fetch(e,{method:"GET",headers:{Authorization:`Bearer ${t}`,"Content-type":"application/json"}});if(!s.ok){const t=yield s.json();return{statusCode:t.statusCode,msg:t.message}}return yield s.json()}catch(t){throw console.error(t),t}},new((r=void 0)||(r=Promise))((function(t,n){function o(t){try{c(a.next(t))}catch(t){n(t)}}function i(t){try{c(a.throw(t))}catch(t){n(t)}}function c(e){var s;e.done?t(e.value):(s=e.value,s instanceof r?s:new r((function(t){t(s)}))).then(o,i)}c((a=a.apply(e,s||[])).next())}));var e,s,r,a}}i.projectKey="fad-team",i.API_URL="https://api.europe-west1.gcp.commercetools.com";var c=s(241);const l=[{url:"https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-14-pro-max-colors.png",name:"phone"},{url:"https://www.mechta.kz/storage/description_images/1687344318_1.jpg",name:"laptop"},{url:"https://www.macworld.com/wp-content/uploads/2024/05/2024-ipad-family-5.jpg?quality=50&strip=all&w=1024",name:"tablet"},{url:"https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-hero-230912_Full-Bleed-Image.jpg.large.jpg",name:"watch"}];class u{constructor(t){this.page=new o,this.categories=[],this.router=null,this.router=t,this.loadDAta()}getElement(){return this.page.getElement()}loadDAta(){return t=this,e=void 0,r=function*(){const t=c.q.getToken();if(t){const e=yield i.getCategoryList(t);if("results"in e){this.categories=e.results;const t=this.getProps();this.page.renderCategoryList(t),this.eventHandler()}}},new((s=void 0)||(s=Promise))((function(a,n){function o(t){try{c(r.next(t))}catch(t){n(t)}}function i(t){try{c(r.throw(t))}catch(t){n(t)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(o,i)}c((r=r.apply(t,e||[])).next())}));var t,e,s,r}getProps(){return this.categories.map((t=>{const e=l.find((e=>e.name===t.name.ru));return e?{url:e.url,title:t.name.ru,categoryName:t.name.ru}:{url:"",title:t.name.ru,categoryName:t.name.ru}}))}eventHandler(){var t;const e=null===(t=this.page.getCategoryList())||void 0===t?void 0:t.getElement();e?e.addEventListener("click",this.onClickHandler.bind(this)):console.error("Category list element not found!")}onClickHandler(t){var e,s,r,a;const n=t.target.closest("li");if(!n)return;const o=n.getAttribute("data-category-item");o&&"phone"===o&&(null===(e=this.router)||void 0===e||e.navigate("product/phone")),o&&"laptop"===o&&(null===(s=this.router)||void 0===s||s.navigate("product/laptop")),o&&"tablet"===o&&(null===(r=this.router)||void 0===r||r.navigate("product/tablet")),o&&"watch"===o&&(null===(a=this.router)||void 0===a||a.navigate("product/watch"))}}}}]);