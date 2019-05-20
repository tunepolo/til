# Finderで隠しファイルを表示する

defaultsコマンドで行う。

```
$ defaults write com.apple.finder AppleShowAllFiles TRUE

# 設定変更後はFinderを再起動する
$ killall Finder
```

## 参考
