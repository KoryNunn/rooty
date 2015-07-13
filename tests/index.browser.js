(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/kory/dev/rootify/tests/index.js":[function(require,module,exports){
console.log(require('./someDir/someFile'));
},{"./someDir/someFile":"/home/kory/dev/rootify/tests/someDir/someFile.js"}],"/home/kory/dev/rootify/tests/rootFile.js":[function(require,module,exports){
module.exports = 'majigger';
},{}],"/home/kory/dev/rootify/tests/someDir/someFile.js":[function(require,module,exports){
module.exports = require("/home/kory/dev/rootify/tests/rootFile");
},{"/home/kory/dev/rootify/tests/rootFile":"/home/kory/dev/rootify/tests/rootFile.js"}]},{},["/home/kory/dev/rootify/tests/index.js"]);
