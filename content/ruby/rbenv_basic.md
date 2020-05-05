+++
title = "rbenvの基本操作"
+++

## rbenvを使ったrubyのインストール

```shell
$ rbenv install --list
$ rbenv install 2.6.1
$ rbenv global 2.6.1
$ rbenv version
```

## rbenvを更新する

```shell
$ brew update
$ brew update rbenv ruby-build
```

## rbenvで入れたgemをまとめて更新する

rbenv-eachを使う。

```shell
$ git clone https://github.com/rbenv/rbenv-each.git "$(rbenv root)"/plugins/rbenv-each

$ rbenv each gem update --system
```
