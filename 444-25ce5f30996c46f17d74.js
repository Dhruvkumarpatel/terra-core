(window.webpackJsonp=window.webpackJsonp||[]).push([[444],{2567:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(0)),o=i(n(886));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){return l.default.createElement(o.default,{id:"hidden",labelText:"can you see me?",isLabelHidden:!0})};t.default=a},886:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(n(0)),o=c(n(3)),i=c(n(11)),a=c(n(5)),u=c(n(8)),r=c(n(931)),d=c(n(932));function c(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var _=a.default.bind(r.default),m={checked:o.default.bool,defaultChecked:o.default.bool,id:o.default.string,inputAttrs:o.default.object,disabled:o.default.bool,isInline:o.default.bool,isLabelHidden:o.default.bool,labelText:o.default.string.isRequired,labelTextAttrs:o.default.object,name:o.default.string,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,value:o.default.string},p={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},v=function(e){var t=e.checked,n=e.defaultChecked,o=e.inputAttrs,a=e.id,r=e.disabled,c=e.isInline,m=e.isLabelHidden,p=e.labelText,v=e.labelTextAttrs,x=e.name,O=e.onBlur,k=e.onChange,g=e.onFocus,y=e.value,C=h(e,["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"]),w=l.default.useContext(u.default),j=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o);void 0!==t?j.checked=t:j.defaultChecked=n;var P=(0,i.default)(_("checkbox",{"is-inline":c},w.className),C.className),D=_(["label",{"is-disabled":r},{"is-mobile":d.default.isConsideredMobileDevice()},v.className]),T=_(["native-input",o.className]),E=_(["label-text",{"is-hidden":m},{"is-mobile":d.default.isConsideredMobileDevice()}]),M=null;return m?(j["aria-label"]=p,M=l.default.createElement("span",s({},v,{className:E}))):M=l.default.createElement("span",s({},v,{className:E}),p),l.default.createElement("div",s({},C,{className:P}),l.default.createElement("label",{htmlFor:a,className:D},l.default.createElement("input",s({},j,{type:"checkbox",id:a,disabled:r,name:x,value:y,onChange:k,onFocus:g,onBlur:O,className:T})),M))};v.propTypes=m,v.defaultProps=p,v.isCheckbox=!0;var x=v;t.default=x},931:function(e,t,n){e.exports={"clinical-lowlight-theme":"Checkbox-module__clinical-lowlight-theme___1I7Gn","orion-fusion-theme":"Checkbox-module__orion-fusion-theme___29m2d",checkbox:"Checkbox-module__checkbox___1DzDw",label:"Checkbox-module__label___GWPVb","is-mobile":"Checkbox-module__is-mobile___13DUd","native-input":"Checkbox-module__native-input___1CCoe","label-text":"Checkbox-module__label-text___3q5Qm","is-hidden":"Checkbox-module__is-hidden___1VqYx","is-disabled":"Checkbox-module__is-disabled___3ERR9","is-inline":"Checkbox-module__is-inline___2HYdD"}},932:function(e,t,n){"use strict";var l={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=l}}]);
//# sourceMappingURL=444-25ce5f30996c46f17d74.js.map