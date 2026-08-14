+++
title = "パフォーマンスバジェット"
+++

Webサイトのパフォーマンスに関する予算（メトリクスの上限値）を定義し、リリース時に遵守することでパフォーマンスを継続的に良い状態に保つ仕組み。

メトリクスの種類は下記がある。

- Milestone : 読み込みや応答性を表す指標
  - Largest Contentful Paint (LCP) : 主要なコンテンツが表示されるまでの時間
  - Interaction to Next Paint (INP) : 操作に対する応答性
  - Cumulative Layout Shift (CLS) : 表示のずれの大きさ
  - First Contentful Paint (FCP) : 最初の描画までの時間
- Quantity : アセットや通信量
  - JavaScriptのファイルサイズ
  - HTTPリクエスト数
  - クリティカルレンダリングパスの数
- Rules
  - PageSpeed InsightsやLighthouseなどのスコア

LCP、INP、CLSの3つはCore Web Vitalsと呼ばれ、現在の中心的な指標である。
INPは2024年3月にFirst Input Delay (FID)を置き換えた。
かつて使われていたTime to InteractiveはLighthouseから削除されている。

CIにチェック機構を組み込むことで継続的に監視すると良い。

- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [siddharthkp/bundlesize: Keep your bundle size in check](https://github.com/siddharthkp/bundlesize)
- [SpeedCurve: Monitor front-end performance](https://speedcurve.com/)

## 参考

- [Google Developers Japan: パフォーマンスバジェットのご紹介 - ウェブパフォーマンスのための予算管理](https://developers-jp.googleblog.com/2019/03/blog-post_15.html)
