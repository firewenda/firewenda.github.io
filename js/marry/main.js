$(function() {
    template.config("escape", false);

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
        init: function() {
            var self = this;
            //window.bg_music.playm();
            var html = $("#lastTmpl").html();
            $(".last-page").html(html);
            $(".page-ring").add(".chatting-page").removeClass("fadeIn animated");
            $(".last-page").addClass("fadeIn animated");
        }
    };
    var pageChat = {
        chatText: [
            { author: "self", word: "hi，我11月27号结婚，请您务必参加，我在家恭候您的大驾哦。" },
            { author: "target", word: "哇！你终于定下来，要结婚了，恭喜恭喜呀。" },
            { author: "self", word: "谢谢！谢谢！到时可一定要来哦！" },
            { author: "target", word: "嗯～必须的，具体在哪举行婚礼呀？" },
            { author: "self", word: "在我老婆家，具体地址打电话和你说下。" },
            { author: "target", word: "好的。" },
            { author: "self", word: "恩，欢迎亲。" },
            { author: "target", word: "<span class='wx-emj emj-cry'></span>" },
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
