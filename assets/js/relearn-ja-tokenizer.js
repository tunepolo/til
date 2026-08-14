// relearn の lunr アダプタは lunr.multiLanguage() で言語を設定するが、
// これはパイプライン（ステマー・ストップワード）しか差し替えず
// トークナイザは既定の空白区切りのままになる。
// 日本語は空白で区切らないため、索引の語が文まるごと
// (例: "巨大ドメインに参加している") になり、単語で検索できない。
//
// lunr.Builder は生成時に lunr.tokenizer を取り込み、
// アダプタの search() も lunr.tokenizer(term) でクエリを分割する。
// よって索引構築前にここを TinySegmenter ベースの
// lunr.ja.tokenizer に差し替えると、索引側と検索側が同時に直る。
//
// 本スクリプトは custom-footer.html から defer で読み込む。
// defer スクリプトは文書順に実行されるため lunr.ja.min.js の後、
// かつ検索インデックス (async) の onload による索引構築の前に走る。
(function () {
  if (window.lunr && window.lunr.ja && window.lunr.ja.tokenizer) {
    window.lunr.tokenizer = window.lunr.ja.tokenizer;
  }
})();
