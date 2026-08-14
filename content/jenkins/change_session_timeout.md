+++
title = "自動ログアウトまでの時間を長くする"
+++

`JENKINS_ARGS`として`--sessionTimeout`でログアウトまでの時間を分で与える。

設定ファイルの位置はパッケージのバージョンによって異なる。
`/etc/sysconfig/jenkins`がある場合はそこに書く。

```
$ sudo vim /etc/sysconfig/jenkins

JENKINS_ARGS="--sessionTimeout=1440"

$ sudo service jenkins restart
```

新しいパッケージにはこのファイルがない。その場合はsystemdのdrop-inで指定する。

```
$ sudo systemctl edit jenkins
$ sudo systemctl restart jenkins
```

* [Amazon Linux/CentOSのJenkinsでセッションタイムアウトを24時間にする](http://qiita.com/mechamogera/items/7b490233204afb73c46e)
