!function(n,r,t,e,o){function i(){var t=n.currentScript;if(t&&!t[e])return t[e]=1,t;for(var o=n[r]("script"),i=0;i<o.length;++i)if(t=o[i],t&&t.src&&!t[e]&&t.src.indexOf("-a.akamaihd.net/sub/s4aa1f3/mri-1637/l.js")>-1){var a=t.src.match(/[&?]?pid=(\d+)/)[1];if(a)return t[e]=1,t}}function a(t){var e=t.src.split("?")[1];e=e?e.split("&"):[],e.push("zoneid="+encodeURIComponent(o));var i=t.src.match(/[&?]?pid=(\d+)/)[1];if(i){var a=n.createElement("script");h=u("ph-"+o+"-"+i),a[h]=f,a.src="//"+t.src.split("/")[2]+"/loaders/"+i+"/l.js?"+e.join("&"),n[r]("head")[0].appendChild(a)}}function c(){var t=u("ph-"+location.href),e=n.documentElement||n;if(!e[t]){e[t]=1;var o="mouseup mousedown click";d(n[r]("*"),o,f,!0),d([n,window],o,f,!0)}}function d(n,r,e,o){r=r.split(" ");for(var i=0;i<n.length;++i)for(var a=0;a<r.length;++a)window[t]?n[i][t](r[a],e,!!o):n[i].attachEvent("on"+r[a],e)}function f(n){return p||"function"!=typeof n[h]?p?p.apply(this,arguments):void 0:void(p=n[h])}function s(n){for(var r=[],t=0;n>t;t++)r.push(String.fromCharCode(97+26*Math.random()|0));return r.join("")}function u(n){for(var r=2166136261,t=0;t<n.length;++t)r^=n.charCodeAt(t),r+=(r<<1)+(r<<4)+(r<<7)+(r<<8)+(r<<24);return(r>>>0).toString(36)}var p,h=s(6);c();var v=i();v&&a(v)}(document,"getElementsByTagName","addEventListener","trcvjw","88359019");