(window.webpackJsonp=window.webpackJsonp||[]).push([[443],{2566:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(l(0)),a=i(l(886));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){return n.default.createElement("div",null,n.default.createElement(a.default,{id:"disabled",labelText:"Disabled Checkbox",disabled:!0}),n.default.createElement(a.default,{id:"disabledchecked",labelText:"Disabled and Checked Checkbox",defaultChecked:!0,disabled:!0}))};t.default=o},886:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(l(0)),a=c(l(3)),i=c(l(11)),o=c(l(5)),d=c(l(8)),u=c(l(931)),r=c(l(932));function c(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}function b(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function f(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function h(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var m=o.default.bind(u.default),_={checked:a.default.bool,defaultChecked:a.default.bool,id:a.default.string,inputAttrs:a.default.object,disabled:a.default.bool,isInline:a.default.bool,isLabelHidden:a.default.bool,labelText:a.default.string.isRequired,labelTextAttrs:a.default.object,name:a.default.string,onBlur:a.default.func,onChange:a.default.func,onFocus:a.default.func,value:a.default.string},p={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},v=function(e){var t=e.checked,l=e.defaultChecked,a=e.inputAttrs,o=e.id,u=e.disabled,c=e.isInline,_=e.isLabelHidden,p=e.labelText,v=e.labelTextAttrs,x=e.name,k=e.onBlur,C=e.onChange,O=e.onFocus,g=e.value,w=h(e,["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"]),y=n.default.useContext(d.default),j=function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?b(Object(l),!0).forEach((function(t){f(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):b(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({},a);void 0!==t?j.checked=t:j.defaultChecked=l;var P=(0,i.default)(m("checkbox",{"is-inline":c},y.className),w.className),D=m(["label",{"is-disabled":u},{"is-mobile":r.default.isConsideredMobileDevice()},v.className]),T=m(["native-input",a.className]),E=m(["label-text",{"is-hidden":_},{"is-mobile":r.default.isConsideredMobileDevice()}]),M=null;return _?(j["aria-label"]=p,M=n.default.createElement("span",s({},v,{className:E}))):M=n.default.createElement("span",s({},v,{className:E}),p),n.default.createElement("div",s({},w,{className:P}),n.default.createElement("label",{htmlFor:o,className:D},n.default.createElement("input",s({},j,{type:"checkbox",id:o,disabled:u,name:x,value:g,onChange:C,onFocus:O,onBlur:k,className:T})),M))};v.propTypes=_,v.defaultProps=p,v.isCheckbox=!0;var x=v;t.default=x},931:function(e,t,l){e.exports={"clinical-lowlight-theme":"Checkbox-module__clinical-lowlight-theme___1I7Gn","orion-fusion-theme":"Checkbox-module__orion-fusion-theme___29m2d",checkbox:"Checkbox-module__checkbox___1DzDw",label:"Checkbox-module__label___GWPVb","is-mobile":"Checkbox-module__is-mobile___13DUd","native-input":"Checkbox-module__native-input___1CCoe","label-text":"Checkbox-module__label-text___3q5Qm","is-hidden":"Checkbox-module__is-hidden___1VqYx","is-disabled":"Checkbox-module__is-disabled___3ERR9","is-inline":"Checkbox-module__is-inline___2HYdD"}},932:function(e,t,l){"use strict";var n={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=n}}]);
//# sourceMappingURL=443-3b92430651ee7ff1e73d.js.map