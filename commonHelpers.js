import"./assets/modulepreload-polyfill-3cfb730f.js";import{S as n}from"./assets/vendor-10cb7c31.js";const s=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],t=document.querySelector("ul.gallery");s.forEach(i=>{const o=document.createElement("li");o.classList.add("gallery-item"),o.style.listStyleType="none";const a=document.createElement("a");a.classList.add("gallery-link"),a.href=i.original;const e=document.createElement("img");e.classList.add("gallery-image"),e.src=i.preview,e.dataset.source=i.original,e.alt=i.description,e.style.width="360px",e.style.height="200px",e.style.flexShrink="0",e.style.fontSize="0",a.appendChild(e),o.appendChild(a),t.appendChild(o)});t.style.display="flex";t.style.width="1440px";t.style.height="696px";t.style.padding="24px 156px";t.style.flexDirection="row";t.style.justifyContent="center";t.style.alignItems="flex-start";t.style.gap="24px";t.style.background="#FFF";t.style.overflow="auto";t.style.flexWrap="wrap";t.addEventListener("click",i=>{i.preventDefault();const o=i.target;if(o.nodeName!=="IMG")return;const a=o.dataset.source;basicLightbox.create(`
        <div class="modal">
            <img src="${a}" alt="${o.alt}" width="1112" height="640"></img>
        </div>
    `,{onShow:p=>{p.element().style.backgroundColor="rgba(46, 47, 66, 0.8)"}}).show()});new n(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map