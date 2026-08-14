+++
title = "Dockerの基本操作"
+++

## ローカル環境のイメージを表示

```
$ docker images
REPOSITORY     TAG       IMAGE ID       CREATED        SIZE
ruby           3.3       cf96d5f9e8cf   2 weeks ago    1.21GB
golang         1.22      3e93e4cd615c   2 months ago   1.13GB
```

## ローカル環境のDockerコンテナの一覧を表示

```
$ docker ps -a
CONTAINER ID   IMAGE   COMMAND   CREATED   STATUS   PORTS   NAMES
```

## Dockerイメージの削除

```
$ docker rmi cf96d5f9e8cf
```

イメージIDのかわりに`リポジトリ名:タグ`でも指定できる。

## 不要なリソースをまとめて削除

```
$ docker system prune
```

停止したコンテナ、使われていないネットワーク、どこからも参照されていないイメージが削除される。

## Compose

Compose V2以降はDocker CLIのサブコマンドになっている。
ハイフンのある`docker-compose`ではなく`docker compose`を使う。

```
$ docker compose up -d
```

## 参考文献

* [Docker入門（第二回）～Dockerセットアップ、コンテナ起動～](https://knowledge.sakura.ad.jp/13795/)
