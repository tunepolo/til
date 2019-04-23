# ブランチ名に別名をつける

`symbolic-ref`で別名がつけられる。

たとえば下記によりSubversionで使われていたtrunkを残しつつ、masterの名前で使えるようにする。

```
$ git symbolic-ref master trunk
```
