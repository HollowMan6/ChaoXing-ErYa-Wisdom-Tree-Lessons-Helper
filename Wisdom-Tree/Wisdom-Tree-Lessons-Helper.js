// ==UserScript==
// @icon    icon.png
// @name    智慧树课程助手 Wisdom Tree Lessons Helper
// @description      课程自动切换，自动播放 
//          Course automatic switching, automatic 1.5 times speed playback
// @supportURL  http://www.cnblogs.com/yinbiao/p/8721391.html
// @match   *://studyh5.zhihuishu.com/videoStudy.html#/studyVideo?recruitAndCourseId=*
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
var time, foretime, i, newPage;
//以下代码请勿轻易修改！Do not modify the following codes without deep thoughts!
btn.click(function () {
    time = 1600;
    foretime = 1600;
    newPage = true
    i = self.setInterval(function () {
        if (newPage == true) {
            while (true) {
                if ($('.currentTime').text() != "") {
                        foretime += TimeConvert($('.currentTime').text());
                        break;
                }
            }
            newPage = false
        }
        while (true) {
            if ($('.currentTime').text() != "") {
                time = foretime - TimeConvert($('.currentTime').text());
                break;
            }
        }
        $('.playButton').click();
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
            while (true) {
                if ($('.currentTime').text() != "") {
                    foretime = time;
                    break;
                }
            }
            $('#nextBtn').click();
            newPage = true
        }
        if (time <= 0) {
            $("#lfsenior").html("点击开启自动播放模式");
            time = 1600;
            foretime = 1600;
            $('.pauseButton').click();
            i = window.clearInterval(i)
            alert("时间到，每天1600秒的学习习惯分到手！");
        }
        else {
            $("#lfsenior").html("自动模式已开启, 倒计时".concat(time.toString()));
        }
    }, 1000);
});
function TimeConvert(string) {
    return parseInt(string.split(":", 3)[0]) * 3600 + parseInt(string.split(":", 3)[1]) * 60 + parseInt(string.split(":", 3)[2])
}
