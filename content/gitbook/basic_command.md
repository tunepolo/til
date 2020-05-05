+++
title = "Gitbookの基本操作"
+++

## Gitbookとは

Markdownで書いたファイルをHTML/EPUB/PDFに変換して公開できるツール。
ホスティングサービスと、CLIツールが存在する。

* [ホスティングサービス](http://www.gitbook.com/)
* [CLIツール](https://github.com/GitbookIO/gitbook)

## Gitbookの作り方

詳細な説明は下記にある。

* [GitBook Documentation](http://help.gitbook.com/index.html)

CLIツールを動かすにはnode.jsが必要。
node.jsをインストール後、npmでgitbookをインストールする。

```
$ npm install -g gitbook-cli
```

gitbookを作るには最低限2つのファイルが必要。

* README.md
* SUMMARY.md
    * 目次
    * ここでリンクを貼ったMarkdownファイルのみが処理される

htmlへの変換は下記コマンドで行う。

```
$ gitbook build
```

## PDFに変換する

[Calibre](https://calibre-ebook.com/)を事前にインストールしておく。

PDFへの変換は下記コマンドで行う。

```
$ gitbook pdf
```
