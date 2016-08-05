/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	$(function () {

	    $('#cardflip').click(function () {
	        $('#card1').toggleClass('flipped');
	    });

	    $('body').delegate('#cardflip1', 'click', function () {
	        $('#card2').toggleClass('flipped');
	    });

	    $('body').delegate('#cube-btn button', 'click', function () {
	        var cls = $(this).attr('data-class');
	        $('#cube').removeClass();
	        $('#cube').addClass(cls);
	    });

	    $('#car-pre').click(function () {
	        var deg = $('#carousel').attr('data-deg') || 0;
	        deg = parseInt(deg) + 40;

	        var value = 'translateZ(-288px) rotateY(' + deg + 'deg)';

	        $('#carousel').attr('data-deg', deg).css({
	            '-webkit-transform': value,
	            '-moz-transform': value,
	            '-o-transform': value,
	            'transform': value
	        });
	    });
	    $('#car-next').click(function () {
	        var deg = $('#carousel').attr('data-deg') || 0;
	        deg = parseInt(deg) - 40;

	        var value = 'translateZ(-288px) rotateY(' + deg + 'deg)';

	        $('#carousel').attr('data-deg', deg).css({
	            '-webkit-transform': value,
	            '-moz-transform': value,
	            '-o-transform': value,
	            'transform': value
	        });
	    });
	});

/***/ }
/******/ ]);