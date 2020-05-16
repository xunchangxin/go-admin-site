# 快速开始

## 服务

### 设置工作路径

```shell
mkdir goadmin
cd ./goadmin
mkdir src
cd ./src
```
> 为什么要设置src目录

因为 GO 的包搜索是从 GOPATH 和 GOROOT 路径下搜索，源码必须要放在 GOROOT 或 GOPATH 的 src 目录下才能找到。但把源码和包放在一起，对于很多人来说确实不太很习惯，有一种做法，通过在 GOPATH 中设置两个路径，go get 下载的包默认放在 GOPATH 设置的第一个路径下。比如，GOPATH 设置如下：

```shell
export GOPATH=/Users/zhangwenjian/go/:/Users/zhangwenjian/Work/go
```

如此就可以把工作区设在 /Users/zhangwenjian/Work/go/src，而安装包放在 /Users/zhangwenjian/go/src。

### 下载源码

```shell
git clone https://github.com/wenjianzhang/go-admin.git
```

### 编译

```shell
cd ./go-admin
go build
```

### 设置数据库

首先找到配置文件，`config/settings.yml`， 同时也可创建开发环境配置，只需将默认配置文件 `config/settings.yml` 复制到 `config/settings.dev.yml` 就好了

<img class="no-margin" src="https://gitee.com/mydearzwj/image/raw/master/img/configv1.0.0.png"  height="500px" style="margin:0 auto;">


```yml
settings:
  application:  
    # 项目启动环境            
    mode: dev  # dev开发环境 test测试环境 prod线上环境；
    host: 0.0.0.0  # 主机ip 或者域名，默认0.0.0.0
    # 服务名称
    name: go-admin   
    # 服务端口
    port: 8000   
    readtimeout: 1   
    writertimeout: 2 
  log:
    # 日志文件存放路径
    dir: temp/logs
  jwt:
    # JWT加密字符串
    secret: go-admin
    # 过期时间单位：秒
    timeout: 3600
  database:
    # 数据库名称
    name: dbname 
    # 数据库类型
    dbtype: mysql    
    # 数据库地址
    host: 127.0.0.1  
    # 数据库密码
    password: password  
    # 数据库端口
    port: 3306       
    # 数据库用户名
    username: root   
```

> 首先，需要修改数据库信息：

```说明
database: 节点下是数据库配置类信息
database.database: 数据库名称
database.dbtype: 数据库类型。目前支持：mysql
database.host: 数据库地址，填写网络ip地址或者域名。mysql类型，如：127.0.0.1；
database.password: 数据库密码
database.port: 数据库端口号
database.username: 数据库用户名
```

### 数据库结构初始化

项目中支持使用命令方式初始化基本数据结构和基础数据。 可以方便的使用 `init` 命令进行项目数据库结构和数据初始化。如下操作：

```shell
./go-admin init -c=config/settings.dev.yml
```

:::tip
可以通过 -c 参数实现本地多环境配置文件隔离 例如 开发环境命名为：settings.dev.yml
:::

### 启动

初始化完成之后，我们就可以启动项目了，在这里需要注意一点，正常大家启动项目的方式是这样的 `./go-admin` , 哦哦 系统报错了，我们尝试一下 `./go-admin`

```shell
./go-admin
```

下图是输出内容：

<img class="no-margin" src="https://gitee.com/mydearzwj/image/raw/master/img/runv1.0.0noarg.png"  height="100px" style="margin:0 auto;">


输出内容告诉我们：Error: requires at least one arg ，至少有一个参数；

你也可以使用` ./go-admin -h ` 来查看帮助；

上面讲完之后，我们就可以使用自己的启动语句来启动项目了，

```shell
./go-admin server -c=config/settings.dev.yml
```

如果看到一下数据内容，请检查一下数据库配置；

```shell
2020/04/06 23:38:52 root:password@tcp(127.0.0.1:3306)/dbname
2020/04/06 23:38:52 mysql connect error %v dial tcp 127.0.0.1:3306: connect: connection refused
```

输出内容为下图，恭喜你！你已经成功了！

<img class="no-margin" src="
https://gitee.com/mydearzwj/image/raw/master/img/serversuccessv1.0.0.png"  height="500px" style="margin:0 auto;">

go，下一步启动前端项目！

## 视图

### 设置视图工作路径

返回上上级目录

```shell
cd ../../
```

### 下载视图源码

这里我们直接`git clone`下来。

```shell
git clone https://github.com/wenjianzhang/go-admin-ui.git
```

输出内容：

```shell
$ git clone https://github.com/wenjianzhang/go-admin-ui.git
Cloning into 'go-admin-ui'...
remote: Enumerating objects: 584, done.
remote: Counting objects: 100% (584/584), done.
remote: Compressing objects: 100% (436/436), done.
remote: Total 584 (delta 127), reused 524 (delta 88), pack-reused 0
Receiving objects: 100% (584/584), 580.92 KiB | 16.00 KiB/s, done.
Resolving deltas: 100% (127/127), done.
```

> 恭喜！到目前为止说明go-admin-ui代码已经下载完成。

### npm install

```shell
 cd go-admin-ui/

 npm i  

 # npm i   --registry=https://registry.npm.taobao.org   # 国内请使用  

 ```

:::tip
这里还原包是需要一些时间的请耐心等待一下...
:::

看到下边的输入说明已经安装好了

```shell
Binary found at /Users/zhangwenjian/Code/go-test/go-admin-ui/node_modules/node-sass/vendor/darwin-x64-64/binding.node
Testing binary
Binary is fine
added 2033 packages from 1953 contributors in 40.229s
```

### 启动

启动项目，使用`npm run dev`命令就好了。

```shell
npm run dev
```

输出内容：

```shell
 DONE  Compiled successfully in 22188ms                                                                                                         12:47:40 AM


  App running at:
  - Local:   http://localhost:9530/
  - Network: http://192.168.3.12:9530/

  Note that the development build is not optimized.
  To create a production build, run npm run build.
```

:::tip
此时项目已经启动了，但是有一点请注意：检查api是否也启动了。否则页面会提示错误的哦。
:::

## 搞定

搞定，现在你可以go-admin 之旅！
