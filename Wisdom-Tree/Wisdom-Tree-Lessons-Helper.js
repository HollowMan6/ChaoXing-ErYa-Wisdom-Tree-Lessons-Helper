// ==UserScript==
// @icon    icon.png
// @name    智慧树课程助手 Wisdom Tree Lessons Helper
// @description      课程自动切换，自动1.5倍速播放 
//          Course automatic switching, automatic 1.5 times speed playback
// @supportURL  http://www.cnblogs.com/yinbiao/p/8721391.html
// @match   *://study.zhihuishu.com/learningNew/videoList*
// ==/UserScript==

//按钮参数设置 Button Parameters Setting
var fa = $("body");
var btn = $("<li></li>");
var json = {
    "background": "#31E16D",
    "height": "16px",
    "padding": "5px",
    "z-index": 999999,
    "cursor": "pointer",
    "top": "225px",
    "right": "120px",
    "position": "fixed"
};
btn.css(json);
//Click to turn on Open Autoplay Mode
btn.html("<span id='lfsenior'>点击开启自动播放模式</span>");
fa.append(btn);

//以下代码请勿轻易修改！Do not modify the following codes without deep thoughts!
btn.click(function () {
    setInterval(function () {
        // 设置清晰度为流畅
        if ($('.line1gq').hasClass('active')) {
            $('.line1bq').click();
        }
        // 设置1.5倍速
        $('.speedTab15').click();
        // 静音
        setTimeout(function () {
            if (!$('.volumeBox').hasClass('volumeNone')) {
                $('.volumeIcon').click();
            }
        }, 500);
        // 关闭弹题
        if ($('.isExamFinish')) {
            $('.isExamFinish').val('0');
            setTimeout(function () {
                $('.popboxes_close.tmui_txt_hidd').click();
            }, 500);
        }
        // 自动播放下一集
        if (($('.currentTime').text() == $('.duration').text()) && $('.currentTime').text() != '00:00:00') {
            $('#nextBtn').click();
        }
        $("#lfsenior").html("自动模式已开启");
    }, 500);
});