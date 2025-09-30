// ==UserScript==
// @name         Deselect Service Call Resources
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Deselect all the resource checkboxes from a new service call.
// @author       Ash
// @match        https://ww5.autotask.net/*/service_ticket_panel_edit.*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const resourceTable = document.getElementsByClassName(
    "service_call_render_resource_table"
  )[0];
  const previouslySelectedOptions = [];
  const resourceCheckboxes = resourceTable.getElementsByTagName("input");
  Array.prototype.forEach.call(resourceCheckboxes, (inputElement) => {
    if (inputElement.checked) {
      previouslySelectedOptions.push(inputElement);
    }
    inputElement.checked = false;
  });
  const restoreButton = document.createElement("button");
  restoreButton.innerText = "Restore Selected";
  restoreButton.addEventListener("click", (event) => {
    event.preventDefault();
    previouslySelectedOptions.forEach((checkbox) => {
      checkbox.checked = "checked";
    });
  });
  resourceTable.appendChild(restoreButton);
})();
