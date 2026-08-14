+++
title = "連続してトリガーされたビルドを自動キャンセルする"
+++

同じブランチに対してトリガーされ、実行待ちとなっているビルドを検知して自動的にキャンセルできる。

プロジェクト設定の`Advanced`にある`Auto-cancel redundant workflows`を有効化する。

かつてはこの機能を使うのに`Enable pipelines`の有効化も必要だった。
現在pipelinesは既定で有効であり、その項目は存在しない。

## 参考

* [CircleCI の Auto-cancel redundant builds が Workflows にも対応した - kakakakakku blog](https://kakakakakku.hatenablog.com/entry/2018/08/22/220625)
