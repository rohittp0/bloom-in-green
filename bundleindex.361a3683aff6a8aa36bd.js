(()=>{"use strict";var e,n={157:(e,n,i)=>{i(830);var t=i(595);const o={Education:{img:"/img/placeholder-icon.png",text:"Education is abc Education is abc Education is abc "},Music:{img:"/img/placeholder-icon.png",text:"Education is abc Education is abc Education is abc "},Sustainablity:{img:"/img/placeholder-icon.png",text:"Education is abc Education is abc Education is abc "},Spirituality:{img:"/img/placeholder-icon.png",text:"Education is abc"},Movement:{img:"/img/placeholder-icon.png",text:"Education is abc"},Health:{img:"/img/placeholder-icon.png",text:"Education is abc"},Art:{img:"/img/placeholder-icon.png",text:"Education is abc"}},r=document.getElementById("newsList"),s=document.getElementById("eventsList"),a=document.getElementById("circlesList"),c=document.getElementById("gallery");a.innerHTML=function(){const e=[];for(const n in o)e.push(`\n    <img src="${o[n].img}" alt="" tabindex="1" width="22px" height="22px">\n    <div class="circle-center">\n        <h6>${n}</h6>\n        <p>${o[n].text}</p>\n    </div>`);return e.join("\n")}(),r.innerHTML=function(){let e=[];const n=[];for(let i=0;i<10;i++)e.push('\n        <div class="carousal-content">\n            <div class="news-card">\n                <img src="/img/news-card.webp" alt="">\n                <h4>The news title</h4>\n                <a href="#">\n                    <button>The Hindu</button>\n                </a>\n                <p>News content</p>\n\n            </div>\n        </div>\n    '),i%3==0&&(n.push(`<li class="splide__slide carousal-slide">${e.join("\n")}</li>`),e=[]);return n.reverse().join("\n")}(),s.innerHTML=[...Array(10).keys()].map((()=>'\n    <li class="splide__slide">\n        <div class="event-card">\n            <img src="/img/festival-card.webp" alt="card image" class="event-image">\n            <div class="hover-panel">\n                <h4>Title</h4>\n                <p>Details</p>\n            </div>\n        </div>\n    </li>')).join("\n"),new t.ZP(".news-slide",{classes:{arrow:"splide__arrow news-arrow"}}).mount(),new t.ZP(".event-slide",{classes:{arrow:"splide__arrow events-arrow"},autoWidth:!0}).mount(),new t.ZP(".community-slide",{classes:{arrow:"splide__arrow events-arrow"},autoWidth:!1}).mount(),window.addEventListener("scroll",(()=>document.body.style.setProperty("--scroll",String(window.pageYOffset/(c.offsetTop-c.offsetHeight)))),!1),window.addEventListener("scroll",(()=>document.body.style.setProperty("--gallery-scroll",String(function(e){const n=window.pageYOffset,i=n+window.innerHeight,t=e.getBoundingClientRect(),o=t.top+n,r=o+t.height;return r<=n?-1:o>=i?.3:r<=i?(r-n)/window.innerHeight:(i-o)/window.innerHeight}(c)))),!1),console.log("%cDeveloped by\n    Rohit  : https://www.linkedin.com/in/rohit-tp\n    Varsha : https://www.linkedin.com/in/varsha-shaheen-a10295231","background-color:black;border-left: solid red 8px;color:white;padding:10px;border-radius:5px")}},i={};function t(e){var o=i[e];if(void 0!==o)return o.exports;var r=i[e]={exports:{}};return n[e](r,r.exports,t),r.exports}t.m=n,e=[],t.O=(n,i,o,r)=>{if(!i){var s=1/0;for(d=0;d<e.length;d++){for(var[i,o,r]=e[d],a=!0,c=0;c<i.length;c++)(!1&r||s>=r)&&Object.keys(t.O).every((e=>t.O[e](i[c])))?i.splice(c--,1):(a=!1,r<s&&(s=r));if(a){e.splice(d--,1);var l=o();void 0!==l&&(n=l)}}return n}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[i,o,r]},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={826:0};t.O.j=n=>0===e[n];var n=(n,i)=>{var o,r,[s,a,c]=i,l=0;if(s.some((n=>0!==e[n]))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var d=c(t)}for(n&&n(i);l<s.length;l++)r=s[l],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(d)},i=self.webpackChunkbloom_in_green=self.webpackChunkbloom_in_green||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))})();var o=t.O(void 0,[984],(()=>t(157)));o=t.O(o)})();