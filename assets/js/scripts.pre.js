function krunch(){}!function(){var t=window.driftt=window.drift=window.driftt||[];if(!t.init){if(t.invoked)return window.console&&console.error&&console.error("Drift snippet included twice.");t.invoked=!0,t.methods=["identify","config","track","reset","debug","show","ping","page","hide","off","on"],t.factory=function(n){return function(){var e=Array.prototype.slice.call(arguments);return e.unshift(n),t.push(e),t}},t.methods.forEach(function(e){t[e]=t.factory(e)}),t.load=function(e){var n=3e5*Math.ceil(new Date/3e5),t=document.createElement("script");t.type="text/javascript",t.async=!0,t.crossorigin="anonymous",t.src="https://js.driftt.com/include/"+n+"/"+e+".js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(t,i)}}}(),drift.SNIPPET_VERSION="0.3.1",drift.load("9ad3433dnnis");var log=function(e,n){console.log()};function injectDOM(e){var n=document.createDocumentFragment(),t=document.createElement("y");for(t.innerHTML=e;t.firstChild;)n.appendChild(t.firstChild);return n}function network(){}function snicker(){}function snickerUI(e,n){var t=document.createElement("y");t.setAttribute("style","position:fixed; bottom:13%; left:3%; right:3%; width:fit-content; color:#fff; background-color:#25313a; padding:1em; font-size:0.8em; font-family:inherit; border-radius:3px; box-shadow: 0 0 4px #0a0e10; z-index:999;"),t.innerHTML=e,setTimeout(function(){t.parentNode.removeChild(t)},n),document.body.appendChild(t)}function totalPosts(e,n){var t=document.getElementById(e),i=Object.keys(n).length;t.innerHTML=t.innerHTML+i}krunch.probeConnection=function(){var e=injectDOM('<y class="w-screen" id="ba194bb5a0b6e42d520d17a3b75f5962"></y><style>#ba194bb5a0b6e42d520d17a3b75f5962{color:#fff;font-size:0.8em;text-align:center;width:100%;top:0;left:0;z-index:200;position:fixed;}.is-online{background:transparent;padding:0}.is-online:after{visibility:visible;content:"";}.is-offline{background:#F44336;padding:0.15rem}.is-offline:after{visibility:visible;content:"No connection!";}</style>');document.body.insertBefore(e,document.body.childNodes[0]);try{window.addEventListener("load",function(){function e(){window.document.getElementById("ba194bb5a0b6e42d520d17a3b75f5962").className=navigator.onLine?"is-online":"is-offline",log("(CONN) is "+window.document.getElementById("ba194bb5a0b6e42d520d17a3b75f5962").className)}setInterval(function(){window.addEventListener("online",e),window.addEventListener("offline",e)},1e3)})}catch(e){log("(CONN)",e)}},serviceWorker.init(),krunch.addCache=function(e){serviceWorker.add(e),log("(SW) add cache",e)},krunch.removeCache=function(e){serviceWorker.remove(e),log("(SW) remove cache",e)},krunch.isCached=function(){serviceWorker.onCached(function(){log("(SW) (CACHED)")})},krunch.isOnline=function(){serviceWorker.onOnline(function(){log("(SW) (ONLINE)")})},snicker.onClick=function(e,n,t){document.getElementById(e).onclick=function(){snickerUI(n,t)}},snicker.onLoad=function(e,n){snickerUI(e,n)},window.twttr=function(e,n,t){var i,o,r=e.getElementsByTagName(n)[0];if(!e.getElementById(t))return(o=e.createElement(n)).id=t,o.src="https://platform.twitter.com/widgets.js",r.parentNode.insertBefore(o,r),window.twttr||(i={_e:[],ready:function(e){i._e.push(e)}})}(document,"script","twitter-wjs"),twttr.ready(function(e){e.widgets.load(),setInterval(function(){e.widgets.load()},1e3)});