(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{1114:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),l=d(n(3)),o=d(n(11)),u=d(n(5)),a=d(n(8)),i=d(n(1115));function d(e){return e&&e.__esModule?e:{default:e}}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=u.default.bind(i.default),p={children:l.default.node,help:l.default.node,legend:l.default.string,legendAttrs:l.default.object,required:l.default.bool,isLegendHidden:l.default.bool},m=function(e){var t=e.children,n=e.help,l=e.legend,u=e.legendAttrs,i=e.isLegendHidden,d=e.required,p=c(e,["children","help","legend","legendAttrs","isLegendHidden","required"]),m=r.default.useContext(a.default),b=(0,o.default)(s(["fieldset",{"fieldset-required":d},m.className]),p.className),y=s(["legend",u.className,{"legend-visually-hidden":i}]);return r.default.createElement("fieldset",f({},p,{className:b}),l&&r.default.createElement("legend",f({},u,{className:y}),l),n&&r.default.createElement("small",{className:s("help-text"),tabIndex:"-1"},n),r.default.createElement("div",{className:s("fieldset-children")},t))};m.propTypes=p,m.defaultProps={legendAttrs:{},required:!1,isLegendHidden:!1};var b=m;t.default=b},1115:function(e,t,n){e.exports={"clinical-lowlight-theme":"Fieldset-module__clinical-lowlight-theme___1Gu9R","orion-fusion-theme":"Fieldset-module__orion-fusion-theme___2ijUo",fieldset:"Fieldset-module__fieldset___QRtAv","fieldset-required":"Fieldset-module__fieldset-required___YM_28",legend:"Fieldset-module__legend___2fbSJ","legend-visually-hidden":"Fieldset-module__legend-visually-hidden___3tERW","help-text":"Fieldset-module__help-text___3_p45","fieldset-children":"Fieldset-module__fieldset-children___VKKPH"}},2587:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),l=a(n(288)),o=a(n(875)),u=a(n(1114));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement(u.default,{legend:"I am the Hidden Legend",help:"Families are eligible for family package plans",required:!0,isLegendHidden:!0},r.default.createElement(l.default,{label:"First",isInline:!0,required:!0,htmlFor:"first"},r.default.createElement(o.default,{id:"first",type:"text",name:"first",defaultValue:""})),r.default.createElement(l.default,{label:"Middle",isInline:!0,required:!0,htmlFor:"middle"},r.default.createElement(o.default,{id:"middle",type:"text",name:"middle",defaultValue:""})),r.default.createElement(l.default,{label:"Last",isInline:!0,required:!0,htmlFor:"last"},r.default.createElement(o.default,{id:"last",type:"text",name:"last",defaultValue:""})))};t.default=i},875:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),l=d(n(3)),o=d(n(11)),u=d(n(5)),a=d(n(8)),i=d(n(879));function d(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var l=g(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=u.default.bind(i.default),j={defaultValue:l.default.oneOfType([l.default.string,l.default.number]),disabled:l.default.bool,isIncomplete:l.default.bool,isInvalid:l.default.bool,onBlur:l.default.func,onChange:l.default.func,onFocus:l.default.func,name:l.default.string,pattern:l.default.string,refCallback:l.default.func,required:l.default.bool,type:l.default.string,value:l.default.oneOfType([l.default.string,l.default.number]),ariaLabel:l.default.string},w={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(a,e);var t,n,l,u=h(a);function a(){return b(this,a),u.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){var e,t=this.props,n=t.defaultValue,l=t.disabled,u=t.isIncomplete,a=t.isInvalid,i=t.onBlur,d=t.onChange,f=t.onFocus,b=t.name,y=t.pattern,_=t.refCallback,h=t.required,v=t.type,g=t.ariaLabel,j=t.value,w=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},m(t,["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","name","pattern","refCallback","required","type","ariaLabel","value"])),P=this.context,I=(0,o.default)(O("form-input",{"form-error":a},{"form-incomplete":u&&h&&!a},P.className),w.className);return w&&Object.prototype.hasOwnProperty.call(w,"aria-label")?e=g||w["aria-label"]:g&&(e=g),w["aria-label"]=e,h&&(w["aria-required"]="true"),void 0!==j?w.value=j:void 0!==n&&(w.defaultValue=n),w.placeholder&&(w.placeholder=null),r.default.createElement("input",c({},w,{ref:function(e){_&&_(e)},name:b,type:v,pattern:y,onBlur:i,onChange:d,onFocus:f,disabled:l,required:h,className:I}))}}])&&y(t.prototype,n),l&&y(t,l),a}(r.default.Component);P.propTypes=j,P.defaultProps=w,P.contextType=a.default,P.isInput=!0;var I=P;t.default=I},879:function(e,t,n){e.exports={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___2ILS5","orion-fusion-theme":"Input-module__orion-fusion-theme___33ZoB","form-input":"Input-module__form-input___1P2d6","form-error":"Input-module__form-error___j0fiD","form-incomplete":"Input-module__form-incomplete___3wIAu"}}}]);
//# sourceMappingURL=288-6927fdfea13f7b10fb04.js.map