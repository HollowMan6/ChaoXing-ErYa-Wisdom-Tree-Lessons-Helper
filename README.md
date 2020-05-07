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

***优势***：操作简单，无需安装配套软件，可视进度，安全;

开启功能只需**点击按钮**。如果想停止本脚本请刷新页面。

同时，你也可以通过**Chrome扩展程序**下打开开发者模式，然后选择**加载已解压的扩展程序**，将对应插件文件夹下载到本地进行加载。

当然，如果你使用的是非chrome浏览器，你也可以打开对应视频播放页面，按F12打开开发者工具，复制对应的脚本代码，在Console中粘贴并按回车然后继续进行操作。

## 智慧树

**智慧树课程助手**[脚本](Wisdom-Tree-Lessons-Helper/Wisdom-Tree-Lessons-Helper.js)，[Chrome扩展插件](Chrome-Extension/Wisdom-Tree-Lessons-Helper.crx)适用于[智慧树慕课](https://www.zhihuishu.com/)(即观看视频网页地址满足 \*://studyh5.zhihuishu.com/videoStudy.html\*)。

支持课程自动切换，自动1.5倍速静音播放，屏蔽弹题。

## 超星尔雅

本[脚本](ChaoXing-ErYa-Lessons-Helper/ChaoXing-ErYa-Lessons-Helper.js)和[Chrome扩展插件](Chrome-Extension/ChaoXing-ErYa-Lessons-Helper.crx)适用于[超星尔雅慕课](http://erya.mooc.chaoxing.com/)(即观看视频网页地址满足 \*://*.chaoxing.com/mycourse/\* )。

如果你觉得**验证码或视频中的弹题**很讨厌，请尝试也建议向兼容 **AdBlock Plus** 语法的广告过滤扩展添加这条自定义规则：

```Text
*.chaoxing.com/richvideo/initdatawithviewer*
```

支持 **课程自动切换，自动静音播放（默认静音），播放线路切换（需手动配置参数）;**

想要**自动答题，5秒内一节课**（***都是高危不良行为***）等功能的请绕道;

***已知问题***：已经显示完成的视频再次播放或自动播放的过程中手动进行跳转视频的操作将无法自动切换线路。且切换线路不够智能，只能切换到最后一个线路。

### 配置播放线路

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

最新测试时间：***2020年5月7日***，不能保证脚本在此之后**一直有效**；

# ChaoXing ErYa Wisdom Tree Lessons Helper

***Advantages***: simple operation, no need to install supporting software, visual progress, safety;

Just **click the button** when you want to activate the function. **Refresh the page** if you want to stop.

At the same time, you can also download this folder locally and using the Extensions by adding it to Chrome's **Settings** -> **Extensions** -> **Developer Mode " turn on"** -> **Load Unpacked**.

Of course, if you are not using Google Chrome, you can also open the corresponding video playing page, press F12 to open the developer tool, copy the corresponding script code, paste it in console and press enter to continue the operation.

## Wisdom Tree

**Wisdom-Tree-Lessons-Helper** [Script](Wisdom-Tree-Lessons-Helper/Wisdom-Tree-Lessons-Helper.js) and [Chrome-Extension](Chrome-Extension/Wisdom-Tree-Lessons-Helper.crx) are suitable for **[Wisdom Tree MOOC](https://www.zhihuishu.com/)(i.e. web address meets \*://studyh5.zhihuishu.com/videoStudy.html\*).

Support automatic course switching, playing at 1.5x speed in mute mode and hide the popped in questions.

## ChaoXing ErYa

The [script](ChaoXing-ErYa-Lessons-Helper/ChaoXing-ErYa-Lessons-Helper.js) and [Chrome-Extension](Chrome-Extension/ChaoXing-ErYa-Lessons-Helper.crx) are suitable for **[ChaoXing Erya MOOC](http://erya.mooc.chaoxing.com/)** (i.e. web address meets \*://*.chaoxing.com/mycourse/\*).

If you find the Captcha or questions block you from playing video annoying, try to add this custom rule to the AdBlock Plus grammar-compatible AD block extension as well:

```Text
*.chaoxing.com/richvideo/initdatawithviewer*
```

Support **automatic course switching, automatic silent playback (default silence), play line switching (manual configuration of parameters)**;

If you want more functions, such as automatic doing quizs, a lesson done in 5 seconds (all high-risk recorded behavior), this is not the right place and please go to others for help.

Known problem: The manual operation of jumping video in the process of replaying or playing the completed video will not automatically switch the Play line. Moreover,  the playline-switching function is not smart enough, and can only switch to the last line.

### Configuration of playback lines

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

Latest Test time: ***May 7, 2020***, can not guarantee that the script will be always valid after the date;
