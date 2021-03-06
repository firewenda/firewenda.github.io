---
layout: post
title: 常用理财计算
category: life
description: 计算下钱，免得被坑。
tags:
    - 货币计算
---

<style>
.form-inline{
    margin-bottom: 20px;
}
.calculator-box label{
    font-size: 14px;
    font-weight: normal;
    text-align: right;
}
</style>

## 利率计算

月利率 = 年利率 / 12

日利率 = 月利率 / 30

日利率 = 年利率 / 365

##### 根据日利率计算年利率

例如有些借款产品按日利率来计算利息，日利率 **万分之五**，每天只需要还0.5元，计算出年利率为：18.2%。
<div class="form-inline">
  	<div class="form-group">
    	<label>日利率：</label>
    	<input type="text" class="form-control js-input-day" value="0.05" placeholder="日利率">
  	</div>
  	<div class="form-group">
    	<label>年利率：</label>
    	<input type="text" readonly class="form-control js-output-day" placeholder="年利率">
  	</div>
  	<button class="btn btn-default js-count-day">计算</button>
</div>

例如有些借款产品按月利率来计算利息，月利率 **8%。**，计算出年利率为：9.6%。
<div class="form-inline">
    <div class="form-group">
        <label>月利率：</label>
        <input type="text" class="form-control js-input-month" value="0.8" placeholder="月利率">
    </div>
    <div class="form-group">
        <label>年利率：</label>
        <input type="text" readonly class="form-control js-output-month" placeholder="年利率">
    </div>
    <button class="btn btn-default js-count-month">计算</button>
</div>

##### 通过收益算年利率

年利率 = 收益 / 天数 * 365 / 本金 * 100%

收益 = 本金 * 年利率 / 365 * 天数

##### 通过净值来计算年利率

年利率 = （基金净值 - 基金初始值(1)） / 产品期限(18) * 12

## 个人所得税计算器{{ site.time | date: '%Y' }}
<hr>

<div class="calculator-box form-horizontal">
	<div class="form-group">
        <label class="col-lg-3 col-md-3 form-control-static">收入类型</label>
        <div class="col-lg-4 col-md-4">
            <select class="form-control">
                <option selected="selected">工资、薪金所得（月薪）</option>
            </select>
        </div>
    </div>
    <div class="form-group">
        <label class="col-lg-3 col-md-3 form-control-static">税前工资</label>
        <div class="col-lg-4 col-md-4">
        	<div class="input-group">
	            <input id="txtIncome" class="form-control" type="text" value="" autofocus>
	            <div class="input-group-addon">元</div>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label class="col-lg-3 col-md-3 form-control-static">各项社会保险费</label>
        <div class="col-lg-4 col-md-4">
        	<div class="input-group">
	            <input id="txtInsure" class="form-control" type="text" value="0">
	            <div class="input-group-addon">元</div>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label class="col-lg-3 col-md-3 form-control-static">起征点</label>
        <div class="col-lg-4 col-md-4">
        	<div class="input-group">
	            <select class="form-control" id="selBaseLine">
                    <option value="3500" selected="selected">3500 </option>
                    <option value="4800">4800 </option>
                </select>
	            <div class="input-group-addon">元</div>
            </div>
        </div>
    </div>
    <div class="form-group">
    	<label class="col-lg-3 col-md-3 form-control-static"></label>
    	<div class="col-lg-4 col-md-4">
	    	<button type="button" class="btn btn-success js-calc">计算</button>
	    	<button type="button" class="btn btn-default js-calc-reset">重置</button>
    	</div>
    </div>
	<hr>
    <h4>个人所得税计算结果</h4>
    <div class="form-group">
        <label class="col-lg-3 col-md-3 form-control-static">应纳税所得额</label>
        <div class="col-lg-4 col-md-4">
        	<div class="input-group">
	            <p class="form-control" id="lblTaxableIncome"></p>
	            <div class="input-group-addon">元</div>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label class="col-lg-3 col-md-3 form-control-static">适用税率</label>
        <div class="col-lg-4 col-md-4">
        	<div class="input-group">
        		<p class="form-control" id="lblTaxRate"></p>
	            <div class="input-group-addon">%</div>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label class="col-lg-3 col-md-3 form-control-static">速算扣除数</label>
        <div class="col-lg-4 col-md-4">
        	<div class="input-group">
        		<p class="form-control" id="lblQuick"></p>
	            <div class="input-group-addon">元</div>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label class="col-lg-3 col-md-3 form-control-static">应缴税款</label>
        <div class="col-lg-4 col-md-4">
        	<div class="input-group">
	            <input id="txtTax" class="form-control" type="text" value="0" readonly>
	            <div class="input-group-addon">元</div>
            </div>
        </div>
    </div>
    <div class="form-group">
        <label class="col-lg-3 col-md-3 form-control-static">实发工资</label>
        <div class="col-lg-4 col-md-4">
        	<div class="input-group">
	            <input id="txtRealIncome" class="form-control" type="text" value="0" readonly>
	            <div class="input-group-addon">元</div>
            </div>
        </div>
    </div>
</div>

## 日期推算

根据某一日期，推算向前（输入负整数）或者向后（输入正整数）对应天数据的具体日期

