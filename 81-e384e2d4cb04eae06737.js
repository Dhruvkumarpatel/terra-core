(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1233:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[{title:"Item 0",key:"unique-0"},{title:"Item 1",key:"unique-1"},{title:"Item 2",key:"unique-2"},{title:"Item 3",key:"unique-3"},{title:"Item 4",key:"unique-4"}];t.default=a},2128:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==d(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var l=a?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(81)),l=u(n(878)),o=u(n(5)),i=u(n(1233)),s=u(n(916));function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=b(e);if(t){var r=b(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=o.default.bind(s.default),_=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(c,e);var t,n,o,s=f(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=s.call(this,e)).createListItem=t.createListItem.bind(y(t)),t.handleItemSelection=t.handleItemSelection.bind(y(t)),t.state={selectedKeys:[]},t}return t=c,(n=[{key:"handleItemSelection",value:function(e,t){e.preventDefault(),this.setState((function(e){return{selectedKeys:r.Utils.updatedMultiSelectedKeys(e.selectedKeys,t.key)}}))}},{key:"createListItem",value:function(e){return a.default.createElement(r.Item,{key:e.key,isSelectable:r.Utils.shouldBeMultiSelectable(3,this.state.selectedKeys,e.key),isSelected:this.state.selectedKeys.indexOf(e.key)>=0,metaData:{key:e.key},onSelect:this.handleItemSelection},a.default.createElement(l.default,{title:e.title,className:v("placeholder")}))}},{key:"createListItems",value:function(e){var t=this;return e.map((function(e){return t.createListItem(e)}))}},{key:"render",value:function(){return a.default.createElement(r.default,{dividerStyle:"standard",role:"listbox","aria-multiselectable":!0,"aria-label":"MultiSelectList-label"},this.createListItems(i.default))}}])&&m(t.prototype,n),o&&m(t,o),c}(a.default.Component);t.default=_},3001:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var a=n(0),r=n.n(a),l=n(287),o=n(897),i=n(2128),s=n.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d={};function m(e){var t=e.components,n=u(e,["components"]);return Object(l.mdx)("wrapper",c({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport List, { Item, Utils } from 'terra-list/lib/index';\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport classNames from 'classnames/bind';\nimport mockData from './mock-data/mock-select';\nimport styles from '../example/ListDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst maxSectionCount = 3;\n\nclass MutliSelectList extends React.Component {\n  constructor(props) {\n    super(props);\n    this.createListItem = this.createListItem.bind(this);\n    this.handleItemSelection = this.handleItemSelection.bind(this);\n    this.state = { selectedKeys: [] };\n  }\n\n  handleItemSelection(event, metaData) {\n    event.preventDefault();\n    this.setState(state => ({ selectedKeys: Utils.updatedMultiSelectedKeys(state.selectedKeys, metaData.key) }));\n  }\n\n  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n        isSelectable={Utils.shouldBeMultiSelectable(maxSectionCount, this.state.selectedKeys, itemData.key)}\n        isSelected={this.state.selectedKeys.indexOf(itemData.key) >= 0}\n        metaData={{ key: itemData.key }}\n        onSelect={this.handleItemSelection}\n      >\n        <Placeholder title={itemData.title} className={cx('placeholder')} />\n      </Item>\n    );\n  }\n\n  createListItems(data) {\n    return data.map(childItem => this.createListItem(childItem));\n  }\n\n  render() {\n    return (\n      <List\n        dividerStyle=\"standard\"\n        role=\"listbox\"\n        aria-multiselectable\n        aria-label=\"MultiSelectList-label\"\n      >\n        {this.createListItems(mockData)}\n      </List>\n    );\n  }\n}\n\nexport default MutliSelectList;\n\n")))}m.isMDXComponent=!0;var p=n(862),f=n.n(p),h=n(917),y=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(f.a,{title:t||"Multi Select List",description:n,example:r.a.createElement(s.a,null),exampleCssSrc:r.a.createElement(h.a,null),exampleSrc:r.a.createElement(m,null),isExpanded:a})};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _={};function g(e){var t=e.components,n=v(e,["components"]);return Object(l.mdx)("wrapper",b({},_,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)(o.a,{mdxType:"Badge"}),Object(l.mdx)("h1",{id:"terra-list---implementing-a-multi-select-list"},"Terra List - Implementing a Multi Select List"),Object(l.mdx)("p",null,"The terra-list implementation requires controlled state if selections are required. As a result, selections are applied when child items are generated from HOC state. The following guide will show you how to implement that state within a multiple items selection variant of list, as well as implement the additional narrowing requirements of a max selection for items."),Object(l.mdx)("h2",{id:"state-management"},"State Management"),Object(l.mdx)("p",null,"The state of selection needs to be managed for the list in a High Order Component (HOC). In this example we are going to be a unique key, but the type of state used is open to the implementor of the HOC."),Object(l.mdx)("p",null,"First defaulting our state to an empty array in the constructor. "),Object(l.mdx)("pre",null,Object(l.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n+   this.state = { selectedKeys: [] };\n  }\n  \n  render() {\n    return (\n    );\n  }\n}\n")),Object(l.mdx)("p",null,"Next creating an event handler callback method to pass to the list item's ",Object(l.mdx)("inlineCode",{parentName:"p"},"onSelect")," prop. The ",Object(l.mdx)("inlineCode",{parentName:"p"},"onSelect")," will return the metaData prop passed it each listItem."),Object(l.mdx)("pre",null,Object(l.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n+   this.handleItemSelection = this.handleItemSelection.bind(this)\n  }\n  \n+  handleItemSelection(event, metaData) {\n+\n+  }\n")),Object(l.mdx)("p",null,"As a precaution we can prevent default on the event, in case the list has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar."),Object(l.mdx)("pre",null,Object(l.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"  handleItemSelection(event, metaData) {\n+   event.preventDefault();\n  }\n")),Object(l.mdx)("p",null,"Terra list comes with additional helpers to manage state. In this case, we want to determine if the selection has selected or unselected the list item key in our state. So we use the utility method ",Object(l.mdx)("inlineCode",{parentName:"p"},"updatedMulitSelectedKeys"),", which returns an array of the keys following the addition or removing of the key passed. We then set this as our state."),Object(l.mdx)("pre",null,Object(l.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"  handleItemSelection(event, metaData) {\n    event.preventDefault();\n+   this.setState(state => ({ selectedKeys: Utils.updatedMultiSelectedKeys(state.selectedKeys, metaData.key) }));\n  }\n")),Object(l.mdx)("p",null,"Setting state will trigger another render. So in the render method we need generate our list items with the updated ",Object(l.mdx)("inlineCode",{parentName:"p"},"isSelected")," and ",Object(l.mdx)("inlineCode",{parentName:"p"},"isSelectable")," props. Each item needs a unique key, not necessarily associated to our own key, but it works as well. The list renders flat, so keys need to be unique even if they are placed within sections.\n",Object(l.mdx)("a",b({parentName:"p"},{href:"https://reactjs.org/docs/lists-and-keys.html"}),"React List & Key Documentation")),Object(l.mdx)("pre",null,Object(l.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n    this.handleSectionSelection = this.handleSectionSelection.bind(this)\n+   this.createListItem = this.createListItem.bind(this)\n  }\n  ...\n+  createListItem(itemData) {\n+   return (\n+     <Item\n+       key={itemData.key}\n+     >\n+       <Placeholder />\n+     </Item>\n+   );\n+ }\n")),Object(l.mdx)("p",null,"Next we need to set up our ",Object(l.mdx)("inlineCode",{parentName:"p"},"metaData")," object with our key value, and attach the ",Object(l.mdx)("inlineCode",{parentName:"p"},"onSelect")," to our handler."),Object(l.mdx)("pre",null,Object(l.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n+       metaData={{ key: itemData.key }}\n+       onSelect={this.handleItemSelection}\n      >\n        <Placeholder />\n      </Item>\n    );\n  }\n")),Object(l.mdx)("p",null,"For multi-select lists we need to set selectability based upon whether or not we have reached our max selection count.  Terra List provides a helper for this, namely ",Object(l.mdx)("inlineCode",{parentName:"p"},"shouldBeMultiSelectable"),", by providing our count, the currently selected key, and the key of the associated item."),Object(l.mdx)("pre",null,Object(l.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n+       isSelectable={Utils.shouldBeMultiSelectable(maxSectionCount, this.state.selectedKeys, itemData.key)}\n        metaData={{ key: itemData.key }}\n        onSelect={this.handleItemSelection}\n      >\n        <Placeholder />\n      </Item>\n    );\n  }\n")),Object(l.mdx)("p",null,"Finally we need to check if the item is selected. As we support IE10 & 11, we cannot use ",Object(l.mdx)("inlineCode",{parentName:"p"},"contains"),", so we use ",Object(l.mdx)("inlineCode",{parentName:"p"},"indexOf")," to determine if the key is present in our state array."),Object(l.mdx)("pre",null,Object(l.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n        isSelectable={Utils.shouldBeMultiSelectable(maxSectionCount, this.state.selectedKeys, itemData.key)}\n+       isSelected={this.state.selectedKeys.indexOf(itemData.key) >= 0}\n        metaData={{ key: itemData.key }}\n        onSelect={this.handleItemSelection}\n      >\n        <Placeholder />\n      </Item>\n    );\n  }\n")),Object(l.mdx)("p",null,"Then we can implement a method to loop through our data and create the list item with our methods and call it from our render method. Making special note to assign the aria role of ",Object(l.mdx)("inlineCode",{parentName:"p"},'"listbox"')," and a string to ",Object(l.mdx)("inlineCode",{parentName:"p"},"aria-label")," for the list, as it is required for accessibility with selectable list options. In addition, we need to assign the aria role for multiple selections, ",Object(l.mdx)("inlineCode",{parentName:"p"},"aria-multiselectable"),"."),Object(l.mdx)("pre",null,Object(l.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),'class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n    this.handleItemSelection = this.handleItemSelection.bind(this)\n    this.createListItem = this.createListItem.bind(this)\n+   this.createListItems = this.createListItems.bind(this)\n  }\n  ...\n+ createListItems(data) {\n+   return data.map(childItem => this.createListItem(childItem));\n+ }\n\n  render() {\n    return (\n+     <List\n+       dividerStyle="standard"\n+       role="listbox"\n+       aria-multiselectable\n+       aria-label="MultiSelectList-label"\n+     >\n+       {this.createListItems(mockData)}\n+     </List>\n+   );\n+ }\n')),Object(l.mdx)("p",null,"  Using these steps we get the following example."),Object(l.mdx)("h2",{id:"examples"},"Examples"),Object(l.mdx)(y,{mdxType:"MultiSelectList"}))}g.isMDXComponent=!0},862:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var o=r?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}n.default=e,t&&t.set(e,n);return n}(n(0)),l=m(n(3)),o=m(n(5)),i=n(112),s=m(n(866)),c=m(n(192)),u=n(21),d=m(n(867));function m(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var y=o.default.bind(d.default),b={example:l.default.element,exampleSrc:l.default.element,exampleCssSrc:l.default.element,title:l.default.string,description:l.default.node,isExpanded:l.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,o=e.description,d=e.isExpanded,m=f((0,r.useState)(d),2),p=m[0],h=m[1],b=f((0,r.useState)(!1),2),g=b[0],O=b[1],x=r.default.useContext(i.ThemeContext),j=void 0!==a,S=function(){O(!g),p&&h(!p)},w=function(){h(!p),g&&O(!g)},k=function(e,t){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:y("template",x.className)},r.default.createElement("div",{className:y("header")},l&&r.default.createElement("h2",{className:y("title")},l)),r.default.createElement("div",{className:y("content")},o&&r.default.createElement("div",{className:y("description")},o),t),r.default.createElement("div",{className:y("footer")},n?r.default.createElement("div",{className:y("button-container")},j&&r.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":g}),onClick:S,onKeyDown:function(e){return k(e,S)},onBlur:v,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(s.default,{className:y("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(c.default,{className:y("chevron")})),r.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":p}),onClick:w,onKeyDown:function(e){return k(e,w)},onBlur:v,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(s.default,{className:y("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(c.default,{className:y("chevron")}))):null,r.default.createElement("div",null,g&&r.default.createElement("div",{className:y("css")},a),p&&r.default.createElement("div",{className:y("code")},n))))};g.propTypes=b,g.defaultProps={isExpanded:!1};var O=g;t.default=O},863:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),r=i(n(3)),l=i(n(5)),o=i(n(864));function i(e){return e&&e.__esModule?e:{default:e}}var s=l.default.bind(o.default),c={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},u=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:s("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:s("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:s("badge-version")},"v".concat(l))),i=t?a.default.createElement("a",{className:s("badge"),href:t},a.default.createElement("span",{className:s("badge-name")},"github"),a.default.createElement("span",{className:s("badge-version")},"source")):void 0;return a.default.createElement("div",{className:s("badge-container")},o,i)};u.propTypes=c;var d=u;t.default=d},864:function(e,t,n){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},866:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),r=l(n(22));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var s=i;t.default=s},867:function(e,t,n){e.exports={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___e4g6e","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___MlAIc",template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",css:"ExampleTemplate-module__css___3yyDQ",code:"ExampleTemplate-module__code____AmLF","css-toggle":"ExampleTemplate-module__css-toggle___2I9Yn","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","is-selected":"ExampleTemplate-module__is-selected___1H6Un",item:"ExampleTemplate-module__item___1N1C-",chevron:"ExampleTemplate-module__chevron___3Xlby",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},878:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),r=i(n(3)),l=i(n(5)),o=i(n(887));function i(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.default.bind(o.default),d={variant:r.default.oneOf(["light","dark"]),title:r.default.string},m=function(e){var t=e.variant,n=e.title,r=c(e,["variant","title"]),l=u(["placeholder",r.className]),o=u(["inner","is-".concat(t)]);return a.default.createElement("div",s({},r,{className:l}),a.default.createElement("div",{className:o},a.default.createElement("h2",null,n)))};m.propTypes=d,m.defaultProps={variant:"dark",title:""};var p=m;t.default=p},887:function(e,t,n){e.exports={placeholder:"Placeholder-module__placeholder___tuGWe",inner:"Placeholder-module__inner___1irlA","is-light":"Placeholder-module__is-light___3LkLU","is-dark":"Placeholder-module__is-dark___5pLAg"}},897:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),l=n(863),o=n.n(l),i=function(e){var t=e.url;return r.a.createElement(o.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-list",name:"terra-list",version:"4.37.0",url:t})}},916:function(e,t,n){e.exports={placeholder:"ListDocCommon-module__placeholder___cpXI4"}},917:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(0);var a=n(287);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o={};function i(e){var t=e.components,n=l(e,["components"]);return Object(a.mdx)("wrapper",r({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",r({parentName:"pre"},{className:"language-scss"}),":local {\n  .placeholder {\n    height: 50px;\n  }\n}\n\n")))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=81-e384e2d4cb04eae06737.js.map