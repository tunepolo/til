+++
title = "goenvでインストールする"
+++

Go 1.21以降はgo.modの`toolchain`ディレクティブと`GOTOOLCHAIN`環境変数により、Go自身が必要なバージョンを取得して切り替える。
プロジェクトごとにGoのバージョンを合わせたいだけなら、バージョン管理ツールを入れずに済むことが多い。

それでも複数のバージョンを明示的に使い分けたい場合はgoenvを使う。

## インストール

Homebrewでインストールする。

```shell
$ brew install goenv
```

パスの設定と、初期化処理をシェルの設定ファイルへ。

```shell
export PATH="$HOME/.goenv/bin:$PATH"
eval "$(goenv init -)"
```

インストール可能なバージョン一覧を確認し、インストールして、使うバージョンを指定する。

```shell
$ goenv install -l
$ goenv install 1.11.4
$ goenv global 1.11.4
```

なお当時はgoのバージョンアップにgoenvが追従できておらず、Homebrewの方が新しかった。

* [Golangをgoenvを使ってインストールしてみた - Qiita](https://qiita.com/walkers/items/761b2a5e58849176a633)
