# 超星尔雅、智慧树课程助手

[![last-commit](https://img.shields.io/github/last-commit/HollowMan6/ChaoXing-ErYa-Wisdom-Tree-Lessons-Helper)](../../graphs/commit-activity)
[![release-date](https://img.shields.io/github/release-date/HollowMan6/ChaoXing-ErYa-Wisdom-Tree-Lessons-Helper)](../../releases)

[![Followers](https://img.shields.io/github/followers/HollowMan6?style=social)](https://github.com/HollowMan6?tab=followers)
[![watchers](https://img.shields.io/github/watchers/HollowMan6/ChaoXing-ErYa-Wisdom-Tree-Lessons-Helper?style=social)](../../watchers)
[![stars](https://img.shields.io/github/stars/HollowMan6/ChaoXing-ErYa-Wisdom-Tree-Lessons-Helper?style=social)](../../stargazers)
[![forks](https://img.shields.io/github/forks/HollowMan6/ChaoXing-ErYa-Wisdom-Tree-Lessons-Helper?style=social)](../../network/members)

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://hollowman6.github.io/fund.html)
[![GPL Licence](https://badges.frapsoft.com/os/gpl/gpl.svg?v=103)](https://opensource.org/licenses/GPL-3.0/)
[![Repo-Size](https://img.shields.io/github/repo-size/HollowMan6/ChaoXing-ErYa-Wisdom-Tree-Lessons-Helper.svg)](../../archive/master.zip)

[![Total alerts](https://img.shields.io/lgtm/alerts/g/HollowMan6/ChaoXing-ErYa-Wisdom-Tree-Lessons-Helper.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/HollowMan6/ChaoXing-ErYa-Wisdom-Tree-Lessons-Helper/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/HollowMan6/ChaoXing-ErYa-Wisdom-Tree-Lessons-Helper.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/HollowMan6/ChaoXing-ErYa-Wisdom-Tree-Lessons-Helper/context:javascript)

(English version is down below)

本[脚本](ChaoXing-ErYa-Lessons-Helper.js)和[Chrome扩展插件](Chrome/ChaoXing-ErYa-Lessons-Helper.crx)适用于[超星尔雅慕课](http://erya.mooc.chaoxing.com/)(即观看视频网页地址满足 \*://*.chaoxing.com/mycourse/\* )(*表示省略）。
参考[Github上的这个项目](https://github.com/GarlenMa/ZhihuishuCourse)，我也配置了**智慧树课程助手**[脚本](Wisdom-Tree/Wisdom-Tree-Lessons-Helper.js)和[Chrome扩展插件](Chrome/Wisdom-Tree-Lessons-Helper.crx)，支持课程自动切换，自动播放, 1600秒播放计时，助你获得学习习惯分。

***优势***：操作简单，无需安装配套软件，可视进度，安全;

开启时只需**点击按钮**。如果想停止本脚本请刷新页面。

同时，你也可以通过**Chrome扩展程序**开发者模式**加载已解压的扩展程序**，将本文件夹下载到本地进行加载。

如果你觉得**验证码或视频中的弹题**很讨厌，请尝试也建议向兼容 **AdBlock Plus** 语法的广告过滤扩展添加这条自定义规则：

```Text
*.chaoxing.com/richvideo/initdatawithviewer*
```

## 功能

支持 **课程自动切换，自动静音播放（默认静音），播放线路切换（需手动配置参数）;**

若想要更多功能，如 **自动答题，5秒内一节课 **（***都是高危不良行为***），**切换画质** 的，请[参考这里](https://poxiaobbs.com/thread-3268-1-1.html)（脚本未测试，**似乎已失效**）;

建议在一些微信公众号如：**小马搜题订阅号，问答库，殿下网络互联** 等的帮助下，题目自己手动做；

***已知问题***：已经显示完成的视频再次播放或自动播放的过程中手动进行跳转视频的操作将无法自动切换线路。且切换线路不够智能，只能切换到最后一个线路。

## 配置播放线路

建议在**谷歌浏览器**下**F12**进入**开发者模式**，然后切换到**console**，在**视频已经加载的前提下**，首先输入以下命令：

```JavaScript
let playline = $("iframe").contents().find("iframe").contents().find("li.vjs-menu-item.vjs-selected");
```

然后将下面命令的变量**i**从**0**递增，进行尝试，当看到显示了线路名称，记下**i**，并对脚本对应的地方进行修改：

```JavaScript
playline[1].nextElementSibling.click();
```

如果不想切换线路，则可以将**切换线路**和**防止切换线路多次不成功导致的问题**注释包括的部分进行清理，并一并清理变量**errors**和**n**;

## ***声明：将本脚本运用于任何不正当途径所产生的不良后果，本人将不承担任何责任。***

因为时间有限，所以脚本做得有些简单，很有可能不太稳定，欢迎大家进行完善。

最新测试时间：***2020年3月18日***，不能保证脚本在此之后**一直有效**；

# ChaoXing ErYa Wisdom Tree Lessons Helper

The [script](ChaoXing-ErYa-Lessons-Helper.js) and [Chrome extension plug-ins](Chrome/ChaoXing-ErYa-Lessons-Helper.crx) are suitable for **[ChaoXing Erya MOOC](http://erya.mooc.chaoxing.com/)** (i.e. web address meets \*://*.chaoxing.com/mycourse/\*)(* denotes ellipsis).

Referring to that [Repository on the Github](https://github.com/GarlenMa/ZhihuishuCourse), I also configure **Wisdom-Tree-Lessons-Helper** [Script](Wisdom-Tree/Wisdom-Tree-Lessons-Helper.js) and [Chrome extension plug-ins](Chrome/Wisdom-Tree-Lessons-Helper.crx), which support automatic course switching and playing, and it ensures your grade for learning habits by countdownning 1600 seconds every time you use it.

***Advantages***: simple operation, no need to install supporting software, visual progress, safety;

Just **click the button** when you open it. **Refresh the page** if you want to stop.

At the same time, you can also download this folder locally and using the plugin by add it to **Chrome Extension Program** Developer Mode **Loading the decompressed Extension Program**.

If you find the the authentication code or questions block you from playing video annoying, try and recommend adding this custom rule to the AdBlock Plus grammar-compatible ad filtering extension as well:

```Text
*.chaoxing.com/richvideo/initdatawithviewer*
```

## Functions

Support **automatic course switching, automatic silent playback (default silence), play line switching (manual configuration of parameters)**;

If you want more functions, such as automatic doing quizs, a lesson done in 5 seconds (all high-risk bad behavior) and quality switching, please [refer to here](https://poxiaobbs.com/thread-3268-1-1.html)(scripts are not tested by me and seem to be **invalid**)(**Chinese Version**);

It is suggested that with the help of some Wechat public accounts such as **小马搜题订阅号，问答库，殿下网络互联** , the questions after each lesson should be done **by yourself**.

Known problem: The manual operation of jumping video in the process of replaying or playing the completed video will not automatically switch the Play line. Moreover,  the playline-switching function is not smart enough, and can only switch to the last line.

## Configuration of playback lines

It is recommended that **F12** enter developer mode under **Chrome**, then switch to **console**. On the premise that the video has been loaded, first enter the following commands:

```JavaScript
let playline = $("iframe").contents().find("iframe").contents().find("li.vjs-menu-item.vjs-selected");
```

Then increase the variable **i** of the following command from 0 to try. When you see the line name displayed, remenber the value of **i** and modify the corresponding place of the script:

```JavaScript
playline[1].nextElementSibling.click();
```

If you don't want to switch lines, you can clean up the parts included in the notes **Switching lines** and **Preventing problems caused by multiple unsuccessful switching lines**, and clean up the variables **errors** and **n** together.

## ***Statement: I will not bear any responsibility for the adverse consequences of using this script in any improper way.***

Because of the limited time, the script is a little simple and probably not stable. Modifying and improving it is welcomed.

Latest Test time: ***March 18, 2020***, can not guarantee that the script will be always valid after the date;
