// ==UserScript==
// @name         Clean Autotask Tab Titles (Full Removal)
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Remove "Ticket - TICKETID " style strings from autotask.net tab titles
// @match        *://*.autotask.net/*
// @author       Peter and Ash
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const ticketRegex = /Ticket - T\d{8}\.\d{4}(?:\s*-\s*)?/;
  const accountIdRegex = /Account - ID \d{8}\s*-\s*/i;

  let title = document.title
      .replace(ticketRegex, '')
      .replace(accountIdRegex, 'Acc. ')
      .trim();

  if (title === 'view_account_site_configuration') {
      const secondaryTitleElement = document.querySelector('.SecondaryTitle');
      if (secondaryTitleElement && secondaryTitleElement.textContent.trim() !== '') {
          let secondaryTitle = secondaryTitleElement.textContent.trim();
          // Remove leading dash and any following spaces
          secondaryTitle = secondaryTitle.replace(/^-+\s*/, '');
          title = `Site Config - ${secondaryTitle}`;
      }
  }

  document.title = title;
})();