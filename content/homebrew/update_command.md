+++
title = "Homebrew周りのアップデートコマンド"
+++

## Homebrew自体のアップデート

```
$ brew update
```

## Homebrew自体 + インストールしたソフトウェアのアップデート

```
$ brew upgrade
```

## Homebrew Caskでインストールしたソフトウェアのアップデート

Homebrew 2.6 で `brew cask` サブコマンドは廃止された。`--cask` オプションを使う。

```
$ brew upgrade --cask
```

## mas-cliでインストールしたソフトウェアのアップデート

```
$ mas upgrade
```
