+++
title = "PHPのヘンテコ仕様"
+++

## 文字列型とキャスト

`echo`で出力する場合、文字列以外の変数・定数は文字列にキャストされて出力される。
下記の例は15.0ではなく、15と表示される。

```php
echo 15.0;              // 15と出力される
printf('%.1f', 15.0);   // 15.0と出力される
```

## falseと判断される論理型

PHPは下記をfalseと判断する。

* false (論理型)
* 0 (整数型)
* 0.0 (浮動小数点型)
* 空の文字列 ("")、__文字列のゼロ ("0")__
* 要素の数が0の配列
* null
* __空のタグから作成されたSimpleXMLオブジェクト__

## 「数値らしき文字列」を整数型・浮動小数点型にキャストする。

下記のスクリプトは`equal`を出力する。
`0.0`が浮動小数点型に、`0`が整数型にキャストされる。
両者が比較される際に浮動小数点型で統一され、if文の評価がtrueとなる。

```php
if ('0.0' == '0')
{
    echo 'equal';
}
```

## 数字を文字列と連結する際にスペースがないとパースエラーとなる。

```php
$str1 = "He's " . 10 . " years old.";   // "He's 10 years old."
$str2 = "She's " . 11. " years old.";   // "11."が浮動小数点型と判断され、パースエラーが発生する。
```

## 三項演算子が入れ子にできる。

三項演算子は左結合であるため、下記の式は`(true ? 1 : false) ? 2 : 0`と評価され、2が出力される。

```php
echo true ? 1 : false ? 2 : 0;  // 2が出力される。
```

## PHPの配列はすべて連想配列である。

他言語である配列とハッシュ（連想配列）の区別がない。
この特性から、PHPの連想配列は順序が保証されている。

## 別ファイルに記述されたPHPファイルを読み込む

`require`と`include`がある。前者はファイルがなければ`Fatal Error`を返す。後者は`Warning`となる。
どちらも読んだ回数だけ実行されるため、ライブラリ読み込みのように1度きり読み込む際は`require_once`か`include_once`を使う。

## 宣言していないプロパティにアクセスできる。

プロパティ名のtypoをしたらハマりそう。

```php
class Hoge
{
    // ...
}

$foo = new Hoge();
$foo->bar = "hogehoge"; // barプロパティが作成される
```
