$(function(){
    function promiseAjax(ajaxData) {
        var data = util.extend({}, ajaxData);
        //show loading
        util.loading.show();
        let dtd = $.Deferred();

        var url = data.url;
        delete data.url;

        $.ajax({
            url: url,
            data: data,
            type: 'get',
            dataType: 'json',
            success: function (d) {
                if (d.code === 0) {
                    dtd.resolve(d);
                } else {
                    dtd.reject(d);
                }
            },
            error: function () {
                var d = {
                    msg: '服务器无响应'
                }
                dtd.reject(d);
            }
        });
        return dtd.promise();
    }

    // 展示分类
    $.when(promiseAjax({
        url: 'https://api.it120.cc/dawendong/shop/goods/category/all',
    }))
    .then(function (res) {
        $('.my-nav-tabs').html(Handlebars.compile($("#categoryList").html())(res));
    })
    .always(function () {
        util.loading.hide();
    });

    // 展示公告
    $.when(promiseAjax({
        url: 'https://api.it120.cc/dawendong/notice/list',
        pageSize: 5,
    }))
    .then(function (res) {
        $('.notice strong').text(res.data.dataList[0].title);
    })
    .always(function () {
        util.loading.hide();
    });

    //获取所有商品
    $.when(promiseAjax({
        url: 'https://api.it120.cc/dawendong/shop/goods/list',
        categoryId: '',
        nameLike: $.trim($('.search-content').val())
    }))
    .then(function (res) {
        if(res.code === 0){
            $('.cd-gallery').html(Handlebars.compile($("#productList").html())(res));
        }
    })
    .always(function () {
        util.loading.hide();
    });

    //分类切换
    $(document).on('click', '.my-nav-tabs li', function(){
        $('.my-nav-tabs li').removeClass('active');
        $(this).addClass('active');
        $('.cd-gallery').html('');
        
        $.when(promiseAjax({
            url: 'https://api.it120.cc/dawendong/shop/goods/list',
            categoryId: $(this).attr('data-id'),
            nameLike: $.trim($('.search-content').val())
        }))
        .then(function (res) {
            if(res.code === 0){
                $('.cd-gallery').html(Handlebars.compile($("#productList").html())(res));
            }
        })
        .always(function () {
            util.loading.hide();
        });
    })

    //搜索
    $('.js-search-btn').on('click', function(){
        $('.cd-gallery').html('');
        $.when(promiseAjax({
            url: 'https://api.it120.cc/dawendong/shop/goods/list',
            categoryId: $('.my-nav-tabs li.active').attr('data-id'),
            nameLike: $.trim($('.search-content').val())
        }))
        .then(function (res) {
            if(res.code === 0){
                $('.cd-gallery').html(Handlebars.compile($("#productList").html())(res));
            }
        })
        .always(function () {
            util.loading.hide();
        });
    })
})