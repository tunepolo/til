+++
title = "HTTPヘッダーインジェクション"
+++

## 概要

改行コードを含む不正なリクエストをサーバに送りつけることで、改ざんされたHTTPレスポンスヘッダーを送らせ、意図しない動作をブラウザに行わせる。

## 対応方法

* 言語・WAFのバージョンを上げる。改行コードを含むヘッダーがセットできないようになっている。
* プログラムで改行コードをチェックする。

## 参考

* [HTTPヘッダーインジェクション](https://f5.com/jp/education/glossary/glossary068-21549)