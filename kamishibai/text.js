/* 当日の台本 — 進行役が1枚ずつ送る。
   ★参加者には配らない（進行役の手元用）。
   直し方: このファイルを直して push → GitHub Actions が index.html を組み直す（kamishibai/README.md）
   数字はすべて実測（2026-09、K151・Mac）。出典は stack-chan-DJ の docs/ と配布物10枚。 */

const CONTENT = {
  brand: { name: 'ｽﾀｯｸﾁｬﾝ交流会', sub: 'Crypto Cafe & Bar' },
  guide: { still: '@@assets/stackchan.png@@', face: '@@assets/stackchan-face.png@@' },
  sound: 'chip',   // ぴこぴこ音。ｽﾀｯｸﾁｬﾝに寄せている
  chapters: ['序', 'A', 'B', 'お披露目', 'C', 'D', '交流', '締'],
  labels: { next: 'つぎへ', prev: 'もどる', start: 'はじめる', end: 'いってらっしゃい' },

  steps: [
    /* ───────── 表紙 ───────── */
    { ch: 0, tag: 'ｽﾀｯｸﾁｬﾝ交流会',
      cover: { num: '9/29', title: 'ｽﾀｯｸﾁｬﾝ交流会',
               sub: 'Crypto Cafe & Bar（恵比寿）／ 19:00–22:00' },
      onShow(){ if(!window.__tapOpen){ window.__tapOpen = 1; document.addEventListener('click', e => { if(e.target.closest('a')) return; const c = e.target.closest('.card,.tdo,.goal'); if(c) c.classList.toggle('open'); }); } },
      talk: `<b>ｽﾀｯｸﾁｬﾝ交流会の台本です。</b>進行役が手元で1枚ずつ送ります。<br>
             左上の章バーが序〜締、右上がいま何枚目か。左下の顔を押すと、その画面で<b>実際に言うこと・やること</b>が出ます。` },

    { ch: 0, tag: 'アジェンダ',
      talk: `<b>ここは全体の流れです。</b>DJ が鳴るのは A だけ。声の会話のデモは、今日は進行役からはやりません（間に合わなかったので正直に）。`,
      html: `<style>.cards{grid-template-columns:1fr !important}.card .d,.tdo .td,.goal .gd{display:none}.card.open .d,.tdo.open .td,.goal.open .gd{display:block}.card,.tdo,.goal{cursor:pointer}.card .v::after,.tdo .tt::after,.goal .gt::after{content:" ▾";color:var(--ink3);font-size:.75em}.card.open .v::after,.tdo.open .tt::after,.goal.open .gt::after{content:" ▴"}</style>` +
            K.head('触って、開けて、<em>語って、作る。</em>') +
            K.todo([
              { title: 'A 掴み', body: 'まず、さわる時間。1人ずつ手のひらに乗せて、なでてもらいます。曲を流すと踊ります' },
              { title: 'B 仕組み', body: '構成やファームなど、簡単なことを知る・振り返る。①実機は入口と出口だけ ②ファーム5つの比較と焼き方 ③作り方 ④DJ 機材との対応' },
              { title: '♥ 持ってきたスタックチャンのお披露目会！', body: '受付で並べてもらったスタックチャンを、持ち主が2分で。名前 → 推しポイント（実演30秒）→ 一言。X で #スタックチャンザギャザリング も' },
              { title: 'C 失敗カタログ', body: '失敗体験を、楽しく語ろう。サーボ音で踊り続けた／監視で壊した／LED で電源が落ちた、の3つ。そのあとはみんなの「うちではこう壊れた」' },
              { title: 'D 動かす', body: 'スターターと始め方の地図を渡します。自分のエージェントに読ませて、それぞれのペースで' },
              { title: '交流', body: 'みんなで交流・意見交換・作る。みんな自由に。エージェントも一緒に、ロボットもね' },
            ]) +
            K.tiny('配布物 10 枚は <b>kou-uni.github.io/workshop-of-stackchan-at-cryptobar</b>。スマホでそのまま開けます') },

    /* ───────── 序 ───────── */
    { ch: 0, tag: '全体の構成',
      talk: `<b>アジェンダの次に、この1枚。</b>左が入口、真ん中が MacBook 1台、右が出口。箱を押すと1行ずつ説明が出ます。詳しい話は B で。`,
      html: K.head('信号は左から右へ。<em>考えているのは真ん中の1台。</em>') +
            `<div class="panel"><svg viewBox="0 0 760 470" role="img" aria-label="全体の構成：入口の機材と実機からの信号が MacBook の gateway と console に集まり、頭脳（音声認識・言語モデル・音声合成）を経て、実機の顔・首・声・LED と背景に戻る" style="width:100%;height:auto;display:block;font-family:inherit;font-weight:700">
  <defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#4E7590"/></marker></defs>
  <rect x="12" y="34" width="176" height="150" rx="18" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="100" y="60" text-anchor="middle" font-size="14" fill="#1A73C4">入口（人が触るもの）</text>
  <text x="100" y="90" text-anchor="middle" font-size="13" fill="#173A54">DJ 機材 DDJ-FLX2</text>
  <text x="100" y="108" text-anchor="middle" font-size="11" fill="#4E7590">つまみ・パッド・フェーダー</text>
  <text x="100" y="138" text-anchor="middle" font-size="13" fill="#173A54">曲の音</text>
  <text x="100" y="156" text-anchor="middle" font-size="11" fill="#4E7590">スピーカーから鳴る</text>
  <rect x="12" y="300" width="176" height="150" rx="18" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="100" y="326" text-anchor="middle" font-size="14" fill="#1A73C4">ｽﾀｯｸﾁｬﾝの入口</text>
  <text x="100" y="356" text-anchor="middle" font-size="13" fill="#173A54">マイク</text>
  <text x="100" y="384" text-anchor="middle" font-size="13" fill="#173A54">頭のタッチ（3ゾーン）</text>
  <text x="100" y="412" text-anchor="middle" font-size="13" fill="#173A54">NFC カード</text>
  <text x="100" y="434" text-anchor="middle" font-size="11" fill="#4E7590">M5Stack CoreS3 / Wi-Fi</text>
  <rect x="236" y="22" width="300" height="428" rx="24" fill="#E4F6FC" stroke="#2E9BE0" stroke-width="3"/>
  <text x="386" y="50" text-anchor="middle" font-size="15" fill="#1A73C4">MacBook 1台（この机の上）</text>
  <rect x="256" y="66" width="260" height="70" rx="14" fill="#fff"/>
  <text x="386" y="92" text-anchor="middle" font-size="14" fill="#173A54">gateway（stackchan-mcp）</text>
  <text x="386" y="112" text-anchor="middle" font-size="11" fill="#4E7590">実機との唯一の窓口。道具 49 個を Wi-Fi 越しに叩く</text>
  <rect x="256" y="152" width="260" height="84" rx="14" fill="#fff"/>
  <text x="386" y="178" text-anchor="middle" font-size="14" fill="#173A54">console（演技）</text>
  <text x="386" y="198" text-anchor="middle" font-size="11" fill="#4E7590">「いまどうあるべきか」を1か所に持ち、</text>
  <text x="386" y="214" text-anchor="middle" font-size="11" fill="#4E7590">首・表情・LED・声・受付を差分で反映</text>
  <rect x="256" y="252" width="260" height="176" rx="14" fill="#fff"/>
  <text x="386" y="278" text-anchor="middle" font-size="14" fill="#173A54">頭脳（全部ローカル）</text>
  <text x="386" y="304" text-anchor="middle" font-size="12" fill="#173A54">音声認識 faster-whisper</text>
  <text x="386" y="322" text-anchor="middle" font-size="11" fill="#4E7590">声 → 文字</text>
  <text x="386" y="348" text-anchor="middle" font-size="12" fill="#173A54">言語モデル Ollama</text>
  <text x="386" y="366" text-anchor="middle" font-size="11" fill="#4E7590">会話 gemma3:4b ／ 質疑 bot qwen2.5:14b</text>
  <text x="386" y="392" text-anchor="middle" font-size="12" fill="#173A54">音声合成 VOICEVOX</text>
  <text x="386" y="410" text-anchor="middle" font-size="11" fill="#4E7590">文字 → 声</text>
  <rect x="584" y="34" width="164" height="190" rx="18" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="666" y="60" text-anchor="middle" font-size="14" fill="#1A73C4">ｽﾀｯｸﾁｬﾝの出口</text>
  <text x="666" y="92" text-anchor="middle" font-size="13" fill="#173A54">顔（表情 14 枚）</text>
  <text x="666" y="120" text-anchor="middle" font-size="13" fill="#173A54">首（2 軸）</text>
  <text x="666" y="148" text-anchor="middle" font-size="13" fill="#173A54">声</text>
  <text x="666" y="176" text-anchor="middle" font-size="13" fill="#173A54">LED（本体12＋テープ30）</text>
  <text x="666" y="204" text-anchor="middle" font-size="11" fill="#4E7590">受け取るのは角度と色の列だけ</text>
  <rect x="584" y="300" width="164" height="150" rx="18" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="666" y="326" text-anchor="middle" font-size="14" fill="#1A73C4">背景（iPad）</text>
  <text x="666" y="356" text-anchor="middle" font-size="13" fill="#173A54">同じ状態を大きく</text>
  <text x="666" y="376" text-anchor="middle" font-size="11" fill="#4E7590">LED の模様・スポット・花火</text>
  <text x="666" y="408" text-anchor="middle" font-size="13" fill="#173A54">質疑 bot（スマホ）</text>
  <text x="666" y="428" text-anchor="middle" font-size="11" fill="#4E7590">今日のことを文字で答える</text>
  <line x1="188" y1="90" x2="256" y2="176" stroke="#4E7590" stroke-width="3" marker-end="url(#ar)"/>
  <text x="196" y="122" font-size="11" fill="#4E7590">USB MIDI</text>
  <line x1="188" y1="140" x2="256" y2="190" stroke="#4E7590" stroke-width="3" stroke-dasharray="6 5" marker-end="url(#ar)"/>
  <text x="196" y="172" font-size="11" fill="#4E7590">拍を推定</text>
  <line x1="188" y1="370" x2="256" y2="110" stroke="#4E7590" stroke-width="3" marker-end="url(#ar)"/>
  <text x="192" y="250" font-size="11" fill="#4E7590">Wi-Fi</text>
  <line x1="516" y1="100" x2="584" y2="120" stroke="#4E7590" stroke-width="3" marker-end="url(#ar)"/>
  <text x="522" y="90" font-size="11" fill="#4E7590">Wi-Fi</text>
  <line x1="516" y1="200" x2="584" y2="350" stroke="#4E7590" stroke-width="3" marker-end="url(#ar)"/>
  <text x="522" y="290" font-size="11" fill="#4E7590">同じ LAN</text>
  <line x1="386" y1="136" x2="386" y2="152" stroke="#4E7590" stroke-width="3" marker-end="url(#ar)" marker-start="url(#ar)"/>
  <line x1="386" y1="236" x2="386" y2="252" stroke="#4E7590" stroke-width="3" marker-end="url(#ar)" marker-start="url(#ar)"/>
  <text x="380" y="464" text-anchor="middle" font-size="12" fill="#1A73C4">外に出る通信はありません。Wi-Fi も MacBook が出しています</text>
</svg></div>` +
            K.cards([
              { k: '実機', v: 'ｽﾀｯｸﾁｬﾝ<br>M5Stack CoreS3<br>ESP32-S3', d: '入口（マイク・頭の3ゾーンタッチ・NFC）と出口（顔・首2軸・声・LED）。<b>考える部分は入っていません。</b>Wi-Fi で MacBook と WebSocket 1本で話します' },
              { k: '窓口', v: 'gateway<br>stackchan-mcp', d: '実機との唯一の窓口。ファームが持つ<b>49個の道具</b>（首を向ける・表情・LED・撮る・I2C…）を名前で呼べる。聞き取り（faster-whisper）もここ' },
              { k: '演技', v: 'console<br>自作 Python<br>約9,300行', d: 'DJ 機材・拍・タッチ・NFC を受けて「いまどうあるべきか」を1か所に持ち、首・表情・LED・声を差分で送る。受付（名前を呼ぶ）もここ' },
              { k: '頭脳', v: 'Ollama<br>VOICEVOX<br>faster-whisper', d: '声を文字に、文字を考えて、文字を声に。<b>全部 MacBook の中。</b>会話は gemma3:4b（速さ優先）、質疑 bot は qwen2.5:14b（正確さ優先）' },
              { k: '入口の機材', v: 'Pioneer DDJ-FLX2<br>USB MIDI', d: 'ドライバ不要。流れているのは番号と 0〜127 の値だけ。つまみ→首、パッド→表情と LED、擦り→光、フェーダー→バースト' },
              { k: '背景', v: 'iPad の画面<br>質疑 bot', d: 'ブラウザ1枚で会場を描く（奥から手前へ7層）。実機のテープに送る30個の配列をそのまま受け取る。質疑 bot はスマホから「今日のこと」を文字で' },
            ]) +
            K.tiny('外に出る通信はありません。Wi-Fi も MacBook 自身が出しています') },

    { ch: 0, tag: '今日のゴールと、みんなへ',
      talk: `<b>アジェンダのあとに、みんなに向けて言います。</b>「帰り道にこう思っていたら、今日は大成功です」。そのあと、初めての人と、持ってきた人に一言ずつ。`,
      html: K.head('帰り道に、<em>こう思っていたら大成功。</em>') +
            K.goals([
              { title: '私もやってみたい',            body: '難しさより、始め方を見ます。K151 一択・6手順・今日は手順1まで。所要は実測で 2時間20分', color: 'var(--blue)' },
              { title: 'あー、聞いておいてよかった',  body: '知らなかったら損したこと。出荷時は声もカメラ画像もクラウドへ／焼いても消えない領域がある／同梱 LED はそのままだと電源が落ちる', color: 'var(--grass)' },
              { title: '家に帰ったらこれをしよう',    body: '今夜できる1手。リポジトリを自分のエージェントに読ませて、出荷時のまま喋らせる（30分）', color: 'var(--ora)' },
              { title: 'またこのイベントに来たい',    body: '他では聞けない話だけ。自分で測った数字と、みんなが持ってきたスタックチャンの話', color: 'var(--pur)' },
              { title: 'こんな人たちと会えてよかった・こんなの見つけてよかった', body: '持ってきたスタックチャンと持ち主。配布物10枚・スターター・失敗カタログ・原価と日数。全部そのまま持ち帰れます', color: 'var(--red)' },
            ]) +
            K.cards([
              { k: 'まだ分からない人へ', v: 'さわってみましょう。分からないところは、その場で聞いてください', d: '分からないまま来て、分からないまま触って大丈夫。用語の共有は体験のあとで。「僕も9月8日に箱を開けるまで、全部分かりませんでした」' },
              { k: '持ってきた人へ', v: '大好きなスタックチャンの推しポイント、ぜひ聞かせてください', d: '受付で並べてもらい、仕組みのあとのお披露目会（1人2分）で。うまくいっていないところも、そのまま。堅苦しくしない' },
            ]) },

    { ch: 0, tag: 'お披露目会の受付（開場 18:30〜・受付の横）',
      talk: `<b>開場のときにやることです。</b>受付の横に「お披露目スペース」を作っておきます（机1つ・電源タップ1本・名札カード）。<br>
             スタックチャンを持ってきた人には、<b>受付でそのまま並べてもらいます</b>。仕組みのあとの「お披露目会」の受付を兼ねます。`,
      html: K.head('持ってきたスタックチャンは、<em>まず並べてもらう。</em>') +
            K.cards([
              { k: '用意するもの', v: '机1つ・電源タップ・名札カード10枚・ペン', d: '名札カードは3行：<b>スタックチャンの名前／中身（ファーム・頭脳）／一言</b>。書けない欄は空でよい' },
              { k: '受付で言うこと', v: '「持ってきた方、ここに並べてください。あとで2分ずつ、推しポイントを聞かせてください」', d: '電源を入れてもらい、動く状態で置く。触っていいかどうかも、カードに○×で' },
              { k: '進行役がやること', v: '並んだスタックチャンを1台ずつ写真に撮る', d: 'お披露目会のとき背景（iPad）に出す。人数を数えて持ち時間を決める（3人まで2分、4人以上は90秒）。ハッシュタグ #スタックチャンザギャザリング の QR も背景に' },
              { k: 'ｽﾀｯｸﾁｬﾝの受付', v: 'NFC カードを頭のリーダーに置くと反応する', d: '登録済みの人は名前入りで、未登録なら「はじめまして」。顔と光で分かる（声は今日は使わない）' },
            ]) +
            K.memo('A の掴みが始まる前に、<b>会場に「自分のスタックチャン」が並んでいる</b>状態を作ります。持ってきた人はそれだけで主役になり、持っていない人は買うかどうかを実物で決められます。') },

    { ch: 0, tag: '★デモ一覧：やること／起きること／ダメなとき',
      talk: `<b>進行役の手順書です。</b>デモは全部で8つ（声の会話・録音は今回は無し）。<b>どれも「やること → 起きること → ダメなときの一言」</b>を決めてあります。
             本番前に、この順で1周通しておきます（通しで約6分）。`,
      html: K.todo([
              { title: 'A-1 なでる（手のひらに乗せて、頭の上をなでる）',
                body: '起きること：顔が照れ顔になり、首が少し上がり、「きもちいい」など6種の声のどれか。LED 12個が七色。<br>ダメなとき：「タッチの感度は外殻ごしだと落ちます。もう少し長めに」。それでも無反応なら status.py の4行を見る' },
              { title: 'A-2 曲を流す（Mac のスピーカーから、拍のはっきりした曲）',
                body: '起きること：数拍おいて首が拍に合わせて振れ、テープ30粒が拍で光る。4秒ごとに一瞬止まって聴き入る。<br>ダメなとき：「会場の音量だと閾値が足りません」→ そのまま C の失敗1へ繋ぐ' },
              { title: 'A-3 音量フェーダーを上げて、戻して、指す',
                body: '起きること：70% で実機のテープと背景が赤く、100% で背景に花火と CO2、首が揺れ、テープが白く速く刻む。<br>言うこと：戻して一拍おいて「で、いま僕がやったのは、このフェーダーを上げただけです」' },
              { title: 'B①-1 MacBook の Wi-Fi を切る → 戻す',
                body: '起きること：実機が止まる（顔は最後の表情のまま）。戻すと約10秒で顔が出て、console が「実機が戻りました。組み直します」。<br>言うこと：「中身は、このスタックチャンの中に無いからです」' },
              { title: 'B①-2 パッド #5 を押す（ch7 #5 = surprised）',
                body: '起きること：実機の顔が驚き顔、テープと背景の柱が同じ模様に。4秒で idle に戻る。<br>言うこと：「同じ30個の配列を、実機と画面の2つに送っているだけです」' },
              { title: 'B② 道具の一覧を出す（Claude Code の MCP 一覧か gateway_config_get）',
                body: '起きること：49個の名前が並ぶ（move_head / set_avatar / led.set_all / i2c.scan / take_photo …）。<br>言うこと：「取扱説明書と製品が、同じものになりました」' },
              { title: 'B③ Claude Code に「右を向いて、写真を撮って」',
                body: '起きること：首が右を向き、数秒後に画像が返る。<br>ダメなとき：「カメラは会話中にしか切れない作りにしてあります」→ B② のカメラの話へ' },
              { title: 'B④ 流し込み（操作パネルの MIDI 流し込みでパッド #5 を送る）',
                body: '起きること：機材に触っていないのに、B①-2 と同じ顔と光。<br>言うこと：「機材のケーブルを抜いても同じことが起きます。動かなければ、機材ではなく設定側です」' },
              { title: 'D は進行役のデモ無し',
                body: '声の会話・録音まわりは今日は見せません。参加者が自分のエージェントに読ませるのを、机を回って手伝います。持ってきたスタックチャンで会話するものがあれば、そちらに任せます' },
            ]) },

    /* ───────── A ───────── */
    { ch: 1, tag: '掴み', cover: { num: 'A', title: '掴み', sub: '10分 / 説明より先に触ってもらう' },
      talk: `<b>合格条件は1つだけ。触った人が、自分から2回目を触ること。</b><br>
             これが出れば、あとは何が動いていなくても大丈夫です。実機は<b>踊りモード</b>にしておきます（PLAY ボタンで ON）。` },

    { ch: 1, tag: '手に乗せる → なでる',
      talk: `<b>言うことは最小限で。</b>順番に回して、1人ずつ手のひらに乗せてもらいます。<br>
             なでる場所は<b>頭の上（画面の上の縁）</b>。3ゾーンの静電容量タッチで、外殻ごしでも取れる感度に上げてあります。`,
      html: K.head('さわってみましょう。') +
            K.cards([
              { k: '手に乗せる', v: '待機中は動かない', d: '「置いてあるだけの時は、何もしていません」。静止ではなく、まばたきだけしています' },
              { k: 'なでる', v: '顔・首・声・LED が同時に', d: '6種の反応 × 声。<b>いつも喜ぶ相手は機械に見える</b>ので、嫌がる反応も入っています' },
              { k: '続けてなでる', v: '反応が変わる', d: '「同じ返しは続きません」。閾値は実測から（9.5秒・52秒・92秒の撫でが実在した）' },
              { k: '曲を流す', v: '踊る・LED が拍で光る', d: '音からテンポを推定。4秒ごとに首を止めて聴き入る（自分のサーボ音を拍と間違えないため）' },
            ]) },

    { ch: 1, tag: '★先に伝える注意',
      talk: `<b>回す前に、一言だけ。</b>サーボは電源が入っている間トルクが掛かっています。手で回すとギアが傷みます。`,
      html: K.head('<span class="r">電源が入っている間は、首を手で回さないでくださいね。</span>') +
            K.cards([
              { k: '首', v: '横 ±90°・縦 5〜85°', d: 'サーボ2基（フィードバック付き）。動かすのは console からだけ' },
              { k: 'タッチ', v: '連続タップは控えめに', d: 'モードが切り替わって、踊りが止まって見えます' },
              { k: '持ち方', v: '台座ごと手のひらに', d: '頭だけつまむと首に力が掛かります' },
            ]) },

    { ch: 1, tag: 'バーストを上げて、戻して、指す',
      talk: `<b>ここでは説明をしません。手元を指すだけです。</b><br>
             音量フェーダーを 70% まで上げると会場が赤く染まり、100% で花火と CO2。首と LED も同時に激しくなります。
             戻して、「で、いま僕がやったのは、このフェーダーを上げただけです」。`,
      html: K.head('上げる → 戻す → <em>指す。</em>') +
            K.cards([
              { k: '70%', v: '会場が赤く', d: '実機の LED テープ 30粒と、背景の柱・グリル・ウーファーの縁が同じ赤に' },
              { k: '100%', v: '花火と CO2', d: '背景に花火、首が揺れ、テープが白く速く刻む' },
              { k: '戻す', v: '一拍おく', d: '静かになってから指す。「バースト」と名前を言うのは、あとで' },
            ]) +
            K.quote('……で、いま僕がやったのは、このフェーダーを上げただけです。', '説明は足さない') },

    /* ───────── B ───────── */
    { ch: 2, tag: '仕組み', cover: { num: 'B', title: '仕組み', sub: '27分 / 開けて見せる' },
      talk: `<b>ここが教材の本体です。</b>「できます」ではなく「どうなっていて、どう作っているか」を見せます。<br>
             順番は、①構成（6分）→ ②ファームと焼き方（8分）→ ③作り方（7分）→ ④DJ の接続（6分）。全体図は冒頭で見せたので、ここでは中を開けます。
             ★<b>机の地図を出しておきます</b>（配布物の「この机の上の地図」、14場面を寄ったり引いたり）。` },

    { ch: 2, tag: '① 構成（6分）',
      talk: `<b>今日いちばん持ち帰ってほしい考え方です。</b><br>
             「中に AI が入っている」と思うと、買ったものが天井になります。<b>入口と出口だと思うと、頭脳は自分で選べます。</b>今日の gemma3:4b も、明日には別のモデルに差し替えられます。`,
      html: K.head('中に AI は、<em>入っていません。</em>') +
            K.cards([
              { k: '★実演 1', v: 'MacBook の Wi-Fi を切る', d: '実機が止まります →「中身は、このスタックチャンの中に無いからです」→ 戻すと約10秒で顔が出ます' },
              { k: '★実演 2', v: 'DJ 機材のパッド #5 を押す', d: '実機の顔が驚き顔、テープと背景が同時に同じ模様に。<b>同じ30個の配列を2つに送っているだけ</b>' },
              { k: '数字', v: '首 30回/秒<br>色 20回/秒', d: '実機が受け取っているのは<b>角度と色の列だけ</b>。意味は持っていません' },
            ]) +
            K.memo('実機のファームは xiaozhi 系のフォーク。<b>WebSocket で遠くのサーバーに繋いで喋る</b>のがプロトコルの前提なので、接続先の URL を差し替えるだけで頭脳の置き場所が変わります。無理をしていません。') },

    { ch: 2, tag: '① 物理的な接続',
      talk: `<b>線は USB 1本だけです。</b>あとは MacBook が出す Wi-Fi。実機の Grove ポートに NFC リーダー（Port A）と LED テープ（Port B）。<br>
             「どこにも繋がっていない」を、この図で見せます。`,
      html: K.head('線は<em>1本。</em>あとは、この机の上の Wi-Fi。') +
            `<div class="panel"><svg viewBox="0 0 760 330" role="img" aria-label="物理的な接続：MacBook が Wi-Fi を出し、ｽﾀｯｸﾁｬﾝと iPad がそこに繋がる。DJ 機材は USB で MacBook に。LED テープは Grove Port B、NFC リーダーは Grove Port A で実機に。実機は USB 給電" style="width:100%;height:auto;display:block;font-family:inherit;font-weight:700">
  <defs><marker id="ar9" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#4E7590"/></marker></defs>
  <rect x="290" y="110" width="180" height="110" rx="18" fill="#E4F6FC" stroke="#2E9BE0" stroke-width="3"/>
  <text x="380" y="140" text-anchor="middle" font-size="15" fill="#1A73C4">MacBook</text>
  <text x="380" y="162" text-anchor="middle" font-size="11" fill="#4E7590">Wi-Fi を出す（親機）</text>
  <text x="380" y="180" text-anchor="middle" font-size="11" fill="#4E7590">192.168.2.1</text>
  <text x="380" y="204" text-anchor="middle" font-size="11" fill="#4E7590">USB-C ×2</text>
  <rect x="20" y="120" width="170" height="90" rx="16" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="105" y="150" text-anchor="middle" font-size="14" fill="#173A54">DDJ-FLX2</text>
  <text x="105" y="172" text-anchor="middle" font-size="11" fill="#4E7590">DJ 機材</text>
  <text x="105" y="192" text-anchor="middle" font-size="11" fill="#4E7590">電源も USB から</text>
  <line x1="190" y1="165" x2="288" y2="165" stroke="#4E7590" stroke-width="4"/>
  <text x="239" y="156" text-anchor="middle" font-size="11" fill="#173A54">USB（MIDI）</text>
  <rect x="560" y="20" width="180" height="120" rx="16" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="650" y="48" text-anchor="middle" font-size="14" fill="#173A54">ｽﾀｯｸﾁｬﾝ</text>
  <text x="650" y="68" text-anchor="middle" font-size="11" fill="#4E7590">M5Stack CoreS3（K151）</text>
  <text x="650" y="90" text-anchor="middle" font-size="11" fill="#4E7590">Port A（赤）← NFC リーダー</text>
  <text x="650" y="108" text-anchor="middle" font-size="11" fill="#4E7590">Port B（黒）← LED テープ 30粒</text>
  <text x="650" y="128" text-anchor="middle" font-size="11" fill="#4E7590">USB-C ← 給電（台側）</text>
  <path d="M470 140 Q 520 90 558 80" fill="none" stroke="#2E9BE0" stroke-width="3" stroke-dasharray="7 5" marker-end="url(#ar9)"/>
  <text x="500" y="96" text-anchor="middle" font-size="11" fill="#1A73C4">Wi-Fi 2.4GHz</text>
  <rect x="560" y="200" width="180" height="90" rx="16" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="650" y="230" text-anchor="middle" font-size="14" fill="#173A54">iPad</text>
  <text x="650" y="252" text-anchor="middle" font-size="11" fill="#4E7590">背景の画面（ブラウザ1枚）</text>
  <text x="650" y="272" text-anchor="middle" font-size="11" fill="#4E7590">QR を読んで開く</text>
  <path d="M470 190 Q 520 240 558 245" fill="none" stroke="#2E9BE0" stroke-width="3" stroke-dasharray="7 5" marker-end="url(#ar9)"/>
  <text x="500" y="232" text-anchor="middle" font-size="11" fill="#1A73C4">Wi-Fi</text>
  <rect x="20" y="20" width="170" height="70" rx="16" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="105" y="48" text-anchor="middle" font-size="14" fill="#173A54">スピーカー</text>
  <text x="105" y="70" text-anchor="middle" font-size="11" fill="#4E7590">曲。実機のマイクが拾う</text>
  <rect x="20" y="240" width="170" height="70" rx="16" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="105" y="268" text-anchor="middle" font-size="14" fill="#173A54">参加者のスマホ</text>
  <text x="105" y="290" text-anchor="middle" font-size="11" fill="#4E7590">質疑 bot（同じ Wi-Fi）</text>
  <path d="M190 275 Q 240 275 288 200" fill="none" stroke="#2E9BE0" stroke-width="3" stroke-dasharray="7 5" marker-end="url(#ar9)"/>
  <text x="380" y="318" text-anchor="middle" font-size="12" fill="#1A73C4">線は USB 1本だけ。あとは MacBook が出す Wi-Fi。外（インターネット）には何も繋がっていない</text>
</svg></div>` +
            K.tiny('実機の USB-C は2つ。台側は給電だけ、本体側は書き込み用（今日は使わない）') },

    { ch: 2, tag: '① データの流れ',
      talk: `<b>何が、どんな形で流れているか。</b>入口は4種類、出口も4種類。<b>意味を持っているのは真ん中だけ</b>で、実機に届くのは角度・表情の名前・色の列・音です。`,
      html: K.head('入るのは数字と音。<em>出るのも数字と音。</em>') +
            `<div class="panel"><svg viewBox="0 0 760 300" role="img" aria-label="データの流れ：入口から出口まで、何がどんな形で流れるか。MIDI の数字、音、タッチ、カード ID が MacBook に入り、角度と色の列、文字、声になって出ていく" style="width:100%;height:auto;display:block;font-family:inherit;font-weight:700">
  <defs><marker id="ar10" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#4E7590"/></marker></defs>
  <text x="90" y="24" text-anchor="middle" font-size="13" fill="#1A73C4">入ってくるもの</text>
  <text x="380" y="24" text-anchor="middle" font-size="13" fill="#1A73C4">MacBook の中で</text>
  <text x="670" y="24" text-anchor="middle" font-size="13" fill="#1A73C4">出ていくもの</text>
  <rect x="10" y="40" width="160" height="46" rx="12" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="90" y="59" text-anchor="middle" font-size="12" fill="#173A54">つまみ・パッド</text>
  <text x="90" y="76" text-anchor="middle" font-size="10" fill="#4E7590">MIDI：番号 + 0〜127</text>
  <rect x="10" y="96" width="160" height="46" rx="12" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="90" y="115" text-anchor="middle" font-size="12" fill="#173A54">曲の音・人の声</text>
  <text x="90" y="132" text-anchor="middle" font-size="10" fill="#4E7590">音声（実機マイク → Opus）</text>
  <rect x="10" y="152" width="160" height="46" rx="12" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="90" y="171" text-anchor="middle" font-size="12" fill="#173A54">頭のタッチ</text>
  <text x="90" y="188" text-anchor="middle" font-size="10" fill="#4E7590">tap / stroke + 時間ms</text>
  <rect x="10" y="208" width="160" height="46" rx="12" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="90" y="227" text-anchor="middle" font-size="12" fill="#173A54">NFC カード</text>
  <text x="90" y="244" text-anchor="middle" font-size="10" fill="#4E7590">ID 3バイト（例 043b33）</text>
  <rect x="220" y="40" width="320" height="214" rx="18" fill="#E4F6FC" stroke="#2E9BE0" stroke-width="3"/>
  <rect x="234" y="56" width="140" height="60" rx="12" fill="#fff"/>
  <text x="304" y="78" text-anchor="middle" font-size="12" fill="#173A54">拍を推定</text>
  <text x="304" y="96" text-anchor="middle" font-size="10" fill="#4E7590">音 → BPM と確信度</text>
  <rect x="386" y="56" width="140" height="60" rx="12" fill="#fff"/>
  <text x="456" y="78" text-anchor="middle" font-size="12" fill="#173A54">聞き取り</text>
  <text x="456" y="96" text-anchor="middle" font-size="10" fill="#4E7590">音 → 文字（faster-whisper）</text>
  <rect x="234" y="126" width="292" height="54" rx="12" fill="#DCF5DF"/>
  <text x="380" y="148" text-anchor="middle" font-size="12" fill="#2E8C42">いまどうあるべきか（状態1つ）</text>
  <text x="380" y="166" text-anchor="middle" font-size="10" fill="#2E8C42">つまみ ＞ タッチ ＞ NFC ＞ 聞く ＞ 落ち ＞ 歓声 ＞ 顔</text>
  <rect x="234" y="190" width="140" height="54" rx="12" fill="#fff"/>
  <text x="304" y="210" text-anchor="middle" font-size="12" fill="#173A54">考える</text>
  <text x="304" y="228" text-anchor="middle" font-size="10" fill="#4E7590">文字 → 文字（Ollama）</text>
  <rect x="386" y="190" width="140" height="54" rx="12" fill="#fff"/>
  <text x="456" y="210" text-anchor="middle" font-size="12" fill="#173A54">声を作る</text>
  <text x="456" y="228" text-anchor="middle" font-size="10" fill="#4E7590">文字 → 音（VOICEVOX）</text>
  <rect x="590" y="40" width="160" height="46" rx="12" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="670" y="59" text-anchor="middle" font-size="12" fill="#173A54">首</text>
  <text x="670" y="76" text-anchor="middle" font-size="10" fill="#4E7590">角度2つ × 30回/秒</text>
  <rect x="590" y="96" width="160" height="46" rx="12" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="670" y="115" text-anchor="middle" font-size="12" fill="#173A54">顔</text>
  <text x="670" y="132" text-anchor="middle" font-size="10" fill="#4E7590">表情の名前（14枚から）</text>
  <rect x="590" y="152" width="160" height="46" rx="12" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="670" y="171" text-anchor="middle" font-size="12" fill="#173A54">LED・背景</text>
  <text x="670" y="188" text-anchor="middle" font-size="10" fill="#4E7590">色 30個の列 × 20回/秒（同じ列を2つへ）</text>
  <rect x="590" y="208" width="160" height="46" rx="12" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="670" y="227" text-anchor="middle" font-size="12" fill="#173A54">声</text>
  <text x="670" y="244" text-anchor="middle" font-size="10" fill="#4E7590">音声（40文字まで）</text>
  <line x1="170" y1="63" x2="218" y2="140" stroke="#4E7590" stroke-width="2.5" marker-end="url(#ar10)"/>
  <line x1="170" y1="119" x2="232" y2="90" stroke="#4E7590" stroke-width="2.5" marker-end="url(#ar10)"/>
  <line x1="170" y1="175" x2="218" y2="155" stroke="#4E7590" stroke-width="2.5" marker-end="url(#ar10)"/>
  <line x1="170" y1="231" x2="218" y2="165" stroke="#4E7590" stroke-width="2.5" marker-end="url(#ar10)"/>
  <line x1="540" y1="140" x2="588" y2="63" stroke="#4E7590" stroke-width="2.5" marker-end="url(#ar10)"/>
  <line x1="540" y1="150" x2="588" y2="119" stroke="#4E7590" stroke-width="2.5" marker-end="url(#ar10)"/>
  <line x1="540" y1="160" x2="588" y2="175" stroke="#4E7590" stroke-width="2.5" marker-end="url(#ar10)"/>
  <line x1="526" y1="217" x2="588" y2="231" stroke="#4E7590" stroke-width="2.5" marker-end="url(#ar10)"/>
  <text x="380" y="286" text-anchor="middle" font-size="12" fill="#1A73C4">実機に届くのは「角度」「表情の名前」「色の列」「音」だけ。意味を持っているのは真ん中</text>
</svg></div>` +
            K.tiny('DJ 機材の MIDI は 1秒に数十件、首の角度は 30回/秒、色の列は 20回/秒、会話は1往復 3〜5秒') },

    { ch: 2, tag: '① 役割ごとの製品・技術',
      talk: `<b>用語の共有です。</b>役割ごとに「何を使っているか」を一覧で。全部 OSS か市販品で、特別なものはありません。`,
      html: K.cards([
              { k: '身体', v: 'M5Stack K151<br>（CoreS3 / ESP32-S3）', d: 'サーボ2基・カメラ・マイク・3ゾーンタッチ・LED 12個・バッテリー 550mAh。¥18,150' },
              { k: 'ファーム', v: 'stackchan-mcp<br>（xiaozhi のフォーク）', d: 'K151 専用のボード定義。MCP で道具 49 個。WebSocket で母艦と話す' },
              { k: '窓口', v: 'stackchan-mcp gateway<br>（Python）', d: '実機と1本の WebSocket。MCP サーバー。聞き取り faster-whisper もここ' },
              { k: '演技', v: 'console<br>（自作 Python 約9,300行）', d: 'MIDI・拍・タッチ・NFC → 状態1つ → 差分で反映。テスト 524 件' },
              { k: '考える', v: 'Ollama<br>gemma3:4b／qwen2.5:14b', d: '会話は小さく速く、質疑 bot は大きく正確に。全部 MacBook の中' },
              { k: '声', v: 'VOICEVOX', d: '文字 → 音声。話者 14。40 文字まで' },
              { k: 'DJ 機材', v: 'Pioneer DDJ-FLX2', d: 'USB MIDI。クラスコンプライアントでドライバ不要' },
              { k: '光', v: 'LED テープ SK6812 30粒<br>（M5Stack A093）', d: 'Grove Port B。全開 5V 1.8A なので上限 35%。¥1,344' },
              { k: '受付', v: 'RFID 2 Unit<br>（WS1850S / I2C 0x28）', d: 'Grove Port A。カードの ID 3 バイトで名前を呼ぶ' },
              { k: '背景', v: 'iPad ＋ ブラウザ1枚<br>（stage.html）', d: '奥から手前へ7層。実機と同じ色の列を受け取る' },
              { k: '網', v: 'MacBook のインターネット共有', d: '2.4GHz。MacBook は 192.168.2.1 固定。外には出ない' },
            ]) },

    { ch: 2, tag: '② ファーム — 5つ調べて、1つ選んだ',
      talk: `<b>いちばん大きな分かれ道です。</b>どれが正解という話ではなく、<b>「その声がどこへ行くか」がファームで決まる</b>、という話です。
             ★けなす話にはしません。出荷時は体験としていまでも一番速い。「知って使うのと、知らずに使うのは別」。`,
      html: K.head('ファームは5つ。<span class="o">声の行き先が違います。</span>') +
            K.cards([
              { k: '① 出荷時 XiaoZhi', v: 'ノーコード・最速', d: '聞き取り・考える・喋るが<b>全部海外のクラウド</b>（深セン・香港）。会話の流れでカメラも切れて画像も行く。セットアップに規約の提示も承諾も無い' },
              { k: '② xiaozhi-esp32-server', v: '接続先を自前に', d: '声は自前。遠隔できる。手間は大' },
              { k: '③ 元祖 stack-chan', v: '教材として一番きれい', d: 'ブラウザだけで書き込める。ただ遠隔の概念が薄い' },
              { k: '④ xangi-stackchan', v: 'PC が頭脳・USB 直結', d: 'フルローカル。宅内据え置きなら最高だが、遠隔ができない' },
              { k: '⑤ stackchan-mcp ← これ', v: '②のフォーク＋MCP', d: 'K151 専用のボード定義（サーボ・LED・タッチ・カメラがそのまま動く）。<b>Claude Code から首振り・撮影・表情を直接呼べる</b>' },
            ]) +
            K.memo('選んだ理由は3つ：K151 がそのまま動く／MCP で開発が速い／<b>出荷時の体験を保ったまま頭脳だけ自分の側へ移せる</b>。全部 OSS なので、読めて直せてフォークできます。') },

    { ch: 2, tag: '② MCP — 説明書と製品が同じになった',
      talk: `<b>これは感想ではなく、選定理由です。</b>「AI に任せられる範囲」が、ファームの作りで決まります。<br>
             ★道具の一覧をその場で出します（Claude Code の MCP 一覧か、<code>gateway_config_get</code>）。`,
      html: K.head('ファームの中に、道具が<em>49個。</em>') +
            K.cards([
              { k: '身体', v: 'move_head<br>set_avatar<br>set_blink<br>set_mouth', d: '首を向ける・表情14枚・まばたき・口の動き' },
              { k: '光と目', v: 'led.set_all<br>set_brightness<br>take_photo', d: '本体 LED 12個・画面の明るさ・カメラ' },
              { k: '外の口', v: 'i2c.scan<br>i2c.write_read<br>port_b.ws2812', d: 'Grove の I2C（NFC リーダーはこれで読んだ）と LED テープ' },
              { k: '声と耳', v: 'say<br>listen<br>touch.get_touch_state', d: '喋る・聞き取る・タッチの状態' },
            ]) +
            K.quote('「どう動かすか」を読んで、コードに書き写す工程が、丸ごと消えました。「右を向いて写真を撮って」で、実機が動いて画像が返ります。') },

    { ch: 2, tag: '② 焼き方 — 戻れるようにしてから焼く',
      talk: `<b>「失敗したら文鎮」と思われがちですが、逆です。失敗できる形にしてから焼きます。</b>所要は実測で、①20分 ②10分 ③60分。`,
      html: `<div class="panel"><svg viewBox="0 0 760 270" role="img" aria-label="焼き方の流れ：出荷時で遊ぶ、まるごと吸い出す、アンバインド、焼く、gatewayを立てる。アンバインドから焼き終わるまで喋らなくなる。書き込み領域は2面あり戻れる" style="width:100%;height:auto;display:block;font-family:inherit;font-weight:700">
  <defs><marker id="ar4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#4E7590"/></marker></defs>
  <rect x="10" y="40" width="130" height="90" rx="16" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="75" y="66" text-anchor="middle" font-size="13" fill="#173A54">① 出荷時で遊ぶ</text>
  <text x="75" y="88" text-anchor="middle" font-size="11" fill="#4E7590">30分</text>
  <text x="75" y="108" text-anchor="middle" font-size="11" fill="#4E7590">基準を体で覚える</text>
  <rect x="160" y="40" width="130" height="90" rx="16" fill="#FFF2CC" stroke="#FFC831" stroke-width="3"/>
  <text x="225" y="66" text-anchor="middle" font-size="13" fill="#173A54">② まるごと吸い出す</text>
  <text x="225" y="88" text-anchor="middle" font-size="11" fill="#4E7590">20分 / 16MB</text>
  <text x="225" y="108" text-anchor="middle" font-size="11" fill="#B37C00">飛ばさない。戻る場所</text>
  <rect x="310" y="40" width="130" height="90" rx="16" fill="#FFE2E2" stroke="#FF6B6B" stroke-width="3"/>
  <text x="375" y="66" text-anchor="middle" font-size="13" fill="#173A54">③ アンバインド</text>
  <text x="375" y="88" text-anchor="middle" font-size="11" fill="#4E7590">10分</text>
  <text x="375" y="108" text-anchor="middle" font-size="11" fill="#C43D3D">ここから喋らなくなる</text>
  <rect x="460" y="40" width="130" height="90" rx="16" fill="#FFE2E2" stroke="#FF6B6B" stroke-width="3"/>
  <text x="525" y="66" text-anchor="middle" font-size="13" fill="#173A54">④ 焼く</text>
  <text x="525" y="88" text-anchor="middle" font-size="11" fill="#4E7590">60分 / 一番詰まる</text>
  <text x="525" y="108" text-anchor="middle" font-size="11" fill="#C43D3D">関門2段（登録・古い接続先）</text>
  <rect x="610" y="40" width="140" height="90" rx="16" fill="#DCF5DF" stroke="#55C96A" stroke-width="3"/>
  <text x="680" y="66" text-anchor="middle" font-size="13" fill="#173A54">⑤ gateway を立てる</text>
  <text x="680" y="88" text-anchor="middle" font-size="11" fill="#4E7590">20分</text>
  <text x="680" y="108" text-anchor="middle" font-size="11" fill="#2E8C42">頭脳が自分のものに</text>
  <line x1="140" y1="85" x2="158" y2="85" stroke="#4E7590" stroke-width="3" marker-end="url(#ar4)"/>
  <line x1="290" y1="85" x2="308" y2="85" stroke="#4E7590" stroke-width="3" marker-end="url(#ar4)"/>
  <line x1="440" y1="85" x2="458" y2="85" stroke="#4E7590" stroke-width="3" marker-end="url(#ar4)"/>
  <line x1="590" y1="85" x2="608" y2="85" stroke="#4E7590" stroke-width="3" marker-end="url(#ar4)"/>
  <rect x="310" y="140" width="280" height="8" rx="4" fill="#FF6B6B"/>
  <text x="450" y="166" text-anchor="middle" font-size="12" fill="#C43D3D">この区間、一度喋らなくなる。壊れたのではなく道のりの一部（合計 2時間20分）</text>
  <rect x="10" y="186" width="360" height="70" rx="14" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="190" y="210" text-anchor="middle" font-size="12" fill="#1A73C4">書き込み領域は2面（ota_0 / ota_1）</text>
  <text x="190" y="232" text-anchor="middle" font-size="11" fill="#4E7590">新しい方を空いている面に置き、起動先だけ切り替える。ダメなら10秒で前の面へ</text>
  <rect x="390" y="186" width="360" height="70" rx="14" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="570" y="210" text-anchor="middle" font-size="12" fill="#1A73C4">焼いても消えない領域（NVS）がある</text>
  <text x="570" y="232" text-anchor="middle" font-size="11" fill="#4E7590">前の接続先が残って古い先へ行き続ける。「焼き直した＝初期状態」は成り立たない</text>
</svg></div>` +
            K.cards([
              { k: '①', v: '焼く前に、まるごと吸い出す', d: '<code>esptool read_flash 0x0 16MB</code> で 16MB を手元に。受け入れ試験を出荷時のまま1周して<b>基準</b>を取る。あとは差分だけ見ればよい' },
              { k: '②', v: '書き込み領域が2面ある', d: 'OTA の2スロット（ota_0 / ota_1）。新しい方を空いている面に置き、起動先だけ切り替える。<b>ダメなら10秒で前の面に戻る</b>' },
              { k: '③', v: '順番を守る', d: '<b>バックアップ → アンバインド → 焼く</b>。逆にするとペアリングが壊れる。アンバインドから焼き終わるまで、一度喋らなくなる' },
            ]) +
            K.memo('★焼いても消えない領域（NVS）があります。前の接続先が残っていて、こちらの指定を無視して古い先へ行き続けました。「焼き直したのだから初期状態」は成り立ちません。<br>' +
                   '★<b>実機の顔を指して1行。</b>「この表情、<b>14枚とも自分で描いています</b>（顔6・目3・口5）。同梱の画像は、開けたら<b>1×1の黒い点</b>でした」') },

    { ch: 2, tag: '③ 作り方（7分）',
      talk: `<b>これが開発の実体です。コードを書く前に、まず会話で動かします。</b><br>
             動いてから、繰り返したいものだけコードにしています。2週間・175コミット・手を動かした日は7日（git の記録）。`,
      html: K.head('線で繋いで、<em>話しかけて作る。</em>') +
            K.quote('右を向いて、写真を撮って', '→ 首が振れて、画像が返ってきます（Claude Code から MCP で）') +
            K.cards([
              { k: '1日目', v: '会話で動かす', d: 'MCP の道具を Claude Code から呼ぶだけ。コードはゼロ' },
              { k: '2日目〜', v: '繰り返すものをコードに', d: '踊り・LED・タッチ反応は毎秒動くので、Python の console に' },
              { k: '途中から', v: 'テストを先に書く', d: '設計の不変条件7つをテストにしたら、<b>違反が35箇所</b>機械的に出た' },
            ]) },

    { ch: 2, tag: '③ 実際に使っているプロンプト',
      talk: `<b>全文をそのまま見せます。</b>短いのが特徴です。<b>ロールを増やすほど失敗する</b>ので、土台は壊れない指示だけ。知識はファイルで渡し、指示に書きません。`,
      html: K.cards([
              { k: '① 会話の土台（app/persona/stackchan.md）', v: '実機が喋るときの人格', d: '<code>あなたは手のひらサイズのロボットです。目の前の人と短く会話します。</code><br><code>必ず守ること：返答の先頭に感情タグを1つ付ける（Neutral / Happy / Sleepy / Doubt / Sad / Angry）。返答は2文以内。声で聞くので長いと伝わらない。分からないことは分からないと言う。作らない。考える時間が要るときは、まず短い相槌を返す。</code>' },
              { k: '② 参加者カードの差し込み口', v: '4項目だけ', d: '<code>あなたの名前は {name} です。話し方：{tone}　好きなもの：{likes}　やらないこと：{never}</code><br>1分以内に書き切れる分量が上限。自由記述にすると、書ける人と書けない人の差がそのまま体験の差になる' },
              { k: '③ 質疑 bot（app/dj/ask.py）', v: '資料の外は答えない', d: '<code>あなたはスタックチャンという手のひらサイズのロボットです。今日の勉強会で、自分がどう作られたかを知っています。来た人の質問に、今日配った資料の中から答えます。</code><br><code>一人称は「僕」。2〜3文で答える。下の「資料」に書いてあることだけを使う。書いていないことは推測しない。資料に無ければ「僕の記憶にありません」と正直に言う。難しい言葉は使わない。</code><br>このあとに、質問と似た資料の抜粋を機械が貼って渡す（bot は道具を持たない）' },
              { k: '④ 持ち帰り用（参加者が自分の Claude Code に貼る）', v: '手順は渡す。覚えない', d: '<code>このリポジトリを読んで、僕の状況に合わせて手順を出して。持っているもの: M5Stack K151／Mac。いまの状態: 箱を開けたところ。今日やりたいこと: 出荷時のまま喋らせるところまで。詰まったところは docs/learnings.md に全部書いてあるので、先に読んでから答えて。</code>' },
            ]) +
            K.memo('作るときの指示は、もっと短い。「右を向いて、写真を撮って」「首を49.8度振る指示が出てきたのはなぜ？」。<b>長い指示より、テストと資料を渡すほうが効きます。</b>') },

    { ch: 2, tag: '③ 減らして直る',
      talk: `<b>踊りが止まらない、瞬きが消える。機能の不足だと思って叩いていました。</b><br>
             「モグラ叩きになっている」と言われた日に数えたら、<b>表情を出す箇所が19（5ファイル）、瞬きが12（4ファイル）。持ち主がいませんでした。</b>`,
      html: K.head('命令をやめて、<em>宣言にしました。</em>') +
            `<div class="panel"><svg viewBox="0 0 760 300" role="img" aria-label="状態の持ち方：前は19箇所が実機を直接叩いていた。後は入力が1つの状態に集まり、優先順で1つに決まり、反映役が差分だけを実機と背景に送る" style="width:100%;height:auto;display:block;font-family:inherit;font-weight:700">
  <defs><marker id="ar3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#4E7590"/></marker></defs>
  <text x="120" y="28" text-anchor="middle" font-size="14" fill="#C43D3D">前：各所が叩く</text>
  <rect x="20" y="44" width="200" height="150" rx="16" fill="#FFE2E2" stroke="#FF6B6B" stroke-width="3"/>
  <text x="120" y="70" text-anchor="middle" font-size="12" fill="#173A54">踊り・タッチ・DJ・会話・LED …</text>
  <text x="120" y="92" text-anchor="middle" font-size="12" fill="#173A54">表情を出す箇所 19（5ファイル）</text>
  <text x="120" y="110" text-anchor="middle" font-size="12" fill="#173A54">まばたき 12（4ファイル）</text>
  <text x="120" y="140" text-anchor="middle" font-size="11" fill="#C43D3D">「顔を出せ」「N秒後に戻せ」が交錯</text>
  <text x="120" y="158" text-anchor="middle" font-size="11" fill="#C43D3D">戻し忘れ・割り込み・上書き合戦</text>
  <text x="120" y="182" text-anchor="middle" font-size="11" fill="#4E7590">＋見張り役（監督）が 0.4秒ごと</text>
  <text x="500" y="28" text-anchor="middle" font-size="14" fill="#2E8C42">後：状態は1つ、書くのは1人</text>
  <rect x="260" y="44" width="110" height="150" rx="14" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="315" y="66" text-anchor="middle" font-size="12" fill="#1A73C4">入口</text>
  <text x="315" y="88" text-anchor="middle" font-size="11" fill="#173A54">つまみ</text>
  <text x="315" y="106" text-anchor="middle" font-size="11" fill="#173A54">タッチ</text>
  <text x="315" y="124" text-anchor="middle" font-size="11" fill="#173A54">NFC</text>
  <text x="315" y="142" text-anchor="middle" font-size="11" fill="#173A54">聞く／落ち／歓声</text>
  <text x="315" y="160" text-anchor="middle" font-size="11" fill="#173A54">拍（踊り）</text>
  <text x="315" y="178" text-anchor="middle" font-size="11" fill="#173A54">顔（既定）</text>
  <rect x="400" y="44" width="180" height="150" rx="14" fill="#DCF5DF" stroke="#55C96A" stroke-width="3"/>
  <text x="490" y="66" text-anchor="middle" font-size="13" fill="#2E8C42">Presence（いまどうあるべきか）</text>
  <text x="490" y="90" text-anchor="middle" font-size="11" fill="#173A54">優先順で1つに決まる</text>
  <text x="490" y="110" text-anchor="middle" font-size="11" fill="#4E7590">つまみ ＞ タッチ ＞ NFC ＞ 聞く</text>
  <text x="490" y="126" text-anchor="middle" font-size="11" fill="#4E7590">＞ 落ち ＞ 歓声 ＞ 顔</text>
  <text x="490" y="150" text-anchor="middle" font-size="11" fill="#173A54">一時的なものは期限つき</text>
  <text x="490" y="168" text-anchor="middle" font-size="11" fill="#4E7590">（表情は4秒で idle へ）</text>
  <rect x="610" y="44" width="130" height="150" rx="14" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="675" y="66" text-anchor="middle" font-size="12" fill="#1A73C4">反映役（Reconciler）</text>
  <text x="675" y="90" text-anchor="middle" font-size="11" fill="#173A54">前回との差分だけ送る</text>
  <text x="675" y="116" text-anchor="middle" font-size="11" fill="#173A54">→ 実機：首・顔・LED・声</text>
  <text x="675" y="134" text-anchor="middle" font-size="11" fill="#173A54">→ 背景：同じ30個の配列</text>
  <text x="675" y="164" text-anchor="middle" font-size="11" fill="#4E7590">書くのはここ1人</text>
  <line x1="370" y1="120" x2="398" y2="120" stroke="#4E7590" stroke-width="3" marker-end="url(#ar3)"/>
  <line x1="580" y1="120" x2="608" y2="120" stroke="#4E7590" stroke-width="3" marker-end="url(#ar3)"/>
  <text x="380" y="236" text-anchor="middle" font-size="12" fill="#1A73C4">見張り役が要らなくなって消えた。足して直すのではなく、減らして直った</text>
  <text x="380" y="262" text-anchor="middle" font-size="11" fill="#4E7590">新旧に同じ時刻を流して 16,000 点で最大差 0.0000000000 度を確かめてから、旧コードを消した</text>
</svg></div>` +
            K.cards([
              { k: '前', v: '各所が実機を叩く', d: '「顔を出せ」「N秒後に戻せ」を19箇所が送る → 戻し忘れ・割り込み・上書き合戦' },
              { k: '後', v: '「いまどうあるべきか」を1箇所に', d: '状態は1つ（Presence）。優先順は つまみ > タッチ > NFC > 聞く > 落ち > 歓声 > 顔。反映役（Reconciler）が差分だけ実機に送る' },
              { k: '結果', v: '見張り役が1つ消えた', d: '「音が止まったら畳む」監督が要らなくなった。<b>足して直すのではなく、減らして直る</b>' },
            ]) +
            K.memo('リファクタの出口は数字で。旧コードを残して新旧に同じ時刻を流し、<b>4種の BPM × 4,000点 = 16,000点で最大差 0.0000000000 度</b>を確かめてから旧コードを消しました。') },

    { ch: 2, tag: '③ 完成の条件を、先にテストで書く',
      talk: `<b>言葉のままだと、実装しながらずれます。テストなら、ずれたら落ちます。</b><br>
             だから<b>エージェントに任せられる範囲が広がります。</b>いまテストは 524 件、1回 16 秒で全部回ります。`,
      html: K.head('首を<span class="r">49.8度</span>振る指示が出てきました。') +
            K.lead('上限は40度。<b>超えた分は黙って丸められていました。</b>「頷きが弱い」の正体がこれ。コードを読んでも気づけません。') +
            K.cards([
              { k: '順番', v: '① 仕様をテストに書く → ② 赤を見る → ③ 直す', d: '赤を見ると直す範囲が確定する。推測で広く触らなくて済む' },
              { k: '罠', v: '偽物を本物より甘くしない', d: 'テスト363件が緑なのに画面が真っ白だった。テスト用の偽 canvas が「何もしない」実装で、本物だけが例外を投げていた' },
              { k: '罠', v: 'import が通る ≠ 動く', d: '1,218行を9ファイルに割ったら、テストは通るのに未定義の名前が30個。静的解析で捕まえた' },
            ]) },

    { ch: 2, tag: '④ DJ → PC → ｽﾀｯｸﾁｬﾝ',
      talk: `<b>3つの関係は「機材が数字を出す → PC が意味に翻訳する → 実機が身体で出す」です。</b><br>
             DJ 機材は USB で PC に刺さっているだけ（ドライバ不要）。PC の中にあるのは、<b>翻訳表（mapping.json）と、いまの状態を1つ持つ console</b>。実機はそれを首・顔・光で出すだけ。`,
      html: K.head('機材は数字を出す。PC が翻訳する。<em>実機は身体で出す。</em>') +
            `<div class="panel"><svg viewBox="0 0 760 250" role="img" aria-label="DJ機材からｽﾀｯｸﾁｬﾝまでの翻訳の流れ：機材がMIDIの数字を出し、consoleが翻訳表で意味に変え、状態を1つに決め、gatewayが実機へ、同じ配列が背景へ" style="width:100%;height:auto;display:block;font-family:inherit;font-weight:700">
  <defs><marker id="ar5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#4E7590"/></marker></defs>
  <rect x="10" y="50" width="140" height="110" rx="16" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="80" y="76" text-anchor="middle" font-size="13" fill="#1A73C4">DDJ-FLX2</text>
  <text x="80" y="98" text-anchor="middle" font-size="11" fill="#173A54">つまみ → CC 番号 + 0〜127</text>
  <text x="80" y="116" text-anchor="middle" font-size="11" fill="#173A54">パッド → Note 番号 + ON/OFF</text>
  <text x="80" y="142" text-anchor="middle" font-size="11" fill="#4E7590">実機のことは知らない</text>
  <rect x="190" y="20" width="360" height="170" rx="20" fill="#E4F6FC" stroke="#2E9BE0" stroke-width="3"/>
  <text x="370" y="44" text-anchor="middle" font-size="13" fill="#1A73C4">PC（MacBook）の中</text>
  <rect x="204" y="58" width="100" height="112" rx="12" fill="#fff"/>
  <text x="254" y="82" text-anchor="middle" font-size="12" fill="#173A54">翻訳表</text>
  <text x="254" y="98" text-anchor="middle" font-size="10" fill="#4E7590">mapping.json</text>
  <text x="254" y="120" text-anchor="middle" font-size="10" fill="#4E7590">CC23 → 首 yaw</text>
  <text x="254" y="136" text-anchor="middle" font-size="10" fill="#4E7590">CC15 → うなずき</text>
  <text x="254" y="152" text-anchor="middle" font-size="10" fill="#4E7590">Note#5 → 驚き顔</text>
  <rect x="318" y="58" width="104" height="112" rx="12" fill="#fff"/>
  <text x="370" y="82" text-anchor="middle" font-size="12" fill="#173A54">状態1つ</text>
  <text x="370" y="98" text-anchor="middle" font-size="10" fill="#4E7590">console / Presence</text>
  <text x="370" y="120" text-anchor="middle" font-size="10" fill="#4E7590">優先順で1つに</text>
  <text x="370" y="136" text-anchor="middle" font-size="10" fill="#4E7590">表情は4秒で戻す</text>
  <text x="370" y="152" text-anchor="middle" font-size="10" fill="#4E7590">つまみ離して2秒で踊りへ</text>
  <rect x="436" y="58" width="100" height="112" rx="12" fill="#fff"/>
  <text x="486" y="82" text-anchor="middle" font-size="12" fill="#173A54">窓口</text>
  <text x="486" y="98" text-anchor="middle" font-size="10" fill="#4E7590">gateway</text>
  <text x="486" y="120" text-anchor="middle" font-size="10" fill="#4E7590">move_head</text>
  <text x="486" y="136" text-anchor="middle" font-size="10" fill="#4E7590">set_avatar</text>
  <text x="486" y="152" text-anchor="middle" font-size="10" fill="#4E7590">ws2812.set_strip</text>
  <rect x="590" y="20" width="160" height="80" rx="16" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="670" y="46" text-anchor="middle" font-size="13" fill="#1A73C4">ｽﾀｯｸﾁｬﾝ</text>
  <text x="670" y="68" text-anchor="middle" font-size="11" fill="#173A54">首 30回/秒・色 20回/秒</text>
  <text x="670" y="86" text-anchor="middle" font-size="11" fill="#4E7590">角度と色の列を出すだけ</text>
  <rect x="590" y="116" width="160" height="74" rx="16" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="670" y="142" text-anchor="middle" font-size="13" fill="#1A73C4">背景（iPad）</text>
  <text x="670" y="164" text-anchor="middle" font-size="11" fill="#173A54">同じ30個の配列を受け取る</text>
  <line x1="150" y1="105" x2="188" y2="105" stroke="#4E7590" stroke-width="3" marker-end="url(#ar5)"/>
  <text x="169" y="96" text-anchor="middle" font-size="10" fill="#4E7590">USB</text>
  <line x1="304" y1="114" x2="316" y2="114" stroke="#4E7590" stroke-width="3" marker-end="url(#ar5)"/>
  <line x1="422" y1="114" x2="434" y2="114" stroke="#4E7590" stroke-width="3" marker-end="url(#ar5)"/>
  <line x1="550" y1="80" x2="588" y2="62" stroke="#4E7590" stroke-width="3" marker-end="url(#ar5)"/>
  <text x="569" y="56" text-anchor="middle" font-size="10" fill="#4E7590">Wi-Fi</text>
  <line x1="550" y1="130" x2="588" y2="150" stroke="#4E7590" stroke-width="3" marker-end="url(#ar5)"/>
  <text x="380" y="222" text-anchor="middle" font-size="12" fill="#1A73C4">機材は数字を出す → PC が意味に翻訳する → 実機は身体で出す。翻訳表を書き換えれば、同じ機材で別のスタックチャンになる</text>
</svg></div>` +
            K.cards([
              { k: '① 機材（DDJ-FLX2）', v: '出しているのは MIDI の数字だけ', d: 'つまみは CC（番号と 0〜127）、パッドとボタンは Note（番号と ON/OFF）。<b>機材は実機の存在を知りません</b>' },
              { k: '② PC の中', v: '翻訳表<br>状態1つ<br>窓口', d: '<b>mapping.json</b>（この番号はこの意味）→ <b>console</b>（いまどうあるべきか。優先順 つまみ > タッチ > NFC > 聞く > 落ち > 歓声 > 顔）→ <b>gateway</b>（49個の道具で実機へ）' },
              { k: '③ 実機', v: '角度と色の列を受けて動く', d: '首 30回/秒・色 20回/秒で届く。<b>意味は持っていません</b>。同じ配列を背景（iPad）も受け取るので、実機と画面が必ず揃う' },
            ]) +
            K.memo('番号は推測せず、<b>1つずつ動かして覚えさせました</b>（2026-09-08 実測）。最初「うなずきは 0〜64」と記録して間違えた。本人が中央で止めた区間を全可動域と解釈していた。<b>0 と 127 の両方が観測されたこと</b>を全可動域の条件にした。') },

    { ch: 2, tag: '④ 割り当て表（mapping.json）★見せ場',
      talk: `<b>この表のとおりに、その場で触ります。</b>「特別な操作画面は1つもありません」。<br>
             表情は<b>4秒で自動的に idle に戻ります</b>。押しっぱなしで顔が固定されないように。落差で「反応した」ように見えます。`,
      html: `<div class="panel"><svg viewBox="0 0 760 330" role="img" aria-label="DJ 機材の見取り図と割り当て：左のジョグを擦ると光が刻む、EQ つまみで首が回る、FILTER でうなずく、パッド4枚で表情、音量フェーダーでバースト、PLAY で踊り ON、MASTER で OFF" style="width:100%;height:auto;display:block;font-family:inherit;font-weight:700">
  <defs><marker id="ar8" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#1A73C4"/></marker></defs>
  <rect x="40" y="70" width="680" height="200" rx="18" fill="#2B2F36" stroke="#4E7590" stroke-width="3"/>
  <text x="380" y="58" text-anchor="middle" font-size="13" fill="#1A73C4">DDJ-FLX2（上から見た図）</text>
  <circle cx="150" cy="180" r="62" fill="#1c1f24" stroke="#87A6BC" stroke-width="3"/>
  <circle cx="150" cy="180" r="40" fill="#2B2F36" stroke="#87A6BC" stroke-width="2"/>
  <text x="150" y="185" text-anchor="middle" font-size="11" fill="#E4F6FC">ジョグ</text>
  <circle cx="610" cy="180" r="62" fill="#1c1f24" stroke="#87A6BC" stroke-width="3"/>
  <circle cx="610" cy="180" r="40" fill="#2B2F36" stroke="#87A6BC" stroke-width="2"/>
  <text x="610" y="185" text-anchor="middle" font-size="11" fill="#E4F6FC">ジョグ</text>
  <rect x="86" y="236" width="40" height="22" rx="6" fill="#55C96A"/>
  <text x="106" y="251" text-anchor="middle" font-size="10" fill="#0e2a14">PLAY</text>
  <circle cx="330" cy="105" r="11" fill="#87A6BC"/><circle cx="330" cy="140" r="11" fill="#87A6BC"/><circle cx="330" cy="175" r="11" fill="#FFC831"/>
  <circle cx="430" cy="105" r="11" fill="#87A6BC"/><circle cx="430" cy="140" r="11" fill="#87A6BC"/><circle cx="430" cy="175" r="11" fill="#87A6BC"/>
  <text x="380" y="98" text-anchor="middle" font-size="9" fill="#E4F6FC">EQ</text>
  <circle cx="330" cy="215" r="13" fill="#FF9F40"/><circle cx="430" cy="215" r="13" fill="#87A6BC"/>
  <text x="380" y="219" text-anchor="middle" font-size="9" fill="#E4F6FC">FILTER</text>
  <rect x="368" y="100" width="24" height="120" rx="6" fill="#1c1f24" stroke="#87A6BC" stroke-width="2"/>
  <rect x="371" y="108" width="18" height="10" rx="3" fill="#FF6B6B"/>
  <text x="380" y="242" text-anchor="middle" font-size="9" fill="#E4F6FC">音量</text>
  <rect x="360" y="252" width="40" height="14" rx="4" fill="#9B7BF0"/>
  <text x="380" y="262" text-anchor="middle" font-size="8" fill="#fff">MASTER</text>
  <rect x="222" y="236" width="18" height="18" rx="3" fill="#4E7590"/><rect x="244" y="236" width="18" height="18" rx="3" fill="#4E7590"/><rect x="266" y="236" width="18" height="18" rx="3" fill="#4E7590"/><rect x="288" y="236" width="18" height="18" rx="3" fill="#4E7590"/>
  <rect x="222" y="214" width="18" height="18" rx="3" fill="#8FDBF5"/><rect x="244" y="214" width="18" height="18" rx="3" fill="#8FDBF5"/><rect x="266" y="214" width="18" height="18" rx="3" fill="#8FDBF5"/><rect x="288" y="214" width="18" height="18" rx="3" fill="#8FDBF5"/>
  <text x="264" y="204" text-anchor="middle" font-size="9" fill="#E4F6FC">パッド #4〜#7</text>
  <line x1="150" y1="118" x2="150" y2="34" stroke="#1A73C4" stroke-width="2.5" marker-end="url(#ar8)"/>
  <text x="150" y="26" text-anchor="middle" font-size="12" fill="#1A73C4">擦る → LED が白く速く刻む</text>
  <line x1="330" y1="175" x2="250" y2="60" stroke="#1A73C4" stroke-width="2.5" marker-end="url(#ar8)"/>
  <text x="228" y="52" text-anchor="middle" font-size="12" fill="#1A73C4">EQ（CC23）→ 首が左右に</text>
  <line x1="330" y1="215" x2="300" y2="300" stroke="#1A73C4" stroke-width="2.5" marker-end="url(#ar8)"/>
  <text x="290" y="318" text-anchor="middle" font-size="12" fill="#1A73C4">FILTER（CC15）→ うなずく</text>
  <line x1="380" y1="110" x2="470" y2="36" stroke="#1A73C4" stroke-width="2.5" marker-end="url(#ar8)"/>
  <text x="500" y="28" text-anchor="middle" font-size="12" fill="#1A73C4">音量フェーダー → 70% 赤 / 100% 花火</text>
  <line x1="264" y1="222" x2="180" y2="300" stroke="#1A73C4" stroke-width="2.5" marker-end="url(#ar8)"/>
  <text x="130" y="318" text-anchor="middle" font-size="12" fill="#1A73C4">パッド4枚 → 表情（4秒で戻る）</text>
  <line x1="106" y1="258" x2="60" y2="300" stroke="#1A73C4" stroke-width="2.5" marker-end="url(#ar8)"/>
  <text x="44" y="318" text-anchor="start" font-size="11" fill="#1A73C4">PLAY → 踊り ON</text>
  <line x1="380" y1="266" x2="470" y2="300" stroke="#1A73C4" stroke-width="2.5" marker-end="url(#ar8)"/>
  <text x="520" y="318" text-anchor="middle" font-size="12" fill="#1A73C4">MASTER → 踊り OFF（会話へ）</text>
  <line x1="610" y1="118" x2="610" y2="34" stroke="#1A73C4" stroke-width="2.5" marker-end="url(#ar8)" stroke-dasharray="5 4"/>
  <text x="640" y="26" text-anchor="middle" font-size="11" fill="#4E7590">右側は今日は使わない</text>
</svg></div>` +
            K.cards([
              { k: 'EQ つまみ（CC 23 / ch6）', v: '首が左右に回る', d: '0〜127 がそのまま yaw ±90°。テープが回した分だけメーターのように点く。離して2秒で首を踊りに返す' },
              { k: 'FILTER つまみ（CC 15 / ch0）', v: 'うなずく', d: '0〜127 が pitch 5〜85°。128種すべて確認した' },
              { k: 'パッド #4 #5 #6 #7（Note ch7）', v: 'happy<br>surprised<br>embarrassed<br>sad', d: '隣接4枚で指の移動が最小。#5 の驚き顔が暗い箱で一番変化が見える。LED の模様（13種）と背景も同時に' },
              { k: 'ジョグを擦る', v: 'LED が白く速く刻む', d: '背景で下からスポットライト。灯体は揺れない（本物のムービングヘッドは止まっていて光だけが刻む）' },
              { k: '音量フェーダー', v: '70% で赤、100% で花火と CO2', d: '会場が赤く染まり、首が揺れ、テープが白く速く。A の掴みで使ったのはこれ' },
              { k: 'PLAY / MASTER ボタン（Note 11 / 99）', v: '踊り ON / OFF', d: 'トグルにしていない。セット中に何度も押す人、押しっぱなしの人がいるため' },
            ]) +
            K.memo('<b>素材（機材・ファーム・モデル・曲）は自分が作っていない。それでも、選択と並びとタイミングに自分が出る。</b>') },

    { ch: 2, tag: '④ 機材なしで、同じことを起こす',
      talk: `<b>言いたいことは1つ。「機材から来る数字を、PC が自分で作って流せば、機材が無くても同じ動きが出る」。</b><br>
             操作パネルの「MIDI 流し込み」で、パッド #5 の Note を PC が自分に送ります。ケーブルは抜いたまま。実機の顔が驚き顔になります。`,
      html: K.head('機材を抜いても、<em>同じ顔が出る。</em>') +
            K.cards([
              { k: 'やること', v: 'ケーブルを抜く → パネルで「パッド #5」を流し込む', d: '起きること：B①-2 と同じ驚き顔・同じ光。機材が無いのに' },
              { k: 'なぜ効くか', v: 'PC が見ているのは数字だけだから', d: '機材が出したか、PC が自分で作ったか、PC には区別がつかない。だから同じ翻訳表を通って同じ動きになる' },
              { k: '当日の使い道', v: '「パッドが効かない」の切り分けが10秒', d: '流し込みで動く → 機材かケーブルが悪い。流し込みでも動かない → 翻訳表か console が悪い' },
              { k: '家での使い道', v: '機材が無い日に開発できる', d: '録った MIDI を再生して、同じ動きを何度でも再現できる' },
            ]) +
            K.quote('人の手でしか確かめられない作りは、確かめられていないのと同じです。') },

    /* ───────── お披露目会（仕組みのあと） ───────── */
    { ch: 3, tag: 'お披露目会', cover: { num: '♥', title: '持ってきたスタックチャンのお披露目会！', sub: '8分 / 推しポイントを、1人2分' },
      talk: `<b>仕組みの話のすぐあとに、持ってきた人の番です。</b>堅苦しいことは無し。<b>共有したい人が、自分の大好きなスタックチャンの推しポイントを共有する時間</b>です。<br>
             1人2分、拍手で交代。進行役は司会と時計係だけ。` },

    { ch: 3, tag: '推しポイントを、2分で',
      talk: `<b>言うこと：「持ってきてくれた方、自分の大好きなスタックチャンの推しポイントを2分でどうぞ！」</b><br>
             受付でお披露目スペースに並べてもらった順に。写真は受付で撮ったものを背景（iPad）に。全員で見ます。`,
      html: K.head('自分の大好きなスタックチャンの、<em>推しポイントを。</em>') +
            K.cards([
              { k: '出る人', v: '持ってきた人で、共有したい人', d: '受付のカードの順に。3人で6分、4人なら1人90秒に。飛び入りも歓迎。出たくない人は並べるだけで OK' },
              { k: '2分の中身', v: '名前 → 推しポイント（できれば実演30秒）→ 一言', d: '技術の話でなくてよい。「顔がかわいい」「声がいい」「この動きが好き」で十分。中身（ファーム・頭脳）は聞かれたら' },
              { k: '進行役は', v: '拍手の音頭と時計だけ', d: '質問は1つまで。「どこがいちばん好き？」。続きはお披露目スペースで、そのスタックチャンの前で' },
              { k: 'X でつぶやく', v: '#スタックチャンザギャザリング', d: '下の QR を読むと X が開いて、ハッシュタグが入った状態になります。会場の写真と一緒にどうぞ。背景の iPad にも同じ QR を出しておく' },
            ]) +
            `<div class="panel" style="text-align:center"><svg width="220" height="220" version="1.1" viewBox="0 0 53 53" xmlns="http://www.w3.org/2000/svg"><path d="M2,2H3V3H2zM3,2H4V3H3zM4,2H5V3H4zM5,2H6V3H5zM6,2H7V3H6zM7,2H8V3H7zM8,2H9V3H8zM11,2H12V3H11zM12,2H13V3H12zM15,2H16V3H15zM17,2H18V3H17zM18,2H19V3H18zM20,2H21V3H20zM22,2H23V3H22zM23,2H24V3H23zM24,2H25V3H24zM25,2H26V3H25zM26,2H27V3H26zM28,2H29V3H28zM29,2H30V3H29zM30,2H31V3H30zM32,2H33V3H32zM33,2H34V3H33zM34,2H35V3H34zM36,2H37V3H36zM37,2H38V3H37zM38,2H39V3H38zM39,2H40V3H39zM42,2H43V3H42zM44,2H45V3H44zM45,2H46V3H45zM46,2H47V3H46zM47,2H48V3H47zM48,2H49V3H48zM49,2H50V3H49zM50,2H51V3H50zM2,3H3V4H2zM8,3H9V4H8zM12,3H13V4H12zM13,3H14V4H13zM15,3H16V4H15zM16,3H17V4H16zM18,3H19V4H18zM21,3H22V4H21zM23,3H24V4H23zM25,3H26V4H25zM27,3H28V4H27zM29,3H30V4H29zM30,3H31V4H30zM36,3H37V4H36zM37,3H38V4H37zM40,3H41V4H40zM41,3H42V4H41zM42,3H43V4H42zM44,3H45V4H44zM50,3H51V4H50zM2,4H3V5H2zM4,4H5V5H4zM5,4H6V5H5zM6,4H7V5H6zM8,4H9V5H8zM12,4H13V5H12zM13,4H14V5H13zM14,4H15V5H14zM18,4H19V5H18zM20,4H21V5H20zM23,4H24V5H23zM26,4H27V5H26zM29,4H30V5H29zM31,4H32V5H31zM32,4H33V5H32zM33,4H34V5H33zM35,4H36V5H35zM37,4H38V5H37zM38,4H39V5H38zM41,4H42V5H41zM42,4H43V5H42zM44,4H45V5H44zM46,4H47V5H46zM47,4H48V5H47zM48,4H49V5H48zM50,4H51V5H50zM2,5H3V6H2zM4,5H5V6H4zM5,5H6V6H5zM6,5H7V6H6zM8,5H9V6H8zM18,5H19V6H18zM19,5H20V6H19zM20,5H21V6H20zM23,5H24V6H23zM24,5H25V6H24zM25,5H26V6H25zM29,5H30V6H29zM30,5H31V6H30zM31,5H32V6H31zM33,5H34V6H33zM34,5H35V6H34zM35,5H36V6H35zM36,5H37V6H36zM38,5H39V6H38zM41,5H42V6H41zM44,5H45V6H44zM46,5H47V6H46zM47,5H48V6H47zM48,5H49V6H48zM50,5H51V6H50zM2,6H3V7H2zM4,6H5V7H4zM5,6H6V7H5zM6,6H7V7H6zM8,6H9V7H8zM11,6H12V7H11zM12,6H13V7H12zM14,6H15V7H14zM15,6H16V7H15zM19,6H20V7H19zM20,6H21V7H20zM21,6H22V7H21zM22,6H23V7H22zM23,6H24V7H23zM24,6H25V7H24zM25,6H26V7H25zM26,6H27V7H26zM27,6H28V7H27zM28,6H29V7H28zM30,6H31V7H30zM31,6H32V7H31zM32,6H33V7H32zM33,6H34V7H33zM35,6H36V7H35zM37,6H38V7H37zM38,6H39V7H38zM44,6H45V7H44zM46,6H47V7H46zM47,6H48V7H47zM48,6H49V7H48zM50,6H51V7H50zM2,7H3V8H2zM8,7H9V8H8zM10,7H11V8H10zM11,7H12V8H11zM12,7H13V8H12zM15,7H16V8H15zM16,7H17V8H16zM17,7H18V8H17zM18,7H19V8H18zM19,7H20V8H19zM22,7H23V8H22zM23,7H24V8H23zM24,7H25V8H24zM28,7H29V8H28zM32,7H33V8H32zM34,7H35V8H34zM36,7H37V8H36zM37,7H38V8H37zM39,7H40V8H39zM40,7H41V8H40zM44,7H45V8H44zM50,7H51V8H50zM2,8H3V9H2zM3,8H4V9H3zM4,8H5V9H4zM5,8H6V9H5zM6,8H7V9H6zM7,8H8V9H7zM8,8H9V9H8zM10,8H11V9H10zM12,8H13V9H12zM14,8H15V9H14zM16,8H17V9H16zM18,8H19V9H18zM20,8H21V9H20zM22,8H23V9H22zM24,8H25V9H24zM26,8H27V9H26zM28,8H29V9H28zM30,8H31V9H30zM32,8H33V9H32zM34,8H35V9H34zM36,8H37V9H36zM38,8H39V9H38zM40,8H41V9H40zM42,8H43V9H42zM44,8H45V9H44zM45,8H46V9H45zM46,8H47V9H46zM47,8H48V9H47zM48,8H49V9H48zM49,8H50V9H49zM50,8H51V9H50zM12,9H13V10H12zM13,9H14V10H13zM15,9H16V10H15zM18,9H19V10H18zM19,9H20V10H19zM24,9H25V10H24zM28,9H29V10H28zM31,9H32V10H31zM35,9H36V10H35zM37,9H38V10H37zM38,9H39V10H38zM2,10H3V11H2zM5,10H6V11H5zM7,10H8V11H7zM8,10H9V11H8zM10,10H11V11H10zM11,10H12V11H11zM12,10H13V11H12zM14,10H15V11H14zM15,10H16V11H15zM16,10H17V11H16zM17,10H18V11H17zM18,10H19V11H18zM19,10H20V11H19zM22,10H23V11H22zM23,10H24V11H23zM24,10H25V11H24zM25,10H26V11H25zM26,10H27V11H26zM27,10H28V11H27zM28,10H29V11H28zM31,10H32V11H31zM32,10H33V11H32zM34,10H35V11H34zM35,10H36V11H35zM39,10H40V11H39zM42,10H43V11H42zM43,10H44V11H43zM45,10H46V11H45zM2,11H3V12H2zM6,11H7V12H6zM7,11H8V12H7zM11,11H12V12H11zM12,11H13V12H12zM13,11H14V12H13zM14,11H15V12H14zM15,11H16V12H15zM16,11H17V12H16zM23,11H24V12H23zM24,11H25V12H24zM29,11H30V12H29zM30,11H31V12H30zM31,11H32V12H31zM33,11H34V12H33zM40,11H41V12H40zM41,11H42V12H41zM46,11H47V12H46zM47,11H48V12H47zM49,11H50V12H49zM50,11H51V12H50zM2,12H3V13H2zM3,12H4V13H3zM4,12H5V13H4zM8,12H9V13H8zM9,12H10V13H9zM10,12H11V13H10zM11,12H12V13H11zM12,12H13V13H12zM13,12H14V13H13zM14,12H15V13H14zM15,12H16V13H15zM19,12H20V13H19zM20,12H21V13H20zM22,12H23V13H22zM23,12H24V13H23zM24,12H25V13H24zM26,12H27V13H26zM29,12H30V13H29zM31,12H32V13H31zM33,12H34V13H33zM34,12H35V13H34zM36,12H37V13H36zM37,12H38V13H37zM38,12H39V13H38zM45,12H46V13H45zM48,12H49V13H48zM2,13H3V14H2zM4,13H5V14H4zM5,13H6V14H5zM9,13H10V14H9zM11,13H12V14H11zM12,13H13V14H12zM14,13H15V14H14zM15,13H16V14H15zM16,13H17V14H16zM18,13H19V14H18zM22,13H23V14H22zM23,13H24V14H23zM25,13H26V14H25zM29,13H30V14H29zM30,13H31V14H30zM31,13H32V14H31zM32,13H33V14H32zM35,13H36V14H35zM38,13H39V14H38zM39,13H40V14H39zM41,13H42V14H41zM44,13H45V14H44zM48,13H49V14H48zM49,13H50V14H49zM3,14H4V15H3zM7,14H8V15H7zM8,14H9V15H8zM10,14H11V15H10zM11,14H12V15H11zM13,14H14V15H13zM16,14H17V15H16zM20,14H21V15H20zM22,14H23V15H22zM24,14H25V15H24zM25,14H26V15H25zM26,14H27V15H26zM27,14H28V15H27zM28,14H29V15H28zM29,14H30V15H29zM30,14H31V15H30zM32,14H33V15H32zM33,14H34V15H33zM34,14H35V15H34zM37,14H38V15H37zM38,14H39V15H38zM41,14H42V15H41zM45,14H46V15H45zM46,14H47V15H46zM47,14H48V15H47zM48,14H49V15H48zM49,14H50V15H49zM50,14H51V15H50zM3,15H4V16H3zM4,15H5V16H4zM5,15H6V16H5zM6,15H7V16H6zM7,15H8V16H7zM9,15H10V16H9zM10,15H11V16H10zM12,15H13V16H12zM17,15H18V16H17zM21,15H22V16H21zM22,15H23V16H22zM26,15H27V16H26zM27,15H28V16H27zM29,15H30V16H29zM30,15H31V16H30zM33,15H34V16H33zM34,15H35V16H34zM35,15H36V16H35zM39,15H40V16H39zM40,15H41V16H40zM43,15H44V16H43zM46,15H47V16H46zM48,15H49V16H48zM50,15H51V16H50zM2,16H3V17H2zM3,16H4V17H3zM4,16H5V17H4zM6,16H7V17H6zM7,16H8V17H7zM8,16H9V17H8zM9,16H10V17H9zM10,16H11V17H10zM15,16H16V17H15zM18,16H19V17H18zM19,16H20V17H19zM22,16H23V17H22zM26,16H27V17H26zM28,16H29V17H28zM32,16H33V17H32zM33,16H34V17H33zM34,16H35V17H34zM35,16H36V17H35zM36,16H37V17H36zM37,16H38V17H37zM40,16H41V17H40zM42,16H43V17H42zM43,16H44V17H43zM46,16H47V17H46zM47,16H48V17H47zM50,16H51V17H50zM3,17H4V18H3zM5,17H6V18H5zM9,17H10V18H9zM10,17H11V18H10zM11,17H12V18H11zM12,17H13V18H12zM13,17H14V18H13zM14,17H15V18H14zM15,17H16V18H15zM17,17H18V18H17zM22,17H23V18H22zM24,17H25V18H24zM25,17H26V18H25zM27,17H28V18H27zM28,17H29V18H28zM29,17H30V18H29zM32,17H33V18H32zM33,17H34V18H33zM36,17H37V18H36zM37,17H38V18H37zM40,17H41V18H40zM41,17H42V18H41zM46,17H47V18H46zM47,17H48V18H47zM49,17H50V18H49zM2,18H3V19H2zM3,18H4V19H3zM5,18H6V19H5zM8,18H9V19H8zM11,18H12V19H11zM12,18H13V19H12zM15,18H16V19H15zM18,18H19V19H18zM21,18H22V19H21zM22,18H23V19H22zM25,18H26V19H25zM28,18H29V19H28zM29,18H30V19H29zM30,18H31V19H30zM36,18H37V19H36zM37,18H38V19H37zM39,18H40V19H39zM44,18H45V19H44zM45,18H46V19H45zM48,18H49V19H48zM3,19H4V20H3zM7,19H8V20H7zM10,19H11V20H10zM12,19H13V20H12zM15,19H16V20H15zM19,19H20V20H19zM21,19H22V20H21zM22,19H23V20H22zM25,19H26V20H25zM26,19H27V20H26zM27,19H28V20H27zM28,19H29V20H28zM29,19H30V20H29zM30,19H31V20H30zM31,19H32V20H31zM32,19H33V20H32zM33,19H34V20H33zM36,19H37V20H36zM38,19H39V20H38zM41,19H42V20H41zM43,19H44V20H43zM44,19H45V20H44zM49,19H50V20H49zM3,20H4V21H3zM7,20H8V21H7zM8,20H9V21H8zM9,20H10V21H9zM11,20H12V21H11zM21,20H22V21H21zM23,20H24V21H23zM26,20H27V21H26zM29,20H30V21H29zM32,20H33V21H32zM33,20H34V21H33zM36,20H37V21H36zM37,20H38V21H37zM40,20H41V21H40zM42,20H43V21H42zM43,20H44V21H43zM48,20H49V21H48zM49,20H50V21H49zM6,21H7V22H6zM9,21H10V22H9zM11,21H12V22H11zM13,21H14V22H13zM17,21H18V22H17zM18,21H19V22H18zM19,21H20V22H19zM21,21H22V22H21zM22,21H23V22H22zM24,21H25V22H24zM25,21H26V22H25zM26,21H27V22H26zM27,21H28V22H27zM28,21H29V22H28zM30,21H31V22H30zM32,21H33V22H32zM33,21H34V22H33zM36,21H37V22H36zM38,21H39V22H38zM42,21H43V22H42zM43,21H44V22H43zM44,21H45V22H44zM45,21H46V22H45zM46,21H47V22H46zM48,21H49V22H48zM50,21H51V22H50zM3,22H4V23H3zM7,22H8V23H7zM8,22H9V23H8zM9,22H10V23H9zM11,22H12V23H11zM16,22H17V23H16zM17,22H18V23H17zM20,22H21V23H20zM21,22H22V23H21zM23,22H24V23H23zM26,22H27V23H26zM28,22H29V23H28zM29,22H30V23H29zM30,22H31V23H30zM33,22H34V23H33zM36,22H37V23H36zM37,22H38V23H37zM39,22H40V23H39zM40,22H41V23H40zM44,22H45V23H44zM47,22H48V23H47zM49,22H50V23H49zM5,23H6V24H5zM7,23H8V24H7zM9,23H10V24H9zM11,23H12V24H11zM13,23H14V24H13zM16,23H17V24H16zM17,23H18V24H17zM18,23H19V24H18zM25,23H26V24H25zM28,23H29V24H28zM30,23H31V24H30zM33,23H34V24H33zM37,23H38V24H37zM38,23H39V24H38zM41,23H42V24H41zM44,23H45V24H44zM46,23H47V24H46zM3,24H4V25H3zM5,24H6V25H5zM6,24H7V25H6zM7,24H8V25H7zM8,24H9V25H8zM9,24H10V25H9zM10,24H11V25H10zM12,24H13V25H12zM16,24H17V25H16zM17,24H18V25H17zM18,24H19V25H18zM19,24H20V25H19zM20,24H21V25H20zM23,24H24V25H23zM24,24H25V25H24zM25,24H26V25H25zM26,24H27V25H26zM27,24H28V25H27zM28,24H29V25H28zM30,24H31V25H30zM31,24H32V25H31zM33,24H34V25H33zM36,24H37V25H36zM39,24H40V25H39zM42,24H43V25H42zM43,24H44V25H43zM44,24H45V25H44zM45,24H46V25H45zM46,24H47V25H46zM47,24H48V25H47zM49,24H50V25H49zM5,25H6V26H5zM6,25H7V26H6zM10,25H11V26H10zM13,25H14V26H13zM14,25H15V26H14zM18,25H19V26H18zM19,25H20V26H19zM22,25H23V26H22zM23,25H24V26H23zM24,25H25V26H24zM28,25H29V26H28zM32,25H33V26H32zM35,25H36V26H35zM37,25H38V26H37zM38,25H39V26H38zM41,25H42V26H41zM42,25H43V26H42zM46,25H47V26H46zM47,25H48V26H47zM48,25H49V26H48zM50,25H51V26H50zM2,26H3V27H2zM3,26H4V27H3zM4,26H5V27H4zM6,26H7V27H6zM8,26H9V27H8zM10,26H11V27H10zM12,26H13V27H12zM14,26H15V27H14zM15,26H16V27H15zM17,26H18V27H17zM21,26H22V27H21zM24,26H25V27H24zM26,26H27V27H26zM28,26H29V27H28zM35,26H36V27H35zM36,26H37V27H36zM42,26H43V27H42zM44,26H45V27H44zM46,26H47V27H46zM2,27H3V28H2zM4,27H5V28H4zM6,27H7V28H6zM10,27H11V28H10zM12,27H13V28H12zM13,27H14V28H13zM14,27H15V28H14zM18,27H19V28H18zM20,27H21V28H20zM21,27H22V28H21zM22,27H23V28H22zM23,27H24V28H23zM24,27H25V28H24zM28,27H29V28H28zM29,27H30V28H29zM31,27H32V28H31zM33,27H34V28H33zM36,27H37V28H36zM37,27H38V28H37zM39,27H40V28H39zM40,27H41V28H40zM42,27H43V28H42zM46,27H47V28H46zM48,27H49V28H48zM3,28H4V29H3zM6,28H7V29H6zM7,28H8V29H7zM8,28H9V29H8zM9,28H10V29H9zM10,28H11V29H10zM11,28H12V29H11zM15,28H16V29H15zM16,28H17V29H16zM20,28H21V29H20zM21,28H22V29H21zM22,28H23V29H22zM24,28H25V29H24zM25,28H26V29H25zM26,28H27V29H26zM27,28H28V29H27zM28,28H29V29H28zM29,28H30V29H29zM30,28H31V29H30zM33,28H34V29H33zM35,28H36V29H35zM36,28H37V29H36zM38,28H39V29H38zM39,28H40V29H39zM42,28H43V29H42zM43,28H44V29H43zM44,28H45V29H44zM45,28H46V29H45zM46,28H47V29H46zM47,28H48V29H47zM49,28H50V29H49zM50,28H51V29H50zM2,29H3V30H2zM4,29H5V30H4zM5,29H6V30H5zM6,29H7V30H6zM10,29H11V30H10zM16,29H17V30H16zM17,29H18V30H17zM21,29H22V30H21zM24,29H25V30H24zM27,29H28V30H27zM29,29H30V30H29zM30,29H31V30H30zM32,29H33V30H32zM33,29H34V30H33zM34,29H35V30H34zM36,29H37V30H36zM37,29H38V30H37zM38,29H39V30H38zM39,29H40V30H39zM40,29H41V30H40zM41,29H42V30H41zM42,29H43V30H42zM45,29H46V30H45zM47,29H48V30H47zM48,29H49V30H48zM49,29H50V30H49zM2,30H3V31H2zM8,30H9V31H8zM15,30H16V31H15zM17,30H18V31H17zM18,30H19V31H18zM19,30H20V31H19zM22,30H23V31H22zM23,30H24V31H23zM26,30H27V31H26zM27,30H28V31H27zM28,30H29V31H28zM29,30H30V31H29zM31,30H32V31H31zM32,30H33V31H32zM33,30H34V31H33zM34,30H35V31H34zM37,30H38V31H37zM38,30H39V31H38zM41,30H42V31H41zM42,30H43V31H42zM44,30H45V31H44zM45,30H46V31H45zM48,30H49V31H48zM49,30H50V31H49zM2,31H3V32H2zM3,31H4V32H3zM6,31H7V32H6zM7,31H8V32H7zM11,31H12V32H11zM12,31H13V32H12zM14,31H15V32H14zM17,31H18V32H17zM18,31H19V32H18zM20,31H21V32H20zM21,31H22V32H21zM22,31H23V32H22zM25,31H26V32H25zM26,31H27V32H26zM30,31H31V32H30zM31,31H32V32H31zM33,31H34V32H33zM34,31H35V32H34zM37,31H38V32H37zM38,31H39V32H38zM43,31H44V32H43zM47,31H48V32H47zM50,31H51V32H50zM4,32H5V33H4zM6,32H7V33H6zM7,32H8V33H7zM8,32H9V33H8zM9,32H10V33H9zM10,32H11V33H10zM12,32H13V33H12zM14,32H15V33H14zM15,32H16V33H15zM16,32H17V33H16zM19,32H20V33H19zM21,32H22V33H21zM22,32H23V33H22zM27,32H28V33H27zM28,32H29V33H28zM29,32H30V33H29zM31,32H32V33H31zM33,32H34V33H33zM34,32H35V33H34zM36,32H37V33H36zM37,32H38V33H37zM40,32H41V33H40zM41,32H42V33H41zM42,32H43V33H42zM44,32H45V33H44zM46,32H47V33H46zM49,32H50V33H49zM50,32H51V33H50zM2,33H3V34H2zM3,33H4V34H3zM11,33H12V34H11zM12,33H13V34H12zM15,33H16V34H15zM16,33H17V34H16zM19,33H20V34H19zM23,33H24V34H23zM26,33H27V34H26zM28,33H29V34H28zM30,33H31V34H30zM31,33H32V34H31zM33,33H34V34H33zM35,33H36V34H35zM36,33H37V34H36zM41,33H42V34H41zM42,33H43V34H42zM43,33H44V34H43zM45,33H46V34H45zM46,33H47V34H46zM47,33H48V34H47zM50,33H51V34H50zM2,34H3V35H2zM4,34H5V35H4zM5,34H6V35H5zM6,34H7V35H6zM7,34H8V35H7zM8,34H9V35H8zM9,34H10V35H9zM10,34H11V35H10zM14,34H15V35H14zM17,34H18V35H17zM18,34H19V35H18zM20,34H21V35H20zM22,34H23V35H22zM24,34H25V35H24zM25,34H26V35H25zM27,34H28V35H27zM28,34H29V35H28zM30,34H31V35H30zM32,34H33V35H32zM35,34H36V35H35zM36,34H37V35H36zM37,34H38V35H37zM38,34H39V35H38zM39,34H40V35H39zM42,34H43V35H42zM46,34H47V35H46zM47,34H48V35H47zM49,34H50V35H49zM50,34H51V35H50zM3,35H4V36H3zM5,35H6V36H5zM7,35H8V36H7zM9,35H10V36H9zM11,35H12V36H11zM12,35H13V36H12zM17,35H18V36H17zM18,35H19V36H18zM21,35H22V36H21zM22,35H23V36H22zM23,35H24V36H23zM24,35H25V36H24zM26,35H27V36H26zM27,35H28V36H27zM31,35H32V36H31zM35,35H36V36H35zM39,35H40V36H39zM44,35H45V36H44zM49,35H50V36H49zM50,35H51V36H50zM2,36H3V37H2zM5,36H6V37H5zM8,36H9V37H8zM9,36H10V37H9zM11,36H12V37H11zM14,36H15V37H14zM15,36H16V37H15zM17,36H18V37H17zM19,36H20V37H19zM20,36H21V37H20zM22,36H23V37H22zM25,36H26V37H25zM26,36H27V37H26zM27,36H28V37H27zM28,36H29V37H28zM31,36H32V37H31zM32,36H33V37H32zM33,36H34V37H33zM34,36H35V37H34zM35,36H36V37H35zM38,36H39V37H38zM40,36H41V37H40zM44,36H45V37H44zM46,36H47V37H46zM49,36H50V37H49zM50,36H51V37H50zM2,37H3V38H2zM4,37H5V38H4zM5,37H6V38H5zM6,37H7V38H6zM7,37H8V38H7zM12,37H13V38H12zM13,37H14V38H13zM14,37H15V38H14zM16,37H17V38H16zM17,37H18V38H17zM18,37H19V38H18zM19,37H20V38H19zM21,37H22V38H21zM23,37H24V38H23zM24,37H25V38H24zM26,37H27V38H26zM28,37H29V38H28zM29,37H30V38H29zM34,37H35V38H34zM37,37H38V38H37zM41,37H42V38H41zM44,37H45V38H44zM46,37H47V38H46zM49,37H50V38H49zM6,38H7V39H6zM7,38H8V39H7zM8,38H9V39H8zM10,38H11V39H10zM11,38H12V39H11zM15,38H16V39H15zM21,38H22V39H21zM22,38H23V39H22zM23,38H24V39H23zM24,38H25V39H24zM25,38H26V39H25zM26,38H27V39H26zM27,38H28V39H27zM28,38H29V39H28zM29,38H30V39H29zM30,38H31V39H30zM31,38H32V39H31zM33,38H34V39H33zM35,38H36V39H35zM36,38H37V39H36zM37,38H38V39H37zM38,38H39V39H38zM39,38H40V39H39zM41,38H42V39H41zM44,38H45V39H44zM45,38H46V39H45zM46,38H47V39H46zM47,38H48V39H47zM2,39H3V40H2zM4,39H5V40H4zM5,39H6V40H5zM6,39H7V40H6zM7,39H8V40H7zM11,39H12V40H11zM16,39H17V40H16zM18,39H19V40H18zM20,39H21V40H20zM23,39H24V40H23zM26,39H27V40H26zM28,39H29V40H28zM34,39H35V40H34zM36,39H37V40H36zM37,39H38V40H37zM38,39H39V40H38zM39,39H40V40H39zM41,39H42V40H41zM44,39H45V40H44zM46,39H47V40H46zM47,39H48V40H47zM49,39H50V40H49zM3,40H4V41H3zM7,40H8V41H7zM8,40H9V41H8zM9,40H10V41H9zM10,40H11V41H10zM12,40H13V41H12zM14,40H15V41H14zM15,40H16V41H15zM17,40H18V41H17zM18,40H19V41H18zM21,40H22V41H21zM22,40H23V41H22zM23,40H24V41H23zM24,40H25V41H24zM25,40H26V41H25zM26,40H27V41H26zM28,40H29V41H28zM34,40H35V41H34zM37,40H38V41H37zM40,40H41V41H40zM41,40H42V41H41zM43,40H44V41H43zM47,40H48V41H47zM49,40H50V41H49zM50,40H51V41H50zM3,41H4V42H3zM4,41H5V42H4zM5,41H6V42H5zM9,41H10V42H9zM14,41H15V42H14zM17,41H18V42H17zM19,41H20V42H19zM20,41H21V42H20zM23,41H24V42H23zM24,41H25V42H24zM27,41H28V42H27zM31,41H32V42H31zM32,41H33V42H32zM34,41H35V42H34zM35,41H36V42H35zM36,41H37V42H36zM38,41H39V42H38zM42,41H43V42H42zM43,41H44V42H43zM44,41H45V42H44zM46,41H47V42H46zM49,41H50V42H49zM50,41H51V42H50zM2,42H3V43H2zM3,42H4V43H3zM4,42H5V43H4zM8,42H9V43H8zM9,42H10V43H9zM11,42H12V43H11zM12,42H13V43H12zM13,42H14V43H13zM14,42H15V43H14zM18,42H19V43H18zM20,42H21V43H20zM21,42H22V43H21zM23,42H24V43H23zM24,42H25V43H24zM25,42H26V43H25zM26,42H27V43H26zM27,42H28V43H27zM28,42H29V43H28zM29,42H30V43H29zM34,42H35V43H34zM36,42H37V43H36zM42,42H43V43H42zM43,42H44V43H43zM44,42H45V43H44zM45,42H46V43H45zM46,42H47V43H46zM47,42H48V43H47zM49,42H50V43H49zM10,43H11V44H10zM11,43H12V44H11zM12,43H13V44H12zM13,43H14V44H13zM14,43H15V44H14zM15,43H16V44H15zM18,43H19V44H18zM19,43H20V44H19zM21,43H22V44H21zM22,43H23V44H22zM23,43H24V44H23zM24,43H25V44H24zM28,43H29V44H28zM29,43H30V44H29zM31,43H32V44H31zM32,43H33V44H32zM33,43H34V44H33zM35,43H36V44H35zM36,43H37V44H36zM38,43H39V44H38zM39,43H40V44H39zM42,43H43V44H42zM46,43H47V44H46zM48,43H49V44H48zM49,43H50V44H49zM50,43H51V44H50zM2,44H3V45H2zM3,44H4V45H3zM4,44H5V45H4zM5,44H6V45H5zM6,44H7V45H6zM7,44H8V45H7zM8,44H9V45H8zM11,44H12V45H11zM14,44H15V45H14zM15,44H16V45H15zM19,44H20V45H19zM21,44H22V45H21zM22,44H23V45H22zM23,44H24V45H23zM24,44H25V45H24zM26,44H27V45H26zM28,44H29V45H28zM30,44H31V45H30zM31,44H32V45H31zM33,44H34V45H33zM35,44H36V45H35zM36,44H37V45H36zM38,44H39V45H38zM40,44H41V45H40zM41,44H42V45H41zM42,44H43V45H42zM44,44H45V45H44zM46,44H47V45H46zM2,45H3V46H2zM8,45H9V46H8zM10,45H11V46H10zM15,45H16V46H15zM16,45H17V46H16zM18,45H19V46H18zM19,45H20V46H19zM21,45H22V46H21zM22,45H23V46H22zM24,45H25V46H24zM28,45H29V46H28zM31,45H32V46H31zM32,45H33V46H32zM33,45H34V46H33zM34,45H35V46H34zM37,45H38V46H37zM38,45H39V46H38zM42,45H43V46H42zM46,45H47V46H46zM48,45H49V46H48zM49,45H50V46H49zM50,45H51V46H50zM2,46H3V47H2zM4,46H5V47H4zM5,46H6V47H5zM6,46H7V47H6zM8,46H9V47H8zM12,46H13V47H12zM14,46H15V47H14zM15,46H16V47H15zM17,46H18V47H17zM20,46H21V47H20zM24,46H25V47H24zM25,46H26V47H25zM26,46H27V47H26zM27,46H28V47H27zM28,46H29V47H28zM30,46H31V47H30zM31,46H32V47H31zM32,46H33V47H32zM33,46H34V47H33zM35,46H36V47H35zM37,46H38V47H37zM38,46H39V47H38zM39,46H40V47H39zM41,46H42V47H41zM42,46H43V47H42zM43,46H44V47H43zM44,46H45V47H44zM45,46H46V47H45zM46,46H47V47H46zM48,46H49V47H48zM50,46H51V47H50zM2,47H3V48H2zM4,47H5V48H4zM5,47H6V48H5zM6,47H7V48H6zM8,47H9V48H8zM10,47H11V48H10zM11,47H12V48H11zM12,47H13V48H12zM14,47H15V48H14zM20,47H21V48H20zM22,47H23V48H22zM23,47H24V48H23zM24,47H25V48H24zM26,47H27V48H26zM27,47H28V48H27zM29,47H30V48H29zM31,47H32V48H31zM33,47H34V48H33zM34,47H35V48H34zM35,47H36V48H35zM42,47H43V48H42zM46,47H47V48H46zM49,47H50V48H49zM50,47H51V48H50zM2,48H3V49H2zM4,48H5V49H4zM5,48H6V49H5zM6,48H7V49H6zM8,48H9V49H8zM13,48H14V49H13zM19,48H20V49H19zM21,48H22V49H21zM25,48H26V49H25zM26,48H27V49H26zM28,48H29V49H28zM29,48H30V49H29zM35,48H36V49H35zM36,48H37V49H36zM37,48H38V49H37zM40,48H41V49H40zM41,48H42V49H41zM46,48H47V49H46zM47,48H48V49H47zM50,48H51V49H50zM2,49H3V50H2zM8,49H9V50H8zM13,49H14V50H13zM14,49H15V50H14zM16,49H17V50H16zM17,49H18V50H17zM19,49H20V50H19zM20,49H21V50H20zM24,49H25V50H24zM27,49H28V50H27zM28,49H29V50H28zM29,49H30V50H29zM31,49H32V50H31zM32,49H33V50H32zM33,49H34V50H33zM34,49H35V50H34zM36,49H37V50H36zM41,49H42V50H41zM43,49H44V50H43zM44,49H45V50H44zM45,49H46V50H45zM46,49H47V50H46zM47,49H48V50H47zM2,50H3V51H2zM3,50H4V51H3zM4,50H5V51H4zM5,50H6V51H5zM6,50H7V51H6zM7,50H8V51H7zM8,50H9V51H8zM10,50H11V51H10zM11,50H12V51H11zM13,50H14V51H13zM18,50H19V51H18zM20,50H21V51H20zM21,50H22V51H21zM22,50H23V51H22zM27,50H28V51H27zM28,50H29V51H28zM29,50H30V51H29zM33,50H34V51H33zM37,50H38V51H37zM42,50H43V51H42zM44,50H45V51H44zM46,50H47V51H46zM47,50H48V51H47zM49,50H50V51H49zM50,50H51V51H50z" id="qr-path" fill="#000000" fill-opacity="1" fill-rule="nonzero" stroke="none" /></svg><div style="margin-top:10px;font-size:20px;font-weight:900;color:var(--blued)">#スタックチャンザギャザリング</div><div style="font-size:13px;color:var(--ink2)">読み取ると X が開いて、ハッシュタグが入っています</div></div>` +
            K.memo('進行役も1人の参加者として、いちばん前で見ます。時間が来たら「ありがとうございます！続きはあとで」で次の人へ。') },

    /* ───────── C ───────── */
    { ch: 4, tag: '失敗カタログ', cover: { num: 'C', title: '失敗カタログ', sub: '16分 / ★ここが差別化' },
      talk: `<b>他の AI イベントは「できます」を見せます。「壊れ方」を配るところはあまりありません。</b><br>
             詰まって抜けるたびに書いた記録から、<b>今日は3件だけ。</b>残りは配布物に畳んであるので、気づいた失敗や良いプラクティスは交流会で。` },

    { ch: 4, tag: '失敗1 曲を止めても踊り続けた（原因は自分）',
      talk: `<b>1件目、原因は自分でした。</b>3〜4分。実機を指しながら。<br>
             ★A-2 で踊らなかったときは、ここに繋げます（「会場の音量だと閾値が足りない」のと同じ場所の話）。`,
      html: K.head('マイクが拾っていたのは、<span class="r">自分のサーボ音。</span>') +
            `<div class="panel"><svg viewBox="0 0 760 230" role="img" aria-label="失敗1の自己増幅ループ：首が動くとサーボ音が出て、マイクが拾い、拍として検出され、また踊る。4秒ごとに首を止めて測ることで輪を切った" style="width:100%;height:auto;display:block;font-family:inherit;font-weight:700">
  <defs><marker id="ar6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#4E7590"/></marker></defs>
  <rect x="20" y="30" width="150" height="70" rx="16" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="95" y="58" text-anchor="middle" font-size="13" fill="#173A54">首が動く</text>
  <text x="95" y="80" text-anchor="middle" font-size="11" fill="#4E7590">サーボ音（音楽の40倍）</text>
  <rect x="220" y="30" width="150" height="70" rx="16" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="295" y="58" text-anchor="middle" font-size="13" fill="#173A54">マイクが拾う</text>
  <text x="295" y="80" text-anchor="middle" font-size="11" fill="#4E7590">同じ体に載っている</text>
  <rect x="420" y="30" width="150" height="70" rx="16" fill="#FFE2E2" stroke="#FF6B6B" stroke-width="3"/>
  <text x="495" y="58" text-anchor="middle" font-size="13" fill="#173A54">「拍だ」と検出</text>
  <text x="495" y="80" text-anchor="middle" font-size="11" fill="#C43D3D">動きは拍に同期している</text>
  <rect x="600" y="30" width="140" height="70" rx="16" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="670" y="58" text-anchor="middle" font-size="13" fill="#173A54">踊り続ける</text>
  <text x="670" y="80" text-anchor="middle" font-size="11" fill="#4E7590">曲を止めても</text>
  <line x1="170" y1="65" x2="218" y2="65" stroke="#4E7590" stroke-width="3" marker-end="url(#ar6)"/>
  <line x1="370" y1="65" x2="418" y2="65" stroke="#4E7590" stroke-width="3" marker-end="url(#ar6)"/>
  <line x1="570" y1="65" x2="598" y2="65" stroke="#4E7590" stroke-width="3" marker-end="url(#ar6)"/>
  <path d="M670 100 Q 670 150 380 150 Q 95 150 95 102" fill="none" stroke="#C43D3D" stroke-width="3" marker-end="url(#ar6)"/>
  <text x="380" y="140" text-anchor="middle" font-size="12" fill="#C43D3D">踊るほど拍が立つ（自己増幅）</text>
  <rect x="300" y="168" width="160" height="44" rx="12" fill="#DCF5DF" stroke="#55C96A" stroke-width="3"/>
  <text x="380" y="188" text-anchor="middle" font-size="12" fill="#2E8C42">4秒ごとに首を止めて測る</text>
  <text x="380" y="204" text-anchor="middle" font-size="10" fill="#2E8C42">止まっている間だけ拍を見る＝「聴き入る」</text>
  <line x1="380" y1="168" x2="380" y2="152" stroke="#55C96A" stroke-width="3"/>
  <text x="392" y="164" font-size="14" fill="#2E8C42">✂</text>
</svg></div>` +
            K.cards([
              { k: '起きたこと', v: '音楽を止めたのに踊りが終わらない', d: '首が動くと音量が<b>40倍</b>。音楽より大きい。しかも動きは拍に同期しているので「規則正しい拍」として検出され、<b>踊るほど拍が立つ</b>自己増幅ループ' },
              { k: 'なぜハマるか', v: '音源は外にあると当然に思う', d: '自分が音を出す側でもあることは、設計図のどこにも出てこない' },
              { k: 'どう抜けたか', v: '4秒ごとに首を止めて測る', d: '止まっている間だけ拍を測る。見た目には「聴き入る」演出になった。<b>欠点を演出に変えた</b>' },
              { k: '一般化', v: 'センサーとアクチュエータが同じ体に載ると、必ず自己観測が混ざる', d: '打てる手は3つだけ：物理的に離す／自分の出力を差し引く／動きを止めて測る' },
            ]) },

    { ch: 4, tag: '失敗2 見張ろうとしたら壊れた（原因は観測）',
      talk: `<b>2件目、原因は「見に行ったこと」でした。</b>3〜4分。<br>
             不安なほど細かく見たくなる。<b>監視は無害に思える</b>、という話です。`,
      html: K.head('測るために、<span class="o">壊していた。</span>') +
            `<div class="panel"><svg viewBox="0 0 760 230" role="img" aria-label="失敗2の悪循環：監督が0.4秒ごとにコマンドを送り、音声フレームを押しのけ、拍が取れなくなり、監督が止まったと判断してさらにコマンドを送る。監督を消して輪を切った" style="width:100%;height:auto;display:block;font-family:inherit;font-weight:700">
  <defs><marker id="ar7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#4E7590"/></marker></defs>
  <rect x="20" y="30" width="160" height="70" rx="16" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="100" y="58" text-anchor="middle" font-size="13" fill="#173A54">監督が見に行く</text>
  <text x="100" y="80" text-anchor="middle" font-size="11" fill="#4E7590">0.4秒ごとにコマンド</text>
  <rect x="220" y="30" width="160" height="70" rx="16" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="300" y="58" text-anchor="middle" font-size="13" fill="#173A54">同じ1本の線を通る</text>
  <text x="300" y="80" text-anchor="middle" font-size="11" fill="#4E7590">音声フレームが押しのけられる</text>
  <rect x="420" y="30" width="150" height="70" rx="16" fill="#FFE2E2" stroke="#FF6B6B" stroke-width="3"/>
  <text x="495" y="58" text-anchor="middle" font-size="13" fill="#173A54">拍が取れない</text>
  <text x="495" y="80" text-anchor="middle" font-size="11" fill="#C43D3D">音が欠けるから</text>
  <rect x="600" y="30" width="140" height="70" rx="16" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="670" y="58" text-anchor="middle" font-size="13" fill="#173A54">「止まった」と判断</text>
  <text x="670" y="80" text-anchor="middle" font-size="11" fill="#4E7590">畳むコマンドを送る</text>
  <line x1="180" y1="65" x2="218" y2="65" stroke="#4E7590" stroke-width="3" marker-end="url(#ar7)"/>
  <line x1="380" y1="65" x2="418" y2="65" stroke="#4E7590" stroke-width="3" marker-end="url(#ar7)"/>
  <line x1="570" y1="65" x2="598" y2="65" stroke="#4E7590" stroke-width="3" marker-end="url(#ar7)"/>
  <path d="M670 100 Q 670 150 380 150 Q 100 150 100 102" fill="none" stroke="#C43D3D" stroke-width="3" marker-end="url(#ar7)"/>
  <text x="380" y="140" text-anchor="middle" font-size="12" fill="#C43D3D">壊れるほどコマンドが増え、増えるほど壊れる</text>
  <rect x="290" y="168" width="180" height="44" rx="12" fill="#DCF5DF" stroke="#55C96A" stroke-width="3"/>
  <text x="380" y="188" text-anchor="middle" font-size="12" fill="#2E8C42">監督そのものを消す</text>
  <text x="380" y="204" text-anchor="middle" font-size="10" fill="#2E8C42">状態を1か所に置いたら、見張りが要らなくなった</text>
  <line x1="380" y1="168" x2="380" y2="152" stroke="#55C96A" stroke-width="3"/>
  <text x="392" y="164" font-size="14" fill="#2E8C42">✂</text>
</svg></div>` +
            K.cards([
              { k: '起きたこと', v: '「音が止まったら畳む」監督を 0.4秒ごとに回した', d: 'すると<b>拍の検出そのものが壊れた</b>。音声と制御が同じ経路（1本の WebSocket）を通っていて、コマンドが音声フレームを押しのけていた' },
              { k: '悪循環', v: '壊れるほどコマンドが増え、増えるほど壊れた', d: '拍が取れない → 監督が「止まった」と判断 → 畳むコマンド → さらに音声が欠ける' },
              { k: 'どう抜けたか', v: '監督を消した', d: '「いまどうあるべきか」を1か所に置いたら（B③）、見張り役そのものが要らなくなった' },
              { k: '一般化', v: '見る頻度と、そこから出る指示の量は、対象の性能を削る', d: '二重に判定しない。測る前に「測ること自体が相手に何をするか」を1回考える' },
            ]) },

    { ch: 4, tag: '失敗3 派手にした瞬間に落ちた（仕様の1行）',
      talk: `<b>3件目、原因は仕様表の1行でした。</b>3〜4分。LED テープを指しながら。<br>
             ★A-3 でバーストを 100% にしたとき、テープが白全開にならないのはこのためです（上限 35%）。`,
      html: K.head('繋がることと、使えることは<span class="r">別。</span>') +
            K.cards([
              { k: '起きたこと', v: '白で全開にすると本体ごと再起動', d: '同梱の LED テープ30粒は全開で <b>5V 1.8A</b>。本体の Grove ポートからは取れない。電圧が落ちて実機が落ちる。<b>一番派手にした瞬間に</b>' },
              { k: 'なぜハマるか', v: 'コネクタが刺さる＝対応済みだと感じる', d: '同梱品ならなおさら疑わない。ケーブルも同梱で、追加購入なしで繋がった' },
              { k: 'どう抜けたか', v: '最大値を先に計算して、ソフト側に上限を持たせた', d: '明るさの上限 35%。白は使わずミント寄りに。<b>派手さは色の変化と速さで出す</b>' },
              { k: '一般化', v: '仕様表の1行を、繋ぐ前に1回読む', d: '「繋がった」は「使える」ではない。最大電流・最大電圧・最大長は、繋ぐ前の3項目' },
            ]) },

    { ch: 4, tag: '残りは、交流会で',
      talk: `<b>ここで深掘りを止めます。</b>言うことは2つ。「<b>エキスパートのみなさま、うちではこう壊れた、をぜひ</b>」「<b>これからやりたい人は、知りたいことを聞かせてください</b>」。<br>
             配布物の失敗カタログに型ごとに畳んであります。型が分かると、まだ踏んでいない穴も避けられます。`,
      html: K.head('気づいた失敗や良いプラクティスは、<em>交流会で。</em>') +
            K.cards([
              { k: 'エキスパートのみなさまへ', v: '「うちではこう壊れた」を聞かせてください', d: '持ってきたスタックチャンの前で。他の人の壊れ方が、いちばん学べます' },
              { k: 'これからやりたい人へ', v: '「知りたいこと」を聞かせてください', d: 'まだ何も持っていなくて大丈夫。「まず何を買う？」「どこで詰まる？」で十分。進行役かエキスパートが、その場で答えます' },
              { k: '配布物', v: '失敗カタログ', d: '型ごとに畳んであります：黙って落ちる／犯人は自分／測り方／相手に見えていない／直感と逆／計画が追い越されていた' },
              { k: '質疑 bot', v: 'スマホから「○○で詰まった」と聞ける', d: '記録と配布物の範囲で答えます。答えられないときは「記憶にありません」と言います' },
            ]) +
            K.memo('★言い切る一言：「<b>できたことは持ち帰れません。壊れ方は持ち帰れます。</b>」') },

    /* ───────── D ───────── */
    { ch: 5, tag: '手を動かす', cover: { num: 'D', title: '動かす', sub: '渡し方を覚えてもらう' },
      talk: `<b>このブロック自体がメッセージです。</b><br>
             手順は人間に渡しません。<b>エージェントに渡します。人間が覚えるのは「渡し方」のほうです。</b><br>
             声の会話は今日は進行役からは見せません。持ってきたスタックチャンで会話できるものがあれば、そちらで。` },

    { ch: 5, tag: '① リポジトリを渡す（10分）',
      talk: `<b>大きな手順は6つ。止まりやすいのは、アンバインドと焼くの間です。</b><br>
             「<b>一度、喋らなくなります</b>」を知ってから始めてもらいます。知らずに入ると「自分が壊した」と思って、そこで止まります。`,
      html: K.head('今日は<em>1まで。</em>') +
            K.cards([
              { k: '買うもの', v: 'M5Stack K151<br>一択（¥18,150）', d: 'CoreS3・サーボ2基・カメラ・マイク・3ゾーンタッチ・LED 12個・バッテリー 550mAh。<b>USB ポートは2つ。本体側が書き込み、台側は給電だけ</b>' },
              { k: '6手順・実測', v: '30 / 20 / 10 / 60 / 20 分 / ずっと', d: '①出荷時で遊ぶ ②まるごと吸い出す ③アンバインド ④焼く ⑤gateway ⑥作り込む。⑤まで <b>2時間20分</b>' },
              { k: '渡し方', v: 'この一文を、自分の Claude Code に貼る', d: '「このリポジトリを読んで、僕の状況に合わせて手順を出して。持っているもの: K151／Mac。いまの状態: 箱を開けたところ。今日やりたいこと: 出荷時のまま喋らせるところまで。詰まったところは docs/learnings.md に全部書いてあるので、先に読んでから答えて」' },
            ]) +
            K.memo('★17分で焼くと事故になります。<b>今日やるのは「出荷時のまま喋らせる」まで。</b>持っていない人は、進行役の実機で見る。買うかどうかは見てから決めればよい。') },

    { ch: 5, tag: '① ★渡す前に外したもの（1.5分）',
      talk: `<b>QR を配った瞬間、こちらは「配る側」になります。</b>その前にやったことを見せます。<br>
             公開する前に <code>scripts/secret_scan.py</code> を通しています。名前ではなく<b>形</b>で探します。`,
      html: K.head('危ないのは鍵ではなく、<span class="r">ログ。</span>') +
            K.cards([
              { k: '形で探す', v: 'sk-…<br>ghp_…<br>32桁の16進', d: '名前（API_KEY=）で探すと、変数名を変えただけで抜ける' },
              { k: '入れないもの', v: '名簿<br>録音<br>文字起こし<br>NVS の退避', d: '<b>会話ログは作業ファイルの顔をしているのに、中に本名と雑談が入っている</b>。NFC の名簿（人名）は git に入れず、手で運ぶ' },
              { k: '取り消せない', v: '一度 push したら戻らない', d: 'GitHub から消しても、clone された分と履歴は残る。だから<b>配る前に機械に見せる</b>' },
            ]) +
            K.quote('鍵は形が決まっているので目に付きます。会話ログは、作業ファイルの顔をしているのに、中に本名と雑談が入っている。') },

    { ch: 5, tag: '② 三本立て（残り約7分）',
      talk: `<b>リポジトリを渡したあとは、自分のペースで。</b>進行役は机を回ります。持ってきた人には、黙々派の机で相談に乗ってもらえるとありがたい、と一言。`,
      html: K.cards([
              { k: '黙々派', v: 'エージェントと文字で', d: 'リポジトリを読ませて、自分の企画を詰める。質疑 bot（スマホ）にも「今日のこと」を聞ける' },
              { k: '話す派', v: 'DJ 機材を触る', d: '割り当て表を見ながら、つまみ・パッド・フェーダーを自由に。「自分ならどのつまみに何を割り当てますか」' },
              { k: '見る派', v: 'お披露目スペースで、持ってきた人と話す', d: 'お披露目会で聞けなかったことを、そのスタックチャンの前で' },
            ]) +
            K.memo('質疑 bot は道具を持たない作りです（読む・書く・実行の口が無い）。答えるのは配布物と記録の範囲だけ。5回/分の制限と、秘密の形をした文字列を出さないフィルタ。<b>「AI を使って中身を吸い出しに来る」前提で設計しました。</b>') },

    /* ───────── 交流 ───────── */
    { ch: 6, tag: '交流', cover: { num: '∞', title: '交流', sub: 'みんなで自由に。エージェントも一緒に、ロボットもね' },
      talk: `<b>最後は自由時間です。</b>冒頭の1分だけ、背景に図を1枚出します。<br>
             そのあとは、お披露目スペース・DJ 機材・黙々の机、どこでも。エージェントも一緒に、ロボットもね。` },

    { ch: 6, tag: '② 最後に図を1枚',
      talk: `<b>説明はしません。順番に指すだけです。</b>背景（iPad）に図を1枚。左に人、右に実機、真ん中に AI、下に机。`,
      html: K.todo([
              { title: '左を指す', body: '「さっき、つまみを回しましたよね。あれが左です」' },
              { title: '右を指す', body: '「踊っていたのが、右です」' },
              { title: '真ん中を指す', body: '「あいだにいるのが、AI です」' },
              { title: '机を指す', body: '「出会った場所は、この机の上でした」' },
            ]) +
            K.memo('A で触った手、B④ で回したつまみ、D で話した声。<b>今日やったことが、この1枚に全部入っています。</b>') },

    /* ───────── 締 ───────── */
    { ch: 7, tag: '最後のひとこと',
      talk: `<b>ここは言い切ります。</b>説明を足すと、全部ぼやけてしまいます。`,
      html: K.head('素材は、<em>自分が作ったものでなくていい。</em>') +
            K.lead('<b>選ぶ順番と、混ぜ方と、止めるタイミングに、その人が出ます。</b>ファームも、モデルも、曲も、借り物でした。') +
            K.rule() +
            K.head('さあ、<span class="o">始めましょう。</span>') },

    { ch: 7, tag: '落ちたときの言い換え',
      talk: `<b>慌てなくて大丈夫です。</b>どれも、そのまま話に繋がります。切り分けは <code>./scripts/rescue.sh</code>、実機の言い分は <code>--serial</code>。`,
      html: K.cards([
              { k: '踊りが変', v: '「いま聴き入っています」', d: '4秒ごとに首を止めて測る作り。そのまま失敗1の話へ' },
              { k: '踊らない', v: '「会場の音量だと閾値が足りません」', d: '→ 失敗1（サーボ音）に繋げる。感度を上げると悪化する（0.2 が最良だった）' },
              { k: '背景が出ない', v: '致命ではない', d: '実機は動く。iPad を MacBook の Wi-Fi に繋ぎ直して QR を読み直す' },
              { k: '実機が落ちた', v: '電源を入れ直す（顔まで約10〜35秒）', d: 'OTA スタブ → gateway の順で来る。30秒は待つ。それでもダメなら<b>デモ録画に切り替える</b>（★録画は必ず持っていく）' },
            ]) },

    { ch: 7, tag: '★これだけは守りたいこと',
      talk: `<b>いってらっしゃい。</b>`,
      html: K.todo([
              { title: '用語を先に出さない', body: '体験してから、用語の共有として名前を伝えます' },
              { title: '自慢に聞こえる言い方をしない', body: '手元を指して、感想は相手に言ってもらいます。「できて当たり前」の前提も置きません' },
              { title: '説明を先に足さない', body: '触ってもらってから、名前を教えます' },
              { title: '電源が入ったまま、首を手で回さない', body: 'ハードが壊れます' },
              { title: '会場の Wi-Fi に繋がない', body: '当日は MacBook が出す Wi-Fi で、机の上で完結します。外に出る通信はゼロ、が主張そのもの' },
            ]) },
  ],
};
