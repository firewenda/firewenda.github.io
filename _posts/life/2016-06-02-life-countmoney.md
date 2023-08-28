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

<!-- ## 个人所得税计算器{{ site.time | date: '%Y' }} -->

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
});
</script>