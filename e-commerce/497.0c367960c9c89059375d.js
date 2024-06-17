"use strict";(self.webpackChunke_commerce=self.webpackChunke_commerce||[]).push([[497],{774:(e,t,s)=>{s.r(t),s.d(t,{AboutController:()=>A});var n=s(940);class a extends n.S{constructor(e){super({tag:"img",classNames:["user-card__img"]}),this.setSvgPath(e)}setSvgPath(e){this.viewHtmlElement.getElement().setAttribute("src",e)}}class r extends n.S{constructor(e){super({tag:"h4",classNames:["user-card__role"],textContent:e})}}class o extends n.S{constructor(e){super({tag:"h4",classNames:["user-card__letter"],textContent:e})}}class i extends n.S{constructor(e){super({tag:"h4",classNames:["user-card__name"],textContent:e})}}class c extends n.S{constructor(e){super({tag:"h4",classNames:["user-card__bio"],textContent:e})}}class l extends n.S{constructor(e){super({tag:"h4",classNames:["user-card__contr"],textContent:e})}}class h extends n.S{constructor(e,t){super({tag:"a",classNames:["user-card__github"],textContent:e}),this.setLink(t)}setLink(e){this.viewHtmlElement.getElement().setAttribute("href",e)}}class d extends n.S{constructor(){super({tag:"div",classNames:["container-user"]})}}class m extends n.S{constructor(e,t,s,n,a,r,o){super({tag:"div",classNames:["user-card"]}),this.setupCard(e,t,s,n,a,r,o)}setupCard(e,t,s,n,m,u,p){const g=new a(e).getElement();this.viewHtmlElement.addInnerElement(g);const b=(new d).getElement(),f=new r(t).getElement(),w=new o(s).getElement(),v=new i(n).getElement(),y=new c(m).getElement(),E=new l(u).getElement(),S=new h(p,`https://github.com/${p}`).getElement();b.append(f,f,w,v,y,E,S),this.viewHtmlElement.addInnerElement(b)}}class u extends n.S{constructor(e){super({tag:"div",classNames:["card-list"]}),this.cards=[],this.setupCardUserList(e)}getCardUserList(){return this.cards}setupCardUserList(e){e.forEach((e=>{const{imgUrl:t,role:s,letter:n,name:a,bio:r,contribution:o,git:i}=e,c=new m(t,s,n,a,r,o,i);this.cards.push(c)})),this.getElement().append(...this.cards.map((e=>e.getElement())))}}class p extends n.S{constructor(){super({tag:"h2",classNames:["title-colab"],textContent:"Collaboration"})}}const g=s.p+"images/colab..png";class b extends n.S{constructor(){super({tag:"img",classNames:["img-colab"]}),this.setImgPath()}setImgPath(){this.viewHtmlElement.getElement().setAttribute("src",g)}}class f extends n.S{constructor(){super({tag:"div",classNames:["container-colab"]})}}class w extends n.S{constructor(){super({tag:"p",classNames:["content-colab"],textContent:"We effectively managed the project, despite initial challenges. Things didnt go smoothly at first, but thanks to mutual support and teamwork, we were able to overcome all obstacles on the way to success. Each member of our team made a contribution: Fedor, responsible for the server side, demonstrated a high level of technical competence and the ability to adapt quickly to changes. Andrey, in turn, made a significant contribution to the architecture and code testing, ensuring the high quality of our product. Darya supported the team spirit and successfully tackled technical challenges related to the development of the user interface. Thanks to our unity and ability to work together, we achieved the set goal."})}}class v extends n.S{constructor(){super({tag:"section",classNames:["collabaration"]}),this.setContent()}setContent(){const e=(new p).getElement();this.viewHtmlElement.addInnerElement(e);const t=(new f).getElement(),s=(new b).getElement(),n=(new w).getElement();t.append(n,s),this.viewHtmlElement.addInnerElement(t)}}class y extends n.S{constructor(){super({tag:"h2",classNames:["title-RSS"],textContent:"The Rolling Scopes School"})}}class E extends n.S{constructor(){super({tag:"div",classNames:["container-rss"]})}}class S extends n.S{constructor(){super({tag:"div",classNames:["container-text"]})}}class x extends n.S{constructor(){super({tag:"p",classNames:["content-colab"],textContent:"If you want to learn frontend development and many other things, click on the logo and follow this link. You will discover the fascinating world of programming."})}}const k=s.p+"images/rs-school-CZS_yQWd..webp";class C extends n.S{constructor(){super({tag:"a",classNames:["img-RSS"]}),this.setImgPath()}setImgPath(){const e=this.viewHtmlElement.getElement();e.setAttribute("href","https://rs.school/");const t=document.createElement("img");t.classList.add("img-RSS"),t.setAttribute("src",k),e.appendChild(t)}}class N extends n.S{constructor(){super({tag:"section",classNames:["section-RSS"]}),this.setupRSS()}setupRSS(){const e=(new y).getElement(),t=(new E).getElement(),s=(new S).getElement(),n=(new x).getElement(),a=(new C).getElement();s.append(e,n),t.append(a,s),this.viewHtmlElement.addInnerElement(t)}}const _=[{imgUrl:"https://avatars.githubusercontent.com/u/34959976?v=4",role:"Frontend developer",letter:"F",name:"Fedor Arsenyev",bio:"Fedor Arsenyev is an enthusiast in the field of frontend development and neural networks. Fedor is known for his ability to lift the teams spirits with funny memes, making the work atmosphere lighter and more enjoyable",contribution:"Fedor plays a key role in the project, being responsible for implementing server operations and request handling. This task requires not only technical proficiency but also the ability to quickly adapt to changes, which Fedor successfully demonstrates. He not only overcomes technical difficulties but also introduces innovative ideas, such as optimizing data processing workflows, which significantly enhances the systems performance and stability. Thanks to his efforts, the team can rely on efficient server architecture.",git:"farsenyev"},{imgUrl:"https://avatars.githubusercontent.com/u/31282057?v=4",role:"Team lead",letter:"A",name:"Andrey Turchin",bio:"Andrey Turchin is passionate about frontend development and is the person who best understands the technical details and architecture of the project. He is always ready to provide support to team members on any issue.",contribution:"Andrey, as the team leader, significantly influences the success of our project through his work on architecture, utilities, and routing. He is also responsible for code testing coverage, which ensures the high quality and reliability of our product. Andrey makes a key contribution to the project by developing complex solutions that enhance the efficiency and performance of the system. His leadership and ability to guide the team not only help achieve set goals but also create an atmosphere of innovation and collaboration within the team.",git:"anturchin"},{imgUrl:"https://avatars.githubusercontent.com/u/114692748?v=4",role:"Frontend developer",letter:"D",name:"Daria Shilnikova",bio:"Darya Shilnikova is passionate about frontend development, neural networks, and business analytics. In the project, she is responsible for the websites frontend and components. Darya is known for her ability to boost team spirit and motivate its members.",contribution:"Darya makes a significant contribution to our project, being responsible for the development of the websites external part and its components. She has successfully implemented a series of user interfaces that not only improved the visual perception of our product but also significantly enhanced its usability. Darya also overcame many technical challenges associated with adapting the interface to various devices and platforms, ensuring excellent display quality on all types of screens.",git:"dasha2101"}];class H extends n.S{constructor(){super({tag:"section",classNames:["content","about"]}),this.userCards=null,this.colaboration=null,this.rss=null,this.renderUserList()}renderUserList(e=_){this.userCards=new u(e),this.viewHtmlElement.addInnerElement(this.userCards.getElement()),this.colaboration=new v,this.viewHtmlElement.addInnerElement(this.colaboration.getElement()),this.rss=new N,this.viewHtmlElement.addInnerElement(this.rss.getElement())}getWrapperList(){return this.userCards}}class A{constructor(){this.page=new H}getElement(){return this.page.getElement()}}}}]);