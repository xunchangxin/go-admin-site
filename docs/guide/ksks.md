# 开始

## 服务端

### 选择工作路径

```shell
mkdir goadmin
cd ./goadmin
mkdir src
cd ./src
```

:::tip
以上内容：因为go开发环境目录结构必须
:::

### 下载源码

```shell
git clone https://github.com/wenjianzhang/go-admin.git
```

### 编译

```shell
cd ./go-admin
go build
```

:::tip
会有一下输出结果，具体原因是因为我们需要修改配置文件进行数据库初始化。
:::

```shell
2020/04/06 23:38:52 root:password@tcp(127.0.0.1:3306)/dbname
2020/04/06 23:38:52 mysql connect error %v dial tcp 127.0.0.1:3306: connect: connection refused
```

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
