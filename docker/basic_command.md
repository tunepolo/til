# Dockerの基本操作

## ローカル環境のイメージを表示

```
$ docker images
REPOSITORY          TAG                   IMAGE ID            CREATED             SIZE
circleci/picard     latest                95ab6c488705        5 days ago          102MB
circleci/ruby       2.5.3-node-browsers   e3e595663b2c        10 days ago         2.02GB
circleci/ruby       2.6.1-node-browsers   3ea7b04df6dc        10 days ago         2.02GB
circleci/ruby       2.6.1                 cf96d5f9e8cf        10 days ago         1.21GB
circleci/golang     1.11.2                3e93e4cd615c        2 months ago        1.13GB
```

## ローカル環境のDockerコンテナの一覧を表示

```
$ docker ps -a
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
```

## Dockerイメージの削除

```
$ docker rmi 95ab6c488705
Untagged: circleci/picard:latest
Untagged: circleci/picard@sha256:a6decb2448f4371c64efde9dad90cc4efe0a72216ba7dc288fc89341d0b0c9d2
Deleted: sha256:95ab6c48870525a4596da7e4942e97d7b6cad3d307982fb4e92d244549b576e7
Deleted: sha256:a285c3f03146a03c665e6fe750737ac26abb304780f1d880b997bada0143513c
Deleted: sha256:4b13dd28c2bf8d5bd54d98681610dd60749434b544e86c3945f3de1469924e4f
Deleted: sha256:1ac7df22a46bb91060529dc6e0f9e5df63f37c698537cb966371dd48e3bfcf57
Deleted: sha256:71f5e9d93fe58ac53183778ad7fb30cd1ccf19d0aabbca16b5a1d920b1938d39
Deleted: sha256:c374bc45818d75cc05e893b7faa35af3517caae9ef789e949bf847c7513a4e56
Deleted: sha256:767f936afb51c8a3ad9a96592a4be092048bb70f2ca410028a0b3f64b826acbb
```

## 参考文献

* [Docker入門（第二回）～Dockerセットアップ、コンテナ起動～](https://knowledge.sakura.ad.jp/13795/)
