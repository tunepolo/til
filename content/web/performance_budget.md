+++
title = "パフォーマンスバジェット"
+++

Webサイトのパフォーマンスに関する予算（メトリクスの上限値）を定義し、リリース時に遵守することでパフォーマンスを継続的に良い状態に保つ仕組み。

メトリクスの種類は下記がある。

- Milestone : ページローディングの開始から完了までの時間
  - First Contentful Paint
  - Time to Interactive
  - Speed Index
- Quantity : アセットや通信量
  - JavaScriptのファイル合図
  - HTTPリクエスト数
  - クリティカルレンダリングパスの数
- Rules
  - PageSpeed InsightsやLighthouseなどのスコア

Milestoneの指標は書いた当時から入れ替わっている。
現在の中心はCore Web Vitalsの3つ、すなわちLCP、INP、CLSである。
INPは2024年3月にFIDを置き換えた。Time to InteractiveはLighthouseから削除されている。

CIにチェック機構を組み込むことで継続的に監視すると良い。

- [GoogleChromeLabs/lighthousebot](https://github.com/GoogleChromeLabs/lighthousebot) （アーカイブ済み。現在はLighthouse CIを使う）
- [siddharthkp/bundlesize: Keep your bundle size in check](https://github.com/siddharthkp/bundlesize)
- [SpeedCurve: Monitor front-end performance](https://speedcurve.com/)

## 参考

- [Google Developers Japan: パフォーマンスバジェットのご紹介 - ウェブパフォーマンスのための予算管理](https://developers-jp.googleblog.com/2019/03/blog-post_15.html)
