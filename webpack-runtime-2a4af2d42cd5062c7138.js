!function(){"use strict";var e,t,n,r,o,i,c,a={},u={};function f(e){var t=u[e];if(void 0!==t)return t.exports;var n=u[e]={exports:{}};return a[e](n,n.exports,f),n.exports}f.m=a,e=[],f.O=function(t,n,r,o){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],o=e[u][2];for(var c=!0,a=0;a<n.length;a++)(!1&o||i>=o)&&Object.keys(f.O).every((function(e){return f.O[e](n[a])}))?n.splice(a--,1):(c=!1,o<i&&(i=o));c&&(e.splice(u--,1),t=r())}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,r,o]},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},f.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);f.r(o);var i={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(t){i[t]=function(){return e[t]}}));return i.default=function(){return e},f.d(o,i),o},f.d=function(e,t){for(var n in t)f.o(t,n)&&!f.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},f.f={},f.e=function(e){return Promise.all(Object.keys(f.f).reduce((function(t,n){return f.f[n](e,t),t}),[]))},f.u=function(e){return({49:"component---src-pages-about-tsx",75:"component---src-pages-pricing-tsx",218:"component---src-pages-404-tsx",416:"component---src-pages-web-applications-tsx",532:"styles",650:"component---src-pages-contact-tsx",691:"component---src-pages-index-tsx",809:"component---src-pages-websites-tsx",929:"component---src-pages-e-commerce-tsx"}[e]||e)+"-"+{49:"15e27b4468b9021de70a",75:"80191ace555e8965e9bc",175:"95b3b322ba831f29f073",218:"395f3f937444794feabf",231:"654c48d10a31c366c975",368:"cf0db77b67d6310b2fa9",416:"eddc0b7d6065667813a9",532:"2f15c0bbf883c0240a8e",650:"1fb3962e5f6c0fdec84d",691:"e8b66c906779a9e467dd",809:"dcff8bcb03c738fdd6ea",929:"f6db4d3bef9a98238d63"}[e]+".js"},f.miniCssF=function(e){return"styles.94fd8e91f459d22f5d01.css"},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="ant-digital-website:",f.l=function(e,t,n,i){if(r[e])r[e].push(t);else{var c,a;if(void 0!==n)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var l=u[s];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+n){c=l;break}}c||(a=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,f.nc&&c.setAttribute("nonce",f.nc),c.setAttribute("data-webpack",o+n),c.src=e),r[e]=[t];var d=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),a&&document.head.appendChild(c)}},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/",i=function(e){return new Promise((function(t,n){var r=f.miniCssF(e),o=f.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(c=n[r]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(o===e||o===t))return c}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var c;if((o=(c=i[r]).getAttribute("data-href"))===e||o===t)return c}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var c=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=c,u.request=a,o.parentNode.removeChild(o),r(u)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},c={658:0},f.f.miniCss=function(e,t){c[e]?t.push(c[e]):0!==c[e]&&{532:1}[e]&&t.push(c[e]=i(e).then((function(){c[e]=0}),(function(t){throw delete c[e],t})))},function(){var e={658:0};f.f.j=function(t,n){var r=f.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var i=f.p+f.u(t),c=new Error;f.l(i,(function(n){if(f.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,r[1](c)}}),"chunk-"+t,t)}},f.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,i=n[0],c=n[1],a=n[2],u=0;for(r in c)f.o(c,r)&&(f.m[r]=c[r]);if(a)var s=a(f);for(t&&t(n);u<i.length;u++)o=i[u],f.o(e,o)&&e[o]&&e[o][0](),e[i[u]]=0;return f.O(s)},n=self.webpackChunkant_digital_website=self.webpackChunkant_digital_website||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=webpack-runtime-2a4af2d42cd5062c7138.js.map