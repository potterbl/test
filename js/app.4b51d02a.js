(function(){"use strict";var t={288:function(t,e,n){var r=n(963),a=n(252);function o(t,e,n,r,o,u){const i=(0,a.up)("request-form"),s=(0,a.up)("result-form");return(0,a.wg)(),(0,a.iD)("div",null,[0==o.currentStep?((0,a.wg)(),(0,a.j4)(i,{key:0,onHandleData:u.dataHandler},null,8,["onHandleData"])):((0,a.wg)(),(0,a.j4)(s,{key:1,dataValue:o.data,onHandleStep:u.stepHandler},null,8,["dataValue","onHandleStep"]))])}var u={name:"App",data(){return{data:"",currentStep:0}},methods:{dataHandler(t){this.data=t,console.log(this.data),this.currentStep=1},stepHandler(t){this.currentStep=t}}},i=n(744);const s=(0,i.Z)(u,[["render",o]]);var l=s;function d(t,e,n,o,u,i){return(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{type:"number",placeholder:"Enter zip here...","onUpdate:modelValue":e[0]||(e[0]=t=>u.ipnutArea=t)},null,512)),[[r.nr,u.ipnutArea]])}var p={name:"input-zip",data(){return{ipnutArea:""}}};const c=(0,i.Z)(p,[["render",d],["__scopeId","data-v-41bf84de"]]);var f=c;const h=t=>((0,a.dD)("data-v-5c23270b"),t=t(),(0,a.Cn)(),t),m={class:"request__form"},v=h((()=>(0,a._)("h1",null,"Enter ZIP-Code",-1)));function g(t,e,n,r,o,u){const i=(0,a.up)("input-zip"),s=(0,a.up)("button-render");return(0,a.wg)(),(0,a.iD)("div",m,[v,(0,a.Wm)(i,{modelValue:o.zip,"onUpdate:modelValue":e[0]||(e[0]=t=>o.zip=t)},null,8,["modelValue"]),(0,a.Wm)(s,{style:{"margin-top":"20px"},onClick:u.sendRequest},null,8,["onClick"])])}var w=n(154),_={name:"request-form",data(){return{zip:"",data:""}},methods:{sendRequest(){w.Z.get(`https://api.zippopotam.us/us/${this.zip}`).then((t=>{this.$emit("handleData",t.data)})).catch((t=>{alert(t)}))}}};const b=(0,i.Z)(_,[["render",g],["__scopeId","data-v-5c23270b"]]);var y=b;function z(t,e,n,r,o,u){return(0,a.wg)(),(0,a.iD)("button",null,"Render")}var A={name:"button-render"};const S=(0,i.Z)(A,[["render",z],["__scopeId","data-v-f9277538"]]);var k=S,O=n(577);const j={class:"result__form"};function H(t,e,n,r,o,u){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("button",{class:"back__button",onClick:e[0]||(e[0]=(...t)=>u.firstStage&&u.firstStage(...t))}," Go to first stage "),(0,a._)("div",j,[(0,a._)("p",null,"Entered ZIP-Code: "+(0,O.zw)(n.dataValue["post code"]),1),(0,a._)("p",null,"State: "+(0,O.zw)(n.dataValue.places[0].state),1),(0,a._)("p",null,"City: "+(0,O.zw)(n.dataValue.places[0]["place name"]),1),(0,a._)("p",null,"IP: "+(0,O.zw)(this.ipAddress),1),(0,a._)("p",null,"User Agent: "+(0,O.zw)(this.userAgent),1),(0,a._)("p",null,"HTTP Referer: "+(0,O.zw)(this.httpReferer),1),(0,a._)("p",null,"UTM: "+(0,O.zw)(this.utmParams),1)])],64)}var P={name:"result-form",props:["dataValue"],data(){return{ipAddress:"",userAgent:"",httpReferer:"",utmParams:""}},methods:{firstStage(){this.$emit("handleStep",0)}},mounted(){fetch("https://api.ipify.org?format=json").then((t=>t.json())).then((t=>{this.ipAddress=t.ip})).catch((t=>console.error(t))),this.userAgent=navigator.userAgent,this.httpReferer=document.referrer;const t=new URLSearchParams(window.location.search);this.utmParams=t.getAll("utm_source")}};const V=(0,i.Z)(P,[["render",H],["__scopeId","data-v-1d939b8a"]]);var C=V,D=[f,y,k,C];const R=(0,r.ri)(l);D.forEach((t=>{R.component(t.name,t)})),R.mount("#app")}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,o){if(!r){var u=1/0;for(d=0;d<t.length;d++){r=t[d][0],a=t[d][1],o=t[d][2];for(var i=!0,s=0;s<r.length;s++)(!1&o||u>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(i=!1,o<u&&(u=o));if(i){t.splice(d--,1);var l=a();void 0!==l&&(e=l)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[r,a,o]}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,o,u=r[0],i=r[1],s=r[2],l=0;if(u.some((function(e){return 0!==t[e]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(s)var d=s(n)}for(e&&e(r);l<u.length;l++)o=u[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(d)},r=self["webpackChunkrender"]=self["webpackChunkrender"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(288)}));r=n.O(r)})();
//# sourceMappingURL=app.4b51d02a.js.map