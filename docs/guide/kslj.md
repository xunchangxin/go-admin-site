# 项目简介

## 说明

go-admin 是基于Gin + Vue + Element UI的中后台管理系统开发脚手架。

* go-admin 官网地址：[http://www.zhangwj.com](http://www.zhangwj.com)

* go-admin 在线文档：[http://doc.zhangwj.com](http://doc.zhangwj.com)

* go-admin 源码下载：[https://github.com/wenjianzhang/go-admin](https://github.com/wenjianzhang/go-admin)

* QQ群号： 74520518（已满）、521386980


go-admin 是一个go语言开发的企业级快速开发平台，使用了Gin，casbin，gorm，Vue，Element UI，并且也内置了一些模块，如：用户管理、部门管理、角色用户、菜单及按钮授权、数据权限、系统参数、日志管理等。

## 特性

- 遵循 RESTful API 设计规范

- 基于 GIN WEB API 框架，提供了丰富的中间件支持（用户认证、跨域、访问日志、追踪ID等）

- 基于Casbin的 RBAC 访问控制模型

- JWT 认证

- 支持 Swagger 文档(基于swaggo)

- 基于 GORM 的数据库存储，可扩展多种类型数据库 

- 配置文件简单的模型映射，快速能够得到想要的配置

- 代码生成工具

- 表单构建工具

- TODO: 单元测试


## 内置

1.  用户管理：用户是系统操作者，该功能主要完成系统用户配置。
2.  部门管理：配置系统组织机构（公司、部门、小组），树结构展现支持数据权限。
3.  岗位管理：配置系统用户所属担任职务。
4.  菜单管理：配置系统菜单，操作权限，按钮权限标识等。
5.  角色管理：角色菜单权限分配、设置角色按机构进行数据范围权限划分。
6.  字典管理：对系统中经常使用的一些较为固定的数据进行维护。
7.  参数管理：对系统动态配置常用参数。
8.  操作日志：系统正常操作日志记录和查询；系统异常信息日志记录和查询。
9.  登录日志：系统登录日志记录查询包含登录异常。
10. 系统接口：根据业务代码自动生成相关的api接口文档。
11. 代码生成：根据数据表结构生成对应的增删改查相对应业务，全部可视化编程。
12. 表单构建：自定义页面样式，拖拉拽实现页面布局。
13. 服务监控：查看一些服务器的基本信息。

## 配置

1. 配置文件说明
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

