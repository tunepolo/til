# 自動ログアウトまでの時間を長くする

`JENKINS_ARGS`として`--sessionTimeout`でログアウトまでの時間を分で与える。

```
$ sudo vim /etc/sysconfig/jenkins

## Type:        string
## Default:     ""
## ServiceRestart: jenkins
#
# Pass arbitrary arguments to Jenkins.
# Full option list: java -jar jenkins.war --help
#
JENKINS_ARGS="--sessionTimeout=1440"


$ sudo service jenkins restart
```

* [Amazon Linux/CentOSのJenkinsでセッションタイムアウトを24時間にする](http://qiita.com/mechamogera/items/7b490233204afb73c46e)
