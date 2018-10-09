$(document).ready(function () {
    $('.top-menu').each(function (index) {
        $(this).prev().addClass('collapsible').click(function () {
            if ($(this).next().css('display') == 'none') {
                $(this).next().slideDown(300, function () {
                    $(this).prev().removeClass('collapsed').addClass('expanded');
                });
            } else {
                $(this).next().slideUp(300, function () {
                    $(this).prev().removeClass('expanded').addClass('collapsed');
                    $(this).find('ul').each(function () {
                        $(this).hide().prev().removeClass('expanded').addClass('collapsed');
                    });
                });
            }
            return false;
        });
    });
});

$(document).ready(function () {
    $(".main-nav .drop-down").click(function () {
        $(this).find("~ .dropped").slideToggle();
    });
    $('.drop-down').click(function () {
        $(this).find(".fa").toggleClass('main-nav-active');
    });
});

$(document).ready(function () {
    $(".calc-account__select-term li").click(function (event) {
        $(this).parent().find('.tab-current').removeClass('tab-current');
        $(this).addClass('tab-current');
        var id = $(this).data('id');
        $(".content-wrap-section section").each(function () {
            if ($(this).parent().attr('data-type') == 'clc') {
                $(this).removeClass("content-current");
            }
        });
        $(".content-wrap-section").find(id).addClass("content-current");
    });


    $(".sttabs.tabs-style-iconbox li").click(function (event) {
        $(this).parent().find('.tab-current').removeClass('tab-current');
        $(this).addClass('tab-current');
        var id = $(this).data('id');
        $(".content-wrap-section section").each(function () {
            if ($(this).parent().attr('data-type') == 'deposit') {
                $(this).removeClass("content-current");
            }
        });
        $(".content-wrap-section").find(id).addClass("content-current");
    });

    var $range = $("#range_46"),
        $result = $("#result_416");
    var track = function (data) {
        $result.val(data.from);
        var v = $result.val();
        $result.parents("section").find("input[name='plan2']").val(isNaN(v) ? '' : (v * 1.14 - v).toFixed(2));
        $result.parents("section").find("input[name='plan1']").val(isNaN(v) ? '' : (v * 1.14).toFixed(2));
        if ($result[0].oninput)
            $result[0].oninput();
    };

    $range.ionRangeSlider({
        type: "single",
        min: 10,
        max: 100,
        from: 10,
        step: 10,
        onStart: track,
        onChange: track,
        onFinish: track,
        onUpdate: track,
        prettify_enabled: true,
        postfix: gettext(" USD")
    });

    var $range_461 = $("#range_461"),
        $result_461 = $("#result_4161");

    var track = function (data) {
        $result_461.val(data.from);
        var v = $result_461.val();
        $result_461.parents("section").find("input[name='plan2']").val(isNaN(v) ? '' : (v * 1.42 - v).toFixed(2));
        $result_461.parents("section").find("input[name='plan1']").val(isNaN(v) ? '' : (v * 1.42).toFixed(2));
        if ($result_461[0].oninput)
            $result_461[0].oninput();
    };

    $range_461.ionRangeSlider({
        type: "single",
        min: 101,
        max: 800,
        from: 101,
        step: 10,
        onStart: track,
        onChange: track,
        onFinish: track,
        onUpdate: track,
        prettify_enabled: true,
        postfix: gettext(" USD")
    });


    var $range_4611 = $("#range_4611"),
        $result_4611 = $("#result_41611");


    var track = function (data) {
        $result_4611.val(data.from);
        var v = $result_4611.val();
        $result_4611.parents("section").find("input[name='plan2']").val(isNaN(v) ? '' : (v * 2 - v).toFixed(2));
        $result_4611.parents("section").find("input[name='plan1']").val(isNaN(v) ? '' : (v * 2).toFixed(2));
        if ($result_4611[0].oninput)
            $result_4611[0].oninput();
    };

    $range_4611.ionRangeSlider({
        type: "single",
        min: 801,
        max: 100000,
        from: 801,
        step: 100,
        onStart: track,
        onChange: track,
        onFinish: track,
        onUpdate: track,
        prettify_enabled: true,
        postfix: gettext(" USD")
    });


    var $range_46111 = $("#range_46111"),
        $result_46111 = $("#result_416111");


    var track = function (data) {
        $result_46111.val(data.from);
        var v = $result_46111.val();
        $result_46111.parents("section").find("input[name='plan2']").val(isNaN(v) ? '' : (v * 2.15 - v).toFixed(2));
        $result_46111.parents("section").find("input[name='plan1']").val(isNaN(v) ? '' : (v * 2.15).toFixed(2));
        if ($result_46111[0].oninput)
            $result_46111[0].oninput();
    };

    $range_46111.ionRangeSlider({
        type: "single",
        min: 100,
        max: 300,
        from: 100,
        step: 10,
        onStart: track,
        onChange: track,
        onFinish: track,
        onUpdate: track,
        prettify_enabled: true,
        postfix: gettext(" USD")
    });

    var $range_11113 = $("#range_11113"),
        $result_11113 = $("#result_11113");


    var track = function (data) {
        $result_11113.val(data.from);
        var v = $result_11113.val();
        $result_11113.parents("section").find("input[name='plan2']").val(isNaN(v) ? '' : (v * 2.20 - v).toFixed(2));
        $result_11113.parents("section").find("input[name='plan1']").val(isNaN(v) ? '' : (v * 2.20).toFixed(2));
        if ($result_11113[0].oninput)
            $result_11113[0].oninput();
    };

    $range_11113.ionRangeSlider({
        type: "single",
        min: 301,
        max: 600,
        from: 301,
        step: 10,
        onStart: track,
        onChange: track,
        onFinish: track,
        onUpdate: track,
        prettify_enabled: true,
        postfix: gettext(" USD")
    });

    var $range_43222 = $("#range_43222"),
        $result_43222 = $("#result_43222");


    var track = function (data) {
        $result_43222.val(data.from);
        var v = $result_43222.val();
        $result_43222.parents("section").find("input[name='plan2']").val(isNaN(v) ? '' : (v * 2.25 - v).toFixed(2));
        $result_43222.parents("section").find("input[name='plan1']").val(isNaN(v) ? '' : (v * 2.25).toFixed(2));
        if ($result_43222[0].oninput)
            $result_43222[0].oninput();
    };

    $range_43222.ionRangeSlider({
        type: "single",
        min: 601,
        max: 100000,
        from: 601,
        step: 100,
        onStart: track,
        onChange: track,
        onFinish: track,
        onUpdate: track,
        prettify_enabled: true,
        postfix: gettext(" USD")
    });
});