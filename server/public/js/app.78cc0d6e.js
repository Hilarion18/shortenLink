(function(t){function e(e){for(var o,i,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},a=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"eb8b51f4"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var c=new Error;a=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,n[1](c)}r[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container text-left home-app"},[n("router-link",{staticClass:"home-app",attrs:{to:"/"}},[n("h2",[t._v("Short Link Web")])])],1),n("div",{attrs:{id:"nav"}}),n("router-view")],1)},a=[],i=(n("034f"),n("2877")),s={},l=Object(i["a"])(s,r,a,!1,null,null,null),c=l.exports,u=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("home-component")],1)},p=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-component"},[n("div",{staticClass:"scope-input row"},[n("div",{staticClass:"col input-link"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.link.longUrl,expression:"link.longUrl"}],staticClass:"form-control",attrs:{type:"urlLink","aria-describedby":"urlLink",placeholder:"put your link here...."},domProps:{value:t.link.longUrl},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addLink(e)},input:function(e){e.target.composing||t.$set(t.link,"longUrl",e.target.value)}}})]),n("div",{staticClass:"col col-button"},[n("button",{staticClass:"button button--winona button--border-thin button--round-s",attrs:{"data-text":"generate link"},on:{click:t.addLink}},[n("span",[t._v("generate link")])])])]),n("div",{staticClass:"container home-content"},[n("div",{staticClass:"row"},[n("h5",{staticClass:"text-left"},[t._v("Previously shortened by you")]),n("a",{staticClass:"clear-history",attrs:{href:""},on:{click:t.removeAllLinks}},[t._v("Clear history")])]),n("table",{staticClass:"item-table"},[t._m(0),n("tbody",t._l(t.links,(function(e,o){return n("tr",{key:o},[n("td",{staticClass:"text-left td"},[n("div",{staticClass:"row"},[n("input",{attrs:{type:"hidden",id:"get-link"},domProps:{value:e.shortUrl}}),n("a",{staticClass:"copy-link",attrs:{href:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.copyToClipboard(e)}}},[t._v(t._s(e.shortUrl))]),n("div",{staticClass:"text-cursor"},[t._v("click to copy this link")])]),e.longUrl.length<50?n("a",{staticClass:"long-url"},[t._v(t._s(e.longUrl))]):n("a",[t._v(t._s(e.longUrl.substring(0,50)+"..."))])]),n("td",{staticClass:"visit"},[t._v("will be update soon")]),n("td",{staticClass:"last-visited"},[t._v("will be update soon")])])})),0)])])])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("th",{staticClass:"first-th",attrs:{"max-length":"50"}},[t._v("Link")]),n("th",{staticClass:"th"},[t._v("Visits")]),n("th",{staticClass:"th"},[t._v("Last Visited")])])}],v=(n("9911"),n("ade3")),m=n("bc3a"),b=n.n(m),g={components:{},data:function(){return Object(v["a"])({isLogin:!1,links:[],checked:!1,link:{longUrl:""},linkToCopy:""},"isLogin",!1)},methods:{checkLogin:function(){localStorage.getItem("token")&&(this.isLogin=!0)},addLink:function(){var t=this;b()({method:"POST",url:"link/create",data:this.link,headers:{token:localStorage.getItem("token")}}).then((function(e){t.getLinkData(),t.links.push(e.data.data)})).catch((function(t){alert("there is something wrong, please try again later")}))},getLinkData:function(){var t=this;b()({method:"GET",url:"link",headers:{}}).then((function(e){t.links=e.data.data})).catch((function(t){alert(t.message)}))},copyToClipboard:function(){var t=document.querySelector("#get-link");t.setAttribute("type","text"),t.select();var e=document.getElementById("get-link").value;try{var n=document.execCommand("copy"),o=n?"successful":"unsuccessful";alert("your url ".concat(e," has been copied ")+o)}catch(r){alert("Oops, unable to copy")}t.setAttribute("type","hidden"),window.getSelection().removeAllRanges()},removeAllLinks:function(){this.isLogin?b()({method:"DELETE",url:"link/deleteAll",headers:{}}).then((function(t){})).catch((function(t){alert(t.message)})):this.links=[]}},created:function(){this.getLinkData(),this.checkLogin()}},k=g,y=(n("bf9f"),Object(i["a"])(k,f,h,!1,null,"07d78d2d",null)),C=y.exports,_={name:"home",components:{HomeComponent:C}},w=_,L=Object(i["a"])(w,d,p,!1,null,null,null),x=L.exports;o["a"].use(u["a"]);var O=[{path:"/",name:"home",component:x},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],j=new u["a"]({mode:"history",base:"/",routes:O}),P=j,E=n("2f62");o["a"].use(E["a"]);var S=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:P,store:S,render:function(t){return t(c)}}).$mount("#app")},"85ec":function(t,e,n){},a048:function(t,e,n){},bf9f:function(t,e,n){"use strict";var o=n("a048"),r=n.n(o);r.a}});
//# sourceMappingURL=app.78cc0d6e.js.map