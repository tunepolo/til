+++
title = "2.1形式のファイルを2.0形式に変換する"
+++

Workflowが使われていたり、Orbsが使われていると実行される設定が分かりにくくなる。
また2.1形式の設定ファイルはローカル実行もできない。

下記のやり方でOrbやJobs/Commandを展開し、2.1形式のファイルを2.0形式に変換した結果を入手することができる。

```
$ circleci config process .circleci/config.yml
# Orb 'sue445/ruby-orbs@1.4.3' resolved to 'sue445/ruby-orbs@1.4.3'
# Orb 'yasuhiroki/reviewdog@0.0.3' resolved to 'yasuhiroki/reviewdog@0.0.3'
version: 2
jobs:
  rails_minitest:
    working_directory: ~/workspace
    docker:
    - image: circleci/ruby:2.6.1-node-browsers
      environment:
        RAILS_ENV: test
    steps:
    - checkout
    - restore_cache:
        keys:
        - v1-bundle-{{ .Environment.CIRCLE_JOB }}-{{ checksum "Gemfile.lock" }}-{{
          .Branch }}
        - v1-bundle-{{ .Environment.CIRCLE_JOB }}-{{ checksum "Gemfile.lock" }}
        - v1-bundle-{{ .Environment.CIRCLE_JOB }}
        - v1-bundle
    - run:
        command: |
          set -xe
          bundle_install_args="--jobs=4 --retry=3 --path=vendor/bundle --gemfile=Gemfile"

          bundle_install_args="$bundle_install_args --clean"

          bundle_extra_args=""
          if [ -n "$bundle_extra_args" ]; then
            bundle_install_args="$bundle_install_args $bundle_extra_args"
          fi

          with_gemfile_lock="false"
          with_gemfile_lock="true"

          if [ $with_gemfile_lock == "true" ]; then
            bundle install $bundle_install_args
          else
            run_bundle_install="true"

            if [ $run_bundle_install == "true" ]; then
              set +e
              bundle install $bundle_install_args
              ret=$?
              set -e
            else
              ret=1
            fi

            # Retry with `bundle update` if `bundle install` is failed
            if [ $ret -ne 0 ]; then
              # NOTE: `.bundle/config` is not created after `bundle install` is failed
              mkdir -p .bundle/
              echo '---' > .bundle/config
              echo 'BUNDLE_PATH: "vendor/bundle"' >> .bundle/config
              bundle update --jobs=4
            fi
          fi
        name: bundle install
    - run:
        command: |
          set -xe

          if [ "Gemfile" == "Gemfile" ]; then
            gem install restore_bundled_with --no-document
            restore-bundled-with
          fi
        name: restore-bundled-with
    - save_cache:
        key: v1-bundle-{{ .Environment.CIRCLE_JOB }}-{{ checksum "Gemfile.lock" }}-{{
          .Branch }}
        paths:
        - vendor/bundle
    - run:
        name: Database setup
        command: |
          bundle exec rails db:create
          bundle exec rails db:migrate
    - run:
        name: Setup Code Climate test-reporter
        command: |
          curl -L https://codeclimate.com/downloads/test-reporter/test-reporter-latest-linux-amd64 > ./cc-test-reporter
          chmod +x ./cc-test-reporter
    - run:
        name: Rails Minitest
        command: |
          ./cc-test-reporter before-build
          bundle exec rake test
          ./cc-test-reporter after-build --coverage-input-type simplecov --exit-code $?
  reviewdog/reviewdog:
    docker:
    - image: cagedata/rubocop
    steps:
    - checkout
    - run:
        name: Rubocop update
        command: gem update rubocop
    - run:
        command: rubocop --out lint_result.txt || true
    - store_artifacts:
        path: lint_result.txt
    - run:
        command: |
          test -f /usr/local/bin/reviewdog \
            || \
          wget https://github.com/haya14busa/reviewdog/releases/download/0.9.11/reviewdog_linux_amd64 -O /usr/local/bin/reviewdog \
            && \
          chmod +x /usr/local/bin/reviewdog
    - run:
        command: |
          test ${CI_PULL_REQUEST} || exit 0
          cat lint_result.txt | reviewdog -f=rubocop -reporter=github-pr-review
workflows:
  continuous-integration:
    jobs:
    - rails_minitest
    - reviewdog/reviewdog
  version: 2

# Original config.yml file:
# version: 2.1
#
# orbs:
#   ruby-orbs: sue445/ruby-orbs@1.4.3
#   reviewdog: yasuhiroki/reviewdog@0.0.3
#
# executors:
#   default:
#     working_directory: ~/workspace
#     docker:
#       - image: circleci/ruby:2.6.1-node-browsers
#         environment:
#           RAILS_ENV: test
#
# commands:
#   lint:
#     parameters:
#       lint_result_file_path:
#         description: Lint result file path
#         type: string
#     steps:
#       - checkout
#       - run:
#           name: Rubocop update
#           command: gem update rubocop
#       - run: rubocop --out <<parameters.lint_result_file_path>> || true
#       - store_artifacts:
#           path: <<parameters.lint_result_file_path>>
#
# jobs:
#   rails_minitest:
#     executor:
#       name: default
#     steps:
#       - checkout
#       - ruby-orbs/bundle-install:
#           bundle_clean: true
#           bundle_extra_args: ''
#           bundle_gemfile: Gemfile
#           bundle_jobs: 4
#           bundle_path: vendor/bundle
#           bundle_retry: 3
#           cache_key_prefix: v1-bundle
#           restore_bundled_with: true
#       # \u521D\u671F\u8A2D\u5B9A
#       - run:
#           name: Database setup
#           command: |
#             bundle exec rails db:create
#             bundle exec rails db:migrate
#       # Download test-reporter
#       - run:
#           name: Setup Code Climate test-reporter
#           command: |
#             curl -L https://codeclimate.com/downloads/test-reporter/test-reporter-latest-linux-amd64 > ./cc-test-reporter
#             chmod +x ./cc-test-reporter
#       - run:
#           name: Rails Minitest
#           command: |
#             ./cc-test-reporter before-build
#             bundle exec rake test
#             ./cc-test-reporter after-build --coverage-input-type simplecov --exit-code $?
#
# workflows:
#   continuous-integration:
#     jobs:
#       - rails_minitest
#       - reviewdog/reviewdog:
#           linter_image: cagedata/rubocop
#           reviewdog_format_option: '-f=rubocop'
#           run_linter_steps:
#             - lint:
#                 lint_result_file_path: lint_result.txt
#           lint_result_file_path: lint_result.txt
```
