(window.webpackJsonp=window.webpackJsonp||[]).push([[718],{2452:function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!=typeof t)return{default:t};var e=c();if(e&&e.has(t))return e.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u)){var i=o?Object.getOwnPropertyDescriptor(t,u):null;i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=t[u]}r.default=t,e&&e.set(t,r);return r}(r(0)),u=a(r(53)),i=a(r(900));function a(t){return t&&t.__esModule?t:{default:t}}function c(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return c=function(){return t},t}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,u=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var y=function(){var t=f((0,o.useState)(0),2),e=t[0],r=t[1];return o.default.createElement(i.default,{id:"actionAlert",type:"warning",action:o.default.createElement(u.default,{text:"Action",id:"actionButtonClickCount",onClick:function(){r(e+1)}})},"This is a warning. It is configured with a custom Action button. Action button has been clicked ".concat(e," times."))};e.default=y}}]);
//# sourceMappingURL=718-85d9f1895d1738fa5a77.js.map