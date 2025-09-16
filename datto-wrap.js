// ==UserScript==
// @name         Wrap Datto Tables
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Make the text in cells of datto tables wrap, like it did on the old UI.
// @author       Ash
// @match        https://concord.rmm.datto.com/site*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
    const style = document.createElement("style");
    style.id = "Tamper-Inject";
    document.head.appendChild(style);
    const sheet = style.sheet;
    try {
      sheet.insertRule(
        ".ant-table-cell-ellipsis { white-space: normal !important; }",
        sheet.cssRules.length
      );
      console.log("White-space style rule successfully added!");
    } catch (e) {
      console.error("Failed to insert white-space rule:", e);
    }
})();
