(window.webpackJsonp=window.webpackJsonp||[]).push([[510],{1006:function(e,r,a){e.exports={"clinical-lowlight-theme":"ProgressBar-module__clinical-lowlight-theme___qLQPu","orion-fusion-theme":"ProgressBar-module__orion-fusion-theme___2n2Bw","progress-bar":"ProgressBar-module__progress-bar___RnSdv","default-color":"ProgressBar-module__default-color___2k9lZ",tiny:"ProgressBar-module__tiny___2O6Dl",small:"ProgressBar-module__small___2452Z",medium:"ProgressBar-module__medium___3VPS8",large:"ProgressBar-module__large___1Dd94",huge:"ProgressBar-module__huge___3_Syb"}},2787:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var l=u(a(0)),t=u(a(957));function u(e){return e&&e.__esModule?e:{default:e}}var o=function(){return l.default.createElement(t.default,{id:"progressbar",valueText:"15%",value:15})};r.default=o},957:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ProgressBarHeightSize=r.default=void 0;var l=i(a(0)),t=i(a(3)),u=i(a(11)),o=i(a(5)),s=i(a(8)),n=i(a(1006));function i(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function _(e,r){if(null==e)return{};var a,l,t=function(e,r){if(null==e)return{};var a,l,t={},u=Object.keys(e);for(l=0;l<u.length;l++)a=u[l],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(l=0;l<u.length;l++)a=u[l],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var f=o.default.bind(n.default);r.ProgressBarHeightSize={TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"};var m={heightSize:t.default.oneOf(["tiny","small","medium","large","huge"]),value:t.default.number.isRequired,max:t.default.number,valueText:t.default.string,colorClass:t.default.string},c={heightSize:"small",max:100,valueText:void 0,colorClass:"default-color"},g=function(e){var r=e.heightSize,a=e.value,t=e.max,o=e.valueText,n=e.colorClass,i=_(e,["heightSize","value","max","valueText","colorClass"]),m=l.default.useContext(s.default),c=(0,u.default)(f("progress-bar",r,n,m.className),i.className),g=a/t*100;return l.default.createElement("progress",d({},i,{className:c,max:100,value:g,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":g,"aria-valuetext":o,tabIndex:"-1"}))};g.propTypes=m,g.defaultProps=c;var v=g;r.default=v}}]);
//# sourceMappingURL=510-e562606ed316b48924be.js.map