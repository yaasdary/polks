(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[103],{4137:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSP:function(){return E}});var n=r(7294),o=r(5462),i=r.n(o),a=r(2789),c=r(4252),u=r(1986),s=r(3773),l=r(7579),f=r(9669),h=r.n(f),p=r(1163),y=r(1275),d=r(5893);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function g(){g=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(N){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return j()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=b(a,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=u;var l={};function f(){}function h(){}function p(){}var y={};c(y,o,(function(){return this}));var d=Object.getPrototypeOf,m=d&&d(d(L([])));m&&m!==e&&r.call(m,o)&&(y=m);var _=p.prototype=f.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==v(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=p,c(_,"constructor",p),c(p,"constructor",h),h.displayName=c(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,a,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},w(S.prototype),c(S.prototype,i,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new S(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(_),c(_,a,"Generator"),c(_,o,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}function m(t){return function(t){if(Array.isArray(t))return x(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||b(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function w(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){_(i,n,o,a,c,"next",t)}function c(t){_(i,n,o,a,c,"throw",t)}a(void 0)}))}}function S(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(t,e)||b(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){if(t){if("string"===typeof t)return x(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(t,e):void 0}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var E=!0;e.default=function(t){var e=t.stands,r=(0,p.useRouter)(),o=S((0,n.useState)(e),2),f=o[0],v=o[1],_=S((0,n.useState)(""),2),b=_[0],x=_[1],E=S((0,n.useState)(2),2),P=E[0],L=E[1],j=S((0,n.useState)([{id:1,name:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e",isActive:!0,sorting:""},{id:2,name:"\u041f\u043e \u0446\u0435\u043d\u0435 (\u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e)",isActive:!1,sorting:"lowerPrice"},{id:3,name:"\u041f\u043e \u0446\u0435\u043d\u0435 (\u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e)",isActive:!1,sorting:"biggerPrice"}]),2),N=j[0],A=j[1],k=S((0,n.useState)(!1),2),O=k[0],G=k[1],I=S((0,l.W)({root:null,rootMargin:"0px",threshold:1}),2),Q=I[0],T=I[1],C=function(){var t=w(g().mark((function t(){var e,n;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h().get("".concat("http://localhost:3000/api/stands/getSearchQuery","?searchString=").concat(r.query.searchQuery,"&page=").concat(P,"&sort=").concat(b));case 2:e=t.sent,n=e.data,L((function(t){return t+1})),v((function(t){return[].concat(m(t),m(n))}));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Z=function(){var t=w(g().mark((function t(){var e,n;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return L(2),t.next=3,h().get("".concat("http://localhost:3000/api/stands/getSearchQuery","?searchString=").concat(r.query.searchQuery,"&page=1&sort=").concat(b));case 3:e=t.sent,n=e.data,v(n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function F(){return(F=w(g().mark((function t(){var e,n;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"http://localhost:3000/api/stands/getSearchQuery",t.next=3,h().get("".concat("http://localhost:3000/api/stands/getSearchQuery","?searchString=").concat(r.query.searchQuery));case 3:e=t.sent,n=e.data,v(n);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,n.useEffect)((function(){T&&C()}),[T]),(0,n.useEffect)((function(){Z()}),[b]),(0,n.useEffect)((function(){!function(){F.apply(this,arguments)}()}),[r.query.searchQuery]),(0,d.jsx)(y.Z,{children:(0,d.jsxs)("div",{className:i().SearchPage,children:[(0,d.jsx)("div",{className:i().SearchPage__container,children:(0,d.jsxs)("div",{className:i().content,children:[(0,d.jsx)("h2",{className:i().content__title,children:"\u0417\u0430\u043f\u0440\u043e\u0441 \u043f\u043e"}),(0,d.jsx)(s.Z,{setSorting:x,setSortingPoints:A,sortingPoints:N,isSortingActive:O,setIsSortingActive:G}),(0,d.jsx)("div",{className:i().standsContainer,children:null===f||void 0===f?void 0:f.map((function(t){return(0,d.jsx)(a.Z,{stand:t},t.id)}))})]})}),(0,d.jsx)("div",{ref:Q}),(0,d.jsx)(c.Z,{}),(0,d.jsx)(u.Z,{})]})})}},71:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search/[searchQuery]",function(){return r(4137)}])},5462:function(t){t.exports={SearchPage__container:"SearchPage_SearchPage__container__Z6cUm",content__title:"SearchPage_content__title__R8Q0G",content:"SearchPage_content__Ezk3f",standsContainer:"SearchPage_standsContainer__AZC8h",sorting__title:"SearchPage_sorting__title__elYGm",sorting:"SearchPage_sorting__wu8GM",customSelect:"SearchPage_customSelect__XjH0B",selected:"SearchPage_selected__IaKpr",container:"SearchPage_container__A6VGM",selectItem:"SearchPage_selectItem__lSMly"}}},function(t){t.O(0,[664,361,275,252,495,774,888,179],(function(){return e=71,t(t.s=e);var e}));var e=t.O();_N_E=e}]);