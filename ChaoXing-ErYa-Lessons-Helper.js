// ==UserScript==
// @icon            https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=3507160010,2121752339&fm=77&s=1947387E66836BF52423D3FB0300A01E
// @name                        超星尔雅课程助手
// @description                课程自动切换，自动静音播放（默认静音），播放线路切换（手动配置参数）
// @author                        HollowMan
// @supportURL      https://github.com/HollowMan6/ChaoXing-ErYa-Lessons-Helper
// @match                        *://*.chaoxing.com/mycourse/*
// @requier         https://mooc1-1.chaoxing.com/js/build/jquery.js
// ==/UserScript==

//按钮参数设置
var fa = $("body");
var btn = $("<li></li>");
var json = {
    "background": "#DC143C",
    "height": "16px",
    "padding": "5px",
    "z-index": 999999,
    "cursor": "pointer",
    "top": "300px",
    "right": "120px",
    "position": "fixed"
};
btn.css(json);
btn.html("<span id='lfsenior'>点击开启自动播放模式</span>");
fa.append(btn);

btn.click(function () {
    var n = 2, m = 1, errors = 0;
    setInterval(function () {
        if (m == 1) {
            //切换到视频标签
            try {
                let blk = document.getElementById("dct1");
                if (blk.title == "视频") {
                    blk.click();
                }
                else {
                    document.getElementById("dct2").click();
                }
            }
            catch (err) { console.warn(err.message); }
            m -= 1;
        }
        let tmp;
        let playline = $("iframe").contents().find("iframe").contents().find("li.vjs-menu-item.vjs-selected");
        //获取iframe
        var video = $("iframe").contents().find("iframe").contents();
        //播放函数
        var play = function () {
            video.find("#video > button").click();
            var jy = video.find("#video > div.vjs-control-bar > div.vjs-volume-panel.vjs-control.vjs-volume-panel-vertical > button");
            if (jy.attr("title") != "取消静音") {
                jy.click()
            }
        }
        //如果正在加载
        var load = video.find("#loading");
        if (load.css("visibility") != "hidden") {
            return;
        }
        //获取当前进度
        var spans = video.find("#video > div.vjs-control-bar > div.vjs-progress-control.vjs-control > div").attr("aria-valuenow");
        //切换线路
        try {
            if (n > 0) {
                playline[1].nextElementSibling.click();
            }
            n -= 1;
        }
        catch (err) { errors += 1; }
        //防止切换线路多次不成功导致的问题
        if (errors >= 30) {
            n = 0;
        }
        // 如果还没播放完
        if (spans != 100) {
            play();
        }
        //如果播放结束
        if (spans == 100) {
            //跳转到下一页
            try {
                tmp = $("h4.currents")[0].parentElement.parentElement.nextElementSibling.children[0];
            }
            catch (err) { tmp = $("h4.currents")[0].parentElement.parentElement.parentElement.nextElementSibling.children[0]; }
            if (tmp.hasAttribute('href')) {
                if (tmp.href != "javascript:void") {
                    tmp.children[0].click();
                }
            }
            else {
                tmp = tmp.parentElement.children[1].children[0];
                if (tmp.href != "javascript:void") {
                    tmp.children[0].click();
                }
            }
            //参数重置
            n = 2, m = 1, errors = 0;
        }
        //显示播放进度
        $("#lfsenior").html("自动模式已开启,本章进度:" + spans + "%");
    }, 100);
});