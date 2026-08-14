+++
title = "設定ファイルのOrbやコマンドを展開して確認する"
+++

Orbやコマンドを使うと、実際に実行される設定が読み取りにくくなる。
`circleci config process`を使うと、それらを展開した結果を確認できる。

```
$ circleci config process .circleci/config.yml
```

Orbの解決結果がコメントで示され、展開後の設定が出力される。

```yaml
# Orb 'sue445/ruby-orbs@1.4.3' resolved to 'sue445/ruby-orbs@1.4.3'
version: 2
jobs:
  rails_minitest:
    working_directory: ~/workspace
    docker:
    - image: circleci/ruby:2.6.1-node-browsers
    steps:
    - checkout
    - run:
        command: |
          bundle install --jobs=4 --retry=3 --path=vendor/bundle
        name: bundle install
```

末尾には元の設定ファイルがコメントとして付く。

かつては「2.1形式はローカル実行できないため2.0形式に変換する」という使い方をしていた。
現在は2.0形式そのものが非推奨であり、この用途では使わない。
設定の中身を確認したいときに使うコマンドである。

## 参考

* [Using the CircleCI Local CLI - CircleCI](https://circleci.com/docs/local-cli/)
