import{a as h,S as P,i as a}from"./assets/vendor-C1DvvBV_.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();h.defaults.baseURL="https://pixabay.com/api";async function m(s,o=1){const{data:r}=await h.get("/",{params:{key:"57438008-644d4578100eb60c8f5ec14ee",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}});return r}const g=document.querySelector(".gallery"),R=new P(".gallery a",{captionsData:"alt",captionDelay:250}),p=document.querySelector(".loader"),y=document.querySelector(".load-btn");function f(s){const o=s.map(({largeImageURL:r,webformatURL:i,tags:e,likes:t,views:l,comments:S,downloads:v})=>`<li class="gallery-item">
      <a href="${r}">
        <img
          src="${i}"
          alt="${e}"
          width="360"
        />
      </a>

      <ul class="descriprion">
        <li>Likes <span>${t}</span></li>
        <li>Views <span>${l}</span></li>
        <li>Comments <span>${S}</span></li>
        <li>Downloads <span>${v}</span></li>
      </ul>
    </li>
`).join("");g.insertAdjacentHTML("beforeend",o),R.refresh()}function $(){g.innerHTML=""}function b(){p.classList.remove("is-hidden")}function w(){p.classList.add("is-hidden")}function L(){y.classList.remove("is-hidden")}function n(){y.classList.add("is-hidden")}const q=document.querySelector(".form");q.addEventListener("submit",x);const O=document.querySelector(".load-btn");O.addEventListener("click",B);const M=document.querySelector(".gallery");let c=1,u="",d=0;async function x(s){if(s.preventDefault(),u=s.currentTarget.elements["search-text"].value.trim(),u===""){a.show({message:"Please enter search word",color:"red",position:"topRight",timeout:5e3});return}n(),$(),b(),c=1;try{const r=await m(u,c),i=r.hits;if(i.length===0){a.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",timeout:5e3});return}f(i),d=Math.ceil(r.totalHits/15),d>1?L():(a.show({message:"We're sorry, but you've reached the end of search results.",color:"blue",position:"topRight",timeout:5e3}),n())}catch{a.show({message:"Ops... try again!",color:"red",position:"topRight",timeout:5e3}),n()}finally{w(),q.reset()}}async function B(){n(),b(),c+=1;try{const o=(await m(u,c)).hits;if(o.length===0){a.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight",timeout:5e3});return}const r=M.firstElementChild.getBoundingClientRect().height;f(o),window.scrollBy({top:r*2,behavior:"smooth"}),d>c?L():(a.show({message:"We're sorry, but you've reached the end of search results.",color:"blue",position:"topRight",timeout:5e3}),n())}catch{a.show({message:"Ops... try again!",color:"red",position:"topRight",timeout:5e3}),n()}finally{w()}}
//# sourceMappingURL=index.js.map
