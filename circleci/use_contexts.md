# Contextsを使う

Contextsとは環境変数を保護し、プロジェクト間で共有するためのメカニズムである。
Organizationの設定ページで設定することができる。

使い方は下記の手順を踏む。

1. 適当な名前を決めてConetxtsを作成する
2. config.ymlのworkflowsセクションでcontext: &lt;context name&gt; キーを追加する。

## 参考

- [コンテキストの使用 - CircleCI](https://circleci.com/docs/ja/2.0/contexts/)
- [CircleCIのcontexts便利じゃん - Qiita](https://qiita.com/ieee0824/items/d687fdb1accd5a20821d)
