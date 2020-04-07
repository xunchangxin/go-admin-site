# 开始

## 服务端

### 选择工作路径

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

首先找到配置文件，`config/settings.yml`

```yml
settings:
  application:  
    # 项目启动环境
    env: dev  
    # 当 env:demo 时，GET以外的请求操作提示
    envmsg: "谢谢您的参与，但为了大家更好的体验，所以本次提交就算了吧！"
    # 主机ip 或者域名，默认0.0.0.0
    host: 0.0.0.0
    # 是否需要初始化数据库结构以及基本数据；true：需要；false：不需要
    isinit: false  
    # JWT加密字符串
    jwtsecret: 123abc  
    # log存放路径
    logpath: temp/logs/log.log
    # 服务名称
    name: go-admin
    # 服务端口
    port: 8000
    readtimeout: 1
    writertimeout: 2
  database:
    # 数据库名称
    database: dbname
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

:::tip

首先，需要修改数据库信息：

database: 节点下是数据库配置类信息

database.database: 数据库名称

database.dbtype: 数据库类型。目前支持：mysql、sqlite3

database.host: 数据库地址，填写网络ip地址或者域名、sqlite3请填写文件路径。mysql类型，如：127.0.0.1；sqlite3类型，如：sqlite3.db

database.password: 数据库密码

database.port: 数据库端口号

database.username: 数据库用户名

:::

### 启动

```shell
./go-admin
```

```shell
2020/04/06 23:38:52 root:password@tcp(127.0.0.1:3306)/dbname
2020/04/06 23:38:52 mysql connect error %v dial tcp 127.0.0.1:3306: connect: connection refused
```

:::tip
输出结果，具体原因是因为我们需要修改配置文件进行数据库初始化。
:::

## UI

### 选择UI工作路径

```shell
cd ../../
```

### 下载UI源码

```shell
git clone https://github.com/wenjianzhang/go-admin-ui.git
```

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

 npm i  # 国内请使用 --registry=https://registry.npm.taobao.org

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
