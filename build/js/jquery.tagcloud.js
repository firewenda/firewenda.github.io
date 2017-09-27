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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7);


/***/ },

/***/ 7:
/***/ function(module, exports) {

	(function ($) {

	  $.fn.tagcloud = function (options) {
	    var opts = $.extend({}, $.fn.tagcloud.defaults, options);
	    tagWeights = this.map(function () {
	      return $(this).attr("rel");
	    });
	    tagWeights = jQuery.makeArray(tagWeights).sort(compareWeights);
	    lowest = tagWeights[0];
	    highest = tagWeights.pop();
	    range = highest - lowest;
	    if (range === 0) {
	      range = 1;
	    }
	    // Sizes
	    if (opts.size) {
	      fontIncr = (opts.size.end - opts.size.start) / range;
	    }
	    // Colors
	    if (opts.color) {
	      colorIncr = colorIncrement(opts.color, range);
	    }
	    return this.each(function () {
	      weighting = $(this).attr("rel") - lowest;
	      if (opts.size) {
	        $(this).css({ "font-size": opts.size.start + weighting * fontIncr + opts.size.unit });
	      }
	      if (opts.color) {
	        // change color to background-color
	        $(this).css({ "backgroundColor": tagColor(opts.color, colorIncr, weighting) });
	      }
	    });
	  };

	  $.fn.tagcloud.defaults = {
	    size: { start: 14, end: 18, unit: "pt" }
	  };

	  // Converts hex to an RGB array
	  function toRGB(code) {
	    if (code.length == 4) {
	      code = jQuery.map(/\w+/.exec(code), function (el) {
	        return el + el;
	      }).join("");
	    }
	    hex = /(\w{2})(\w{2})(\w{2})/.exec(code);
	    return [parseInt(hex[1], 16), parseInt(hex[2], 16), parseInt(hex[3], 16)];
	  }

	  // Converts an RGB array to hex
	  function toHex(ary) {
	    return "#" + jQuery.map(ary, function (i) {
	      hex = i.toString(16);
	      hex = hex.length == 1 ? "0" + hex : hex;
	      return hex;
	    }).join("");
	  }

	  function colorIncrement(color, range) {
	    return jQuery.map(toRGB(color.end), function (n, i) {
	      return (n - toRGB(color.start)[i]) / range;
	    });
	  }

	  function tagColor(color, increment, weighting) {
	    rgb = jQuery.map(toRGB(color.start), function (n, i) {
	      ref = Math.round(n + increment[i] * weighting);
	      if (ref > 255) {
	        ref = 255;
	      } else {
	        if (ref < 0) {
	          ref = 0;
	        }
	      }
	      return ref;
	    });
	    return toHex(rgb);
	  }

	  function compareWeights(a, b) {
	    return a - b;
	  }
	})(jQuery);

/***/ }

/******/ });