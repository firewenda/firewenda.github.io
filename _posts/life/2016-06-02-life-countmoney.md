---
layout: post
title: 常用理财计算
category: life
description: 计算下钱，免得被坑。
tags:
    - 货币计算
---
## 利率计算

月利率 = 年利率 / 12

日利率 = 月利率 / 30

日利率 = 年利率 / 365

##### 根据日利率计算年利率

例如有些借款产品按日利率来计算利息，日利率万分之五，每天只需要还0.4元，计算出年利率为：18.2%。
<div class="form-inline">
  	<div class="form-group">
    	<label>日利率：</label>
    	<input type="text" class="form-control js-input" value="0.05" placeholder="日利率">
  	</div>
  	<div class="form-group">
    	<label>年利率：</label>
    	<input type="text" readonly class="form-control js-output" placeholder="年利率">
  	</div>
  	<button class="btn btn-default js-count">计算</button>
</div>

<script>
$(function(){
	$('.js-count').on('click', function(){
		var inputVal = $.trim($('.js-input').val());
		var countNum = inputVal * 365;
		if(inputVal === ''){
			alert('请输入日利率');
		}else{
			$('.js-output').val(countNum + '%');
		}
	});
	$('.js-count').trigger('click');
})
</script>

##### 通过收益算年利率

年利率 = 收益 / 天数 * 365 / 本金 * 100%

收益 = 本金 * 年利率 / 365 * 天数