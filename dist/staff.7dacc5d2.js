parcelRequire=function(e,r,t,n){var o,i="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var o="function"==typeof parcelRequire&&parcelRequire;if(!n&&o)return o(t,!0);if(i)return i(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}l.resolve=function(r){return e[t][1][r]||r},l.cache={};var a=r[t]=new f.Module(t);e[t][0].call(a.exports,l,a,a.exports,this)}return r[t].exports;function l(e){return f(l.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=i,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){o||(o=e)}if(t.length){var a=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=a:"function"==typeof define&&define.amd&&define((function(){return a}))}if(parcelRequire=f,o)throw o;return f}({yeke:[function(e,r,t){new Swiper(".staff__swiper",{spaceBetween:10,slidesPerView:"auto",freeMode:!0,loop:!0,loopFillGroupWithBlank:!0,autoplay:{delay:0,disableOnInteraction:!1,pauseOnMouseEnter:!0},speed:2200})},{}]},{},["yeke"]);