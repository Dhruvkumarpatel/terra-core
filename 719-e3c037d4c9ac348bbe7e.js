(window.webpackJsonp=window.webpackJsonp||[]).push([[719],{2453:function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==n(t)&&"function"!=typeof t)return{default:t};var e=l();if(e&&e.has(t))return e.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u)){var i=o?Object.getOwnPropertyDescriptor(t,u):null;i&&(i.get||i.set)?Object.defineProperty(r,u,i):r[u]=t[u]}r.default=t,e&&e.set(t,r);return r}(r(0)),u=a(r(53)),i=a(r(900));function a(t){return t&&t.__esModule?t:{default:t}}function l(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return l=function(){return t},t}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,u=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var s=function(){var t=f((0,o.useState)(!0),2),e=t[0],r=t[1];return e?o.default.createElement(i.default,{id:"dismissibleAlert",type:"success",onDismiss:function(){return r(!1)}},"This is a dismissable Alert."):o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"dismissed"},"Alert was dismissed"),o.default.createElement(u.default,{text:"Trigger Alert",onClick:function(){r(!0)}}))};e.default=s}}]);
//# sourceMappingURL=719-e3c037d4c9ac348bbe7e.js.map