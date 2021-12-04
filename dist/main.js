(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),a=n.n(r),o=n(645),s=n.n(o)()(a());s.push([e.id,"body {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.three {\n  width: 300px;\n}\n\n.task-list {\n  list-style: none;\n}\n\n.task-list li {\n  padding: 2.5px 0 2.5px 0;\n  border: 1px lightgray solid;\n  margin-left: -40px;\n  display: flex;\n  position: relative;\n}\n\n.crossed {\n  text-decoration: line-through;\n}\n\n.fas {\n  position: absolute;\n  right: 10px;\n}\n\n.fas:hover {\n  cursor: pointer;\n}\n",""]);const i=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&s[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},s=[],i=0;i<e.length;i++){var c=e[i],l=r.base?c[0]+r.base:c[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=a(f,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:m,references:1})}s.push(u)}return s}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var i=n(o[s]);t[i].references--}for(var c=r(e,a),l=0;l<o.length;l++){var d=n(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),s=n.n(o),i=n(565),c=n.n(i),l=n(216),d=n.n(l),u=n(589),p=n.n(u),f=n(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=s().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=e=>{for(let t=0;t<e.length;t+=1)e[t].id=parseInt([t],10)+1},h=document.querySelector(".task-list"),y=document.getElementById("task-form"),g=document.getElementById("form-input"),x=JSON.parse(localStorage.getItem("list"))||[],b=()=>{localStorage.setItem("list",JSON.stringify(x))},E=()=>{(e=>{for(;e.firstChild;)e.removeChild(e.firstChild)})(h),x.forEach((e=>{const t=document.createElement("li");t.classList.add("task");const n=document.createElement("input");n.type="checkbox",n.classList.add("checkbox");const r=document.createElement("label");r.classList.add("task-label");const a=document.createElement("i");a.classList.add("fas"),a.classList.add("fa-trash-alt"),r.innerHTML=e.name,t.append(n),t.append(r),t.append(a),h.appendChild(t),n.addEventListener("change",(t=>{const n=t.target.parentNode;!0===t.target.checked?(function(e){e.completed=!0}(e),n.classList.add("crossed"),b()):(function(e){e.completed=!1}(e),n.classList.remove("crossed"),b())})),a.addEventListener("click",(t=>{t.target.parentNode.remove();const n=x.indexOf(e);x.splice(n,1),v(x),b()}))}))};y.addEventListener("submit",(e=>{e.preventDefault();const t=g.value;if(""===t)return;const n={id:0,name:t,completed:!1};g.value=null,x.push(n),v(x),b(),E()})),E()})()})();