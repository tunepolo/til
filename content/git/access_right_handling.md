+++
title = "アクセス権の扱い"
+++

## 実行権限をつける/はずす

実行権限をつけるとき。

```
$ git update-index --add --chmod=+x [filename]
```

実行権限を外すとき。

```
$ git update-index --add --chmod=-x [filename]
```

## アクセス権の違いを無視する

```
$ git config core.filemode false
```
