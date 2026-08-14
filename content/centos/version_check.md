+++
title = "バージョンの確認方法"
+++

`/etc/redhat-release`を確認する。

```shell
$ cat /etc/redhat-release
CentOS release 6.4 (Final)
```

なおCentOS LinuxはEOLを迎えている（7は2024年6月に終了）。
RHEL系以外でも使える`/etc/os-release`のほうが汎用的である。

```shell
$ cat /etc/os-release
```
