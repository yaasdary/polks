(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{4019:function(e,t){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===n(t.default)&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7942:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,u=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);l=!0);}catch(f){a=!0,o=f}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return u}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(2648).Z,a=n(7273).Z,f=l(n(7294)),c=n(4957),i=n(7995),s=n(647),p=n(1992),d=n(639),y=n(4019),b=n(227),v="undefined"!==typeof f.default.useTransition,m={};function h(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;m[t+"%"+n+(o?"%"+o:"")]=!0}}var g=f.default.forwardRef((function(e,t){var n,o=e.href,l=e.as,g=e.children,S=e.prefetch,C=e.passHref,_=e.replace,M=e.soft,j=e.shallow,x=e.scroll,R=e.locale,L=e.onClick,w=e.onMouseEnter,E=e.onTouchStart,O=e.legacyBehavior,A=void 0===O?!0!==Boolean(!1):O,I=a(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,!A||"string"!==typeof n&&"number"!==typeof n||(n=f.default.createElement("a",null,n));var k=!1!==S,P=r(v?f.default.useTransition():[],2)[1],T=f.default.useContext(s.RouterContext),U=f.default.useContext(p.AppRouterContext);U&&(T=U);var B,D=f.default.useMemo((function(){var e=r(c.resolveHref(T,o,!0),2),t=e[0],n=e[1];return{href:t,as:l?c.resolveHref(T,l):n||t}}),[T,o,l]),H=D.href,K=D.as,N=f.default.useRef(H),Z=f.default.useRef(K);A&&(B=f.default.Children.only(n));var G=A?B&&"object"===u(B)&&B.ref:t,$=r(d.useIntersection({rootMargin:"200px"}),3),q=$[0],z=$[1],F=$[2],J=f.default.useCallback((function(e){Z.current===K&&N.current===H||(F(),Z.current=K,N.current=H),q(e),G&&("function"===typeof G?G(e):"object"===u(G)&&(G.current=e))}),[K,G,H,F,q]);f.default.useEffect((function(){var e=z&&k&&c.isLocalURL(H),t="undefined"!==typeof R?R:T&&T.locale,n=m[H+"%"+K+(t?"%"+t:"")];e&&!n&&h(T,H,K,{locale:t})}),[K,H,z,R,k,T]);var Q={ref:J,onClick:function(e){A||"function"!==typeof L||L(e),A&&B.props&&"function"===typeof B.props.onClick&&B.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,l,a,f,i){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n)){e.preventDefault();var s=function(){"softPush"in t&&"softReplace"in t?t[u?o?"softReplace":"softPush":o?"replace":"push"](n):t[o?"replace":"push"](n,r,{shallow:l,locale:f,scroll:a})};i?i(s):s()}}(e,T,H,K,_,M,j,x,R,U?P:void 0)},onMouseEnter:function(e){A||"function"!==typeof w||w(e),A&&B.props&&"function"===typeof B.props.onMouseEnter&&B.props.onMouseEnter(e),c.isLocalURL(H)&&h(T,H,K,{priority:!0})},onTouchStart:function(e){A||"function"!==typeof E||E(e),A&&B.props&&"function"===typeof B.props.onTouchStart&&B.props.onTouchStart(e),c.isLocalURL(H)&&h(T,H,K,{priority:!0})}};if(!A||C||"a"===B.type&&!("href"in B.props)){var V="undefined"!==typeof R?R:T&&T.locale,W=T&&T.isLocaleDomain&&y.getDomainLocale(K,V,T.locales,T.domainLocales);Q.href=W||b.addBasePath(i.addLocale(K,V,T&&T.defaultLocale))}return A?f.default.cloneElement(B,Q):f.default.createElement("a",Object.assign({},I,Q),n)}));t.default=g,("function"===typeof t.default||"object"===u(t.default)&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},639:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,u=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);l=!0);}catch(f){a=!0,o=f}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return u}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!f,u=l.useRef(),s=o(l.useState(!1),2),p=s[0],d=s[1],y=o(l.useState(null),2),b=y[0],v=y[1];l.useEffect((function(){if(f){if(u.current&&(u.current(),u.current=void 0),r||p)return;return b&&b.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=i.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=c.get(r)))return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:u,elements:o},i.push(n),c.set(n,t),t}(n),o=r.id,u=r.observer,l=r.elements;return l.set(e,t),u.observe(e),function(){if(l.delete(e),u.unobserve(e),0===l.size){u.disconnect(),c.delete(o);var t=i.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&i.splice(t,1)}}}(b,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==u.current||u.current(),u.current=void 0}}if(!p){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[b,r,n,t,p]);var m=l.useCallback((function(){d(!1)}),[]);return[v,p,m]};var l=n(7294),a=n(6286),f="function"===typeof IntersectionObserver;var c=new Map,i=[];("function"===typeof t.default||"object"===r(t.default)&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1992:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var u=r.default.createContext(null);t.LayoutRouterContext=u;var l=r.default.createContext(null);t.GlobalLayoutRouterContext=l},1664:function(e,t,n){e.exports=n(7942)}}]);