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

(function(){window.geoip2=function(){"use strict";var l={};function a(e,r,s,n){this.successCallback=e,this.errorCallback=r,this.type=n}a.prototype.returnSuccess=function(e){this.successCallback&&typeof this.successCallback=="function"&&this.successCallback(this.fillInObject(JSON.parse(e)))},a.prototype.returnError=function(e){this.errorCallback&&typeof this.errorCallback=="function"&&(e||(e={error:"Unknown error"}),this.errorCallback(e))};var h={country:[["continent","Object","names","Object"],["country","Object","names","Object"],["registered_country","Object","names","Object"],["represented_country","Object","names","Object"],["traits","Object"]],city:[["city","Object","names","Object"],["continent","Object","names","Object"],["country","Object","names","Object"],["location","Object"],["postal","Object"],["registered_country","Object","names","Object"],["represented_country","Object","names","Object"],["subdivisions","Array",0,"Object","names","Object"],["traits","Object"]]};return a.prototype.fillInObject=function(e){for(var r=this.type==="country"?h.country:h.city,s=0;s<r.length;s++)for(var n=r[s],o=e,t=0;t<n.length;t+=2){var c=n[t];o[c]||(o[c]=n[t+1]==="Object"?{}:[]),o=o[c]}try{Object.defineProperty(e.continent,"continent_code",{enumerable:!1,get:function(){return this.code},set:function(i){this.code=i}})}catch(i){e.continent.code&&(e.continent.continent_code=e.continent.code)}if(this.type!=="country")try{Object.defineProperty(e,"most_specific_subdivision",{enumerable:!1,get:function(){return this.subdivisions[this.subdivisions.length-1]},set:function(i){this.subdivisions[this.subdivisions.length-1]=i}})}catch(i){e.most_specific_subdivision=e.subdivisions[e.subdivisions.length-1]}return e},a.prototype.getGeoIPResult=function(){var e,r=window.location.hostname,s=r.split(".").reverse();s[1]==="maxmind"&&(s[0]==="com"||s[0]==="dev")&&r!=="www.maxmind.com"&&(e=r);var n=this,o,t=new window.XMLHttpRequest,c="https://"+(e||"geoip-js.com")+"/geoip/v2.1/"+this.type+"/me?",i={referrer:location.protocol+"//"+location.hostname};if(!this.alreadyRan){this.alreadyRan=1;for(o in i)i.hasOwnProperty(o)&&i[o]&&(c+=o+"="+encodeURIComponent(i[o])+"&");c=c.substring(0,c.length-1),t.open("GET",c,!0),t.onload=function(){if(typeof t.status=="undefined"||t.status===200)n.returnSuccess(t.responseText);else{var d=t.hasOwnProperty("contentType")?t.contentType:t.getResponseHeader("Content-Type"),u;if(/json/.test(d)&&t.responseText.length)try{u=JSON.parse(t.responseText)}catch(f){u={code:"HTTP_ERROR",error:"The server returned a "+t.status+" status with an invalid JSON body."}}else t.responseText.length?u={code:"HTTP_ERROR",error:"The server returned a "+t.status+" status with the following body: "+t.responseText}:u={code:"HTTP_ERROR",error:"The server returned a "+t.status+" status but either the server did not return a body or this browser is a version of Internet Explorer that hides error bodies."};n.returnError(u)}},t.ontimeout=function(){n.returnError({code:"HTTP_TIMEOUT",error:"The request to the GeoIP2 web service timed out."})},t.onerror=function(){n.returnError({code:"HTTP_ERROR",error:"There was a network error receiving the response from the GeoIP2 web service."})},t.send(null)}},l.country=function(e,r,s){var n=new a(e,r,s,"country");n.getGeoIPResult()},l.city=function(e,r,s){var n=new a(e,r,s,"city");n.getGeoIPResult()},l.insights=function(e,r,s){var n=new a(e,r,s,"insights");n.getGeoIPResult()},l}();})();
//# sourceMappingURL=geoip2.js.map


}
/*
     FILE ARCHIVED ON 18:19:35 May 19, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:05:48 Jan 19, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 494.866
  exclusion.robots: 0.112
  exclusion.robots.policy: 0.097
  RedisCDXSource: 2.817
  esindex: 0.009
  LoadShardBlock: 84.803 (3)
  PetaboxLoader3.datanode: 103.385 (5)
  CDXLines.iter: 50.932 (3)
  load_resource: 213.522 (2)
  PetaboxLoader3.resolve: 63.963 (2)
*/