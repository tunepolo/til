var relearn_searchindex = [
  {
    "breadcrumb": "TIL : Today I learned \u003e Cygwin",
    "content": "Cygwin自体は現存するが、同じ用途は現在WSL2で満たせることが多い。\n下記コマンドで作成する。\n$ mkpasswd -l -c \u003e /etc/passwd $ mkgroup -l -c \u003e /etc/group 巨大ドメインに参加している PC での /etc/passwd, /etc/group ファイルのつくりかた",
    "description": "Cygwin自体は現存するが、同じ用途は現在WSL2で満たせることが多い。\n下記コマンドで作成する。\n$ mkpasswd -l -c \u003e /etc/passwd $ mkgroup -l -c \u003e /etc/group 巨大ドメインに参加している PC での /etc/passwd, /etc/group ファイルのつくりかた",
    "tags": [],
    "title": "/etc/passwdを作成する",
    "uri": "/til/cygwin/create_etc_passwd/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Algorithm",
    "uri": "/til/algorithm/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Architecture",
    "uri": "/til/architecture/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "AWS",
    "uri": "/til/aws/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Windows",
    "content": "REGEDIT4 [HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Keyboard Layout] \"Scancode Map\"=hex:00,00,00,00,00,00,00,00,02,00,00,00,1d,00,3a,00,00,00,00,00",
    "description": "REGEDIT4 [HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Keyboard Layout] \"Scancode Map\"=hex:00,00,00,00,00,00,00,00,02,00,00,00,1d,00,3a,00,00,00,00,00",
    "tags": [],
    "title": "CapsキーをCtrlにし、元のCtrlキーもそのままにするレジストリ設定",
    "uri": "/til/windows/caps_to_ctrl/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "カテゴリー",
    "uri": "/til/categories/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "CentOS",
    "uri": "/til/centos/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Google Chrome",
    "content": "ソースコード中に下記を入れる。\ndebugger; 参考 Chrome の debugger の開始と終了 - Qiita",
    "description": "ソースコード中に下記を入れる。\ndebugger; 参考 Chrome の debugger の開始と終了 - Qiita",
    "tags": [],
    "title": "Chromeのデバッガーを使う",
    "uri": "/til/google-chrome/use_debugger/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "CircleCI",
    "uri": "/til/circleci/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e CircleCI",
    "content": "$ circleci config validate Config file at .circleci/config.yml is valid.",
    "description": "$ circleci config validate Config file at .circleci/config.yml is valid.",
    "tags": [],
    "title": "CircleCIの設定ファイルをローカルで検証する",
    "uri": "/til/circleci/local_config_validate/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Git",
    "content": "clocではvcsオプションがあり、git配下にあるファイルのみを対象とできる。\nRespect .gitignore · Issue #49 · AlDanial/cloc $ cloc --vcs=git 169 text files. 163 unique files. 36 files ignored. github.com/AlDanial/cloc v 1.80 T=0.35 s (439.0 files/s, 10178.5 lines/s) ------------------------------------------------------------------------------- Language files blank comment code ------------------------------------------------------------------------------- Ruby 89 310 388 1590 Haml 38 3 2 315 Sass 8 39 21 250 YAML 10 52 105 220 HTML 3 15 3 182 Markdown 1 15 0 28 JSON 1 0 0 5 JavaScript 3 3 26 4 CSS 1 0 15 0 CoffeeScript 1 0 3 0 ------------------------------------------------------------------------------- SUM: 155 437 563 2594 ------------------------------------------------------------------------------- clocのオプションを設定するよりはgitのサブコマンドをエイリアスで定義する方が楽チン。\n# ~/.gitconfig [alias] cloc = !cloc $(git ls-files) $ cloc --vcs=gitと同じ結果が出る。\n$ git cloc 169 text files. 163 unique files. 36 files ignored. github.com/AlDanial/cloc v 1.80 T=0.10 s (1558.7 files/s, 36142.7 lines/s) ------------------------------------------------------------------------------- Language files blank comment code ------------------------------------------------------------------------------- Ruby 89 310 388 1590 Haml 38 3 2 315 ... ------------------------------------------------------------------------------- SUM: 155 437 563 2594 -------------------------------------------------------------------------------",
    "description": "clocではvcsオプションがあり、git配下にあるファイルのみを対象とできる。\nRespect .gitignore · Issue #49 · AlDanial/cloc $ cloc --vcs=git 169 text files. 163 unique files. 36 files ignored. github.com/AlDanial/cloc v 1.80 T=0.35 s (439.0 files/s, 10178.5 lines/s) ------------------------------------------------------------------------------- Language files blank comment code ------------------------------------------------------------------------------- Ruby 89 310 388 1590 Haml 38 3 2 315 Sass 8 39 21 250 YAML 10 52 105 220 HTML 3 15 3 182 Markdown 1 15 0 28 JSON 1 0 0 5 JavaScript 3 3 26 4 CSS 1 0 15 0 CoffeeScript 1 0 3 0 ------------------------------------------------------------------------------- SUM: 155 437 563 2594 ------------------------------------------------------------------------------- clocのオプションを設定するよりはgitのサブコマンドをエイリアスで定義する方が楽チン。",
    "tags": [],
    "title": "clocでgit管理下にあるファイルだけを対象とする",
    "uri": "/til/git/cloc/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e CircleCI",
    "content": "Contextsとは環境変数を保護し、プロジェクト間で共有するためのメカニズムである。 Organizationの設定ページで設定できる。\n使い方は下記の手順を踏む。\n適当な名前を決めてConetxtsを作成する config.ymlのworkflowsセクションでcontext: \u003ccontext name\u003e キーを追加する。 参考 コンテキストの使用 - CircleCI CircleCIのcontexts便利じゃん - Qiita",
    "description": "Contextsとは環境変数を保護し、プロジェクト間で共有するためのメカニズムである。 Organizationの設定ページで設定できる。\n使い方は下記の手順を踏む。",
    "tags": [],
    "title": "Contextsを使う",
    "uri": "/til/circleci/use_contexts/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Mac OS",
    "content": "「システム設定」→「キーボード」→「キーボードショートカット」→「修飾キー」と辿り、キーを入れ替えればよい。\nmacOS Monterey以前は「システム環境設定」→「キーボード」→「修飾キー」だった。 macOS Venturaで「システム設定」に名称が変わり、経路も深くなっている。\nUS仕様のキーボードのMacでControlキーとCaps Lockキーを入れ替える方法 / Inforati",
    "description": "「システム設定」→「キーボード」→「キーボードショートカット」→「修飾キー」と辿り、キーを入れ替えればよい。\nmacOS Monterey以前は「システム環境設定」→「キーボード」→「修飾キー」だった。 macOS Venturaで「システム設定」に名称が変わり、経路も深くなっている。",
    "tags": [],
    "title": "ControlキーとCaps Lockキーを入れ替える",
    "uri": "/til/mac/swap_ctrl_caps/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Cygwin",
    "uri": "/til/cygwin/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Docker",
    "uri": "/til/docker/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Docker",
    "content": "ローカル環境のイメージを表示 $ docker images REPOSITORY TAG IMAGE ID CREATED SIZE ruby 3.3 cf96d5f9e8cf 2 weeks ago 1.21GB golang 1.22 3e93e4cd615c 2 months ago 1.13GB ローカル環境のDockerコンテナの一覧を表示 $ docker ps -a CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES Dockerイメージの削除 $ docker rmi cf96d5f9e8cf イメージIDのかわりにリポジトリ名:タグでも指定できる。\n不要なリソースをまとめて削除 $ docker system prune 停止したコンテナ、使われていないネットワーク、どこからも参照されていないイメージが削除される。\nCompose Compose V2以降はDocker CLIのサブコマンドになっている。 ハイフンのあるdocker-composeではなくdocker composeを使う。\n$ docker compose up -d 参考文献 Docker入門（第二回）～Dockerセットアップ、コンテナ起動～",
    "description": "ローカル環境のイメージを表示 $ docker images REPOSITORY TAG IMAGE ID CREATED SIZE ruby 3.3 cf96d5f9e8cf 2 weeks ago 1.21GB golang 1.22 3e93e4cd615c 2 months ago 1.13GB ローカル環境のDockerコンテナの一覧を表示 $ docker ps -a CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES Dockerイメージの削除 $ docker rmi cf96d5f9e8cf イメージIDのかわりにリポジトリ名:タグでも指定できる。",
    "tags": [],
    "title": "Dockerの基本操作",
    "uri": "/til/docker/basic_command/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Mac OS",
    "content": "defaultsコマンドで行う。\n$ defaults write com.apple.finder AppleShowAllFiles TRUE # 設定変更後はFinderを再起動する $ killall Finder 参考",
    "description": "defaultsコマンドで行う。\n$ defaults write com.apple.finder AppleShowAllFiles TRUE # 設定変更後はFinderを再起動する $ killall Finder 参考",
    "tags": [],
    "title": "Finderで隠しファイルを表示する",
    "uri": "/til/mac/show_secret_file_in_finder/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Git",
    "uri": "/til/git/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Git",
    "content": "Homebrewでインストールする。\n$ brew install git-secrets git-secretsを利用するリポジトリでhookのインストールを行い、パターンを登録する。\n$ git secrets --install $ git secrets --register-aws 全リポジトリにまとめてパターンを設定できる。\n# for AWS $ git secrets --register-aws --global # for GCP @see https://cloudplatform-jp.googleblog.com/2017/08/help-keep-your-Google-Cloud-service-account-keys-safe.html git secrets --add 'private_key' --global git secrets --add 'private_key_id' --global init/clone時にgit secretsのインストールを行うにはinit.templatedirの設定をする。\n$ git secrets --install ~/.git-templates/secrets $ git config --global init.templatedir '~/.git-templates/secrets' 現在の選択肢 git-secretsは今も使えるが、コミット前に止める仕組みは他にも増えている。\nGitHubのSecret scanningとPush protection。リポジトリ設定で有効化できる。 gitleaks。検出ルールが多くCIにも組み込みやすい。 参考 git-secretsの設定を手元の全Repositoryに反映する。｜teitei.tk｜note",
    "description": "Homebrewでインストールする。\n$ brew install git-secrets git-secretsを利用するリポジトリでhookのインストールを行い、パターンを登録する。\n$ git secrets --install $ git secrets --register-aws 全リポジトリにまとめてパターンを設定できる。",
    "tags": [],
    "title": "git secretsの基本操作",
    "uri": "/til/git/basic_secrets/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Git",
    "content": "$ git submodule update --remote .gitmodulesのbranch指定に従って追従する。指定がない場合は既定ブランチが使われる。\n各サブモジュールで直接pullする方法もある。ただしブランチ名を決め打ちすることになる。\n$ git submodule foreach git pull origin master",
    "description": "$ git submodule update --remote .gitmodulesのbranch指定に従って追従する。指定がない場合は既定ブランチが使われる。\n各サブモジュールで直接pullする方法もある。ただしブランチ名を決め打ちすることになる。",
    "tags": [],
    "title": "git submoduleで管理しているリポジトリをリモートの最新に追従させる",
    "uri": "/til/git/submodule_pull_origin_master/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Git",
    "content": "$ git submodule deinit path/to/submodule $ git rm path/to/submodule 参考 git submoduleを今風な感じで削除する - Qiita",
    "description": "$ git submodule deinit path/to/submodule $ git rm path/to/submodule 参考 git submoduleを今風な感じで削除する - Qiita",
    "tags": [],
    "title": "git submoduleで管理しているリポジトリを削除する",
    "uri": "/til/git/submodule_delete/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "GitBook",
    "uri": "/til/gitbook/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e GitBook",
    "content": "Markdownで書いたファイルをHTML/EPUB/PDFに変換して公開するツールだった。\nnpmのgitbookパッケージはdeprecatedとなり、最終リリースは2018年10月である。 CLIのgitbook-cliも2017年7月から更新が止まっている。 現在のGitBookはホスティング製品であり、GitbookIO/gitbookリポジトリはドキュメントサイトのフロントエンドで別物である。\n当時の使い方 CLIツールを動かすにはNode.jsが必要だった。\n$ npm install -g gitbook-cli 最低限2つのファイルが要る。SUMMARY.mdでリンクしたMarkdownファイルだけが処理された。\nREADME.md SUMMARY.md（目次） HTMLへの変換はgitbook buildで行う。 PDFへの変換はgitbook pdfだが、事前にCalibreのインストールが必要だった。\n現在の選択肢 Markdownからドキュメントサイトを作る用途では下記がある。\nVitePress Docusaurus mdBook Hugo（このサイト自体がHugoで作られている）",
    "description": "Markdownで書いたファイルをHTML/EPUB/PDFに変換して公開するツールだった。\nnpmのgitbookパッケージはdeprecatedとなり、最終リリースは2018年10月である。 CLIのgitbook-cliも2017年7月から更新が止まっている。 現在のGitBookはホスティング製品であり、GitbookIO/gitbookリポジトリはドキュメントサイトのフロントエンドで別物である。",
    "tags": [],
    "title": "Gitbookの基本操作",
    "uri": "/til/gitbook/basic_command/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e CircleCI",
    "content": "globstarとはzshで使える **/*.rbのような0以上のディレクトリに展開される表記を指す。\nCircleCIではbashが使われるが、bashでは明示的にshopt -s globstarが設定されていない限り、デフォルトでは ** は * 相当に展開される。\nglobstarを使う場合、circleci tests glob \"**/*.rb\"のように記述する。\nbashとzshとglobstar | r7kamura on Patreon",
    "description": "globstarとはzshで使える **/*.rbのような0以上のディレクトリに展開される表記を指す。\nCircleCIではbashが使われるが、bashでは明示的にshopt -s globstarが設定されていない限り、デフォルトでは ** は * 相当に展開される。",
    "tags": [],
    "title": "globstarを使う",
    "uri": "/til/circleci/use_globstar/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Git",
    "content": "Go 1.21以降はgo.modのtoolchainディレクティブとGOTOOLCHAIN環境変数により、Go自身が必要なバージョンを取得して切り替える。 プロジェクトごとにGoのバージョンを合わせたいだけなら、バージョン管理ツールを入れずに済むことが多い。\nそれでも複数のバージョンを明示的に使い分けたい場合はgoenvを使う。\nインストール Homebrewでインストールする。\n$ brew install goenv パスの設定と、初期化処理をシェルの設定ファイルへ。\nexport PATH=\"$HOME/.goenv/bin:$PATH\" eval \"$(goenv init -)\" インストール可能なバージョン一覧を確認し、インストールして、使うバージョンを指定する。\n$ goenv install -l $ goenv install 1.11.4 $ goenv global 1.11.4 なお当時はgoのバージョンアップにgoenvが追従できておらず、Homebrewの方が新しかった。\nGolangをgoenvを使ってインストールしてみた - Qiita",
    "description": "Go 1.21以降はgo.modのtoolchainディレクティブとGOTOOLCHAIN環境変数により、Go自身が必要なバージョンを取得して切り替える。 プロジェクトごとにGoのバージョンを合わせたいだけなら、バージョン管理ツールを入れずに済むことが多い。",
    "tags": [],
    "title": "goenvでインストールする",
    "uri": "/til/git/goenv/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Google Chrome",
    "uri": "/til/google-chrome/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "gRPC",
    "uri": "/til/grpc/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e gRPC",
    "content": "公式サイト https://github.com/fullstorydev/grpcurl\nインストール brew install grpcurl\n使い方 (サーバー側でリフレクションが有効化されている場合) # localhost の 50051 でサーバーが稼働している想定 # サービス一覧を表示 grpcurl localhost:50051 list # メソッド一覧の表示 grpcurl localhost:50051 list my.custom.server.Service # メソッドの情報を表示 grpcurl localhost:50051 describe my.custom.server.Service.MethodOne # リクエストパラメータをつける場合 grpcurl -d '{\"lang\":\"Java\"}' localhost:50051 describe my.custom.server.Service/MethodOne # -d @ を使うとリクエストパラメータを標準入力から読み取る echo '{\"lang\":\"Java\"}' | grpcurl -d @ localhost:50051 my.custom.server.Service/MethodOne # unix ソケットを使って通信する場合 grpcurl -unix /tmp/path_to_socket list オプション –plaintext TLS を使わない場合",
    "description": "公式サイト https://github.com/fullstorydev/grpcurl\nインストール brew install grpcurl\n使い方 (サーバー側でリフレクションが有効化されている場合) # localhost の 50051 でサーバーが稼働している想定 # サービス一覧を表示 grpcurl localhost:50051 list # メソッド一覧の表示 grpcurl localhost:50051 list my.custom.server.Service # メソッドの情報を表示 grpcurl localhost:50051 describe my.custom.server.Service.MethodOne # リクエストパラメータをつける場合 grpcurl -d '{\"lang\":\"Java\"}' localhost:50051 describe my.custom.server.Service/MethodOne # -d @ を使うとリクエストパラメータを標準入力から読み取る echo '{\"lang\":\"Java\"}' | grpcurl -d @ localhost:50051 my.custom.server.Service/MethodOne # unix ソケットを使って通信する場合 grpcurl -unix /tmp/path_to_socket list オプション –plaintext TLS を使わない場合",
    "tags": [],
    "title": "grpcurl の使い方",
    "uri": "/til/grpc/grpcurl/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Heroku",
    "uri": "/til/heroku/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Heroku",
    "content": "Herokuの無料プランは2022年11月に終了した。現在は有料プランの契約が必要である。\nインストール \u0026 セットアップ The Heroku CLIを参考にインストールする。\nMacでHomebrewを使う場合は下記でインストールできる。\n$ brew install heroku/brew/heroku インストールできたらログインし、SSH鍵を登録する。\n$ heroku login $ heroku keys:add 新しいアプリケーションを作成する $ heroku create Herokuにデプロイする デプロイ先のブランチ名はリポジトリの既定ブランチに合わせる。\n$ git push heroku main Herokuにデプロイされたページを開く $ heroku open",
    "description": "Herokuの無料プランは2022年11月に終了した。現在は有料プランの契約が必要である。\nインストール \u0026 セットアップ The Heroku CLIを参考にインストールする。",
    "tags": [],
    "title": "Herokuコマンドの基本操作",
    "uri": "/til/heroku/basic_command/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Homebrew",
    "uri": "/til/homebrew/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Homebrew",
    "content": "Homebrew自体のアップデート $ brew update Homebrew自体 + インストールしたソフトウェアのアップデート $ brew upgrade Homebrew Caskでインストールしたソフトウェアのアップデート Homebrew 2.6 で brew cask サブコマンドは廃止された。--cask オプションを使う。\n$ brew upgrade --cask mas-cliでインストールしたソフトウェアのアップデート $ mas upgrade",
    "description": "Homebrew自体のアップデート $ brew update Homebrew自体 + インストールしたソフトウェアのアップデート $ brew upgrade Homebrew Caskでインストールしたソフトウェアのアップデート Homebrew 2.6 で brew cask サブコマンドは廃止された。--cask オプションを使う。",
    "tags": [],
    "title": "Homebrew周りのアップデートコマンド",
    "uri": "/til/homebrew/update_command/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e iTerm2",
    "content": "設定画面の Keys → Create a Dedicated Hotkey Window... を開く。 Hotkey、またはDouble-Tap Keyを設定する。 設定画面の General で Only Restore Hotkey Windowを選択する。 設定画面の Profiles で外観を設定する。 iTerm2のHotkeyを使わないなんてもったいない！！ - Qiita",
    "description": "設定画面の Keys → Create a Dedicated Hotkey Window... を開く。 Hotkey、またはDouble-Tap Keyを設定する。 設定画面の General で Only Restore Hotkey Windowを選択する。 設定画面の Profiles で外観を設定する。 iTerm2のHotkeyを使わないなんてもったいない！！ - Qiita",
    "tags": [],
    "title": "Hotkeyを有効化する",
    "uri": "/til/iterm2/enable_hotkey/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Security",
    "content": "概要 改行コードを含む不正なリクエストをサーバに送りつけることで、改ざんされたHTTPレスポンスヘッダーを送らせ、意図しない動作をブラウザに行わせる。\n対応方法 言語・WAFのバージョンを上げる。改行コードを含むヘッダーがセットできないようになっている。 プログラムで改行コードをチェックする。 参考 HTTPヘッダーインジェクション",
    "description": "概要 改行コードを含む不正なリクエストをサーバに送りつけることで、改ざんされたHTTPレスポンスヘッダーを送らせ、意図しない動作をブラウザに行わせる。",
    "tags": [],
    "title": "HTTPヘッダーインジェクション",
    "uri": "/til/security/http_header_injection/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "iTerm2",
    "uri": "/til/iterm2/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Jenkins",
    "uri": "/til/jenkins/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Mac OS",
    "uri": "/til/mac/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Management",
    "uri": "/til/management/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Node.js",
    "uri": "/til/node/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Node.js",
    "content": "メジャーバージョンが奇数は開発用、偶数はLTS（long term support、長期サポート用）である。\nメジャーバージョンがリリースされると、6か月間の\"Current release status\"にはいる。 これはnpmライブラリ作者が対応するための期間である。\nCurrent release status終了後の対応は以下の通り。\n奇数バージョン : サポート終了 偶数バージョン : Active LTS statusに入る 偶数バージョンはActive LTSを経てMaintenance LTSに移る。 リリースからおよそ30か月でサポートが終了する。30か月はActive LTS単体の期間ではない。\nサービスにはActive LTSかMaintenance LTS releasesを使用するべきである。\nRelease | Node.js",
    "description": "メジャーバージョンが奇数は開発用、偶数はLTS（long term support、長期サポート用）である。\nメジャーバージョンがリリースされると、6か月間の\"Current release status\"にはいる。 これはnpmライブラリ作者が対応するための期間である。",
    "tags": [],
    "title": "Node.jsのサポート方針",
    "uri": "/til/node/support_policy/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "npm",
    "uri": "/til/npm/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e npm",
    "content": "$ npm install -g npm@latest npm update -g npmでも上がるが、バージョンを明示するほうが確実である。",
    "description": "$ npm install -g npm@latest npm update -g npmでも上がるが、バージョンを明示するほうが確実である。",
    "tags": [],
    "title": "npmのバージョンを上げる",
    "uri": "/til/npm/npm_global_verup/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Security",
    "content": "概要 Nullバイト（’\\0’, ‘\\x00’, ‘%00’）をリクエストに含めることで、セキュリティチェックをくぐりぬけようとする攻撃。 サーバ側の処理でバイナリセーフない処理が入っているとこれにより誤動作を起こしてしまうことがある。\nPHP 5.3.4以降では起きにくくなったらしい。\n参考:PHP 5.3.4以降ではヌルバイト攻撃が成立しにくくなった - hnwの日記 対応方法 処理の最初にNullバイトを削除する。 バイナリセーフな関数を極力使う。 参考 NULLバイト攻撃への対策（ヌルバイトアタック） - Qiita",
    "description": "概要 Nullバイト（’\\0’, ‘\\x00’, ‘%00’）をリクエストに含めることで、セキュリティチェックをくぐりぬけようとする攻撃。 サーバ側の処理でバイナリセーフない処理が入っているとこれにより誤動作を起こしてしまうことがある。",
    "tags": [],
    "title": "Nullバイト攻撃",
    "uri": "/til/security/null_byte_attack/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Security",
    "content": "概要 パラメーターにOSへの命令文を紛れ込ませ、サーバ内の任意のコマンドを実行させることで攻撃を仕掛ける。\n対策 外部ファイル・コマンドを実行する仕組みを作らない。 参考 OSコマンドインジェクションの仕組みとその対策 | セキュリティ対策 | CyberSecurityTIMES",
    "description": "概要 パラメーターにOSへの命令文を紛れ込ませ、サーバ内の任意のコマンドを実行させることで攻撃を仕掛ける。\n対策 外部ファイル・コマンドを実行する仕組みを作らない。 参考 OSコマンドインジェクションの仕組みとその対策 | セキュリティ対策 | CyberSecurityTIMES",
    "tags": [],
    "title": "OSコマンドインジェクション",
    "uri": "/til/security/os_command_injection/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "PHP",
    "uri": "/til/php/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e PHP",
    "content": "文字列型とキャスト echoで出力する場合、文字列以外の変数・定数は文字列にキャストされて出力される。 下記の例は15.0ではなく、15と表示される。\necho 15.0; // 15と出力される printf('%.1f', 15.0); // 15.0と出力される falseと判断される論理型 PHPは下記をfalseと判断する。\nfalse (論理型) 0 (整数型) 0.0 (浮動小数点型) 空の文字列 (\"\")、文字列のゼロ (“0”) 要素の数が0の配列 null 空のタグから作成されたSimpleXMLオブジェクト 「数値らしき文字列」を整数型・浮動小数点型にキャストする。 下記のスクリプトはequalを出力する。 0.0が浮動小数点型に、0が整数型にキャストされる。 両者が比較される際に浮動小数点型で統一され、if文の評価がtrueとなる。\nif ('0.0' == '0') { echo 'equal'; } 数字を文字列と連結する際にスペースがないとパースエラーとなる。 $str1 = \"He's \" . 10 . \" years old.\"; // \"He's 10 years old.\" $str2 = \"She's \" . 11. \" years old.\"; // \"11.\"が浮動小数点型と判断され、パースエラーが発生する。 三項演算子が入れ子にできる。 三項演算子は左結合であるため、下記の式は(true ? 1 : false) ? 2 : 0と評価され、2が出力される。\necho true ? 1 : false ? 2 : 0; // 2が出力される。 PHPの配列はすべて連想配列である。 他言語である配列とハッシュ（連想配列）の区別がない。 この特性から、PHPの連想配列は順序が保証されている。\n別ファイルに記述されたPHPファイルを読み込む requireとincludeがある。前者はファイルがなければFatal Errorを返す。後者はWarningとなる。 どちらも読んだ回数だけ実行されるため、ライブラリ読み込みのように1度きり読み込む際はrequire_onceかinclude_onceを使う。\n宣言していないプロパティにアクセスできる。 プロパティ名のtypoをしたらハマりそう。\nなおこの動作はPHP 8.2で非推奨となった。 宣言していないプロパティへの代入は警告が出る。\nclass Hoge { // ... } $foo = new Hoge(); $foo-\u003ebar = \"hogehoge\"; // barプロパティが作成される",
    "description": "文字列型とキャスト echoで出力する場合、文字列以外の変数・定数は文字列にキャストされて出力される。 下記の例は15.0ではなく、15と表示される。",
    "tags": [],
    "title": "PHPのヘンテコ仕様",
    "uri": "/til/php/php_strange_spec/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Management",
    "content": "プロジェクトにおける関係者の役割・責任を整理し、明確化するために使われるチャート。\nRACIの定義 | R | 実行責任者(Responsible) | タスクの実行に責任を持つ者 | | A | 説明責任者(Accountable) | ステークホルダーから進捗・状況を聞かれた際に説明する責任を持つ者 | | C | 協議先(Consulted) | タスクの実行に関するアドバイスを行う者 | | I | 報告先(Informed) | タスクの進捗報告を受ける者 |\nチャートの作り方 タスクと関係者から構成される表を作成する。 セルにR/A/C/Iを埋める 完成したら関係者に周知する。 作り方のコツは下記の通り。\nAから記入する。Aは必ず一人にする。 Aの次にRを記入する。 Cは必要であれば記入する。 Iは一番最後に記入する。 参考 RACI（レイシー）とは？ 責任を持つとは？　〜RACIチャートの紹介〜 ｜ DevelopersIO",
    "description": "プロジェクトにおける関係者の役割・責任を整理し、明確化するために使われるチャート。\nRACIの定義 | R | 実行責任者(Responsible) | タスクの実行に責任を持つ者 | | A | 説明責任者(Accountable) | ステークホルダーから進捗・状況を聞かれた際に説明する責任を持つ者 | | C | 協議先(Consulted) | タスクの実行に関するアドバイスを行う者 | | I | 報告先(Informed) | タスクの進捗報告を受ける者 |",
    "tags": [],
    "title": "RACI",
    "uri": "/til/management/raci/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Ruby on Rails",
    "content": "モデル生成 Userモデルを生成する。\nfield type id integer name string email string created_at datetime updated_at datetime $ rails generate model User name:string email:string Userモデルと関連を持つMicropostモデルを生成する。\nfield type id integer content text user_id integer created_at datetime updated_at datetime $ rails generate model Micropost content:text user:references DB操作 マイグレーション $ rails db:migrate DBのリセット $ rails db:migrate:reset 初期データ/ダミーデータの挿入 $ rails db:seed",
    "description": "モデル生成 Userモデルを生成する。\nfield type id integer name string email string created_at datetime updated_at datetime $ rails generate model User name:string email:string Userモデルと関連を持つMicropostモデルを生成する。",
    "tags": [],
    "title": "Railsコマンドの基本操作",
    "uri": "/til/ruby-on-rails/basic_command/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Ruby",
    "content": "rbenvを使ったrubyのインストール $ rbenv install --list $ rbenv install 2.6.1 $ rbenv global 2.6.1 $ rbenv version rbenvを更新する $ brew update $ brew upgrade rbenv ruby-build rbenvで入れたgemをまとめて更新する rbenv-eachを使う。\n$ git clone https://github.com/rbenv/rbenv-each.git \"$(rbenv root)\"/plugins/rbenv-each $ rbenv each gem update --system",
    "description": "rbenvを使ったrubyのインストール $ rbenv install --list $ rbenv install 2.6.1 $ rbenv global 2.6.1 $ rbenv version rbenvを更新する $ brew update $ brew upgrade rbenv ruby-build rbenvで入れたgemをまとめて更新する rbenv-eachを使う。",
    "tags": [],
    "title": "rbenvの基本操作",
    "uri": "/til/ruby/rbenv_basic/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Ruby",
    "uri": "/til/ruby/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Ruby on Rails",
    "uri": "/til/ruby-on-rails/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Security",
    "uri": "/til/security/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "SEO",
    "uri": "/til/seo/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e SEO",
    "content": "Search Engine Result Pageの略で、ユーザーが検索エンジンで検索したキーワードの検索結果ページを指す。 SERPs（サープス）と複数形で呼ぶこともある。",
    "description": "Search Engine Result Pageの略で、ユーザーが検索エンジンで検索したキーワードの検索結果ページを指す。 SERPs（サープス）と複数形で呼ぶこともある。",
    "tags": [],
    "title": "SERP",
    "uri": "/til/seo/serp/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Security",
    "content": "概要 データベースに対する命令文（SQL）を改竄し、意図しない操作をさせる。\n対応方法 入力をエスケープする。 PreparedStatementを利用する。 参考 SQLインジェクション - Wikipedia",
    "description": "概要 データベースに対する命令文（SQL）を改竄し、意図しない操作をさせる。\n対応方法 入力をエスケープする。 PreparedStatementを利用する。 参考 SQLインジェクション - Wikipedia",
    "tags": [],
    "title": "SQLインジェクション",
    "uri": "/til/security/sql_injection/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "タグ",
    "uri": "/til/tags/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Photo by Tim Mossholder on Unsplash",
    "description": "Photo by Tim Mossholder on Unsplash",
    "tags": [],
    "title": "TIL : Today I learned",
    "uri": "/til/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Google Chrome",
    "content": "デベロッパーツールを開く 右上のハンバーガーメニューから「More tools」→「Network Conditions」を開く “User Agent : select automatically\"のチェックを外し、希望のものを設定する。 参考 Google ChromeでUserAgentを変更する - Qiita",
    "description": "デベロッパーツールを開く 右上のハンバーガーメニューから「More tools」→「Network Conditions」を開く “User Agent : select automatically\"のチェックを外し、希望のものを設定する。 参考 Google ChromeでUserAgentを変更する - Qiita",
    "tags": [],
    "title": "UserAgentを変更する",
    "uri": "/til/google-chrome/change_user-agent/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Visual Studio",
    "uri": "/til/visual-studio/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Web",
    "uri": "/til/web/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Windows",
    "uri": "/til/windows/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Management",
    "content": "MIT Sloan School of Managementのダグラス・マクレガーの著書「企業の人間的側面」で提唱されたモチベーションに関するマネジメントの理論である。\nX理論 人間は経済的動機のみによって労働し、命令・指示されたことしか実行しない\n次のような仮定に基づいている。\n人は本質的に仕事が嫌いで、それを避けようとする。 最大限の成果を引き出すためには、強制・制御・命令・脅迫が必要である。 人は野心を抱くこともなく、責任も取りたがらない。命令されたい。 人事の多くの仕組みはX理論の仮定に根ざしている。パフォーマンスレビュー・個別の目標設定・ボーナスシステムなど。\nY理論 人間にとって労働は本来望ましいものであり、自己の能力を発揮し、自己実現を目指すことを望んでいる\n次のような仮定に基づいている。\n人は遊びや休息を取るのと同じように、自然に努力して働く。 コミットした目標のために、自己管理・自己統制する。コミットメントは成果に関連するチャレンジ・学習・目的意識など内在的な報酬から生まれる。 適切な環境が与えられれば人は責任を回避するのではなく、むしろ求める。想像力・独創力・創造性はすべての人が持っているスキルである。",
    "description": "MIT Sloan School of Managementのダグラス・マクレガーの著書「企業の人間的側面」で提唱されたモチベーションに関するマネジメントの理論である。\nX理論 人間は経済的動機のみによって労働し、命令・指示されたことしか実行しない",
    "tags": [],
    "title": "X理論とY理論",
    "uri": "/til/management/xtheory_and_ytheory/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Git",
    "content": "実行権限をつける/はずす 実行権限をつけるとき。\n$ git update-index --add --chmod=+x [filename] 実行権限を外すとき。\n$ git update-index --add --chmod=-x [filename] アクセス権の違いを無視する $ git config core.filemode false",
    "description": "実行権限をつける/はずす 実行権限をつけるとき。\n$ git update-index --add --chmod=+x [filename] 実行権限を外すとき。\n$ git update-index --add --chmod=-x [filename] アクセス権の違いを無視する $ git config core.filemode false",
    "tags": [],
    "title": "アクセス権の扱い",
    "uri": "/til/git/access_right_handling/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e CentOS",
    "content": "/etc/os-releaseを確認する。systemdを採用しているディストリビューションで共通して使える。\n$ cat /etc/os-release NAME=\"Rocky Linux\" VERSION=\"9.3 (Blue Onyx)\" ID=\"rocky\" VERSION_ID=\"9.3\" RHEL系には/etc/redhat-releaseもある。\n$ cat /etc/redhat-release CentOS release 6.4 (Final) なおCentOS Linuxはすでにサポートが終了している。 CentOS 8は2021年12月、CentOS 7は2024年6月に終了した。 後継にあたるのはCentOS Stream、Rocky Linux、AlmaLinuxなどである。",
    "description": "/etc/os-releaseを確認する。systemdを採用しているディストリビューションで共通して使える。\n$ cat /etc/os-release NAME=\"Rocky Linux\" VERSION=\"9.3 (Blue Onyx)\" ID=\"rocky\" VERSION_ID=\"9.3\" RHEL系には/etc/redhat-releaseもある。",
    "tags": [],
    "title": "バージョンの確認方法",
    "uri": "/til/centos/version_check/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e AWS",
    "content": "リージョン : 地理的に大きく離れたデータセンターの集合体。東京、バージニア北部など AZ : Availability Zoneの略。リージョン内の1ないし複数のデータセンターの集合体。AZを跨いだ障害が起きにくいように設計されている。 参考 AWSのリージョン、AZ、VPC、サブネットの話 - Qiita",
    "description": "リージョン : 地理的に大きく離れたデータセンターの集合体。東京、バージニア北部など AZ : Availability Zoneの略。リージョン内の1ないし複数のデータセンターの集合体。AZを跨いだ障害が起きにくいように設計されている。 参考 AWSのリージョン、AZ、VPC、サブネットの話 - Qiita",
    "tags": [],
    "title": "リージョンとAZ",
    "uri": "/til/aws/region_and_az/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Homebrew",
    "content": "$ brew bundle dump Brewfileにインストールしたソフトウェアが書き込まれる。\n$ brew bundle --file=Brewfile でBrewfileに書き込まれたソフトウェアを一括インストールできる。",
    "description": "$ brew bundle dump Brewfileにインストールしたソフトウェアが書き込まれる。\n$ brew bundle --file=Brewfile でBrewfileに書き込まれたソフトウェアを一括インストールできる。",
    "tags": [],
    "title": "インストールしたソフトウェアをファイルに書き出す",
    "uri": "/til/homebrew/brew_bundle_dump/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Mac OS",
    "content": "ウィンドウの左上にある最大化ボタンを長押し ウィンドウが縮小表示されるようになるので、左右の表示したい側にドラッグ\u0026ドロップする 長押しを解除し、並べて表示したいウィンドウをドラッグ\u0026ドロップする 参考 Split View で Mac の App を 2 つ並べて表示する - Apple サポート",
    "description": "ウィンドウの左上にある最大化ボタンを長押し ウィンドウが縮小表示されるようになるので、左右の表示したい側にドラッグ\u0026ドロップする 長押しを解除し、並べて表示したいウィンドウをドラッグ\u0026ドロップする 参考 Split View で Mac の App を 2 つ並べて表示する - Apple サポート",
    "tags": [],
    "title": "ウィンドウを並べて表示する",
    "uri": "/til/mac/split_view/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Windows",
    "content": "cmdと入れると、開いているディレクトリをカレントにしてコマンドプロンプトが開ける。 ネットワーク上の共有フォルダーの場合、コマンドプロンプトは開けないが、powershellとすることでPowerShellが立ち上がる。\nWindows Explorer のアドレスバーは、“ファイル名を指定して実行\"を超える",
    "description": "cmdと入れると、開いているディレクトリをカレントにしてコマンドプロンプトが開ける。 ネットワーク上の共有フォルダーの場合、コマンドプロンプトは開けないが、powershellとすることでPowerShellが立ち上がる。",
    "tags": [],
    "title": "エクスプローラーのアドレスバーは\"ファイル名を指定して実行\"と同じことができる",
    "uri": "/til/windows/explorer_address_bar/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Algorithm",
    "content": "2つの文字列がどの程度異なっているかを示す距離の一種。編集距離とも呼ばれる。\nスペルチェッカー等において、2つの文字列がどの程度に類似しているかを具体的な値として使われる。\nレーベンシュタイン距離 - Wikipedia 編集距離（レーベンシュタイン距離）を理解し、実装する - Qiita",
    "description": "2つの文字列がどの程度異なっているかを示す距離の一種。編集距離とも呼ばれる。\nスペルチェッカー等において、2つの文字列がどの程度に類似しているかを具体的な値として使われる。",
    "tags": [],
    "title": "レーベンシュタイン距離",
    "uri": "/til/algorithm/levenstein_distance/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Management",
    "content": "水槽を透明な板で区切り、一方にカマス、もう一方に餌を入れる。 カマスは餌を食べようとして板にぶつかってしまうが、ぶつかることを学習すると板にぶつからなくなる。 その後板を取り外してもカマスは餌を食べようとせず、そのまま餓死してしまう。\nしかし水槽に新しくカマスを1匹入れると元いたカマスも餌を食べるようになる。\n参考 カマスの実験 | 今週の朝礼",
    "description": "水槽を透明な板で区切り、一方にカマス、もう一方に餌を入れる。 カマスは餌を食べようとして板にぶつかってしまうが、ぶつかることを学習すると板にぶつからなくなる。 その後板を取り外してもカマスは餌を食べようとせず、そのまま餓死してしまう。",
    "tags": [],
    "title": "カマスの実験",
    "uri": "/til/management/barracuda_experiment/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Security",
    "content": "概要 正規の権限を持つユーザに対して意図しない操作をさせる。 「SNSに勝手に投稿する」「コンテンツを削除・改変する」「パスワードを勝手に変更する」など。\n対応方法 ワンタイムトークンを発行しチェックする。 予測困難な不規則な文字列（トークン）をセットし、処理の開始前にセッション変数とトークンを検証する。\nあわせてCookieにSameSite属性を設定する。 主要ブラウザは2020年以降SameSite=Laxを既定としており、これだけでも外部サイトからのクロスサイトリクエストの多くが送信されなくなる。 ただし既定に頼らず明示的に指定するほうが確実である。\n参考 クロスサイトリクエストフォージェリ - Wikipedia",
    "description": "概要 正規の権限を持つユーザに対して意図しない操作をさせる。 「SNSに勝手に投稿する」「コンテンツを削除・改変する」「パスワードを勝手に変更する」など。",
    "tags": [],
    "title": "クロスサイトリクエストフォージェリ（CSRF）",
    "uri": "/til/security/csrf/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Visual Studio",
    "content": "#pragma warning(push) // 今の設定を退避 (必要なら) #pragma warning(disable:4996) #pragma warning(disable:4068) // C4996とC4068は抑制される ... #pragma warning(pop) // 元の設定に戻す VC++2010のTIPSメモ",
    "description": "#pragma warning(push) // 今の設定を退避 (必要なら) #pragma warning(disable:4996) #pragma warning(disable:4068) // C4996とC4068は抑制される ... #pragma warning(pop) // 元の設定に戻す VC++2010のTIPSメモ",
    "tags": [],
    "title": "コンパイル時の警告を抑制する",
    "uri": "/til/visual-studio/suppress_warning/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e iTerm2",
    "content": "下記で有効化できる。\nPreferences \u003e Profiles \u003e Session \u003e Status bar enabled \u003e Configure Status Bar 表示位置は Preferences \u003e Appearance \u003e Status Bar Location で上下が選択できる。\n参考 iTerm2 にステータスバーが付いた - Qiita",
    "description": "下記で有効化できる。\nPreferences \u003e Profiles \u003e Session \u003e Status bar enabled \u003e Configure Status Bar 表示位置は Preferences \u003e Appearance \u003e Status Bar Location で上下が選択できる。\n参考 iTerm2 にステータスバーが付いた - Qiita",
    "tags": [],
    "title": "ステータスバーを表示する",
    "uri": "/til/iterm2/enable_status_bar/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Security",
    "content": "概要 サイトにスクリプトを含むリクエストを送信し、サイトを訪れた第三者に悪意のあるコードを実行させる脆弱性の総称。\n攻撃対象のサイトだけでなく、別サイトへのリダイレクトなど複数サイトを横断させてスクリプトを実行させることもできることからクロスサイトスクリプティング（XSS）とも呼ばれる。\n名前 説明 持続型 攻撃者がスクリプトを含むリクエストを送信してサーバーに保存させる。保存されたスクリプトを組み込んだページを訪れた第三者にスクリプトを実行させる。 反射型 第三者にスクリプトを含むリクエストを送信させる。送信したスクリプトがページ内に差し込まれる脆弱性を利用して、リクエストを送信したページ上でスクリプトを実行させる送信したスクリプトはサーバーに保存されない。 DOMベース 第三者にスクリプトを含むリクエストを送信させ、クライアントサイドスクリプトの脆弱性を利用する。 対応方法 出力時にエスケープして攻撃コードを無効化する。 厳密に値を入力検査する インラインスクリプトにユーザーの入力を展開しない。 Content Security Policy（CSP）を設定する インラインスクリプトの実行を禁止すれば、混入したコードの実行自体を防げる。 エスケープ漏れが起きたときの多層防御として働く。 文字コードを指定する レスポンスヘッダーに適切な文字コードを指定しないと、文字化けを利用してスクリプトを混入させる隙を与えるため。 参考 スクリプトインジェクション入門 - Qiita",
    "description": "概要 サイトにスクリプトを含むリクエストを送信し、サイトを訪れた第三者に悪意のあるコードを実行させる脆弱性の総称。\n攻撃対象のサイトだけでなく、別サイトへのリダイレクトなど複数サイトを横断させてスクリプトを実行させることもできることからクロスサイトスクリプティング（XSS）とも呼ばれる。",
    "tags": [],
    "title": "スクリプトインジェクション / クロスサイトスクリプティング（XSS）",
    "uri": "/til/security/script_injection/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Architecture",
    "content": "既存のシステムを段階的に新規システムに置き換えていく手法のこと。\nストラングラー(Strangler)は直訳すると「絞殺者」。 つる植物（絞め殺しの木）が自身の寄生した木を絞め殺している様子をヒントに、段階的なシステム移行の比喩に使われた。\n参考 ストラングラーパターン：段階的なシステム移行 – VELTRA Engineering – Medium",
    "description": "既存のシステムを段階的に新規システムに置き換えていく手法のこと。\nストラングラー(Strangler)は直訳すると「絞殺者」。 つる植物（絞め殺しの木）が自身の寄生した木を絞め殺している様子をヒントに、段階的なシステム移行の比喩に使われた。",
    "tags": [],
    "title": "ストラングラーパターン",
    "uri": "/til/architecture/strangler_pattern/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Security",
    "content": "概要 第三者のセッションを乗っ取り、不正に操作する。\nリファラによる漏洩 XSSによるセッションIDの入手 セッション固定攻撃によるセッションIDの指定 通信データの盗聴、ウイルスによるID取得 セッション固定攻撃 攻撃対象のユーザに対して任意のセッションIDを強制的に利用させる。\n下記の場合に起きうる。\nログイン前にセッションを有効化 ログイン処理時に外部から与えられたセッションIDを使ってしまうシステム 自身が発行したものでないセッションIDを受け入れてしまう「セッションアダプション」という脆弱性を抱えている また「Cookie Monsterバグ1」を利用し、Cookieに意図的なIDを埋め込んでセッション固定攻撃を仕掛ける方法もある。\n対応方法 セッションIDはCookieだけで受け渡す。URLに含めない。 CookieにSecure属性とHttpOnly属性を設定する。 ログイン後にセッションIDを再発行する。 重要な処理を行う前にパスワードを入力させる。 かつてはリクエスト中のUser-AgentやAccept-Charsetの変化を検知する方法も紹介されていた。 ブラウザの自動更新などの正当な変化で誤検知するため、現在では推奨されない。\n参考 セッション固定攻撃 | 鳩丸ぐろっさり (用語集) ブラウザの不具合を利用してセカンドレベルドメインに対して任意のCookieをセットできる ↩︎",
    "description": "概要 第三者のセッションを乗っ取り、不正に操作する。\nリファラによる漏洩 XSSによるセッションIDの入手 セッション固定攻撃によるセッションIDの指定 通信データの盗聴、ウイルスによるID取得 セッション固定攻撃 攻撃対象のユーザに対して任意のセッションIDを強制的に利用させる。",
    "tags": [],
    "title": "セッションハイジャック",
    "uri": "/til/security/session_hijack/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Management",
    "content": "心理学者のタックマン氏が唱えたチームビルディングの5段階を指す。\n意見の対立を避けている状態では、チームはまとまらず機能しない。 チームビルディングには、混乱期を避けずにいかに早く次のステージに移動するかが重要となる。\n形成期(Form):チーム結成直後で違いをよく知らず、不安・緊張・遠慮がある。 混乱期(Storm):意見・主義・主張のぶつかり合いが起きる。 統一期(Norming):混乱を乗り越えて、共通の理解や行動規範が確立する。 機能期(Performing):チームに結束力と一体感が生まれ、成果が出る。 散会期(Adjourning):期限・状況の変化などの理由でメンバー間の相互関係を終結させる。 仕事ができる人は｢正しい衝突｣が超得意！ | 30代から身につけたいキャリア力実戦講座 | 東洋経済オンライン | 経済ニュースの新基準",
    "description": "心理学者のタックマン氏が唱えたチームビルディングの5段階を指す。\n意見の対立を避けている状態では、チームはまとまらず機能しない。 チームビルディングには、混乱期を避けずにいかに早く次のステージに移動するかが重要となる。",
    "tags": [],
    "title": "タックマンモデル",
    "uri": "/til/management/tuckman_model/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Security",
    "content": "概要 入力ファイル名のセキュリティ検証/無害化が不十分なため、ファイルAPIに対して「親ディレクトリへの横断 (traverse)」を示すような文字がすり抜けて渡されてしまう。 ディレクトリを遡って任意のファイルにアクセスできてしまう。\n対策 リクエストからの値をファイル名などに利用しない。 読み込みを許可するファイルを許可リスト（allowlist）にしておき、チェックする。 ファイル名への使用を禁止する文字列を拒否リスト（denylist）にしておき、チェックする。 言語・WAFの機能を利用する。 PHP → open_basedir 参考 ディレクトリトラバーサル - Wikipedia",
    "description": "概要 入力ファイル名のセキュリティ検証/無害化が不十分なため、ファイルAPIに対して「親ディレクトリへの横断 (traverse)」を示すような文字がすり抜けて渡されてしまう。 ディレクトリを遡って任意のファイルにアクセスできてしまう。",
    "tags": [],
    "title": "ディレクトリトラバーサル",
    "uri": "/til/security/directory_traversal/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Web",
    "content": "Webサイトのパフォーマンスに関する予算（メトリクスの上限値）を定義し、リリース時に遵守することでパフォーマンスを継続的に良い状態に保つ仕組み。\nメトリクスの種類は下記がある。\nMilestone : 読み込みや応答性を表す指標 Largest Contentful Paint (LCP) : 主要なコンテンツが表示されるまでの時間 Interaction to Next Paint (INP) : 操作に対する応答性 Cumulative Layout Shift (CLS) : 表示のずれの大きさ First Contentful Paint (FCP) : 最初の描画までの時間 Quantity : アセットや通信量 JavaScriptのファイルサイズ HTTPリクエスト数 クリティカルレンダリングパスの数 Rules PageSpeed InsightsやLighthouseなどのスコア LCP、INP、CLSの3つはCore Web Vitalsと呼ばれ、現在の中心的な指標である。 INPは2024年3月にFirst Input Delay (FID)を置き換えた。 かつて使われていたTime to InteractiveはLighthouseから削除されている。\nCIにチェック機構を組み込むことで継続的に監視すると良い。\nLighthouse CI siddharthkp/bundlesize: Keep your bundle size in check SpeedCurve: Monitor front-end performance 参考 Google Developers Japan: パフォーマンスバジェットのご紹介 - ウェブパフォーマンスのための予算管理",
    "description": "Webサイトのパフォーマンスに関する予算（メトリクスの上限値）を定義し、リリース時に遵守することでパフォーマンスを継続的に良い状態に保つ仕組み。",
    "tags": [],
    "title": "パフォーマンスバジェット",
    "uri": "/til/web/performance_budget/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Security",
    "content": "概要 悪意のあるコードを含んだファイルをアップロードして任意の処理を実行させる。\n対策 アップロードされたファイルをドキュメントルートの外側に置く。 推測不可能なファイル名で保存する。 参考 ファイルアップロード攻撃 - ぱろっくの日記",
    "description": "概要 悪意のあるコードを含んだファイルをアップロードして任意の処理を実行させる。\n対策 アップロードされたファイルをドキュメントルートの外側に置く。 推測不可能なファイル名で保存する。 参考 ファイルアップロード攻撃 - ぱろっくの日記",
    "tags": [],
    "title": "ファイルアップロード攻撃",
    "uri": "/til/security/file_upload_attack/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Cygwin",
    "content": "Cygwin自体は現存するが、同じ用途は現在WSL2で満たせることが多い。\nchereを使うと簡単。Cygwinのパッケージインストーラーから探して入れておく。 実行時は管理者権限でCygwinを起動しておく必要がある。\nchere -ian -e \"Open in Cygwin\" -t mintty -s zsh 【chere】右クリックから現在のフォルダをCygwinのBashで開く(ショートカットキー対応)",
    "description": "Cygwin自体は現存するが、同じ用途は現在WSL2で満たせることが多い。\nchereを使うと簡単。Cygwinのパッケージインストーラーから探して入れておく。 実行時は管理者権限でCygwinを起動しておく必要がある。",
    "tags": [],
    "title": "フォルダーの右クリックからCygwinを開くメニューを追加する",
    "uri": "/til/cygwin/open_from_context_menu/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Git",
    "content": "symbolic-refで別名がつけられる。\nたとえば下記によりSubversionで使われていたtrunkを残しつつ、masterの名前で使えるようにする。\n$ git symbolic-ref master trunk",
    "description": "symbolic-refで別名がつけられる。\nたとえば下記によりSubversionで使われていたtrunkを残しつつ、masterの名前で使えるようにする。",
    "tags": [],
    "title": "ブランチ名に別名をつける",
    "uri": "/til/git/symbolic-ref/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Visual Studio",
    "content": "ライブラリ側のプロパティを下記のとおり変更する。\n[プロパティ]-\u003e[C/C++]-\u003e[デバッグ情報の生成]の項目をZiからZ7(C7互換)に変更",
    "description": "ライブラリ側のプロパティを下記のとおり変更する。\n[プロパティ]-\u003e[C/C++]-\u003e[デバッグ情報の生成]の項目をZiからZ7(C7互換)に変更",
    "tags": [],
    "title": "ライブラリリンク時に'pdbファイルがない'警告を抑制する",
    "uri": "/til/visual-studio/suppress_pdf_missing_warning/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Mac OS",
    "content": "全画面 Command + Shift + 3\n指定範囲内 Command + Shift + 4\n影付きウィンドウ Command + Shift + 4 + Space\n影無しウィンドウ Command + Shift + 4 + Space + Option\nスクリーンショットツールバー Command + Shift + 5\n範囲指定や画面収録をまとめて扱える。保存先やタイマーもここで設定できる。\n参考 知らなかった！Macでウィンドウを指定してキャプチャできるショートカットが超便利だった！ | 男子ハック",
    "description": "全画面 Command + Shift + 3\n指定範囲内 Command + Shift + 4\n影付きウィンドウ Command + Shift + 4 + Space\n影無しウィンドウ Command + Shift + 4 + Space + Option",
    "tags": [],
    "title": "画面キャプチャを撮る",
    "uri": "/til/mac/capture/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Homebrew",
    "content": "PHPやnodeなどの言語を切り替えて使う際、opensslやicu4cなど動的にリンクされるモジュールのバージョンが変わってしまい動かなくなることがある。\nphp -vでdyld: Library not loaded: /usr/local/opt/openssl/lib/libcrypto.1.0.0.dylib - Qiita phpenvでPHPのバージョンを切り替えたら、brewのicu4cのバージョン違いで怒られた話。 | あそびば32 HomebrewのCellarにあれば古いバージョンに切り替えることで動く状態に戻せるが、古いバージョンが削除されて手元になく、Homebrewで新規インストールができないこともある。 このようなときは過去バージョンを指定してインストールできる。\n$ brew reinstall https://raw.githubusercontent.com/Homebrew/homebrew-core/{ハッシュ番号をここに書く}/Formula/{対象モジュール}.rb\nicu4cの64.2をインストールする場合は下記のようになる。\n対象モジュールのFormulaを確認する。Homebrew Formulaeの\"Formula code\"から見つけることができる。 icu4cの場合はFormula/icu4c.rb 該当ファイルのgit logを確認し、インストールしたいバージョンのハッシュ番号を確認する。 git log master -- Formula/icu4c.rbで確認可能 64.2の場合は’a806a621ed3722fb580a58000fb274a2f2d86a6d’となる。 上記情報を当てはめ、再インストールコマンドを実行する $ brew reinstall https://raw.githubusercontent.com/Homebrew/homebrew-core/{a806a621ed3722fb580a58000fb274a2f2d86a6d}/Formula/icu4c.rb",
    "description": "PHPやnodeなどの言語を切り替えて使う際、opensslやicu4cなど動的にリンクされるモジュールのバージョンが変わってしまい動かなくなることがある。",
    "tags": [],
    "title": "古いバージョンのモジュールをインストールする",
    "uri": "/til/homebrew/install_old_version/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Git",
    "content": "Gitlabなどの場合、証明書の検証で失敗することがある。\n検証そのものを無効化する方法は広く知られているが、--globalで設定すると全リポジトリの通信で検証が無効になるため避けたい。 CA証明書を持っているなら、対象ホストにだけ設定するのがよい。\n$ git config --global http.https://gitlab.example.com/.sslCAInfo /path/to/ca.crt どうしても検証を切る場合も、対象のリポジトリの中だけにとどめる。\n$ git config --local http.sslverify false",
    "description": "Gitlabなどの場合、証明書の検証で失敗することがある。\n検証そのものを無効化する方法は広く知られているが、--globalで設定すると全リポジトリの通信で検証が無効になるため避けたい。 CA証明書を持っているなら、対象ホストにだけ設定するのがよい。",
    "tags": [],
    "title": "自己証明書でホストされたgitリポジトリにアクセスする",
    "uri": "/til/git/ignore_ssl_verify/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e Jenkins",
    "content": "JENKINS_ARGSとして--sessionTimeoutでログアウトまでの時間を分で与える。\n設定ファイルの位置はパッケージのバージョンによって異なる。 /etc/sysconfig/jenkinsがある場合はそこに書く。\n$ sudo vim /etc/sysconfig/jenkins JENKINS_ARGS=\"--sessionTimeout=1440\" $ sudo service jenkins restart 新しいパッケージにはこのファイルがない。その場合はsystemdのdrop-inで指定する。\n$ sudo systemctl edit jenkins $ sudo systemctl restart jenkins Amazon Linux/CentOSのJenkinsでセッションタイムアウトを24時間にする",
    "description": "JENKINS_ARGSとして--sessionTimeoutでログアウトまでの時間を分で与える。\n設定ファイルの位置はパッケージのバージョンによって異なる。 /etc/sysconfig/jenkinsがある場合はそこに書く。",
    "tags": [],
    "title": "自動ログアウトまでの時間を長くする",
    "uri": "/til/jenkins/change_session_timeout/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e CircleCI",
    "content": "Orbやコマンドを使うと、実際に実行される設定が読み取りにくくなる。 circleci config processを使うと、それらを展開した結果を確認できる。\n$ circleci config process .circleci/config.yml Orbの解決結果がコメントで示され、展開後の設定が出力される。\n# Orb 'sue445/ruby-orbs@1.4.3' resolved to 'sue445/ruby-orbs@1.4.3' version: 2 jobs: rails_minitest: working_directory: ~/workspace docker: - image: circleci/ruby:2.6.1-node-browsers steps: - checkout - run: command: | bundle install --jobs=4 --retry=3 --path=vendor/bundle name: bundle install 末尾には元の設定ファイルがコメントとして付く。\nかつては「2.1形式はローカル実行できないため2.0形式に変換する」という使い方をしていた。 現在は2.0形式そのものが非推奨であり、この用途では使わない。 設定の中身を確認したいときに使うコマンドである。\n参考 Using the CircleCI Local CLI - CircleCI",
    "description": "Orbやコマンドを使うと、実際に実行される設定が読み取りにくくなる。 circleci config processを使うと、それらを展開した結果を確認できる。\n$ circleci config process .circleci/config.yml Orbの解決結果がコメントで示され、展開後の設定が出力される。",
    "tags": [],
    "title": "設定ファイルのOrbやコマンドを展開して確認する",
    "uri": "/til/circleci/convert_20_to_21/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e CircleCI",
    "content": "circleci config packコマンドで結合できる。 ファイルの配置は結合後のYAMLのキー・設定値と対応させる必要がある。\n$ tree . └── your-orb-source ├── @orb.yml ├── commands │ └── foo.yml └── jobs └── bar.yml 上記のファイル構造は下記のように結合される。\n$ circleci config pack your-orb-source # contents of @orb.yml appear here commands: foo: # contents of foo.yml appear here jobs: bar: # contents of bar.yml appear here 参考 Using the CircleCI Local CLI - CircleCI",
    "description": "circleci config packコマンドで結合できる。 ファイルの配置は結合後のYAMLのキー・設定値と対応させる必要がある。\n$ tree . └── your-orb-source ├── @orb.yml ├── commands │ └── foo.yml └── jobs └── bar.yml 上記のファイル構造は下記のように結合される。",
    "tags": [],
    "title": "設定ファイルを分割する",
    "uri": "/til/circleci/separate_config/index.html"
  },
  {
    "breadcrumb": "TIL : Today I learned \u003e CircleCI",
    "content": "同じブランチに対してトリガーされ、実行待ちとなっているビルドを検知して自動的にキャンセルできる。\nプロジェクト設定のAdvancedにあるAuto-cancel redundant workflowsを有効化する。\nかつてはこの機能を使うのにEnable pipelinesの有効化も必要だった。 現在pipelinesは既定で有効であり、その項目は存在しない。\n参考 CircleCI の Auto-cancel redundant builds が Workflows にも対応した - kakakakakku blog",
    "description": "同じブランチに対してトリガーされ、実行待ちとなっているビルドを検知して自動的にキャンセルできる。\nプロジェクト設定のAdvancedにあるAuto-cancel redundant workflowsを有効化する。",
    "tags": [],
    "title": "連続してトリガーされたビルドを自動キャンセルする",
    "uri": "/til/circleci/auto-cancel_redundant_builds/index.html"
  }
]
