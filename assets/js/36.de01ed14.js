(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{469:function(s,n,t){"use strict";t.r(n);var e=t(16),i=Object(e.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Qt Designer是PyQt程序UI界面的实现工具，使用Qt Designer可以拖拽、点击完成GUI界面设计，并且设计完成的.ui程序可以转换成.py文件供python程序调用。本文主要通过用户登录需求描述Qt Designer工具开发界面的使用方法。")]),s._v(" "),t("h1",{attrs:{id:"本文主要内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本文主要内容"}},[s._v("#")]),s._v(" 本文主要内容")]),s._v(" "),t("p",[s._v("1、Qt Designer程序主界面窗口介绍。")]),s._v(" "),t("p",[s._v("2、Qt Designer程序实现界面开发的案例。包括使用Qt Designer实现程序Gui开发、使用pyuic5将.ui转换.py程序、信号与槽的配置以及实现、使用pyinstaller转换成可执行程序的完成过程。")]),s._v(" "),t("p",[t("strong",[s._v("环境&工具版本")])]),s._v(" "),t("p",[s._v("Win10+pyhton3.7.4 + PyQt 5.11.2")]),s._v(" "),t("h1",{attrs:{id:"qt-designer工具主界面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qt-designer工具主界面"}},[s._v("#")]),s._v(" Qt Designer工具主界面")]),s._v(" "),t("p",[s._v("打开路径：${python安装目录}/Lib/site-packages/pyqt5_tools/designer.exe。主界面如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img2018.cnblogs.com/blog/774327/201907/774327-20190723072103106-1736947814.png",alt:"img"}})]),s._v(" "),t("p",[s._v("主界面不同区域介绍：")]),s._v(" "),t("p",[t("strong",[s._v("工具箱 区域")]),s._v("：提供GUI界面开发使用的各种基本控件，如单选框、文本框等。可以拖动到新创建的主程序界面。")]),s._v(" "),t("p",[t("strong",[s._v("主界面区域")]),s._v("：用户放置各种从工具箱拖过来的各种控件。模板选项中最常用的就是Widget（通用窗口）和MainWindow（主窗口）。二者区别主要是Widget窗口不包含菜单栏、工具栏等。可以分别创建对比看看。")]),s._v(" "),t("p",[t("strong",[s._v("对象查看器 区域")]),s._v("：查看主窗口放置的对象列表。")]),s._v(" "),t("p",[t("strong",[s._v("属性编辑器 区域")]),s._v("： 提供对窗口、控件、布局的属性编辑功能。比如修改控件的显示文本、对象名、大小等。")]),s._v(" "),t("p",[t("strong",[s._v("信号/槽编辑器 区域")]),s._v("：编辑控件的信号和槽函数，也可以添加自定义的信号和槽函数。")]),s._v(" "),t("h1",{attrs:{id:"qt-designer基本控件介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qt-designer基本控件介绍"}},[s._v("#")]),s._v(" Qt Designer基本控件介绍")]),s._v(" "),t("p",[s._v("Widget Box控件工具箱是按照控件作用类别进行划分的。这里作为实现入门级界面实现，主要介绍最常使用的控件及控件对象相关函数。函数方法知道怎么获取控件输入内容以及如何将后台操作结果输出到界面控件显示的主要函数就可以了。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img2018.cnblogs.com/blog/774327/201907/774327-20190728070127315-867377486.png",alt:"img"}}),t("img",{attrs:{src:"https://img2018.cnblogs.com/blog/774327/201907/774327-20190728065940388-331681904.png",alt:"img"}}),t("img",{attrs:{src:"https://img2018.cnblogs.com/blog/774327/201907/774327-20190728071031101-654443677.png",alt:"img"}})]),s._v(" "),t("p",[s._v("（1）显示控件。")]),s._v(" "),t("p",[s._v("​      "),t("strong",[s._v("Lable")]),s._v("：文本标签，显示文本，可以用来标记控件。")]),s._v(" "),t("p",[s._v("​      "),t("strong",[s._v("Text Browser")]),s._v("：显示文本控件。用于后台命令执行结果显示。")]),s._v(" "),t("p",[s._v("（2）输入控件，提供与用户输入交互")]),s._v(" "),t("p",[s._v("​      "),t("strong",[s._v("Line Edit")]),s._v("：单行文本框，输入单行字符串。控件对象常用函数为Text() 返回文本框内容，用于获取输入。setText() 用于设置文本框显示。")]),s._v(" "),t("p",[s._v("​      "),t("strong",[s._v("Text Edit")]),s._v("：多行文本框，输入多行字符串。控件 对象常用函数同Line Edit控件。")]),s._v(" "),t("p",[t("strong",[s._v("Combo Box")]),s._v("：下拉框列表。用于输入指定枚举值。")]),s._v(" "),t("p",[s._v("（3）控件按钮，供用户选择与执行")]),s._v(" "),t("p",[s._v("​        "),t("strong",[s._v("Push Button")]),s._v("：命令按钮。常见的确认、取消、关闭等按钮就是这个控件。"),t("strong",[s._v("clicked信号一定要记住")]),s._v("。clicked信号就是指鼠标左键按下然后释放时会发送信号，从而触发相应操作。")]),s._v(" "),t("p",[s._v("​        "),t("strong",[s._v("Radio Button")]),s._v("：单选框按钮。")]),s._v(" "),t("p",[s._v("​        "),t("strong",[s._v("Check Box")]),s._v("：多选框按钮。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img2018.cnblogs.com/blog/774327/201907/774327-20190728073110749-1183425223.png",alt:"img"}})]),s._v(" "),t("h1",{attrs:{id:"qt-designer工具实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qt-designer工具实现"}},[s._v("#")]),s._v(" Qt Designer工具实现")]),s._v(" "),t("p",[s._v("了解基本控件及作用和获取输入/显示方法后，就可以开始动手实现小需求了。。比如登录界面。获取用户名和密码并显示。。")]),s._v(" "),t("p",[s._v("打开Qt Designer，开始拖拽控件实现吧。。")]),s._v(" "),t("p",[t("strong",[s._v("Step1")]),s._v("：打开主界面，选择Widget模板")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img2018.cnblogs.com/blog/774327/201907/774327-20190728073501138-437460815.png",alt:"img"}})]),s._v(" "),t("p",[t("strong",[s._v("Step2")]),s._v("：从Widget Box工具箱中拖拽2个label、2个line Edit、2个Push Button以及1个Text Browser。拖完后如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img2018.cnblogs.com/blog/774327/201907/774327-20190728073929033-238678238.png",alt:"img"}})]),s._v(" "),t("p",[t("strong",[s._v("Step3")]),s._v("：双击各个控件，修改控件名称（对应属性编辑区中的text，可直接双击控件修改）以及对象名称（对应属性编辑区中的objectName）。对象名称一定记得修改。默认生成的label_1、label_2这种名称无法直接判断到底是对应哪个控件。。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img2018.cnblogs.com/blog/774327/201907/774327-20190728074922729-1747634403.png",alt:"img"}})]),s._v(" "),t("p",[s._v("点击菜单栏Form - Prview。预览界面实现效果")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img2018.cnblogs.com/blog/774327/201907/774327-20190728075136959-1526153574.png",alt:"img"}})]),s._v(" "),t("p",[s._v("login.ui的程序代码如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif",alt:"img"}}),s._v(" View Code")]),s._v(" "),t("p",[t("strong",[s._v("Step4")]),s._v("：点击File -Save保存实现结果。保存文件名为login.ui。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img2018.cnblogs.com/blog/774327/201907/774327-20190728082853526-1029344578.png",alt:"img"}})]),s._v(" "),t("p",[s._v("**Step5：**界面开发完成。")]),s._v(" "),t("h1",{attrs:{id:"将-ui文件转换为-py文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将-ui文件转换为-py文件"}},[s._v("#")]),s._v(" 将.ui文件转换为.py文件")]),s._v(" "),t("p",[s._v("使用命令行"),t("strong",[s._v("pyuic5 -o login.py login.ui")]),s._v("转换成.py文件。调用格式为"),t("strong",[s._v("pyuic5 -o {输出文件名} {输入designer设计好的.ui后缀界面文件}")]),s._v("。执行结果如下")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img2018.cnblogs.com/blog/774327/201907/774327-20190728075815996-1734275478.png",alt:"img"}})]),s._v(" "),t("p",[s._v("转换后的.py文件内容如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://images.cnblogs.com/OutliningIndicators/ContractedBlock.gif",alt:"img"}}),s._v(" View Code")]),s._v(" "),t("p",[t("strong",[s._v("界面与业务逻辑分离实现")])]),s._v(" "),t("p",[s._v("这一步主要实现业务逻辑，也就是点击登录和退出按钮后程序要执行的操作。为了后续维护方便，采用界面与业务逻辑相分离来实现。也就是通过创建主程序调用界面文件方式实现。这有2个好处。第1就是实现逻辑清晰。第2就是后续如果界面或者逻辑需要变更，好维护。新建call_login.py文件程序，调用login.py文件。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# -*- coding: utf-8 -*-\n\n# Form implementation generated from reading ui file 'connect_me.ui'\n#\n# Created by: PyQt5 UI code generator 5.11.3\n#\n# WARNING! All changes made in this file will be lost!\n#导入程序运行必须模块\nimport sys\n#PyQt5中使用的基本控件都在PyQt5.QtWidgets模块中\nfrom PyQt5.QtWidgets import QApplication, QMainWindow\n#导入designer工具生成的login模块\nfrom login import Ui_Form\n\nclass MyMainForm(QMainWindow, Ui_Form):\n    def __init__(self, parent=None):\n        super(MyMainForm, self).__init__(parent)\n        self.setupUi(self)\n\nif __name__ == \"__main__\":\n    #固定的，PyQt5程序都需要QApplication对象。sys.argv是命令行参数列表，确保程序可以双击运行\n    app = QApplication(sys.argv)\n    #初始化\n    myWin = MyMainForm()\n    #将窗口控件显示在屏幕上\n    myWin.show()\n    #程序运行，sys.exit方法确保程序完整退出。\n    sys.exit(app.exec_())\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("p",[s._v("运行call_login.py程序，结果如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img2018.cnblogs.com/blog/774327/201907/774327-20190728080455115-1799055386.png",alt:"img"}})]),s._v(" "),t("p",[s._v("到这里，界面实现和业务主程序已经写好了。但是现在具体业务功能逻辑还未实现。需要对登录和退出的按钮点击执行相对应的操作。")]),s._v(" "),t("h1",{attrs:{id:"添加信号和槽-实现业务逻辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加信号和槽-实现业务逻辑"}},[s._v("#")]),s._v(" 添加信号和槽，实现业务逻辑")]),s._v(" "),t("p",[s._v("实现部分见代码注释。这里主要添加如下两行命令配置信号和槽的关系。信号和槽的创建和原理下文描述。这里可以参照添加即可。")]),s._v(" "),t("p",[s._v("登录按钮：self.login_Button.clicked.connect(self.display)")]),s._v(" "),t("p",[s._v("退出按钮：self.cancel_Button.clicked.connect(self.close)")]),s._v(" "),t("p",[s._v("详细代码如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('# -*- coding: utf-8 -*-\n\n# Form implementation generated from reading ui file \'connect_me.ui\'\n#\n# Created by: PyQt5 UI code generator 5.11.3\n#\n# WARNING! All changes made in this file will be lost!\n#导入程序运行必须模块\nimport sys\n#PyQt5中使用的基本控件都在PyQt5.QtWidgets模块中\nfrom PyQt5.QtWidgets import QApplication, QMainWindow\n#导入designer工具生成的login模块\nfrom login import Ui_Form\n\nclass MyMainForm(QMainWindow, Ui_Form):\n    def __init__(self, parent=None):\n        super(MyMainForm, self).__init__(parent)\n        self.setupUi(self)\n        #添加登录按钮信号和槽。注意display函数不加小括号()\n        self.login_Button.clicked.connect(self.display)\n        #添加退出按钮信号和槽。调用close函数\n        self.cancel_Button.clicked.connect(self.close)\n    def display(self):\n        #利用line Edit控件对象text()函数获取界面输入\n        username = self.user_lineEdit.text()\n        password = self.pwd_lineEdit.text()\n        #利用text Browser控件对象setText()函数设置界面显示\n        self.user_textBrowser.setText("登录成功!\\n" + "用户名是: "+ username+ ",密码是： "+ password)\n\nif __name__ == "__main__":\n    #固定的，PyQt5程序都需要QApplication对象。sys.argv是命令行参数列表，确保程序可以双击运行\n    app = QApplication(sys.argv)\n    #初始化\n    myWin = MyMainForm()\n    #将窗口控件显示在屏幕上\n    myWin.show()\n    #程序运行，sys.exit方法确保程序完整退出。\n    sys.exit(app.exec_())\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br")])]),t("p",[s._v("运行结果如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img2018.cnblogs.com/blog/774327/201907/774327-20190728085411087-696893317.png",alt:"img"}})]),s._v(" "),t("p",[s._v("用户登录小程序开发完成。但是这个界面还有一个小问题，就是拖动的时候，界面会变形。。看图")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img2018.cnblogs.com/blog/774327/201907/774327-20190728111319814-2064749133.png",alt:"img"}})]),s._v(" "),t("p",[s._v("是不是觉得不可忍受。。有两个办法，"),t("strong",[s._v("一种是界面点击使用网格布局")]),s._v("，一种是使界面大小不可改变。这里介绍第二种方法。在Qt Designer上修改主界面最大属性中的长宽设置成与最小属性一致。如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img2018.cnblogs.com/blog/774327/201907/774327-20190728111523166-1964274071.png",alt:"img"}})]),s._v(" "),t("p",[s._v("这样设置之后，就不允许在窗口左右两边拖动导致界面改变大小，就可以保证主界面中的控件不会变形。")]),s._v(" "),t("h1",{attrs:{id:"pyinstaller打包成-exe文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pyinstaller打包成-exe文件"}},[s._v("#")]),s._v(" Pyinstaller打包成.exe文件")]),s._v(" "),t("p",[s._v("用户登录显示程序界面和逻辑都实现了。下来就是要推广使用了。不是所有人电脑上都安装有python软件或者对应的python版本以及PyQt5工具。那么如何让程序在这些未安装python软件的机子上运行呢？可以使用pyinstaller工具将程序打包成.exe文件。pyinstaller使用方法可以参考《"),t("a",{attrs:{href:"https://www.cnblogs.com/linyfeng/p/8207149.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用Pyinstaller转换.py文件为.exe可执行程序"),t("OutboundLink")],1),s._v("》。打包过程如下：")]),s._v(" "),t("p",[t("strong",[s._v("pyinstaller.exe -F call_login.py -w")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img2018.cnblogs.com/blog/774327/201907/774327-20190728114642146-234037369.png",alt:"img"}})]),s._v(" "),t("p",[s._v("打包成功后call_login.exe在当前目录的dist目录下。执行call_login.exe，程序可以正确运行。如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img2018.cnblogs.com/blog/774327/201907/774327-20190728114834607-930793045.png",alt:"img"}})]),s._v(" "),t("p",[s._v("这样，其他人想运行你的程序，就可以直接给他提供call_login.exe可执行过程序了。")]),s._v(" "),t("h1",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),t("p",[s._v("本文主要讲述了使用Qt Designer工具实现一个用户登录显示的小需求。通过这个需求可以知道如何使用Qt Designer实现界面开发、.ui文件转换、业务和界面分离实现以及最简单的信号和槽创建。通过这个需求实现过程描述相信你可以参考动手实现你的小需求。起码可以上手实践了。。")]),s._v(" "),t("p",[s._v("实际上这个程序还有很多小问题。。因为用户登录界面控件少，所以没有感觉出来。。就是控件布局管理。就是如何让界面上的控件整齐有序、布局合理美观。还有信号与槽也没具体说明，待下一篇文章描述。。")])])}),[],!1,null,null,null);n.default=i.exports}}]);