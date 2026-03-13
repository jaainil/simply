(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

/* Add Link in the Title for custom-kusi-doc.hbs
/* ---------------------------------------------------------- */
const setup = () => {
  // Return if no post box exists
  const markdown = document.querySelector(".js-kusi-doc");
  if (!markdown) return;

  // Search the titles in the post
  // Return if no title exists
  const argTitles = ["h2", "h3"];
  const titles = markdown.querySelectorAll(argTitles.join(","));
  if (!titles.length) return;

  // Table of Contents Box
  const jsTableOfContent = document.querySelector(".js-table-content");
  const sidebar = document.querySelector(".js-sidebar-right");
  if (sidebar) sidebar.classList.add("lg:block");

  // Table of Content sidebar right
  function tableOfContent(link, el) {
    if (!jsTableOfContent) return;
    link.textContent = el.textContent;
    const tocList = document.createElement("li");
    if (el.closest("h3")) {
      link.classList = "py-2 px-3 docstoc block hover:text-primary";
    } else {
      link.classList = "py-2 px-3 block hover:text-primary";
    }
    tocList.appendChild(link);
    jsTableOfContent.appendChild(tocList);
  }

  // Links To Titles
  function linkToTile(link, el) {
    link.setAttribute("aria-hidden", "true");
    link.innerHTML = '<svg class="icon is-stroke" aria-hidden="true"><use xlink:href="#icon-link"></use></svg>';
    link.classList = "anchor px-3 inline-block invisible opacity-0 -ml-12 text-gray-500";
    el.insertBefore(link, el.childNodes[0]);
  }
  titles.forEach(el => {
    el.classList = "hover-title";
    const titleLink = document.createElement("a");
    titleLink.href = `#${el.getAttribute("id")}`;

    // Table of Content
    tableOfContent(titleLink.cloneNode(true), el);

    // Link To Title
    linkToTile(titleLink, el);
  });
};
document.addEventListener("DOMContentLoaded", setup);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMva3VzaS1kb2MtcG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7QUFDQTtBQUNBLE1BQU0sS0FBSyxHQUFHLENBQUEsS0FBTTtFQUNsQjtFQUNBLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO0VBQ3ZELElBQUksQ0FBQyxRQUFRLEVBQUU7O0VBRWY7RUFDQTtFQUNBLE1BQU0sU0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztFQUM5QixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUU3RCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTs7RUFFcEI7RUFDQSxNQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7RUFDcEUsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztFQUUzRCxJQUFJLE9BQU8sRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7O0VBRTlDO0VBQ0EsU0FBUyxjQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRTtJQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7SUFFdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsV0FBVztJQUVqQyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztJQUU1QyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7TUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyw0Q0FBNEM7SUFDL0QsQ0FBQyxNQUFNO01BQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQ0FBb0M7SUFDdkQ7SUFFQSxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztJQUN6QixnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO0VBQ3ZDOztFQUVBO0VBQ0EsU0FBUyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRTtJQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUM7SUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FDWiwwRkFBMEY7SUFDNUYsSUFBSSxDQUFDLFNBQVMsR0FDWixtRUFBbUU7SUFFckUsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN6QztFQUVBLE1BQU0sQ0FBQyxPQUFPLENBQUUsRUFBRSxJQUFLO0lBQ3JCLEVBQUUsQ0FBQyxTQUFTLEdBQUcsYUFBYTtJQUU1QixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQztJQUM3QyxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRTs7SUFFNUM7SUFDQSxjQUFjLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7O0lBRTdDO0lBQ0EsVUFBVSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7RUFDM0IsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKiBBZGQgTGluayBpbiB0aGUgVGl0bGUgZm9yIGN1c3RvbS1rdXNpLWRvYy5oYnNcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbmNvbnN0IHNldHVwID0gKCkgPT4ge1xuICAvLyBSZXR1cm4gaWYgbm8gcG9zdCBib3ggZXhpc3RzXG4gIGNvbnN0IG1hcmtkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1rdXNpLWRvY1wiKTtcbiAgaWYgKCFtYXJrZG93bikgcmV0dXJuO1xuXG4gIC8vIFNlYXJjaCB0aGUgdGl0bGVzIGluIHRoZSBwb3N0XG4gIC8vIFJldHVybiBpZiBubyB0aXRsZSBleGlzdHNcbiAgY29uc3QgYXJnVGl0bGVzID0gW1wiaDJcIiwgXCJoM1wiXTtcbiAgY29uc3QgdGl0bGVzID0gbWFya2Rvd24ucXVlcnlTZWxlY3RvckFsbChhcmdUaXRsZXMuam9pbihcIixcIikpO1xuXG4gIGlmICghdGl0bGVzLmxlbmd0aCkgcmV0dXJuO1xuXG4gIC8vIFRhYmxlIG9mIENvbnRlbnRzIEJveFxuICBjb25zdCBqc1RhYmxlT2ZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy10YWJsZS1jb250ZW50XCIpO1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1zaWRlYmFyLXJpZ2h0XCIpO1xuXG4gIGlmIChzaWRlYmFyKSBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJsZzpibG9ja1wiKTtcblxuICAvLyBUYWJsZSBvZiBDb250ZW50IHNpZGViYXIgcmlnaHRcbiAgZnVuY3Rpb24gdGFibGVPZkNvbnRlbnQobGluaywgZWwpIHtcbiAgICBpZiAoIWpzVGFibGVPZkNvbnRlbnQpIHJldHVybjtcblxuICAgIGxpbmsudGV4dENvbnRlbnQgPSBlbC50ZXh0Q29udGVudDtcblxuICAgIGNvbnN0IHRvY0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgICBpZiAoZWwuY2xvc2VzdChcImgzXCIpKSB7XG4gICAgICBsaW5rLmNsYXNzTGlzdCA9IFwicHktMiBweC0zIGRvY3N0b2MgYmxvY2sgaG92ZXI6dGV4dC1wcmltYXJ5XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmsuY2xhc3NMaXN0ID0gXCJweS0yIHB4LTMgYmxvY2sgaG92ZXI6dGV4dC1wcmltYXJ5XCI7XG4gICAgfVxuXG4gICAgdG9jTGlzdC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICBqc1RhYmxlT2ZDb250ZW50LmFwcGVuZENoaWxkKHRvY0xpc3QpO1xuICB9XG5cbiAgLy8gTGlua3MgVG8gVGl0bGVzXG4gIGZ1bmN0aW9uIGxpbmtUb1RpbGUobGluaywgZWwpIHtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcbiAgICBsaW5rLmlubmVySFRNTCA9XG4gICAgICAnPHN2ZyBjbGFzcz1cImljb24gaXMtc3Ryb2tlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tbGlua1wiPjwvdXNlPjwvc3ZnPic7XG4gICAgbGluay5jbGFzc0xpc3QgPVxuICAgICAgXCJhbmNob3IgcHgtMyBpbmxpbmUtYmxvY2sgaW52aXNpYmxlIG9wYWNpdHktMCAtbWwtMTIgdGV4dC1ncmF5LTUwMFwiO1xuXG4gICAgZWwuaW5zZXJ0QmVmb3JlKGxpbmssIGVsLmNoaWxkTm9kZXNbMF0pO1xuICB9XG5cbiAgdGl0bGVzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuY2xhc3NMaXN0ID0gXCJob3Zlci10aXRsZVwiO1xuXG4gICAgY29uc3QgdGl0bGVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgdGl0bGVMaW5rLmhyZWYgPSBgIyR7ZWwuZ2V0QXR0cmlidXRlKFwiaWRcIil9YDtcblxuICAgIC8vIFRhYmxlIG9mIENvbnRlbnRcbiAgICB0YWJsZU9mQ29udGVudCh0aXRsZUxpbmsuY2xvbmVOb2RlKHRydWUpLCBlbCk7XG5cbiAgICAvLyBMaW5rIFRvIFRpdGxlXG4gICAgbGlua1RvVGlsZSh0aXRsZUxpbmssIGVsKTtcbiAgfSk7XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBzZXR1cCk7XG4iXX0=

//# sourceMappingURL=map/kusi-doc-post.js.map
