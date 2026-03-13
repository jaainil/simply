(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],2:[function(require,module,exports){
/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).mediumZoom=t()}(this,(function(){"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},t=function(e){return"IMG"===e.tagName},o=function(e){return e&&1===e.nodeType},n=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},i=function(e){try{return Array.isArray(e)?e.filter(t):function(e){return NodeList.prototype.isPrototypeOf(e)}(e)?[].slice.call(e).filter(t):o(e)?[e].filter(t):"string"==typeof e?[].slice.call(document.querySelectorAll(e)).filter(t):[]}catch(e){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},r=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t},d=function(e){var t=e.getBoundingClientRect(),o=t.top,n=t.left,i=t.width,r=t.height,d=e.cloneNode(),a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,m=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return d.removeAttribute("id"),d.style.position="absolute",d.style.top=o+a+"px",d.style.left=n+m+"px",d.style.width=i+"px",d.style.height=r+"px",d.style.transform="",d},a=function(t,o){var n=e({bubbles:!1,cancelable:!1,detail:void 0},o);if("function"==typeof window.CustomEvent)return new CustomEvent(t,n);var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),i};return function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===o&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"),function t(m){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=window.Promise||function(e){function t(){}e(t,t)},u=function(e){var t=e.target;t!==N?-1!==x.indexOf(t)&&w({target:t}):E()},s=function(){if(!A&&k.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(S-e)>T.scrollOffset&&setTimeout(E,150)}},f=function(e){var t=e.key||e.keyCode;"Escape"!==t&&"Esc"!==t&&27!==t||E()},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t;if(t.background&&(N.style.background=t.background),t.container&&t.container instanceof Object&&(n.container=e({},T.container,t.container)),t.template){var i=o(t.template)?t.template:document.querySelector(t.template);n.template=i}return T=e({},T,n),x.forEach((function(e){e.dispatchEvent(a("medium-zoom:update",{detail:{zoom:j}}))})),j},g=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(e({},T,o))},v=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var n=t.reduce((function(e,t){return[].concat(e,i(t))}),[]);return n.filter((function(e){return-1===x.indexOf(e)})).forEach((function(e){x.push(e),e.classList.add("medium-zoom-image")})),O.forEach((function(e){var t=e.type,o=e.listener,i=e.options;n.forEach((function(e){e.addEventListener(t,o,i)}))})),j},h=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];k.zoomed&&E();var n=t.length>0?t.reduce((function(e,t){return[].concat(e,i(t))}),[]):x;return n.forEach((function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(a("medium-zoom:detach",{detail:{zoom:j}}))})),x=x.filter((function(e){return-1===n.indexOf(e)})),j},z=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return x.forEach((function(n){n.addEventListener("medium-zoom:"+e,t,o)})),O.push({type:"medium-zoom:"+e,listener:t,options:o}),j},y=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return x.forEach((function(n){n.removeEventListener("medium-zoom:"+e,t,o)})),O=O.filter((function(o){return!(o.type==="medium-zoom:"+e&&o.listener.toString()===t.toString())})),j},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.target,r=function(){var t={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},i=void 0,r=void 0;if(T.container)if(T.container instanceof Object)i=(t=e({},t,T.container)).width-t.left-t.right-2*T.margin,r=t.height-t.top-t.bottom-2*T.margin;else{var d=(o(T.container)?T.container:document.querySelector(T.container)).getBoundingClientRect(),a=d.width,m=d.height,l=d.left,c=d.top;t=e({},t,{width:a,height:m,left:l,top:c})}i=i||t.width-2*T.margin,r=r||t.height-2*T.margin;var u=k.zoomedHd||k.original,s=n(u)?i:u.naturalWidth||i,f=n(u)?r:u.naturalHeight||r,p=u.getBoundingClientRect(),g=p.top,v=p.left,h=p.width,z=p.height,y=Math.min(Math.max(h,s),i)/h,b=Math.min(Math.max(z,f),r)/z,E=Math.min(y,b),w="scale("+E+") translate3d("+((i-h)/2-v+T.margin+t.left)/E+"px, "+((r-z)/2-g+T.margin+t.top)/E+"px, 0)";k.zoomed.style.transform=w,k.zoomedHd&&(k.zoomedHd.style.transform=w)};return new c((function(e){if(i&&-1===x.indexOf(i))e(j);else{if(k.zoomed)e(j);else{if(i)k.original=i;else{if(!(x.length>0))return void e(j);var t=x;k.original=t[0]}if(k.original.dispatchEvent(a("medium-zoom:open",{detail:{zoom:j}})),S=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,A=!0,k.zoomed=d(k.original),document.body.appendChild(N),T.template){var n=o(T.template)?T.template:document.querySelector(T.template);k.template=document.createElement("div"),k.template.appendChild(n.content.cloneNode(!0)),document.body.appendChild(k.template)}if(k.original.parentElement&&"PICTURE"===k.original.parentElement.tagName&&k.original.currentSrc&&(k.zoomed.src=k.original.currentSrc),document.body.appendChild(k.zoomed),window.requestAnimationFrame((function(){document.body.classList.add("medium-zoom--opened")})),k.original.classList.add("medium-zoom-image--hidden"),k.zoomed.classList.add("medium-zoom-image--opened"),k.zoomed.addEventListener("click",E),k.zoomed.addEventListener("transitionend",(function t(){A=!1,k.zoomed.removeEventListener("transitionend",t),k.original.dispatchEvent(a("medium-zoom:opened",{detail:{zoom:j}})),e(j)})),k.original.getAttribute("data-zoom-src")){k.zoomedHd=k.zoomed.cloneNode(),k.zoomedHd.removeAttribute("srcset"),k.zoomedHd.removeAttribute("sizes"),k.zoomedHd.removeAttribute("loading"),k.zoomedHd.src=k.zoomed.getAttribute("data-zoom-src"),k.zoomedHd.onerror=function(){clearInterval(m),console.warn("Unable to reach the zoom image target "+k.zoomedHd.src),k.zoomedHd=null,r()};var m=setInterval((function(){k.zoomedHd.complete&&(clearInterval(m),k.zoomedHd.classList.add("medium-zoom-image--opened"),k.zoomedHd.addEventListener("click",E),document.body.appendChild(k.zoomedHd),r())}),10)}else if(k.original.hasAttribute("srcset")){k.zoomedHd=k.zoomed.cloneNode(),k.zoomedHd.removeAttribute("sizes"),k.zoomedHd.removeAttribute("loading");var l=k.zoomedHd.addEventListener("load",(function(){k.zoomedHd.removeEventListener("load",l),k.zoomedHd.classList.add("medium-zoom-image--opened"),k.zoomedHd.addEventListener("click",E),document.body.appendChild(k.zoomedHd),r()}))}else r()}}}))},E=function(){return new c((function(e){if(!A&&k.original){A=!0,document.body.classList.remove("medium-zoom--opened"),k.zoomed.style.transform="",k.zoomedHd&&(k.zoomedHd.style.transform=""),k.template&&(k.template.style.transition="opacity 150ms",k.template.style.opacity=0),k.original.dispatchEvent(a("medium-zoom:close",{detail:{zoom:j}})),k.zoomed.addEventListener("transitionend",(function t(){k.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(k.zoomed),k.zoomedHd&&document.body.removeChild(k.zoomedHd),document.body.removeChild(N),k.zoomed.classList.remove("medium-zoom-image--opened"),k.template&&document.body.removeChild(k.template),A=!1,k.zoomed.removeEventListener("transitionend",t),k.original.dispatchEvent(a("medium-zoom:closed",{detail:{zoom:j}})),k.original=null,k.zoomed=null,k.zoomedHd=null,k.template=null,e(j)}))}else e(j)}))},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target;return k.original?E():b({target:t})},L=function(){return T},H=function(){return x},C=function(){return k.original},x=[],O=[],A=!1,S=0,T=l,k={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(m)?T=m:(m||"string"==typeof m)&&v(m),T=e({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},T);var N=r(T.background);document.addEventListener("click",u),document.addEventListener("keyup",f),document.addEventListener("scroll",s),window.addEventListener("resize",E);var j={open:b,close:E,toggle:w,update:p,clone:g,attach:v,detach:h,on:z,off:y,getOptions:L,getImages:H,getZoomedImage:C};return j}}));

},{}],3:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _urlRegularExpression = _interopRequireDefault(require("./util/url-regular-expression"));
var _documentQuerySelectorAll = _interopRequireDefault(require("./util/document-query-selector-all"));
/* global followSocialMedia menuDropdown localStorage */

