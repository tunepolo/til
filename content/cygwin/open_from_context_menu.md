+++
title = "フォルダーの右クリックからCygwinを開くメニューを追加する"
+++

Cygwin自体は現存するが、同じ用途は現在WSL2で満たせることが多い。

chereを使うと簡単。Cygwinのパッケージインストーラーから探して入れておく。
実行時は管理者権限でCygwinを起動しておく必要がある。

```
chere -ian -e "Open in Cygwin" -t mintty -s zsh
```

[【chere】右クリックから現在のフォルダをCygwinのBashで開く(ショートカットキー対応)](http://gametricks.blog40.fc2.com/blog-entry-94.html)
