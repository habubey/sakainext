(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3657],{1974:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chart",function(){return c(7410)}])},7410:function(a,b,c){"use strict";c.r(b);var d=c(5893),e=c(7294),f=c(3741),g=c(9021),h={labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:"#2f4860",borderColor:"#2f4860",tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:"#00bb7e",borderColor:"#00bb7e",tension:.4},]},i={labels:["A","B","C"],datasets:[{data:[300,50,100],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]},]},j={datasets:[{data:[11,16,7,3,14],backgroundColor:["#FF6384","#4BC0C0","#FFCE56","#E7E9ED","#36A2EB"],label:"My dataset"},],labels:["Red","Green","Yellow","Grey","Blue"]},k={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"#2f4860",data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:"#00bb7e",data:[28,48,40,19,86,27,90]},]},l={labels:["A","B","C"],datasets:[{data:[300,50,100],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]},]},m={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]},]},n=function(a){var b=(0,e.useState)(null),c=b[0],n=b[1],o=(0,e.useState)(null),p=o[0],q=o[1],r=(0,e.useState)(null),s=r[0],t=r[1],u=(0,e.useState)(null),v=u[0],w=u[1],x=(0,e.useState)(null),y=x[0],z=x[1],A=(0,e.useContext)(g.V).layoutColorMode,B=function(){n({plugins:{legend:{labels:{color:"#495057"}}},scales:{x:{ticks:{color:"#495057"},grid:{color:"#ebedef"}},y:{ticks:{color:"#495057"},grid:{color:"#ebedef"}}}}),q({plugins:{legend:{labels:{color:"#495057"}}},scales:{x:{ticks:{color:"#495057"},grid:{color:"#ebedef"}},y:{ticks:{color:"#495057"},grid:{color:"#ebedef"}}}}),t({plugins:{legend:{labels:{color:"#495057"}}}}),w({plugins:{legend:{labels:{color:"#495057"}}},scales:{r:{grid:{color:"#ebedef"}}}}),z({plugins:{legend:{labels:{color:"#495057"}}},scales:{r:{grid:{color:"#ebedef"}}}})},C=function(){n({plugins:{legend:{labels:{color:"#ebedef"}}},scales:{x:{ticks:{color:"#ebedef"},grid:{color:"rgba(160, 167, 181, .3)"}},y:{ticks:{color:"#ebedef"},grid:{color:"rgba(160, 167, 181, .3)"}}}}),q({plugins:{legend:{labels:{color:"#ebedef"}}},scales:{x:{ticks:{color:"#ebedef"},grid:{color:"rgba(160, 167, 181, .3)"}},y:{ticks:{color:"#ebedef"},grid:{color:"rgba(160, 167, 181, .3)"}}}}),t({plugins:{legend:{labels:{color:"#ebedef"}}}}),w({plugins:{legend:{labels:{color:"#ebedef"}}},scales:{r:{grid:{color:"rgba(160, 167, 181, .3)"}}}}),z({plugins:{legend:{labels:{color:"#ebedef"}}},scales:{r:{grid:{color:"rgba(160, 167, 181, .3)"}}}})};return(0,e.useEffect)(function(){"light"===A?B():C()},[A]),(0,d.jsxs)("div",{className:"grid p-fluid",children:[(0,d.jsxs)("div",{className:"col-12 lg:col-6",children:[(0,d.jsxs)("div",{className:"card",children:[(0,d.jsx)("h5",{children:"Linear Chart"}),(0,d.jsx)(f.k,{type:"line",data:h,options:c})]}),(0,d.jsxs)("div",{className:"card flex flex-column align-items-center",children:[(0,d.jsx)("h5",{children:"Pie Chart"}),(0,d.jsx)(f.k,{type:"pie",data:i,options:s,style:{width:"50%"}})]}),(0,d.jsxs)("div",{className:"card flex flex-column align-items-center",children:[(0,d.jsx)("h5",{children:"Polar Area Chart"}),(0,d.jsx)(f.k,{type:"polarArea",data:j,options:v,style:{width:"50%"}})]})]}),(0,d.jsxs)("div",{className:"col-12 lg:col-6",children:[(0,d.jsxs)("div",{className:"card",children:[(0,d.jsx)("h5",{children:"Bar Chart"}),(0,d.jsx)(f.k,{type:"bar",data:k,options:p})]}),(0,d.jsxs)("div",{className:"card flex flex-column align-items-center",children:[(0,d.jsx)("h5",{children:"Doughnut Chart"}),(0,d.jsx)(f.k,{type:"doughnut",data:l,options:s,style:{width:"50%"}})]}),(0,d.jsxs)("div",{className:"card flex flex-column align-items-center",children:[(0,d.jsx)("h5",{children:"Radar Chart"}),(0,d.jsx)(f.k,{type:"radar",data:m,options:y,style:{width:"50%"}})]})]})]})};b.default=n},3741:function(a,b,c){"use strict";c.d(b,{k:function(){return i}});var d=c(7294),e=c(3308),f=c(3643);function g(){return(g=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var h=function(){try{return Chart}catch(a){return null}}(),i=d.memo(d.forwardRef(function(a,b){var j=d.useRef(null),k=d.useRef(null),l=d.useRef(null),m=function(){n();var b={type:a.type,data:a.data,options:a.options,plugins:a.plugins};h?k.current=new h(l.current,b):Promise.all([c.e(2757),c.e(1892)]).then(c.bind(c,9217)).then(function(a){n(),a&&(a.default?k.current=new a.default(l.current,b):k.current=new a(l.current,b))})},n=function(){k.current&&(k.current.destroy(),k.current=null)};d.useImperativeHandle(b,function(){return{props:a,getCanvas:function(){return l.current},getChart:function(){return k.current},getBase64Image:function(){return k.current.toBase64Image()},getElement:function(){return j.current},generateLegend:function(){return k.current&&k.current.generateLegend()},refresh:function(){return k.current&&k.current.update()}}}),d.useEffect(function(){m()}),(0,e.zq)(function(){n()});var o=f.gb.findDiffKeys(a,i.defaultProps),p=(0,f.AK)("p-chart",a.className),q=Object.assign({width:a.width,height:a.height},a.style);return d.createElement("div",g({id:a.id,ref:j,style:q,className:p},o),d.createElement("canvas",{ref:l,width:a.width,height:a.height}))}),function(a,b){return a.data===b.data&&a.options===b.options&&a.type===b.type});i.displayName="Chart",i.defaultProps={__TYPE:"Chart",id:null,type:null,data:null,options:null,plugins:null,width:null,height:null,style:null,className:null}}},function(a){a.O(0,[9774,2888,179],function(){var b;return a(a.s=1974)}),_N_E=a.O()}])