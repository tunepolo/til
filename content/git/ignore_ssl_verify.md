+++
title = "自己証明書でホストされたgitリポジトリにアクセスする"
+++

Gitlabなどの場合、証明書の検証で失敗することがある。

検証そのものを無効化する方法は広く知られているが、`--global`で設定すると全リポジトリの通信で検証が無効になるため避けたい。
CA証明書を持っているなら、対象ホストにだけ設定するのがよい。

```
$ git config --global http.https://gitlab.example.com/.sslCAInfo /path/to/ca.crt
```

どうしても検証を切る場合も、対象のリポジトリの中だけにとどめる。

```
$ git config --local http.sslverify false
```
