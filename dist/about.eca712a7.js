parcelRequire=function(e,r,n,t){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function c(n,t){if(!r[n]){if(!e[n]){var i="function"==typeof parcelRequire&&parcelRequire;if(!t&&i)return i(n,!0);if(o)return o(n,!0);if(u&&"string"==typeof n)return u(n);var f=new Error("Cannot find module '"+n+"'");throw f.code="MODULE_NOT_FOUND",f}l.resolve=function(r){return e[n][1][r]||r},l.cache={};var d=r[n]=new c.Module(n);e[n][0].call(d.exports,l,d,d.exports,this)}return r[n].exports;function l(e){return c(l.resolve(e))}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=r,c.parent=o,c.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)try{c(n[f])}catch(e){i||(i=e)}if(n.length){var d=c(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof define&&define.amd&&define((function(){return d}))}if(parcelRequire=c,i)throw i;return c}({lDcJ:[function(e,r,n){var t,i=window.innerWidth<1e3;function o(){window.innerWidth<1e3&&i?(t&&t.destroy(),i=!1):i||(t=new Parallax(document.getElementById("scene")),i=!0)}window.addEventListener("resize",o),o()},{}]},{},["lDcJ"]);