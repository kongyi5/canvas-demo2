parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var e=document.getElementById("xxx"),c=e.getContext("2d"),t=3;o(e),s(e);var i=!1;function n(e,t,i){c.beginPath(),c.arc(e,t,i,0,2*Math.PI),c.fill()}function a(e,i,n,a){c.beginPath(),c.lineWidth=t,c.moveTo(e,i),c.lineTo(n,a),c.stroke(),c.closePath()}function o(e){function c(){var c=document.documentElement.clientWidth,t=document.documentElement.clientHeight;e.width=c,e.height=t}c(),window.onresize=function(){c()}}function s(e){var t=!1,n={x:void 0,y:void 0};void 0!==document.body.ontouchstart?(e.ontouchstart=function(e){var a=e.touches[0].clientX,o=e.touches[0].clientY;t=!0,i?c.clearRect(a-5,o-5,10,10):n={x:a,y:o}},e.ontouchmove=function(e){var o=e.touches[0].clientX,s=e.touches[0].clientY;if(t)if(i)c.clearRect(o-5,s-5,10,10);else{var l={x:o,y:s};a(n.x,n.y,l.x,l.y),n=l}},e.ontouchend=function(){t=!1}):(e.onmousedown=function(e){var a=e.clientX,o=e.clientY;t=!0,i?c.clearRect(a-5,o-5,10,10):n={x:a,y:o}},e.onmousemove=function(e){var o=e.clientX,s=e.clientY;if(t)if(i)c.clearRect(o-5,s-5,10,10);else{var l={x:o,y:s};a(n.x,n.y,l.x,l.y),n=l}},e.onmouseup=function(e){t=!1})}pen.onclick=function(){i=!1,pen.classList.add("active"),eraser.classList.remove("active"),clear.classList.remove("active")},eraser.onclick=function(){i=!0,eraser.classList.add("active"),pen.classList.remove("active"),clear.classList.remove("active")},clear.onclick=function(){clear.classList.add("active"),eraser.classList.remove("active"),pen.classList.remove("active"),c.clearRect(0,0,e.width,e.height)},download.onclick=function(){var c=e.toDataURL("image/png"),t=document.createElement("a");document.body.appendChild(t),t.href=c,t.download="我的画",t.target="_blank",t.click()},black.onclick=function(){c.strokeStyle="black",black.classList.add("active"),red.classList.remove("active"),green.classList.remove("active"),blue.classList.remove("active")},red.onclick=function(){c.strokeStyle="red",red.classList.add("active"),black.classList.remove("active"),green.classList.remove("active"),blue.classList.remove("active")},green.onclick=function(){c.strokeStyle="green",green.classList.add("active"),black.classList.remove("active"),red.classList.remove("active"),blue.classList.remove("active")},blue.onclick=function(){c.strokeStyle="blue",blue.classList.add("active"),black.classList.remove("active"),red.classList.remove("active"),green.classList.remove("active")},thin.onclick=function(){t=3},thick.onclick=function(){t=6};
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.e3b44952.js.map