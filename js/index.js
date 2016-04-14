$(function() {
	/**
	 * 左侧导航事件
	 */
	$('.home-follow').click(function(e) {
		e.preventDefault();

		if ($('.home-contact').is(':visible')) {
			$('.home-contact').slideUp(100);
		} else {
			$('.home-contact').slideDown(100);
		}
	});
	/**
	 * 返回顶部
	 */
	$(window).on('scroll', function() {
		if ($(window).scrollTop() > 300) {
			$("#J_gotoTop").fadeIn();
		} else {
			$("#J_gotoTop").fadeOut();
		}
	});
	$("#J_gotoTop").click(function(e) {
		$('html,body').animate({
			scrollTop: '0px'
		}, 500);
	});
	/**
	 * [animateBar 导航动画]
	 * @param  {[type]} $item [description]
	 * @param  {[type]} noAni [description]
	 * @return {[type]}       [description]
	 */
	function animateBar($item,noAni){
		var spanLeft = $item.find('span').offset().left;
		var conLeft = $item.parent().offset().left;
		var left = spanLeft - conLeft;
		var width = $item.find('span').width() + 8;

		if (noAni) {
			$('#cateBar').css({
				left: left,
				width: width
			});
		} else {
			$('#cateBar').stop().animate({
				left: left,
				width: width
			}, 300);
		}
	}

	var waitForFinalEvent = (function() {
		var timers = {};
		return function(callback, ms, uniqueId) {
			if (!uniqueId) {
				uniqueId = "Don't call this twice without a uniqueId";
			}
			if (timers[uniqueId]) {
				clearTimeout(timers[uniqueId]);
			}
			timers[uniqueId] = setTimeout(callback, ms);
		};
	})();

	$('.artical-cate li').mouseenter(function() {
		animateBar($(this));
	}).mouseleave(function() {
		animateBar($('.artical-cate .on'));
	});

	$(window).resize(function(e) {
		waitForFinalEvent(function() {
			animateBar($('.artical-cate .on'));
		});
	});
	animateBar($('.artical-cate .on'), true);
});