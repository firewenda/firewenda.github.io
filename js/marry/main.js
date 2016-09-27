$(function() {
    template.config("escape", false);
    var config = {
        voteid: "1446029479"
    };
    //倒计时
    function countDown(endtime, node, aftercallback) {
        this.endtime = endtime || 100000;
        this.aftercallback = aftercallback || function() {};
        this.node = node;
        this.count = 0;
        this.timmer = "";
        this.init();
    }
    countDown.prototype = {
        _renderText: function() {
            var self = this,
                nowsec = self.count;
            var seconds = nowsec % 60 + "",
                minutes = parseInt(nowsec / 60) + "";
            seconds = seconds.length <= 1 ? seconds = "0" + seconds : "";
            minutes = minutes.length <= 1 ? minutes = "0" + minutes : "";
            $(self.node).html(minutes + ":" + seconds);
        },
        _startOK: function() {
            var self = this;
            self.timmer = setInterval(function() {
                self.count += 1;
                self._renderText();
                if (self.count >= self.endtime) { self._destroy(); }
            }, 1000);
        },
        _destroy: function() {
            var self = this;
            self.count = 0;
            clearInterval(self.timmer);
            self.aftercallback();
        },
        init: function() {
            var self = this;
            self._startOK();
        }
    };
    var firstPage = {
        setDate: function() {
            var now = new Date(),
                Hour = now.getHours(),
                Minute = now.getMinutes(),
                Month = now.getMonth() + 1,
                Date = now.getDate(),
                Week = now.getDay();
            Hour = Hour.length <= 1 ? Hour = "0" + Hour : "";
            Minute = Minute.length <= 1 ? Minute = "0" + Minute : "";
            var dayMap = ["星期日", "星期一", "星期二", "星期三", "星期三", "星期四", "星期五", "星期六"];
            $(".first-time").html(Hour + ":" + Minute);
            $(".first-dw").html(Month + "月" + Date + "日" + " " + dayMap[Week]);

        },
        bindEvent: function(callback) {
            $(".first-page").on("swipeRight", function() {
                //console.log("swipe");
                //window.dingdongm.destroy();
                $(".first-page").addClass("fadeOutRight animated");
                window.unlockm.playm();
                callback();
            });
        },
        init: function(callback) {
            var self = this;
            self.bindEvent(callback);
        }
    };
    var lastPage = {
        getZan: function() {
            $.ajax({
                url: "http://h5.yunplus.com.cn/vote/voteadmin/getvote.php?key=" + config.voteid,
                dataType: "jsonp",
                type: "get",
                success: function(d) {
                    console.log(d);
                    var num = d.data[0].voteNum;
                    $(".zan-num").html(num);
                }
            });
        },
        setZan: function() {
            var self = this;
            $.ajax({
                url: "http://h5.yunplus.com.cn/vote/voteadmin/addvotenum.php?voteid=" + config.voteid,
                dataType: "jsonp",
                type: "get",
                success: function(d) {
                    if (d.success) {
                        //alert("投票成功");
                        self.getZan();
                    }
                }
            });
        },
        init: function() {
            var self = this;
            window.bg_music.playm();
            var html = $("#lastTmpl").html();
            $(".last-page").html(html);
            $(".page-ring").add(".chatting-page").removeClass("fadeIn animated");
            $(".last-page").addClass("fadeIn animated");
            self.getZan();
            $(".last-zan").on("click", function() {
                self.setZan();
                $(".last-mask").addClass("fadeIn animated");
                $(".last-scene").css('opacity', "0");
            });
            $(".last-mask").on("click", function() {
                $(".last-mask").removeClass("fadeIn animated");
                $(".last-scene").css('opacity', "1");
            });
            /*$(document).delegate(".last-zan","click",function(){
            	self.setZan();
            });*/
        }
    };
    var pageChat = {
        chatText: [
            { author: "target", word: "hi，页面明早要上线，版头还有点问题，现在能改下吗？" },
            { author: "self", word: "啊？都凌晨了，明早到公司帮你改可以吗？" },
            { author: "target", word: "来不及啦，页面明天9点就要上线了！" },
            { author: "self", word: "<span class='wx-emj emj-crazy'></span>要改的东西多吗？" },
            { author: "target", word: "不多的，我打电话跟你说下要改的内容哈" },
            { author: "self", word: "那好吧 <span class='wx-emj emj-noword'></span>" },
            { author: "target", word: "恩，辛苦了哈，亲" },
            { author: "self", word: "<span class='wx-emj emj-cry'></span>" },
        ],
        index: -1,
        pn: ".chat-list",
        renderChat: function(data) {
            var html = template('chatTmpl', data);
            return html;
        },
        setTime: function() {
            var hour = new Date().getHours(),
                minute = new Date().getMinutes() + "";
            minute = minute.length < 2 ? minute = "0" + minute : "";
            //$(".chat-time").html(hour+":"+minute);
        },
        animnext: function() {
            var self = this;
            self.index += 1;
            $(".show-input .input-scroll-text").empty();
            $(self.pn).append(self.renderChat(self.chatText[self.index]));
            document.querySelector(".page-fix").scrollTop = document.querySelector(".page-fix").scrollTop + $(self.pn).height() + 10;
        },
        init: function() {
            var self = this;
            self.setTime();
            //出现第一条对话
            //var typetext='<span class="type-pointer fadeOut animatedhide infinite"></span>';
            //$(self.pn).append(self.renderChat(self.chatText[0]));
            /*$(".show-input .input-scroll-text").html(self.chatText[self.index+1].word+typetext);*/
            var delay = 1800,
                times = 0;
            self.timmer = setInterval(function() {
                if (times < 7) {
                    self.animnext();
                    if (times % 2 == 1) {
                        window.dingdongm.playm();
                    }
                    times += 1;

                } else {
                    clearInterval(self.timmer);
                    window.phonePage = new _phonePage();

                }
            }, delay);
            /*setTimeout(function(){
            	self.animnext();
            	setTimeout(function(){
            		self.animnext();
            		setTimeout(function(){
            			self.animnext();
            			setTimeout(function(){
            				self.animnext();
            				setTimeout(function(){
            					self.animnext();
            					setTimeout(function(){
            						self.animnext();
            						setTimeout(function(){
            							self.animnext();
            							setTimeout(function(){
            								//$(".show-input .input-scroll-text").html("点击发送，向设计师告白→");
            								//$(".btn-advioce").css('display',"block");
            								window.phonePage=new _phonePage();
            							},delay);
            						},delay)
            					},delay);
            				},delay);
            			},delay);
            		},delay);
            	},delay)
            },delay);*/
            self.animnext();
            window.dingdongm.playm();
            $(".btn-advioce").on("click", function() {
                $(".chatting-page").addClass("fadeOut animatedhide");
                lastPage.init();
            });
        }
    };

    function _music(conf) {
        var _this = this;
        this.id = conf.id || "#bg_music";
        this.src = conf.src || "images/marry/bg.mp3";
        this.dom = $(_this.id);
        this.init = function() {
            _this.dom.attr('src', _this.src);
        };
        this.destroy = function() {
            _this.dom.remove();
        };
        this.init();
    }

    function _phonePage() {
        var self = this;
        this.pagename = $(".page-ring");
        this.pageUp = $(".phone-call");
        this.pageDown = $(".phone-pick");
        self.init();
    }
    _phonePage.prototype = {
        pageClose: function() {
            this.pagename.addClass('fadeOut animatedhide');
        },
        goNext: function() {
            //进入下一场景
            var self = this;
            $(".chatting-page").addClass("fadeOut animatedhide");
            lastPage.init();
        },
        bindEvent: function() {
            var self = this;
            $(".btn-get").on("click", function() {
                window.ringm.destroy();
                self.pageUp.css("display", "none");
                self.pageDown.addClass("fadeIn animated");
                window.phonem.playm();
                self.countdown = new countDown(10, ".phone-count", function() {
                    self.goNext();
                });
            });
            $(".phone-btn").on("click", function() {
                window.phonem.destroy();
                self.pageClose();
                self.countdown._destroy();
                //切换到最后一屏
                self.goNext();
            });
        },
        init: function() {
            var self = this;
            window.ringm.playm();
            $(".chatting-page").addClass("fadeOut animatedhide");
            self.pagename.addClass("fadeIn animated");
            self.bindEvent();
        }
    };
    _music.prototype = {
            playm: function() {
                var self = this;
                self.dom[0].play();
            }
        };
        //添加重力感应
    function addOri() {
        window.ondeviceorientation = function(e) {
            //$(".showlog").html(e.gamma+"|"+e.beta);
            if ($(".last-person").length >= 1) {
                var ang;
                var o = window.orientation; //获取设备方向
                if (o == 90) {
                    ang = e.beta; //设备横向1
                } else if (o == -90) {
                    ang = -e.beta; //设备横向2
                } else if (o == '0') {
                    ang = e.gamma; //设备纵向
                }
                ang = ang * 10;
                ang = ang < -$(window).width() / 2 ? ang = -$(window).width() / 2 : "";
                ang = ang > $(window).width() / 2 ? ang = $(window).width() / 2 : "";
                $(".last-person").css({ '-webkit-transform': 'translateX(' + ang + 'px)' });
                //$(".last-mask-img").css({'-webkit-transform':'translateX('+ang+'px)'});
            }
        };
    }
    //初始化
    function init() {
        window.bg_music = new _music({
            id: "#bg_music",
            src: "images/marry/bg.mp3"
        });
        window.unlockm = new _music({
            id: "#unlock",
            src: "images/marry/unlock.wav"
        });
        window.ringm = new _music({
            id: "#ring",
            src: "images/marry/phone.mp3"
        });
        window.phonem = new _music({
            id: "#phone",
            src: "images/marry/call.mp3"
        });
        window.dingdongm = new _music({
            id: "#dingdong",
            src: "images/marry/dingdong.mp3"
        });
        firstPage.init(function() {
            setTimeout(function() {
                pageChat.init();
            }, 500);
        });
        $(".first-page").add(".last-page").add(".page-ring").on("touchmove", function(e) {
            e.preventDefault();
        });
        addOri();


        //mock
        //lastPage.init();
    }
    init();
});
window.onload = function() {
    window.dingdongm.playm();
    $(".page-loading").css('display', 'none');
};
