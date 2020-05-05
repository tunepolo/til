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

CIにチェック機構を組み込むことで継続的に監視すると良い。

- [GoogleChromeLabs/lighthousebot: Run Lighthouse in CI, as a web service, using Docker. Pass/Fail GH pull requests.](https://github.com/GoogleChromeLabs/lighthousebot)
- [siddharthkp/bundlesize: Keep your bundle size in check](https://github.com/siddharthkp/bundlesize)
- [SpeedCurve: Monitor front-end performance](https://speedcurve.com/)

## 参考

- [Google Developers Japan: パフォーマンスバジェットのご紹介 - ウェブパフォーマンスのための予算管理](https://developers-jp.googleblog.com/2019/03/blog-post_15.html)
