+++
title = "Herokuコマンドの基本操作"
+++

Herokuの無料プランは2022年11月に終了した。現在は有料プランの契約が必要である。

## インストール & セットアップ

[The Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)を参考にインストールする。

MacでHomebrewを使う場合は下記でインストールできる。

```
$ brew install heroku/brew/heroku
```

インストールできたらログインし、SSH鍵を登録する。

```
$ heroku login
$ heroku keys:add
```

## 新しいアプリケーションを作成する

```
$ heroku create
```

## Herokuにデプロイする

デプロイ先のブランチ名はリポジトリの既定ブランチに合わせる。

```
$ git push heroku main
```

## Herokuにデプロイされたページを開く

```
$ heroku open
```
