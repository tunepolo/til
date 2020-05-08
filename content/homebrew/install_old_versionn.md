+++
title = "古いバージョンのモジュールをインストールする"
+++

PHPやnodeなどの言語を切り替えて使う際、opensslやicu4cなど動的にリンクされるモジュールのバージョンが変わってしまい動かなくなることがある。

- [php -vでdyld: Library not loaded: /usr/local/opt/openssl/lib/libcrypto.1.0.0.dylib - Qiita](https://qiita.com/rrj-ueyama/items/07e6c6f6bd78fd6c2d15)
- [phpenvでPHPのバージョンを切り替えたら、brewのicu4cのバージョン違いで怒られた話。 | あそびば32](https://bbq-all-stars.github.io/2019/08/09/php-icu4c-version.html)

HomebrewのCellarにあれば古いバージョンに切り替えることで動く状態に戻せるが、古いバージョンが削除されて手元になく、Homebrewで新規インストールができないこともある。
このようなときは過去バージョンを指定してインストールできる。

> $ brew reinstall https://raw.githubusercontent.com/Homebrew/homebrew-core/{ハッシュ番号をここに書く}/Formula/{対象モジュール}.rb

icu4cの64.2をインストールする場合は下記のようになる。

1. 対象モジュールのFormulaを確認する。[Homebrew Formulae](https://formulae.brew.sh/)の"Formula code"から見つけることができる。
    - icu4cの場合は[Formula/icu4c.rb](https://github.com/Homebrew/homebrew-core/blob/master/Formula/icu4c.rb)
2. 該当ファイルのgit logを確認し、インストールしたいバージョンのハッシュ番号を確認する。
    - `git log master -- Formula/icu4c.rb`で確認可能
    - 64.2の場合は'a806a621ed3722fb580a58000fb274a2f2d86a6d'となる。
3. 上記情報を当てはめ、再インストールコマンドを実行する

```
$ brew reinstall https://raw.githubusercontent.com/Homebrew/homebrew-core/{a806a621ed3722fb580a58000fb274a2f2d86a6d}/Formula/icu4c.rb
```
