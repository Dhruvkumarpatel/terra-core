(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1072:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=g(n(0)),r=g(n(3)),o=g(n(5)),i=g(n(8)),l=n(9),u=g(n(890)),c=g(n(142)),s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==h(e)&&"function"!=typeof e)return{default:e};var t=m();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(21)),d=g(n(987)),p=n(1004),f=g(n(1005));function m(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return m=function(){return e},e}function g(e){return e&&e.__esModule?e:{default:e}}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=O(e);if(t){var r=O(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return P(this,n)}}function P(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=o.default.bind(d.default),C={onPageChange:r.default.func.isRequired,selectedPage:r.default.number,totalCount:r.default.number,itemCountPerPage:r.default.number,intl:l.intlShape.isRequired},w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(i,e);var t,n,r,o=v(i);function i(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var n=(t=o.call(this,e)).props,a=n.selectedPage,r=n.totalCount,l=n.itemCountPerPage;return t.state={selectedPage:a&&r?a:void 0,pageSequence:a&&r?(0,p.pageSet)(a,(0,p.calculatePages)(r,l)):void 0,showReducedPaginator:!1},t.handlePageChange=t.handlePageChange.bind(x(t)),t.hasNavContext=t.hasNavContext.bind(x(t)),t.buildPageButtons=t.buildPageButtons.bind(x(t)),t.reducedPaginator=t.reducedPaginator.bind(x(t)),t.setPaginator=t.setPaginator.bind(x(t)),t}return t=i,(n=[{key:"setPaginator",value:function(e){var t="tiny"===e;this.state.showReducedPaginator!==t&&this.setState({showReducedPaginator:t})}},{key:"handlePageChange",value:function(e){var t=this;return function(n){return n.nativeEvent.keyCode!==s.KEY_RETURN&&n.nativeEvent.keyCode!==s.KEY_SPACE||n.preventDefault(),Number.isNaN(Number(e))?(t.props.onPageChange(n.currentTarget.attributes["aria-label"].value),!1):(t.props.onPageChange(e),t.setState({selectedPage:e,pageSequence:(0,p.pageSet)(e,(0,p.calculatePages)(t.props.totalCount,t.props.itemCountPerPage))}),!1)}}},{key:"buildPageButtons",value:function(e,t){var n=this.props.intl,r=this.state,o=r.pageSequence,i=r.selectedPage,l=[];return o.forEach((function(r){var o=j(["nav-link",r===i?"is-selected":null]);r>e||l.push(a.default.createElement(f.default,{ariaLabel:n.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:r}),ariaCurrent:r===i,className:o,tabIndex:r===i?"-1":"0",key:"pageButton_".concat(r),onClick:t(r),onKeyDown:t(r)},r))})),l}},{key:"hasNavContext",value:function(){return this.props.totalCount&&this.props.itemCountPerPage}},{key:"defaultPaginator",value:function(){var e=this.context,t=this.props.intl,n=(0,p.calculatePages)(this.props.totalCount,this.props.itemCountPerPage),r=this.state.selectedPage,o=1===r?1:r-1,i=r===n?n:r+1;return a.default.createElement("div",{className:j("paginator",!this.hasNavContext()&&"pageless",e.className)},this.hasNavContext()&&a.default.createElement(f.default,{ariaDisabled:1===r,ariaLabel:t.formatMessage({id:"Terra.paginator.first"}),className:j(["nav-link","left-controls",1===r&&"is-disabled"]),disabled:1===r,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},t.formatMessage({id:"Terra.paginator.first"})),a.default.createElement(f.default,{ariaDisabled:1===r,ariaLabel:t.formatMessage({id:"Terra.paginator.previous"}),className:j(["nav-link","left-controls","previous",1===r&&"is-disabled"]),disabled:1===r,onClick:this.handlePageChange(o),onKeyDown:this.handlePageChange(o)},a.default.createElement("span",{className:j("icon")}),t.formatMessage({id:"Terra.paginator.previous"})),this.hasNavContext()&&this.buildPageButtons(n,this.handlePageChange),a.default.createElement(f.default,{ariaDisabled:r===n,ariaLabel:t.formatMessage({id:"Terra.paginator.next"}),className:j(["nav-link","right-controls","next",r===n&&"is-disabled"]),disabled:r===n,onClick:this.handlePageChange(i),onKeyDown:this.handlePageChange(i)},t.formatMessage({id:"Terra.paginator.next"}),a.default.createElement("span",{className:j("icon")})),this.hasNavContext()&&a.default.createElement(f.default,{ariaDisabled:r===n,ariaLabel:t.formatMessage({id:"Terra.paginator.last"}),className:j(["nav-link","right-controls",r===n&&"is-disabled"]),disabled:r===n,onClick:this.handlePageChange(n),onKeyDown:this.handlePageChange(n)},t.formatMessage({id:"Terra.paginator.last"})))}},{key:"reducedPaginator",value:function(){var e=this.context,t=this.props.intl,n=(0,p.calculatePages)(this.props.totalCount,this.props.itemCountPerPage),r=this.state.selectedPage,o=1===r?1:r-1,i=r===n?n:r+1;return a.default.createElement("div",{className:j("paginator",!this.hasNavContext()&&"pageless",e.className),role:"navigation","aria-label":"pagination"},this.hasNavContext()&&a.default.createElement(f.default,{ariaDisabled:1===r,ariaLabel:t.formatMessage({id:"Terra.paginator.first"}),className:j(["nav-link","left-controls",1===r&&"is-disabled"]),disabled:1===r,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},t.formatMessage({id:"Terra.paginator.first"})),a.default.createElement(f.default,{ariaDisabled:1===r,ariaLabel:t.formatMessage({id:"Terra.paginator.previous"}),className:j(["nav-link","left-controls","previous","icon-only",1===r&&"is-disabled"]),disabled:1===r,onClick:this.handlePageChange(o),onKeyDown:this.handlePageChange(o)},a.default.createElement(c.default,{text:t.formatMessage({id:"Terra.paginator.previous"})}),a.default.createElement("span",{className:j("icon")})),this.hasNavContext()&&t.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:r}),a.default.createElement(f.default,{ariaDisabled:r===n,ariaLabel:t.formatMessage({id:"Terra.paginator.next"}),className:j(["nav-link","right-controls","next","icon-only",r===n&&"is-disabled"]),disabled:r===n,onClick:this.handlePageChange(i),onKeyDown:this.handlePageChange(i)},a.default.createElement(c.default,{text:t.formatMessage({id:"Terra.paginator.next"})}),a.default.createElement("span",{className:j("icon")})),this.hasNavContext()&&a.default.createElement(f.default,{ariaDisabled:r===n,ariaLabel:t.formatMessage({id:"Terra.paginator.last"}),className:j(["nav-link","right-controls",r===n&&"is-disabled"]),disabled:r===n,onClick:this.handlePageChange(n),onKeyDown:this.handlePageChange(n)},t.formatMessage({id:"Terra.paginator.last"})))}},{key:"render",value:function(){return a.default.createElement(u.default,{onChange:this.setPaginator},this.state.showReducedPaginator?this.reducedPaginator():this.defaultPaginator())}}])&&b(t.prototype,n),r&&b(t,r),i}(a.default.Component);w.propTypes=C,w.contextType=i.default;var _=(0,l.injectIntl)(w);t.default=_},1177:function(e,t,n){e.exports={"paginator-wrapper":"PaginatorExampleCommon-module__paginator-wrapper___22vdq"}},1178:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(0);var a=n(287);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={};function l(e){var t=e.components,n=o(e,["components"]);return Object(a.mdx)("wrapper",r({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",r({parentName:"pre"},{className:"language-scss"}),":local {\n  .paginator-wrapper {\n    height: 500px;\n  }\n}\n\n")))}l.isMDXComponent=!0},2138:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),r=u(n(943)),o=u(n(1072)),i=u(n(5)),l=u(n(1177));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=g(e);if(t){var r=g(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=i.default.bind(l.default),b=function(){return function(e,t){for(var n=[],r=0;r<t;r+=1)n.push(a.default.createElement("p",{key:Math.floor(Math.random()*Math.floor(1e5))},e));return n}("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. Aliquam eget maximus dui, ut rhoncus augue.",10)},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(u,e);var t,n,i,l=p(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=l.call(this,e)).state={content:b(),currentPage:1},t.changePages=t.changePages.bind(m(t)),t}return t=u,(n=[{key:"changePages",value:function(e){this.setState({currentPage:e})}},{key:"render",value:function(){return a.default.createElement("div",{className:h("paginator-wrapper")},a.default.createElement(r.default,{header:a.default.createElement("h1",null,"Page",this.state.currentPage),footer:a.default.createElement(o.default,{onPageChange:this.changePages,selectedPage:1,totalCount:450,itemCountPerPage:10})},this.state.content))}}])&&s(t.prototype,n),i&&s(t,i),u}(a.default.Component);t.default=y},2139:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),r=u(n(943)),o=u(n(1072)),i=u(n(5)),l=u(n(1177));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=g(e);if(t){var r=g(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=i.default.bind(l.default),b=function(){return function(e,t){for(var n=[],r=0;r<t;r+=1)n.push(a.default.createElement("p",{key:Math.floor(Math.random()*Math.floor(1e5))},e));return n}("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. Aliquam eget maximus dui, ut rhoncus augue.",10)},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(u,e);var t,n,i,l=p(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=l.call(this,e)).state={content:a.default.createElement("h2",null,"Welcome!"),currentPage:1},t.changePages=t.changePages.bind(m(t)),t}return t=u,(n=[{key:"changePages",value:function(e){var t="next"===e?this.state.currentPage+1:this.state.currentPage-1;t>=5?this.setState({content:a.default.createElement("h2",null,"No more pages..."),currentPage:5}):t<=1?this.setState({content:a.default.createElement("h2",null,"Welcome!"),currentPage:1}):this.setState({content:b(),currentPage:t})}},{key:"render",value:function(){return a.default.createElement("div",{className:h("paginator-wrapper")},a.default.createElement(r.default,{header:a.default.createElement("h1",null,"Page",this.state.currentPage),footer:a.default.createElement(o.default,{onPageChange:this.changePages})},this.state.content))}}])&&s(t.prototype,n),i&&s(t,i),u}(a.default.Component);t.default=y},2976:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var a=n(0),r=n.n(a),o=n(287),i=n(972),l=n(2138),u=n.n(l);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d={};function p(e){var t=e.components,n=s(e,["components"]);return Object(o.mdx)("wrapper",c({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Dialog from 'terra-dialog';\nimport Paginator from 'terra-paginator';\nimport classNames from 'classnames/bind';\nimport styles from './PaginatorExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst totalCount = 450;\n\nconst fillArray = (value, len) => {\n  const arr = [];\n  for (let i = 0; i < len; i += 1) {\n    arr.push(<p key={Math.floor(Math.random() * Math.floor(100000))}>{value}</p>);\n  }\n  return arr;\n};\n\nconst buildPage = () => {\n  let fullContent = [];\n  const content = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. '\n    + 'Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. '\n    + 'Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. '\n    + 'Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. '\n    + 'Aliquam eget maximus dui, ut rhoncus augue.');\n\n  fullContent = fillArray(content, 10);\n\n  return (\n    fullContent\n  );\n};\n\nclass PaginatorExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      content: buildPage(),\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(index) {\n    this.setState({ currentPage: index });\n  }\n\n  render() {\n    return (\n      <div className={cx('paginator-wrapper')}>\n        <Dialog\n          header={(\n            <h1>\n              Page\n              {this.state.currentPage}\n            </h1>\n)}\n          footer={<Paginator onPageChange={this.changePages} selectedPage={1} totalCount={totalCount} itemCountPerPage={10} />}\n        >\n          {this.state.content}\n        </Dialog>\n      </div>\n    );\n  }\n}\n\nexport default PaginatorExample;\n\n")))}p.isMDXComponent=!0;var f=n(862),m=n.n(f),g=n(1178),h=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(m.a,{title:t||"Paginator Example",description:n,example:r.a.createElement(u.a,null),exampleCssSrc:r.a.createElement(g.a,null),exampleSrc:r.a.createElement(p,null),isExpanded:a})},b=n(2139),y=n.n(b);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var x={};function O(e){var t=e.components,n=P(e,["components"]);return Object(o.mdx)("wrapper",v({},x,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",v({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Dialog from 'terra-dialog';\nimport Paginator from 'terra-paginator';\nimport classNames from 'classnames/bind';\nimport styles from './PaginatorExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\nconst maxPages = 5;\n\nconst fillArray = (value, len) => {\n  const arr = [];\n  for (let i = 0; i < len; i += 1) {\n    arr.push(<p key={Math.floor(Math.random() * Math.floor(100000))}>{value}</p>);\n  }\n  return arr;\n};\n\nconst buildPage = () => {\n  let fullContent = [];\n  const content = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. '\n    + 'Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. '\n    + 'Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. '\n    + 'Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. '\n    + 'Aliquam eget maximus dui, ut rhoncus augue.');\n\n  fullContent = fillArray(content, 10);\n\n  return (\n    fullContent\n  );\n};\n\nclass PaginatorNoPagesExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      content: <h2>Welcome!</h2>,\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(direction) {\n    const index = direction === 'next' ? this.state.currentPage + 1 : this.state.currentPage - 1;\n\n    if (index >= maxPages) {\n      this.setState({ content: <h2>No more pages...</h2>, currentPage: maxPages });\n    } else if (index <= 1) {\n      this.setState({ content: <h2>Welcome!</h2>, currentPage: 1 });\n    } else {\n      this.setState({ content: buildPage(), currentPage: index });\n    }\n  }\n\n  render() {\n    return (\n      <div className={cx('paginator-wrapper')}>\n        <Dialog\n          header={(\n            <h1>\n              Page\n              {this.state.currentPage}\n            </h1>\n)}\n          footer={<Paginator onPageChange={this.changePages} />}\n        >\n          {this.state.content}\n        </Dialog>\n      </div>\n    );\n  }\n}\n\nexport default PaginatorNoPagesExample;\n\n")))}O.isMDXComponent=!0;var j=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(m.a,{title:t||"Paginator No Pages Example",description:n,example:r.a.createElement(y.a,null),exampleCssSrc:r.a.createElement(g.a,null),exampleSrc:r.a.createElement(O,null),isExpanded:a})},C=n(865),w=n.n(C);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var E=function(){return Object(o.mdx)(w.a,{rows:[{name:"onPageChange",type:function(){var e={};function t(t){var n=t.components,a=N(t,["components"]);return Object(o.mdx)("wrapper",_({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=N(t,["components"]);return Object(o.mdx)("wrapper",_({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function to be executed when a navigation element is selected."))}return t.isMDXComponent=!0,t({})}},{name:"selectedPage",type:function(){var e={};function t(t){var n=t.components,a=N(t,["components"]);return Object(o.mdx)("wrapper",_({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=N(t,["components"]);return Object(o.mdx)("wrapper",_({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The active/selected page. Used to set the default selected page or maintain selection across renders.\nRequired when using totalCount and itemCountPerPage."))}return t.isMDXComponent=!0,t({})}},{name:"totalCount",type:function(){var e={};function t(t){var n=t.components,a=N(t,["components"]);return Object(o.mdx)("wrapper",_({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=N(t,["components"]);return Object(o.mdx)("wrapper",_({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Total number of all items being paginated.\nRequired when using itemCountPerPage and selectedPage."))}return t.isMDXComponent=!0,t({})}},{name:"itemCountPerPage",type:function(){var e={};function t(t){var n=t.components,a=N(t,["components"]);return Object(o.mdx)("wrapper",_({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=N(t,["components"]);return Object(o.mdx)("wrapper",_({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Total number of items per page.\nRequired when using selectedPage and totalCount."))}return t.isMDXComponent=!0,t({})}}]})};function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var S={};function k(e){var t=e.components,n=D(e,["components"]);return Object(o.mdx)("wrapper",M({},S,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(i.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-paginator"},"Terra Paginator"),Object(o.mdx)("p",null,"Standard paginator to be used for data sets of known and unknown size. Provides first, last, previous, next, and paged functionality."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",M({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-paginator"))))),Object(o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",M({parentName:"tr"},{align:null}),"Peer Dependency"),Object(o.mdx)("th",M({parentName:"tr"},{align:null}),"Version"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",M({parentName:"tr"},{align:null}),"react"),Object(o.mdx)("td",M({parentName:"tr"},{align:null}),"^16.8.5")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",M({parentName:"tr"},{align:null}),"react-dom"),Object(o.mdx)("td",M({parentName:"tr"},{align:null}),"^16.8.5")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",M({parentName:"tr"},{align:null}),"react-intl"),Object(o.mdx)("td",M({parentName:"tr"},{align:null}),"^2.8.0")))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",M({parentName:"pre"},{className:"language-jsx"}),"import Paginator from 'terra-paginator';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",M({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",M({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",M({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(h,{mdxType:"PaginatorExample"}),Object(o.mdx)(j,{title:"Paginator Example Without Pages",mdxType:"PaginatorNoPagesExample"}),Object(o.mdx)("h2",{id:"paginator-props"},"Paginator Props"),Object(o.mdx)(E,{mdxType:"PaginatorPropsTable"}))}k.isMDXComponent=!0},866:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(22));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l=function(e){var t=i({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=l;t.default=u},943:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=p(n(0)),r=p(n(3)),o=p(n(11)),i=p(n(5)),l=p(n(8)),u=p(n(53)),c=p(n(54)),s=n(9),d=p(n(965));function p(e){return e&&e.__esModule?e:{default:e}}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=i.default.bind(d.default),h={children:r.default.node,footer:r.default.node.isRequired,header:r.default.node.isRequired,onClose:r.default.func},b=function(e){var t=e.children,n=e.footer,r=e.header,i=e.onClose,d=m(e,["children","footer","header","onClose"]),p=a.default.useContext(l.default),h=(0,o.default)(g("dialog",p.className),d.className),b=i?a.default.createElement("div",{className:g("dialog-header-close")},a.default.createElement(s.FormattedMessage,{id:"Terra.dialog.close"},(function(e){return a.default.createElement(u.default,{variant:"utility",text:e,onClick:i,isIconOnly:!0,icon:a.default.createElement("span",{className:g("close-icon")})})}))):null,y=a.default.createElement("div",{className:g("dialog-header")},a.default.createElement("div",{className:g("dialog-header-title")},r),b);return a.default.createElement("div",f({},d,{className:h}),a.default.createElement(c.default,{fill:!0,header:y,footer:a.default.createElement("div",{className:g("dialog-footer")},n)},a.default.createElement("div",{className:g("dialog-body")},t)))};b.propTypes=h,b.defaultProps={onClose:null,children:null};var y=b;t.default=y},965:function(e,t,n){e.exports={"clinical-lowlight-theme":"Dialog-module__clinical-lowlight-theme___15vVt","orion-fusion-theme":"Dialog-module__orion-fusion-theme___3T_AN",dialog:"Dialog-module__dialog___2m12i","dialog-header":"Dialog-module__dialog-header___tH-_K","dialog-header-title":"Dialog-module__dialog-header-title___2QmqU","dialog-header-close":"Dialog-module__dialog-header-close___1xiMB","close-icon":"Dialog-module__close-icon___2Q45c","dialog-body":"Dialog-module__dialog-body___B1Nle","dialog-footer":"Dialog-module__dialog-footer___noxrB"}},972:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),o=n(863),i=n.n(o),l=function(e){var t=e.url;return r.a.createElement(i.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-paginator",name:"terra-paginator",version:"2.59.0",url:t})}}}]);
//# sourceMappingURL=106-3fb522d18423ae33c3d1.js.map