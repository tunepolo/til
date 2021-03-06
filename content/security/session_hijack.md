+++
title = "セッションハイジャック"
+++

## 概要

第三者のセッションを乗っ取り、不正な操作を行う。

* リファラによる漏洩
* XSSによるセッションIDの入手
* セッション固定攻撃によるセッションIDの指定
* 通信データの盗聴、ウイルスによるID取得

### セッション固定攻撃

攻撃対象のユーザに対して任意のセッションIDを強制的に利用させる。

下記の場合に起きうる。

- ログイン前にセッションを有効化
- ログイン処理時に外部から与えられたセッションIDを使ってしまうシステム
- 自身が発行したものでないセッションIDを受け入れてしまう「セッションアダプション」という脆弱性を抱えている

また「Cookie Monsterバグ[^cookie-monster-bug]」を利用し、Cookieに意図的なIDを埋め込んでセッション固定攻撃を仕掛ける方法もある。

[^cookie-monster-bug]:ブラウザの不具合を利用してセカンドレベルドメインに対して任意のCookieをセットできる

## 対応方法

* セッションIDをCookiのみで大なう
* セッションハイジャックされていないかチェック
  * 一連のリクエウトの最中にクライアントのヘッダーに変化がないか（Accept-CharsetやUser-Agentなど）
* 重要な処理を行う前にパスワードを入力させる。
* ログイン後にセッションIDの再発行を行う。

## 参考

* [セッション固定攻撃 | 鳩丸ぐろっさり (用語集)](http://bakera.jp/glossary/%E3%82%BB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%E5%9B%BA%E5%AE%9A%E6%94%BB%E6%92%83)
