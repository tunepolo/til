+++
title = "git submoduleで管理しているリポジトリをリモートの最新に追従させる"
+++

```
$ git submodule update --remote
```

`.gitmodules`の`branch`指定に従って追従するため、ブランチ名を決め打ちしなくてよい。
指定がない場合は既定ブランチが使われる。

各サブモジュールで直接pullする方法もあるが、ブランチ名を固定してしまう。

```
$ git submodule foreach git pull origin master
```
