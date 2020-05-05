+++
title = "コンパイル時の警告を抑制する"
+++

```cpp
#pragma warning(push) // 今の設定を退避 (必要なら)
#pragma warning(disable:4996)
#pragma warning(disable:4068)
// C4996とC4068は抑制される

...

#pragma warning(pop) // 元の設定に戻す
```

* [VC++2010のTIPSメモ](http://d.hatena.ne.jp/licheng/20130822/p1)
