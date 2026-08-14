+++
title = "バージョンの確認方法"
+++

`/etc/os-release`を確認する。systemdを採用しているディストリビューションで共通して使える。

```shell
$ cat /etc/os-release
NAME="Rocky Linux"
VERSION="9.3 (Blue Onyx)"
ID="rocky"
VERSION_ID="9.3"
```

RHEL系には`/etc/redhat-release`もある。

```shell
$ cat /etc/redhat-release
CentOS release 6.4 (Final)
```

なおCentOS Linuxはすでにサポートが終了している。
CentOS 8は2021年12月、CentOS 7は2024年6月に終了した。
後継にあたるのはCentOS Stream、Rocky Linux、AlmaLinuxなどである。
