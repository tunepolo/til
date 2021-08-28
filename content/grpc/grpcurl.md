+++
title = "grpcurl の使い方"
+++

公式サイト
https://github.com/fullstorydev/grpcurl

## インストール

> brew install grpcurl

## 使い方 (サーバー側でリフレクションが有効化されている場合)

```bash
# localhost の 50051 でサーバーが稼働している想定

# サービス一覧を表示
grpcurl localhost:50051 list

# メソッド一覧の表示
grpcurl localhost:50051 list my.custom.server.Service

# メソッドの情報を表示
grpcurl localhost:50051 describe my.custom.server.Service.MethodOne

# リクエストパラメータをつける場合
grpcurl -d '{"lang":"Java"}' localhost:50051 describe my.custom.server.Service/MethodOne

# -d @ を使うとリクエストパラメータを標準入力から読み取る
echo '{"lang":"Java"}' | grpcurl -d @ localhost:50051 my.custom.server.Service/MethodOne

# unix ソケットを使って通信する場合
grpcurl -unix /tmp/path_to_socket list
```

### オプション

> --plaintext
> TLS を使わない場合
