(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[838],{2789:function(t,e,r){"use strict";r(7294);var n=r(2450),i=r(3040),a=r.n(i),o=r(5893);e.Z=function(t){var e=t.stand;return(0,o.jsx)(n.Z,{url:"/stand/"+e.id,children:(0,o.jsxs)("div",{className:a().StandCard,children:[(0,o.jsx)("img",{className:a().image,src:"".concat("http://localhost:3000/images/"+e.photo[0]),alt:e.name}),(0,o.jsx)("h4",{className:a().title,children:e.name}),(0,o.jsxs)("p",{className:a().sizes,children:[e.width," X ",e.height]})," ",(0,o.jsxs)("div",{className:a().panel,children:[(0,o.jsxs)("h3",{className:a().panel__price,children:[e.price," \u20bd"]}),(0,o.jsx)("button",{className:a().panel__btn,children:"\u041f\u041e\u0414\u0420\u041e\u0411\u041d\u0415\u0415"})]})]})})}},3288:function(t,e,r){"use strict";r(7294);var n=r(2789),i=r(6683),a=r.n(i),o=r(6794),c=r(4002),s=(r(2821),r(933),r(5893));function l(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}e.Z=function(t){var e=t.title,r=t.stands;return(0,s.jsxs)("div",{className:a().standsBlock,children:[(0,s.jsx)("h3",{className:a().standsBlock__title,children:e}),(0,s.jsx)(o.t,{style:{width:"100%",height:"100%"},spaceBetween:50,slidesPerView:4,breakpoints:{1024:{slidesPerView:4,spaceBetween:7},768:{slidesPerView:3,spaceBetween:7},560:{slidesPerView:3,spaceBetween:5},375:{slidesPerView:1,spaceBetween:5},200:{slidesPerView:1,spaceBetween:4},1:{slidesPerView:1,spaceBetween:4}},children:l(r).map((function(t){return(0,s.jsx)(c.o,{children:(0,s.jsx)(n.Z,{stand:t})},t.id)}))})]})}},9124:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSP:function(){return M},default:function(){return R}});var n=r(7294),i=r(5223),a=r.n(i),o=r(5919),c="/_next/static/media/nextIcon.239273c9.svg",s=r(1275),l=r(4252),u=r(3288),d="/_next/static/media/exclamationPoint.00f26758.svg",h=r(1650),_=r(5481),f=r.n(_),p=r(9725),m=r(6278),v=r(5044),y=r(9669),g=r.n(y),x=r(9120),S=r(9473),j=r(3992),w=r(5893);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function N(){N=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(L){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),o=new w(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(i,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw a;return C()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var c=x(o,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,o),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(L){return{type:"throw",arg:L}}}t.wrap=s;var u={};function d(){}function h(){}function _(){}var f={};c(f,i,(function(){return this}));var p=Object.getPrototypeOf,m=p&&p(p(P([])));m&&m!==e&&r.call(m,i)&&(f=m);var v=_.prototype=d.prototype=Object.create(f);function y(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){function n(i,a,o,c){var s=l(t[i],t,a);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==b(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,o,c)}),(function(t){n("throw",t,o,c)})):e.resolve(d).then((function(t){u.value=t,o(u)}),(function(t){return n("throw",t,o,c)}))}c(s.arg)}var i;this._invoke=function(t,r){function a(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(a,a):a()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:C}}function C(){return{value:void 0,done:!0}}return h.prototype=_,c(v,"constructor",_),c(_,"constructor",h),h.displayName=c(_,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,c(t,o,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},y(g.prototype),c(g.prototype,a,(function(){return this})),t.AsyncIterator=g,t.async=function(e,r,n,i,a){void 0===a&&(a=Promise);var o=new g(s(e,r,n,i),a);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},y(v),c(v,o,"Generator"),c(v,i,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return o.type="throw",o.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}function P(t,e,r,n,i,a,o){try{var c=t[a](o),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(n,i)}function C(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function o(t){P(a,n,i,o,c,"next",t)}function c(t){P(a,n,i,o,c,"throw",t)}o(void 0)}))}}function L(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,i,a=[],o=!0,c=!1;try{for(r=r.call(t);!(o=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);o=!0);}catch(s){c=!0,i=s}finally{try{o||null==r.return||r.return()}finally{if(c)throw i}}return a}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return E(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var k=function(){var t=(0,S.I0)(),e=L((0,n.useState)({phone:"+7(___)___-__-__"}),2),r=e[0],i=e[1],a=L((0,n.useState)([]),2),c=a[0],s=a[1],l=L((0,n.useState)(),2)[1],u=(0,n.useCallback)((function(){return l({})}),[]),d=(0,p.n)(i,r),_=d.handleChange,y=d.handleBigChange,b=(0,m.z)(c,s),P=b.hideUserError,E=b.showUserError,k=(0,v.M)(E,P,r,y),B=k.phoneInputMask,I=k.nameValidation,O=k.emailValidation;function A(){return(A=C(N().mark((function e(){var n;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O(),I(),u(),!(c.length<1)){e.next=17;break}return e.prev=4,"http://localhost:3000/api/mail/form",e.next=8,g().post("http://localhost:3000/api/mail/form",{name:r.name||"",email:r.email||"",phone:r.phone||"",emailTitle:"\u0417\u0430\u043f\u0440\u043e\u0441 \u043e\u043f\u0442\u043e\u0432\u043e\u0439 \u0446\u0435\u043d\u044b"});case 8:n=e.sent,n.data,i({phone:"+7(___)___-__-__"}),t((0,x.cf)((0,w.jsx)(j.Z,{}))),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),alert(e.t0);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})))).apply(this,arguments)}return(0,w.jsxs)("div",{className:f().optPrice,children:[(0,w.jsxs)("div",{className:f().optPrice__head,children:[(0,w.jsx)("h3",{className:f().title,children:"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043e\u043f\u0442\u043e\u0432\u0443\u044e \u0446\u0435\u043d\u0443"}),(0,w.jsx)("p",{className:f().subtitle,children:"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"})]}),(0,w.jsxs)("div",{className:f().form,children:[(0,w.jsx)(h.Z,{value:r.name||"",name:"name",setter:_,errors:c,placeholder:"\u0418\u043c\u044f"}),(0,w.jsx)(h.Z,{value:r.phone||"",name:"phone",setter:_,errors:c,placeholder:"+7 (___)___-__-__",validation:B}),(0,w.jsx)(h.Z,{value:r.email||"",name:"email",setter:_,errors:c,placeholder:"Email"}),(0,w.jsx)(o.Z,{callBack:function(){return function(){return A.apply(this,arguments)}()},className:f().btnSubmit,children:(0,w.jsx)("h4",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]}),(0,w.jsxs)("div",{className:f().description,children:[(0,w.jsx)("span",{className:f().description__item,children:"\u041d\u0430\u0436\u0438\u043c\u0430\u044f \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443, \u0412\u044b \u0434\u0430\u0451\u0442\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0432\u0430\u0448\u0438\u0445 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438"}),(0,w.jsx)("span",{className:f().description__item,children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u043f\u043e\u0434\u043b\u0435\u0436\u0430\u0442 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u044e \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0424\u0417-152"})]})]})},B=r(8430),I=r.n(B);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function A(){A=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(P){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),o=new w(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(i,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw a;return N()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var c=x(o,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,o),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=s;var u={};function d(){}function h(){}function _(){}var f={};c(f,i,(function(){return this}));var p=Object.getPrototypeOf,m=p&&p(p(b([])));m&&m!==e&&r.call(m,i)&&(f=m);var v=_.prototype=d.prototype=Object.create(f);function y(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){function n(i,a,o,c){var s=l(t[i],t,a);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==O(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,o,c)}),(function(t){n("throw",t,o,c)})):e.resolve(d).then((function(t){u.value=t,o(u)}),(function(t){return n("throw",t,o,c)}))}c(s.arg)}var i;this._invoke=function(t,r){function a(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(a,a):a()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var i=n.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function b(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return h.prototype=_,c(v,"constructor",_),c(_,"constructor",h),h.displayName=c(_,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,c(t,o,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},y(g.prototype),c(g.prototype,a,(function(){return this})),t.AsyncIterator=g,t.async=function(e,r,n,i,a){void 0===a&&(a=Promise);var o=new g(s(e,r,n,i),a);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},y(v),c(v,o,"Generator"),c(v,i,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=b,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return o.type="throw",o.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:b(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}function z(t,e,r,n,i,a,o){try{var c=t[a](o),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(n,i)}function T(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function o(t){z(a,n,i,o,c,"next",t)}function c(t){z(a,n,i,o,c,"throw",t)}o(void 0)}))}}function Z(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,i,a=[],o=!0,c=!1;try{for(r=r.call(t);!(o=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);o=!0);}catch(s){c=!0,i=s}finally{try{o||null==r.return||r.return()}finally{if(c)throw i}}return a}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return G(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return G(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var F=function(t){var e=t.stand,r=t.activeColor,i=(0,S.I0)(),a=Z((0,n.useState)({phone:"+7(___)___-__-__"}),2),c=a[0],s=a[1],l=Z((0,n.useState)([]),2),u=l[0],d=l[1],_=Z((0,n.useState)(),2)[1],f=(0,n.useCallback)((function(){return _({})}),[]),y=(0,p.n)(s,c),b=y.handleChange,N=y.handleBigChange,P=(0,m.z)(u,d),C=P.hideUserError,L=P.showUserError,E=(0,v.M)(L,C,c,N),k=E.phoneInputMask,B=E.nameValidation,O=E.emailValidation;function z(){return(z=T(A().mark((function t(){var n;return A().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(O(),B(),f(),!(u.length<1)){t.next=17;break}return t.prev=4,"http://localhost:3000/api/mail/stand",t.next=8,g().post("http://localhost:3000/api/mail/stand",{standId:e.id,phone:c.phone||"",name:c.name||"",email:c.email||"",color:r,emailTitle:"\u0417\u0430\u043a\u0430\u0437 \u0442\u043e\u0440\u0433\u043e\u0432\u043e\u0433\u043e \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f"});case 8:n=t.sent,n.data,s({phone:"+7(___)___-__-__"}),i((0,x.cf)((0,w.jsx)(j.Z,{}))),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(4),alert(t.t0);case 17:case"end":return t.stop()}}),t,null,[[4,14]])})))).apply(this,arguments)}return(0,w.jsxs)("div",{className:I().orderStand,children:[(0,w.jsxs)("div",{className:I().head,children:[(0,w.jsx)("h3",{className:I().head__title,children:"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}),(0,w.jsx)("p",{className:I().head__subtitle,children:"\u0434\u043b\u044f \u0437\u0430\u043a\u0430\u0437\u0430"})]}),e?(0,w.jsxs)("div",{className:I().card,children:[(0,w.jsx)("img",{className:I().card__img,src:"".concat("http://localhost:3000/images/"+e.photo[0]),alt:"\u0424\u043e\u0442\u043e \u0441\u0442\u0435\u043b\u043b\u0430\u0436\u0430"}),(0,w.jsxs)("div",{className:I().characteristics,children:[(0,w.jsx)("h4",{className:I().characteristics__name,children:e.name}),(0,w.jsxs)("div",{className:I().price,children:[(0,w.jsx)("span",{children:"\u0426\u0435\u043d\u0430 \u043e\u0442"}),(0,w.jsx)("h4",{className:I().price__item,children:e.price})]}),(0,w.jsxs)("span",{className:I().sizes,children:["\u0420\u0430\u0437\u043c\u0435\u0440: ",e.height,"x",e.width,"x(",e.deep,")"]})]})]}):"",(0,w.jsxs)("div",{children:[(0,w.jsx)(h.Z,{value:c.name||"",name:"name",setter:b,errors:u,placeholder:"\u0418\u043c\u044f"}),(0,w.jsx)(h.Z,{value:c.phone||"",name:"phone",setter:b,errors:u,placeholder:"+7 (___)___-__-__",validation:k}),(0,w.jsx)(h.Z,{value:c.email||"",name:"email",setter:b,errors:u,placeholder:"Email"}),(0,w.jsx)(o.Z,{className:I().submitBtn,callBack:function(){return function(){return z.apply(this,arguments)}()},children:(0,w.jsx)("h4",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})}),(0,w.jsxs)("div",{className:I().description,children:[(0,w.jsx)("span",{className:I().description__item,children:"\u041d\u0430\u0436\u0438\u043c\u0430\u044f \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443, \u0412\u044b \u0434\u0430\u0451\u0442\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0432\u0430\u0448\u0438\u0445 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438"}),(0,w.jsx)("span",{className:I().description__item,children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u043f\u043e\u0434\u043b\u0435\u0436\u0430\u0442 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u044e \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0424\u0417-152"})]})]})]})};function V(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,i,a=[],o=!0,c=!1;try{for(r=r.call(t);!(o=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);o=!0);}catch(s){c=!0,i=s}finally{try{o||null==r.return||r.return()}finally{if(c)throw i}}return a}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return D(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return D(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var M=!0,R=function(t){var e,r=t.stands,i=t.stand,h=V((0,n.useState)(0),2),_=h[0],f=h[1],p=(0,S.I0)(),m=V((0,n.useState)(i.description),2),v=m[0],y=m[1],g=V((0,n.useState)([{id:1,name:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",activeDescription:i.description},{id:2,name:"\u0425\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438",activeDescription:i.characteristics},{id:3,name:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430",activeDescription:"<h4> \u0414\u041e\u0421\u0422\u0410\u0412\u041a\u0410 \u041f\u041e \u0421\u0410\u041d\u041a\u0422-\u041f\u0415\u0422\u0415\u0420\u0411\u0423\u0420\u0413\u0423, \u0420\u041e\u0421\u0421\u0418\u0418 \u0418 \u0421\u041d\u0413: </h4>\n    <br /> <p>\u0414\u043b\u044f \u043d\u0430\u0448\u0438\u0445 \u0434\u0438\u043b\u0435\u0440\u043e\u0432 \u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 \u043c\u044b \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c \u0442\u043e\u0440\u0433\u043e\u0432\u043e\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u043b\u044e\u0431\u044b\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u0420\u043e\u0441\u0441\u0438\u0438 \u0447\u0435\u0440\u0435\u0437 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438-\u043f\u0430\u0440\u0442\u043d\u0435\u0440\u044b: \u0414\u0435\u043b\u043e\u0432\u044b\u0435 \u043b\u0438\u043d\u0438\u0438 \u0438 \u041f\u042d\u041a </p>\n    \n    <br /> <p>\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0441\u0442\u0435\u043b\u043b\u0430\u0436\u0435\u0439 \u0438 \u0442\u043e\u0440\u0433\u043e\u0432\u043e\u0433\u043e \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043f\u043e \u0442\u0430\u0440\u0438\u0444\u0430\u043c \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0439-\u043f\u0430\u0440\u0442\u043d\u0435\u0440\u043e\u0432 \u043d\u0430 \u0434\u0435\u043d\u044c \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0438. </p>\n    \n    <br /> <p>\u0421\u0422\u041e\u0418\u041c\u041e\u0421\u0422\u042c \u0414\u041e\u0421\u0422\u0410\u0412\u041a\u0418 \u0417\u0410\u0412\u0418\u0421\u0418\u0422 \u043e\u0442 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0430, \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430, \u0432\u0435\u0441\u0430 \u0438 \u043e\u0431\u044a\u0435\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u0442\u043e\u0432\u0430\u0440\u0430. </p>\n    \n    <br /> <p>\u0423\u0441\u043b\u0443\u0433\u0430 \u043f\u043e \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435 \u0442\u043e\u0432\u0430\u0440\u0430 \u0441\u043e \u0441\u043a\u043b\u0430\u0434\u0430 \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443 \u0442\u043e\u0440\u0433\u043e\u0432\u043e\u0433\u043e \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0414\u041e \u041f\u041e\u0414\u042a\u0415\u0417\u0414\u0410 (\u0421\u041a\u041b\u0410\u0414\u0410) \u0417\u0410\u041a\u0410\u0417\u0427\u0418\u041a\u0410.</p>\n    \n    <br /> <p>\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 \u0432 \u0412\u0430\u0448 \u0433\u043e\u0440\u043e\u0434 \u043f\u043e\u043c\u043e\u0433\u0443\u0442 \u043d\u0430\u0448\u0438 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u044b</p>"}]),1)[0],j=V((0,n.useState)({id:1,ral:"2020",color:"#D5D9DC"}),2),b=j[0];j[1];return(0,w.jsxs)(s.Z,{children:[(0,w.jsxs)("div",{className:a().StandPage,children:[(0,w.jsxs)("div",{className:a().card,children:[(0,w.jsxs)("div",{className:a().imgs,children:[(0,w.jsx)("div",{className:a().imgsContainer,children:null===i||void 0===i||null===(e=i.photo)||void 0===e?void 0:e.map((function(t,e){return(0,w.jsx)("div",{className:e===_?a().imgsContainer__item+" "+a().imgsContainer__item_active:a().imgsContainer__item,onClick:function(){return f(e)},children:(0,w.jsx)("img",{className:a().imgItem,src:"".concat("http://localhost:3000/images/"+t),alt:"\u0424\u043e\u0442\u043e \u0441\u0442\u0435\u043b\u043b\u0430\u0436\u0430"})},e)}))}),(0,w.jsxs)("div",{className:a().activeImg,children:[(0,w.jsx)("div",{className:a().prevBtn,onClick:function(){f((function(t){return 0===t?i.photo.length-1:t-1}))},children:(0,w.jsx)(o.Z,{children:(0,w.jsx)("img",{className:a().prevBtn__img,src:c,alt:"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"})})}),(0,w.jsx)("img",{className:a().activeImg__item,src:"".concat("http://localhost:3000/images/"+i.photo[_]),alt:"\u0424\u043e\u0442\u043e \u0441\u0442\u0435\u043b\u043b\u0430\u0436\u0430"}),(0,w.jsx)("div",{className:a().nextBtn,onClick:function(){f((function(t){return t===i.photo.length-1?0:t+1}))},children:(0,w.jsx)(o.Z,{children:(0,w.jsx)("img",{className:a().nextBtn__img,src:c,alt:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"})})})]})]}),(0,w.jsxs)("div",{className:a().characteristics,children:[(0,w.jsxs)("div",{className:a().mainPanel,children:[(0,w.jsxs)("span",{className:a().article,children:["\u0410\u0440\u0442. ",i.id]}),(0,w.jsxs)("div",{className:a().mainPanelContainer,children:[(0,w.jsx)("h4",{className:a().mainPanelContainer__name,children:i.name}),(0,w.jsxs)("div",{className:a().order,children:[(0,w.jsxs)("div",{className:a().price,children:[(0,w.jsx)("p",{children:"\u043e\u0442"}),(0,w.jsxs)("h3",{className:a().price__number,children:[i.price,"\u0420"]})]}),(0,w.jsx)("h4",{className:a().optPrice,onClick:function(){return p((0,x.cf)((0,w.jsx)(k,{})))},children:"\u0417\u0410\u041f\u0420\u041e\u0421\u0418\u0422\u042c \u041e\u041f\u0422\u041e\u0412\u0423\u042e \u0426\u0415\u041d\u0423"})]})]})]}),(0,w.jsxs)("div",{className:a().content,children:[(0,w.jsxs)("div",{className:a().sizes,children:[(0,w.jsxs)("div",{className:a().sizes__item,children:[(0,w.jsx)("span",{className:a().title,children:"\u0412\u044b\u0441\u043e\u0442\u0430"}),(0,w.jsxs)("span",{className:a().description,children:[i.height," \u0441\u043c"]})]}),(0,w.jsxs)("div",{className:a().sizes__item,children:[(0,w.jsx)("span",{className:a().title,children:"\u0428\u0438\u0440\u0438\u043d\u0430"}),(0,w.jsxs)("span",{className:a().description,children:[i.width," \u0441\u043c"]})]}),(0,w.jsxs)("div",{className:a().sizes__item,children:[(0,w.jsx)("span",{className:a().title,children:"\u0413\u043b\u0443\u0431\u0438\u043d\u0430"}),(0,w.jsxs)("span",{className:a().description,children:[i.deep," \u0441\u043c"]})]})]}),(0,w.jsxs)("div",{className:a().individualSizes,children:[(0,w.jsx)("img",{className:a().individualSizes__exclamation,src:d,alt:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u043c \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u043c"}),(0,w.jsx)("span",{className:a().individualSizes__description,onClick:function(){return p((0,x.cf)((0,w.jsx)(F,{stand:i})))},children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u043c \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u043c"})]}),(0,w.jsx)("div",{className:a().colorChoose}),(0,w.jsx)(o.Z,{className:a().orderBtn,callBack:function(){return p((0,x.cf)((0,w.jsx)(F,{stand:i,activeColor:b})))},children:(0,w.jsx)("h4",{children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c"})})]})]})]}),(0,w.jsxs)("div",{className:a().description,children:[(0,w.jsx)("div",{className:a().panel,children:g.map((function(t){return(0,w.jsx)("div",{className:t.activeDescription===v?a().panel__item+" "+a().panel__item_active:a().panel__item,onClick:function(){return y(t.activeDescription)},children:(0,w.jsx)("h4",{className:a().name,children:t.name})},t.id)}))}),(0,w.jsx)("div",{className:a().content,dangerouslySetInnerHTML:{__html:v}})]})]}),(0,w.jsx)(l.Z,{}),(0,w.jsx)(u.Z,{stands:r,title:"\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u044b"})]})}},3758:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stand/[id]",function(){return r(9124)}])},3040:function(t){t.exports={StandCard:"StandCard_StandCard__3fvSs",image:"StandCard_image__N_8n2",sizes:"StandCard_sizes__Mccmf",title:"StandCard_title__NisR6",panel:"StandCard_panel__dOsW0",panel__price:"StandCard_panel__price__reRzl",panel__btn:"StandCard_panel__btn__WyJ6Q"}},5223:function(t){t.exports={StandPage:"StandPage_StandPage__BkQNA",card:"StandPage_card__a4vX8",imgs:"StandPage_imgs__iaf1F",imgsContainer__item:"StandPage_imgsContainer__item__iOkEg",imgsContainer__item_active:"StandPage_imgsContainer__item_active__IxoAP",imgsContainer:"StandPage_imgsContainer__DJt59",imgItem:"StandPage_imgItem__oV_kD",activeImg:"StandPage_activeImg__hRGYo",activeImg__item:"StandPage_activeImg__item__lS6jK",prevBtn:"StandPage_prevBtn__wfJHz",prevBtn__img:"StandPage_prevBtn__img__HTu0f",nextBtn:"StandPage_nextBtn__B4QFY",characteristics:"StandPage_characteristics__yFmKR",mainPanel:"StandPage_mainPanel__ehvJA",article:"StandPage_article__61uYB",mainPanelContainer:"StandPage_mainPanelContainer__FurYX",mainPanelContainer__name:"StandPage_mainPanelContainer__name__oRjin",order:"StandPage_order__irBo1",price:"StandPage_price__aUfFn",price__number:"StandPage_price__number__6z6yZ",optPrice:"StandPage_optPrice__cpMjH",content:"StandPage_content__tTR7m",sizes:"StandPage_sizes__V1Iy4",sizes__item:"StandPage_sizes__item__35jds",description:"StandPage_description__syxx1",individualSizes:"StandPage_individualSizes__0WDvK",individualSizes__description:"StandPage_individualSizes__description__FWme5",colorChoose:"StandPage_colorChoose__Z5oGr",colorChooseContent:"StandPage_colorChooseContent__sfFXE",colorChooseContent__description:"StandPage_colorChooseContent__description__34LQf",description__allColors:"StandPage_description__allColors__ZTsN5",colors:"StandPage_colors__SBPPU",colors__item:"StandPage_colors__item__9fhTA",orderBtn:"StandPage_orderBtn__djosN",panel:"StandPage_panel__xF66u",panel__item:"StandPage_panel__item__SRQia",name:"StandPage_name__dZWyK",panel__item_active:"StandPage_panel__item_active__ClKnr",prevSlide:"StandPage_prevSlide__5bHL3",nextSlide:"StandPage_nextSlide__oF2xD"}},5481:function(t){t.exports={optPrice__head:"optPrice_optPrice__head__4LmV3",title:"optPrice_title__LoRQi",subtitle:"optPrice_subtitle__OL8Sa",optPrice:"optPrice_optPrice__01Rg_",form:"optPrice_form__GlXIT",btnSubmit:"optPrice_btnSubmit__9_2U_",description:"optPrice_description__a2Cun",description__item:"optPrice_description__item__N_7Wa"}},8430:function(t){t.exports={orderStand:"orderStand_orderStand__ogiP7",head:"orderStand_head__iWYwn",head__subtitle:"orderStand_head__subtitle__kcSll",card:"orderStand_card__8reC7",card__img:"orderStand_card__img__N6qMm",characteristics:"orderStand_characteristics__aIQ3H",price:"orderStand_price___gCsS",price__item:"orderStand_price__item__T4JOL",sizes:"orderStand_sizes__XL73t",color:"orderStand_color__5nPYD",color__activeColor:"orderStand_color__activeColor__M7EIR",submitBtn:"orderStand_submitBtn__vhKkb",description:"orderStand_description__VNE1B",description__item:"orderStand_description__item__6e5ym"}},6683:function(t){t.exports={standsBlock:"standBlock_standsBlock__CcqR_",standsBlock__title:"standBlock_standsBlock__title__mWGbA"}}},function(t){t.O(0,[664,361,747,275,252,296,774,888,179],(function(){return e=3758,t(t.s=e);var e}));var e=t.O();_N_E=e}]);