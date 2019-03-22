# 自己証明書でホストされたgitリポジトリにアクセスする

Gitlabなどの場合は下記の設定で証明書の検証を行わないようにする必要がある。

```
$ git config --global http.sslverify false
```
