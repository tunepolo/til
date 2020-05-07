+++
title = "Node.jsのサポート方針"
+++

メジャーバージョンが奇数は開発用、偶数はLTS（long term support、長期サポート用）である。

メジャーバージョンがリリースされると、6か月間の"Current release status"にはいる。
これはnpmライブラリ作者が対応するための期間である。

Current release status終了後の対応は以下の通り。

- 奇数バージョン : サポート終了
- 偶数バージョン : Active LTS statusに入り、30か月のサポートが開始される。

サービスにはActive LTSかMaintenance LTS releasesを使用するべきである。

- [Release | Node.js](https://nodejs.org/en/about/releases/)
