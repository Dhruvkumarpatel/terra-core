(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{2828:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n(0)),o=a(n(903));function a(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return c(this,n)}}function c(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ante, porta sit amet sem vitae, pellentesque pharetra ex. Etiam odio purus, maximus eget mauris in, pulvinar euismod neque. Curabitur eu vulputate leo. Etiam tincidunt lectus ut metus interdum, sit amet porttitor leo ornare. Sed tincidunt rutrum odio, dignissim rhoncus nulla finibus et. Mauris mollis posuere dolor dignissim vulputate. Sed accumsan dignissim mi id pulvinar. Vivamus sapien nibh, dignissim id semper non, consectetur et felis. Duis mattis odio tortor, eu mattis lectus lobortis mattis. Ut sit amet risus pellentesque, imperdiet mi eu, sodales massa. Aenean quis lacus rutrum, lobortis urna vel, congue est. Vivamus viverra efficitur viverra. Integer sit amet metus dolor. Nullam imperdiet vehicula tincidunt. Duis consequat congue magna, eu imperdiet magna venenatis et. Quisque eget vulputate massa. Donec vel diam vel nulla gravida blandit sit amet sed quam. Donec sed feugiat magna, eget consequat mi. Ut quis arcu non libero tempus semper nec in sem. Nunc in quam leo. Donec risus eros, dapibus ut nisi vitae, ullamcorper faucibus nisl. Suspendisse finibus urna vel mi sodales, a pharetra nisl convallis. Phasellus sed turpis non ipsum scelerisque pellentesque at cursus lectus. Nunc ut velit nec odio ultrices sodales.",p=d.substring(0,280),m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(c,t);var e,n,a,r=l(c);function c(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(e=r.call(this,t)).state={isOpen:!1},e.toggleShowHide=e.toggleShowHide.bind(f(e)),e}return e=c,(n=[{key:"toggleShowHide",value:function(){this.setState((function(t){return{isOpen:!t.isOpen}}))}},{key:"render",value:function(){return i.default.createElement(o.default,{preview:p,isOpen:this.state.isOpen,onChange:this.toggleShowHide,buttonText:"Show Section Label that is way too long and has to wrap to multiple lines Show Section Label that is way too long and has to wrap to multiple lines"},d)}}])&&s(e.prototype,n),a&&s(e,a),c}(i.default.Component);e.default=m},872:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n(0)),o=u(n(3)),a=u(n(5)),r=u(n(873)),s=u(n(874));function u(t){return t&&t.__esModule?t:{default:t}}function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function c(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var f=a.default.bind(s.default),h={children:o.default.node.isRequired,isAnimated:o.default.bool,isOpen:o.default.bool},d=function(t){var e,n=t.isAnimated,o=t.isOpen,a=t.children,s=c(t,["isAnimated","isOpen","children"]),u=o?"auto":0;return e=n?i.default.createElement(r.default,{duration:250,height:u},a):o&&a,i.default.createElement("div",l({},s,{className:f("toggle",s.className),"aria-hidden":!o}),e)};d.propTypes=h,d.defaultProps={isAnimated:!1,isOpen:!1};var p=d;e.default=p},873:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=l(n(0)),s=l(n(3)),u=l(n(11));function l(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"},h=["animateOpacity","animationStateClasses","applyInlineTransitions","children","contentClassName","delay","duration","easing","height","onAnimationEnd","onAnimationStart"];function d(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(!n.length)return t;for(var o={},a=Object.keys(t),r=0;r<a.length;r++){var s=a[r];-1===n.indexOf(s)&&(o[s]=t[s])}return o}function p(t){t.forEach((function(t){return cancelAnimationFrame(t)}))}function m(t){return!isNaN(parseFloat(t))&&isFinite(t)}function y(t){return"string"==typeof t&&t.search("%")===t.length-1&&m(t.substr(0,t.length-1))}function g(t,e){t&&"function"==typeof t&&t(e)}var b=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));n.animationFrameIDs=[];var i="auto",a="visible";m(t.height)?(i=t.height<0||"0"===t.height?0:t.height,a="hidden"):y(t.height)&&(i="0%"===t.height?0:t.height,a="hidden"),n.animationStateClasses=o({},f,t.animationStateClasses);var r=n.getStaticStateClasses(i);return n.state={animationStateClasses:r,height:i,overflow:a,shouldUseTransitions:!1},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),a(e,[{key:"componentDidMount",value:function(){var t=this.state.height;this.contentElement&&this.contentElement.style&&this.hideContent(t)}},{key:"componentDidUpdate",value:function(t,e){var n,i,o=this,a=this.props,r=a.delay,s=a.duration,l=a.height,f=a.onAnimationEnd,h=a.onAnimationStart;if(this.contentElement&&l!==t.height){var d;this.showContent(e.height),this.contentElement.style.overflow="hidden";var b=this.contentElement.offsetHeight;this.contentElement.style.overflow="";var v=s+r,_=null,w={height:null,overflow:"hidden"},O="auto"===e.height;m(l)?(_=l<0||"0"===l?0:l,w.height=_):y(l)?(_="0%"===l?0:l,w.height=_):(_=b,w.height="auto",w.overflow=null),O&&(w.height=_,_=b);var S=(0,u.default)((c(d={},this.animationStateClasses.animating,!0),c(d,this.animationStateClasses.animatingUp,"auto"===t.height||l<t.height),c(d,this.animationStateClasses.animatingDown,"auto"===l||l>t.height),c(d,this.animationStateClasses.animatingToHeightZero,0===w.height),c(d,this.animationStateClasses.animatingToHeightAuto,"auto"===w.height),c(d,this.animationStateClasses.animatingToHeightSpecific,w.height>0),d)),C=this.getStaticStateClasses(w.height);this.setState({animationStateClasses:S,height:_,overflow:"hidden",shouldUseTransitions:!O}),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),O?(w.shouldUseTransitions=!0,p(this.animationFrameIDs),this.animationFrameIDs=(n=function(){o.setState(w),g(h,{newHeight:w.height})},(i=[])[0]=requestAnimationFrame((function(){i[1]=requestAnimationFrame((function(){n()}))})),i),this.animationClassesTimeoutID=setTimeout((function(){o.setState({animationStateClasses:C,shouldUseTransitions:!1}),o.hideContent(w.height),g(f,{newHeight:w.height})}),v)):(g(h,{newHeight:_}),this.timeoutID=setTimeout((function(){w.animationStateClasses=C,w.shouldUseTransitions=!1,o.setState(w),"auto"!==l&&o.hideContent(_),g(f,{newHeight:_})}),v))}}},{key:"componentWillUnmount",value:function(){p(this.animationFrameIDs),clearTimeout(this.timeoutID),clearTimeout(this.animationClassesTimeoutID),this.timeoutID=null,this.animationClassesTimeoutID=null,this.animationStateClasses=null}},{key:"showContent",value:function(t){0===t&&(this.contentElement.style.display="")}},{key:"hideContent",value:function(t){0===t&&(this.contentElement.style.display="none")}},{key:"getStaticStateClasses",value:function(t){var e;return(0,u.default)((c(e={},this.animationStateClasses.static,!0),c(e,this.animationStateClasses.staticHeightZero,0===t),c(e,this.animationStateClasses.staticHeightSpecific,t>0),c(e,this.animationStateClasses.staticHeightAuto,"auto"===t),e))}},{key:"render",value:function(){var t,e=this,n=this.props,i=n.animateOpacity,a=n.applyInlineTransitions,s=n.children,l=n.className,f=n.contentClassName,p=n.delay,m=n.duration,y=n.easing,g=n.id,b=n.style,v=this.state,_=v.height,w=v.overflow,O=v.animationStateClasses,S=v.shouldUseTransitions,C=o({},b,{height:_,overflow:w||b.overflow});S&&a&&(C.transition="height "+m+"ms "+y+" "+p+"ms",b.transition&&(C.transition=b.transition+", "+C.transition),C.WebkitTransition=C.transition);var j={};i&&(j.transition="opacity "+m+"ms "+y+" "+p+"ms",j.WebkitTransition=j.transition,0===_&&(j.opacity=0));var E=(0,u.default)((c(t={},O,!0),c(t,l,l),t)),T="undefined"!=typeof this.props["aria-hidden"]?this.props["aria-hidden"]:0===_;return r.default.createElement("div",o({},d.apply(void 0,[this.props].concat(h)),{"aria-hidden":T,className:E,id:g,style:C}),r.default.createElement("div",{className:f,style:j,ref:function(t){return e.contentElement=t}},s))}}]),e}(r.default.Component);b.propTypes={"aria-hidden":s.default.bool,animateOpacity:s.default.bool,animationStateClasses:s.default.object,applyInlineTransitions:s.default.bool,children:s.default.any.isRequired,className:s.default.string,contentClassName:s.default.string,delay:s.default.number,duration:s.default.number,easing:s.default.string,height:function(t,e,n){var o=t[e];return"number"==typeof o&&o>=0||y(o)||"auto"===o?null:new TypeError('value "'+o+'" of type "'+("undefined"==typeof o?"undefined":i(o))+'" is invalid type for '+e+" in "+n+'. It needs to be a positive number, string "auto" or percentage string (e.g. "15%").')},id:s.default.string,onAnimationEnd:s.default.func,onAnimationStart:s.default.func,style:s.default.object},b.defaultProps={animateOpacity:!1,animationStateClasses:f,applyInlineTransitions:!0,duration:250,delay:0,easing:"ease",style:{}},e.default=b},874:function(t,e,n){t.exports={toggle:"Toggle-module__toggle___3Y29L"}},903:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=c(n(0)),o=c(n(3)),a=c(n(872)),r=n(9),s=c(n(5)),u=c(n(919)),l=c(n(920));function c(t){return t&&t.__esModule?t:{default:t}}function f(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var h=s.default.bind(u.default),d={children:o.default.node.isRequired,intl:r.intlShape.isRequired,onChange:o.default.func.isRequired,buttonAlign:o.default.string,buttonText:o.default.string,isOpen:o.default.bool,preview:o.default.node},p={buttonAlign:"start",isOpen:!1,preview:void 0},m=function(t){var e=t.buttonAlign,n=t.buttonText,o=t.children,r=t.onChange,s=t.preview,u=t.intl,c=t.isOpen,d=f(t,["buttonAlign","buttonText","children","onChange","preview","intl","isOpen"]),p=h(["show-hide","button",e,d.className]),m="";return n||(m=c?u.formatMessage({id:"Terra.showhide.hide"}):u.formatMessage({id:"Terra.showhide.showmore"})),i.default.createElement("div",d,!c&&s,i.default.createElement(a.default,{isOpen:c},o),i.default.createElement("div",{className:h("show-hide")},i.default.createElement(l.default,{"aria-expanded":c,text:n||m,onClick:r,className:p})))};m.propTypes=d,m.defaultProps=p;var y=(0,r.injectIntl)(m);e.default=y},919:function(t,e,n){t.exports={"show-hide":"ShowHide-module__show-hide___1gRh1",start:"ShowHide-module__start___2xANP",center:"ShowHide-module__center___2PZhE",end:"ShowHide-module__end___1KB6q"}},920:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=f(n(0)),o=f(n(3)),a=f(n(11)),r=f(n(5)),s=f(n(8)),u=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==h(t)&&"function"!=typeof t)return{default:t};var e=c();if(e&&e.has(t))return e.get(t);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var a=i?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n(21)),l=f(n(921));function c(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return c=function(){return t},t}function f(t){return t&&t.__esModule?t:{default:t}}function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function p(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function m(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=_(t);if(e){var o=_(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return b(this,n)}}function b(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?v(t):e}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var w=r.default.bind(l.default),O={onClick:o.default.func,onBlur:o.default.func,onFocus:o.default.func,onKeyDown:o.default.func,onKeyUp:o.default.func,refCallback:o.default.func,text:o.default.string.isRequired},S={refCallback:void 0},C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(s,t);var e,n,o,r=g(s);function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=r.call(this,t)).state={active:!1,focused:!1},e.handleKeyDown=e.handleKeyDown.bind(v(e)),e.handleKeyUp=e.handleKeyUp.bind(v(e)),e.handleOnBlur=e.handleOnBlur.bind(v(e)),e}return e=s,(n=[{key:"handleOnBlur",value:function(t){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(t)}},{key:"handleKeyDown",value:function(t){t.nativeEvent.keyCode===u.KEY_SPACE?(this.setState({active:!0}),this.setState({focused:!0})):t.nativeEvent.keyCode===u.KEY_RETURN&&this.setState({focused:!0}),this.props.onKeyDown&&this.props.onKeyDown(t)}},{key:"handleKeyUp",value:function(t){t.nativeEvent.keyCode===u.KEY_SPACE&&this.setState({active:!1}),t.nativeEvent.keyCode===u.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(t)}},{key:"render",value:function(){var t=this.props,e=t.text,n=t.onClick,o=(t.onBlur,t.onFocus),r=(t.onKeyDown,t.onKeyUp,t.refCallback),s=p(t,["text","onClick","onBlur","onFocus","onKeyDown","onKeyUp","refCallback"]),u=this.context,l=(0,a.default)(w(["button",{"is-active":this.state.active},{"is-focused":this.state.focused},u.className]),s.className);return i.default.createElement("button",d({},s,{className:l,type:"button",onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:n,onFocus:o,ref:r}),i.default.createElement("span",{className:w("inner")},i.default.createElement("span",{className:w("text")},e),i.default.createElement("span",{className:w("icon-holder")},i.default.createElement("span",{className:w("icon")}))))}}])&&m(e.prototype,n),o&&m(e,o),s}(i.default.Component);C.propTypes=O,C.defaultProps=S,C.contextType=s.default;var j=C;e.default=j},921:function(t,e,n){t.exports={"clinical-lowlight-theme":"_ShowHideButton-module__clinical-lowlight-theme___2agAs","orion-fusion-theme":"_ShowHideButton-module__orion-fusion-theme___1OnJ1",button:"_ShowHideButton-module__button___2fLNi",icon:"_ShowHideButton-module__icon___1pwkV","is-focused":"_ShowHideButton-module__is-focused___1zXGX","is-hovered":"_ShowHideButton-module__is-hovered___LmXOs",inner:"_ShowHideButton-module__inner___2vpG7",text:"_ShowHideButton-module__text___1gaph","icon-holder":"_ShowHideButton-module__icon-holder___2RxYy"}}}]);
//# sourceMappingURL=131-7bd698016b07aced3fca.js.map