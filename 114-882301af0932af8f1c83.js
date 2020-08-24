(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{1090:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(0),r=n.n(o),a=n(863),l=n.n(a),i=function(e){var t=e.url;return r.a.createElement(l.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-dialog",name:"terra-dialog",version:"2.50.0",url:t})}},1188:function(e,t,n){e.exports={"dialog-wrapper":"DialogDocCommon-module__dialog-wrapper___J-axE"}},1661:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(0)),r=i(n(943)),a=i(n(5)),l=i(n(1188));function i(e){return e&&e.__esModule?e:{default:e}}var s=a.default.bind(l.default),c=o.default.createElement("span",null,"Footer Stuff"),m=o.default.createElement("div",null,o.default.createElement("p",null,"This is my body content."),o.default.createElement("p",null,"This is some more content.")),u=function(){return o.default.createElement("div",{className:s("dialog-wrapper")},o.default.createElement(r.default,{header:"Header Stuff",footer:c,onClose:function(){return alert("Close")}},m))};t.default=u},1662:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(0)),r=i(n(943)),a=i(n(5)),l=i(n(1188));function i(e){return e&&e.__esModule?e:{default:e}}var s=a.default.bind(l.default),c=o.default.createElement("div",null,o.default.createElement("span",null,"Footer Stuff"),o.default.createElement("span",null,"Footer Stuff"),o.default.createElement("span",null,"Footer Stuff"),o.default.createElement("span",null,"Footer Stuff"),o.default.createElement("span",null,"Footer Stuff")),m=o.default.createElement("div",null,o.default.createElement("p",null,"This is my body content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content."),o.default.createElement("p",null,"This is some more content.")),u=function(){return o.default.createElement("div",{className:s("dialog-wrapper")},o.default.createElement(r.default,{header:"Header Stuff",footer:c,onClose:function(){return alert("Close")}},m))};t.default=u},1663:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(0)),r=i(n(943)),a=i(n(5)),l=i(n(1188));function i(e){return e&&e.__esModule?e:{default:e}}var s=a.default.bind(l.default),c=o.default.createElement("span",null,"Footer Stuff"),m=o.default.createElement("div",null,o.default.createElement("p",null,"This is my body content."),o.default.createElement("p",null,"This is some more content.")),u=function(){return o.default.createElement("div",{className:s("dialog-wrapper")},o.default.createElement(r.default,{header:"Header Stuff",footer:c},m))};t.default=u},2953:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return z}));var o=n(0),r=n.n(o),a=n(287),l=n(1090),i=n(1661),s=n.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u={};function p(e){var t=e.components,n=m(e,["components"]);return Object(a.mdx)("wrapper",c({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable no-alert */\nimport React from 'react';\nimport Dialog from 'terra-dialog';\nimport classNames from 'classnames/bind';\nimport styles from './DialogDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst header = 'Header Stuff';\n\nconst footer = <span>Footer Stuff</span>;\n\nconst body = (\n  <div>\n    <p>This is my body content.</p>\n    <p>This is some more content.</p>\n  </div>\n);\n\nconst DialogDefault = () => (\n  <div className={cx('dialog-wrapper')}>\n    <Dialog header={header} footer={footer} onClose={() => alert('Close')}>\n      {body}\n    </Dialog>\n  </div>\n);\n\nexport default DialogDefault;\n/* eslint-enable no-alert */\n\n")))}p.isMDXComponent=!0;var d=n(862),f=n.n(d);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g={};function O(e){var t=e.components,n=h(e,["components"]);return Object(a.mdx)("wrapper",b({},g,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",b({parentName:"pre"},{className:"language-scss"}),":local {\n  .dialog-wrapper {\n    border: dashed;\n    height: 200px;\n    width: 350px;\n  }\n}\n\n")))}O.isMDXComponent=!0;var x=function(e){var t=e.title,n=e.description,o=e.isExpanded;return r.a.createElement(f.a,{title:t||"Dialog Default",description:n,example:r.a.createElement(s.a,null),exampleCssSrc:r.a.createElement(O,null),exampleSrc:r.a.createElement(p,null),isExpanded:o})},y=n(1662),v=n.n(y);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var E={};function D(e){var t=e.components,n=T(e,["components"]);return Object(a.mdx)("wrapper",j({},E,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",j({parentName:"pre"},{className:"language-jsx"}),"/* eslint-disable no-alert */\nimport React from 'react';\nimport Dialog from 'terra-dialog';\nimport classNames from 'classnames/bind';\nimport styles from './DialogDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst header = 'Header Stuff';\n\nconst footer = (\n  <div>\n    <span>Footer Stuff</span>\n    <span>Footer Stuff</span>\n    <span>Footer Stuff</span>\n    <span>Footer Stuff</span>\n    <span>Footer Stuff</span>\n  </div>\n);\n\nconst body = (\n  <div>\n    <p>This is my body content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n    <p>This is some more content.</p>\n  </div>\n);\n\nconst DialogLongContent = () => (\n  <div className={cx('dialog-wrapper')}>\n    <Dialog header={header} footer={footer} onClose={() => alert('Close')}>\n      {body}\n    </Dialog>\n  </div>\n);\n\nexport default DialogLongContent;\n/* eslint-enable no-alert */\n\n")))}D.isMDXComponent=!0;var w=function(e){var t=e.title,n=e.description,o=e.isExpanded;return r.a.createElement(f.a,{title:t||"Dialog Long Content",description:n,example:r.a.createElement(v.a,null),exampleCssSrc:r.a.createElement(O,null),exampleSrc:r.a.createElement(D,null),isExpanded:o})},N=n(1663),_=n.n(N);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var M={};function P(e){var t=e.components,n=S(e,["components"]);return Object(a.mdx)("wrapper",C({},M,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",C({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Dialog from 'terra-dialog';\nimport classNames from 'classnames/bind';\nimport styles from './DialogDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst header = 'Header Stuff';\n\nconst footer = <span>Footer Stuff</span>;\n\nconst body = (\n  <div>\n    <p>This is my body content.</p>\n    <p>This is some more content.</p>\n  </div>\n);\n\nconst DialogNoClose = () => (\n  <div className={cx('dialog-wrapper')}>\n    <Dialog header={header} footer={footer}>\n      {body}\n    </Dialog>\n  </div>\n);\n\nexport default DialogNoClose;\n\n")))}P.isMDXComponent=!0;var X=function(e){var t=e.title,n=e.description,o=e.isExpanded;return r.a.createElement(f.a,{title:t||"Dialog No Close",description:n,example:r.a.createElement(_.a,null),exampleCssSrc:r.a.createElement(O,null),exampleSrc:r.a.createElement(P,null),isExpanded:o})},L=n(865),F=n.n(L);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var R=function(){return Object(a.mdx)(F.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,o=I(t,["components"]);return Object(a.mdx)("wrapper",k({},e,o,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"null",description:function(){var e={};function t(t){var n=t.components,o=I(t,["components"]);return Object(a.mdx)("wrapper",k({},e,o,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The children to be placed within the main content area of the dialog."))}return t.isMDXComponent=!0,t({})}},{name:"footer",type:function(){var e={};function t(t){var n=t.components,o=I(t,["components"]);return Object(a.mdx)("wrapper",k({},e,o,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,o=I(t,["components"]);return Object(a.mdx)("wrapper",k({},e,o,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"React node to be placed within the footer area of the dialog.\nContent exceeding the available space will be hidden."))}return t.isMDXComponent=!0,t({})}},{name:"header",type:function(){var e={};function t(t){var n=t.components,o=I(t,["components"]);return Object(a.mdx)("wrapper",k({},e,o,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,o=I(t,["components"]);return Object(a.mdx)("wrapper",k({},e,o,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"React node to be placed within the header area of the dialog."))}return t.isMDXComponent=!0,t({})}},{name:"onClose",type:function(){var e={};function t(t){var n=t.components,o=I(t,["components"]);return Object(a.mdx)("wrapper",k({},e,o,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"null",description:function(){var e={};function t(t){var n=t.components,o=I(t,["components"]);return Object(a.mdx)("wrapper",k({},e,o,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Callback function for when the close button is clicked. The close button will not display if this is not set.\nOn small viewports a back button will be displayed instead of a close button."))}return t.isMDXComponent=!0,t({})}}]})};function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var H={};function z(e){var t=e.components,n=B(e,["components"]);return Object(a.mdx)("wrapper",q({},H,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(l.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-dialog"},"Terra Dialog"),Object(a.mdx)("p",null,"Dialogs are temporary views that can be used in a myriad of ways. Dialogs have the ability to alert users to act on critical information. In doing so, Dialogs may allow users to avoid destructive decisions, and also extend user workflows without disorienting the user."),Object(a.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Install with ",Object(a.mdx)("a",q({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"npm install terra-dialog"))))),Object(a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",q({parentName:"tr"},{align:null}),"Peer Dependency"),Object(a.mdx)("th",q({parentName:"tr"},{align:null}),"Version"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",q({parentName:"tr"},{align:null}),"react"),Object(a.mdx)("td",q({parentName:"tr"},{align:null}),"^16.8.5")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",q({parentName:"tr"},{align:null}),"react-dom"),Object(a.mdx)("td",q({parentName:"tr"},{align:null}),"^16.8.5")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",q({parentName:"tr"},{align:null}),"react-intl"),Object(a.mdx)("td",q({parentName:"tr"},{align:null}),"^2.8.0")))),Object(a.mdx)("h2",{id:"implementation-notes"},"Implementation Notes:"),Object(a.mdx)("p",null,"The Dialog component must be composed inside the ",Object(a.mdx)("a",q({parentName:"p"},{href:"https://engineering.cerner.com/terra-core/components/terra-base/base/base"}),"Base")," component with a locale in order for it to load the correct translation strings."),Object(a.mdx)("p",null,"Note: This component has an i18n dependency that requires setup as per ",Object(a.mdx)("a",q({parentName:"p"},{href:"https://github.com/cerner/terra-core/#internationalization-i18n"}),"these steps"),"."),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",q({parentName:"pre"},{className:"language-jsx"}),"import Dialog from 'terra-dialog';\n")),Object(a.mdx)("h2",{id:"component-features"},"Component Features"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",q({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",q({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",q({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",q({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Internationalization Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",q({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Localization Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",q({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#ltr--rtl-support"}),"LTR/RTL Support"))),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)(x,{title:"Dialog - Default",mdxType:"DialogDefault"}),Object(a.mdx)(w,{title:"Dialog - Long Content",mdxType:"DialogLongContent"}),Object(a.mdx)(X,{title:"Dialog - No Close Button",mdxType:"DialogNoClose"}),Object(a.mdx)("h2",{id:"dialog-props"},"Dialog Props"),Object(a.mdx)(R,{mdxType:"DialogPropsTable"}))}z.isMDXComponent=!0},866:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=a(n(22));function a(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var i=function(e){var t=l({},e);return o.default.createElement(r.default,t,o.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var s=i;t.default=s},943:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=p(n(0)),r=p(n(3)),a=p(n(11)),l=p(n(5)),i=p(n(8)),s=p(n(53)),c=p(n(54)),m=n(9),u=p(n(965));function p(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=l.default.bind(u.default),h={children:r.default.node,footer:r.default.node.isRequired,header:r.default.node.isRequired,onClose:r.default.func},g=function(e){var t=e.children,n=e.footer,r=e.header,l=e.onClose,u=f(e,["children","footer","header","onClose"]),p=o.default.useContext(i.default),h=(0,a.default)(b("dialog",p.className),u.className),g=l?o.default.createElement("div",{className:b("dialog-header-close")},o.default.createElement(m.FormattedMessage,{id:"Terra.dialog.close"},(function(e){return o.default.createElement(s.default,{variant:"utility",text:e,onClick:l,isIconOnly:!0,icon:o.default.createElement("span",{className:b("close-icon")})})}))):null,O=o.default.createElement("div",{className:b("dialog-header")},o.default.createElement("div",{className:b("dialog-header-title")},r),g);return o.default.createElement("div",d({},u,{className:h}),o.default.createElement(c.default,{fill:!0,header:O,footer:o.default.createElement("div",{className:b("dialog-footer")},n)},o.default.createElement("div",{className:b("dialog-body")},t)))};g.propTypes=h,g.defaultProps={onClose:null,children:null};var O=g;t.default=O},965:function(e,t,n){e.exports={"clinical-lowlight-theme":"Dialog-module__clinical-lowlight-theme___15vVt","orion-fusion-theme":"Dialog-module__orion-fusion-theme___3T_AN",dialog:"Dialog-module__dialog___2m12i","dialog-header":"Dialog-module__dialog-header___tH-_K","dialog-header-title":"Dialog-module__dialog-header-title___2QmqU","dialog-header-close":"Dialog-module__dialog-header-close___1xiMB","close-icon":"Dialog-module__close-icon___2Q45c","dialog-body":"Dialog-module__dialog-body___B1Nle","dialog-footer":"Dialog-module__dialog-footer___noxrB"}}}]);
//# sourceMappingURL=114-882301af0932af8f1c83.js.map