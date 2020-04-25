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
//以下代码请勿轻易修改！Do not modify the following codes without deep thoughts!
btn.click(function () {
    self.setInterval(function () {
        $('.playButton').click();
        // 静音
        setTimeout(function () {
            if (!$('.volumeBox').hasClass('volumeNone')) {
                $('.volumeIcon').click();
            }
        }, 500);
        // 屏蔽弹题
        $("#app > div > div.el-dialog__wrapper").remove()
        $("body > div.v-modal").remove()
        // 设置1.5倍速
        $('.speedTab15').click();
        // 自动播放下一集
        if ($('li.clearfix.video.current_play > div > b.fl.time_icofinish"').length>0||$('li.clearfix.video.current_play >div> div>b.fl.time_icofinish').length>0) {
            $('#nextBtn').click();
        }
        $("#lfsenior").html("自动模式已开启");
    }, 1000);
});
