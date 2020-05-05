+++
title = "git secretsの基本操作"
+++

Homebrewでインストールする。

```
$ brew install git-secrets
```

git-secretsを利用するリポジトリでhookのインストールを行い、パターンを登録する。

```
$ git secrets --install
$ git secrets --register-aws
```

全リポジトリにパターン設定をすることもできる。

```
# for AWS
$ git secrets --register-aws --global

# for GCP @see https://cloudplatform-jp.googleblog.com/2017/08/help-keep-your-Google-Cloud-service-account-keys-safe.html
git secrets --add 'private_key' --global
git secrets --add 'private_key_id' --global
```

init/clone時にgit secretsのインストールを行うにはinit.templatedirの設定をする。

```
$ git secrets --install ~/.git-templates/secrets
$ git config --global init.templatedir '~/.git-templates/secrets'
```

## 参考

* [git-secretsの設定を手元の全Repositoryに反映する。｜teitei.tk｜note](https://note.mu/teitei_tk/n/ne1f2fa5a96bb)