<div class="form-inline">
  	<div class="form-group">
    	<label>当前日期：</label>
    	<input type="date" class="form-control js-input-date" value="" placeholder="当前日期">
  	</div>
    <div class="form-group">
    	<label>推迟天数：</label>
    	<input type="number" class="form-control js-input-daynum" value="" placeholder="推迟天数">
  	</div>
    <div class="form-group">
  	    <button class="btn btn-default js-calc-date">计算</button>
    </div>
    <hr>
  	<div class="form-group">
    	<label>具体日期：</label>
    	<input type="text" readonly class="form-control js-output-date">
  	</div>
</div>

<script>
$(function(){
    $('.js-count-day').on('click', function(){
        var inputVal = $.trim($('.js-input-day').val());
        var countNum = util.accMul(inputVal, 365);
        if(inputVal === ''){
            util.prompt({
                text: '请输入日利率'
            });
        }else{
            $('.js-output-day').val(countNum + '%');
        }
    });
    $('.js-count-day').trigger('click');

    $('.js-count-month').on('click', function(){
        var inputVal = $.trim($('.js-input-month').val());
        var countNum = util.accMul(inputVal, 12);
        if(inputVal === ''){
            util.prompt({
                text: '请输入月利率'
            });
        }else{
            $('.js-output-month').val(countNum + '%');
        }
    });
    $('.js-count-month').trigger('click');

    function GetDateStr(setDate, AddDayCount) {
        var dd = new Date(setDate);
        dd.setDate(dd.getDate() + parseInt(AddDayCount, 10));//获取AddDayCount天后的日期
        var y = dd.getFullYear();
        var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);//获取当前月份的日期，不足10补0
        var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();//获取当前几号，不足10补0
        return y + "/" + m + "/" + d;
    }

    $('.js-calc-date').on('click', function () {
        var $getYear = $('.js-input-date').val();
        var $getDayNum = $('.js-input-daynum').val();
        if ($getYear == '' || $getDayNum == '') {
            util.prompt({
                text: '请输入正确数值'
            });
        } else {
            $('.js-output-date').val(GetDateStr($getYear, $getDayNum));
        }
    });

    /**
     * [calculator 计算]
     * @return {[type]} [description]
     */
    function calculator() {
        clearResult();
        var income = parseFloat($("#txtIncome").val());
        if (isNaN(income)) {
            util.prompt({
                text: '无效的收入金额'
            });
            $("#txtIncome")[0].focus();
            $("#txtIncome")[0].select();
            return;
        }
        $("#txtIncome").val(income);

        var insure = parseFloat($("#txtInsure").val());
        if (isNaN(insure)) {
            util.prompt({
                text: '无效的各项社会保险费金额'
            });
            $("#txtInsure")[0].focus();
            $("#txtInsure")[0].select();
            return;
        }
        $("#txtInsure").val(insure);
        var baseLine = $("#selBaseLine").val();

        var taxableIncome = income - insure - baseLine;
        if (taxableIncome <= 0) {
            util.prompt({
                type: 'success',
                text: '您无需缴纳个人所得税'
            });
            $("#txtIncome")[0].focus();
            $("#txtIncome")[0].select();
            return;
        }

        var R, Q;
        var A = taxableIncome;
        A = A.toFixed(2);
        if (A <= 1500) {
            R = 0.03;
            Q = 0;
        } else if (A > 1500 && A <= 4500) {
            R = 0.1;
            Q = 105;
        } else if (A > 4500 && A <= 9000) {
            R = 0.2;
            Q = 555;
        } else if (A > 9000 && A <= 35000) {
            R = 0.25;
            Q = 1005;
        } else if (A > 35000 && A <= 55000) {
            R = 0.3;
            Q = 2755;
        } else if (A > 55000 && A <= 80000) {
            R = 0.35;
            Q = 5505;
        } else {
            R = 0.45;
            Q = 13505;
        }
        var tax = taxableIncome * R - Q;
        var realIncome = income - insure - tax;
        $("#lblTaxableIncome")[0].innerText = taxableIncome.toFixed(2);
        $("#lblTaxRate")[0].innerText = R * 100;
        $("#lblQuick")[0].innerText = Q;
        $("#txtTax")[0].value = tax.toFixed(2);
        $("#txtRealIncome")[0].value = realIncome.toFixed(2);
        $("#txtIncome")[0].select();
    }

    function calcReset() {
        clearResult();
        $("#txtInsure")[0].value = "0";
        $("#selBaseLine").val(3500);
        $("#txtIncome")[0].value = "";
        $("#txtIncome")[0].focus();
        $("#txtIncome")[0].select();

    }
    /**
     * [clearResult 重置计算结果]
     * @return {[type]} [description]
     */
    function clearResult() {
        $("#lblTaxableIncome")[0].innerText = "0";
        $("#lblTaxRate")[0].innerText = "0";
        $("#lblQuick")[0].innerText = "0";
        $("#txtTax")[0].value = "";
        $("#txtRealIncome")[0].value = "";
    }

    $('.js-calc').on('click', function(){
    	calculator();
    });

    $('.js-calc-reset').on('click', function(){
    	calcReset
    });

    /**
     * [点击回车进行计算]
     */
    $('.calculator-box').on('keydown', function(e){
        if(e.keyCode === 13){
            calculator();
        }
    });
});
</script>