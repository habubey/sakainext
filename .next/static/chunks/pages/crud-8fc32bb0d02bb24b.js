(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5875],{7570:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/crud",function(){return c(4976)}])},4030:function(a,b,c){"use strict";c.d(b,{M:function(){return g}});var d=c(1438),e=c(2951),f=c(1752),g=function(){function a(){(0,d.Z)(this,a),this.contextPath=(0,f.default)().publicRuntimeConfig.contextPath}return(0,e.Z)(a,[{key:"getProductsSmall",value:function(){return fetch(this.contextPath+"/demo/data/products-small.json",{headers:{"Cache-Control":"no-cache"}}).then(function(a){return a.json()}).then(function(a){return a.data})}},{key:"getProducts",value:function(){return fetch(this.contextPath+"/demo/data/products.json",{headers:{"Cache-Control":"no-cache"}}).then(function(a){return a.json()}).then(function(a){return a.data})}},{key:"getProductsWithOrdersSmall",value:function(){return fetch(this.contextPath+"/demo/data/products-orders-small.json",{headers:{"Cache-Control":"no-cache"}}).then(function(a){return a.json()}).then(function(a){return a.data})}}]),a}()},4976:function(a,b,c){"use strict";c.r(b);var d=c(1799),e=c(797),f=c(5893),g=c(7294),h=c(4184),i=c.n(h),j=c(2896),k=c(8650),l=c(4420),m=c(9403),n=c(6062),o=c(5969),p=c(5537),q=c(2552),r=c(9710),s=c(1176),t=c(3861),u=c(6094),v=c(4030),w=c(1752),x=function(){var a={id:null,name:"",image:null,description:"",category:null,price:0,quantity:0,rating:0,inventoryStatus:"INSTOCK"},b=(0,g.useState)(null),c=b[0],h=b[1],x=(0,g.useState)(!1),y=x[0],z=x[1],A=(0,g.useState)(!1),B=A[0],C=A[1],D=(0,g.useState)(!1),E=D[0],F=D[1],G=(0,g.useState)(a),H=G[0],I=G[1],J=(0,g.useState)(null),K=J[0],L=J[1],M=(0,g.useState)(!1),N=M[0],O=M[1],P=(0,g.useState)(null),Q=P[0],R=P[1],S=(0,g.useRef)(null),T=(0,g.useRef)(null),U=(0,w.default)().publicRuntimeConfig.contextPath;(0,g.useEffect)(function(){new v.M().getProducts().then(function(a){return h(a)})},[]);var V=function(){I(a),O(!1),z(!0)},W=function(){O(!1),z(!1)},X=function(){C(!1)},Y=function(){F(!1)},Z=function(){if(O(!0),H.name.trim()){var b=(0,e.Z)(c),f=(0,d.Z)({},H);H.id?(b[ab(H.id)]=f,S.current.show({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):(f.id=ac(),f.image="product-placeholder.svg",b.push(f),S.current.show({severity:"success",summary:"Successful",detail:"Product Created",life:3e3})),h(b),z(!1),I(a)}},$=function(a){I((0,d.Z)({},a)),z(!0)},_=function(a){I(a),C(!0)},aa=function(){h(c.filter(function(a){return a.id!==H.id})),C(!1),I(a),S.current.show({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3})},ab=function(a){for(var b=-1,d=0;d<c.length;d++)if(c[d].id===a){b=d;break}return b},ac=function(){for(var a="",b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=0;c<5;c++)a+=b.charAt(Math.floor(Math.random()*b.length));return a},ad=function(){T.current.exportCSV()},ae=function(){F(!0)},af=function(){h(c.filter(function(a){return!K.includes(a)})),F(!1),L(null),S.current.show({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})},ag=function(a){var b=(0,d.Z)({},H);b.category=a.value,I(b)},ah=function(a,b){var c=a.target&&a.target.value||"",e=(0,d.Z)({},H);e["".concat(b)]=c,I(e)},ai=function(a,b){var c=a.value||0,e=(0,d.Z)({},H);e["".concat(b)]=c,I(e)},aj=function(){return(0,f.jsx)(g.Fragment,{children:(0,f.jsxs)("div",{className:"my-2",children:[(0,f.jsx)(m.z,{label:"New",icon:"pi pi-plus",className:"p-button-success mr-2",onClick:V}),(0,f.jsx)(m.z,{label:"Delete",icon:"pi pi-trash",className:"p-button-danger",onClick:ae,disabled:!K||!K.length})]})})},ak=function(){return(0,f.jsxs)(g.Fragment,{children:[(0,f.jsx)(n.p,{mode:"basic",accept:"image/*",maxFileSize:1e6,label:"Import",chooseLabel:"Import",className:"mr-2 inline-block"}),(0,f.jsx)(m.z,{label:"Export",icon:"pi pi-upload",className:"p-button-help",onClick:ad})]})},al=function(a){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("span",{className:"p-column-title",children:"Code"}),a.code]})},am=function(a){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("span",{className:"p-column-title",children:"Name"}),a.name]})},an=function(a){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("span",{className:"p-column-title",children:"Image"}),(0,f.jsx)("img",{src:"".concat(U,"/demo/images/product/").concat(a.image),alt:a.image,className:"shadow-2",width:"100"})]})},ao=function(a){var b;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("span",{className:"p-column-title",children:"Price"}),(b=a.price).toLocaleString("en-US",{style:"currency",currency:"USD"})]})},ap=function(a){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("span",{className:"p-column-title",children:"Category"}),a.category]})},aq=function(a){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("span",{className:"p-column-title",children:"Reviews"}),(0,f.jsx)(o.i,{value:a.rating,readOnly:!0,cancel:!1})]})},ar=function(a){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("span",{className:"p-column-title",children:"Status"}),(0,f.jsx)("span",{className:"product-badge status-".concat(a.inventoryStatus.toLowerCase()),children:a.inventoryStatus})]})},as=function(a){return(0,f.jsxs)("div",{className:"actions",children:[(0,f.jsx)(m.z,{icon:"pi pi-pencil",className:"p-button-rounded p-button-success mr-2",onClick:function(){return $(a)}}),(0,f.jsx)(m.z,{icon:"pi pi-trash",className:"p-button-rounded p-button-warning mt-2",onClick:function(){return _(a)}})]})},at=(0,f.jsxs)("div",{className:"flex flex-column md:flex-row md:justify-content-between md:align-items-center",children:[(0,f.jsx)("h5",{className:"m-0",children:"Manage Products"}),(0,f.jsxs)("span",{className:"block mt-2 md:mt-0 p-input-icon-left",children:[(0,f.jsx)("i",{className:"pi pi-search"}),(0,f.jsx)(u.o,{type:"search",onInput:function(a){return R(a.target.value)},placeholder:"Search..."})]})]}),au=(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m.z,{label:"Cancel",icon:"pi pi-times",className:"p-button-text",onClick:W}),(0,f.jsx)(m.z,{label:"Save",icon:"pi pi-check",className:"p-button-text",onClick:Z})]}),av=(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m.z,{label:"No",icon:"pi pi-times",className:"p-button-text",onClick:X}),(0,f.jsx)(m.z,{label:"Yes",icon:"pi pi-check",className:"p-button-text",onClick:aa})]}),aw=(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m.z,{label:"No",icon:"pi pi-times",className:"p-button-text",onClick:Y}),(0,f.jsx)(m.z,{label:"Yes",icon:"pi pi-check",className:"p-button-text",onClick:af})]});return(0,f.jsx)("div",{className:"grid crud-demo",children:(0,f.jsx)("div",{className:"col-12",children:(0,f.jsxs)("div",{className:"card",children:[(0,f.jsx)(l.F,{ref:S}),(0,f.jsx)(p.o,{className:"mb-4",left:aj,right:ak}),(0,f.jsxs)(j.w,{ref:T,value:c,selection:K,onSelectionChange:function(a){return L(a.value)},dataKey:"id",paginator:!0,rows:10,rowsPerPageOptions:[5,10,25],className:"datatable-responsive",paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",globalFilter:Q,emptyMessage:"No products found.",header:at,responsiveLayout:"scroll",children:[(0,f.jsx)(k.s,{selectionMode:"multiple",headerStyle:{width:"3rem"}}),(0,f.jsx)(k.s,{field:"code",header:"Code",sortable:!0,body:al,headerStyle:{width:"14%",minWidth:"10rem"}}),(0,f.jsx)(k.s,{field:"name",header:"Name",sortable:!0,body:am,headerStyle:{width:"14%",minWidth:"10rem"}}),(0,f.jsx)(k.s,{header:"Image",body:an,headerStyle:{width:"14%",minWidth:"10rem"}}),(0,f.jsx)(k.s,{field:"price",header:"Price",body:ao,sortable:!0,headerStyle:{width:"14%",minWidth:"8rem"}}),(0,f.jsx)(k.s,{field:"category",header:"Category",sortable:!0,body:ap,headerStyle:{width:"14%",minWidth:"10rem"}}),(0,f.jsx)(k.s,{field:"rating",header:"Reviews",body:aq,sortable:!0,headerStyle:{width:"14%",minWidth:"10rem"}}),(0,f.jsx)(k.s,{field:"inventoryStatus",header:"Status",body:ar,sortable:!0,headerStyle:{width:"14%",minWidth:"10rem"}}),(0,f.jsx)(k.s,{body:as})]}),(0,f.jsxs)(t.V,{visible:y,style:{width:"450px"},header:"Product Details",modal:!0,className:"p-fluid",footer:au,onHide:W,children:[H.image&&(0,f.jsx)("img",{src:"".concat(U,"/demo/images/product/").concat(H.image),alt:H.image,width:"150",className:"mt-0 mx-auto mb-5 block shadow-2"}),(0,f.jsxs)("div",{className:"field",children:[(0,f.jsx)("label",{htmlFor:"name",children:"Name"}),(0,f.jsx)(u.o,{id:"name",value:H.name,onChange:function(a){return ah(a,"name")},required:!0,autoFocus:!0,className:i()({"p-invalid":N&&!H.name})}),N&&!H.name&&(0,f.jsx)("small",{className:"p-invalid",children:"Name is required."})]}),(0,f.jsxs)("div",{className:"field",children:[(0,f.jsx)("label",{htmlFor:"description",children:"Description"}),(0,f.jsx)(q.g,{id:"description",value:H.description,onChange:function(a){return ah(a,"description")},required:!0,rows:3,cols:20})]}),(0,f.jsxs)("div",{className:"field",children:[(0,f.jsx)("label",{className:"mb-3",children:"Category"}),(0,f.jsxs)("div",{className:"formgrid grid",children:[(0,f.jsxs)("div",{className:"field-radiobutton col-6",children:[(0,f.jsx)(r.E,{inputId:"category1",name:"category",value:"Accessories",onChange:ag,checked:"Accessories"===H.category}),(0,f.jsx)("label",{htmlFor:"category1",children:"Accessories"})]}),(0,f.jsxs)("div",{className:"field-radiobutton col-6",children:[(0,f.jsx)(r.E,{inputId:"category2",name:"category",value:"Clothing",onChange:ag,checked:"Clothing"===H.category}),(0,f.jsx)("label",{htmlFor:"category2",children:"Clothing"})]}),(0,f.jsxs)("div",{className:"field-radiobutton col-6",children:[(0,f.jsx)(r.E,{inputId:"category3",name:"category",value:"Electronics",onChange:ag,checked:"Electronics"===H.category}),(0,f.jsx)("label",{htmlFor:"category3",children:"Electronics"})]}),(0,f.jsxs)("div",{className:"field-radiobutton col-6",children:[(0,f.jsx)(r.E,{inputId:"category4",name:"category",value:"Fitness",onChange:ag,checked:"Fitness"===H.category}),(0,f.jsx)("label",{htmlFor:"category4",children:"Fitness"})]})]})]}),(0,f.jsxs)("div",{className:"formgrid grid",children:[(0,f.jsxs)("div",{className:"field col",children:[(0,f.jsx)("label",{htmlFor:"price",children:"Price"}),(0,f.jsx)(s.R,{id:"price",value:H.price,onValueChange:function(a){return ai(a,"price")},mode:"currency",currency:"USD",locale:"en-US"})]}),(0,f.jsxs)("div",{className:"field col",children:[(0,f.jsx)("label",{htmlFor:"quantity",children:"Quantity"}),(0,f.jsx)(s.R,{id:"quantity",value:H.quantity,onValueChange:function(a){return ai(a,"quantity")},integeronly:!0})]})]})]}),(0,f.jsx)(t.V,{visible:B,style:{width:"450px"},header:"Confirm",modal:!0,footer:av,onHide:X,children:(0,f.jsxs)("div",{className:"flex align-items-center justify-content-center",children:[(0,f.jsx)("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),H&&(0,f.jsxs)("span",{children:["Are you sure you want to delete ",(0,f.jsx)("b",{children:H.name}),"?"]})]})}),(0,f.jsx)(t.V,{visible:E,style:{width:"450px"},header:"Confirm",modal:!0,footer:aw,onHide:Y,children:(0,f.jsxs)("div",{className:"flex align-items-center justify-content-center",children:[(0,f.jsx)("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),H&&(0,f.jsx)("span",{children:"Are you sure you want to delete the selected products?"})]})})]})})})};b.default=x},2552:function(a,b,c){"use strict";c.d(b,{g:function(){return h}});var d=c(7294),e=c(7074),f=c(3643);function g(){return(g=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var h=d.memo(d.forwardRef(function(a,b){var c=d.useRef(b),i=d.useRef(0),j=function(b){a.autoResize&&n(),a.onFocus&&a.onFocus(b)},k=function(b){a.autoResize&&n(),a.onBlur&&a.onBlur(b)},l=function(b){a.autoResize&&n(),a.onKeyUp&&a.onKeyUp(b)},m=function(b){a.autoResize&&n(),a.onInput&&a.onInput(b);var c=b.target;f.gb.isNotEmpty(c.value)?f.p7.addClass(c,"p-filled"):f.p7.removeClass(c,"p-filled")},n=function(a){var b=c.current;b&&f.p7.isVisible(b)&&(i.current||(i.current=b.scrollHeight,b.style.overflow="hidden"),(i.current!==b.scrollHeight||a)&&(b.style.height="",b.style.height=b.scrollHeight+"px",parseFloat(b.style.height)>=parseFloat(b.style.maxHeight)?(b.style.overflowY="scroll",b.style.height=b.style.maxHeight):b.style.overflow="hidden",i.current=b.scrollHeight))},o=c.current&&c.current.value,p=d.useMemo(function(){return f.gb.isNotEmpty(a.value)||f.gb.isNotEmpty(a.defaultValue)||f.gb.isNotEmpty(o)},[a.value,a.defaultValue,o]);d.useEffect(function(){f.gb.combinedRefs(c,b)},[c,b]),d.useEffect(function(){a.autoResize&&n(!0)},[a.autoResize]);var q=f.gb.isNotEmpty(a.tooltip),r=f.gb.findDiffKeys(a,h.defaultProps),s=(0,f.AK)("p-inputtextarea p-inputtext p-component",{"p-disabled":a.disabled,"p-filled":p,"p-inputtextarea-resizable":a.autoResize},a.className);return d.createElement(d.Fragment,null,d.createElement("textarea",g({ref:c},r,{className:s,onFocus:j,onBlur:k,onKeyUp:l,onInput:m})),q&&d.createElement(e.u,g({target:c,content:a.tooltip},a.tooltipOptions)))}));h.displayName="InputTextarea",h.defaultProps={__TYPE:"InputTextarea",autoResize:!1,tooltip:null,tooltipOptions:null,onInput:null}},5969:function(a,b,c){"use strict";c.d(b,{i:function(){return k}});var d=c(7294),e=c(7074),f=c(3643);function g(){return(g=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function h(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function i(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function j(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?i(Object(c),!0).forEach(function(b){h(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):i(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}var k=d.memo(d.forwardRef(function(a,b){var c=d.useRef(null),h=!a.disabled&&!a.readOnly,i=h?0:null,l=function(b,c){h&&a.onChange&&a.onChange({originalEvent:b,value:c,stopPropagation:function(){},preventDefault:function(){},target:{name:a.name,id:a.id,value:c}}),b.preventDefault()},m=function(b){h&&a.onChange&&a.onChange({originalEvent:b,value:null,stopPropagation:function(){},preventDefault:function(){},target:{name:a.name,id:a.id,value:null}}),b.preventDefault()},n=function(a,b){"Enter"===a.key&&l(a,b)},o=function(a){"Enter"===a.key&&m(a)};d.useImperativeHandle(b,function(){return{props:a,getElement:function(){return c.current}}});var p=f.gb.isNotEmpty(a.tooltip),q=f.gb.findDiffKeys(a,k.defaultProps),r=(0,f.AK)("p-rating",{"p-disabled":a.disabled,"p-readonly":a.readOnly},a.className),s=function(){if(a.cancel){var b=f.Cz.getJSXIcon(a.cancelIcon,j({className:"p-rating-icon p-rating-cancel"},a.cancelIconProps),{props:a});return d.createElement("div",{className:"p-rating-item p-rating-cancel-item",onClick:m,tabIndex:i,onKeyDown:o},b)}return null}(),t=Array.from({length:a.stars},function(a,b){return b+1}).map(function(b){var c=b<=a.value,e=(0,f.AK)("p-rating-item",{"p-rating-item-active":c}),g=c?{type:a.onIcon,props:a.onIconProps}:{type:a.offIcon,props:a.offIconProps},h=f.Cz.getJSXIcon(g.type,j({className:"p-rating-icon"},g.props),{props:a});return d.createElement("div",{key:b,className:e,tabIndex:i,onClick:function(a){return l(a,b)},onKeyDown:function(a){return n(a,b)}},h)});return d.createElement(d.Fragment,null,d.createElement("div",g({ref:c,id:a.id,className:r,style:a.style},q),s,t),p&&d.createElement(e.u,g({target:c,content:a.tooltip},a.tooltipOptions)))}));k.displayName="Rating",k.defaultProps={__TYPE:"Rating",id:null,value:null,disabled:!1,readOnly:!1,stars:5,cancel:!0,style:null,className:null,tooltip:null,tooltipOptions:null,onChange:null,onIcon:"pi pi-star-fill",offIcon:"pi pi-star",cancelIcon:"pi pi-ban",cancelIconProps:null,onIconProps:null,offIconProps:null}},5537:function(a,b,c){"use strict";c.d(b,{o:function(){return g}});var d=c(7294),e=c(3643);function f(){return(f=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var g=d.memo(d.forwardRef(function(a,b){var c=d.useRef(null),h=e.gb.findDiffKeys(a,g.defaultProps),i=(0,e.AK)("p-toolbar p-component",a.className),j=e.gb.getJSXElement(a.left,a),k=e.gb.getJSXElement(a.right,a);return d.useImperativeHandle(b,function(){return{props:a,getElement:function(){return c.current}}}),d.createElement("div",f({id:a.id,ref:c,className:i,style:a.style,role:"toolbar"},h),d.createElement("div",{className:"p-toolbar-group-left"},j),d.createElement("div",{className:"p-toolbar-group-right"},k))}));g.displayName="Toolbar",g.defaultProps={__TYPE:"Toolbar",id:null,style:null,className:null,left:null,right:null}},797:function(a,b,c){"use strict";function d(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function e(a){return function(a){if(Array.isArray(a))return d(a)}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a)||function(a,b){if(a){if("string"==typeof a)return d(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return d(a,b)}}(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}c.d(b,{Z:function(){return e}})}},function(a){a.O(0,[5257,8725,1635,2727,4420,6062,6998,9774,2888,179],function(){var b;return a(a.s=7570)}),_N_E=a.O()}])