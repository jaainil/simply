(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],2:[function(require,module,exports){
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

},{"./util/document-query-selector-all":3,"./util/url-regular-expression":4,"@babel/runtime/helpers/interopRequireDefault":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = (selector, parent = document) => Array.prototype.slice.call(parent.querySelectorAll(selector), 0);
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = url => /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \+\.-]*)*\/?$/.test(url); //eslint-disable-line
exports.default = _default;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJzcmMvanMvbWFpbi5qcyIsInNyYy9qcy91dGlsL2RvY3VtZW50LXF1ZXJ5LXNlbGVjdG9yLWFsbC5qcyIsInNyYy9qcy91dGlsL3VybC1yZWd1bGFyLWV4cHJlc3Npb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDQ0EsSUFBQSxxQkFBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQUNBLElBQUEseUJBQUEsR0FBQSxzQkFBQSxDQUFBLE9BQUE7QUFQQTs7QUFFQTs7QUFHQTs7QUFJQSxNQUFNLFdBQVcsR0FBRyxDQUFBLEtBQU07RUFDeEIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGVBQWU7RUFDdkMsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLElBQUk7O0VBRWxDO0FBQ0Y7RUFDRSxNQUFNLFlBQVksR0FBRyxDQUFBLEtBQU07SUFDekI7SUFDQSxJQUFJLE9BQU8sWUFBWSxLQUFLLFFBQVEsSUFBSSxZQUFZLEtBQUssSUFBSSxFQUFFOztJQUUvRDtJQUNBLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7SUFDakUsSUFBSSxDQUFDLGFBQWEsRUFBRTtJQUVwQixNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLO01BQ3BELElBQUksSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUEsNkJBQVMsRUFBQyxHQUFHLENBQUMsRUFBRTtNQUUxQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQztNQUN4QyxJQUFJLENBQUMsSUFBSSxH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OUIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ2xDLENBQUMsQ0FBQztJQUVKLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDO0VBQ3BELENBQUM7RUFFRCxrQkFBa0IsQ0FBQyxDQUFDOztFQUVwQjtBQUNGO0VBQ0UsUUFBUSxDQUNMLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUNoQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEVBQUU7SUFDdEMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztFQUMzQyxDQUFDLENBQUM7QUFDTixDQUFDO0FBRUQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQzs7Ozs7Ozs7O2VDeE0zQyxDQUFDLFFBQVEsRUFBRSxNQUFNLEdBQUcsUUFBUSxLQUFLLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQUEsT0FBQSxDQUFBLE9BQUEsR0FBQSxRQUFBOzs7Ozs7Ozs7ZUNBakcsR0FBRyxJQUFJLGtFQUFrRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQztBQUFBLE9BQUEsQ0FBQSxPQUFBLEdBQUEsUUFBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoZSkge1xuICByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDoge1xuICAgIFwiZGVmYXVsdFwiOiBlXG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvKiBnbG9iYWwgZm9sbG93U29jaWFsTWVkaWEgbWVudURyb3Bkb3duIGxvY2FsU3RvcmFnZSAqL1xuXG4vLyBsaWJcblxuXG4vLyBpbXBvcnQgbG9hZFNjcmlwdCBmcm9tICcuL3V0aWwvbG9hZC1zY3JpcHQnXG5pbXBvcnQgdXJsUmVnZXhwIGZyb20gXCIuL3V0aWwvdXJsLXJlZ3VsYXItZXhwcmVzc2lvblwiO1xuaW1wb3J0IGRvY1NlbGVjdG9yQWxsIGZyb20gXCIuL3V0aWwvZG9jdW1lbnQtcXVlcnktc2VsZWN0b3ItYWxsXCI7XG5cbmNvbnN0IHNpbXBseVNldHVwID0gKCkgPT4ge1xuICBjb25zdCByb290RWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGNvbnN0IGRvY3VtZW50Qm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbiAgLyogTWVudSBEcm9wRG93blxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIGNvbnN0IGRyb3BEb3duTWVudSA9ICgpID0+IHtcbiAgICAvLyBDaGVja2luZyBpZiB0aGUgdmFyaWFibGUgZXhpc3RzIGFuZCBpZiBpdCBpcyBhbiBvYmplY3RcbiAgICBpZiAodHlwZW9mIG1lbnVEcm9wZG93biAhPT0gXCJvYmplY3RcIiB8fCBtZW51RHJvcGRvd24gPT09IG51bGwpIHJldHVybjtcblxuICAgIC8vIGNoZWNrIGlmIHRoZSBib3ggZm9yIHRoZSBtZW51IGV4aXN0c1xuICAgIGNvbnN0ICRkcm9wZG93bk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWRyb3Bkb3duLW1lbnVcIik7XG4gICAgaWYgKCEkZHJvcGRvd25NZW51KSByZXR1cm47XG5cbiAgICBPYmplY3QuZW50cmllcyhtZW51RHJvcGRvd24pLmZvckVhY2goKFtuYW1lLCB1cmxdKSA9PiB7XG4gICAgICBpZiAobmFtZSAhPT0gXCJzdHJpbmdcIiAmJiAhdXJsUmVnZXhwKHVybCkpIHJldHVybjtcblxuICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgbGluay5ocmVmID0gdXJsO1xuICAgICAgbGluay5jbGFzc0xpc3QgPVxuICAgICAgICBcImRyb3Bkb3duLWl0ZW0gYmxvY2sgcHktMiBsZWFkaW5nLXRpZ2h0IHB4LTUgaG92ZXI6dGV4dC1wcmltYXJ5XCI7XG4gICAgICBsaW5rLmlubmVyVGV4dCA9IG5hbWU7XG5cbiAgICAgICRkcm9wZG93bk1lbnUuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfSk7XG4gIH07XG5cbiAgZHJvcERvd25NZW51KCk7XG5cbiAgLyogU29jaWFsIE1lZGlhXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgY29uc3Qgc29jaWFsTWVkaWEgPSAoKSA9PiB7XG4gICAgLy8gQ2hlY2tpbmcgaWYgdGhlIHZhcmlhYmxlIGV4aXN0cyBhbmQgaWYgaXQgaXMgYW4gb2JqZWN0XG4gICAgaWYgKHR5cGVvZiBmb2xsb3dTb2NpYWxNZWRpYSAhPT0gXCJvYmplY3RcIiB8fCBmb2xsb3dTb2NpYWxNZWRpYSA9PT0gbnVsbClcbiAgICAgIHJldHVybjtcblxuICAgIC8vIGNoZWNrIGlmIHRoZSBib3ggZm9yIHRoZSBtZW51IGV4aXN0c1xuICAgIGNvbnN0ICRzb2NpYWxNZWRpYSA9IGRvY1NlbGVjdG9yQWxsKFwiLmpzLXNvY2lhbC1tZWRpYVwiKTtcbiAgICBpZiAoISRzb2NpYWxNZWRpYS5sZW5ndGgpIHJldHVybjtcblxuICAgIGNvbnN0IGxpbmtFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKGZvbGxvd1NvY2lhbE1lZGlhKS5mb3JFYWNoKChbbmFtZSwgdXJsVGl0bGVdKSA9PiB7XG4gICAgICAgIGNvbnN0IHVybCA9IHVybFRpdGxlWzBdO1xuXG4gICAgICAgIC8vIFRoZSB1cmwgaXMgYmVpbmcgdmFsaWRhdGVkIGlmIGl0IGlzIGZhbHNlIGl0IHJldHVybnNcbiAgICAgICAgaWYgKCF1cmxSZWdleHAodXJsKSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgbGluay5ocmVmID0gdXJsO1xuICAgICAgICBsaW5rLnRpdGxlID0gdXJsVGl0bGVbMV07XG4gICAgICAgIGxpbmsuY2xhc3NMaXN0ID0gXCJwLTIgaW5saW5lLWJsb2NrIGhvdmVyOm9wYWNpdHktNzBcIjtcbiAgICAgICAgbGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgICAgICBsaW5rLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuICAgICAgICBsaW5rLmlubmVySFRNTCA9IGA8c3ZnIGNsYXNzPVwiaWNvblwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLSR7bmFtZX1cIj48L3VzZT48L3N2Zz5gO1xuXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgJHNvY2lhbE1lZGlhLmZvckVhY2gobGlua0VsZW1lbnQpO1xuICB9O1xuXG4gIHNvY2lhbE1lZGlhKCk7XG5cbiAgLyogIFRvZ2dsZSBtb2RhbFxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIC8qY29uc3Qgc2ltcGx5TW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgJG1vZGFscyA9IGRvY1NlbGVjdG9yQWxsKCcuanMtbW9kYWwnKVxuICAgIGNvbnN0ICRtb2RhbEJ1dHRvbnMgPSBkb2NTZWxlY3RvckFsbCgnLmpzLW1vZGFsLWJ1dHRvbicpXG4gICAgY29uc3QgJG1vZGFsQ2xvc2VzID0gZG9jU2VsZWN0b3JBbGwoJy5qcy1tb2RhbC1jbG9zZScpXG5cbiAgICAvLyBNb2RhbCBDbGljayBPcGVuXG4gICAgaWYgKCEkbW9kYWxCdXR0b25zLmxlbmd0aCkgcmV0dXJuXG4gICAgJG1vZGFsQnV0dG9ucy5mb3JFYWNoKCRlbCA9PiAkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuTW9kYWwoJGVsLmRhdGFzZXQudGFyZ2V0KSkpXG5cbiAgICAvLyBNb2RhbCBDbGljayBDbG9zZVxuICAgIGlmICghJG1vZGFsQ2xvc2VzLmxlbmd0aCkgcmV0dXJuXG4gICAgJG1vZGFsQ2xvc2VzLmZvckVhY2goZWwgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZU1vZGFscygpKSlcblxuICAgIGNvbnN0IG9wZW5Nb2RhbCA9IHRhcmdldCA9PiB7XG4gICAgICBkb2N1bWVudEJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLW1lbnUnKVxuICAgICAgY29uc3QgJHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldClcbiAgICAgIHJvb3RFbC5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy1oaWRkZW4nKVxuICAgICAgJHRhcmdldC5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKVxuICAgIH1cblxuICAgIGNvbnN0IGNsb3NlTW9kYWxzID0gKCkgPT4ge1xuICAgICAgcm9vdEVsLmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LWhpZGRlbicpXG4gICAgICAkbW9kYWxzLmZvckVhY2goJGVsID0+ICRlbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKSlcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBjb25zdCBlID0gZXZlbnQgfHwgd2luZG93LmV2ZW50XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICBjbG9zZU1vZGFscygpXG4gICAgICAgIC8vIGNsb3NlRHJvcGRvd25zKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2ltcGx5TW9kYWwoKVxuICAqL1xuXG4gIC8qIEhlYWRlciBUcmFuc3BhcmVuY3lcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICBjb25zdCBoZWFkZXJUcmFuc3BhcmVuY3kgPSAoKSA9PiB7XG4gICAgY29uc3QgaGFzQ292ZXIgPSBkb2N1bWVudEJvZHkuY2xvc2VzdChcIi5oYXMtY292ZXJcIik7XG4gICAgY29uc3QgJGpzSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1oZWFkZXJcIik7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwic2Nyb2xsXCIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhc3RTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XG5cbiAgICAgICAgaWYgKGxhc3RTY3JvbGxZID4gNSkge1xuICAgICAgICAgICRqc0hlYWRlci5jbGFzc0xpc3QuYWRkKFwic2hhZG93LWhlYWRlclwiLCBcImhlYWRlci1iZ1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkanNIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcInNoYWRvdy1oZWFkZXJcIiwgXCJoZWFkZXItYmdcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWhhc0NvdmVyKSByZXR1cm47XG5cbiAgICAgICAgbGFzdFNjcm9sbFkgPj0gMjBcbiAgICAgICAgICA/IGRvY3VtZW50Qm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaGVhZC10cmFuc3BhcmVudFwiKVxuICAgICAgICAgIDogZG9jdW1lbnRCb2R5LmNsYXNzTGlzdC5hZGQoXCJpcy1oZWFkLXRyYW5zcGFyZW50XCIpO1xuICAgICAgfSxcbiAgICAgIHsgcGFzc2l2ZTogdHJ1ZSB9XG4gICAgKTtcbiAgfTtcblxuICBoZWFkZXJUcmFuc3BhcmVuY3koKTtcblxuICAvKiBEYXJrIE1vZGVcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICBjb25zdCBkYXJrTW9kZSA9ICgpID0+IHtcbiAgICBjb25zdCAkdG9nZ2xlRGFya01vZGUgPSBkb2NTZWxlY3RvckFsbChcIi5qcy1kYXJrLW1vZGVcIik7XG5cbiAgICBpZiAoISR0b2dnbGVEYXJrTW9kZS5sZW5ndGgpIHJldHVybjtcblxuICAgICR0b2dnbGVEYXJrTW9kZS5mb3JFYWNoKChpdGVtKSA9PlxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCFyb290RWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFya1wiKSkge1xuICAgICAgICAgIHJvb3RFbC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UudGhlbWUgPSBcImRhcmtcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb290RWwuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIik7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnRoZW1lID0gXCJsaWdodFwiO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgZGFya01vZGUoKTtcblxuICAvKiBEcm9wRG93biBUb2dnbGVcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICBjb25zdCBkcm9wRG93bk1lbnVUb2dnbGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZHJvcGRvd25zID0gZG9jU2VsZWN0b3JBbGwoXCIuZHJvcGRvd246bm90KC5pcy1ob3ZlcmFibGUpXCIpO1xuXG4gICAgaWYgKCFkcm9wZG93bnMubGVuZ3RoKSByZXR1cm47XG5cbiAgICBkcm9wZG93bnMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1hY3RpdmVcIik7XG4gICAgICAgIGRvY3VtZW50Qm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiaGFzLW1lbnVcIik7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNsb3NlRHJvcGRvd25zID0gKCkgPT5cbiAgICAgIGRyb3Bkb3ducy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtYWN0aXZlXCIpO1xuICAgICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VEcm9wZG93bnMpO1xuICB9O1xuXG4gIGRyb3BEb3duTWVudVRvZ2dsZSgpO1xuXG4gIC8qIFRvZ2dsZSBNZW51XG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIi5qcy1tZW51LXRvZ2dsZVwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRvY3VtZW50Qm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiaGFzLW1lbnVcIik7XG4gICAgfSk7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBzaW1wbHlTZXR1cCk7XG4iLCJleHBvcnQgZGVmYXVsdCAoc2VsZWN0b3IsIHBhcmVudCA9IGRvY3VtZW50KSA9PiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksIDApXG4iLCJleHBvcnQgZGVmYXVsdCB1cmwgPT4gL14oaHR0cHM/OlxcL1xcLyk/KFtcXGRhLXpcXC4tXSspXFwuKFthLXpcXC5dezIsNn0pKFtcXC9cXHcgXFwrXFwuLV0qKSpcXC8/JC8udGVzdCh1cmwpIC8vZXNsaW50LWRpc2FibGUtbGluZVxuIl19

//# sourceMappingURL=map/main.js.map
