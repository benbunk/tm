//==UserScript==
// @name Redirect AWS Region
// @description Redirect AWS Region to US East
// @version    2.0
// @include https://console.aws.amazon.com/console/home*
// @run-at document-start
//==/UserScript==
window.location.replace("https://console.aws.amazon.com/ec2/v2/home?region=us-east-1");