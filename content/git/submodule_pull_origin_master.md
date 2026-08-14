+++
title = "git submoduleで管理しているリポジトリをリモートの最新に追従させる"
+++

```
$ git submodule update --remote
```

`.gitmodules`の`branch`指定に従って追従する。指定がない場合は既定ブランチが使われる。

各サブモジュールで直接pullする方法もある。ただしブランチ名を決め打ちすることになる。

```
$ git submodule foreach git pull origin master
```
