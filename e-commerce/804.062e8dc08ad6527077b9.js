"use strict";(self.webpackChunke_commerce=self.webpackChunke_commerce||[]).push([[804],{804:(e,t,s)=>{s.r(t),s.d(t,{ProductDetailController:()=>E});var n=s(940);class i extends n.S{constructor(e){super({tag:"p",classNames:["product__description"],textContent:e})}}class l extends n.S{constructor(e){super({tag:"h4",classNames:["product__title"],textContent:e})}}class a extends n.S{constructor(){super({tag:"div",classNames:["conteiner__img"]})}}class o extends n.S{constructor(){super({tag:"div",classNames:["conteinerInfo"]})}}class d extends n.S{constructor(e){super({tag:"p",classNames:["product__price"],textContent:e})}}class c extends n.S{constructor(e){super({tag:"p",classNames:["product__sale-price"],textContent:e})}}var r=s(825),m=s(848);class p extends n.S{constructor(e){super({tag:"div",classNames:["modal-win"]}),this.slidesShow=new r.W(e),this.setModalWin(),this.getElement().style.display="none"}setModalWin(){this.viewHtmlElement.setInnerHtml("");const e=new m.$({label:"Close",onClick:()=>this.closeModal()}).getElement();this.viewHtmlElement.addInnerElement(e),this.viewHtmlElement.addInnerElement(this.slidesShow.getElement())}showModal(){this.changeImageStyle(),this.getElement().style.display="block"}closeModal(){this.getElement().style.display="none"}changeImageStyle(){this.slidesShow.getElement().querySelectorAll("img").forEach((e=>{e.classList.remove("img-slide")}))}}class h extends n.S{constructor(e,t,s,n,i){super({tag:"div",classNames:["product__info"]}),this.modal=new p(t),this.viewHtmlElement.addInnerElement(this.modal.getElement()),this.setupProductInfo(e,t,s,n,i)}setupProductInfo(e,t,s,n,m){const p=(new o).getElement(),h=new l(e).getElement(),u=new i(s).getElement(),g=new d(n).getElement(),E=new c(m).getElement();p.append(h,u,g,E),this.viewHtmlElement.addInnerElement(p);const w=(new a).getElement(),S=new r.W(t).getElement();w.append(S),this.viewHtmlElement.addInnerElement(w),S.querySelectorAll("img").forEach((e=>{e.addEventListener("click",(()=>{this.modal.setModalWin(),this.modal.showModal()}))}))}}const u=[{name:'Apple MacBook Pro 14" (2023), Apple M2 Max 12 Core/30-core GPU/32GB/1TB SSD/Space Gray, Space Gray (MPHG3)',img:["https://pitergsm.ru/upload/iblock/32f/jxv26m6rxnio8qzuhubxokr0brfxuyar.png","https://pitergsm.ru/upload/iblock/827/827d130979a21ed75343f71baef30066.jpg","https://pitergsm.ru/upload/iblock/0d8/0d832faa4502f28fdf477bc77b5fe73e.jpg"],description:"This laptop features a 14-inch display with a resolution of 3024 × 1964 pixels, providing an exceptionally clear image that is perfect for professional designers and video editors. It is equipped with 32 GB of RAM, making it extremely powerful for multitasking and processing large volumes of data. With 12 processor cores, this computer is capable of handling the most complex tasks and software. The laptop weighs just 1630 grams, making it surprisingly light and portable for such impressive specifications.",price:"$3000.00",sale:"$2500.00"}];class g extends n.S{constructor(e=u){super({tag:"section",classNames:["content"]}),e.forEach((e=>{const t=new h(e.name,e.img,e.description,e.price,e.sale);this.viewHtmlElement.addInnerElement(t.getElement())}))}}class E{constructor(e,t){this.page=new g,this.productType=e,this.productId=t}getElement(){return this.page.getElement()}}},825:(e,t,s)=>{s.d(t,{W:()=>o});var n=s(940);class i extends n.S{constructor(e){super({tag:"div",classNames:["slides"]}),this.setupSlidesItem(e)}setupSlidesItem(e){const t=document.createElement("img");t.classList.add("img-slide","modal-slide"),t.setAttribute("src",e),this.viewHtmlElement.addInnerElement(t)}}class l extends n.S{constructor(){super({tag:"a",classNames:["prev"]}),this.getElement().innerHTML="&#10094;"}}class a extends n.S{constructor(){super({tag:"a",classNames:["next"]}),this.getElement().innerHTML="&#10095;"}}class o extends n.S{constructor(e){super({tag:"div",classNames:["slideshow-container"]}),this.items=[],this.dots=[],this.slideIndex=1,this.setupSlidesShow(e),this.showSlides(this.slideIndex)}setupSlidesShow(e){const t=document.createElement("div");t.classList.add("slides-wrapper"),this.items=e.map((e=>new i(e)));const s=(new l).getElement(),n=(new a).getElement();s.addEventListener("click",(()=>this.plusSlides(-1))),n.addEventListener("click",(()=>this.plusSlides(1))),this.getElement().append(s,t,n);const o=document.createElement("div");o.classList.add("dot-container"),this.dots=this.items.map(((e,t)=>{const s=document.createElement("span");return s.classList.add("dot"),s.addEventListener("click",(()=>this.currentSlide(t+1))),o.append(s),s})),t.append(...this.items.map((e=>e.getElement()))),t.append(o)}plusSlides(e){this.showSlides(this.slideIndex+=e)}currentSlide(e){this.showSlides(this.slideIndex=e)}showSlides(e){e>this.items.length&&(this.slideIndex=1),e<1&&(this.slideIndex=this.items.length),this.items.forEach(((e,t)=>{e.getElement().style.display="none",this.dots[t].classList.remove("active")})),this.items[this.slideIndex-1].getElement().style.display="block",this.dots[this.slideIndex-1].classList.add("active")}}}}]);