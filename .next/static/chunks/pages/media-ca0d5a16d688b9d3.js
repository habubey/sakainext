(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8361],{2722:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/media",function(){return c(2577)}])},4030:function(a,b,c){"use strict";c.d(b,{M:function(){return g}});var d=c(1438),e=c(2951),f=c(1752),g=function(){function a(){(0,d.Z)(this,a),this.contextPath=(0,f.default)().publicRuntimeConfig.contextPath}return(0,e.Z)(a,[{key:"getProductsSmall",value:function(){return fetch(this.contextPath+"/demo/data/products-small.json",{headers:{"Cache-Control":"no-cache"}}).then(function(a){return a.json()}).then(function(a){return a.data})}},{key:"getProducts",value:function(){return fetch(this.contextPath+"/demo/data/products.json",{headers:{"Cache-Control":"no-cache"}}).then(function(a){return a.json()}).then(function(a){return a.data})}},{key:"getProductsWithOrdersSmall",value:function(){return fetch(this.contextPath+"/demo/data/products-orders-small.json",{headers:{"Cache-Control":"no-cache"}}).then(function(a){return a.json()}).then(function(a){return a.data})}}]),a}()},2577:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return o}});var d=c(5893),e=c(7294),f=c(824),g=c(2068),h=c(9403),i=c(9962),j=c(4030),k=c(1438),l=c(2951),m=c(1752),n=function(){function a(){(0,k.Z)(this,a),this.contextPath=(0,m.default)().publicRuntimeConfig.contextPath}return(0,l.Z)(a,[{key:"getImages",value:function(){return fetch(this.contextPath+"/demo/data/photos.json",{headers:{"Cache-Control":"no-cache"}}).then(function(a){return a.json()}).then(function(a){return a.data})}}]),a}(),o=function(){var a=(0,m.default)().publicRuntimeConfig.contextPath,b=(0,e.useState)([]),c=b[0],k=b[1],l=(0,e.useState)([]),o=l[0],p=l[1];(0,e.useEffect)(function(){new j.M().getProductsSmall().then(function(a){return k(a)}),new n().getImages().then(function(a){return p(a)})},[]);var q=function(b){return(0,d.jsx)("div",{className:"product-item",children:(0,d.jsxs)("div",{className:"product-item-content",children:[(0,d.jsx)("div",{className:"mb-3",children:(0,d.jsx)("img",{src:"".concat(a,"/demo/images/product/").concat(b.image),alt:b.name,className:"product-image"})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h4",{className:"p-mb-1",children:b.name}),(0,d.jsxs)("h6",{className:"mt-0 mb-3",children:["$",b.price]}),(0,d.jsx)("span",{className:"product-badge status-".concat(b.inventoryStatus.toLowerCase()),children:b.inventoryStatus}),(0,d.jsxs)("div",{className:"car-buttons mt-5",children:[(0,d.jsx)(h.z,{type:"button",className:"p-button p-button-rounded mr-2",icon:"pi pi-search"}),(0,d.jsx)(h.z,{type:"button",className:"p-button-success p-button-rounded mr-2",icon:"pi pi-star"}),(0,d.jsx)(h.z,{type:"button",className:"p-button-help p-button-rounded",icon:"pi pi-cog"})]})]})]})})},r=function(b){return(0,d.jsx)("img",{src:"".concat(a,"/").concat(b.itemImageSrc),alt:b.alt,style:{width:"100%",display:"block"}})},s=function(b){return(0,d.jsx)("img",{src:"".concat(a,"/").concat(b.thumbnailImageSrc),alt:b.alt,style:{width:"100%",display:"block"}})};return(0,d.jsxs)("div",{className:"grid p-fluid media-demo",children:[(0,d.jsx)("div",{className:"col-12",children:(0,d.jsxs)("div",{className:"card",children:[(0,d.jsx)("h5",{children:"Carousel"}),(0,d.jsx)(f.l,{value:c,numVisible:3,numScroll:3,responsiveOptions:[{breakpoint:"1024px",numVisible:3,numScroll:3},{breakpoint:"768px",numVisible:2,numScroll:2},{breakpoint:"560px",numVisible:1,numScroll:1},],itemTemplate:q})]})}),(0,d.jsx)("div",{className:"col-12",children:(0,d.jsxs)("div",{className:"card",children:[(0,d.jsx)("h5",{children:"Galleria"}),(0,d.jsx)(g.d,{value:o,responsiveOptions:[{breakpoint:"1024px",numVisible:5},{breakpoint:"960px",numVisible:4},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1},],numVisible:7,circular:!0,style:{maxWidth:"800px",margin:"auto"},item:r,thumbnail:s})]})}),(0,d.jsx)("div",{className:"col-12",children:(0,d.jsxs)("div",{className:"card",children:[(0,d.jsx)("h5",{children:"Image"}),(0,d.jsx)("div",{className:"flex justify-content-center",children:(0,d.jsx)(i.E,{src:"".concat(a,"/demo/images/galleria/galleria11.jpg"),alt:"galleria",width:250,preview:!0})})]})})]})}}},function(a){a.O(0,[8265,9774,2888,179],function(){var b;return a(a.s=2722)}),_N_E=a.O()}])