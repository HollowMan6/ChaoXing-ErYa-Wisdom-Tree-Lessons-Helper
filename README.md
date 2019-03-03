# ChaoXing ErYa Lessons Helper（超星尔雅课程助手）

本脚本适用于[超星尔雅慕课](http://erya.mooc.chaoxing.com/)(即观看视频网页地址满足 \*://*.chaoxing.com/mycourse/\* )(*表示省略）,若你的课程平台是[智慧树](https://www.zhihuishu.com/)，或者不会使用脚本，请参考[这篇文章](http://www.cnblogs.com/yinbiao/p/8721391.html)

***优势***：操作简单，无需安装配套软件，可视进度，安全;

开启时只需**点击按钮**。如果想停止本脚本请刷新页面。

如果你觉得**验证码或视频中的弹题**很讨厌，请尝试也建议向兼容 **AdBlock Plus** 语法的广告过滤扩展添加这条自定义规则：

```JavaScript
*.chaoxing.com/richvideo/initdatawithviewer*
```

## 功能

支持 **课程自动切换，自动静音播放（默认静音），播放线路切换（需手动配置参数）;**

若想要更多功能，如 **自动答题，5秒内一节课 **（***都是高危不良行为***），**切换画质** 的，请[参考这里](https://poxiaobbs.com/thread-3268-1-1.html)（脚本未测试，**似乎已失效**）;

建议在一些微信公众号如：**小马搜题订阅号，问答库，殿下网络互联** 等的帮助下，题目自己手动做；

***已知问题***：已经显示完成的视频再次播放或自动播放的过程中手动进行跳转视频的操作将无法自动切换线路。

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

测试时间：***2019年3月2日***，不能保证脚本在此之后**一直有效**；


# English version

This script is suitable for **[ChaoXing Erya MOOC](http://erya.mooc.chaoxing.com/)** (i.e. web address meets \*://*.chaoxing.com/mycourse/\*)(* denotes ellipsis). If your course platform is **[Wisdom Tree](https://www.zhihuishu.com/)** or you don't know how to use scripts, please refer to [this article](http://www.cnblogs.com/yinbiao/p/8721391.html)(Chinese Version).

***Advantages***: simple operation, no need to install supporting software, visual progress, safety;

Just **click the button** when you open it. **Refresh the page** if you want to stop.

If you find the the authentication code or questions block you from playing video annoying, try and recommend adding this custom rule to the AdBlock Plus grammar-compatible ad filtering extension as well:

```JavaScript
*.chaoxing.com/richvideo/initdatawithviewer*
```

## Functions

Support **automatic course switching, automatic silent playback (default silence), play line switching (manual configuration of parameters)**;

If you want more functions, such as automatic doing quizs, a lesson done in 5 seconds (all high-risk bad behavior) and quality switching, please [refer to here](https://poxiaobbs.com/thread-3268-1-1.html)(scripts are not tested by me and seem to be **invalid**)(**Chinese Version**);

It is suggested that with the help of some Wechat public accounts such as **小马搜题订阅号，问答库，殿下网络互联** , the questions after each lesson should be done **by yourself**.

Known problem: The manual operation of jumping video in the process of replaying or playing the completed video will not automatically switch the Play line.

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

Test time: ***March 2, 2019***, can not guarantee that the script will be always valid after the date;