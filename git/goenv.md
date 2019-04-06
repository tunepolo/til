# goenvでインストールする

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
Available versions:
  1.2.2
  :

$ goenv install 1.11.4
$ goenv global 1.11.4
```

goのバージョンアップにgoenvが(またはHomebrewで入れるgoenvが)追従できておらず、Homebrewの方が新しかった。
複数goバージョンを使い分ける必要ができたときに検討する。

* [Golangをgoenvを使ってインストールしてみた - Qiita](https://qiita.com/walkers/items/761b2a5e58849176a633)
