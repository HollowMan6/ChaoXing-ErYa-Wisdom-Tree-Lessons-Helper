// ==UserScript==
// @icon    icon.png
// @name    超星尔雅课程助手 ChaoXing ErYa Lessons Helper
// @description      课程自动切换，自动静音播放（默认静音），播放线路切换（手动配置参数）
//          Automatic course switching, automatic silent playback (default silence), play line switching (manual configuration of parameters)
// @author  HollowMan
// @supportURL  https://github.com/HollowMan6/ChaoXing-ErYa-Lessons-Helper
// @match   *://*.chaoxing.com/mycourse/*
// ==/UserScript==

// by 'hollowman6' from Lanzhou University(兰州大学)

// 警告：
// 仅供测试使用，不可用于任何非法用途！
// 对于使用本代码所造成的一切不良后果，本人将不负任何责任！

// Warning:
// For TESTING ONLY, not for any ILLIGAL USE!
// I will not be responsible for any adverse consequences caused by using this code.

//按钮参数设置 Button Parameters Setting
var fa = $("body");
var btn = $("<li></li>");
var json = {
  background: "#31E16D",
  height: "16px",
  padding: "5px",
  "z-index": 999999,
  cursor: "pointer",
  top: "300px",
  right: "120px",
  position: "fixed",
};
btn.css(json);
//Click to turn on Open Autoplay Mode
btn.html("<span id='lfsenior'>点击开启自动播放模式</span>");
fa.append(btn);

//以下代码请勿轻易修改！Do not modify the following codes without deep thoughts!
btn.click(function () {
  //var n = 2, errors = 0;
  setInterval(function () {
    while (
      document.getElementsByClassName(" currents")[0].title.search("视频") ==
        -1 &&
      document.getElementsByClassName(" currents").length != 1
    ) {
      document.getElementsByClassName("orientationright ")[0].click();
    }
    // 如果遇到同一课程小节多标签未标“视频”字样无法跳转问题，请在确保网络状况良好的情况下使用下面注释的while语句。
    // while ($("iframe").contents().find("iframe").length==0) {
    //     var date = new Date();
    //     var curDate = null;
    //     do { curDate = new Date(); }
    //     while(curDate-date < 2000);
    //     document.getElementsByClassName("orientationright ")[0].click();
    // }

    //获取iframe     get iframe
    var video = $("iframe").contents().find("iframe").contents();
    //播放函数 Playback Function
    var play = function () {
      video.find("#video > button").click();
      var jy = video.find(
        "#video > div.vjs-control-bar > div.vjs-volume-panel.vjs-control.vjs-volume-panel-vertical > button"
      );
      //Mute
      if (jy.attr("title") != "取消静音") {
        jy.click();
      }
      //Rate
      var rate = video.find(
        "#video > div.vjs-control-bar > div.vjs-playback-rate.vjs-menu-button.vjs-menu-button-popup.vjs-button > button"
      );
      if (rate.length > 0) {
        var rateMenu = rate[0].parentNode.childNodes;
        if (rateMenu.length > 0) {
          var rateList = rateMenu[1].childNodes[0].childNodes;
          if (rateList.length > 0) {
            rateList[0].click();
          }
        }
      }
    };
    //如果正在加载 If Loading
    var load = video.find("#loading");
    if (load.css("visibility") != "hidden") {
      return;
    }
    //获取当前进度 Get the current schedule
    var spans = video
      .find(
        "#video > div.vjs-control-bar > div.vjs-progress-control.vjs-control > div"
      )
      .attr("aria-valuenow");
    // //切换线路 Switching lines
    // let playline = $("iframe").contents().find("iframe").contents().find("li.vjs-menu-item.vjs-selected");
    // try {
    //     if (n > 0) {
    //         playline[1].nextElementSibling.click();
    //     }
    //     n -= 1;
    // }
    // catch (err) { errors += 1; }
    // //防止切换线路多次不成功导致的问题 Preventing problems caused by multiple unsuccessful switching lines
    // if (errors >= 30) {
    //     n = 0;
    // }
    // 如果还没播放完  If it hasn't finished playing yet
    if (spans != 100) {
      play();
    }
    //如果播放结束 If the playback ends
    if (spans == 100) {
      //跳转到下一课 Jump to the next course
      document.getElementsByClassName("orientationright ")[0].click();
      //参数重置 Parameters Reset
      //n = 2,  errors = 0;
    }
    //显示播放进度 Display playback progress
    //Automation mode has been opened. Progress of this lesson is as follows:
    $("#lfsenior").html("自动模式已开启,本章进度:" + spans + "%"); // lgtm [js/xss-through-dom]
  }, 100);
});
