!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React")):"function"==typeof define&&define.amd?define(["React"],t):"object"==typeof exports?exports["react-xmasonry"]=t(require("React")):e["react-xmasonry"]=t(e.React)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.XBlock=t.XMasonry=void 0;var o=n(3),i=r(o),a=n(2),u=r(a);t.XMasonry=i.default,t.XBlock=u.default,"undefined"!=typeof window&&(window.XMasonry=i.default,window.XBlock=u.default)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),d=r(c),p=function(e){function t(){var e,n,r,o;i(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.divElement=null,r.placed=!1,o=n,a(r,o)}return u(t,e),s(t,[{key:"componentDidUpdate",value:function(){var e=this;if(!this.placed||this.props.parent){this.placed=!0;var t=this.props.parent;(t.props.updateOnAnimationEnd||t.props.updateOnImagesLoad)&&requestAnimationFrame(function(){e.divElement&&(t.props.updateOnImagesLoad&&Array.from(e.divElement.querySelectorAll("img")).forEach(function(e){return e.addEventListener("load",t.update)}),t.props.updateOnAnimationEnd&&e.divElement.addEventListener("animationend",t.update))})}}},{key:"render",value:function(){var e=this,n=this.props,r=(n.width,n.measured,n.parent,n.style),i=o(n,["width","measured","parent","style"]);return d.default.createElement("div",l({},i,{style:l({},r,t.defaultStyle),className:this.props.measured?"xblock":"",ref:function(t){return e.divElement=t}}),this.props.children)}}]),t}(d.default.Component);p.propTypes={width:d.default.PropTypes.number},p.defaultProps={width:1,measured:!1},p.defaultStyle={position:"absolute",boxSizing:"border-box"},t.default=p},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=r(s),d=n(5),p=r(d),f=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={blocks:{},containerHeight:0,columns:1,containerWidth:0},n.container=null,n.mounted=!1,n.debouncedResize=(0,p.default)(n.updateContainerWidth.bind(n)),n.fixedHeight=0,n.containerWidth=n.state.containerWidth,n.columns=n.state.columns,n.update=(0,p.default)(n.updateInternal.bind(n,!0)),n.props.responsive&&window.addEventListener("resize",n.debouncedResize),n.updateContainerWidth(),n}return a(t,e),l(t,null,[{key:"getBestFitColumn",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=0,r=1/0,o=0;o<e.length-t+1;++o){var i=Math.max.apply(null,e.slice(o,o+t));i<r&&(r=i,n=o)}return{col:n,height:r}}}]),l(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.updateInternal()}},{key:"componentWillUnmount",value:function(){this.mounted=!1,window.removeEventListener("resize",this.debouncedResize)}},{key:"componentWillReceiveProps",value:function(e){if(e.children.length<this.props.children.length){for(var t=new Set,n={},r=0;r<e.children.length;r++)t.add(e.children[r].key);for(var o=0;o<this.props.children.length;o++)t.has(this.props.children[o].key)||(n[this.props.children[o].key]={});this.recalculatePositions(null,n)}}},{key:"componentDidUpdate",value:function(){this.updateInternal()}},{key:"getColumnsNumber",value:function(e){return Math.max(1,Math.round(e/this.props.targetBlockWidth))}},{key:"updateContainerWidth",value:function(){if(!this.mounted)return!1;var e=this.container.getBoundingClientRect().width;return e!==this.containerWidth&&(this.setState({columns:this.columns=this.getColumnsNumber(e),containerWidth:this.containerWidth=e,blocks:{}}),!0)}},{key:"measureChildren",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t={},n=0;n<this.container.children.length;n++){var r=this.container.children[n];if(r.hasAttribute("data-xkey")||e){var o=r.getBoundingClientRect(),i=o.height;t[r.getAttribute("data-key")]={height:Math.ceil(i)}}}Object.keys(t).length>0&&this.recalculatePositions(t)}},{key:"recalculatePositions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=void 0,o=Array.from({length:this.columns},function(){return 0});if(n){r={};for(var i in this.state.blocks)this.state.blocks.hasOwnProperty(i)&&!n.hasOwnProperty(i)&&(r[i]=this.state.blocks[i]);for(var a in e)e.hasOwnProperty(a)&&!n.hasOwnProperty(a)&&(r[a]=e[a])}else r=u({},this.state.blocks,e);for(var l=0;l<this.container.children.length;l++){var s=this.container.children[l],c=s.getAttribute("data-key");if(r.hasOwnProperty(c)&&(!n||!n.hasOwnProperty(c))){var d=+s.getAttribute("data-width")||1,p=t.getBestFitColumn(o,d),f=p.col,h=p.height,y=h+r[c].height;r[c].left=this.containerWidth*f/this.columns,r[c].top=h;for(var v=0;v<d;++v)o[f+v]=y}}if(this.props.center&&0===o[o.length-1]){for(var m=1;0===o[o.length-1-m];++m);var b=this.containerWidth*m/this.columns/2;for(var g in r)r.hasOwnProperty(g)&&(r[g].left+=b)}this.setState({blocks:r,containerHeight:Math.max.apply(null,o)})}},{key:"updateInternal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.updateContainerWidth()||this.measureChildren(e)}},{key:"render",value:function(){var e=this,n=0,r=0===this.containerWidth?[]:Array.prototype.slice.call(this.props.children).map(function(t){var r=e.state.blocks[t.key],o=Math.min(t.props.width,e.columns);return r||++n,r?c.default.cloneElement(t,{"data-key":t.key,"data-width":o,style:{width:Math.floor(o*e.containerWidth/e.columns),left:Math.floor(r.left),top:r.top},measured:!0,width:o,parent:e}):c.default.cloneElement(t,{"data-key":t.key,"data-width":o,"data-xkey":t.key,style:{width:Math.floor(o*e.containerWidth/e.columns),visibility:"hidden"},width:o})}),o=r.length-n>0||0===r.length?this.fixedHeight=this.state.containerHeight:this.fixedHeight;return c.default.createElement("div",{className:"xmasonry",style:u({},t.containerStyle,{height:o},this.props.style),ref:function(t){return e.container=t}},r)}}]),t}(c.default.Component);f.propTypes={center:c.default.PropTypes.bool,responsive:c.default.PropTypes.bool,targetBlockWidth:c.default.PropTypes.number,updateOnAnimationEnd:c.default.PropTypes.bool,updateOnImagesLoad:c.default.PropTypes.bool},f.defaultProps={center:!0,responsive:!0,targetBlockWidth:300,updateOnAnimationEnd:!0,updateOnImagesLoad:!0},f.containerStyle={position:"relative"},t.default=f},,function(e,t,n){"use strict";function r(e){var t=0;return function(){0===t&&(t=requestAnimationFrame(function(){t=0,e()}))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r}])});