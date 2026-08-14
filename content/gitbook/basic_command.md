+++
title = "Gitbookの基本操作"
+++

Markdownで書いたファイルをHTML/EPUB/PDFに変換して公開するツールだった。

npmの`gitbook`パッケージはdeprecatedとなり、最終リリースは2018年10月である。
CLIの`gitbook-cli`も2017年7月から更新が止まっている。
現在のGitBookはホスティング製品であり、`GitbookIO/gitbook`リポジトリはドキュメントサイトのフロントエンドで別物である。

## 当時の使い方

CLIツールを動かすにはNode.jsが必要だった。

```
$ npm install -g gitbook-cli
```

最低限2つのファイルが要る。`SUMMARY.md`でリンクしたMarkdownファイルだけが処理された。

* README.md
* SUMMARY.md（目次）

HTMLへの変換は`gitbook build`で行う。
PDFへの変換は`gitbook pdf`だが、事前に[Calibre](https://calibre-ebook.com/)のインストールが必要だった。

## 現在の選択肢

Markdownからドキュメントサイトを作る用途では下記がある。

* [VitePress](https://vitepress.dev/)
* [Docusaurus](https://docusaurus.io/)
* [mdBook](https://rust-lang.github.io/mdBook/)
* [Hugo](https://gohugo.io/)（このサイト自体がHugoで作られている）