// lib

// import loadScript from './util/load-script'

const simplySetup = () => {
  const rootEl = document.documentElement;
  const documentBody = document.body;

  /* Menu DropDown
  /* ---------------------------------------------------------- */
  const dropDownMenu = () => {
    // Checking if the variable exists and if it is an object
    if (typeof menuDropdown !== "object" || menuDropdown === null) return;

    // check if the box for the menu exists
    const $dropdownMenu = document.querySelector(".js-dropdown-menu");
    if (!$dropdownMenu) return;
    Object.entries(menuDropdown).forEach(([name, url]) => {
      if (name !== "string" && !(0, _urlRegularExpression.default)(url)) return;
      const link = document.createElement("a");
      link.href = url;
      link.classList = "dropdown-item block py-2 leading-tight px-5 hover:text-primary";
      link.innerText = name;
      $dropdownMenu.appendChild(link);
    });
  };
  dropDownMenu();

  /* Social Media
  /* ---------------------------------------------------------- */
  const socialMedia = () => {
    // Checking if the variable exists and if it is an object
    if (typeof followSocialMedia !== "object" || followSocialMedia === null) return;

    // check if the box for the menu exists
    const $socialMedia = (0, _documentQuerySelectorAll.default)(".js-social-media");
    if (!$socialMedia.length) return;
    const linkElement = element => {
      Object.entries(followSocialMedia).forEach(([name, urlTitle]) => {
        const url = urlTitle[0];

        // The url is being validated if it is false it returns
        if (!(0, _urlRegularExpression.default)(url)) return;
        const link = document.createElement("a");
        link.href = url;
        link.title = urlTitle[1];
        link.classList = "p-2 inline-block hover:opacity-70";
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.innerHTML = `<svg class="icon"><use xlink:href="#icon-${name}"></use></svg>`;
        element.appendChild(link);
      });
    };
    $socialMedia.forEach(linkElement);
  };
  socialMedia();

  /*  Toggle modal
  /* ---------------------------------------------------------- */
  /*const simplyModal = () => {
    const $modals = docSelectorAll('.js-modal')
    const $modalButtons = docSelectorAll('.js-modal-button')
    const $modalCloses = docSelectorAll('.js-modal-close')
     // Modal Click Open
    if (!$modalButtons.length) return
    $modalButtons.forEach($el => $el.addEventListener('click', () => openModal($el.dataset.target)))
     // Modal Click Close
    if (!$modalCloses.length) return
    $modalCloses.forEach(el => el.addEventListener('click', () => closeModals()))
     const openModal = target => {
      documentBody.classList.remove('has-menu')
      const $target = document.getElementById(target)
      rootEl.classList.add('overflow-hidden')
      $target.classList.add('is-active')
    }
     const closeModals = () => {
      rootEl.classList.remove('overflow-hidden')
      $modals.forEach($el => $el.classList.remove('is-active'))
    }
     document.addEventListener('keydown', function (event) {
      const e = event || window.event
      if (e.keyCode === 27) {
        closeModals()
        // closeDropdowns()
      }
    })
  }
   simplyModal()
  */

  /* Header Transparency
  /* ---------------------------------------------------------- */
  const headerTransparency = () => {
    const hasCover = documentBody.closest(".has-cover");
    const $jsHeader = document.querySelector(".js-header");
    window.addEventListener("scroll", () => {
      const lastScrollY = window.scrollY;
      if (lastScrollY > 5) {
        $jsHeader.classList.add("shadow-header", "header-bg");
      } else {
        $jsHeader.classList.remove("shadow-header", "header-bg");
      }
      if (!hasCover) return;
      lastScrollY >= 20 ? documentBody.classList.remove("is-head-transparent") : documentBody.classList.add("is-head-transparent");
    }, {
      passive: true
    });
  };
  headerTransparency();

  /* Dark Mode
  /* ---------------------------------------------------------- */
  const darkMode = () => {
    const $toggleDarkMode = (0, _documentQuerySelectorAll.default)(".js-dark-mode");
    if (!$toggleDarkMode.length) return;
    $toggleDarkMode.forEach(item => item.addEventListener("click", function (event) {
      event.preventDefault();
      if (!rootEl.classList.contains("dark")) {
        rootEl.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        rootEl.classList.remove("dark");
        localStorage.theme = "light";
      }
    }));
  };
  darkMode();

  /* DropDown Toggle
  /* ---------------------------------------------------------- */
  const dropDownMenuToggle = () => {
    const dropdowns = (0, _documentQuerySelectorAll.default)(".dropdown:not(.is-hoverable)");
    if (!dropdowns.length) return;
    dropdowns.forEach(function (el) {
      el.addEventListener("click", function (event) {
        event.stopPropagation();
        el.classList.toggle("is-active");
        documentBody.classList.remove("has-menu");
      });
    });
    const closeDropdowns = () => dropdowns.forEach(function (el) {
      el.classList.remove("is-active");
    });
    document.addEventListener("click", closeDropdowns);
  };
  dropDownMenuToggle();

  /* Toggle Menu
  /* ---------------------------------------------------------- */
  document.querySelector(".js-menu-toggle").addEventListener("click", function (e) {
    e.preventDefault();
    documentBody.classList.toggle("has-menu");
  });
};
document.addEventListener("DOMContentLoaded", simplySetup);

},{"./util/document-query-selector-all":5,"./util/url-regular-expression":7,"@babel/runtime/helpers/interopRequireDefault":1}],4:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
require("./main");
var _mediumZoom = _interopRequireDefault(require("medium-zoom"));
var _loadScript = _interopRequireDefault(require("./util/load-script"));
var _documentQuerySelectorAll = _interopRequireDefault(require("./util/document-query-selector-all"));
/* global prismJs */

