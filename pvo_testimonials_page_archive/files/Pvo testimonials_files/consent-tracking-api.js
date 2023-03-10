var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

!function(n){"use strict";var t,e,o,r,i;!function(n){n.TRACKING_LOADED="trackingConsentLoaded",n.TRACKING_ACCEPTED="trackingConsentAccepted",n.TRACKING_DECLINED="trackingConsentDeclined",n.TRACKING_RESET="trackingConsentReset"}(t||(t={})),function(n){n.ACCEPTED="yes",n.DECLINED="no",n.NO_INTERACTION="no_interaction",n.NO_VALUE=""}(e||(e={})),function(n){n.NO_INTERACTION="no_interaction",n.NO_VALUE="",n.ACCEPTED="1",n.DECLINED="0"}(o||(o={})),function(n){n.GDPR="GDPR",n.CCPA="CCPA",n.NO_VALUE=""}(r||(r={})),function(n){n.CCPA_BLOCK_ALL="CCPA_BLOCK_ALL",n.GDPR="GDPR",n.GDPR_BLOCK_ALL="GDPR_BLOCK_ALL",n.CCPA="CCPA"}(i||(i={}));const c=["prefs","version","consent","regulation"],u=["lim","v","con","reg"];function s(n,t){const e=t.slice().sort();return n.length===t.length&&n.slice().sort().every((n,t)=>n===e[t])}function C(){try{const n=document.cookie?document.cookie.split("; "):[];let t=void 0;if(n.forEach(n=>{const[e,o]=n.split("=");if("_tracking_consent"===decodeURIComponent(e)){var r=JSON.parse(decodeURIComponent(o));t=r}}),void 0===t||function(n){const t=Object.keys(n);return!(s(t,u)||s(t,c))}(t))return;return function(n){if(n.hasOwnProperty("version"))return!0;if(n.hasOwnProperty("v"))return!1}(t)&&(t=function(n){const t=n.prefs.limit,e=n.regulation,o=n.version;let r={};(function(n){return n.prefs.limit.includes(i.GDPR)})(n)&&(r={GDPR:E(n.consent)});return{con:r,reg:e,v:o,lim:t}}(t)),t}catch(n){return}}function a(){const n=C();return l(n)?o.NO_VALUE:n.con.GDPR}function f(){const n=C();return l(n)?o.NO_VALUE:n.con.CCPA}function l(n=null){return null===n&&(n=C()),void 0===n}function E(n){switch(n){case e.ACCEPTED:return o.ACCEPTED;case e.DECLINED:return o.DECLINED;default:return o.NO_VALUE}}const A={GDPR:[i.GDPR,i.GDPR_BLOCK_ALL],CCPA:[i.CCPA_BLOCK_ALL,i.CCPA]};function L(n,t,e){const o=new XMLHttpRequest,r="https://"+document.location.host+"/set_tracking_consent.json",i=JSON.stringify(n);o.open("POST",r,!0),o.setRequestHeader("Content-Type","application/json"),o.onreadystatechange=function(){if(4!==o.readyState)return;const n=0===o.status||200>=o.status&&o.status<400;let r;try{r=JSON.parse(o.responseText)}catch(n){r={error:"Unknown error"}}n?(e&&document.dispatchEvent(new CustomEvent(e,{detail:{}})),t(null,r)):t(r)},o.send(i)}function P(n,e){if(l()){const n="Shop is not configured to block privacy regulation in online store settings.";return console.warn(n),e({error:n})}if("boolean"!=typeof n)throw TypeError("setTrackingConsent must be called with a boolean consent value");if("function"!=typeof e)throw TypeError("setTrackingConsent must be called with a callback function");const o=function(n){if(!T(i.GDPR_BLOCK_ALL)||!n)return null;return p()?document.referrer:""}(n),r=function(n){if(!T(i.GDPR_BLOCK_ALL)||!n)return null;return p()?window.location.pathname+window.location.search:"/"}(n);return L(Object.assign(Object.assign({consent:n},null!==o&&{referrer:o}),null!==r&&{landing_page:r}),e,n?t.TRACKING_ACCEPTED:t.TRACKING_DECLINED)}function _(n,t){if("boolean"!=typeof n)throw TypeError("setCCPAConsent must be called with a boolean consent value");if("function"!=typeof t)throw TypeError("setCCPAConsent must be called with a callback function");return L({ccpa_consent:n},t)}function d(n){return l()?e.NO_VALUE:n===o.NO_VALUE?e.NO_INTERACTION:function(n){switch(n){case o.ACCEPTED:return e.ACCEPTED;case o.DECLINED:return e.DECLINED;default:return e.NO_VALUE}}(n)}function D(){return d(a())}function N(){const n=function(){const n=C();return l(n)?r.NO_VALUE:n.reg}();return n in r?n:r.NO_VALUE}function O(){return function(){const n=C();return l(n)?{limit:[]}:{limit:n.lim}}()}function p(){if(""===document.referrer)return!0;const n=document.createElement("a");return n.href=document.referrer,window.location.hostname!=n.hostname}function h(){const n=N();if(n===r.NO_VALUE)return!1;const t=O();return 0!==t.limit.length&&t.limit.some(t=>function(n,t){return A[n].includes(t)}(n,t))}function R(){return!!l()||function(){if(!T(i.GDPR)&&!T(i.GDPR_BLOCK_ALL))return!0;switch(a()){case o.ACCEPTED:return!0;case o.DECLINED:return!1;case o.NO_VALUE:return N()!==r.GDPR}}()}function T(n){return O().limit.includes(n)}function w(){return!!l()||!1!==R()&&function(){if(T(i.CCPA_BLOCK_ALL)){return N()!==r.CCPA}if(T(i.CCPA)){return f()!==o.DECLINED}return!0}()}function g(){return N()===r.GDPR&&h()&&D()===e.NO_INTERACTION}function m(){return d(f())}function I(){return N()===r.CCPA&&O().limit.includes(i.CCPA)&&m()===e.NO_INTERACTION}function y(){return{getTrackingConsent:D,setTrackingConsent:P,userCanBeTracked:R,getRegulation:N,isRegulationEnforced:h,getShopPrefs:O,shouldShowGDPRBanner:g,userDataCanBeSold:w,setCCPAConsent:_,getCCPAConsent:m,shouldShowCCPABanner:I}}window.Shopify=window.Shopify?window.Shopify:{},window.Shopify.customerPrivacy=window.Shopify.trackingConsent=y(),n.shopifyConsentAPI=y,Object.defineProperty(n,"__esModule",{value:!0})}({});


}
/*
     FILE ARCHIVED ON 16:07:52 May 19, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:07:03 Jan 19, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.081
  exclusion.robots.policy: 0.073
  cdx.remote: 0.105
  esindex: 0.009
  LoadShardBlock: 126.048 (6)
  PetaboxLoader3.datanode: 165.012 (8)
  CDXLines.iter: 24.269 (3)
  load_resource: 280.377 (2)
  PetaboxLoader3.resolve: 99.083 (2)
*/