!function(e){var t={};function n(i){var o;return(t[i]||(o=t[i]={i:i,l:!1,exports:{}},e[i].call(o.exports,o,o.exports,n),o.l=!0,o)).exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){$((function(){var e={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}};function t(e,t){var n=e.find("span").offset().left-e.parent().offset().left;e=e.find("span").width()+8;t?$("#cateBar").css({left:n,width:e}):$("#cateBar").stop().animate({left:n,width:e},300)}$("pre").addClass("prettyprint"),$(".entry a").each((function(e,t){var n=$(this).attr("href");!n||0===n.indexOf("#")||0===n.indexOf("/")||-1<n.toLowerCase().indexOf("isme.wang")||$(t).has("img").length||($(this).attr("target","_blank"),$(this).addClass("external"))})),$(".home-follow").click((function(e){e.preventDefault(),$(".home-contact").is(":visible")?$(".home-contact").slideUp(100):$(".home-contact").slideDown(100)})),$(window).on("scroll",(function(){300<$(window).scrollTop()?$("#J_gotoTop").fadeIn():$("#J_gotoTop").fadeOut()})),$("#J_gotoTop").click((function(e){$("html,body").animate({scrollTop:"0px"},500)})),$(".heart").hover((function(){$(this).toggleClass("is_animating")})),$(".heart").on("animationend",(function(){$(this).toggleClass("is_animating")})),n={};var n,i,o,a;$(".artical-cate li").mouseenter((function(){t($(this))})).mouseleave((function(){t($(".artical-cate .on"))})),$(window).resize((function(e){!function(e,t,i){n[i=i||"Don't call this twice without a uniqueId"]&&clearTimeout(n[i]),n[i]=setTimeout(e,t)}((function(){t($(".artical-cate .on"))}))})),t($(".artical-cate .on"),!0),i={},a=function(e,t,n){i[n=n||"Don't call this twice without a uniqueId"]&&clearTimeout(i[n]),i[n]=setTimeout(e,t)},2<$(".entry h2").length&&!e.any()&&(o=function(){for(var e,t,n,i='<ul><li class="h1"><a href="#">'+$("h1.entry-title").text()+"</a></li>",o=(e=[],t=[],n=0,$.each($(".entry h2, .entry h3"),(function(i,o){var a;"h2"==o.tagName.toLowerCase()?((a={}).name=$(o).text(),a.id="menuIndex"+i,e.push(a),n++):((a={}).name=$(o).text(),a.id="menuIndex"+i,t[n-1]||(t[n-1]=[]),t[n-1].push(a)),o.id="menuIndex"+i})),{h2:e,h3:t}),a=o.h2,r=o.h3,s=0;s<a.length;s++)if(i+='<li><a href="#" data-id="'+a[s].id+'">'+a[s].name+"</a></li>",r[s])for(var l=0;l<r[s].length;l++)i+='<li class="h3"><a href="#" data-id="'+r[s][l].id+'">'+r[s][l].name+"</a></li>";return i+"</ul>"}(),$("#content").append('<div id="menuIndex" class="sidenav"></div>'),$("#menuIndex").append($(o)).on("click","a",(function(e){e.preventDefault(),e=$(this).attr("data-id")?"#"+$(this).attr("data-id"):"h1",e=$(e).offset().top,$("body, html").animate({scrollTop:e-30},400,"swing")})),$(window).load((function(){var e=[],t=($.each($("#menuIndex li a"),(function(t,n){n=$(n).attr("data-id")?"#"+$(n).attr("data-id"):"h1",n=$(n).offset().top,e.push(n)})),$("#menuIndex").offset().top),n=$("#menuIndex").offset().left;$(window).scroll((function(){a((function(){var i,o=$(window).scrollTop(),a=e.length;if(t<o+20?$("#menuIndex").css({position:"fixed",top:"20px",left:n}):$("#menuIndex").css({position:"static",top:0,left:0}),e[a-1]<o+60)i=a;else for(var r=0;r<a;r++)if(o+60<=e[r]){i=r;break}$("#menuIndex li").removeClass("on"),$("#menuIndex li").eq(i-1).addClass("on")}))})),$(window).resize((function(){$("#menuIndex").css({position:"static",top:0,left:0}),t=$("#menuIndex").offset().top,n=$("#menuIndex").offset().left,$(window).trigger("scroll"),$("#menuIndex").css("max-height",$(window).height()-80)}))})),$("#menuIndex").css("max-height",$(window).height()-80)),/css3-animation/.test(location.href)&&($("head").append("<link rel='stylesheet' type='text/css' href='/css/css3-ani.css'/>"),$.getScript("/js/css3-animate.js",(function(){}))),null!==e.any()&&$("#header").show(),$("#header").on("click",".btn-bar",(function(){$("body").hasClass("side")?($("body").removeClass("side"),$("#sidebar").hide(),$("#sidebar-mask").hide(200)):($("body").addClass("side"),$("#sidebar").show(),$("#sidebar-mask").show(200))})),$("#sidebar-mask").on("click",(function(){$(this).hide(),$("body").removeClass("side"),$("#sidebar").hide(200)}));{const e=$(window),t=$(document),n=$("progress"),i=$(".progress-label"),o=()=>e.scrollTop(),a=()=>t.height()-e.height(),r=()=>Math.round(e.scrollTop()/(t.height()-e.height())*100);i.text(r()+"%"),n.attr({value:o(),max:a()}),t.on("scroll",()=>{i.text(r()+"%"),n.attr({value:o()})}),e.on("resize",()=>{i.text(r()+"%"),n.attr({value:o(),max:a()})})}}))}]);