// ==UserScript==
// @name         Deselect Service Call Resources
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Deselect all the resource checkboxes from a new service call.
// @author       Ash
// @match        https://ww5.autotask.net/Autotask/views/ServiceDesk/ServiceDeskTicket/service_ticket_panel_edit.aspx?ticketRenderType=ServiceCall&action=3&ticketID=*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const resourceTable = document.getElementsByClassName(
    "service_call_render_resource_table"
  )[0];
  const resourceCheckboxes = resourceTable.getElementsByTagName("input");
  Array.prototype.forEach.call(
    resourceCheckboxes,
    (inputElement) => (inputElement.checked = false)
  );
})();
