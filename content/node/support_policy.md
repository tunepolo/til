+++
title = "Node.jsのサポート方針"
+++

メジャーバージョンが奇数は開発用、偶数はLTS（long term support、長期サポート用）である。

メジャーバージョンがリリースされると、6か月間の"Current release status"にはいる。
これはnpmライブラリ作者が対応するための期間である。

Current release status終了後の対応は以下の通り。

- 奇数バージョン : サポート終了
- 偶数バージョン : Active LTS statusに入る

偶数バージョンはActive LTSを経てMaintenance LTSに移る。
リリースからおよそ30か月でサポートが終了する。30か月はActive LTS単体の期間ではない。

サービスにはActive LTSかMaintenance LTS releasesを使用するべきである。

- [Release | Node.js](https://nodejs.org/en/about/previous-releases)
