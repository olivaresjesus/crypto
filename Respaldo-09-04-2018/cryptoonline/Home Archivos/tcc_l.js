!function(a,b){b["true"]=a;var c=function(a){function b(){Date.prototype.toISOString||!function(){function a(a){var b=String(a);return 1===b.length&&(b="0"+b),b}Date.prototype.toISOString=function(){var b=this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1);return b+="-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":",b+=a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+".",b+=String((this.getUTCMilliseconds()/1e3).toFixed(3)).slice(2,5)+"Z"}}();var a=new Date;return a.toISOString()}function c(a,b){var c=arguments.length;if(0===c)a=0,b=2147483647;else if(1===c)throw new Error("Warning: rand() expects exactly 2 parameters, 1 given");return Math.floor(Math.random()*(b-a+1))+a}function d(a,b){var c=p;return c.queryString=e(a,"tccl."),c.host=b,c.toString().length>2048&&(c.queryString=c.queryString.substring(0,2047-c.host.length)),c}function e(a,b){var c="",d="";for(var e in a)if(a.hasOwnProperty(e)&&""!==e&&0!==e.indexOf(b)){var f="";if(f=a[e],null!==f){if(void 0===f||"undefined"===f||""===f)continue;try{d=decodeURIComponent(f)}catch(g){d=f}c+=""!==c?"&":"",c+=e+"="+encodeURIComponent(d)}}return c}function f(a){var b="//";return b+"img."+a}function g(a,b){return f(a)+b}function h(a,b){for(var c=new i,d=0;d<a.length;d++)for(var e in a[d])if(a[d].hasOwnProperty(e)){if(b&&0===e.indexOf("tccl."))continue;c.set(e,a[d][e])}return c}function i(){this.properties={},this.id="",this.properties.cts=(new Date).getTime(),this.get=function(a){return this.properties.hasOwnProperty(a)?this.properties[a]:void 0},this.set=function(a,b){this.properties[a]=b},this.setEventType=function(a){this.set("event_type",a)},this.getEventType=function(){return this.get("event_type")},this.getProperties=function(){return this.properties},this.merge=function(a){for(var b in a)a.hasOwnProperty(b)&&this.set(b,a[b])},this.isSet=function(a){return this.properties.hasOwnProperty(a)?!0:void 0}}function j(){return a.window.navigator.userAgent}function k(){return a.window.location.hostname}function l(b){return b||(b=a.window.location.pathname),"string"!=typeof b||"undefined"==typeof b||""===b?"notspecified":(b.lastIndexOf("/")===b.length-1&&(b=b.substring(0,b.length-1)),0!==b.indexOf("/")&&(b="/"+b),b)}function m(b){return o("referrer:"+a.doc.referrer),a.doc.referrer.substr(0,b)}function n(){return Math.round((new Date).getTime())}function o(){var b=a.debugMode||!1;b&&console&&console.log.apply&&(console.firebug?console.log.apply(this,arguments):console.log.apply(console,arguments))}a||(a={}),a.window||(a.window=window),a.doc||(a.doc=document),a.debugMode||(a.debugMode=!1);var p={host:"",queryString:"",toString:function(){var a=-1===this.host.indexOf("?")?"?":"&";return this.host+a+this.queryString}};return{getDataLayerValues:h,getUserAgent:j,getHostname:k,getPageName:l,eventObject:i,createRequestUrl:d,getReferrer:m,getISODate:b,rand:c,getBeaconEndpoint:g,getCurrentUtcTimestamp:n,debug:o}}(),d=function(a){function b(b,c){f.merge(b),f.set("dh",a.utility.getHostname()),f.set("dp",a.utility.getPageName()),f.set("dr",a.utility.getReferrer(1e3)),f.set("ua",a.utility.getUserAgent()),f.set("feedtype",c),f.set("z",a.utility.rand());var e=a.utility.getBeaconEndpoint(a.baseHost,a.tcnPath);d(f,e,function(){})}function d(b,c,d){var e=a.utility.createRequestUrl(b.getProperties(),c),f=new Image(1,1);"function"==typeof d?f.onload=d:f.onload=function(){},f["class"]="trafficImage",f.src=e.toString()}function e(a,b){if(b&&a&&a.isSet(b))var c=a.get(b);return c}a||(a={}),a.debugMode=a.debugMode||!1,a.window=a.window||window,a.doc=a.doc||document,a.utility=a.utility||c,a.baseHost="img.test-secureserver.net",a.tcnPath="/t/1/tl/event",a.trafficUrl="",a.trfd||("undefined"!=typeof _trfd?a.trfd=_trfd:"undefined"!=typeof a.window._trfd?a.trfd=a.window._trfd:a.trfd=[]);var f=a.utility.getDataLayerValues(a.trfd,!1);return a.baseHost=e(f,"tccl.baseHost"),a.debugMode?{sendBeaconRequest:b,getBaseHost:e}:{sendBeaconRequest:b}}();if(!e)var e=function(a){function b(){if(!a.perfSent&&(a.perfSent=!0,a.performance&&a.performance.timing))try{return f.tce=a.performance.timing.connectEnd||0,f.tcs=a.performance.timing.connectStart||0,f.tdc=a.performance.timing.domComplete||0,f.tdclee=a.performance.timing.domContentLoadedEventEnd||0,f.tdcles=a.performance.timing.domContentLoadedEventStart||0,f.tdi=a.performance.timing.domInteractive||0,f.tdl=a.performance.timing.domLoading||0,f.tdle=a.performance.timing.domainLookupEnd||0,f.tdls=a.performance.timing.domainLookupStart||0,f.tfs=a.performance.timing.fetchStart||0,f.tns=a.performance.timing.navigationStart||0,f.trqs=a.performance.timing.requestStart||0,f.tre=a.performance.timing.responseEnd||0,f.trps=a.performance.timing.responseStart||0,f.tles=a.performance.timing.loadEventStart||0,f.tlee=a.performance.timing.loadEventEnd||0,a.performance.navigation&&a.performance.navigation.type&&(f.nt=a.performance.navigation.type||0),e(f),c(f),f}catch(b){return e(b),f}}function c(b){a.tccl.sendBeaconRequest(b,"perf")}function e(b){try{a.debugMode&&a.window.console&&console.log&&console.log(b)}catch(c){}}a||(a={}),a.window||(a.window=window),a.debugMode||(a.debugMode=!1),a.document||(a.document=document),a.delay||(a.delay=1),a.maxDelay||(a.maxDelay=7e3),a.tccl||(a.tccl=d),a.perfSent=!1;var f={};return"undefined"==typeof a.createEvent&&(a.createEvent=!0),a.performance||(a.window&&a.window.performance?a.performance=a.window.performance:e("Error loading performance lib")),"undefined"!=typeof a.document.readyState&&"complete"===a.document.readyState?setTimeout(b,a.delay):a.createEvent&&(a.document&&a.document.addEventListener?a.window.addEventListener("load",function(){setTimeout(b,a.delay)}):a.document&&a.document.attachEvent&&a.document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&setTimeout(b,a.delay)})),setTimeout(function(){a.perfSent||b()},a.maxDelay),a.debugMode?{getPerformanceData:b}:{getPerformanceData:b}}();"undefined"!=typeof b&&(b.tcp=e)}({},function(){return this}());