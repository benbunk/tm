//==UserScript==
// @name Redirect AWS Login on Logout
// @description Redirect AWS Login to ADFS Login
// @version    2.0
// @include https://www.amazon.com/ap/signin*
// @include https://signin.aws.amazon.com/oauth*
// @run-at document-start
//==/UserScript==
window.location.replace("https://adfs.finra.org/adfs/ls/IdpInitiatedSignOn.aspx?loginToRp=urn:amazon:webservices");