const simplyPost = () => {
  /* All Video Responsive
  /* ---------------------------------------------------------- */
  const videoResponsive = () => {
    const selectors = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="dailymotion.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="player.twitch.tv"]', 'iframe[src*="kickstarter.com"][src*="video.html"]'];
    const $iframes = (0, _documentQuerySelectorAll.default)(selectors.join(","));
    if (!$iframes.length) return;
    $iframes.forEach(el => {
      el.classList.add("aspect-video", "w-full");
      // const parentForVideo = document.createElement('div')
      // parentForVideo.className = 'video-responsive'
      // el.parentNode.insertBefore(parentForVideo, el)
      // parentForVideo.appendChild(el)
      el.removeAttribute("height");
      el.removeAttribute("width");
    });
  };
  videoResponsive();

  /* medium-zoom
  /* ---------------------------------------------------------- */
  const mediumZoomImg = () => {
    (0, _documentQuerySelectorAll.default)(".post-body img").forEach(el => !el.closest("a") && el.classList.add("simply-zoom"));
    (0, _mediumZoom.default)(".simply-zoom", {
      margin: 20,
      background: "hsla(0,0%,100%,.85)"
    });
  };
  mediumZoomImg();

  /* Gallery Card
  /* ---------------------------------------------------------- */
  // const resizeImagesInGalleries = () => {
  //   const $galleryImg = docSelectorAll('.kg-gallery-image > img')

  //   if (!$galleryImg.length) return

  //   $galleryImg.forEach(image => {
  //     const container = image.closest('.kg-gallery-image')
  //     const width = image.attributes.width.value
  //     const height = image.attributes.height.value
  //     const ratio = width / height
  //     container.style.flex = ratio + ' 1 0%'
  //   })
  // }

  // resizeImagesInGalleries()

  /* highlight prismjs
  /* ---------------------------------------------------------- */
  if ((0, _documentQuerySelectorAll.default)("code[class*=language-]").length && typeof prismJs !== "undefined") {
    (0, _loadScript.default)(prismJs);
  }
};
document.addEventListener("DOMContentLoaded", simplyPost);

},{"./main":3,"./util/document-query-selector-all":5,"./util/load-script":6,"@babel/runtime/helpers/interopRequireDefault":1,"medium-zoom":2}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = (selector, parent = document) => Array.prototype.slice.call(parent.querySelectorAll(selector), 0);
exports.default = _default;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = (src, callback) => {
  const scriptElement = document.createElement('script');
  scriptElement.src = src;
  scriptElement.defer = true;
  scriptElement.async = true;
  callback && scriptElement.addEventListener('load', callback);
  document.body.appendChild(scriptElement);
};
exports.default = _default;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = url => /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \+\.-]*)*\/?$/.test(url); //eslint-disable-line
exports.default = _default;

},{}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJub2RlX21vZHVsZXMvbWVkaXVtLXpvb20vZGlzdC9tZWRpdW0tem9vbS5taW4uanMiLCJzcmMvanMvbWFpbi5qcyIsInNyYy9qcy9wb3N0LmpzIiwic3JjL2pzL3V0aWwvZG9jdW1lbnQtcXVlcnktc2VsZWN0b3ItYWxsLmpzIiwic3JjL2pzL3V0aWwvbG9hZC1zY3JpcHQuanMiLCJzcmMvanMvdXRpbC91cmwtcmVndWxhci1leHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTs7Ozs7QUNJQSxJQUFBLHFCQUFBLEdBQUEsc0JBQUEsQ0FBQSxPQUFBO0FBQ0EsSUFBQSx5QkFBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQVBBOztBQUVBOztBQUdBOztBQUlBLE1BQU0sV0FBVyxHQUFHLENBQUEsS0FBTTtFQUN4QixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsZUFBZTtFQUN2QyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsSUFBSTs7RUFFbEM7QUFDRjtFQUNFLE1BQU0sWUFBWSxHQUFHLENBQUEsS0FBTTtJQUN6QjtJQUNBLElBQUksT0FBTyxZQUFZLEtBQUssUUFBUSxJQUFJLFlBQVksS0FBSyxJQUFJLEVBQUU7O0lBRS9EO0lBQ0EsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztJQUNqRSxJQUFJLENBQUMsYUFBYSxFQUFFO0lBRXBCLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUs7TUFDcEQsSUFBSSxJQUFJLEtBQUssUUFBUSxJ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QyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFBQSxPQUFBLENBQUEsT0FBQSxHQUFBLFFBQUE7Ozs7Ozs7OztlQ0FqRyxDQUFDLEdBQUcsRUFBRSxRQUFRLEtBQUs7RUFDaEMsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7RUFDdEQsYUFBYSxDQUFDLEdBQUcsR0FBRyxHQUFHO0VBQ3ZCLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSTtFQUMxQixhQUFhLENBQUMsS0FBSyxHQUFHLElBQUk7RUFFMUIsUUFBUSxJQUFJLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO0VBQzVELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztBQUMxQyxDQUFDO0FBQUEsT0FBQSxDQUFBLE9BQUEsR0FBQSxRQUFBOzs7Ozs7Ozs7ZUNSYyxHQUFHLElBQUksa0VBQWtFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDO0FBQUEsT0FBQSxDQUFBLE9BQUEsR0FBQSxRQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChlKSB7XG4gIHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7XG4gICAgXCJkZWZhdWx0XCI6IGVcbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIi8qISBtZWRpdW0tem9vbSAxLjEuMCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL2ZyYW5jb2lzY2hhbGlmb3VyL21lZGl1bS16b29tICovXG4hZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTooZT1lfHxzZWxmKS5tZWRpdW1ab29tPXQoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbz1hcmd1bWVudHNbdF07Zm9yKHZhciBuIGluIG8pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sbikmJihlW25dPW9bbl0pfXJldHVybiBlfSx0PWZ1bmN0aW9uKGUpe3JldHVyblwiSU1HXCI9PT1lLnRhZ05hbWV9LG89ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJjE9PT1lLm5vZGVUeXBlfSxuPWZ1bmN0aW9uKGUpe3JldHVyblwiLnN2Z1wiPT09KGUuY3VycmVudFNyY3x8ZS5zcmMpLnN1YnN0cigtNCkudG9Mb3dlckNhc2UoKX0saT1mdW5jdGlvbihlKXt0cnl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSk/ZS5maWx0ZXIodCk6ZnVuY3Rpb24oZSl7cmV0dXJuIE5vZGVMaXN0LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGUpfShlKT9bXS5zbGljZS5jYWxsKGUpLmZpbHRlcih0KTpvKGUpP1tlXS5maWx0ZXIodCk6XCJzdHJpbmdcIj09dHlwZW9mIGU/W10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGUpKS5maWx0ZXIodCk6W119Y2F0Y2goZSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBwcm92aWRlZCBzZWxlY3RvciBpcyBpbnZhbGlkLlxcbkV4cGVjdHMgYSBDU1Mgc2VsZWN0b3IsIGEgTm9kZSBlbGVtZW50LCBhIE5vZGVMaXN0IG9yIGFuIGFycmF5LlxcblNlZTogaHR0cHM6Ly9naXRodWIuY29tL2ZyYW5jb2lzY2hhbGlmb3VyL21lZGl1bS16b29tXCIpfX0scj1mdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiB0LmNsYXNzTGlzdC5hZGQoXCJtZWRpdW0tem9vbS1vdmVybGF5XCIpLHQuc3R5bGUuYmFja2dyb3VuZD1lLHR9LGQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxvPXQudG9wLG49dC5sZWZ0LGk9dC53aWR0aCxyPXQuaGVpZ2h0LGQ9ZS5jbG9uZU5vZGUoKSxhPXdpbmRvdy5wYWdlWU9mZnNldHx8ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcHx8ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3B8fDAsbT13aW5kb3cucGFnZVhPZmZzZXR8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0fHxkb2N1bWVudC5ib2R5LnNjcm9sbExlZnR8fDA7cmV0dXJuIGQucmVtb3ZlQXR0cmlidXRlKFwiaWRcIiksZC5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsZC5zdHlsZS50b3A9bythK1wicHhcIixkLnN0eWxlLmxlZnQ9bittK1wicHhcIixkLnN0eWxlLndpZHRoPWkrXCJweFwiLGQuc3R5bGUuaGVpZ2h0PXIrXCJweFwiLGQuc3R5bGUudHJhbnNmb3JtPVwiXCIsZH0sYT1mdW5jdGlvbih0LG8pe3ZhciBuPWUoe2J1YmJsZXM6ITEsY2FuY2VsYWJsZTohMSxkZXRhaWw6dm9pZCAwfSxvKTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQpcmV0dXJuIG5ldyBDdXN0b21FdmVudCh0LG4pO3ZhciBpPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7cmV0dXJuIGkuaW5pdEN1c3RvbUV2ZW50KHQsbi5idWJibGVzLG4uY2FuY2VsYWJsZSxuLmRldGFpbCksaX07cmV0dXJuIGZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09dCYmKHQ9e30pO3ZhciBvPXQuaW5zZXJ0QXQ7aWYoZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50KXt2YXIgbj1kb2N1bWVudC5oZWFkfHxkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0saT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7aS50eXBlPVwidGV4dC9jc3NcIixcInRvcFwiPT09byYmbi5maXJzdENoaWxkP24uaW5zZXJ0QmVmb3JlKGksbi5maXJzdENoaWxkKTpuLmFwcGVuZENoaWxkKGkpLGkuc3R5bGVTaGVldD9pLnN0eWxlU2hlZXQuY3NzVGV4dD1lOmkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZSkpfX0oXCIubWVkaXVtLXpvb20tb3ZlcmxheXtwb3NpdGlvbjpmaXhlZDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtvcGFjaXR5OjA7dHJhbnNpdGlvbjpvcGFjaXR5IC4zczt3aWxsLWNoYW5nZTpvcGFjaXR5fS5tZWRpdW0tem9vbS0tb3BlbmVkIC5tZWRpdW0tem9vbS1vdmVybGF5e2N1cnNvcjpwb2ludGVyO2N1cnNvcjp6b29tLW91dDtvcGFjaXR5OjF9Lm1lZGl1bS16b29tLWltYWdle2N1cnNvcjpwb2ludGVyO2N1cnNvcjp6b29tLWluO3RyYW5zaXRpb246dHJhbnNmb3JtIC4zcyBjdWJpYy1iZXppZXIoLjIsMCwuMiwxKSFpbXBvcnRhbnR9Lm1lZGl1bS16b29tLWltYWdlLS1oaWRkZW57dmlzaWJpbGl0eTpoaWRkZW59Lm1lZGl1bS16b29tLWltYWdlLS1vcGVuZWR7cG9zaXRpb246cmVsYXRpdmU7Y3Vyc29yOnBvaW50ZXI7Y3Vyc29yOnpvb20tb3V0O3dpbGwtY2hhbmdlOnRyYW5zZm9ybX1cIiksZnVuY3Rpb24gdChtKXt2YXIgbD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e30sYz13aW5kb3cuUHJvbWlzZXx8ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdCgpe31lKHQsdCl9LHU9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS50YXJnZXQ7dCE9PU4/LTEhPT14LmluZGV4T2YodCkmJncoe3RhcmdldDp0fSk6RSgpfSxzPWZ1bmN0aW9uKCl7aWYoIUEmJmsub3JpZ2luYWwpe3ZhciBlPXdpbmRvdy5wYWdlWU9mZnNldHx8ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcHx8ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3B8fDA7TWF0aC5hYnMoUy1lKT5ULnNjcm9sbE9mZnNldCYmc2V0VGltZW91dChFLDE1MCl9fSxmPWZ1bmN0aW9uKGUpe3ZhciB0PWUua2V5fHxlLmtleUNvZGU7XCJFc2NhcGVcIiE9PXQmJlwiRXNjXCIhPT10JiYyNyE9PXR8fEUoKX0scD1mdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fSxuPXQ7aWYodC5iYWNrZ3JvdW5kJiYoTi5zdHlsZS5iYWNrZ3JvdW5kPXQuYmFja2dyb3VuZCksdC5jb250YWluZXImJnQuY29udGFpbmVyIGluc3RhbmNlb2YgT2JqZWN0JiYobi5jb250YWluZXI9ZSh7fSxULmNvbnRhaW5lcix0LmNvbnRhaW5lcikpLHQudGVtcGxhdGUpe3ZhciBpPW8odC50ZW1wbGF0ZSk/dC50ZW1wbGF0ZTpkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHQudGVtcGxhdGUpO24udGVtcGxhdGU9aX1yZXR1cm4gVD1lKHt9LFQsbikseC5mb3JFYWNoKChmdW5jdGlvbihlKXtlLmRpc3BhdGNoRXZlbnQoYShcIm1lZGl1bS16b29tOnVwZGF0ZVwiLHtkZXRhaWw6e3pvb206an19KSl9KSksan0sZz1mdW5jdGlvbigpe3ZhciBvPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fTtyZXR1cm4gdChlKHt9LFQsbykpfSx2PWZ1bmN0aW9uKCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGgsdD1BcnJheShlKSxvPTA7bzxlO28rKyl0W29dPWFyZ3VtZW50c1tvXTt2YXIgbj10LnJlZHVjZSgoZnVuY3Rpb24oZSx0KXtyZXR1cm5bXS5jb25jYXQoZSxpKHQpKX0pLFtdKTtyZXR1cm4gbi5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybi0xPT09eC5pbmRleE9mKGUpfSkpLmZvckVhY2goKGZ1bmN0aW9uKGUpe3gucHVzaChlKSxlLmNsYXNzTGlzdC5hZGQoXCJtZWRpdW0tem9vbS1pbWFnZVwiKX0pKSxPLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciB0PWUudHlwZSxvPWUubGlzdGVuZXIsaT1lLm9wdGlvbnM7bi5mb3JFYWNoKChmdW5jdGlvbihlKXtlLmFkZEV2ZW50TGlzdGVuZXIodCxvLGkpfSkpfSkpLGp9LGg9ZnVuY3Rpb24oKXtmb3IodmFyIGU9YXJndW1lbnRzLmxlbmd0aCx0PUFycmF5KGUpLG89MDtvPGU7bysrKXRbb109YXJndW1lbnRzW29dO2suem9vbWVkJiZFKCk7dmFyIG49dC5sZW5ndGg+MD90LnJlZHVjZSgoZnVuY3Rpb24oZSx0KXtyZXR1cm5bXS5jb25jYXQoZSxpKHQpKX0pLFtdKTp4O3JldHVybiBuLmZvckVhY2goKGZ1bmN0aW9uKGUpe2UuY2xhc3NMaXN0LnJlbW92ZShcIm1lZGl1bS16b29tLWltYWdlXCIpLGUuZGlzcGF0Y2hFdmVudChhKFwibWVkaXVtLXpvb206ZGV0YWNoXCIse2RldGFpbDp7em9vbTpqfX0pKX0pKSx4PXguZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4tMT09PW4uaW5kZXhPZihlKX0pKSxqfSx6PWZ1bmN0aW9uKGUsdCl7dmFyIG89YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOnt9O3JldHVybiB4LmZvckVhY2goKGZ1bmN0aW9uKG4pe24uYWRkRXZlbnRMaXN0ZW5lcihcIm1lZGl1bS16b29tOlwiK2UsdCxvKX0pKSxPLnB1c2goe3R5cGU6XCJtZWRpdW0tem9vbTpcIitlLGxpc3RlbmVyOnQsb3B0aW9uczpvfSksan0seT1mdW5jdGlvbihlLHQpe3ZhciBvPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTp7fTtyZXR1cm4geC5mb3JFYWNoKChmdW5jdGlvbihuKXtuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZWRpdW0tem9vbTpcIitlLHQsbyl9KSksTz1PLmZpbHRlcigoZnVuY3Rpb24obyl7cmV0dXJuIShvLnR5cGU9PT1cIm1lZGl1bS16b29tOlwiK2UmJm8ubGlzdGVuZXIudG9TdHJpbmcoKT09PXQudG9TdHJpbmcoKSl9KSksan0sYj1mdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fSxpPXQudGFyZ2V0LHI9ZnVuY3Rpb24oKXt2YXIgdD17d2lkdGg6ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLGhlaWdodDpkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LGxlZnQ6MCx0b3A6MCxyaWdodDowLGJvdHRvbTowfSxpPXZvaWQgMCxyPXZvaWQgMDtpZihULmNvbnRhaW5lcilpZihULmNvbnRhaW5lciBpbnN0YW5jZW9mIE9iamVjdClpPSh0PWUoe30sdCxULmNvbnRhaW5lcikpLndpZHRoLXQubGVmdC10LnJpZ2h0LTIqVC5tYXJnaW4scj10LmhlaWdodC10LnRvcC10LmJvdHRvbS0yKlQubWFyZ2luO2Vsc2V7dmFyIGQ9KG8oVC5jb250YWluZXIpP1QuY29udGFpbmVyOmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoVC5jb250YWluZXIpKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxhPWQud2lkdGgsbT1kLmhlaWdodCxsPWQubGVmdCxjPWQudG9wO3Q9ZSh7fSx0LHt3aWR0aDphLGhlaWdodDptLGxlZnQ6bCx0b3A6Y30pfWk9aXx8dC53aWR0aC0yKlQubWFyZ2luLHI9cnx8dC5oZWlnaHQtMipULm1hcmdpbjt2YXIgdT1rLnpvb21lZEhkfHxrLm9yaWdpbmFsLHM9bih1KT9pOnUubmF0dXJhbFdpZHRofHxpLGY9bih1KT9yOnUubmF0dXJhbEhlaWdodHx8cixwPXUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksZz1wLnRvcCx2PXAubGVmdCxoPXAud2lkdGgsej1wLmhlaWdodCx5PU1hdGgubWluKE1hdGgubWF4KGgscyksaSkvaCxiPU1hdGgubWluKE1hdGgubWF4KHosZikscikveixFPU1hdGgubWluKHksYiksdz1cInNjYWxlKFwiK0UrXCIpIHRyYW5zbGF0ZTNkKFwiKygoaS1oKS8yLXYrVC5tYXJnaW4rdC5sZWZ0KS9FK1wicHgsIFwiKygoci16KS8yLWcrVC5tYXJnaW4rdC50b3ApL0UrXCJweCwgMClcIjtrLnpvb21lZC5zdHlsZS50cmFuc2Zvcm09dyxrLnpvb21lZEhkJiYoay56b29tZWRIZC5zdHlsZS50cmFuc2Zvcm09dyl9O3JldHVybiBuZXcgYygoZnVuY3Rpb24oZSl7aWYoaSYmLTE9PT14LmluZGV4T2YoaSkpZShqKTtlbHNle2lmKGsuem9vbWVkKWUoaik7ZWxzZXtpZihpKWsub3JpZ2luYWw9aTtlbHNle2lmKCEoeC5sZW5ndGg+MCkpcmV0dXJuIHZvaWQgZShqKTt2YXIgdD14O2sub3JpZ2luYWw9dFswXX1pZihrLm9yaWdpbmFsLmRpc3BhdGNoRXZlbnQoYShcIm1lZGl1bS16b29tOm9wZW5cIix7ZGV0YWlsOnt6b29tOmp9fSkpLFM9d2luZG93LnBhZ2VZT2Zmc2V0fHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wfHxkb2N1bWVudC5ib2R5LnNjcm9sbFRvcHx8MCxBPSEwLGsuem9vbWVkPWQoay5vcmlnaW5hbCksZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChOKSxULnRlbXBsYXRlKXt2YXIgbj1vKFQudGVtcGxhdGUpP1QudGVtcGxhdGU6ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihULnRlbXBsYXRlKTtrLnRlbXBsYXRlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksay50ZW1wbGF0ZS5hcHBlbmRDaGlsZChuLmNvbnRlbnQuY2xvbmVOb2RlKCEwKSksZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChrLnRlbXBsYXRlKX1pZihrLm9yaWdpbmFsLnBhcmVudEVsZW1lbnQmJlwiUElDVFVSRVwiPT09ay5vcmlnaW5hbC5wYXJlbnRFbGVtZW50LnRhZ05hbWUmJmsub3JpZ2luYWwuY3VycmVudFNyYyYmKGsuem9vbWVkLnNyYz1rLm9yaWdpbmFsLmN1cnJlbnRTcmMpLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoay56b29tZWQpLHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKGZ1bmN0aW9uKCl7ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibWVkaXVtLXpvb20tLW9wZW5lZFwiKX0pKSxrLm9yaWdpbmFsLmNsYXNzTGlzdC5hZGQoXCJtZWRpdW0tem9vbS1pbWFnZS0taGlkZGVuXCIpLGsuem9vbWVkLmNsYXNzTGlzdC5hZGQoXCJtZWRpdW0tem9vbS1pbWFnZS0tb3BlbmVkXCIpLGsuem9vbWVkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLEUpLGsuem9vbWVkLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsKGZ1bmN0aW9uIHQoKXtBPSExLGsuem9vbWVkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsdCksay5vcmlnaW5hbC5kaXNwYXRjaEV2ZW50KGEoXCJtZWRpdW0tem9vbTpvcGVuZWRcIix7ZGV0YWlsOnt6b29tOmp9fSkpLGUoail9KSksay5vcmlnaW5hbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXpvb20tc3JjXCIpKXtrLnpvb21lZEhkPWsuem9vbWVkLmNsb25lTm9kZSgpLGsuem9vbWVkSGQucmVtb3ZlQXR0cmlidXRlKFwic3Jjc2V0XCIpLGsuem9vbWVkSGQucmVtb3ZlQXR0cmlidXRlKFwic2l6ZXNcIiksay56b29tZWRIZC5yZW1vdmVBdHRyaWJ1dGUoXCJsb2FkaW5nXCIpLGsuem9vbWVkSGQuc3JjPWsuem9vbWVkLmdldEF0dHJpYnV0ZShcImRhdGEtem9vbS1zcmNcIiksay56b29tZWRIZC5vbmVycm9yPWZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbChtKSxjb25zb2xlLndhcm4oXCJVbmFibGUgdG8gcmVhY2ggdGhlIHpvb20gaW1hZ2UgdGFyZ2V0IFwiK2suem9vbWVkSGQuc3JjKSxrLnpvb21lZEhkPW51bGwscigpfTt2YXIgbT1zZXRJbnRlcnZhbCgoZnVuY3Rpb24oKXtrLnpvb21lZEhkLmNvbXBsZXRlJiYoY2xlYXJJbnRlcnZhbChtKSxrLnpvb21lZEhkLmNsYXNzTGlzdC5hZGQoXCJtZWRpdW0tem9vbS1pbWFnZS0tb3BlbmVkXCIpLGsuem9vbWVkSGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsRSksZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChrLnpvb21lZEhkKSxyKCkpfSksMTApfWVsc2UgaWYoay5vcmlnaW5hbC5oYXNBdHRyaWJ1dGUoXCJzcmNzZXRcIikpe2suem9vbWVkSGQ9ay56b29tZWQuY2xvbmVOb2RlKCksay56b29tZWRIZC5yZW1vdmVBdHRyaWJ1dGUoXCJzaXplc1wiKSxrLnpvb21lZEhkLnJlbW92ZUF0dHJpYnV0ZShcImxvYWRpbmdcIik7dmFyIGw9ay56b29tZWRIZC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLChmdW5jdGlvbigpe2suem9vbWVkSGQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixsKSxrLnpvb21lZEhkLmNsYXNzTGlzdC5hZGQoXCJtZWRpdW0tem9vbS1pbWFnZS0tb3BlbmVkXCIpLGsuem9vbWVkSGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsRSksZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChrLnpvb21lZEhkKSxyKCl9KSl9ZWxzZSByKCl9fX0pKX0sRT1mdW5jdGlvbigpe3JldHVybiBuZXcgYygoZnVuY3Rpb24oZSl7aWYoIUEmJmsub3JpZ2luYWwpe0E9ITAsZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibWVkaXVtLXpvb20tLW9wZW5lZFwiKSxrLnpvb21lZC5zdHlsZS50cmFuc2Zvcm09XCJcIixrLnpvb21lZEhkJiYoay56b29tZWRIZC5zdHlsZS50cmFuc2Zvcm09XCJcIiksay50ZW1wbGF0ZSYmKGsudGVtcGxhdGUuc3R5bGUudHJhbnNpdGlvbj1cIm9wYWNpdHkgMTUwbXNcIixrLnRlbXBsYXRlLnN0eWxlLm9wYWNpdHk9MCksay5vcmlnaW5hbC5kaXNwYXRjaEV2ZW50KGEoXCJtZWRpdW0tem9vbTpjbG9zZVwiLHtkZXRhaWw6e3pvb206an19KSksay56b29tZWQuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwoZnVuY3Rpb24gdCgpe2sub3JpZ2luYWwuY2xhc3NMaXN0LnJlbW92ZShcIm1lZGl1bS16b29tLWltYWdlLS1oaWRkZW5cIiksZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChrLnpvb21lZCksay56b29tZWRIZCYmZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChrLnpvb21lZEhkKSxkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKE4pLGsuem9vbWVkLmNsYXNzTGlzdC5yZW1vdmUoXCJtZWRpdW0tem9vbS1pbWFnZS0tb3BlbmVkXCIpLGsudGVtcGxhdGUmJmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoay50ZW1wbGF0ZSksQT0hMSxrLnpvb21lZC5yZW1vdmVFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLHQpLGsub3JpZ2luYWwuZGlzcGF0Y2hFdmVudChhKFwibWVkaXVtLXpvb206Y2xvc2VkXCIse2RldGFpbDp7em9vbTpqfX0pKSxrLm9yaWdpbmFsPW51bGwsay56b29tZWQ9bnVsbCxrLnpvb21lZEhkPW51bGwsay50ZW1wbGF0ZT1udWxsLGUoail9KSl9ZWxzZSBlKGopfSkpfSx3PWZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9LHQ9ZS50YXJnZXQ7cmV0dXJuIGsub3JpZ2luYWw/RSgpOmIoe3RhcmdldDp0fSl9LEw9ZnVuY3Rpb24oKXtyZXR1cm4gVH0sSD1mdW5jdGlvbigpe3JldHVybiB4fSxDPWZ1bmN0aW9uKCl7cmV0dXJuIGsub3JpZ2luYWx9LHg9W10sTz1bXSxBPSExLFM9MCxUPWwsaz17b3JpZ2luYWw6bnVsbCx6b29tZWQ6bnVsbCx6b29tZWRIZDpudWxsLHRlbXBsYXRlOm51bGx9O1wiW29iamVjdCBPYmplY3RdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobSk/VD1tOihtfHxcInN0cmluZ1wiPT10eXBlb2YgbSkmJnYobSksVD1lKHttYXJnaW46MCxiYWNrZ3JvdW5kOlwiI2ZmZlwiLHNjcm9sbE9mZnNldDo0MCxjb250YWluZXI6bnVsbCx0ZW1wbGF0ZTpudWxsfSxUKTt2YXIgTj1yKFQuYmFja2dyb3VuZCk7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdSksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsZiksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLHMpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsRSk7dmFyIGo9e29wZW46YixjbG9zZTpFLHRvZ2dsZTp3LHVwZGF0ZTpwLGNsb25lOmcsYXR0YWNoOnYsZGV0YWNoOmgsb246eixvZmY6eSxnZXRPcHRpb25zOkwsZ2V0SW1hZ2VzOkgsZ2V0Wm9vbWVkSW1hZ2U6Q307cmV0dXJuIGp9fSkpO1xuIiwiLyogZ2xvYmFsIGZvbGxvd1NvY2lhbE1lZGlhIG1lbnVEcm9wZG93biBsb2NhbFN0b3JhZ2UgKi9cblxuLy8gbGliXG5cblxuLy8gaW1wb3J0IGxvYWRTY3JpcHQgZnJvbSAnLi91dGlsL2xvYWQtc2NyaXB0J1xuaW1wb3J0IHVybFJlZ2V4cCBmcm9tIFwiLi91dGlsL3VybC1yZWd1bGFyLWV4cHJlc3Npb25cIjtcbmltcG9ydCBkb2NTZWxlY3RvckFsbCBmcm9tIFwiLi91dGlsL2RvY3VtZW50LXF1ZXJ5LXNlbGVjdG9yLWFsbFwiO1xuXG5jb25zdCBzaW1wbHlTZXR1cCA9ICgpID0+IHtcbiAgY29uc3Qgcm9vdEVsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBjb25zdCBkb2N1bWVudEJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG4gIC8qIE1lbnUgRHJvcERvd25cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICBjb25zdCBkcm9wRG93bk1lbnUgPSAoKSA9PiB7XG4gICAgLy8gQ2hlY2tpbmcgaWYgdGhlIHZhcmlhYmxlIGV4aXN0cyBhbmQgaWYgaXQgaXMgYW4gb2JqZWN0XG4gICAgaWYgKHR5cGVvZiBtZW51RHJvcGRvd24gIT09IFwib2JqZWN0XCIgfHwgbWVudURyb3Bkb3duID09PSBudWxsKSByZXR1cm47XG5cbiAgICAvLyBjaGVjayBpZiB0aGUgYm94IGZvciB0aGUgbWVudSBleGlzdHNcbiAgICBjb25zdCAkZHJvcGRvd25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1kcm9wZG93bi1tZW51XCIpO1xuICAgIGlmICghJGRyb3Bkb3duTWVudSkgcmV0dXJuO1xuXG4gICAgT2JqZWN0LmVudHJpZXMobWVudURyb3Bkb3duKS5mb3JFYWNoKChbbmFtZSwgdXJsXSkgPT4ge1xuICAgICAgaWYgKG5hbWUgIT09IFwic3RyaW5nXCIgJiYgIXVybFJlZ2V4cCh1cmwpKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICAgIGxpbmsuY2xhc3NMaXN0ID1cbiAgICAgICAgXCJkcm9wZG93bi1pdGVtIGJsb2NrIHB5LTIgbGVhZGluZy10aWdodCBweC01IGhvdmVyOnRleHQtcHJpbWFyeVwiO1xuICAgICAgbGluay5pbm5lclRleHQgPSBuYW1lO1xuXG4gICAgICAkZHJvcGRvd25NZW51LmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0pO1xuICB9O1xuXG4gIGRyb3BEb3duTWVudSgpO1xuXG4gIC8qIFNvY2lhbCBNZWRpYVxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIGNvbnN0IHNvY2lhbE1lZGlhID0gKCkgPT4ge1xuICAgIC8vIENoZWNraW5nIGlmIHRoZSB2YXJpYWJsZSBleGlzdHMgYW5kIGlmIGl0IGlzIGFuIG9iamVjdFxuICAgIGlmICh0eXBlb2YgZm9sbG93U29jaWFsTWVkaWEgIT09IFwib2JqZWN0XCIgfHwgZm9sbG93U29jaWFsTWVkaWEgPT09IG51bGwpXG4gICAgICByZXR1cm47XG5cbiAgICAvLyBjaGVjayBpZiB0aGUgYm94IGZvciB0aGUgbWVudSBleGlzdHNcbiAgICBjb25zdCAkc29jaWFsTWVkaWEgPSBkb2NTZWxlY3RvckFsbChcIi5qcy1zb2NpYWwtbWVkaWFcIik7XG4gICAgaWYgKCEkc29jaWFsTWVkaWEubGVuZ3RoKSByZXR1cm47XG5cbiAgICBjb25zdCBsaW5rRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gICAgICBPYmplY3QuZW50cmllcyhmb2xsb3dTb2NpYWxNZWRpYSkuZm9yRWFjaCgoW25hbWUsIHVybFRpdGxlXSkgPT4ge1xuICAgICAgICBjb25zdCB1cmwgPSB1cmxUaXRsZVswXTtcblxuICAgICAgICAvLyBUaGUgdXJsIGlzIGJlaW5nIHZhbGlkYXRlZCBpZiBpdCBpcyBmYWxzZSBpdCByZXR1cm5zXG4gICAgICAgIGlmICghdXJsUmVnZXhwKHVybCkpIHJldHVybjtcblxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICAgICAgbGluay50aXRsZSA9IHVybFRpdGxlWzFdO1xuICAgICAgICBsaW5rLmNsYXNzTGlzdCA9IFwicC0yIGlubGluZS1ibG9jayBob3ZlcjpvcGFjaXR5LTcwXCI7XG4gICAgICAgIGxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICAgICAgbGluay5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcbiAgICAgICAgbGluay5pbm5lckhUTUwgPSBgPHN2ZyBjbGFzcz1cImljb25cIj48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi0ke25hbWV9XCI+PC91c2U+PC9zdmc+YDtcblxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgICRzb2NpYWxNZWRpYS5mb3JFYWNoKGxpbmtFbGVtZW50KTtcbiAgfTtcblxuICBzb2NpYWxNZWRpYSgpO1xuXG4gIC8qICBUb2dnbGUgbW9kYWxcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAvKmNvbnN0IHNpbXBseU1vZGFsID0gKCkgPT4ge1xuICAgIGNvbnN0ICRtb2RhbHMgPSBkb2NTZWxlY3RvckFsbCgnLmpzLW1vZGFsJylcbiAgICBjb25zdCAkbW9kYWxCdXR0b25zID0gZG9jU2VsZWN0b3JBbGwoJy5qcy1tb2RhbC1idXR0b24nKVxuICAgIGNvbnN0ICRtb2RhbENsb3NlcyA9IGRvY1NlbGVjdG9yQWxsKCcuanMtbW9kYWwtY2xvc2UnKVxuXG4gICAgLy8gTW9kYWwgQ2xpY2sgT3BlblxuICAgIGlmICghJG1vZGFsQnV0dG9ucy5sZW5ndGgpIHJldHVyblxuICAgICRtb2RhbEJ1dHRvbnMuZm9yRWFjaCgkZWwgPT4gJGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3Blbk1vZGFsKCRlbC5kYXRhc2V0LnRhcmdldCkpKVxuXG4gICAgLy8gTW9kYWwgQ2xpY2sgQ2xvc2VcbiAgICBpZiAoISRtb2RhbENsb3Nlcy5sZW5ndGgpIHJldHVyblxuICAgICRtb2RhbENsb3Nlcy5mb3JFYWNoKGVsID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VNb2RhbHMoKSkpXG5cbiAgICBjb25zdCBvcGVuTW9kYWwgPSB0YXJnZXQgPT4ge1xuICAgICAgZG9jdW1lbnRCb2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1tZW51JylcbiAgICAgIGNvbnN0ICR0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXQpXG4gICAgICByb290RWwuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3ctaGlkZGVuJylcbiAgICAgICR0YXJnZXQuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJylcbiAgICB9XG5cbiAgICBjb25zdCBjbG9zZU1vZGFscyA9ICgpID0+IHtcbiAgICAgIHJvb3RFbC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy1oaWRkZW4nKVxuICAgICAgJG1vZGFscy5mb3JFYWNoKCRlbCA9PiAkZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJykpXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgY29uc3QgZSA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudFxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgY2xvc2VNb2RhbHMoKVxuICAgICAgICAvLyBjbG9zZURyb3Bkb3ducygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNpbXBseU1vZGFsKClcbiAgKi9cblxuICAvKiBIZWFkZXIgVHJhbnNwYXJlbmN5XG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgY29uc3QgaGVhZGVyVHJhbnNwYXJlbmN5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGhhc0NvdmVyID0gZG9jdW1lbnRCb2R5LmNsb3Nlc3QoXCIuaGFzLWNvdmVyXCIpO1xuICAgIGNvbnN0ICRqc0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtaGVhZGVyXCIpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcInNjcm9sbFwiLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zdCBsYXN0U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xuXG4gICAgICAgIGlmIChsYXN0U2Nyb2xsWSA+IDUpIHtcbiAgICAgICAgICAkanNIZWFkZXIuY2xhc3NMaXN0LmFkZChcInNoYWRvdy1oZWFkZXJcIiwgXCJoZWFkZXItYmdcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGpzSGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGFkb3ctaGVhZGVyXCIsIFwiaGVhZGVyLWJnXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFoYXNDb3ZlcikgcmV0dXJuO1xuXG4gICAgICAgIGxhc3RTY3JvbGxZID49IDIwXG4gICAgICAgICAgPyBkb2N1bWVudEJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImlzLWhlYWQtdHJhbnNwYXJlbnRcIilcbiAgICAgICAgICA6IGRvY3VtZW50Qm9keS5jbGFzc0xpc3QuYWRkKFwiaXMtaGVhZC10cmFuc3BhcmVudFwiKTtcbiAgICAgIH0sXG4gICAgICB7IHBhc3NpdmU6IHRydWUgfVxuICAgICk7XG4gIH07XG5cbiAgaGVhZGVyVHJhbnNwYXJlbmN5KCk7XG5cbiAgLyogRGFyayBNb2RlXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgY29uc3QgZGFya01vZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgJHRvZ2dsZURhcmtNb2RlID0gZG9jU2VsZWN0b3JBbGwoXCIuanMtZGFyay1tb2RlXCIpO1xuXG4gICAgaWYgKCEkdG9nZ2xlRGFya01vZGUubGVuZ3RoKSByZXR1cm47XG5cbiAgICAkdG9nZ2xlRGFya01vZGUuZm9yRWFjaCgoaXRlbSkgPT5cbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICghcm9vdEVsLmNsYXNzTGlzdC5jb250YWlucyhcImRhcmtcIikpIHtcbiAgICAgICAgICByb290RWwuY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnRoZW1lID0gXCJkYXJrXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm9vdEVsLmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS50aGVtZSA9IFwibGlnaHRcIjtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIGRhcmtNb2RlKCk7XG5cbiAgLyogRHJvcERvd24gVG9nZ2xlXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgY29uc3QgZHJvcERvd25NZW51VG9nZ2xlID0gKCkgPT4ge1xuICAgIGNvbnN0IGRyb3Bkb3ducyA9IGRvY1NlbGVjdG9yQWxsKFwiLmRyb3Bkb3duOm5vdCguaXMtaG92ZXJhYmxlKVwiKTtcblxuICAgIGlmICghZHJvcGRvd25zLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgZHJvcGRvd25zLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtYWN0aXZlXCIpO1xuICAgICAgICBkb2N1bWVudEJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImhhcy1tZW51XCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjbG9zZURyb3Bkb3ducyA9ICgpID0+XG4gICAgICBkcm9wZG93bnMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImlzLWFjdGl2ZVwiKTtcbiAgICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRHJvcGRvd25zKTtcbiAgfTtcblxuICBkcm9wRG93bk1lbnVUb2dnbGUoKTtcblxuICAvKiBUb2dnbGUgTWVudVxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIuanMtbWVudS10b2dnbGVcIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkb2N1bWVudEJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImhhcy1tZW51XCIpO1xuICAgIH0pO1xufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgc2ltcGx5U2V0dXApO1xuIiwiLyogZ2xvYmFsIHByaXNtSnMgKi9cblxuaW1wb3J0IFwiLi9tYWluXCI7XG5cbmltcG9ydCBtZWRpdW1ab29tIGZyb20gXCJtZWRpdW0tem9vbVwiO1xuXG5pbXBvcnQgbG9hZFNjcmlwdCBmcm9tIFwiLi91dGlsL2xvYWQtc2NyaXB0XCI7XG5pbXBvcnQgZG9jU2VsZWN0b3JBbGwgZnJvbSBcIi4vdXRpbC9kb2N1bWVudC1xdWVyeS1zZWxlY3Rvci1hbGxcIjtcblxuY29uc3Qgc2ltcGx5UG9zdCA9ICgpID0+IHtcbiAgLyogQWxsIFZpZGVvIFJlc3BvbnNpdmVcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICBjb25zdCB2aWRlb1Jlc3BvbnNpdmUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gW1xuICAgICAgJ2lmcmFtZVtzcmMqPVwicGxheWVyLnZpbWVvLmNvbVwiXScsXG4gICAgICAnaWZyYW1lW3NyYyo9XCJkYWlseW1vdGlvbi5jb21cIl0nLFxuICAgICAgJ2lmcmFtZVtzcmMqPVwieW91dHViZS5jb21cIl0nLFxuICAgICAgJ2lmcmFtZVtzcmMqPVwieW91dHViZS1ub2Nvb2tpZS5jb21cIl0nLFxuICAgICAgJ2lmcmFtZVtzcmMqPVwicGxheWVyLnR3aXRjaC50dlwiXScsXG4gICAgICAnaWZyYW1lW3NyYyo9XCJraWNrc3RhcnRlci5jb21cIl1bc3JjKj1cInZpZGVvLmh0bWxcIl0nLFxuICAgIF07XG5cbiAgICBjb25zdCAkaWZyYW1lcyA9IGRvY1NlbGVjdG9yQWxsKHNlbGVjdG9ycy5qb2luKFwiLFwiKSk7XG5cbiAgICBpZiAoISRpZnJhbWVzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgJGlmcmFtZXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJhc3BlY3QtdmlkZW9cIiwgXCJ3LWZ1bGxcIik7XG4gICAgICAvLyBjb25zdCBwYXJlbnRGb3JWaWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAvLyBwYXJlbnRGb3JWaWRlby5jbGFzc05hbWUgPSAndmlkZW8tcmVzcG9uc2l2ZSdcbiAgICAgIC8vIGVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHBhcmVudEZvclZpZGVvLCBlbClcbiAgICAgIC8vIHBhcmVudEZvclZpZGVvLmFwcGVuZENoaWxkKGVsKVxuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKFwiaGVpZ2h0XCIpO1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKFwid2lkdGhcIik7XG4gICAgfSk7XG4gIH07XG5cbiAgdmlkZW9SZXNwb25zaXZlKCk7XG5cbiAgLyogbWVkaXVtLXpvb21cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICBjb25zdCBtZWRpdW1ab29tSW1nID0gKCkgPT4ge1xuICAgIGRvY1NlbGVjdG9yQWxsKFwiLnBvc3QtYm9keSBpbWdcIikuZm9yRWFjaChcbiAgICAgIChlbCkgPT4gIWVsLmNsb3Nlc3QoXCJhXCIpICYmIGVsLmNsYXNzTGlzdC5hZGQoXCJzaW1wbHktem9vbVwiKVxuICAgICk7XG5cbiAgICBtZWRpdW1ab29tKFwiLnNpbXBseS16b29tXCIsIHtcbiAgICAgIG1hcmdpbjogMjAsXG4gICAgICBiYWNrZ3JvdW5kOiBcImhzbGEoMCwwJSwxMDAlLC44NSlcIixcbiAgICB9KTtcbiAgfTtcblxuICBtZWRpdW1ab29tSW1nKCk7XG5cbiAgLyogR2FsbGVyeSBDYXJkXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgLy8gY29uc3QgcmVzaXplSW1hZ2VzSW5HYWxsZXJpZXMgPSAoKSA9PiB7XG4gIC8vICAgY29uc3QgJGdhbGxlcnlJbWcgPSBkb2NTZWxlY3RvckFsbCgnLmtnLWdhbGxlcnktaW1hZ2UgPiBpbWcnKVxuXG4gIC8vICAgaWYgKCEkZ2FsbGVyeUltZy5sZW5ndGgpIHJldHVyblxuXG4gIC8vICAgJGdhbGxlcnlJbWcuZm9yRWFjaChpbWFnZSA9PiB7XG4gIC8vICAgICBjb25zdCBjb250YWluZXIgPSBpbWFnZS5jbG9zZXN0KCcua2ctZ2FsbGVyeS1pbWFnZScpXG4gIC8vICAgICBjb25zdCB3aWR0aCA9IGltYWdlLmF0dHJpYnV0ZXMud2lkdGgudmFsdWVcbiAgLy8gICAgIGNvbnN0IGhlaWdodCA9IGltYWdlLmF0dHJpYnV0ZXMuaGVpZ2h0LnZhbHVlXG4gIC8vICAgICBjb25zdCByYXRpbyA9IHdpZHRoIC8gaGVpZ2h0XG4gIC8vICAgICBjb250YWluZXIuc3R5bGUuZmxleCA9IHJhdGlvICsgJyAxIDAlJ1xuICAvLyAgIH0pXG4gIC8vIH1cblxuICAvLyByZXNpemVJbWFnZXNJbkdhbGxlcmllcygpXG5cbiAgLyogaGlnaGxpZ2h0IHByaXNtanNcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICBpZiAoXG4gICAgZG9jU2VsZWN0b3JBbGwoXCJjb2RlW2NsYXNzKj1sYW5ndWFnZS1dXCIpLmxlbmd0aCAmJlxuICAgIHR5cGVvZiBwcmlzbUpzICE9PSBcInVuZGVmaW5lZFwiXG4gICkge1xuICAgIGxvYWRTY3JpcHQocHJpc21Kcyk7XG4gIH1cbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHNpbXBseVBvc3QpO1xuIiwiZXhwb3J0IGRlZmF1bHQgKHNlbGVjdG9yLCBwYXJlbnQgPSBkb2N1bWVudCkgPT4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLCAwKVxuIiwiZXhwb3J0IGRlZmF1bHQgKHNyYywgY2FsbGJhY2spID0+IHtcbiAgY29uc3Qgc2NyaXB0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gIHNjcmlwdEVsZW1lbnQuc3JjID0gc3JjXG4gIHNjcmlwdEVsZW1lbnQuZGVmZXIgPSB0cnVlXG4gIHNjcmlwdEVsZW1lbnQuYXN5bmMgPSB0cnVlXG5cbiAgY2FsbGJhY2sgJiYgc2NyaXB0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgY2FsbGJhY2spXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0RWxlbWVudClcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHVybCA9PiAvXihodHRwcz86XFwvXFwvKT8oW1xcZGEtelxcLi1dKylcXC4oW2EtelxcLl17Miw2fSkoW1xcL1xcdyBcXCtcXC4tXSopKlxcLz8kLy50ZXN0KHVybCkgLy9lc2xpbnQtZGlzYWJsZS1saW5lXG4iXX0=

//# sourceMappingURL=map/post.js.map
