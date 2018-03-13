!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-concise-slider",[],e):"object"==typeof exports?exports["vue-concise-slider"]=e():t["vue-concise-slider"]=e()}(this,function(){return function(t){function e(a){if(i[a])return i[a].exports;var s=i[a]={exports:{},id:a,loaded:!1};return t[a].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(7),n=a(s);e.default=n.default},,,,function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},s=0;s<this.length;s++){var n=this[s][0];"number"==typeof n&&(a[n]=!0)}for(s=0;s<e.length;s++){var r=e[s];"number"==typeof r[0]&&a[r[0]]||(i&&!r[2]?r[2]=i:i&&(r[2]="("+r[2]+") and ("+i+")"),t.push(r))}},t}},function(t,e,i){function a(t,e){for(var i=0;i<t.length;i++){var a=t[i],s=c[a.id];if(s){s.refs++;for(var n=0;n<s.parts.length;n++)s.parts[n](a.parts[n]);for(;n<a.parts.length;n++)s.parts.push(d(a.parts[n],e))}else{for(var r=[],n=0;n<a.parts.length;n++)r.push(d(a.parts[n],e));c[a.id]={id:a.id,refs:1,parts:r}}}}function s(t){for(var e=[],i={},a=0;a<t.length;a++){var s=t[a],n=s[0],r=s[1],o=s[2],d=s[3],l={css:r,media:o,sourceMap:d};i[n]?i[n].parts.push(l):e.push(i[n]={id:n,parts:[l]})}return e}function n(t,e){var i=m(),a=v[v.length-1];if("top"===t.insertAt)a?a.nextSibling?i.insertBefore(e,a.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),v.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function r(t){t.parentNode.removeChild(t);var e=v.indexOf(t);e>=0&&v.splice(e,1)}function o(t){var e=document.createElement("style");return e.type="text/css",n(t,e),e}function d(t,e){var i,a,s;if(e.singleton){var n=g++;i=f||(f=o(e)),a=l.bind(null,i,n,!1),s=l.bind(null,i,n,!0)}else i=o(e),a=p.bind(null,i),s=function(){r(i)};return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else s()}}function l(t,e,i,a){var s=i?"":a.css;if(t.styleSheet)t.styleSheet.cssText=y(e,s);else{var n=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(n,r[e]):t.appendChild(n)}}function p(t,e){var i=e.css,a=e.media,s=e.sourceMap;if(a&&t.setAttribute("media",a),s&&(i+="\n/*# sourceURL="+s.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var c={},h=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},u=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),f=null,g=0,v=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=u()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var i=s(t);return a(i,e),function(t){for(var n=[],r=0;r<i.length;r++){var o=i[r],d=c[o.id];d.refs--,n.push(d)}if(t){var l=s(t);a(l,e)}for(var r=0;r<n.length;r++){var d=n[r];if(0===d.refs){for(var p=0;p<d.parts.length;p++)d.parts[p]();delete c[d.id]}}}};var y=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},,function(t,e,i){var a,s,n={};i(8),a=i(10),s=i(24),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;s&&(r.template=s),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},function(t,e,i){var a=i(9);"string"==typeof a&&(a=[[t.id,a,""]]);i(5)(a,{});a.locals&&(t.exports=a.locals)},function(t,e,i){e=t.exports=i(4)(),e.push([t.id,".slider-container{margin:0 auto;overflow:hidden;z-index:1;height:100%;width:100%;position:relative;white-space:nowrap}.slider-center-center{margin:auto;z-index:1;position:absolute;top:0;left:0;right:0;bottom:0}.slider-touch{height:100%}.slider-wrapper{box-sizing:content-box;display:-ms-flexbox;display:flex;height:100%;position:relative;transition-property:transform;width:100%;z-index:1;-ms-flex-align:center;align-items:center}.swiper-container-vertical .slider-wrapper{-moz-flex-direction:column;-ms-flex-direction:column;-o-flex-direction:column;flex-direction:column}.slider-item{-ms-flex-negative:0;flex-shrink:0;height:100%;position:relative;width:100%;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;font-size:40px;-ms-flex-pack:center;justify-content:center;text-align:center;color:#fff;background-position:50%!important;background-size:cover!important}.slider-pagination{position:absolute;text-align:center;transform:translateZ(0);z-index:10}.slider-pagination-bullets{bottom:10px;left:0;width:100%}.slider-pagination-bullet{background:#000 none repeat scroll 0 0;border-radius:100%;display:inline-block;height:8px;opacity:.2;width:8px;cursor:pointer;margin:0 5px}.swiper-container-vertical .slider-pagination-bullets{bottom:auto;left:auto;width:auto;right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-container-vertical .slider-pagination-bullet{display:block;margin:5px 0}.slider-pagination-bullet-active{background:#fff none repeat scroll 0 0;opacity:1}.slider-loading{position:absolute;top:50%;transform:translateY(-50%);z-index:999}.slider-button-next,.slider-button-prev{background-position:50%;background-repeat:no-repeat;background-size:27px 44px;cursor:pointer;height:44px;margin-top:-22px;position:absolute;top:50%;width:27px;z-index:10}.slider-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23fff'/%3E%3C/svg%3E\");left:10px;right:auto}.slider-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23fff'/%3E%3C/svg%3E\");left:auto;right:10px}",""])},function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(11),n=a(s),r=i(12),o=a(r),d=i(15),l=a(d),p=i(18),c=a(p),h=i(21),u=a(h);e.default={props:["sliderinit","pages"],data:function(){return{basicdata:{poswidth:"0",posheight:"0",start:{},end:{},currentPage:this.sliderinit.currentPage||0,direction:""},temporaryData:{prefixes:(0,n.default)(),transitionEnding:!1,setIntervalid:"",effect:this.sliderinit.effect||"slide",tracking:!1,thresholdDistance:this.sliderinit.thresholdDistance||100,thresholdTime:this.sliderinit.thresholdTime||500,animation:!1,loading:!1,containerClass:{"swiper-container-vertical":!1},pageInit:!1,widthScalingRatio:this.sliderinit.widthScalingRatio||.8,heightScalingRatio:this.sliderinit.heightScalingRatio||.8,deviation:this.sliderinit.deviation||200,currentPage:this.sliderinit.currentPage||0,pageWidth:0,pageHeight:0}}},computed:{styleobj:function(){var t={};return t.transform="translate3D("+this.basicdata.poswidth+","+this.basicdata.posheight+",0)",t[this.temporaryData.prefixes.transition+"TimingFunction"]=this.sliderinit.timingFunction||"ease",t[this.temporaryData.prefixes.transition+"Duration"]=(this.temporaryData.animation?this.sliderinit.duration||300:0)+"ms","fade"===this.temporaryData.effect||"coverflow"===this.temporaryData.effect?{}:t},pagenums:function(){var t=this;return this.pages.length&&!this.temporaryData.pageInit&&(this.temporaryData.pageInit=!0,this.$nextTick(function(){t.slide(t.basicdata.currentPage,"animationnone")})),this.pages.length},currentView:function(){return"slide"===this.temporaryData.effect?this.sliderinit.loop?"basicLoop":"basic":"fade"===this.temporaryData.effect?this.sliderinit.loop?"fadeLoop":"fade":"coverflow"===this.temporaryData.effect?(this.sliderinit.loop,"coverflow"):void 0},currentWidth:{get:function(){if(!this.pages.length||"fade"===this.temporaryData.effect||"coverflow"===this.temporaryData.effect)return 0;var t=void 0,e=this.basicdata.currentPage,i=this.temporaryData.pageWidth;this.sliderinit.loop&&(e=this.sliderinit.infinite?this.basicdata.currentPage+(this.sliderinit.infinite<=this.pagenums?this.sliderinit.infinite:this.pagenums):this.basicdata.currentPage+1),"coverflow"===this.sliderinit.effect&&(e-=1);for(var a in this.$el.children)/slider-touch/gi.test(this.$el.children[a].className)&&(t=this.$el.children[a]);var s=t.children[0].children,n=s[e].offsetLeft;return this.sliderinit.loop&&(n=s[e].offsetLeft),n+i-i}},currentHeight:function(){if(!this.pages.length||"fade"===this.temporaryData.effect)return 0;var t=0,e=void 0,i=this.basicdata.currentPage-1,a=this.temporaryData.pageWidth;this.sliderinit.loop&&(i=this.sliderinit.infinite?this.basicdata.currentPage+(this.sliderinit.infinite<=this.pages.length?this.sliderinit.infinite:this.pages.length)-1:this.basicdata.currentPage+1);for(var s in this.$el.children)/slider-touch/gi.test(this.$el.children[s].className)&&(e=this.$el.children[s]);var n=e.children[0].children;for(var r in n)r<=i&&(t+=n[r].offsetHeight,t+=parseInt(n[r].style.marginTop||0),t+=parseInt(n[r].style.marginBottom||0));return t+a-a}},mounted:function(){var t=this,e=this;this.temporaryData.pageWidth=this.$el.offsetWidth,this.temporaryData.pageHeight=this.$el.offsetHeight,this.$emit("init",this.basicdata),this.$on("slideTo",function(e){t.slide(e)}),this.$on("slideNext",function(){t.next()}),this.$on("slidePre",function(){t.pre()}),this.$on("autoplayStart",function(i){t.sliderinit.autoplay=i||1e3,t.clock().begin(e)}),this.$on("autoplayStop",function(){t.sliderinit.autoplay=0,t.clock().stop(e)}),this.$on("loadingShow",function(){t.temporaryData.loading=!0}),this.$on("loadingHide",function(){t.temporaryData.loading=!1}),this.sliderinit.autoplay&&this.clock().begin(e),"vertical"===this.sliderinit.direction&&(this.temporaryData.containerClass["swiper-container-vertical"]=!0),window.addEventListener("resize",function(){e.temporaryData.pageWidth=e.$el.offsetWidth,e.temporaryData.pageHeight=e.$el.offsetHeight,e.slide(e.basicdata.currentPage,"animationnone")})},methods:{swipeStart:function(t){var e=this;if(!this.temporaryData.transitionEnding)if(this.temporaryData.animation=!1,this.sliderinit.autoplay&&this.clock().stop(e),this.sliderinit.preventDocumentMove===!0&&document.addEventListener("touchmove",e.preventDefault(t)),"touchstart"===t.type){if(t.touches.length>1)return void(this.temporaryData.tracking=!1);this.temporaryData.tracking=!0,this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.targetTouches[0].clientX,this.basicdata.start.y=t.targetTouches[0].clientY,this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY}else this.temporaryData.tracking=!0,this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.clientX,this.basicdata.start.y=t.clientY,this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY},swipeMove:function(t){if(this.temporaryData.tracking){if("touchmove"===t.type?(this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY):(this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY),"vertical"===this.sliderinit.direction)return void(this.basicdata.posheight=-this.currentHeight+this.basicdata.end.y-this.basicdata.start.y+"px");if("fade"===this.temporaryData.effect||"coverflow"===this.temporaryData.effect)return;this.basicdata.poswidth=-this.currentWidth+this.basicdata.end.x-this.basicdata.start.x+"px"}},swipeEnd:function(t){this.temporaryData.tracking=!1;var e=(new Date).getTime(),i=e-this.basicdata.start.t,a=this.basicdata.end.x-this.basicdata.start.x,s=this.basicdata.end.y-this.basicdata.start.y;if(this.sliderinit.autoplay){var n=this;setTimeout(function(){n.clock().begin(n)},this.sliderinit.autoplay)}if(document.removeEventListener("touchmove",this.preventDefault(t)),i>this.temporaryData.thresholdTime)return void this.slide(this.basicdata.currentPage);if("vertical"!==this.sliderinit.direction){if(a>this.temporaryData.thresholdDistance&&Math.abs(s)<this.temporaryData.thresholdDistance)return void this.pre();if(-a>this.temporaryData.thresholdDistance&&Math.abs(s)<this.temporaryData.thresholdDistance)return void this.next();if(!(i<300&&Math.abs(a)<10&&Math.abs(s)<10))return void this.slide(this.basicdata.currentPage);this.$emit("tap",this.basicdata),this.slide(this.basicdata.currentPage)}else{if(s>this.temporaryData.thresholdDistance&&Math.abs(a)<this.temporaryData.thresholdDistance)return void this.pre();if(-s>this.temporaryData.thresholdDistance&&Math.abs(a)<this.temporaryData.thresholdDistance)return void this.next();if(!(i<300&&Math.abs(a)<10&&Math.abs(s)<10))return void this.slide(this.basicdata.currentPage);this.$emit("tap",this.basicdata),this.slide(this.basicdata.currentPage)}},pre:function(){this.basicdata.direction="left",this.basicdata.currentPage>=1?(this.basicdata.currentPage-=this.sliderinit.slidesToScroll||1,this.slide()):this.sliderinit.loop&&0===this.basicdata.currentPage?(this.basicdata.currentPage-=this.sliderinit.slidesToScroll||1,this.temporaryData.transitionEnding=!0,this.basicdata.currentPage<0&&"fade"===this.temporaryData.effect?(this.slide(this.pagenums-1),this.temporaryData.transitionEnding=!1):this.slide()):this.slide(),this.$emit("slide",this.basicdata)},next:function(){this.basicdata.direction="right",this.basicdata.currentPage<this.pagenums-1?(this.basicdata.currentPage+=this.sliderinit.slidesToScroll||1,this.slide()):this.sliderinit.loop&&this.basicdata.currentPage===this.pagenums-1?(this.basicdata.currentPage+=this.sliderinit.slidesToScroll||1,this.temporaryData.transitionEnding=!0,this.basicdata.currentPage>=this.pagenums&&"fade"===this.temporaryData.effect?(this.slide(0),this.temporaryData.transitionEnding=!1):this.slide()):this.slide(),this.$emit("slide",this.basicdata)},slide:function(t,e){var i=this;i.temporaryData.animation=!0,"animationnone"===e&&(i.temporaryData.animation=!1),(t||0===t)&&(i.basicdata.currentPage=t),"fade"!==this.temporaryData.effect&&("vertical"===i.sliderinit.direction?i.basicdata.posheight=-i.currentHeight+"px":i.basicdata.poswidth=-i.currentWidth+"px",i.basicdata.currentPage<0||i.basicdata.currentPage>=i.pagenums)},clock:function(){return{begin:function(t){t.temporaryData.setIntervalid||(t.temporaryData.setIntervalid=setInterval(function(){t.next(),t.basicdata.currentPage!==t.pagenums-1||t.sliderinit.loop||(clearInterval(t.temporaryData.setIntervalid),t.temporaryData.setIntervalid=0)},t.sliderinit.autoplay))},stop:function(t){clearInterval(t.temporaryData.setIntervalid),t.temporaryData.setIntervalid=0}}},preventDefault:function(t){t.preventDefault()},onTransitionEnd:function(){var t=this;setTimeout(function(){t.sliderinit.loop&&"fade"!==t.temporaryData.effect&&(t.temporaryData.transitionEnding=!1,t.basicdata.currentPage<0?t.slide(t.pagenums+t.basicdata.currentPage,"animationnone"):t.basicdata.currentPage>=t.pagenums&&t.slide(0+t.basicdata.currentPage-t.pagenums,"animationnone"))},0)}},components:{basic:o.default,basicLoop:l.default,fade:c.default,fadeLoop:c.default,coverflow:u.default}}},function(t,e){(function(t){"use strict";function i(){var e=void 0,i=void 0,a=void 0,s=void 0;return function(){var n=document.createElement("_"),r=n.style,o=void 0;""===r[o="webkitTransition"]&&(a="webkitTransitionEnd",i=o),""===r[o="transition"]&&(a="transitionend",i=o),""===r[o="webkitTransform"]&&(e=o),""===r[o="msTransform"]&&(e=o),""===r[o="transform"]&&(e=o),document.body.insertBefore(n,null),r[e]="translate3d(0, 0, 0)",s=!!t.getComputedStyle(n).getPropertyValue(e),document.body.removeChild(n)}(),{transform:e,transition:i,transitionEnd:a,hasTranslate3d:s}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i}).call(e,function(){return this}())},function(t,e,i){var a,s,n={};a=i(13),s=i(14),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;s&&(r.template=s),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["sliderinit","pages"],data:function(){return{}}}},function(t,e){t.exports=' <div class=slider-wrapper> <template v-if=pages.length> <template v-for="item in pages"> <div class=slider-item :style=item.style> <div v-if=!item.component v-html=item.html></div> <template v-else> <component :item=item :pages=pages :sliderinit=sliderinit :is=item.component></component> </template> </div> </template> </template> </div> '},function(t,e,i){var a,s,n={};a=i(16),s=i(17),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;s&&(r.template=s),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["sliderinit","pages"],data:function(){return{}}}},function(t,e){t.exports=' <div class=slider-wrapper> <template v-if=pages.length> <template v-if=sliderinit.infinite v-for="(item, index) in pages"> <template v-if="index+sliderinit.infinite-pages.length>=0"> <div class=slider-item :style=item.style> <template v-if=item.component> <component :pages=pages :item=item :sliderinit=sliderinit :is=item.component></component> </template> <div v-else v-html=item.html></div> </div> </template> </template> <template v-if=!sliderinit.infinite> <div class=slider-item :style=pages[pages.length-1].style> <template v-if=pages[pages.length-1].component> <component :pages=pages :item=pages[pages.length-1] :sliderinit=sliderinit :is=pages[pages.length-1].component></component> </template> <div v-else v-html=pages[pages.length-1].html></div> </div> </template> <template v-for="item in pages"> <div class=slider-item :style=item.style> <template v-if=item.component> <component :pages=pages :item=item :sliderinit=sliderinit :is=item.component></component> </template> <div v-else v-html=item.html></div> </div> </template> <template v-if=sliderinit.infinite v-for="(item, index) in pages"> <template v-if="index-sliderinit.infinite<0"> <div class=slider-item :style=item.style> <template v-if=item.component> <component :pages=pages :item=item :sliderinit=sliderinit :is=item.component></component> </template> <div v-else v-html=item.html></div> </div> </template> </template> <template v-if=!sliderinit.infinite> <div class=slider-item :style=pages[0].style> <template v-if=pages[0].component> <component :pages=pages :item=pages[0] :sliderinit=sliderinit :is=pages[0].component></component> </template> <div v-else v-html=pages[0].html></div> </div> </template> </template> </div> '},function(t,e,i){var a,s,n={};a=i(19),s=i(20),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;s&&(r.template=s),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["sliderinit","pages","basicdata","temporarydata"],data:function(){return{}},methods:{transform:function(t){var e="-"+this.temporarydata.pageWidth*t+"px",i={};return i.transform="translate3D("+e+",0,0)",i.opacity=this.basicdata.currentPage===t||this.basicdata.currentPage===t+1?"1":"0",i["transition-property"]="opacity",i[this.temporarydata.prefixes.transition+"Duration"]=(this.temporarydata.animation?this.sliderinit.duration||300:0)+"ms",i}}}},function(t,e){t.exports=' <div class=slider-wrapper> <template v-if=pages.length> <template v-for="(item, index) in pages"> <div class=slider-item :style="[item.style, transform(index)]"> <div v-if=!item.component v-html=item.html></div> <template v-else> <component :pages=pages :item=item :sliderinit=sliderinit :is=item.component></component> </template> </div> </template> </template> </div> '},function(t,e,i){var a,s,n={};a=i(22),s=i(23),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;s&&(r.template=s),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["sliderinit","pages","basicdata","temporarydata"],data:function(){return{}},methods:{transform:function(t){var e=this.temporarydata.pageWidth,i="";i=this.pages[t].style.height?this.pages[t].style.height.indexOf("px")===-1?this.temporarydata.pageHeight*parseFloat(this.pages[t].style.height)/100:parseFloat(this.pages[t].style.height):this.temporarydata.pageHeight;var a=this.pages[t].style.width.indexOf("px")===-1?this.temporarydata.pageWidth*parseFloat(this.pages[t].style.width)/100:parseFloat(this.pages[t].style.width),s=e/2-a/2,n=s-this.temporarydata.deviation+"px",r=s+this.temporarydata.deviation+a*(1-this.temporarydata.widthScalingRatio)+"px",o=s+"px",d={};return t===this.basicdata.currentPage-1||t===this.pages.length-2&&this.basicdata.currentPage===-1?(d.left=n,d.width=a*this.temporarydata.widthScalingRatio+"px",d.height=i*this.temporarydata.heightScalingRatio+"px",d.opacity="1","left"===this.basicdata.direction?d["z-index"]="10":d["z-index"]="1"):t===this.basicdata.currentPage+1||1===t&&this.basicdata.currentPage===this.pages.length?(d.left=r,d.width=a*this.temporarydata.widthScalingRatio+"px",d.height=i*this.temporarydata.heightScalingRatio+"px",d.opacity="1","left"===this.basicdata.direction?d["z-index"]="1":d["z-index"]="10"):t===this.basicdata.currentPage?(d.left=o,d["z-index"]="99",d.opacity="1"):(d.left=o,d.opacity="0"),t===this.pages.length-1&&0===this.basicdata.currentPage&&(d.left=n,d.width=a*this.temporarydata.widthScalingRatio+"px",d.height=i*this.temporarydata.heightScalingRatio+"px",d.opacity="1"),0===t&&this.basicdata.currentPage===this.pages.length-1&&(d.left=r,d.width=a*this.temporarydata.widthScalingRatio+"px",d.height=i*this.temporarydata.heightScalingRatio+"px",d.opacity="1"),(t!==this.pages.length-1&&t!==this.pages.length-2||this.basicdata.currentPage!==-1)&&(0!==t&&1!==t||this.basicdata.currentPage!==this.pages.length)||(d.opacity="1",0===t&&(d["z-index"]="99"),t===this.pages.length-1&&(d["z-index"]="99")),d[this.temporarydata.prefixes.transition+"Duration"]=(this.temporarydata.animation?this.sliderinit.duration||300:0)+"ms",d.position="absolute",d}}}},function(t,e){t.exports=' <div class=slider-wrapper> <template v-if=pages.length> <template v-for="(item, index) in pages"> <div class=slider-item :style="[item.style, transform(index)]"> <div v-if=!item.component v-html=item.html></div> <template v-else> <component :pages=pages :item=item :sliderinit=sliderinit :is=item.component></component> </template> </div> </template> </template> </div> '},function(t,e){t.exports=' <div class=slider-container :class=temporaryData.containerClass> <div class=slider-touch :style=styleobj @touchmove.stop.capture.prevent=swipeMove @touchstart.stop.capture.prevent=swipeStart @touchend.stop.capture.prevent=swipeEnd @mousedown.stop.capture.prevent=swipeStart @mouseup.stop.capture.prevent=swipeEnd @mousemove.stop.capture.prevent=swipeMove @webkit-transition-end=onTransitionEnd @transitionend=onTransitionEnd> <component :pages=pages :sliderinit=sliderinit :basicdata=basicdata :temporarydata=temporaryData v-bind:is=currentView></component> </div> <div class="slider-pagination slider-pagination-bullets"> <template v-for="n in pagenums"> <span @click=slide(n-1) class=slider-pagination-bullet :class="n-1 === basicdata.currentPage? \'slider-pagination-bullet-active\':\'\'"></span> </template> </div> <div class=slider-loading v-show=!pagenums||temporaryData.loading> <slot name=loading></slot> </div> </div> '}])});