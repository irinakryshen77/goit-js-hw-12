import{a as h,S as P,i as a}from"./assets/vendor-C1DvvBV_.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();h.defaults.baseURL="https://pixabay.com/api";async function m(r,o=1){const{data:s}=await h.get("/",{params:{key:"57438008-644d4578100eb60c8f5ec14ee",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:15}});return s}const p=document.querySelector(".gallery"),O=new P(".gallery a",{captionsData:"alt",captionDelay:250}),f=document.querySelector(".loader"),y=document.querySelector(".load-btn");function g(r){const o=r.map(({largeImageURL:s,webformatURL:i,tags:e,likes:t,views:n,comments:S,downloads:v})=>`<li class="gallery-item">
      <a href="${s}">
        <img
          src="${i}"
          alt="${e}"
          width="360"
        />
      </a>

      <ul class="descriprion">
        <li>Likes <span>${t}</span></li>
        <li>Views <span>${n}</span></li>
        <li>Comments <span>${S}</span></li>
        <li>Downloads <span>${v}</span></li>
      </ul>
    </li>
`).join("");p.insertAdjacentHTML("beforeend",o),O.refresh()}function R(){p.innerHTML=""}function L(){f.classList.remove("is-hidden")}function b(){f.classList.add("is-hidden")}function w(){y.classList.remove("is-hidden")}function c(){y.classList.add("is-hidden")}const q=document.querySelector(".form");q.addEventListener("submit",M);const $=document.querySelector(".load-btn");$.addEventListener("click",x);let l=1,u="",d=0;async function M(r){if(r.preventDefault(),u=r.currentTarget.elements["search-text"].value.trim(),u===""){a.show({message:"Please enter search word",color:"red",position:"topRight",timeout:5e3});return}R(),L(),l=1;try{const s=await m(u,l),i=s.hits;if(i.length===0){a.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",timeout:5e3});return}g(i),d=Math.ceil(s.totalHits/15),d>1?w():(a.show({message:"We're sorry, but you've reached the end of search results.",color:"blue",position:"topRight",timeout:5e3}),c())}catch{a.show({message:"Ops... try again!",color:"red",position:"topRight",timeout:5e3}),c()}finally{b(),q.reset()}}async function x(){c(),L(),l+=1;try{const o=(await m(u,l)).hits;if(o.length===0){a.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",timeout:5e3});return}g(o),d>l?w():(a.show({message:"We're sorry, but you've reached the end of search results.",color:"blue",position:"topRight",timeout:5e3}),c())}catch{a.show({message:"Ops... try again!",color:"red",position:"topRight",timeout:5e3}),c()}finally{b()}}
//# sourceMappingURL=index.js.map
