(window.webpackJsonp=window.webpackJsonp||[]).push([[517],{2873:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),o=l(n(303)),u=l(n(939));function l(e){return e&&e.__esModule?e:{default:e}}var i=r.default.createElement(o.default,null),a=function(){return r.default.createElement(u.default,{icon:i,text:"Icon Tag",id:"iconTag"})},c=function(){return r.default.createElement(u.default,{icon:i,text:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores ",id:"longTextIcon",onClick:function(){return window.alert("Tag has been clicked!")}})},f=function(){return r.default.createElement(u.default,{id:"default",text:"Default Tag"})},s=function(){return r.default.createElement(u.default,{id:"on-click",text:"Clickable Tag",onClick:function(){return window.alert("Tag has been clicked!")}})},d=function(){return r.default.createElement("div",null,r.default.createElement(a,null),r.default.createElement(f,null),r.default.createElement(s,null),r.default.createElement(c,null))};t.default=d},939:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(0)),o=s(n(3)),u=s(n(11)),l=s(n(5)),i=s(n(8)),a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==d(e)&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(21)),c=s(n(949));function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function s(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=l.default.bind(c.default),w={href:o.default.string,icon:o.default.element,onClick:o.default.func,onBlur:o.default.func,onFocus:o.default.func,onKeyUp:o.default.func,text:o.default.string.isRequired},j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(i,e);var t,n,o,l=_(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=l.call(this,e)).state={focused:!1},t.handleKeyUp=t.handleKeyUp.bind(v(t)),t.handleOnBlur=t.handleOnBlur.bind(v(t)),t}return t=i,(n=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===a.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.text,o=e.href,l=e.onClick,i=(e.onBlur,e.onFocus),a=(e.onKeyUp,y(e,["icon","text","href","onClick","onBlur","onFocus","onKeyUp"])),c=this.context,f=(0,u.default)(O("tag",{"is-focused":this.state.focused},{"is-interactive":o||l},c.className),a.className),s=O("icon"),d=t?r.default.createElement("span",{className:s},t):null,h=o||l?o?"a":"button":"span";return r.default.createElement(h,p({},a,{className:f,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:l,onFocus:i,href:o}),d,n)}}])&&h(t.prototype,n),o&&h(t,o),i}(r.default.Component);j.propTypes=w,j.contextType=i.default;var k=j;t.default=k},949:function(e,t,n){e.exports={"clinical-lowlight-theme":"Tag-module__clinical-lowlight-theme___2bry9","orion-fusion-theme":"Tag-module__orion-fusion-theme___2T651",tag:"Tag-module__tag___2dKaH","is-interactive":"Tag-module__is-interactive___NGCCj","is-focused":"Tag-module__is-focused___mOKiO",icon:"Tag-module__icon___2MbIr"}}}]);
//# sourceMappingURL=517-27416ab29f5bebed4547.js.map