+++
title = "連続してトリガーされたビルドを自動キャンセルする"
+++

同じブランチに対してトリガーされ、実行待ちとなっているビルドを検知して自動的にキャンセルできる。

プロジェクト設定（BUILD SETTINGS > Advanced Settings）にある下記2つを有効化することで使用できる。

1. Auto-cancel redundant builds
2. Enable pipelines

## 参考

* [CircleCI の Auto-cancel redundant builds が Workflows にも対応した - kakakakakku blog](https://kakakakakku.hatenablog.com/entry/2018/08/22/220625)
