!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.r(t),n.d(t,"sockethandler",(function(){return r}));var r=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.socket=new WebSocket("ws://localhost:9102"),this.service=null}var t,n,r;return t=e,(n=[{key:"connect",value:function(){var e=this;this.socket.addEventListener("open",(function(t){console.log("Connected to server"),e.socket.send("Hello")})),this.socket.addEventListener("message",(function(t){"Hello"!==t.data&&(console.log(JSON.stringify(e.service.getMetadata())),e.socket.send(JSON.stringify(e.service.getMetadata())))})),this.socket.addEventListener("close",(function(t){console.log("The connection has been closed successfully."),e.socket=null}))}},{key:"setService",value:function(e){this.service=e,this.socket.readyState==this.socket.OPEN&&this.socket.close(),this.connect()}}])&&o(t.prototype,n),r&&o(t,r),e}())}]);