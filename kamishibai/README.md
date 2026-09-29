# 紙芝居（当日の台本）

**動くもの**: https://kou-uni.github.io/workshop-of-stackchan-at-cryptobar/kamishibai/

進行役が1枚ずつ送る台本です。50画面。スワイプ／← →／スペースで送れます。左下の顔で解説が開きます。

## 直し方（GitHub の画面だけで完結）

1. [`text.js`](text.js) を開いて ✏️ で直す（50画面 = `steps` の1要素。`tag` が見出し、`html` が本文、`talk` が解説）
2. commit する → 1〜2分で GitHub Actions が `index.html` を組み立て直し、上の URL に反映
3. 直したい場所・気づいたことは **Issue** に。1つの Issue に1つのこと

本文の部品（`K.head` `K.cards` `K.nums` `K.quote` `K.todo` …）は道具 [kou-uni/kamishibai](https://github.com/kou-uni/kamishibai) の README に一覧があります。

## 手元で組み立てるとき

```bash
./kamishibai/build.sh     # node が要る。index.html ができる
open kamishibai/index.html
```

## 決めごと

- **直すのは `text.js` と `assets/` だけ。** `index.html` は生成物（Actions が上書きする）
- 画像は `assets/` に置き、`text.js` から相対パスで参照する
- 道具（エンジン）を直したくなったら kou-uni/kamishibai 側へ
