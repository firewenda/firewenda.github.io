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

	var util = {
	    prompt: function prompt(args) {
	        var opts = {
	            type: "danger",
	            text: "操作失败",
	            time: 2e3
	        };
	        $.extend(opts, args);
	        var type_class = "prompt-box-text";
	        var icon_class = "";
	        if (opts.type == "success") {
	            type_class = "prompt-box-text prompt-box-success";
	            icon_class = "fa fa-2x fa-check-circle";
	        } else if (opts.type == "info") {
	            type_class = "prompt-box-text prompt-box-info";
	            icon_class = "fa fa-2x fa-info-circle";
	        } else if (opts.type == "warning") {
	            type_class = "prompt-box-text prompt-box-warning";
	            icon_class = "fa fa-2x fa-warning";
	        } else if (opts.type == "danger") {
	            type_class = "prompt-box-text prompt-box-danger";
	            icon_class = "fa fa-2x fa-times-circle";
	        }
	        var h = '<div class="prompt-box-wrap"><div class="' + type_class + '"><span class="' + icon_class + '"></span>' + opts.text + "</div></div>";
	        if ($(".prompt-box-wrap").length) {
	            $(".prompt-box-wrap").remove();
	        }
	        $("body").append(h);
	        window.setTimeout(function () {
	            $(".prompt-box-wrap").hide();
	            if (opts.callback) {
	                opts.callback();
	            }
	            // opts.callback && opts.callback();
	        }, opts.time);
	    },
	    getUrlParam: function getUrlParam(name) {
	        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	        var r = window.location.search.substr(1).match(reg);
	        if (r !== null) return decodeURI(r[2]);
	        return null;
	    },
	    loading: {
	        node: $('<div class="spinner-overlay"></div><div class="spinner"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>'),
	        show: function show() {
	            $('body').append(this.node);
	        },
	        hide: function hide() {
	            this.node.remove();
	        }
	    },
	    /**
	     * Function formatMoney 数值转或货币格式
	     *  -@param {Number} number 要转换的数值
	     *  -@param {Number} places 保留小数点位数
	     *  -@param {String} symbol 货币符号
	     *  -@param {String} thousand 间隔符
	     *  -@param {String} decimal 小数位符号
	     * Return {String}
	     */
	    formatMoney: function formatMoney(number, places, symbol, thousand, decimal) {
	        number = number || 0;
	        places = !isNaN(places = Math.abs(places)) ? places : 2;
	        symbol = symbol !== undefined ? symbol : "$";
	        thousand = thousand || ",";
	        decimal = decimal || ".";
	        var negative = number < 0 ? "-" : "",
	            i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
	            j = (j = i.length) > 3 ? j % 3 : 0;
	        return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
	    },
	    // 两个浮点数求和
	    accAdd: function accAdd(num1, num2) {
	        var r1, r2, m;
	        try {
	            r1 = num1.toString().split('.')[1].length;
	        } catch (e) {
	            r1 = 0;
	        }
	        try {
	            r2 = num2.toString().split(".")[1].length;
	        } catch (e) {
	            r2 = 0;
	        }
	        m = Math.pow(10, Math.max(r1, r2));
	        // return (num1*m+num2*m)/m;
	        return Math.round(num1 * m + num2 * m) / m;
	    },
	    // 两个浮点数相减
	    accSub: function accSub(num1, num2) {
	        var r1, r2, m;
	        try {
	            r1 = num1.toString().split('.')[1].length;
	        } catch (e) {
	            r1 = 0;
	        }
	        try {
	            r2 = num2.toString().split(".")[1].length;
	        } catch (e) {
	            r2 = 0;
	        }
	        m = Math.pow(10, Math.max(r1, r2));
	        n = r1 >= r2 ? r1 : r2;
	        return (Math.round(num1 * m - num2 * m) / m).toFixed(n);
	    },
	    //两个浮点数相乘
	    accMul: function accMul(num1, num2) {
	        var m = 0,
	            s1 = num1.toString(),
	            s2 = num2.toString();
	        try {
	            m += s1.split(".")[1].length;
	        } catch (e) {}
	        try {
	            m += s2.split(".")[1].length;
	        } catch (e) {}
	        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
	    },
	    // 两个浮点数相除
	    accDiv: function accDiv(num1, num2) {
	        var t1, t2, r1, r2;
	        try {
	            t1 = num1.toString().split('.')[1].length;
	        } catch (e) {
	            t1 = 0;
	        }
	        try {
	            t2 = num2.toString().split(".")[1].length;
	        } catch (e) {
	            t2 = 0;
	        }
	        r1 = Number(num1.toString().replace(".", ""));
	        r2 = Number(num2.toString().replace(".", ""));
	        return r1 / r2 * Math.pow(10, t2 - t1);
	    },
	    /**
	     * [CtoH 输入内容全角转半角]
	     * @param {[type string]} str [输入字符串]
	     * Tips: 当为全角*号时，此方法不会转换为半角*号
	     */
	    CtoH: function CtoH(str) {
	        var result = '';
	        for (var i = 0; i < str.length; i++) {
	            if (str.charCodeAt(i) == 12288) {
	                result += String.fromCharCode(str.charCodeAt(i) - 12256);
	                continue;
	            }
	            if (str.charCodeAt(i) > 65280 && str.charCodeAt(i) < 65375) result += String.fromCharCode(str.charCodeAt(i) - 65248);else result += String.fromCharCode(str.charCodeAt(i));
	        }
	        return result;
	    },
	    /**
	     * [toFixed 解决js toFixed()四舍五不入问题,此方法为Aangularjs解决方案]
	     * @param  {[type]} num       [需要转换的数字]
	     * @param  {[type]} precision [需要保留的小数位]
	     * @return {[type]}           [description]
	     * Tips: 当为0.0001或者更小的数字时，会返回NaN
	     */
	    toFixed: function toFixed(num, precision) {
	        return (+(Math.round(+(num + 'e' + precision)) + 'e' + -precision)).toFixed(precision);
	    },
	    /**
	     * [getWeekCounts 获得一个月的周数]
	     * It working only week starts on sunday
	     * Not working if week starts on monday
	     * @param  {[type]} year         [四位数年份]
	     * @param  {[type]} month_number [月份month_number is in the range 1..12]
	     * @return {[type]}              [返回一个月的周数]
	     */
	    getWeekCounts: function getWeekCounts(year, month_number) {
	        var firstOfMonth = new Date(year, month_number - 1, 1);
	        var lastOfMonth = new Date(year, month_number, 0);
	        var used = firstOfMonth.getDay() + lastOfMonth.getDate();
	        return Math.ceil(used / 7);
	    }
	};

/***/ }

/******/ });