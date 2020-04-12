# 编写你的第一个go-admin应用,第1步

让我们通过示例来学习。

通过这个教程，我们将带着你创建一个基本的文章管理程序。

它由两部分组成：

* 前端页面。

* 后端api服务。

我们假设你已经阅读了[开始](http://doc.zhangwj.com/go-admin-site/guide/ksks.html)

## 开始项目

如果这是你第一次使用 go-admin 的话，你需要一些初始化设置。也就是说，你需要配置一个 go-admin 即一个项目实例需要的设置数据库或者也可以使用细目本身提供的sqlite3的体验数据库（部分功能不支持，如代码生成），目前推荐大家使用mysql数据库。

进入项目工作路径，打开 `config/settings.yml` 进行配置：

```yml
settings:
  application:
    env: dev
    envmsg: "谢谢您的参与，但为了大家更好的体验，所以本次提交就算了吧！\U0001F600\U0001F600\U0001F600"
    host: 0.0.0.0
    isinit: false
    jwtsecret: 123abc
    logpath: temp/logs/log.log
    name: go-admin
    port: 8000
    readtimeout: 1
    writertimeout: 2
  database:
    database: dbname
    dbtype: sqlite3
    host: sqlite3.db
    password: password
    port: 3306
    username: root
```

配置中，我们需要修改 `database` 下边的属性信息：

* database 数据库名称
* dbtype 数据库类型，支持mysql、sqlite3
* host 数据库地址，填写网络ip地址或者域名、sqlite3请填写文件路径。mysql，如：127.0.0.1；sqlite3，如：sqlite3.db
* password 数据库密码
* port 数据库端口号
* username 数据库用户名

还需修改 `application` 下边的属性信息：

* isinit 是否初始化，true：需要初始化，false：不需要；mysql数据库中我们需要进行数据库初始化
* logpath 日志文件路径，这里配置相对程序路径

:::tip 建议
你得避免使用 go 或 go-admin 的内部保留字来命名你的项目模块以等名称。避免产生组件冲突。
:::

:::tip 我的代码该放在哪？
如果是曾经是原生PHP、JAVA、.Net 程序员，都会有项目标准的目录结构，当然 go-admin 也是相同的，也有自己的目录结构，这样利于项目更规范，协作更高效。
:::

让我们看一下 go-admin 的目录结构：

```shell
go-admin
    apis
    config
    database
    docs
    handler
    models
    pkg
    router
    statie
    temp
    template
    test
    utils
    main.go
    sqlite3.db
```

这些目录和文件的用处是：

* 最外层 go-admin 是项目根路径
* apis： api
* config： 配置相关的文件以及类
* database： 数据持久层基类
* docs： 接口文档
* handler： 处理程序类
* models： 数据访问层
* pkg： 程序包
* router： 路由以及中间件
* statie： 上传静态文件
* temp： 临时日志文件
* template： 模板文件
* test： 测试
* utils： 工具类
* main.go： 主入口
* sqlite3.db： sqlite3数据库文件

----

## 用于开发的服务器

让我们来确认一下你的 go-admin 项目是真的配置成功了。请运行下面的命令：

```shell
./go-admin
```

你应该会看到如下输出：

```shell
2020/04/07 14:34:08 mysql connect success!
2020/04/07 14:34:08 3306
[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.
 - using env:	export GIN_MODE=release
 - using code:	gin.SetMode(gin.ReleaseMode)

[GIN-debug] GET    /static/*filepath         --> github.com/gin-gonic/gin.(*RouterGroup).createStaticHandler.func1 (8 handlers)
[GIN-debug] HEAD   /static/*filepath         --> github.com/gin-gonic/gin.(*RouterGroup).createStaticHandler.func1 (8 handlers)
[GIN-debug] GET    /info                     --> go-admin/router.Ping (8 handlers)

...

[GIN-debug] POST   /api/v1/logout            --> go-admin/handler.LogOut (10 handlers)
[GIN-debug] GET    /swagger/*any             --> github.com/swaggo/gin-swagger.CustomWrapHandler.func1 (8 handlers)
[GIN-debug] Listening and serving HTTP on 0.0.0.0:8000
```

现在，服务器正在运行，浏览器访问 http://127.0.0.1:8000/。你将会看到一个“祝贺”页面，随着一只火箭发射，服务器已经运行了。

:::tip 更换端口
默认情况下，服务器设置为监听本机内部 IP 的 8000 端口。
如果你想更换服务器的监听端口，请使用命令行参数。举个例子，下面的命令会使服务器监听 8080 端口：

我们需要打开配置文件 `config/settings.yml`  

```shell
application:
    port: 8000
```

如果你想要修改服务器监听的IP，在端口之前输入新的。比如，为了监听所有服务器的公开IP（这你运行 Vagrant 或想要向网络上的其它电脑展示你的成果时很有用），使用：

```shell
application:
    port: 8080
```

修改之后需要重启服务。

:::

----

## 创建文章功能

现在你的开发环境，已经配置好了，你可以开始干活了。

在 go-admin 中，你只需要关注业务，不用再为基础功能操心，这样你就能专心写代码，而不是想着如何组建项目，如何设计权限管理，如何选择UI，在这里没有如何如何。

刚才已经讲过了项目的目录结构，在这里就不在赘述。

----

## 编写第一个接口

在 `apis` 目录中创建 `blog` 文件夹以及 `blog.go` 文件

```go
package blog

import (
	"github.com/gin-gonic/gin"
	"go-admin/models"
	"net/http"
)

func GetBlogList(c *gin.Context) {
	
	var res models.Response
	res.Data = "hello world ！"

	c.JSON(http.StatusOK, res.ReturnOK())
}
```

这是 go-admin 中最简单的接口。如果想看见效果，我们需要将一个 URL 映射到它——这就是我们需要 router 的原因了。

以下是程序的目录结构：

```shell
go-admin
    apis
    config
    database
    docs
    handler
    models
    pkg
    router
    statie
    temp
    template
    test
    utils
    main.go
    sqlite3.db
```

在 `go-admin/router/router.go` 中，输入以下代码：

```go
func InitRouter() *gin.Engine {

    r := gin.New()

    r.GET("/blog/list",blog.GetBlogList)

}
```

现在已经把接口函数注册到了 router 里边，通过以下命令验证是否正常工作：

```shell
go build

./go-admin
```

用你的浏览器访问 http://localhost:8000/blog/list，你应该能够看见 "{"code":200,"data":"hello world ！","msg":""}" ，这是你在接口中定义的。


:::tip 404 page not found

如果你在这里得到了一个错误页面，检查一下你是不是正访问着http://localhost:8000/blog/list 而不应该是 http://localhost:8000/。

:::

router 注册类型，我们比较常用的就是 `GET`、`POST`、`PUT`、`DELETE`等

这些函数的两个必须参数： path 和 handlers 。现在是时候来研究这些参数的含义了。

### path

path 是一个匹配 URL 的准则（有点正则表达式的意思），当go-admin 响应一个请求时，它会从注册的url 第一项开始，按照顺序一次匹配，直到找到匹配项。

这些准则不会匹配 GET 和 POST 参数或域名。例如，URL 在处理请求 http://www.zhangwj.com/blog/list 时，它会尝试匹配 blog/list 。处理请求 http://www.zhangwj.com/blog/list?page=3 时，也只会尝试匹配 blog/list。

:::tip 注意
path 也支持带参数的写法，例如 `r.GET("/blog/list/:id",blog.GetBlogList)`, 这个时候会按照这 `/blog/list/:id` 进行匹配 `:id` 可以是字符串，可以是数字等任意字符，当然也是可以限制的，这里我们不再展开。
:::

当你了解了基本的请求和响应流程后，请阅读 教程的第 2 部分 开始使用数据库.

:::tip 从哪里获得帮助：
如果你在阅读本教程的过程中有任何疑问，可以前往[提交建议](https://github.com/wenjianzhang/go-admin/issues/new)。
:::
