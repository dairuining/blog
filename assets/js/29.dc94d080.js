(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{214:function(s,a,t){},259:function(s,a,t){"use strict";t(214)},340:function(s,a,t){"use strict";t.r(a);t(259);var n=t(0),e=Object(n.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"git-基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-基础"}},[s._v("#")]),s._v(" Git 基础")]),s._v(" "),t("h2",{attrs:{id:"_1、配置公钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、配置公钥"}},[s._v("#")]),s._v(" 1、配置公钥")]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("为了能够正常拉取代码，首先配置公钥")])]),s._v(" "),t("h3",{attrs:{id:"_1、确认本地密钥位置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、确认本地密钥位置"}},[s._v("#")]),s._v(" 1、确认本地密钥位置")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// SSH 秘钥默认储存在账户的主目录下的 ~/.ssh 目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如：C:\\Users\\BF100400\\.ssh\\")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查看是否包含id_rsa和id_rsa.pub(或者是id_dsa和id_dsa.pub之类成对的文件)，有.pub 后缀的文件就是公钥，另一个文件则是密钥。")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"_2、生成密钥信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、生成密钥信息"}},[s._v("#")]),s._v(" 2、生成密钥信息")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在.ssh 目录下右键打开Git Bash(.ssh目录不存在，则在任一目录下操作，或者手动创建该目录)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// 生成秘钥：ssh-keygen -t rsa -C "your_email@youremail.com" ，直接Enter就行，然后会提示输入密码(可输可不输)')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 　　   说明：命令中的email，就是gitlab中的账号，需要保持一致")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行完成之后，在.ssh 目录下就会生成秘钥文件（没有.ssh目录的会自动生成，手动创建的则不会重复生成）")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"_3、gitee-中配置公钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、gitee-中配置公钥"}},[s._v("#")]),s._v(" 3、gitee 中配置公钥")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 只需要在gitee中的SSH公钥中将id_rsa.pub中的信息拷贝进去就可以了")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_2、常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、常用命令"}},[s._v("#")]),s._v(" 2、常用命令")]),s._v(" "),t("h3",{attrs:{id:"_1、配制个人信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、配制个人信息"}},[s._v("#")]),s._v(" 1、配制个人信息")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"userName"')]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user@domain"')]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --list  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看配制信息")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"_2、创建本地仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、创建本地仓库"}},[s._v("#")]),s._v(" 2、创建本地仓库")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_3、远程仓库的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、远程仓库的使用"}},[s._v("#")]),s._v(" 3、远程仓库的使用")]),s._v(" "),t("h4",{attrs:{id:"克隆远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#克隆远程仓库"}},[s._v("#")]),s._v(" 克隆远程仓库")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("远程仓库"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 克隆远程仓库")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"查看远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看远程仓库"}},[s._v("#")]),s._v(" 查看远程仓库")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看每一个远程仓库服务器的简写，如origin")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote -v  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示需要读写远程仓库使用的 Git 保存的简写与其对应的 URL")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"添加远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加远程仓库"}},[s._v("#")]),s._v(" 添加远程仓库")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("远程服务器简写"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("远程仓库地址"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如 git remote add origin https://github.com/paulboone/ticgit")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote -v\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"查看某个远程仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看某个远程仓库"}},[s._v("#")]),s._v(" 查看某个远程仓库")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote show orgin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_4、基本文件操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、基本文件操作"}},[s._v("#")]),s._v(" 4、基本文件操作")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"add"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[s._v("#")]),s._v(" add")]),s._v(" "),t("p",[s._v("将修改的代码添加到暂存区")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" filename "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加单个文件")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加所有修改的文件")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"commit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commit"}},[s._v("#")]),s._v(" commit")]),s._v(" "),t("p",[s._v("将修改的代码提交到本地环境")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"message"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用于提交暂存区的文件，也就是git add . 里的文件")]),s._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -am "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"message"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用于提交跟踪过的文件")]),s._v("\n-am "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\n\ta  all\n\tm  message\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解释：就是如果创建一个文件，必须通过 git add . 后才能使该文件被跟踪，否则是不能提交的；")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 通过 git add . 后，则通过 git commit -m "message" 就可以正常提交；')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 如果该文件修改后，则不能通过 git commit -m "message" 进行提交，可以直接通过 git commit -am "message" 进行提交，省去了 git add . 这步，因为该文件是被跟踪过的；')]),s._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -a -amend  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对最近一次 commit 的进行修改")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit --amend  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用来重新提交最近一次的错误提交，而不会出现两次提交记录")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"push"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#push"}},[s._v("#")]),s._v(" push")]),s._v(" "),t("p",[s._v("将本地最新的代码推送到服务器")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n\norigin "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 远程目标服务器")]),s._v("\nmaster "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定更新的分支名称")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"fetch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fetch"}},[s._v("#")]),s._v(" fetch")]),s._v(" "),t("p",[s._v("git fetch 命令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("远程主机名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个命令将某个远程主机的更新全部取回本地")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果只想取回特定分支的更新，可以指定分支名：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("远程主机名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意之间有空格")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("最常见的命令如取回 origin 主机的 master 分支：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch origin master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("取回更新后，会返回一个FETCH_HEAD ，指的是某个branch在服务器上的最新状态，我们可以在本地通过它查看刚取回的更新信息：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log -p FETCH_HEAD\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"pull"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pull"}},[s._v("#")]),s._v(" pull")]),s._v(" "),t("p",[s._v("从服务器更新最新的代码到本地")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin master\n\norigin "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 远程目标服务器")]),s._v("\nmaster "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定更新的分支名称")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("前面提到，git pull 的过程可以理解为：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch origin master "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从远程主机的master分支拉取最新内容 ")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge FETCH_HEAD    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将拉取下来的最新内容合并到当前所在的分支中")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("即将远程主机的某个分支的更新取回，并与本地指定的分支合并，完整格式可表示为：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("远程主机名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("远程分支名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("本地分支名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果远程分支是与当前分支合并，则冒号后面的部分可以省略：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin next\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"merge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#merge"}},[s._v("#")]),s._v(" merge")]),s._v(" "),t("p",[s._v("假如要把本地分支的代码合并到 master"),t("br"),s._v("\n正常公司流程：将 master 分支合并到本地分支，解决冲突后再推送到推送到 master 分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge master  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把 master 分支的代码合并到当前分支")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把本地分支推送到 master 分支")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("source branch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("target branch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将一个分支合并到一个目标分支")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"rebase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rebase"}},[s._v("#")]),s._v(" rebase")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名字"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 不会多出一条commit记录")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase -i "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("commitID"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 合并多条commit")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"branch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#branch"}},[s._v("#")]),s._v(" branch")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前分支")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -r  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看远程分支")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -a  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看远程和本地所有分支")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch branchName  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在当前分支的基础上 clone 一份到新的分支")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -v  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看每个分支最后一次提交")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d branchName  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除本地分支")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -D branchName  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制删除本地分支")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --delete "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("远程分支名字"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除远程分支---并不会删除本地分支")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -m "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("旧分支名字"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("新分支名字"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新命名分支名字")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h3",{attrs:{id:"checkout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checkout"}},[s._v("#")]),s._v(" checkout")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名字"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换分支")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("分支名字"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 基于该分支创建并切换分支")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("远程分支名字"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" remotes/origin/远程分支名字  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取远程分支，并切换到该分支上")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 撤销本地分支所有更改")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"log"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[s._v("#")]),s._v(" log")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看日志")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --oneline -5  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看最后5个 commit 记录，并显示在一行上")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"cherry-pick"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cherry-pick"}},[s._v("#")]),s._v(" cherry-pick")]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("主要运用是将A分支中的部分修改代码遴选(cherry-pack)到B分支上，这样可以避免将整个分支所有代码合并到B分支上（git merge）")])]),s._v(" "),t("h4",{attrs:{id:"遴选步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#遴选步骤"}},[s._v("#")]),s._v(" 遴选步骤")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 首先将A分支提交代码")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"进行遴选的分支代码"')]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成用于遴选的 commit-id")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 有必要就推送到远程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到A分支上")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout A  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换分支")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --oneline -5  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拷贝需要遴选分支的commit-id (8位)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到B分支")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("commit-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最后将B分支上的代码提交并推送到远程")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"feat: 更新代码"')]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h3",{attrs:{id:"status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[s._v("#")]),s._v(" status")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前分支的状态")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"stash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stash"}},[s._v("#")]),s._v(" stash")]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v('当新建出来的文件，通过 git stash save "save message" 后，通过 git status 不能查询到这个新文件的状态，必须通过 git add . 暂存一下')])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash save "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"save message"')]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行存储时，添加备注，方便查找，只有git stash 也要可以的，但查找时不方便识别。")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash list  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看stash了哪些存储")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash show  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示做了哪些改动，默认show第一个存储,如果要显示其他存贮，后面加stash@{$num}，比如第二个 git stash show stash@{1}")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash show -p  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示第一个存储的改动，如果想显示其他存存储，命令：git stash show  stash@{$num}  -p ，比如第二个：git stash show  stash@{1}  -p")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash apply  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 应用某个存储,但不会把存储从存储列表中删除，默认使用第一个存储,即stash@{0}，如果要使用其他个，git stash apply stash@{$num} ， 比如第二个：git stash apply stash@{1} ")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash pop  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命令恢复之前缓存的工作目录，将缓存堆栈中的对应stash删除，并将对应修改应用到当前的工作目录下,默认为第一个stash,即stash@{0}，如果要应用并删除其他stash，命令：git stash pop stash@{$num} ，比如应用并删除第二个：git stash pop stash@{1}")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash drop stash@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$num")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 丢弃stash@{$num}存储，从列表中删除这个存储")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("clear")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除所有缓存的stash")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"reset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reset"}},[s._v("#")]),s._v(" reset")]),s._v(" "),t("p",[s._v("git reset根据–soft –mixed –hard，会对working tree和index和HEAD进行重置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset HEAD^  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回退版本，一个^表示一个版本，可以多个，另外也可以使用 git reset HEAD~n这种形式。")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("也可以回退到指定版本：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset commit-id\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("参数解析")]),s._v(" "),t("p",[s._v("soft 参数：git reset --soft HEAD~1 意为将版本库软回退1个版本，所谓软回退表示将本地版本库的头指针全部重置到指定版本，且将这次提交之后的所有变更都移动到暂存区")]),s._v(" "),t("p",[s._v("默认的mixed参数：git reset HEAD～1 意为将版本库回退1个版本，将本地版本库的头指针全部重置到指定版本，且会重置暂存区，即这次提交之后的所有变更都移动到工作区")]),s._v(" "),t("p",[s._v("hard参数：git reset --hard HEAD～1 意为将版本库回退1个版本，但是不仅仅是将本地版本库的头指针全部重置到指定版本，也会重置暂存区，并且会将工作区代码清空（工作区是clean状态）")])]),s._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("soft参数与默认参数都不会修改工作区代码，只有hard参数才会修改工作区代码。")])]),s._v(" "),t("p",[s._v("另外，git reset HEAD filename\n回退文件，将文件从暂存区回退到工作区（unstage），此时不能带hard,soft参数")]),s._v(" "),t("h3",{attrs:{id:"reflog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reflog"}},[s._v("#")]),s._v(" reflog")]),s._v(" "),t("p",[s._v("如果在回退以后又想再次回到之前的版本，git reflog 可以查看所有分支的所有操作记录（包括commit和reset的操作），包括已经被删除的commit记录，git log则不能察看已经删除了的commit记录")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("615ce06 HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("44")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": rebase -i "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("finish"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": returning to refs/heads/my_test_branch\n615ce06 HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("45")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": rebase -i "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fixup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": zancun_new\n702356c HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("46")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": rebase -i "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fixup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This is a combination of 2 commits.")]),s._v("\nc997622 HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("47")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": rebase -i "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("reword"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": zancun_new\nfb74ec2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("origin/master, origin/HEAD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("48")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": rebase -i "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("start"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": checkout FETCH_HEAD\nf3ef592 HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("49")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": commit: zancun3\n6b82c75 HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": commit: zancun2\ne900fa0 HEAD@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("51")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": commit: zancun\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("比如说，回退到commit: zancun3，只需要："),t("br"),s._v("\ngit reset --hard f3ef592 (或者HEAD@{49}) 即可"),t("br"),s._v("\n这个命令对于找回丢失的代码非常有用。")])])}],!1,null,null,null);a.default=e.exports}}]);