// ==UserScript==
// @name         ADFS Prepend Domain
// @namespace    http://your.homepage/
// @version      0.1
// @description  Automaticall Prepend the Domain in the ADFS login form.
// @author       You
// @match        https://adfs.finra.org/adfs/ls/IdpInitiatedSignOn.aspx*
// @grant        none
// ==/UserScript==
form = document.forms['loginForm'];
form.elements["userNameInput"].value = "nasdcorp\\";