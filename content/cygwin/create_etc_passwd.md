+++
title = "/etc/passwdを作成する"
+++

Cygwin自体は現存するが、同じ用途は現在WSL2で満たせることが多い。

下記コマンドで作成する。

```
$ mkpasswd -l -c > /etc/passwd
$ mkgroup -l -c > /etc/group
```

[巨大ドメインに参加している PC での /etc/passwd, /etc/group ファイルのつくりかた](http://d.hatena.ne.jp/i_k_b/20150514/1431590062)
