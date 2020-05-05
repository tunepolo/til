+++
title = "設定ファイルを分割する"
+++

`circleci config pack`コマンドで結合できる。
ファイルの配置は結合後のYAMLのキー・設定値と対応させる必要がある。

```
$ tree
.
└── your-orb-source
    ├── @orb.yml
    ├── commands
    │   └── foo.yml
    └── jobs
        └── bar.yml
```

上記のファイル構造は下記のように結合される。

```
$ circleci config pack your-orb-source
# contents of @orb.yml appear here
commands:
  foo:
    # contents of foo.yml appear here
jobs:
  bar:
    # contents of bar.yml appear here
```

## 参考

* [Using the CircleCI Local CLI - CircleCI](https://circleci.com/docs/2.0/local-cli/#packing-a-config)
