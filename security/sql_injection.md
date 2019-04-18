# SQLインジェクション

## 概要

データベースに対する命令文（SQL）を改竄して意図しない操作を行う。

## 対応方法

* 入力をエスケープする。
* PreparedStatementを利用する。

## 参考

* [SQLインジェクション - Wikipedia](https://ja.wikipedia.org/wiki/SQL%E3%82%A4%E3%83%B3%E3%82%B8%E3%82%A7%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3#%E5%85%A8%E8%88%AC%E7%9A%84%E3%81%AA%E5%AF%BE%E7%AD%96)
