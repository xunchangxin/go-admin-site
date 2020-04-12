# 编写你的第一个go-admin应用,第2步

这部分教程从 教程第 1 步 结尾的地方继续讲起。我们将建立数据库，创建您的第一个模型。

:::tip 从哪里获得帮助：
如果你在阅读本教程的过程中有任何疑问，可以前往[提交建议](https://github.com/wenjianzhang/go-admin/issues/new)。
:::

## 数据库配置

现在，打开 `config/settings.yml` 。这是个包含了 `go-admin` 项目的配置信息。

```shell
  database:
    database: dbname
    dbtype: mysql
    host: 127.0.0.1
    password: password
    port: 3306
    username: root
```

修改数据库配置信息。

当前我们先通过sql脚本的方式来创建数据库表信息。

```sql
CREATE TABLE "blog" (
    "id" serial NOT NULL PRIMARY KEY,
    "question_text" varchar(200) NOT NULL,
    "pub_date" timestamp with time zone NOT NULL
);
```