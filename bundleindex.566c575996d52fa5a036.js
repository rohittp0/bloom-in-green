(()=>{"use strict";var e,n={958:(e,n,t)=>{t(830);var r=t(595),o=t(31),s=t(737),a=t.n(s);const c=document.getElementById("heroMovie"),l=document.getElementById("joinUsForm"),i=document.getElementById("joinUsInput");function d(){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||c.classList.add("scale-down")}new r.ZP(".community-slide",{classes:{arrow:"splide__arrow events-arrow"},type:"loop",drag:"free",focus:"center",autoWidth:!1,autoScroll:{speed:.2}}).mount({AutoScroll:o.l}),document.addEventListener("fullscreenchange",d,{passive:!0}),document.addEventListener("webkitfullscreenchange",d,{passive:!0}),document.addEventListener("mozfullscreenchange",d,{passive:!0}),document.getElementById("playButton").addEventListener("click",(()=>{return e=void 0,n=void 0,r=function*(){c.classList.remove("scale-down"),yield c.requestFullscreen()},new((t=void 0)||(t=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function c(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}l((r=r.apply(e,n||[])).next())}));var e,n,t,r})),c.addEventListener("ended",(()=>(c.classList.add("scale-down"),document.exitFullscreen())),{passive:!0}),l.addEventListener("submit",(e=>{e.preventDefault();const n=i.value;return fetch("https://api.apispreadsheets.com/data/FTtiYWAmU4xWNan8/",{method:"POST",body:JSON.stringify({email:n})}).then((()=>a()("Joined","Welcome aboard","success"))).catch((()=>a()("Oops","Something went wrong","error")))}))}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var s=t[e]={exports:{}};return n[e].call(s.exports,s,s.exports,r),s.exports}r.m=n,e=[],r.O=(n,t,o,s)=>{if(!t){var a=1/0;for(d=0;d<e.length;d++){for(var[t,o,s]=e[d],c=!0,l=0;l<t.length;l++)(!1&s||a>=s)&&Object.keys(r.O).every((e=>r.O[e](t[l])))?t.splice(l--,1):(c=!1,s<a&&(a=s));if(c){e.splice(d--,1);var i=o();void 0!==i&&(n=i)}}return n}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[t,o,s]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={826:0};r.O.j=n=>0===e[n];var n=(n,t)=>{var o,s,[a,c,l]=t,i=0;if(a.some((n=>0!==e[n]))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(l)var d=l(r)}for(n&&n(t);i<a.length;i++)s=a[i],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(d)},t=self.webpackChunkbloom_in_green=self.webpackChunkbloom_in_green||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var o=r.O(void 0,[58],(()=>r(958)));o=r.O(o)})();