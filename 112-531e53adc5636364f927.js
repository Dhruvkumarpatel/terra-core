(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{1082:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),o=n(863),i=n.n(o),l=function(e){var t=e.url;return a.a.createElement(i.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-badge",name:"terra-badge",version:"3.42.0",url:t})}},1154:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(22));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){var t=i({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M24 34l14 14V0H10v48z"}))};l.displayName="IconBookmark",l.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var d=l;t.default=d},1614:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(942));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement("div",null,r.default.createElement(a.default,{text:"Default"})," ",r.default.createElement(a.default,{intent:"primary",text:"Primary"})," ",r.default.createElement(a.default,{intent:"secondary",text:"Secondary"})," ",r.default.createElement(a.default,{intent:"positive",text:"Positive"})," ",r.default.createElement(a.default,{intent:"negative",text:"Negative"})," ",r.default.createElement(a.default,{intent:"warning",text:"Warning"})," ",r.default.createElement(a.default,{intent:"info",text:"Info"}))};t.default=i},1615:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(942));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement("div",null,r.default.createElement(a.default,{size:"tiny",text:"Tiny"})," ",r.default.createElement(a.default,{size:"small",text:"Small"})," ",r.default.createElement(a.default,{size:"medium",text:"Medium"})," ",r.default.createElement(a.default,{size:"large",text:"Large"})," ",r.default.createElement(a.default,{size:"huge",text:"Huge"}))};t.default=i},1616:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),a=i(n(1154)),o=i(n(942));function i(e){return e&&e.__esModule?e:{default:e}}var l=r.default.createElement(a.default,null),d=function(){return r.default.createElement("div",null,r.default.createElement(o.default,{icon:l,text:"icon"})," ",r.default.createElement(o.default,{icon:l,text:"icon",isReversed:!0})," ",r.default.createElement(o.default,{icon:l}))};t.default=d},1617:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(942));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement("div",null,r.default.createElement(a.default,{text:"Low",visuallyHiddenText:"Risk Factor Low"})," ",r.default.createElement(a.default,{text:"Medium",visuallyHiddenText:"Risk Factor Medium"})," ",r.default.createElement(a.default,{text:"High",visuallyHiddenText:"Risk Factor High"})," ",r.default.createElement(a.default,{text:"Critical",visuallyHiddenText:"Risk Factor Critical"}))};t.default=i},2949:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var r=n(0),a=n.n(r),o=n(287),i=n(1082),l=n(1614),d=n.n(l);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p={};function m(e){var t=e.components,n=c(e,["components"]);return Object(o.mdx)("wrapper",u({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",u({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport Badge from \'terra-badge\';\n\nconst BadgeIntent = () => (\n  <div>\n    <Badge text="Default" />\n    {\' \'}\n    <Badge intent="primary" text="Primary" />\n    {\' \'}\n    <Badge intent="secondary" text="Secondary" />\n    {\' \'}\n    <Badge intent="positive" text="Positive" />\n    {\' \'}\n    <Badge intent="negative" text="Negative" />\n    {\' \'}\n    <Badge intent="warning" text="Warning" />\n    {\' \'}\n    <Badge intent="info" text="Info" />\n  </div>\n);\n\nexport default BadgeIntent;\n\n')))}m.isMDXComponent=!0;var s=n(862),f=n.n(s),x=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Badge Intent",description:n,example:a.a.createElement(d.a,null),exampleSrc:a.a.createElement(m,null),isExpanded:r})},b=n(1615),g=n.n(b);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v={};function j(e){var t=e.components,n=y(e,["components"]);return Object(o.mdx)("wrapper",O({},v,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",O({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport Badge from \'terra-badge\';\n\nconst BadgeSize = () => (\n  <div>\n    <Badge size="tiny" text="Tiny" />\n    {\' \'}\n    <Badge size="small" text="Small" />\n    {\' \'}\n    <Badge size="medium" text="Medium" />\n    {\' \'}\n    <Badge size="large" text="Large" />\n    {\' \'}\n    <Badge size="huge" text="Huge" />\n  </div>\n);\n\nexport default BadgeSize;\n\n')))}j.isMDXComponent=!0;var _=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Badge Size",description:n,example:a.a.createElement(g.a,null),exampleSrc:a.a.createElement(j,null),isExpanded:r})},h=n(1616),w=n.n(h);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var M={};function N(e){var t=e.components,n=E(e,["components"]);return Object(o.mdx)("wrapper",B({},M,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",B({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport IconBookmark from 'terra-icon/lib/icon/IconBookmark';\nimport Badge from 'terra-badge';\n\nconst Icon = <IconBookmark />;\n\nconst BadgeIcon = () => (\n  <div>\n    <Badge icon={Icon} text=\"icon\" />\n    {' '}\n    <Badge icon={Icon} text=\"icon\" isReversed />\n    {' '}\n    <Badge icon={Icon} />\n  </div>\n);\n\nexport default BadgeIcon;\n\n")))}N.isMDXComponent=!0;var T=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Badge Icon",description:n,example:a.a.createElement(w.a,null),exampleSrc:a.a.createElement(N,null),isExpanded:r})},P=n(1617),D=n.n(P);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var I={};function X(e){var t=e.components,n=S(e,["components"]);return Object(o.mdx)("wrapper",C({},I,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",C({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport Badge from \'terra-badge\';\n\nconst BadgeVisuallyHiddenText = () => (\n  <div>\n    <Badge text="Low" visuallyHiddenText="Risk Factor Low" />\n    {\' \'}\n    <Badge text="Medium" visuallyHiddenText="Risk Factor Medium" />\n    {\' \'}\n    <Badge text="High" visuallyHiddenText="Risk Factor High" />\n    {\' \'}\n    <Badge text="Critical" visuallyHiddenText="Risk Factor Critical" />\n  </div>\n);\n\nexport default BadgeVisuallyHiddenText;\n\n')))}X.isMDXComponent=!0;var L=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Badge Visually Hidden Text",description:n,example:a.a.createElement(D.a,null),exampleSrc:a.a.createElement(X,null),isExpanded:r})},k=n(865),z=n.n(k);function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var V=function(){return Object(o.mdx)(z.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"null",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Child Nodes."))}return t.isMDXComponent=!0,t({})}},{name:"icon",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"null",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"An optional icon. Nested inline with the text when provided."))}return t.isMDXComponent=!0,t({})}},{name:"intent",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"enum"),Object(o.mdx)("pre",null,Object(o.mdx)("code",R({parentName:"pre"},{className:"language-json"}),'[\n "default",\n "primary",\n "secondary",\n "info",\n "warning",\n "positive",\n "negative"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'default'",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the badge color scheme. One of ",Object(o.mdx)("inlineCode",{parentName:"p"},"default"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"primary"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"secondary"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"positive"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"negative"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"warning"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"info"),"."))}return t.isMDXComponent=!0,t({})}},{name:"isReversed",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Reverses the position of the icon and text."))}return t.isMDXComponent=!0,t({})}},{name:"size",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"enum"),Object(o.mdx)("pre",null,Object(o.mdx)("code",R({parentName:"pre"},{className:"language-json"}),'[\n "tiny",\n "small",\n "medium",\n "large",\n "huge"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'small'",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the badge size. One of ",Object(o.mdx)("inlineCode",{parentName:"p"},"tiny"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"small"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"medium"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"large"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"huge"),"."))}return t.isMDXComponent=!0,t({})}},{name:"text",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"null",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the badge text."))}return t.isMDXComponent=!0,t({})}},{name:"visuallyHiddenText",type:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=H(t,["components"]);return Object(o.mdx)("wrapper",R({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Text that describes the badge to a screen reader. Use this\nfor creating an accessible badge."))}return t.isMDXComponent=!0,t({})}}]})};function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var G={};function A(e){var t=e.components,n=q(e,["components"]);return Object(o.mdx)("wrapper",F({},G,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(i.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-badge"},"Terra Badge"),Object(o.mdx)("p",null,"The badge component displays content classification."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",F({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-badge"))))),Object(o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",F({parentName:"tr"},{align:null}),"Peer Dependency"),Object(o.mdx)("th",F({parentName:"tr"},{align:null}),"Version"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",F({parentName:"tr"},{align:null}),"react"),Object(o.mdx)("td",F({parentName:"tr"},{align:null}),"^16.8.5")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",F({parentName:"tr"},{align:null}),"react-dom"),Object(o.mdx)("td",F({parentName:"tr"},{align:null}),"^16.8.5")))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",F({parentName:"pre"},{className:"language-jsx"}),"import Badge from 'terra-badge';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",F({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",F({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",F({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(x,{title:"Intent",mdxType:"BadgeIntent"}),Object(o.mdx)(_,{title:"Size",mdxType:"BadgeSize"}),Object(o.mdx)(T,{title:"Icon",mdxType:"BadgeIcon"}),Object(o.mdx)(L,{title:"VisuallyHiddenText",mdxType:"BadgeVisuallyHiddenText"}),Object(o.mdx)("h2",{id:"badge-props"},"Badge props"),Object(o.mdx)(V,{mdxType:"BadgePropsTable"}))}A.isMDXComponent=!0},866:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(22));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){var t=i({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var d=l;t.default=d},942:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BadgeSize=t.BadgeIntent=t.default=void 0;var r=c(n(0)),a=c(n(3)),o=c(n(11)),i=c(n(5)),l=c(n(960)),d=c(n(142)),u=c(n(964));function c(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var x=i.default.bind(u.default);t.BadgeIntent={DEFAULT:"default",PRIMARY:"primary",SECONDARY:"secondary",INFO:"info",WARNING:"warning",POSITIVE:"positive",NEGATIVE:"negative"};t.BadgeSize={TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"};var b={children:a.default.node,icon:a.default.element,intent:a.default.oneOf(["default","primary","secondary","info","warning","positive","negative"]),isReversed:a.default.bool,size:a.default.oneOf(["tiny","small","medium","large","huge"]),text:a.default.string,visuallyHiddenText:a.default.string},g={children:null,icon:null,intent:"default",isReversed:!1,size:"small",text:null,visuallyHiddenText:void 0},O=function(e){var t=e.size,n=e.intent,a=e.isReversed,i=e.text,c=e.icon,p=e.visuallyHiddenText,s=f(e,["size","intent","isReversed","text","icon","visuallyHiddenText"]),b=r.default.useContext(l.default),g=(0,o.default)(x("badge",{"has-icon":c},{"is-reversed":a},t,n,b.className),s.className),O=i?r.default.createElement("span",{className:u.default.text,"aria-hidden":"true"},i):null,y=p?r.default.createElement(d.default,{text:p}):null,v=a?[y,O,c,s.children]:[c,y,O,s.children];return r.default.createElement.apply(r.default,["span",m(m({},s),{},{className:g})].concat(v))};O.propTypes=b,O.defaultProps=g;var y=O;t.default=y},964:function(e,t,n){e.exports={"clinical-lowlight-theme":"Badge-module__clinical-lowlight-theme___3V7VQ","orion-fusion-theme":"Badge-module__orion-fusion-theme___9BG4x",badge:"Badge-module__badge___20KZ3","is-reversed":"Badge-module__is-reversed___2z3k1","has-icon":"Badge-module__has-icon___2R0fy",text:"Badge-module__text___2Y8yP",tiny:"Badge-module__tiny___1mem2",small:"Badge-module__small___ow-O5",medium:"Badge-module__medium___1w1TM",large:"Badge-module__large___2dMPP",huge:"Badge-module__huge___29Jcf",default:"Badge-module__default___3JkGW",primary:"Badge-module__primary___WLzak",secondary:"Badge-module__secondary___2Eyvs",positive:"Badge-module__positive___17Lg_",negative:"Badge-module__negative___3GJ0z",warning:"Badge-module__warning___Gqrsa",info:"Badge-module__info___1RQe6"}}}]);
//# sourceMappingURL=112-531e53adc5636364f927.js.map