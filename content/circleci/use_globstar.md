+++
title = "globstarを使う"
+++

globstarとはzshで使える `**/*.rb`のような0以上のディレクトリに展開される表記を指す。

CircleCIではbashが使われるが、bashでは明示的に`shopt -s globstar`が設定されていない限り、デフォルトでは ** は * 相当に展開される。

globstarを使う場合、`circleci tests glob "**/*.rb"`のように記述する。

<!-- textlint-disable -->

* [bashとzshとglobstar | r7kamura on Patreon](https://www.patreon.com/posts/bashtozshtoglobs-25141912)

<!-- textlint-enable -->
