// ==UserScript==
// @name         eyny-captcha
// @version      0.1
// @description  伊莉回復自動填入驗證答案
// @author       oddstab
// @match        http*://*.eyny.com/thread*
// @grant        none
// @run-at       document-body
// ==/UserScript==

(function () {
  'use strict';
  let timer = setInterval(() => {
    let input = document.querySelector("input[name*=secanswer]")
    input.value = "eyny";
  }, 1);
})();