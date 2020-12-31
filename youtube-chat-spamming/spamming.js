// ==UserScript==
// @name         youtube-chat-spamming
// @version      0.1
// @description  在youtube聊天室洗頻
// @author       oddstab
// @match        https://www.youtube.com/live_chat?is_popout=*v=*
// @grant        none
// ==/UserScript==

let garbages = [
  "祝各位天天吃萊🐷",
  "在座的各位都是X圾在座的各位都是X圾",
  "中國武漢肺炎",
  "萊🐷超健康，大家快吃",
  "這些人通通都是他媽的防疫破口"
];

(function () {
  'use strict';
  run();
})();

function run() {
  setInterval(() => {
    let container = document.querySelector("#input")
    let textbox = container.querySelector("#input")

    let newGarbage = "";
    let count = getRandom(1, 10);
    let garbageMessage = garbages[getRandom(0, garbages.length)]
    console.log(garbageMessage);

    for (let i = 0;i < count;i++) {
      if (newGarbage.length < 200 && (newGarbage + garbageMessage).length < 200) {
        newGarbage += garbageMessage + " ";
      } else {
        break;
      }
    }

    textbox.textContent = newGarbage;
    var event = document.createEvent("HTMLEvents");
    event.initEvent("input", true, false);
    textbox.dispatchEvent(event);

    let button = document.querySelectorAll("yt-icon-button#button")[1].querySelector("#button");
    button.click();

  }, getRandom(1500, 4000));
}

function getRandom(min, max) {
  return Math.floor(Math.random() * max) + min;
};