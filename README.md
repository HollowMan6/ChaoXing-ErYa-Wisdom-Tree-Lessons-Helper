# ChaoXing ErYa Lessons Helper（超星尔雅课程助手）

本脚本适用于超星、尔雅慕课。若你的课程平台是智慧树，或者不会使用脚本，请参考[这篇文章](http://www.cnblogs.com/yinbiao/p/8721391.html)

开启时只需点击按钮。如果想停止请刷新页面。

如果你觉得验证码或视频中的弹题很讨厌，请尝试也建议向兼容 AdBlock Plus 语法的广告过滤扩展添加这条自定义规则：

---
\*.chaoxing.com/richvideo/initdatawithviewer\*

---


## 功能

支持 课程自动切换，自动静音播放（默认静音），播放线路切换（需手动配置参数）;

若想要更多功能，如 自动答题，5秒内一节课 （都是高危行为）的，请[参考这里](https://poxiaobbs.com/thread-3268-1-1.html)（未测试）;

已知问题：已经显示完成的视频将无法自动切换线路。

## 配置播放线路

建议在谷歌浏览器下F12进入开发者模式，然后切换到console，在视频已经加载的前提下，首先输入以下命令：

---
let playline = $("iframe").contents().find("iframe").contents().find("li.vjs-menu-item.vjs-selected");

---
然后将下面命令的变量i从0递增，进行尝试，当看到显示了线路名称，记下i，并对脚本对应的地方进行修改：

---
playline[1].nextElementSibling.click();

---

如果不想切换线路，则可以将“切换线路”和“防止切换线路多次不成功导致的问题”注释包括的部分进行清理，并一并清理变量errors和n;

## 声明：将本脚本运用于任何不正当途径所产生的不良后果，本人将不承担任何责任。

因为时间有限，所以脚本做得有些简单，很有可能不太稳定，欢迎大家进行完善。

测试时间：2019年3月2日