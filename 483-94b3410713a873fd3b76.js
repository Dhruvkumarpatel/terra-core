(window.webpackJsonp=window.webpackJsonp||[]).push([[483],{1e3:function(e,d,t){e.exports={"clinical-lowlight-theme":"RadioField-module__clinical-lowlight-theme___UsxqF","orion-fusion-theme":"RadioField-module__orion-fusion-theme___35-W7","radio-field":"RadioField-module__radio-field___1-oF2","is-inline":"RadioField-module__is-inline___uxuYG","legend-group":"RadioField-module__legend-group___PWMMa","legend-group-hidden":"RadioField-module__legend-group-hidden___3ukE_",legend:"RadioField-module__legend___25iPe","error-icon":"RadioField-module__error-icon___9-6Tu","error-icon-hidden":"RadioField-module__error-icon-hidden___25XHU",required:"RadioField-module__required___1JrPY","required-hidden":"RadioField-module__required-hidden___2I4Rp",optional:"RadioField-module__optional___2c2A5","help-text":"RadioField-module__help-text___2xeXL","error-text":"RadioField-module__error-text___3DC8J"}},2603:function(e,d,t){"use strict";Object.defineProperty(d,"__esModule",{value:!0}),d.default=void 0;var l=a(t(0)),i=a(t(906)),r=a(t(954));function a(e){return e&&e.__esModule?e:{default:e}}var n=function(){return l.default.createElement(r.default,{legend:"Desired Department",isLegendHidden:!0},l.default.createElement(i.default,{id:"ux-dept",name:"dept",labelText:"UX/Interaction Design",value:"ux"}),l.default.createElement(i.default,{id:"magazine-dept",name:"dept",labelText:"Magazine Advertisements",value:"magazine"}),l.default.createElement(i.default,{id:"website-dept",name:"dept",labelText:"Website Advertisements",value:"website"}),l.default.createElement(i.default,{id:"events-dept",name:"dept",labelText:"Event Promotions",value:"events"}))};d.default=n},954:function(e,d,t){"use strict";Object.defineProperty(d,"__esModule",{value:!0}),d.default=void 0;var l=f(t(0)),i=f(t(3)),r=t(9),a=f(t(11)),n=f(t(5)),o=f(t(8)),u=f(t(83)),s=f(t(142)),c=f(t(1e3));function f(e){return e&&e.__esModule?e:{default:e}}function _(){return(_=Object.assign||function(e){for(var d=1;d<arguments.length;d++){var t=arguments[d];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function m(e,d){if(null==e)return{};var t,l,i=function(e,d){if(null==e)return{};var t,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],d.indexOf(t)>=0||(i[t]=e[t]);return i}(e,d);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],d.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.default.bind(c.default),g={children:i.default.node,error:i.default.node,help:i.default.node,hideRequired:i.default.bool,isInline:i.default.bool,isInvalid:i.default.bool,isLegendHidden:i.default.bool,legend:i.default.string.isRequired,legendAttrs:i.default.object,required:i.default.bool,showOptional:i.default.bool},h=function(e){var d=e.children,t=e.error,i=e.help,n=e.hideRequired,c=e.isInvalid,f=e.isInline,g=e.isLegendHidden,h=e.legend,v=e.legendAttrs,b=e.required,E=e.showOptional,R=m(e,["children","error","help","hideRequired","isInvalid","isInline","isLegendHidden","legend","legendAttrs","required","showOptional"]),x=l.default.useContext(o.default),q=(0,a.default)(p("radio-field",{"is-inline":f},x.className),R.className),F=p(["legend",v.className]),w="terra-radio-field-description-".concat((0,u.default)()),O=i?"terra-radio-field-description-help-".concat((0,u.default)()):"",y=t?"terra-radio-field-description-error-".concat((0,u.default)()):"",N="".concat(w," ").concat(y," ").concat(O),I=l.default.createElement("legend",{id:w,className:p(["legend-group",{"legend-group-hidden":g}])},l.default.createElement("div",_({},v,{className:F}),c&&l.default.createElement("span",{className:p("error-icon")}),b&&(c||!n)&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{"aria-hidden":"true",className:p("required")},"*"),l.default.createElement(r.FormattedMessage,{id:"Terra.form.field.required"},(function(e){return l.default.createElement(s.default,{text:e})}))),h,b&&!c&&n&&l.default.createElement("span",{className:p("required-hidden")},"*"),E&&!b&&l.default.createElement(r.FormattedMessage,{id:"Terra.form.field.optional"},(function(e){return l.default.createElement("span",{className:p("optional")},e)})),!c&&l.default.createElement("span",{className:p("error-icon-hidden")}))),P=l.default.Children.map(d,(function(e){return e&&e.type.isRadio?l.default.cloneElement(e,{inputAttrs:{"aria-describedby":N}}):e}));return l.default.createElement("fieldset",_({},R,{"aria-required":b,required:b,className:q}),I,P,c&&t&&l.default.createElement("div",{id:y,className:p("error-text")},t),i&&l.default.createElement("div",{id:O,className:p("help-text")},i))};h.propTypes=g,h.defaultProps={children:null,error:null,help:null,hideRequired:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttrs:{},required:!1,showOptional:!1};var v=h;d.default=v}}]);
//# sourceMappingURL=483-94b3410713a873fd3b76.js.map