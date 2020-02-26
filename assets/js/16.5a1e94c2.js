(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{275:function(t,n,r){"use strict";r.r(n);var e=r(38),c=Object(e.a)({},function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"基本的-linux-操作命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本的-linux-操作命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本的 Linux 操作命令")]),t._v(" "),r("div",{staticClass:"tip custom-block"},[r("p",[t._v("使用 docker 的前提是需要对 linux 命令有浅显的认识。")])]),t._v(" "),r("p",[t._v("1、目录查看命令\nls --- 查看当前的目录下文件\nls -al --- 查看当前的目录下文件包括隐藏文件")]),t._v(" "),r("p",[t._v("2、 目录切换命令\ncd 目录名 --- 切换目录")]),t._v(" "),r("p",[t._v("常用：\ncd ~ 当前用户主目录\ncd / 根目录\ncd - 上一次访问的目录\ncd .. 上一级目录\ncd 当前用户主目录")]),t._v(" "),r("p",[t._v("touch 1.txt --- 在当前目录创建一个文件 1.txt\nclear ---清除屏幕")]),t._v(" "),r("p",[t._v("3、目录创建命令\npwd --- 显示当前工作目录\nmkdir 名称 --- 创建目录文件")]),t._v(" "),r("p",[t._v("4、文件操作命令\ncp [源文件或目录][目标文件或目录] ---复制文件或目录")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("cp 1.txt 2.txt\ncp -b 1.txt 2.txt ：如果覆盖文件时,可以将源文件做一个备份\ncp ./1.txt ../ ：将当前目录下的 1.txt 复制到父级目录\ncp /root/1.txt /bin/2.txt ：将/root 下的 1.txt 文件复制到根目录下的 bin 目录下的 2.txt 中\n复制目录：(无论是单层目录还是多层目录都可以复制):\ncp -r ./a ./b\ncp -r /root/a /root/z\n\nmv [源文件或目录][目标文件或目录] ---移动或更名现有的文件或目录\nrm [文件或目录...] --- 删除文件或目录\n\n-f 或 --force 强制删除文件或目录\n-r 或 -R 或 --recursive 递归处理，将指定目录下的所有文件及子目录一并处理\n强制删除文件：rm -f ./1.txt\n强制删除目录：rm -rf ./a\n\nfind [目录...][参数] --- 查找文件或目录\n\n-name 指定字符串作为寻找文件或目录的范本样式\nfind /root/ -name 'test*' 查找 root 目录下的文件开头是 test 的文件和文件夹，*是通配符 。注意字符串要用单引号引起来。\n")])])]),r("p",[t._v("5、系统操作命令")]),t._v(" "),r("p",[t._v("ps -ef --- 查看当前所有进程\nkill pid(进程 id) --- 删除执行中的程序或工作\nkill -9 --- 表示强制终止\nifconfig --- 查看当前主机 ip\nping ip 地址 --- 测试网络连通性\nping 　-c --- 要 ping 的次数 sudo --- 管理权限 Linux centos 重启命令：reboot\nLinux centos 关机命令：halt")]),t._v(" "),r("p",[t._v("#基本的 docker 操作命令")])])},[],!1,null,null,null);n.default=c.exports}}]);