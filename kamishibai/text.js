/* 当日の台本 — 進行役が1枚ずつ送る。
   ★参加者には配らない（進行役の手元用）。
   直し方: このファイルを直して push → GitHub Actions が index.html を組み直す（kamishibai/README.md）
   数字はすべて実測（2026-09、K151・Mac）。出典は stack-chan-DJ の docs/ と配布物10枚。 */

const CONTENT = {
  brand: { name: 'ｽﾀｯｸﾁｬﾝ交流会', sub: 'Crypto Cafe & Bar' },
  guide: { still: '@@assets/stackchan.png@@', face: '@@assets/stackchan-face.png@@' },
  sound: 'chip',   // ぴこぴこ音。ｽﾀｯｸﾁｬﾝに寄せている
  chapters: ['序', 'A', '基本', 'デモ', 'お披露目', 'C', 'D', '交流', '締'],
  labels: { next: 'つぎへ', prev: 'もどる', start: 'はじめる', end: 'いってらっしゃい' },

  steps: [
    /* ───────── 表紙 ───────── */
    { ch: 0, tag: 'ｽﾀｯｸ･ｻﾞ･ｷﾞｬｻﾞﾘﾝｸﾞ',
      cover: { num: '9/29', title: 'ｽﾀｯｸ･ｻﾞ･ｷﾞｬｻﾞﾘﾝｸﾞ',
               sub: 'Crypto Cafe & Bar（恵比寿）／ 19:00–22:00' },
      onShow(){ if(!window.__tapOpen){ window.__tapOpen = 1; document.addEventListener('click', e => { if(e.target.closest('a')) return; const c = e.target.closest('.card,.tdo,.goal'); if(c) c.classList.toggle('open'); }); } },
      talk: `<b>ｽﾀｯｸ･ｻﾞ･ｷﾞｬｻﾞﾘﾝｸﾞの台本です。</b>進行役が手元で1枚ずつ送ります。<br>
             左上の章バーが序〜締、右上がいま何枚目か。左下の顔を押すと、その画面で<b>実際に言うこと・やること</b>が出ます。` },

    { ch: 0, tag: 'アジェンダ',
      talk: `<b>ここは全体の流れです。</b>DJ が鳴るのは A だけ。声の会話のデモは、今日は進行役からはやりません（間に合わなかったので正直に）。`,
      html: `<style>.cards{grid-template-columns:1fr !important}.card .d,.tdo .td,.goal .gd{display:none}.card.open .d,.tdo.open .td,.goal.open .gd{display:block}.card,.tdo,.goal{cursor:pointer}.card .v::after,.tdo .tt::after,.goal .gt::after{content:" ▾";color:var(--ink3);font-size:.75em}.card.open .v::after,.tdo.open .tt::after,.goal.open .gt::after{content:" ▴"}.panel svg line,.panel svg path{stroke-dasharray:7 5;animation:kflow 1.1s linear infinite}.panel svg path[d^='M0 0L10']{stroke-dasharray:none;animation:none}@keyframes kflow{to{stroke-dashoffset:-12}}.panel svg rect,.panel svg circle{transform-box:fill-box;transform-origin:center;animation:kpop .5s cubic-bezier(.2,1.4,.4,1) both}.panel svg text{animation:kfade .6s ease both}.panel svg rect:nth-of-type(1),.panel svg circle:nth-of-type(1){animation-delay:60ms}.panel svg text:nth-of-type(1){animation-delay:145ms}.panel svg rect:nth-of-type(2),.panel svg circle:nth-of-type(2){animation-delay:120ms}.panel svg text:nth-of-type(2){animation-delay:170ms}.panel svg rect:nth-of-type(3),.panel svg circle:nth-of-type(3){animation-delay:180ms}.panel svg text:nth-of-type(3){animation-delay:195ms}.panel svg rect:nth-of-type(4),.panel svg circle:nth-of-type(4){animation-delay:240ms}.panel svg text:nth-of-type(4){animation-delay:220ms}.panel svg rect:nth-of-type(5),.panel svg circle:nth-of-type(5){animation-delay:300ms}.panel svg text:nth-of-type(5){animation-delay:245ms}.panel svg rect:nth-of-type(6),.panel svg circle:nth-of-type(6){animation-delay:360ms}.panel svg text:nth-of-type(6){animation-delay:270ms}.panel svg rect:nth-of-type(7),.panel svg circle:nth-of-type(7){animation-delay:420ms}.panel svg text:nth-of-type(7){animation-delay:295ms}.panel svg rect:nth-of-type(8),.panel svg circle:nth-of-type(8){animation-delay:480ms}.panel svg text:nth-of-type(8){animation-delay:320ms}.panel svg rect:nth-of-type(9),.panel svg circle:nth-of-type(9){animation-delay:540ms}.panel svg text:nth-of-type(9){animation-delay:345ms}.panel svg rect:nth-of-type(10),.panel svg circle:nth-of-type(10){animation-delay:600ms}.panel svg text:nth-of-type(10){animation-delay:370ms}.panel svg rect:nth-of-type(11),.panel svg circle:nth-of-type(11){animation-delay:660ms}.panel svg text:nth-of-type(11){animation-delay:395ms}.panel svg rect:nth-of-type(12),.panel svg circle:nth-of-type(12){animation-delay:720ms}.panel svg text:nth-of-type(12){animation-delay:420ms}.panel svg rect:nth-of-type(13),.panel svg circle:nth-of-type(13){animation-delay:780ms}.panel svg text:nth-of-type(13){animation-delay:445ms}.panel svg rect:nth-of-type(14),.panel svg circle:nth-of-type(14){animation-delay:840ms}.panel svg text:nth-of-type(14){animation-delay:470ms}.panel svg rect:nth-of-type(15),.panel svg circle:nth-of-type(15){animation-delay:900ms}.panel svg text:nth-of-type(15){animation-delay:495ms}.panel svg rect:nth-of-type(16),.panel svg circle:nth-of-type(16){animation-delay:960ms}.panel svg text:nth-of-type(16){animation-delay:520ms}.panel svg rect:nth-of-type(17),.panel svg circle:nth-of-type(17){animation-delay:1020ms}.panel svg text:nth-of-type(17){animation-delay:545ms}.panel svg rect:nth-of-type(18),.panel svg circle:nth-of-type(18){animation-delay:1080ms}.panel svg text:nth-of-type(18){animation-delay:570ms}.panel svg rect:nth-of-type(19),.panel svg circle:nth-of-type(19){animation-delay:1140ms}.panel svg text:nth-of-type(19){animation-delay:595ms}.panel svg rect:nth-of-type(20),.panel svg circle:nth-of-type(20){animation-delay:1200ms}.panel svg text:nth-of-type(20){animation-delay:620ms}.panel svg rect:nth-of-type(21),.panel svg circle:nth-of-type(21){animation-delay:1260ms}.panel svg text:nth-of-type(21){animation-delay:645ms}.panel svg rect:nth-of-type(22),.panel svg circle:nth-of-type(22){animation-delay:1320ms}.panel svg text:nth-of-type(22){animation-delay:670ms}.panel svg rect:nth-of-type(23),.panel svg circle:nth-of-type(23){animation-delay:1380ms}.panel svg text:nth-of-type(23){animation-delay:695ms}.panel svg rect:nth-of-type(24),.panel svg circle:nth-of-type(24){animation-delay:1440ms}.panel svg text:nth-of-type(24){animation-delay:720ms}@keyframes kpop{from{opacity:0;transform:scale(.85)}to{opacity:1;transform:none}}@keyframes kfade{from{opacity:0}to{opacity:1}}.step.on .panel svg line,.step.on .panel svg path{animation-play-state:running}</style>` +
            K.head('触って、開けて、<em>語って、作る。</em>') +
            K.todo([
              { title: 'A 掴み', body: 'まず、さわる時間。1人ずつ手のひらに乗せて、なでてもらいます。曲を流すと踊ります' },
              { title: 'B 基本的な構成', body: '用語を合わせる。何を繋げば始められるか。ファームウェアとは何か、出荷時はどうか、他に何があって今回はどれを選んだか。カスタマイズの3つの入口。有識者の方は、プラクティスの補足をぜひ' },
              { title: 'B+ こんなことやってみた', body: '「AI を DJ する、AI と DJ する」。入力はキーボードや声ではなく DJ 台。なぜそうしたか、中で何が起きているか、どう作ったか' },
              { title: '♥ 持ってきたスタックチャンのお披露目会！', body: '受付で並べてもらったスタックチャンを、持ち主が2分で。名前 → 推しポイント（実演30秒）→ 一言。X で #ｽﾀｯｸﾁｬﾝｻﾞｷﾞｬｻﾞﾘﾝｸﾞ も' },
              { title: 'C 失敗事例', body: '失敗体験を、楽しく語ろう。サーボ音で踊り続けた／監視で壊した／LED で電源が落ちた、の3つ。そのあとはみんなの「うちではこう壊れた」' },
              { title: 'D 動かす', body: 'スターターと始め方の地図を渡します。自分のエージェントに読ませて、それぞれのペースで' },
              { title: '交流', body: 'みんなで交流・意見交換・作る。みんな自由に。エージェントも一緒に、ロボットもね' },
            ]) },

    /* ───────── 序 ───────── */
    { ch: 0, tag: '全体の構成',
      talk: `<b>アジェンダの次に、この1枚。</b>左が入口、真ん中が MacBook 1台、右が出口。箱を押すと1行ずつ説明が出ます。詳しい話は基本的な構成と事例で。`,
      html: K.head('信号は左から右へ。<em>考えているのは真ん中の1台。</em>') +
            `<div class="panel"><svg viewBox="0 0 760 470" role="img" aria-label="全体の構成：入口の機材と実機からの信号が MacBook の gateway と console に集まり、頭脳（音声認識・言語モデル・音声合成）を経て、実機の顔・首・声・LED と背景に戻る" style="width:100%;height:auto;display:block;font-family:inherit;font-weight:700">
  <defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#4E7590"/></marker></defs>
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
  <line x1="188" y1="90" x2="256" y2="176" stroke="#4E7590" stroke-width="2" marker-end="url(#ar)"/>
  <text x="196" y="122" font-size="11" fill="#4E7590">USB MIDI</text>
  <line x1="188" y1="140" x2="256" y2="190" stroke="#4E7590" stroke-width="2" stroke-dasharray="6 5" marker-end="url(#ar)"/>
  <text x="196" y="172" font-size="11" fill="#4E7590">拍を推定</text>
  <line x1="188" y1="370" x2="256" y2="110" stroke="#4E7590" stroke-width="2" marker-end="url(#ar)"/>
  <text x="192" y="250" font-size="11" fill="#4E7590">Wi-Fi</text>
  <line x1="516" y1="100" x2="584" y2="120" stroke="#4E7590" stroke-width="2" marker-end="url(#ar)"/>
  <text x="522" y="90" font-size="11" fill="#4E7590">Wi-Fi</text>
  <line x1="516" y1="200" x2="584" y2="350" stroke="#4E7590" stroke-width="2" marker-end="url(#ar)"/>
  <text x="522" y="290" font-size="11" fill="#4E7590">同じ LAN</text>
  <line x1="386" y1="136" x2="386" y2="152" stroke="#4E7590" stroke-width="2" marker-end="url(#ar)" marker-start="url(#ar)"/>
  <line x1="386" y1="236" x2="386" y2="252" stroke="#4E7590" stroke-width="2" marker-end="url(#ar)" marker-start="url(#ar)"/>
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
      talk: `<b>アジェンダのあとに、みんなに向けて読み上げます。</b>ここは段取りではなく、来てくれた人へのメッセージです。5つの見出しを読んで、開いた文を1つずつ。`,
      html: K.head('帰り道に、<em>こう思っていたら大成功。</em>') +
            K.goals([
              { title: '私もやってみたい',            body: '今日は「できます」を見せる会ではありません。始め方と、詰まる場所を先にお渡しします。帰ったら、箱を開けるところから一緒に始められます', color: 'var(--blue)' },
              { title: 'あー、聞いておいてよかった',  body: '知らずに使うと損すること ── 声やカメラがどこへ行くか、焼いても消えない設定、同梱の LED の電源 ── を先にお話しします。ここで聞いた分だけ、遠回りが減ります', color: 'var(--grass)' },
              { title: '家に帰ったらこれをしよう',    body: '今夜できる1手を、具体的に持って帰ってください。リポジトリを自分のエージェントに読ませて、出荷時のまま喋らせる。30分です。詰まったら、僕が踏んだ穴はもう中に書いてあります', color: 'var(--ora)' },
              { title: 'またこのイベントに来たい',    body: '今日の話は「僕の場合」です。次はあなたの場合を聞かせてください。持ってきてくださったスタックチャンの話が、今日いちばんの見どころです', color: 'var(--pur)' },
              { title: 'こんな人たちと会えてよかった・こんなの見つけてよかった', body: '同じものが好きな人が、同じ机にいます。配布物もスターターも失敗の記録も、全部そのまま持ち帰ってください。今日は来てくださって、ありがとうございます', color: 'var(--red)' },
            ]) +
            K.cards([
              { k: 'はじめての方へ', v: 'さわってみましょう。分からないところは、その場で聞いてください', d: '分からないまま来て、分からないまま触って大丈夫です。僕も9月8日に箱を開けるまで、全部分かりませんでした。用語は、体験のあとで一緒に揃えます' },
              { k: '持ってきてくださった方へ', v: 'あなたのスタックチャンが、今日の主役です', d: '受付の横に並べてください。デモのあとに、大好きなところを2分だけ聞かせてください。うまくいっていないところも、そのまま。堅苦しいことは何もありません' },
            ]) },

    { ch: 0, tag: 'お披露目スペース（受付の横）',
      talk: `<b>この画面は、来てくれた人に向けた言葉です。</b>段取りはここに：受付の横に机1つ・電源タップ・名札カード10枚・ペン。持ってきた人に並べてもらい、1台ずつ写真を撮る（お披露目会で背景に出す）。NFC の受付はこの横。`,
      html: K.head('持ってきたスタックチャンは、<em>まず並べてください。</em>') +
            K.lead('<b>あなたのスタックチャンが、今日の主役です。</b>') +
            K.cards([
              { k: '並べるだけで OK', v: '受付の横の机に、電源を入れて置いてください', d: '名札カードに3行だけ：名前／中身（分かる範囲で）／一言。触っていいかどうかも ○× で。書けない欄は空で大丈夫です' },
              { k: 'あとで2分だけ', v: '事例のあとに、大好きなところを聞かせてください', d: '発表ではなく、お披露目です。「顔がかわいい」「この動きが好き」で十分。出たくない方は、並べてくださるだけでも嬉しいです' },
              { k: '写真を1枚', v: '並んだスタックチャンを、撮らせてください', d: 'お披露目会のとき、背景の大きな画面に出します。X に上げるときは #ｽﾀｯｸﾁｬﾝｻﾞｷﾞｬｻﾞﾘﾝｸﾞ で。QR はお披露目会の画面と配布物のページに' },
              { k: 'はじめての方は', v: '眺めて、触って、持ち主に聞いてください', d: '買うかどうかは、実物を見てから決めればいいです。ここにいる持ち主が、いちばんの先生です' },
            ]) },

    { ch: 0, tag: '★デモ一覧：やること／起きること／ダメなとき',
      talk: `<b>進行役の手順書です。</b>進行役がやるデモは A の4つだけ。<b>「やること → 起きること → ダメなときの一言」</b>を決めてあります。本番前に1周通しておきます（約3分）。`,
      html: K.todo([
              { title: 'A-1 なでる（手のひらに乗せて、頭の上をなでる）',
                body: '起きること：顔が照れ顔になり、首が少し上がり、「きもちいい」など6種の声のどれか。LED 12個が七色。<br>ダメなとき：「タッチの感度は外殻ごしだと落ちます。もう少し長めに」。それでも無反応なら status.py の4行を見る' },
              { title: 'A-2 曲を流す（Mac のスピーカーから、拍のはっきりした曲）',
                body: '起きること：数拍おいて首が拍に合わせて振れ、テープ30粒が拍で光る。4秒ごとに一瞬止まって聴き入る。<br>ダメなとき：「会場の音量だと閾値が足りません」→ そのまま C の失敗1へ繋ぐ' },
              { title: 'A-3 音量フェーダーを上げて、戻して、指す',
                body: '起きること：70% で実機のテープと背景が赤く、100% で背景に花火と CO2、首が揺れ、テープが白く速く刻む。<br>言うこと：戻して一拍おいて「で、いま僕がやったのは、このフェーダーを上げただけです」' },
              { title: 'A-4 カードで登録 → かざして受付',
                body: 'やること：来た人のカードをスタックチャンの頭のリーダーに置き、MacBook で名前を打つ（scripts/nfc_enroll.py。かざす → 名前を打つ → 保存の繰り返し）。もう一度かざす。<br>起きること：2秒以内に、名前入りで反応（顔が happy・光が白→ミント・「いらっしゃい、○○さん！」）。2回目は「また来たね」。<br>ダメなとき：声が出なくても顔と光は出る。「声の係が寝ています」。読めなければ scripts/nfc_enroll.py --scan でリーダーが見えるか' },
            ]) },

    /* ───────── A ───────── */
    { ch: 1, tag: '掴み', cover: { num: 'A', title: '掴み', sub: '説明より先に触ってもらう' },
      talk: `<b>合格条件は1つだけ。触った人が、自分から2回目を触ること。</b><br>
             これが出れば、あとは何が動いていなくても大丈夫です。実機は<b>踊りモード</b>にしておきます（PLAY ボタンで ON）。` },

    { ch: 1, tag: 'スタックチャンでできること',
      talk: `<b>触ってもらいながら、1枚だけ見せます。</b>先に一言だけ「電源が入っている間は、首を手で回さないでくださいね」。なでる・踊る・つまみで首・カードで名前 ── 今日机の上にあるのは、この輪のうちの4つ。
             <b>物理のインターフェースでいろんなことを実装できるのが、スタックチャンの魅力です。</b>持ってきた人の輪は、また別の形をしています。`,
      html: K.head('交流タイムで、<em>みんなのスタックチャンの展示会をしましょう！</em>') +
            K.lead('<b>いろんなことを、物理のインターフェースで実装できる。</b>それがスタックチャンの魅力。今日はそのうち4つ。') +
            `<div class="panel"><svg viewBox="0 0 760 520" role="img" aria-label="真ん中にスタックチャン、周りに物理のインターフェースで実装できる機能の例が12個" style="width:100%;height:auto;display:block;font-family:inherit;font-weight:700"><line x1="380" y1="262" x2="380" y2="70" stroke="#87A6BC" stroke-width="2"/><line x1="380" y1="262" x2="476" y2="96" stroke="#87A6BC" stroke-width="2"/><line x1="380" y1="262" x2="546" y2="166" stroke="#87A6BC" stroke-width="2"/><line x1="380" y1="262" x2="572" y2="262" stroke="#87A6BC" stroke-width="2"/><line x1="380" y1="262" x2="546" y2="358" stroke="#87A6BC" stroke-width="2"/><line x1="380" y1="262" x2="476" y2="428" stroke="#87A6BC" stroke-width="2"/><line x1="380" y1="262" x2="380" y2="454" stroke="#87A6BC" stroke-width="2"/><line x1="380" y1="262" x2="284" y2="428" stroke="#87A6BC" stroke-width="2"/><line x1="380" y1="262" x2="214" y2="358" stroke="#87A6BC" stroke-width="2"/><line x1="380" y1="262" x2="188" y2="262" stroke="#87A6BC" stroke-width="2"/><line x1="380" y1="262" x2="214" y2="166" stroke="#87A6BC" stroke-width="2"/><line x1="380" y1="262" x2="284" y2="96" stroke="#87A6BC" stroke-width="2"/><circle cx="380" cy="70" r="56" fill="#CFEBFA" stroke="#fff" stroke-width="3"/><text x="380" y="67" text-anchor="middle" font-size="12" fill="#173A54">なでると</text><text x="380" y="84" text-anchor="middle" font-size="12" fill="#173A54">照れる</text><circle cx="476" cy="96" r="56" fill="#DCF5DF" stroke="#fff" stroke-width="3"/><text x="476" y="93" text-anchor="middle" font-size="12" fill="#173A54">曲に合わせて</text><text x="476" y="110" text-anchor="middle" font-size="12" fill="#173A54">踊る</text><circle cx="546" cy="166" r="56" fill="#FFF2CC" stroke="#fff" stroke-width="3"/><text x="546" y="163" text-anchor="middle" font-size="12" fill="#173A54">DJ のつまみで</text><text x="546" y="180" text-anchor="middle" font-size="12" fill="#173A54">首が回る</text><circle cx="572" cy="262" r="56" fill="#EDE6FF" stroke="#fff" stroke-width="3"/><text x="572" y="259" text-anchor="middle" font-size="12" fill="#173A54">カードで</text><text x="572" y="276" text-anchor="middle" font-size="12" fill="#173A54">名前を呼ぶ</text><circle cx="546" cy="358" r="56" fill="#FFE2E2" stroke="#fff" stroke-width="3"/><text x="546" y="355" text-anchor="middle" font-size="12" fill="#173A54">写真を撮って</text><text x="546" y="372" text-anchor="middle" font-size="12" fill="#173A54">送る</text><circle cx="476" cy="428" r="56" fill="#E4F6FC" stroke="#fff" stroke-width="3"/><text x="476" y="425" text-anchor="middle" font-size="12" fill="#173A54">LED テープで</text><text x="476" y="442" text-anchor="middle" font-size="12" fill="#173A54">光る</text><circle cx="380" cy="454" r="56" fill="#CFEBFA" stroke="#fff" stroke-width="3"/><text x="380" y="451" text-anchor="middle" font-size="12" fill="#173A54">背景の画面と</text><text x="380" y="468" text-anchor="middle" font-size="12" fill="#173A54">連動</text><circle cx="284" cy="428" r="56" fill="#DCF5DF" stroke="#fff" stroke-width="3"/><text x="284" y="425" text-anchor="middle" font-size="12" fill="#173A54">朝になったら</text><text x="284" y="442" text-anchor="middle" font-size="12" fill="#173A54">「おはよう」</text><circle cx="214" cy="358" r="56" fill="#FFF2CC" stroke="#fff" stroke-width="3"/><text x="214" y="355" text-anchor="middle" font-size="12" fill="#173A54">来た人を</text><text x="214" y="372" text-anchor="middle" font-size="12" fill="#173A54">数える</text><circle cx="188" cy="262" r="56" fill="#EDE6FF" stroke="#fff" stroke-width="3"/><text x="188" y="259" text-anchor="middle" font-size="12" fill="#173A54">天気を</text><text x="188" y="276" text-anchor="middle" font-size="12" fill="#173A54">顔で知らせる</text><circle cx="214" cy="166" r="56" fill="#FFE2E2" stroke="#fff" stroke-width="3"/><text x="214" y="163" text-anchor="middle" font-size="12" fill="#173A54">会議の</text><text x="214" y="180" text-anchor="middle" font-size="12" fill="#173A54">タイマー係</text><circle cx="284" cy="96" r="56" fill="#E4F6FC" stroke="#fff" stroke-width="3"/><text x="284" y="93" text-anchor="middle" font-size="12" fill="#173A54">帰ってきたら</text><text x="284" y="110" text-anchor="middle" font-size="12" fill="#173A54">出迎える</text><circle cx="380" cy="262" r="74" fill="#2E9BE0" stroke="#fff" stroke-width="4"/><rect x="340" y="228" width="80" height="58" rx="10" fill="#1c1f24"/><circle cx="364" cy="254" r="8" fill="#fff"/><circle cx="396" cy="254" r="8" fill="#fff"/><path d="M368 270 Q 380 280 392 270" fill="none" stroke="#fff" stroke-width="3"/><text x="380" y="310" text-anchor="middle" font-size="13" fill="#fff">スタックチャン</text><text x="380" y="506" text-anchor="middle" font-size="12" fill="#1A73C4">入口（触る・聞く・読む・見る）と出口（顔・首・光・声）の組み合わせ。アイデア次第で、いくらでも増える</text></svg></div>` +
            K.tiny('今日机の上にあるのは：なでると照れる／曲に合わせて踊る／DJ のつまみで首が回る／カードで名前を呼ぶ。残りはアイデアの例') },

    /* ───────── B ───────── */
    /* ───────── 基本（用語・接続・ファーム・カスタマイズ） ───────── */
    { ch: 2, tag: '基本的な構成', cover: { num: 'B', title: '基本的な構成', sub: '用語を合わせて、何があれば始められるかを知る。有識者の方、プラクティスの補足をぜひ！' },
      talk: `<b>ここは基本的な構成の話。デモはしません。</b>目的は3つ：用語を合わせる／物理的に何を繋げば始められるかを知る／ファームウェアという層があることを知る。<br>
             <b>言うこと：「作り込んでいる方、ここは僕の理解です。作っていく上でのプラクティスの補足を、ぜひその場で」。</b>間違いも、別のやり方も、大歓迎。` },

    { ch: 2, tag: '用語を合わせる',
      talk: `<b>6つだけ。</b>この6語が通じれば、今日の話は全部追えます。押すと説明が出ます。`,
      html: K.head('この6語だけ、<em>先に合わせます。</em>') +
            K.cards([
              { k: '1', v: 'スタックチャン', d: 'M5Stack を顔にした手のひらサイズのロボット。2021 年にししかわさんが公開したオープンソース。今日のは公式キット K151（CoreS3 ＋ サーボ2基）' },
              { k: '2', v: 'M5Stack CoreS3', d: 'スタックチャンの「顔」の部分。ESP32-S3 というマイコンに、画面・カメラ・マイク・スピーカー・タッチ・Wi-Fi が入った箱' },
              { k: '3', v: 'ファームウェア', d: 'その箱の中で動くソフト。<b>買ったときから1つ入っている</b>（出荷時ファーム）。入れ替えることも、中の設定を変えることもできる' },
              { k: '4', v: '母艦（PC）', d: '実機の外で考える係。今日は MacBook 1台。実機と Wi-Fi で繋がる。「頭脳をどこに置くか」は、ファーム次第で自分で選べる' },
              { k: '5', v: 'gateway と MCP', d: 'gateway は母艦にいる窓口のプログラム。MCP は「道具の並べ方と呼び方」の規格で、これに対応すると AI（Claude Code など）から実機の機能を名前で呼べる' },
              { k: '6', v: 'Grove', d: '実機の横にある差し込み口（Port A 赤・Port B 黒）。センサーや LED を<b>買って挿すだけ</b>で足せる。今日は NFC リーダーと LED テープ' },
            ]) },

    { ch: 2, tag: '関係図 — 誰が作ったものか',
      talk: `<b>用語が揃ったところで、関係を1枚に。</b>色は「誰が作ったものか」。買ったもの（青）、OSS をそのまま（緑）、OSS を自分で直したもの（黄）、自分で書いたもの（赤）、商用サービス（紫）。<br>
             gateway は OSS の stackchan-mcp。ファームもその一部で、xiaozhi のフォーク（非公式）。どちらも少し直して使っています。MCP はその gateway が話す規格で、対応していれば Claude Code からも自作の console からも同じ道具が呼べます。`,
      html: K.head('gateway と MCP の関係を、<em>「誰が作ったか」で色分け。</em>') +
            `<div class="panel"><svg viewBox="0 0 760 470" role="img" aria-label="今回の構成を「誰が作ったものか」で色分け：製品（M5Stack K151・DDJ-FLX2・iPad）、OSS（Ollama・VOICEVOX・faster-whisper）、OSS を改造（stackchan-mcp のファームと gateway）、自作（console）、商用サービス（Claude Code）。gateway が MCP で AI と実機をつなぐ" style="width:100%;height:auto;display:block;font-family:inherit;font-weight:700">
  <defs><marker id="arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#4E7590"/></marker></defs>
  <rect x="20" y="16" width="120" height="20" rx="10" fill="#CFEBFA"/><text x="80" y="30" text-anchor="middle" font-size="11" fill="#173A54">製品（買う）</text>
  <rect x="150" y="16" width="120" height="20" rx="10" fill="#DCF5DF"/><text x="210" y="30" text-anchor="middle" font-size="11" fill="#173A54">OSS（そのまま）</text>
  <rect x="280" y="16" width="130" height="20" rx="10" fill="#FFF2CC"/><text x="345" y="30" text-anchor="middle" font-size="11" fill="#173A54">OSS を改造</text>
  <rect x="420" y="16" width="120" height="20" rx="10" fill="#FFE2E2"/><text x="480" y="30" text-anchor="middle" font-size="11" fill="#173A54">自作</text>
  <rect x="550" y="16" width="150" height="20" rx="10" fill="#EDE6FF"/><text x="625" y="30" text-anchor="middle" font-size="11" fill="#173A54">商用サービス</text>
  <rect x="20" y="70" width="200" height="120" rx="16" fill="#CFEBFA" stroke="#fff" stroke-width="3"/>
  <text x="120" y="96" text-anchor="middle" font-size="14" fill="#1A73C4">実機 M5Stack K151</text>
  <text x="120" y="116" text-anchor="middle" font-size="11" fill="#4E7590">公式キット。買ってくる</text>
  <rect x="34" y="128" width="172" height="50" rx="12" fill="#FFF2CC"/>
  <text x="120" y="148" text-anchor="middle" font-size="12" fill="#173A54">ファーム stackchan-mcp</text>
  <text x="120" y="166" text-anchor="middle" font-size="10" fill="#4E7590">xiaozhi のフォーク（非公式 OSS）＋自分の直し</text>
  <rect x="20" y="260" width="200" height="60" rx="16" fill="#CFEBFA" stroke="#fff" stroke-width="3"/>
  <text x="120" y="286" text-anchor="middle" font-size="13" fill="#1A73C4">DJ 機材 DDJ-FLX2</text>
  <text x="120" y="306" text-anchor="middle" font-size="10" fill="#4E7590">製品。USB MIDI</text>
  <rect x="20" y="340" width="200" height="60" rx="16" fill="#CFEBFA" stroke="#fff" stroke-width="3"/>
  <text x="120" y="366" text-anchor="middle" font-size="13" fill="#1A73C4">NFC リーダー・LED テープ</text>
  <text x="120" y="386" text-anchor="middle" font-size="10" fill="#4E7590">M5Stack の Grove ユニット。買って挿す</text>
  <rect x="270" y="56" width="220" height="150" rx="16" fill="#FFF2CC" stroke="#fff" stroke-width="3"/>
  <text x="380" y="82" text-anchor="middle" font-size="14" fill="#173A54">gateway（stackchan-mcp）</text>
  <text x="380" y="102" text-anchor="middle" font-size="10" fill="#4E7590">OSS。実機との窓口。ここも少し改造</text>
  <rect x="284" y="114" width="192" height="78" rx="12" fill="#fff"/>
  <text x="380" y="136" text-anchor="middle" font-size="12" fill="#1A73C4">MCP（規格）</text>
  <text x="380" y="154" text-anchor="middle" font-size="10" fill="#4E7590">道具の並べ方と呼び方の決まりごと</text>
  <text x="380" y="170" text-anchor="middle" font-size="10" fill="#4E7590">move_head / set_avatar / i2c.scan … 49個</text>
  <text x="380" y="186" text-anchor="middle" font-size="10" fill="#4E7590">対応していれば、どの AI からも呼べる</text>
  <rect x="270" y="236" width="220" height="80" rx="16" fill="#FFE2E2" stroke="#fff" stroke-width="3"/>
  <text x="380" y="262" text-anchor="middle" font-size="14" fill="#173A54">console（演技）</text>
  <text x="380" y="282" text-anchor="middle" font-size="10" fill="#4E7590">自作 Python。DJ・拍・タッチ・NFC を受けて</text>
  <text x="380" y="298" text-anchor="middle" font-size="10" fill="#4E7590">gateway の道具を叩く。テスト 524 件</text>
  <rect x="270" y="336" width="220" height="110" rx="16" fill="#DCF5DF" stroke="#fff" stroke-width="3"/>
  <text x="380" y="360" text-anchor="middle" font-size="14" fill="#173A54">頭脳（OSS をそのまま）</text>
  <text x="380" y="382" text-anchor="middle" font-size="11" fill="#173A54">Ollama（gemma3 / qwen2.5）</text>
  <text x="380" y="402" text-anchor="middle" font-size="11" fill="#173A54">VOICEVOX（声）</text>
  <text x="380" y="422" text-anchor="middle" font-size="11" fill="#173A54">faster-whisper（聞き取り）</text>
  <rect x="540" y="56" width="200" height="90" rx="16" fill="#EDE6FF" stroke="#fff" stroke-width="3"/>
  <text x="640" y="82" text-anchor="middle" font-size="14" fill="#173A54">Claude Code</text>
  <text x="640" y="102" text-anchor="middle" font-size="10" fill="#4E7590">商用の AI。MCP 経由で実機を動かす</text>
  <text x="640" y="120" text-anchor="middle" font-size="10" fill="#4E7590">「右を向いて、写真を撮って」</text>
  <text x="640" y="136" text-anchor="middle" font-size="10" fill="#4E7590">作るときだけ使う。当日は無くても動く</text>
  <rect x="540" y="236" width="200" height="80" rx="16" fill="#CFEBFA" stroke="#fff" stroke-width="3"/>
  <text x="640" y="262" text-anchor="middle" font-size="14" fill="#1A73C4">iPad（背景）</text>
  <text x="640" y="282" text-anchor="middle" font-size="10" fill="#4E7590">製品。ブラウザ1枚（stage.html は自作）</text>
  <rect x="540" y="336" width="200" height="110" rx="16" fill="#FFE2E2" stroke="#fff" stroke-width="3"/>
  <text x="640" y="360" text-anchor="middle" font-size="14" fill="#173A54">自分で足したもの</text>
  <text x="640" y="382" text-anchor="middle" font-size="11" fill="#173A54">表情 14 枚・振り付け・LED 13 種</text>
  <text x="640" y="402" text-anchor="middle" font-size="11" fill="#173A54">DJ の割り当て表・受付・背景</text>
  <text x="640" y="422" text-anchor="middle" font-size="11" fill="#173A54">テスト・失敗の記録・配布物</text>
  <line x1="220" y1="130" x2="268" y2="130" stroke="#4E7590" stroke-width="2" marker-end="url(#arw)" marker-start="url(#arw)"/>
  <text x="244" y="122" text-anchor="middle" font-size="9" fill="#4E7590">Wi-Fi</text>
  <line x1="490" y1="100" x2="538" y2="100" stroke="#4E7590" stroke-width="2" marker-end="url(#arw)" marker-start="url(#arw)"/>
  <text x="514" y="92" text-anchor="middle" font-size="9" fill="#4E7590">MCP</text>
  <line x1="380" y1="236" x2="380" y2="208" stroke="#4E7590" stroke-width="2" marker-end="url(#arw)"/>
  <text x="404" y="226" text-anchor="middle" font-size="9" fill="#4E7590">MCP</text>
  <line x1="380" y1="316" x2="380" y2="334" stroke="#4E7590" stroke-width="2" marker-end="url(#arw)" marker-start="url(#arw)"/>
  <line x1="220" y1="290" x2="268" y2="276" stroke="#4E7590" stroke-width="2" marker-end="url(#arw)"/>
  <text x="244" y="272" text-anchor="middle" font-size="9" fill="#4E7590">USB</text>
  <path d="M220 370 L242 370 L242 200 L224 200" fill="none" stroke="#4E7590" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arw)"/>
  <text x="256" y="352" text-anchor="middle" font-size="9" fill="#4E7590">Grove</text>
  <line x1="490" y1="276" x2="538" y2="276" stroke="#4E7590" stroke-width="2" marker-end="url(#arw)"/>
  <text x="380" y="464" text-anchor="middle" font-size="12" fill="#1A73C4">買ったのは青。緑と黄は OSS で、黄は自分で直したところ。赤が自分で書いたところ。全部読めて、直せて、フォークできる</text>
</svg></div>` +
            K.cards([
              { k: '製品（青）', v: 'M5Stack K151・DDJ-FLX2・iPad・Grove ユニット', d: '買ってくる。公式のキットと市販品。ここは何も直していない' },
              { k: 'OSS をそのまま（緑）', v: 'Ollama・VOICEVOX・faster-whisper', d: '頭脳・声・聞き取り。入れて設定するだけ。全部 MacBook の中で動く' },
              { k: 'OSS を改造（黄）', v: 'stackchan-mcp のファームと gateway', d: 'xiaozhi のフォーク（非公式）。ファームは頭なでの検出と起動時の省電力を直した。gateway は名乗り方（mDNS）を直した。改変は patch にして持ち運ぶ' },
              { k: '自作（赤）', v: 'console・表情・振り付け・割り当て表・受付・背景', d: 'Python 約9,300行。MCP の道具を叩く側。ここが「こんなことやってみた」の本体' },
              { k: '商用（紫）', v: 'Claude Code', d: 'MCP 経由で実機を動かしながら作った。当日は無くても動く。他の MCP 対応 AI でも同じことができる' },
            ]) },

    { ch: 2, tag: '物理的な接続 — 何があれば始められるか',
      talk: `<b>最初に繋ぐのは、本体と USB-C と Wi-Fi だけです。</b>今日の机の上は、そこにあとから足したもの。図はその全部。<br>
             「どこにも（インターネットに）繋がっていない」も、この図で見せます。`,
      html: K.head('始めるのに要るのは、<em>本体と USB-C と 2.4GHz の Wi-Fi。</em>') +
            `<div class="panel"><svg viewBox="0 0 760 330" role="img" aria-label="物理的な接続：MacBook が Wi-Fi を出し、ｽﾀｯｸﾁｬﾝと iPad がそこに繋がる。DJ 機材は USB で MacBook に。LED テープは Grove Port B、NFC リーダーは Grove Port A で実機に。実機は USB 給電" style="width:100%;height:auto;display:block;font-family:inherit;font-weight:700">
  <defs><marker id="ar9" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#4E7590"/></marker></defs>
  <rect x="290" y="110" width="180" height="110" rx="18" fill="#E4F6FC" stroke="#2E9BE0" stroke-width="3"/>
  <text x="380" y="140" text-anchor="middle" font-size="15" fill="#1A73C4">MacBook</text>
  <text x="380" y="162" text-anchor="middle" font-size="11" fill="#4E7590">Wi-Fi を出す（親機）</text>
  <text x="380" y="180" text-anchor="middle" font-size="11" fill="#4E7590">192.168.2.1</text>
  <text x="380" y="204" text-anchor="middle" font-size="11" fill="#4E7590">USB-C ×2</text>
  <rect x="20" y="120" width="170" height="90" rx="16" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="105" y="150" text-anchor="middle" font-size="14" fill="#173A54">DDJ-FLX2</text>
  <text x="105" y="172" text-anchor="middle" font-size="11" fill="#4E7590">DJ 機材</text>
  <text x="105" y="192" text-anchor="middle" font-size="11" fill="#4E7590">電源も USB から</text>
  <line x1="190" y1="165" x2="288" y2="165" stroke="#4E7590" stroke-width="2"/>
  <text x="239" y="156" text-anchor="middle" font-size="11" fill="#173A54">USB（MIDI）</text>
  <rect x="560" y="20" width="180" height="120" rx="16" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="650" y="48" text-anchor="middle" font-size="14" fill="#173A54">ｽﾀｯｸﾁｬﾝ</text>
  <text x="650" y="68" text-anchor="middle" font-size="11" fill="#4E7590">M5Stack CoreS3（K151）</text>
  <text x="650" y="90" text-anchor="middle" font-size="11" fill="#4E7590">Port A（赤）← NFC リーダー</text>
  <text x="650" y="108" text-anchor="middle" font-size="11" fill="#4E7590">Port B（黒）← LED テープ 30粒</text>
  <text x="650" y="128" text-anchor="middle" font-size="11" fill="#4E7590">USB-C ← 給電（台側）</text>
  <path d="M470 140 Q 520 90 558 80" fill="none" stroke="#2E9BE0" stroke-width="2" stroke-dasharray="7 5" marker-end="url(#ar9)"/>
  <text x="500" y="96" text-anchor="middle" font-size="11" fill="#1A73C4">Wi-Fi 2.4GHz</text>
  <rect x="560" y="200" width="180" height="90" rx="16" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="650" y="230" text-anchor="middle" font-size="14" fill="#173A54">iPad</text>
  <text x="650" y="252" text-anchor="middle" font-size="11" fill="#4E7590">背景の画面（ブラウザ1枚）</text>
  <text x="650" y="272" text-anchor="middle" font-size="11" fill="#4E7590">QR を読んで開く</text>
  <path d="M470 190 Q 520 240 558 245" fill="none" stroke="#2E9BE0" stroke-width="2" stroke-dasharray="7 5" marker-end="url(#ar9)"/>
  <text x="500" y="232" text-anchor="middle" font-size="11" fill="#1A73C4">Wi-Fi</text>
  <rect x="20" y="20" width="170" height="70" rx="16" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="105" y="48" text-anchor="middle" font-size="14" fill="#173A54">スピーカー</text>
  <text x="105" y="70" text-anchor="middle" font-size="11" fill="#4E7590">曲。実機のマイクが拾う</text>
  <rect x="20" y="240" width="170" height="70" rx="16" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="105" y="268" text-anchor="middle" font-size="14" fill="#173A54">参加者のスマホ</text>
  <text x="105" y="290" text-anchor="middle" font-size="11" fill="#4E7590">質疑 bot（同じ Wi-Fi）</text>
  <path d="M190 275 Q 240 275 288 200" fill="none" stroke="#2E9BE0" stroke-width="2" stroke-dasharray="7 5" marker-end="url(#ar9)"/>
  <text x="380" y="318" text-anchor="middle" font-size="12" fill="#1A73C4">線は USB 1本だけ。あとは MacBook が出す Wi-Fi。外（インターネット）には何も繋がっていない</text>
</svg></div>` +
            K.cards([
              { k: '最初の日に要るもの', v: 'K151 本体・USB-C ケーブル・2.4GHz の Wi-Fi・スマホ', d: '出荷時のままなら、アプリを入れて Wi-Fi を教えるだけで喋ります（30分）。PC も DJ 機材も LED も要りません' },
              { k: '今日の机にあるもの', v: '＋ MacBook・DJ 機材・LED テープ・NFC リーダー・iPad', d: '全部あとから足したもの。線は USB 1本、あとは MacBook が出す Wi-Fi。実機の USB-C は2つ：台側は給電、本体側は書き込み用' },
            ]) },

    { ch: 2, tag: 'ファームウェア — 出荷時はどうなっているか',
      talk: `<b>ハードだけでは動きません。中にファームウェアがあります。</b>買ったときに入っているのが出荷時ファーム。とてもよくできていて、体験としてはいまでも一番速い。<br>
             ただ「その声がどこへ行くか」はここで決まります。けなす話にはしません。「知って使うのと、知らずに使うのは別」。`,
      html: K.head('出荷時ファームは、<em>よくできている。だから、知っておく。</em>') +
            K.cards([
              { k: '良いところ', v: '買ってすぐ喋る。速い。表情・モーション・ダンスが最初から', d: 'アプリだけで完結。自前で組むと、たいてい速さで負ける。OTA・アプリストア・Home Assistant にも繋がる' },
              { k: '気をつけること', v: '聞き取り・考える・喋るが、全部海外のクラウド', d: '通信先は深セン・香港。会話の流れでカメラのシャッターも切れて、画像も送られる。セットアップに利用規約の提示も承諾も無い' },
              { k: 'だから', v: 'ファームを選ぶ、が最初の分かれ道', d: '次の画面で5つ比べます。どれが正解という話ではなく、何を大事にするかで変わる' },
            ]) },

    { ch: 2, tag: '他にどんなファームがあるか — 今回はどれを、なぜ',
      talk: `<b>いちばん大きな分かれ道です。</b>どれが正解という話ではなく、<b>「その声がどこへ行くか」がファームで決まる</b>、という話です。
             ★けなす話にはしません。出荷時は体験としていまでも一番速い。「知って使うのと、知らずに使うのは別」。`,
      html: K.head('ファームは5つ。<span class="o">声の行き先が違います。</span>') +
            K.cards([
              { k: '① 出荷時 XiaoZhi', v: 'ノーコード・最速', d: '<svg viewBox="0 0 420 96" style="width:100%;max-width:420px;height:auto;display:block;margin:8px 0;font-weight:700"><defs><marker id="mf" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#4E7590"/></marker></defs><rect x="4" y="24" width="96" height="48" rx="10" fill="#CFEBFA"/><text x="52" y="44" text-anchor="middle" font-size="11" fill="#173A54">実機</text><text x="52" y="60" text-anchor="middle" font-size="9" fill="#4E7590">聞く・喋る・動く</text><line x1="100" y1="48" x2="312" y2="48" stroke="#4E7590" stroke-width="2" marker-end="url(#mf)"/><text x="206" y="40" text-anchor="middle" font-size="9" fill="#4E7590">Wi-Fi → インターネット</text><rect x="314" y="18" width="102" height="60" rx="10" fill="#FFE2E2"/><text x="365" y="42" text-anchor="middle" font-size="11" fill="#173A54">海外のクラウド</text><text x="365" y="60" text-anchor="middle" font-size="9" fill="#4E7590">聞き取り・考える・喋る</text></svg>' + '<ol style="margin:6px 0 0;padding-left:1.2em;font-size:14px;line-height:1.7"><li>声・カメラ画像・考える処理が<b>全部海外のクラウド</b>（深セン・香港）へ</li><li>買ってすぐ喋る。速い。表情・ダンス・OTA が最初から</li><li>セットアップに規約の提示も承諾も無い。<b>知って使う</b></li></ol>' },
              { k: '② xiaozhi-esp32-server', v: '接続先を自前に', d: '<svg viewBox="0 0 420 96" style="width:100%;max-width:420px;height:auto;display:block;margin:8px 0;font-weight:700"><defs><marker id="mf" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#4E7590"/></marker></defs><rect x="4" y="24" width="96" height="48" rx="10" fill="#CFEBFA"/><text x="52" y="44" text-anchor="middle" font-size="11" fill="#173A54">実機</text><text x="52" y="60" text-anchor="middle" font-size="9" fill="#4E7590">聞く・喋る・動く</text><line x1="100" y1="48" x2="312" y2="48" stroke="#4E7590" stroke-width="2" marker-end="url(#mf)"/><text x="206" y="40" text-anchor="middle" font-size="9" fill="#4E7590">Wi-Fi（接続先の URL を差し替える）</text><rect x="314" y="18" width="102" height="60" rx="10" fill="#DCF5DF"/><text x="365" y="42" text-anchor="middle" font-size="11" fill="#173A54">自前のサーバー</text><text x="365" y="60" text-anchor="middle" font-size="9" fill="#4E7590">PC やクラウドに自分で立てる</text></svg>' + '<ol style="margin:6px 0 0;padding-left:1.2em;font-size:14px;line-height:1.7"><li>接続先の URL を差し替えるだけで、<b>声は自前のサーバー</b>へ</li><li>遠隔できる。出荷時の体験はそのまま</li><li>サーバーを自分で立てる手間は大</li></ol>' },
              { k: '③ 元祖 stack-chan', v: '教材として一番きれい', d: '<svg viewBox="0 0 420 96" style="width:100%;max-width:420px;height:auto;display:block;margin:8px 0;font-weight:700"><defs><marker id="mf" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#4E7590"/></marker></defs><rect x="4" y="24" width="96" height="48" rx="10" fill="#CFEBFA"/><text x="52" y="44" text-anchor="middle" font-size="11" fill="#173A54">実機</text><text x="52" y="60" text-anchor="middle" font-size="9" fill="#4E7590">聞く・喋る・動く</text><line x1="100" y1="48" x2="312" y2="48" stroke="#4E7590" stroke-width="2" marker-end="url(#mf)"/><text x="206" y="40" text-anchor="middle" font-size="9" fill="#4E7590">ブラウザから書き込む。声はほぼ出ない</text><rect x="314" y="18" width="102" height="60" rx="10" fill="#E4F6FC"/><text x="365" y="42" text-anchor="middle" font-size="11" fill="#173A54">実機の中で完結</text><text x="365" y="60" text-anchor="middle" font-size="9" fill="#4E7590">遠隔の概念は薄い</text></svg>' + '<ol style="margin:6px 0 0;padding-left:1.2em;font-size:14px;line-height:1.7"><li><b>ブラウザだけで書き込める</b>。教材として一番きれい</li><li>実機の中で完結。声はほぼ外に出ない</li><li>遠隔・頭脳の差し替えの概念が薄い</li></ol>' },
              { k: '④ xangi-stackchan', v: 'PC が頭脳・USB 直結', d: '<svg viewBox="0 0 420 96" style="width:100%;max-width:420px;height:auto;display:block;margin:8px 0;font-weight:700"><defs><marker id="mf" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#4E7590"/></marker></defs><rect x="4" y="24" width="96" height="48" rx="10" fill="#CFEBFA"/><text x="52" y="44" text-anchor="middle" font-size="11" fill="#173A54">実機</text><text x="52" y="60" text-anchor="middle" font-size="9" fill="#4E7590">聞く・喋る・動く</text><line x1="100" y1="48" x2="312" y2="48" stroke="#4E7590" stroke-width="2" marker-end="url(#mf)"/><text x="206" y="40" text-anchor="middle" font-size="9" fill="#4E7590">USB ケーブル（Wi-Fi 不要）</text><rect x="314" y="18" width="102" height="60" rx="10" fill="#DCF5DF"/><text x="365" y="42" text-anchor="middle" font-size="11" fill="#173A54">PC が頭脳</text><text x="365" y="60" text-anchor="middle" font-size="9" fill="#4E7590">USB 直結・据え置き</text></svg>' + '<ol style="margin:6px 0 0;padding-left:1.2em;font-size:14px;line-height:1.7"><li><b>PC と USB で直結</b>。フルローカル</li><li>宅内据え置きなら最高</li><li>ケーブルの長さが限界。遠隔ができない</li></ol>' },
              { k: '⑤ stackchan-mcp ← これ', v: '②のフォーク＋MCP', d: '<svg viewBox="0 0 420 96" style="width:100%;max-width:420px;height:auto;display:block;margin:8px 0;font-weight:700"><defs><marker id="mf" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#4E7590"/></marker></defs><rect x="4" y="24" width="96" height="48" rx="10" fill="#CFEBFA"/><text x="52" y="44" text-anchor="middle" font-size="11" fill="#173A54">実機</text><text x="52" y="60" text-anchor="middle" font-size="9" fill="#4E7590">聞く・喋る・動く</text><line x1="100" y1="48" x2="150" y2="48" stroke="#4E7590" stroke-width="2" marker-end="url(#mf)"/><rect x="152" y="24" width="112" height="48" rx="10" fill="#FFF2CC"/><text x="208" y="44" text-anchor="middle" font-size="11" fill="#173A54">gateway ＋ MCP</text><text x="208" y="60" text-anchor="middle" font-size="9" fill="#4E7590">道具49個を AI から呼べる</text><line x1="264" y1="48" x2="312" y2="48" stroke="#4E7590" stroke-width="2" marker-end="url(#mf)"/><rect x="314" y="18" width="102" height="60" rx="10" fill="#DCF5DF"/><text x="365" y="42" text-anchor="middle" font-size="11" fill="#173A54">自前の頭脳</text><text x="365" y="60" text-anchor="middle" font-size="9" fill="#4E7590">Ollama など・ローカル</text></svg>' + '<ol style="margin:6px 0 0;padding-left:1.2em;font-size:14px;line-height:1.7"><li>②と同じく声は自前。<b>間に gateway ＋ MCP</b> が入る</li><li>K151 専用のボード定義で、サーボ・LED・タッチ・カメラがそのまま動く</li><li><b>AI から実機の機能を名前で呼べる</b>ので、作るのが速い。頭脳だけ自分の側へ移せる</li></ol>' },
            ]) +
            K.memo('選んだ理由は3つ：K151 がそのまま動く／MCP で開発が速い／<b>出荷時の体験を保ったまま頭脳だけ自分の側へ移せる</b>。全部 OSS なので、読めて直せてフォークできます。') },

    { ch: 2, tag: 'カスタマイズのやり方は3つ',
      talk: `<b>「機能を足す」には3つの入口があります。</b>①設定を変える ②ファームそのものを直す ③物理的に足す。どれも今日の机の上に実例があります。<br>
             そして<b>どれも AI と一緒に反復するのが前提</b>です。1回で当たらない。測って、直して、また測る。`,
      html: K.head('設定を変える／ファームを直す／<em>物理で足す。</em>') +
            K.cards([
              { k: '① 設定を変える', v: 'ファームの中の設定をいじる', d: '接続先の URL（どの母艦を見るか）、Wi-Fi、音量、踊りの閾値。設定画面・NVS・gateway_config_set から。<b>焼き直しは要らない</b>' },
              { k: '② ファームを直す', v: 'ソースを直して焼き直す', d: '例：頭なでの検出（20秒に1回 → 15回、PR #374）／起動時の Wi-Fi 省電力を切る1行。全部 OSS なので読めて直せる。改変は patch にして持ち運ぶ' },
              { k: '③ 物理で足す', v: 'Grove に買って挿す', d: '例：NFC リーダー（¥1,000 台）で受付、LED テープ（¥1,344）で光。ファームに汎用の I2C の道具があるので、<b>ファームを触らずに母艦から読める</b>' },
              { k: '共通', v: 'AI と一緒に反復する', d: 'MCP で実機を会話で動かし、テストを先に書き、詰まったら記録に残す。閾値は実測から決める（撫で 9.5・52・92秒）。1回で当たらないのが普通' },
            ]) },

    { ch: 2, tag: 'ファームを入れ替える手順 — 戻れるようにしてから',
      talk: `<b>「失敗したら文鎮」と思われがちですが、逆です。失敗できる形にしてから焼きます。</b>所要は実測で、①20分 ②10分 ③60分。`,
      html: `<div class="panel"><svg viewBox="0 0 760 270" role="img" aria-label="焼き方の流れ：出荷時で遊ぶ、まるごと吸い出す、アンバインド、焼く、gatewayを立てる。アンバインドから焼き終わるまで喋らなくなる。書き込み領域は2面あり戻れる" style="width:100%;height:auto;display:block;font-family:inherit;font-weight:700">
  <defs><marker id="ar4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#4E7590"/></marker></defs>
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
  <line x1="140" y1="85" x2="158" y2="85" stroke="#4E7590" stroke-width="2" marker-end="url(#ar4)"/>
  <line x1="290" y1="85" x2="308" y2="85" stroke="#4E7590" stroke-width="2" marker-end="url(#ar4)"/>
  <line x1="440" y1="85" x2="458" y2="85" stroke="#4E7590" stroke-width="2" marker-end="url(#ar4)"/>
  <line x1="590" y1="85" x2="608" y2="85" stroke="#4E7590" stroke-width="2" marker-end="url(#ar4)"/>
  <rect x="310" y="140" width="280" height="8" rx="4" fill="#FF6B6B"/>
  <text x="450" y="166" text-anchor="middle" font-size="12" fill="#C43D3D">この区間、一度喋らなくなる。壊れたのではなく、道のりの一部</text>
  <rect x="10" y="186" width="360" height="70" rx="14" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="190" y="210" text-anchor="middle" font-size="12" fill="#1A73C4">書き込み領域は2面（ota_0 / ota_1）</text>
  <text x="190" y="232" text-anchor="middle" font-size="11" fill="#4E7590">新しい方を空いた面に置く。ダメなら10秒で戻る</text>
  <rect x="390" y="186" width="360" height="70" rx="14" fill="#fff" stroke="#CFEBFA" stroke-width="3"/>
  <text x="570" y="210" text-anchor="middle" font-size="12" fill="#1A73C4">焼いても消えない領域（NVS）</text>
  <text x="570" y="232" text-anchor="middle" font-size="11" fill="#4E7590">古い接続先が残る。焼き直し＝初期状態ではない</text>
</svg></div>` +
            K.cards([
              { k: '①', v: '焼く前に、まるごと吸い出す', d: '<code>esptool read_flash 0x0 16MB</code> で 16MB を手元に。受け入れ試験を出荷時のまま1周して<b>基準</b>を取る。あとは差分だけ見ればよい' },
              { k: '②', v: '書き込み領域が2面ある', d: 'OTA の2スロット（ota_0 / ota_1）。新しい方を空いている面に置き、起動先だけ切り替える。<b>ダメなら10秒で前の面に戻る</b>' },
              { k: '③', v: '順番を守る', d: '<b>バックアップ → アンバインド → 焼く</b>。逆にするとペアリングが壊れる。アンバインドから焼き終わるまで、一度喋らなくなる' },
            ]) +
            K.memo('★焼いても消えない領域（NVS）があります。前の接続先が残っていて、こちらの指定を無視して古い先へ行き続けました。「焼き直したのだから初期状態」は成り立ちません。<br>' +
                   '★<b>実機の顔を指して1行。</b>「この表情、<b>14枚とも自分で描いています</b>（顔6・目3・口5）。同梱の画像は、開けたら<b>1×1の黒い点</b>でした」') },

    { ch: 2, tag: '今回のファームの特長 — 道具が49個',
      talk: `<b>言いたいことは1つ。実機が「自分にできること」を、名前つきで49個持っている。</b>AI も自作プログラムも、その名前を呼ぶだけ。<br>
             下に並べたのは<b>49個のうちの代表例</b>です。全部の一覧は、その場で Claude Code の MCP 一覧を出して見せます。`,
      html: K.head('ファームの中に、道具が<em>49個。</em>') +
            K.lead('<b>実機が「自分にできること」を名前つきで持っている</b>、ということ。頼む側は名前を呼ぶだけです。') +
            `<div class="panel"><svg viewBox="0 0 760 360" role="img" aria-label="AI や自作プログラムが「右を向いて、写真を撮って」と頼むと、gateway の道具箱から move_head と take_photo が選ばれ、スタックチャンが右を向いて写真を返す" style="width:100%;height:auto;display:block;font-family:inherit;font-weight:700">
  <defs><marker id="art" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#4E7590"/></marker></defs>
  <rect x="16" y="120" width="170" height="80" rx="18" fill="#EDE6FF" stroke="#fff" stroke-width="3"/>
  <text x="101" y="150" text-anchor="middle" font-size="13" fill="#173A54">AI や自作プログラム</text>
  <text x="101" y="170" text-anchor="middle" font-size="10" fill="#4E7590">Claude Code ／ console</text>
  <rect x="30" y="40" width="200" height="56" rx="16" fill="#FFF2CC" stroke="#fff" stroke-width="3"/>
  <text x="130" y="64" text-anchor="middle" font-size="12" fill="#173A54">「右を向いて、</text>
  <text x="130" y="82" text-anchor="middle" font-size="12" fill="#173A54">　写真を撮って」</text>
  <path d="M70 96 L80 120 L96 96" fill="#FFF2CC"/>
  <rect x="250" y="60" width="260" height="240" rx="22" fill="#E4F6FC" stroke="#2E9BE0" stroke-width="3"/>
  <text x="380" y="88" text-anchor="middle" font-size="14" fill="#1A73C4">gateway の道具箱（49個）</text>
  <rect x="266" y="104" width="108" height="34" rx="10" fill="#fff" stroke="#55C96A" stroke-width="3"/><text x="320" y="126" text-anchor="middle" font-size="11" fill="#173A54">move_head</text>
  <rect x="386" y="104" width="108" height="34" rx="10" fill="#fff" stroke="#55C96A" stroke-width="3"/><text x="440" y="126" text-anchor="middle" font-size="11" fill="#173A54">take_photo</text>
  <rect x="266" y="148" width="108" height="34" rx="10" fill="#fff"/><text x="320" y="170" text-anchor="middle" font-size="11" fill="#4E7590">set_avatar</text>
  <rect x="386" y="148" width="108" height="34" rx="10" fill="#fff"/><text x="440" y="170" text-anchor="middle" font-size="11" fill="#4E7590">led.set_all</text>
  <rect x="266" y="192" width="108" height="34" rx="10" fill="#fff"/><text x="320" y="214" text-anchor="middle" font-size="11" fill="#4E7590">say</text>
  <rect x="386" y="192" width="108" height="34" rx="10" fill="#fff"/><text x="440" y="214" text-anchor="middle" font-size="11" fill="#4E7590">i2c.scan</text>
  <rect x="266" y="236" width="108" height="34" rx="10" fill="#fff"/><text x="320" y="258" text-anchor="middle" font-size="11" fill="#4E7590">set_blink</text>
  <rect x="386" y="236" width="108" height="34" rx="10" fill="#fff"/><text x="440" y="258" text-anchor="middle" font-size="11" fill="#4E7590">…あと 41 個</text>
  <text x="380" y="290" text-anchor="middle" font-size="10" fill="#4E7590">名前と引数が決まっている ＝ 取扱説明書そのもの</text>
  <line x1="186" y1="160" x2="248" y2="160" stroke="#4E7590" stroke-width="2" marker-end="url(#art)"/>
  <text x="217" y="152" text-anchor="middle" font-size="9" fill="#4E7590">MCP</text>
  <line x1="510" y1="160" x2="572" y2="160" stroke="#4E7590" stroke-width="2" marker-end="url(#art)"/>
  <text x="541" y="152" text-anchor="middle" font-size="9" fill="#4E7590">Wi-Fi</text>
  <rect x="600" y="118" width="120" height="86" rx="18" fill="#1c1f24" stroke="#87A6BC" stroke-width="4" transform="rotate(-8 660 161)"/>
  <circle cx="636" cy="150" r="11" fill="#fff" transform="rotate(-8 660 161)"/><circle cx="684" cy="150" r="11" fill="#fff" transform="rotate(-8 660 161)"/>
  <path d="M644 176 Q 660 190 676 176" fill="none" stroke="#fff" stroke-width="4" transform="rotate(-8 660 161)"/>
  <rect x="640" y="206" width="40" height="18" rx="6" fill="#4E7590"/>
  <circle cx="660" cy="242" r="26" fill="#87A6BC"/>
  <text x="660" y="290" text-anchor="middle" font-size="13" fill="#1A73C4">右を向いて、パシャ</text>
  <circle cx="722" cy="100" r="16" fill="#FFC831"/><text x="722" y="105" text-anchor="middle" font-size="14" fill="#4A3200">✦</text>
  <rect x="576" y="40" width="150" height="40" rx="12" fill="#DCF5DF" stroke="#fff" stroke-width="3"/>
  <text x="651" y="65" text-anchor="middle" font-size="11" fill="#2E8C42">画像が返ってくる</text>
  <path d="M600 80 Q 400 20 200 110" fill="none" stroke="#55C96A" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#art)"/>
  <text x="380" y="340" text-anchor="middle" font-size="12" fill="#1A73C4">「どう動かすか」を読んでコードに書き写す工程が、丸ごと消えた。呼ぶのは名前だけ</text>
</svg></div>` +
            K.cards([
              { k: '下の4つは代表例', v: '49個を、使いどころで4つに分けると', d: '身体を動かす／光と目／横の差し込み口／声と耳。残りは Wi-Fi の省電力・サーボのトルク・頭の向きの読み取り・設定の読み書きなど。全部の一覧は Claude Code の MCP 一覧か gateway_config_get で' },
              { k: '身体を動かす', v: 'move_head<br>set_avatar<br>set_blink<br>set_mouth', d: '首を「右へ30度」と向ける／表情を「happy」に変える（14枚から）／まばたきを止める・再開する／口を動かす。今日は DJ のつまみと、パッドの顔の切り替えで使っています' },
              { k: '光と目', v: 'led.set_all<br>set_brightness<br>take_photo', d: '本体の LED 12個の色を一度に変える／画面の明るさを変える／カメラで1枚撮って画像を返す。今日は受付の光で。写真は作っている最中の確認に' },
              { k: '横の差し込み口（Grove）', v: 'i2c.scan<br>i2c.write_read<br>port_b.ws2812', d: '何が挿さっているかを調べる／挿したセンサーを読む／LED テープに色の列を送る。今日は NFC リーダーとテープ30粒で。<b>ファームを直さずに新しい部品が足せる</b>のは、この3つがあるから' },
              { k: '声と耳', v: 'say<br>listen<br>touch.get_touch_state', d: '文字を渡すと喋る／聞き取って文字で返す／頭のタッチの状態を読む。今日は受付の「いらっしゃい」で' },
            ]) +
            K.quote('「どう動かすか」を読んで、コードに書き写す工程が、丸ごと消えました。「右を向いて写真を撮って」で、実機が動いて画像が返ります。') },

    /* ───────── デモ（今回、僕が持ってきたもの） ───────── */
    { ch: 3, tag: 'こんなことやってみた', cover: { num: 'B+', title: '“こんなことやってみた”の事例を持ってきました！', sub: 'AI を DJ する、AI と DJ する' },
      talk: `<b>ここからは事例です。</b>基本的な構成の上に、僕が何を足して遊んだか。うまくいったことも、いかなかったことも。` },

    { ch: 3, tag: 'やってみたこと（一言で）',
      talk: `<b>一言で：入力は、キーボードや声ではなく DJ 台。</b>「AI を DJ する、AI と DJ する」というテーマで作ってみました。<br>
             DJ 機材をそのまま入力にすると、それ自体がエンターテインメントになり、ロボットへの新しい入力にもなる。そう思って。`,
      html: K.head('入力は、キーボードや声ではない、<em>DJ 台！</em>') +
            K.lead('<b>「AI を DJ する、AI と DJ する」というテーマで作ってみました。</b>つまみで首、パッドで顔、フェーダーで会場。') +
            K.cards([
              { k: 'なぜ DJ 機材か', v: '触った瞬間に返ってくる。説明が要らない', d: 'つまみは回した分だけ、パッドは押した瞬間に。人の手つきがそのまま演出になる。「特別な操作画面は1つもありません」' },
              { k: '何が新しいか', v: '入力デバイスの選び直し', d: '音声もキーボードも、ロボットへの入力としては「待たされる」。物理のつまみは待たない。DJ 機材でなくても、身の回りの入力装置は全部候補' },
              { k: '出力も選び直した', v: '首・顔・LED テープ・背景の画面', d: '実機の中だけでなく、会場全体を出力にした。同じ30個の色の列を、実機と背景に同時に送る' },
              { k: '今日見せるもの', v: 'つまみ→首／パッド→顔／フェーダー→会場が赤く', d: 'A の掴みで触ったもの。仕組みは次の画面から' },
            ]) },

    { ch: 3, tag: 'データの流れ',
      talk: `<b>何が、どんな形で流れているか。</b>入口は4種類、出口も4種類。<b>意味を持っているのは真ん中だけ</b>で、実機に届くのは角度・表情の名前・色の列・音です。`,
      html: K.head('入るのは数字と音。<em>出るのも数字と音。</em>') +
            `<div class="panel"><svg viewBox="0 0 760 300" role="img" aria-label="データの流れ：入口から出口まで、何がどんな形で流れるか。MIDI の数字、音、タッチ、カード ID が MacBook に入り、角度と色の列、文字、声になって出ていく" style="width:100%;height:auto;display:block;font-family:inherit;font-weight:700">
  <defs><marker id="ar10" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#4E7590"/></marker></defs>
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
  <line x1="170" y1="63" x2="218" y2="140" stroke="#4E7590" stroke-width="2" marker-end="url(#ar10)"/>
  <line x1="170" y1="119" x2="232" y2="90" stroke="#4E7590" stroke-width="2" marker-end="url(#ar10)"/>
  <line x1="170" y1="175" x2="218" y2="155" stroke="#4E7590" stroke-width="2" marker-end="url(#ar10)"/>
  <line x1="170" y1="231" x2="218" y2="165" stroke="#4E7590" stroke-width="2" marker-end="url(#ar10)"/>
  <line x1="540" y1="140" x2="588" y2="63" stroke="#4E7590" stroke-width="2" marker-end="url(#ar10)"/>
  <line x1="540" y1="150" x2="588" y2="119" stroke="#4E7590" stroke-width="2" marker-end="url(#ar10)"/>
  <line x1="540" y1="160" x2="588" y2="175" stroke="#4E7590" stroke-width="2" marker-end="url(#ar10)"/>
  <line x1="526" y1="217" x2="588" y2="231" stroke="#4E7590" stroke-width="2" marker-end="url(#ar10)"/>
  <text x="380" y="286" text-anchor="middle" font-size="12" fill="#1A73C4">実機に届くのは「角度」「表情の名前」「色の列」「音」だけ。意味を持っているのは真ん中</text>
</svg></div>` +
            K.tiny('DJ 機材の MIDI は 1秒に数十件、首の角度は 30回/秒、色の列は 20回/秒、会話は1往復 3〜5秒') },

    { ch: 3, tag: '役割ごとの製品・技術',
      talk: `<b>役割と製品を、机の見取り図で1枚に。</b>身体・ファーム・窓口・演技・考える・声・DJ 機材・光・受付・背景。全部 OSS か市販品で、特別なものはありません。下の一覧は開くと詳しく。`,
      html: K.head('役割は8つ。<em>机の上に、こう並んでいます。</em>') +
            `<div class="panel"><svg viewBox="0 0 760 500" role="img" aria-label="机の上の見取り図で役割と製品を対応づける：背景は iPad、真ん中にスタックチャン（身体 K151・中にファーム stackchan-mcp・頭に NFC リーダー・周りに LED テープ）、左に DJ 機材 DDJ-FLX2、下に MacBook（窓口 gateway・演技 console・考える Ollama・声 VOICEVOX・聞き取り faster-whisper）、MacBook が Wi-Fi を出す" style="width:100%;height:auto;display:block;font-family:inherit;font-weight:700">
  <defs><marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#4E7590"/></marker></defs>
  <rect x="250" y="14" width="260" height="96" rx="16" fill="#1c1f24" stroke="#87A6BC" stroke-width="4"/>
  <rect x="262" y="26" width="236" height="72" rx="8" fill="#1A73C4"/>
  <circle cx="300" cy="62" r="10" fill="#FF6B6B"/><circle cx="330" cy="70" r="7" fill="#FFC831"/><circle cx="470" cy="60" r="12" fill="#55C96A"/><rect x="380" y="40" width="10" height="50" rx="3" fill="#8FDBF5"/>
  <text x="380" y="126" text-anchor="middle" font-size="12" fill="#1A73C4">背景 ── iPad（ブラウザ1枚 stage.html）</text>
  <rect x="352" y="146" width="56" height="16" rx="5" fill="#EDE6FF" stroke="#9B7BF0" stroke-width="2"/>
  <text x="380" y="158" text-anchor="middle" font-size="9" fill="#5E42B8">NFC</text>
  <text x="470" y="158" text-anchor="start" font-size="11" fill="#5E42B8">受付 ── RFID 2 Unit</text>
  <rect x="325" y="164" width="110" height="82" rx="14" fill="#1c1f24" stroke="#87A6BC" stroke-width="4"/>
  <circle cx="358" cy="196" r="10" fill="#fff"/><circle cx="402" cy="196" r="10" fill="#fff"/>
  <path d="M366 220 Q 380 232 394 220" fill="none" stroke="#fff" stroke-width="4"/>
  <rect x="352" y="167" width="56" height="14" rx="5" fill="#FFF2CC"/>
  <text x="380" y="178" text-anchor="middle" font-size="9" fill="#B37C00">ファーム</text>
  <rect x="365" y="248" width="30" height="14" rx="4" fill="#4E7590"/>
  <circle cx="380" cy="280" r="20" fill="#87A6BC"/>
  <text x="470" y="200" text-anchor="start" font-size="12" fill="#1A73C4">身体 ── M5Stack K151</text>
  <text x="470" y="216" text-anchor="start" font-size="10" fill="#4E7590">CoreS3 / ESP32-S3</text>
  <text x="470" y="236" text-anchor="start" font-size="11" fill="#B37C00">中のファーム ── stackchan-mcp</text>
  <text x="470" y="252" text-anchor="start" font-size="9" fill="#B37C00">xiaozhi のフォーク</text>
  <circle cx="300" cy="300" r="5" fill="#FF6B6B"/><circle cx="318" cy="308" r="5" fill="#FF9F40"/><circle cx="338" cy="313" r="5" fill="#FFC831"/><circle cx="358" cy="316" r="5" fill="#55C96A"/><circle cx="380" cy="317" r="5" fill="#2E9BE0"/><circle cx="402" cy="316" r="5" fill="#9B7BF0"/><circle cx="422" cy="313" r="5" fill="#FF6B6B"/><circle cx="442" cy="308" r="5" fill="#FF9F40"/><circle cx="460" cy="300" r="5" fill="#FFC831"/>
  <text x="470" y="300" text-anchor="start" font-size="11" fill="#2E8C42">光 ── LED テープ 30粒（A093）</text>
  <rect x="30" y="180" width="180" height="96" rx="16" fill="#2B2F36" stroke="#4E7590" stroke-width="3"/>
  <circle cx="70" cy="222" r="24" fill="#1c1f24" stroke="#87A6BC" stroke-width="2"/>
  <circle cx="130" cy="204" r="7" fill="#87A6BC"/><circle cx="160" cy="204" r="7" fill="#87A6BC"/><circle cx="190" cy="204" r="7" fill="#FFC831"/>
  <rect x="125" y="222" width="14" height="14" rx="3" fill="#8FDBF5"/><rect x="145" y="222" width="14" height="14" rx="3" fill="#8FDBF5"/><rect x="165" y="222" width="14" height="14" rx="3" fill="#8FDBF5"/><rect x="185" y="222" width="14" height="14" rx="3" fill="#8FDBF5"/>
  <rect x="150" y="246" width="40" height="8" rx="3" fill="#FF6B6B"/>
  <text x="120" y="294" text-anchor="middle" font-size="12" fill="#1A73C4">DJ 機材 ── DDJ-FLX2</text>
  <text x="120" y="310" text-anchor="middle" font-size="10" fill="#4E7590">つまみ・パッド・フェーダー。USB</text>
  <rect x="150" y="340" width="460" height="120" rx="18" fill="#E4F6FC" stroke="#2E9BE0" stroke-width="3"/>
  <text x="380" y="362" text-anchor="middle" font-size="13" fill="#1A73C4">母艦 ── MacBook 1台（Wi-Fi もここが出す）</text>
  <rect x="164" y="374" width="104" height="72" rx="12" fill="#FFF2CC"/>
  <text x="216" y="396" text-anchor="middle" font-size="12" fill="#173A54">窓口</text>
  <text x="216" y="414" text-anchor="middle" font-size="10" fill="#4E7590">gateway</text>
  <text x="216" y="430" text-anchor="middle" font-size="9" fill="#4E7590">stackchan-mcp</text>
  <rect x="276" y="374" width="104" height="72" rx="12" fill="#FFE2E2"/>
  <text x="328" y="396" text-anchor="middle" font-size="12" fill="#173A54">演技</text>
  <text x="328" y="414" text-anchor="middle" font-size="10" fill="#4E7590">console</text>
  <text x="328" y="430" text-anchor="middle" font-size="9" fill="#4E7590">自作 Python</text>
  <rect x="388" y="374" width="104" height="72" rx="12" fill="#DCF5DF"/>
  <text x="440" y="396" text-anchor="middle" font-size="12" fill="#173A54">考える</text>
  <text x="440" y="414" text-anchor="middle" font-size="10" fill="#4E7590">Ollama</text>
  <text x="440" y="430" text-anchor="middle" font-size="9" fill="#4E7590">gemma3 / qwen2.5</text>
  <rect x="500" y="374" width="98" height="72" rx="12" fill="#DCF5DF"/>
  <text x="549" y="396" text-anchor="middle" font-size="12" fill="#173A54">声・聞き取り</text>
  <text x="549" y="414" text-anchor="middle" font-size="10" fill="#4E7590">VOICEVOX</text>
  <text x="549" y="430" text-anchor="middle" font-size="9" fill="#4E7590">faster-whisper</text>
  <line x1="210" y1="250" x2="230" y2="338" stroke="#4E7590" stroke-width="2" marker-end="url(#arr)"/>
  <text x="236" y="300" text-anchor="middle" font-size="9" fill="#4E7590">USB</text>
  <path d="M380 340 Q 380 320 380 302" fill="none" stroke="#2E9BE0" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arr)" marker-start="url(#arr)"/>
  <path d="M606 342 Q 748 210 515 48" fill="none" stroke="#2E9BE0" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arr)"/>
  <text x="712" y="170" text-anchor="middle" font-size="10" fill="#1A73C4">Wi-Fi</text>
  <text x="380" y="486" text-anchor="middle" font-size="12" fill="#1A73C4">買ったもの・OSS・自作が、机の上でこう並んでいる。いじったのは、ファーム1行・gateway 6ファイル・あとは自作</text>
</svg></div>` +
            K.cards([
              { k: '身体', v: 'M5Stack K151<br>（CoreS3 / ESP32-S3）', d: '<b>そのまま。</b>サーボ2基・カメラ・マイク・3ゾーンタッチ・LED 12個・バッテリー 550mAh。¥18,150' },
              { k: 'ファーム', v: 'stackchan-mcp<br>（xiaozhi のフォーク）', d: '<b>改造は1行。</b>起動直後の Wi-Fi 省電力を切る（効果はまだ確かめ切れていない）。頭なでの検出は上流の PR #374 を焼いた。表情14枚は自作の画像を起動時に流し込む（ファームは触らない）' },
              { k: '窓口', v: 'stackchan-mcp gateway<br>（Python）', d: '<b>改造 6ファイル。</b>踊りの閾値を外から変えられるように／聞き取り（小さい音を持ち上げる・当日の語彙を先に教える・無音を捨てる）／名乗り方（Tailscale の網を除外）／実機から来る信号の切り分けログ。改変は patch にして持ち運ぶ' },
              { k: '演技', v: 'console<br>（自作 Python 約9,300行）', d: '<b>自作。</b>MIDI・拍・タッチ・NFC → 状態1つ → 差分で反映。表情・振り付け・LED 13種・割り当て表・受付もここ。テスト 524 件' },
              { k: '考える', v: 'Ollama<br>gemma3:4b／qwen2.5:14b', d: '<b>そのまま。</b>触ったのはモデルの選択とプロンプトだけ。会話は小さく速く、質疑 bot は大きく正確に' },
              { k: '声・聞き取り', v: 'VOICEVOX<br>faster-whisper', d: '<b>そのまま。</b>VOICEVOX は話者14を選んだだけ。faster-whisper の使い方は gateway 側で少し直した（上の6ファイルに含む）' },
              { k: 'DJ 機材', v: 'Pioneer DDJ-FLX2', d: '<b>そのまま。</b>USB MIDI、ドライバ不要。どのつまみを何にするかの割り当て表（mapping.json）は自作' },
              { k: '光', v: 'LED テープ SK6812 30粒<br>（M5Stack A093）', d: '<b>そのまま。</b>Grove Port B。全開 5V 1.8A なので上限 35% はソフト側で。¥1,344' },
              { k: '受付', v: 'RFID 2 Unit<br>（WS1850S / I2C 0x28）', d: '<b>そのまま。</b>Grove Port A。読むコードは自作（ファームの汎用 I2C の道具を母艦から叩く）' },
              { k: '背景', v: 'iPad ＋ ブラウザ1枚<br>（stage.html）', d: '<b>自作。</b>奥から手前へ7層。実機と同じ色の列を受け取る' },
              { k: '網', v: 'MacBook のインターネット共有', d: '<b>設定だけ。</b>2.4GHz。MacBook は 192.168.2.1 固定。外には出ない' },
            ]) },

    { ch: 3, tag: 'DJ 台 → PC → ｽﾀｯｸﾁｬﾝ',
      talk: `<b>3つの関係は「機材が数字を出す → PC が意味に翻訳する → 実機が身体で出す」です。</b><br>
             DJ 機材は USB で PC に刺さっているだけ（ドライバ不要）。PC の中にあるのは、<b>翻訳表（mapping.json）と、いまの状態を1つ持つ console</b>。実機はそれを首・顔・光で出すだけ。
             下の見取り図のとおりに、その場で触ります。表情は<b>4秒で自動的に idle に戻る</b>ので、押しっぱなしでも顔が固定されません。`,
      html: K.head('機材は数字を出す。PC が翻訳する。<em>実機は身体で出す。</em>') +
            `<div class="panel"><svg viewBox="0 0 760 250" role="img" aria-label="DJ機材からｽﾀｯｸﾁｬﾝまでの翻訳の流れ：機材がMIDIの数字を出し、consoleが翻訳表で意味に変え、状態を1つに決め、gatewayが実機へ、同じ配列が背景へ" style="width:100%;height:auto;display:block;font-family:inherit;font-weight:700">
  <defs><marker id="ar5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#4E7590"/></marker></defs>
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
  <line x1="150" y1="105" x2="188" y2="105" stroke="#4E7590" stroke-width="2" marker-end="url(#ar5)"/>
  <text x="169" y="96" text-anchor="middle" font-size="10" fill="#4E7590">USB</text>
  <line x1="304" y1="114" x2="316" y2="114" stroke="#4E7590" stroke-width="2" marker-end="url(#ar5)"/>
  <line x1="422" y1="114" x2="434" y2="114" stroke="#4E7590" stroke-width="2" marker-end="url(#ar5)"/>
  <line x1="550" y1="80" x2="588" y2="62" stroke="#4E7590" stroke-width="2" marker-end="url(#ar5)"/>
  <text x="569" y="56" text-anchor="middle" font-size="10" fill="#4E7590">Wi-Fi</text>
  <line x1="550" y1="130" x2="588" y2="150" stroke="#4E7590" stroke-width="2" marker-end="url(#ar5)"/>
  <text x="380" y="222" text-anchor="middle" font-size="12" fill="#1A73C4">機材は数字を出す → PC が意味に翻訳する → 実機は身体で出す。翻訳表を書き換えれば、同じ機材で別のスタックチャンになる</text>
</svg></div>` +
            K.lead('<b>どのつまみが、何になるか。</b>DDJ-FLX2 を上から見た図で。') +
            `<div class="panel"><svg viewBox="0 0 760 330" role="img" aria-label="DJ 機材の見取り図と割り当て：左のジョグを擦ると光が刻む、EQ つまみで首が回る、FILTER でうなずく、パッド4枚で表情、音量フェーダーでバースト、PLAY で踊り ON、MASTER で OFF" style="width:100%;height:auto;display:block;font-family:inherit;font-weight:700">
  <defs><marker id="ar8" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#1A73C4"/></marker></defs>
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
  <line x1="150" y1="118" x2="150" y2="34" stroke="#1A73C4" stroke-width="2" marker-end="url(#ar8)"/>
  <text x="150" y="26" text-anchor="middle" font-size="12" fill="#1A73C4">擦る → LED が白く速く刻む</text>
  <line x1="330" y1="175" x2="250" y2="60" stroke="#1A73C4" stroke-width="2" marker-end="url(#ar8)"/>
  <text x="228" y="52" text-anchor="middle" font-size="12" fill="#1A73C4">EQ（CC23）→ 首が左右に</text>
  <line x1="330" y1="215" x2="300" y2="300" stroke="#1A73C4" stroke-width="2" marker-end="url(#ar8)"/>
  <text x="290" y="318" text-anchor="middle" font-size="12" fill="#1A73C4">FILTER（CC15）→ うなずく</text>
  <line x1="380" y1="110" x2="470" y2="36" stroke="#1A73C4" stroke-width="2" marker-end="url(#ar8)"/>
  <text x="500" y="28" text-anchor="middle" font-size="12" fill="#1A73C4">音量フェーダー → 70% 赤 / 100% 花火</text>
  <line x1="264" y1="222" x2="180" y2="300" stroke="#1A73C4" stroke-width="2" marker-end="url(#ar8)"/>
  <text x="130" y="318" text-anchor="middle" font-size="12" fill="#1A73C4">パッド4枚 → 表情（4秒で戻る）</text>
  <line x1="106" y1="258" x2="60" y2="300" stroke="#1A73C4" stroke-width="2" marker-end="url(#ar8)"/>
  <text x="44" y="318" text-anchor="start" font-size="11" fill="#1A73C4">PLAY → 踊り ON</text>
  <line x1="380" y1="266" x2="470" y2="300" stroke="#1A73C4" stroke-width="2" marker-end="url(#ar8)"/>
  <text x="520" y="318" text-anchor="middle" font-size="12" fill="#1A73C4">MASTER → 踊り OFF（会話へ）</text>
  <line x1="610" y1="118" x2="610" y2="34" stroke="#1A73C4" stroke-width="2" marker-end="url(#ar8)" stroke-dasharray="5 4"/>
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
            K.memo('番号は推測せず、<b>1つずつ動かして覚えさせました</b>（2026-09-08 実測）。最初「うなずきは 0〜64」と記録して間違えた。本人が中央で止めた区間を全可動域と解釈していた。<b>0 と 127 の両方が観測されたこと</b>を全可動域の条件にした。翻訳表を書き換えれば、同じ機材で別のスタックチャンになる。') },

    { ch: 3, tag: '作り方 — 会話で動かしてから、コードに',
      talk: `<b>これが開発の実体です。コードを書く前に、まず会話で動かします。</b><br>
             動いてから、繰り返したいものだけコードにしています。2週間・175コミット・手を動かした日は7日（git の記録）。`,
      html: K.head('線で繋いで、<em>話しかけて作る。</em>') +
            K.quote('右を向いて、写真を撮って', '→ 首が振れて、画像が返ってきます（Claude Code から MCP で）') +
            K.cards([
              { k: '1日目', v: '会話で動かす', d: 'MCP の道具を Claude Code から呼ぶだけ。コードはゼロ' },
              { k: '2日目〜', v: '繰り返すものをコードに', d: '踊り・LED・タッチ反応は毎秒動くので、Python の console に' },
              { k: '途中から', v: 'テストを先に書く', d: '設計の不変条件7つをテストにしたら、<b>違反が35箇所</b>機械的に出た' },
            ]) },

    { ch: 3, tag: '実際に使っているプロンプト',
      talk: `<b>要点だけ。</b>短いのが特徴。ロールを増やすほど失敗するので、土台は壊れない指示だけ。知識はファイルで渡す。全文はリポジトリに。`,
      html: K.cards([
              { k: '① 会話の土台', v: '実機が喋るときの人格', d: '<code>手のひらサイズのロボット。返答は2文以内。先頭に感情タグ（Happy / Sad …）。分からないことは作らない。</code>' },
              { k: '② 参加者カード', v: '4項目だけ', d: '<code>名前／話し方／好きなもの／やらないこと</code>。1分で書ける量に絞る' },
              { k: '③ 質疑 bot', v: '資料の外は答えない', d: '<code>今日配った資料の中からだけ答える。2〜3文。無ければ「僕の記憶にありません」。</code> 資料の抜粋は機械が貼る。道具は持たない' },
              { k: '④ 持ち帰り用', v: '自分の Claude Code に貼る一文', d: '<code>このリポジトリを読んで、僕の状況に合わせて手順を出して。持っているもの／いまの状態／今日やりたいこと。</code>' },
            ]) +
            K.memo('<b>長い指示より、テストと資料を渡すほうが効く。</b>作るときの指示は「右を向いて、写真を撮って」で足りた。') },

    { ch: 3, tag: '直すときは、足さずに減らす',
      talk: `<b>この画面で持ち帰ってほしいのは1つ：同じ壊れ方が2回出たら、機能を足さずに「状態の置き場所」を疑う。</b><br>
             踊りが止まらない、瞬きが消える。機能の不足だと思って叩いていたら、表情を出す箇所が19、瞬きが12、持ち主がいなかった。<b>「いまどうあるべきか」を1か所に書いたら、見張り役が消えて、バグも消えました。</b>AI と一緒に作るときほど効きます。直す場所が1か所になるので。`,
      html: K.head('直すときは、<em>足さずに減らす。</em>') +
            K.lead('<b>「いまどうあるべきか」を1か所に書いたら、見張り役が消えて、バグも消えた。</b>同じ壊れ方が2回出たら、状態の置き場所を疑う。') +
            `<div class="panel"><svg viewBox="0 0 760 300" role="img" aria-label="状態の持ち方：前は19箇所が実機を直接叩いていた。後は入力が1つの状態に集まり、優先順で1つに決まり、反映役が差分だけを実機と背景に送る" style="width:100%;height:auto;display:block;font-family:inherit;font-weight:700">
  <defs><marker id="ar3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#4E7590"/></marker></defs>
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
  <line x1="370" y1="120" x2="398" y2="120" stroke="#4E7590" stroke-width="2" marker-end="url(#ar3)"/>
  <line x1="580" y1="120" x2="608" y2="120" stroke="#4E7590" stroke-width="2" marker-end="url(#ar3)"/>
  <text x="380" y="236" text-anchor="middle" font-size="12" fill="#1A73C4">見張り役が要らなくなって消えた。足して直すのではなく、減らして直った</text>
  <text x="380" y="262" text-anchor="middle" font-size="11" fill="#4E7590">新旧に同じ時刻を流して 16,000 点で最大差 0.0000000000 度を確かめてから、旧コードを消した</text>
</svg></div>` +
            K.cards([
              { k: '前', v: '各所が実機を叩く', d: '「顔を出せ」「N秒後に戻せ」を19箇所が送る → 戻し忘れ・割り込み・上書き合戦' },
              { k: '後', v: '「いまどうあるべきか」を1箇所に', d: '状態は1つ（Presence）。優先順は つまみ > タッチ > NFC > 聞く > 落ち > 歓声 > 顔。反映役（Reconciler）が差分だけ実機に送る' },
              { k: '結果', v: '見張り役が1つ消えた', d: '「音が止まったら畳む」監督が要らなくなった。<b>足して直すのではなく、減らして直る</b>' },
              { k: '持ち帰り', v: '同じ壊れ方が2回出たら、状態の置き場所を疑う', d: '首・表情・光の「いまの値」を持っているのが何か所あるか数える。2か所以上なら、1か所にまとめてから直す。AI に任せる範囲も広がる（直す場所が1つになるので）' },
            ]) +
            K.memo('リファクタの出口は数字で。旧コードを残して新旧に同じ時刻を流し、<b>4種の BPM × 4,000点 = 16,000点で最大差 0.0000000000 度</b>を確かめてから旧コードを消しました。') },

    { ch: 3, tag: '完成の条件を、先にテストで書く',
      talk: `<b>言葉のままだと、実装しながらずれます。テストなら、ずれたら落ちます。</b><br>
             だから<b>エージェントに任せられる範囲が広がります。</b>いまテストは 524 件、1回 16 秒で全部回ります。`,
      html: K.head('首を<span class="r">49.8度</span>振る指示が出てきました。') +
            K.lead('上限は40度。<b>超えた分は黙って丸められていました。</b>「頷きが弱い」の正体がこれ。コードを読んでも気づけません。') +
            K.cards([
              { k: '順番', v: '① 仕様をテストに書く → ② 赤を見る → ③ 直す', d: '赤を見ると直す範囲が確定する。推測で広く触らなくて済む' },
              { k: '罠', v: '偽物を本物より甘くしない', d: 'テスト363件が緑なのに画面が真っ白だった。テスト用の偽 canvas が「何もしない」実装で、本物だけが例外を投げていた' },
              { k: '罠', v: 'import が通る ≠ 動く', d: '1,218行を9ファイルに割ったら、テストは通るのに未定義の名前が30個。静的解析で捕まえた' },
            ]) },

    /* ───────── お披露目会（仕組みのあと） ───────── */
    { ch: 4, tag: 'お披露目会', cover: { num: '♥', title: '持ってきたスタックチャンのお披露目会！', sub: '推しポイントを、1人2分' },
      talk: `<b>事例の話のすぐあとに、持ってきた人の番です。</b>堅苦しいことは無し。<b>共有したい人が、自分の大好きなスタックチャンの推しポイントを共有する時間</b>です。<br>
             1人2分、拍手で交代。進行役は司会と時計係だけ。` },

    { ch: 4, tag: '推しポイントを、2分で',
      talk: `<b>言うこと：「持ってきてくれた方、自分の大好きなスタックチャンの推しポイントを2分でどうぞ！」</b><br>
             受付でお披露目スペースに並べてもらった順に。写真は受付で撮ったものを背景（iPad）に。全員で見ます。`,
      html: K.head('自分の大好きなスタックチャンの、<em>推しポイントを。</em>') +
            K.cards([
              { k: '出る人', v: '持ってきた人で、共有したい人', d: '受付のカードの順に。3人で6分、4人なら1人90秒に。飛び入りも歓迎。出たくない人は並べるだけで OK' },
              { k: '2分の中身', v: '名前 → 推しポイント（できれば実演30秒）→ 一言', d: '技術の話でなくてよい。「顔がかわいい」「声がいい」「この動きが好き」で十分。中身（ファーム・頭脳）は聞かれたら' },
              { k: '進行役は', v: '拍手の音頭と時計だけ', d: '質問は1つまで。「どこがいちばん好き？」。続きはお披露目スペースで、そのスタックチャンの前で' },
              { k: 'X でつぶやく', v: '#ｽﾀｯｸﾁｬﾝｻﾞｷﾞｬｻﾞﾘﾝｸﾞ', d: '下の QR を読むと X が開いて、ハッシュタグが入った状態になります。会場の写真と一緒にどうぞ。背景の iPad にも同じ QR を出しておく' },
            ]) +
            `<div class="panel" style="text-align:center"><svg width="220" height="220" version="1.1" viewBox="0 0 53 53" xmlns="http://www.w3.org/2000/svg"><path d="M2,2H3V3H2zM3,2H4V3H3zM4,2H5V3H4zM5,2H6V3H5zM6,2H7V3H6zM7,2H8V3H7zM8,2H9V3H8zM11,2H12V3H11zM15,2H16V3H15zM19,2H20V3H19zM20,2H21V3H20zM21,2H22V3H21zM22,2H23V3H22zM23,2H24V3H23zM24,2H25V3H24zM25,2H26V3H25zM26,2H27V3H26zM27,2H28V3H27zM30,2H31V3H30zM36,2H37V3H36zM37,2H38V3H37zM39,2H40V3H39zM42,2H43V3H42zM44,2H45V3H44zM45,2H46V3H45zM46,2H47V3H46zM47,2H48V3H47zM48,2H49V3H48zM49,2H50V3H49zM50,2H51V3H50zM2,3H3V4H2zM8,3H9V4H8zM12,3H13V4H12zM14,3H15V4H14zM15,3H16V4H15zM16,3H17V4H16zM17,3H18V4H17zM18,3H19V4H18zM19,3H20V4H19zM20,3H21V4H20zM23,3H24V4H23zM25,3H26V4H25zM28,3H29V4H28zM29,3H30V4H29zM32,3H33V4H32zM33,3H34V4H33zM35,3H36V4H35zM40,3H41V4H40zM41,3H42V4H41zM42,3H43V4H42zM44,3H45V4H44zM50,3H51V4H50zM2,4H3V5H2zM4,4H5V5H4zM5,4H6V5H5zM6,4H7V5H6zM8,4H9V5H8zM13,4H14V5H13zM14,4H15V5H14zM15,4H16V5H15zM16,4H17V5H16zM18,4H19V5H18zM23,4H24V5H23zM25,4H26V5H25zM29,4H30V5H29zM31,4H32V5H31zM32,4H33V5H32zM33,4H34V5H33zM35,4H36V5H35zM41,4H42V5H41zM42,4H43V5H42zM44,4H45V5H44zM46,4H47V5H46zM47,4H48V5H47zM48,4H49V5H48zM50,4H51V5H50zM2,5H3V6H2zM4,5H5V6H4zM5,5H6V6H5zM6,5H7V6H6zM8,5H9V6H8zM12,5H13V6H12zM16,5H17V6H16zM18,5H19V6H18zM19,5H20V6H19zM23,5H24V6H23zM24,5H25V6H24zM26,5H27V6H26zM29,5H30V6H29zM30,5H31V6H30zM31,5H32V6H31zM33,5H34V6H33zM34,5H35V6H34zM35,5H36V6H35zM36,5H37V6H36zM37,5H38V6H37zM38,5H39V6H38zM41,5H42V6H41zM44,5H45V6H44zM46,5H47V6H46zM47,5H48V6H47zM48,5H49V6H48zM50,5H51V6H50zM2,6H3V7H2zM4,6H5V7H4zM5,6H6V7H5zM6,6H7V7H6zM8,6H9V7H8zM11,6H12V7H11zM12,6H13V7H12zM17,6H18V7H17zM19,6H20V7H19zM20,6H21V7H20zM21,6H22V7H21zM22,6H23V7H22zM23,6H24V7H23zM24,6H25V7H24zM25,6H26V7H25zM26,6H27V7H26zM27,6H28V7H27zM28,6H29V7H28zM30,6H31V7H30zM31,6H32V7H31zM32,6H33V7H32zM35,6H36V7H35zM37,6H38V7H37zM38,6H39V7H38zM44,6H45V7H44zM46,6H47V7H46zM47,6H48V7H47zM48,6H49V7H48zM50,6H51V7H50zM2,7H3V8H2zM8,7H9V8H8zM10,7H11V8H10zM14,7H15V8H14zM15,7H16V8H15zM16,7H17V8H16zM22,7H23V8H22zM23,7H24V8H23zM24,7H25V8H24zM28,7H29V8H28zM30,7H31V8H30zM32,7H33V8H32zM34,7H35V8H34zM36,7H37V8H36zM37,7H38V8H37zM39,7H40V8H39zM40,7H41V8H40zM44,7H45V8H44zM50,7H51V8H50zM2,8H3V9H2zM3,8H4V9H3zM4,8H5V9H4zM5,8H6V9H5zM6,8H7V9H6zM7,8H8V9H7zM8,8H9V9H8zM10,8H11V9H10zM12,8H13V9H12zM14,8H15V9H14zM16,8H17V9H16zM18,8H19V9H18zM20,8H21V9H20zM22,8H23V9H22zM24,8H25V9H24zM26,8H27V9H26zM28,8H29V9H28zM30,8H31V9H30zM32,8H33V9H32zM34,8H35V9H34zM36,8H37V9H36zM38,8H39V9H38zM40,8H41V9H40zM42,8H43V9H42zM44,8H45V9H44zM45,8H46V9H45zM46,8H47V9H46zM47,8H48V9H47zM48,8H49V9H48zM49,8H50V9H49zM50,8H51V9H50zM12,9H13V10H12zM19,9H20V10H19zM20,9H21V10H20zM24,9H25V10H24zM28,9H29V10H28zM30,9H31V10H30zM32,9H33V10H32zM34,9H35V10H34zM35,9H36V10H35zM37,9H38V10H37zM38,9H39V10H38zM2,10H3V11H2zM5,10H6V11H5zM7,10H8V11H7zM8,10H9V11H8zM10,10H11V11H10zM11,10H12V11H11zM13,10H14V11H13zM15,10H16V11H15zM17,10H18V11H17zM23,10H24V11H23zM24,10H25V11H24zM25,10H26V11H25zM26,10H27V11H26zM27,10H28V11H27zM28,10H29V11H28zM29,10H30V11H29zM33,10H34V11H33zM35,10H36V11H35zM38,10H39V11H38zM39,10H40V11H39zM43,10H44V11H43zM45,10H46V11H45zM5,11H6V12H5zM7,11H8V12H7zM9,11H10V12H9zM11,11H12V12H11zM15,11H16V12H15zM16,11H17V12H16zM17,11H18V12H17zM18,11H19V12H18zM20,11H21V12H20zM24,11H25V12H24zM25,11H26V12H25zM30,11H31V12H30zM31,11H32V12H31zM33,11H34V12H33zM34,11H35V12H34zM35,11H36V12H35zM36,11H37V12H36zM37,11H38V12H37zM38,11H39V12H38zM42,11H43V12H42zM43,11H44V12H43zM44,11H45V12H44zM46,11H47V12H46zM47,11H48V12H47zM49,11H50V12H49zM50,11H51V12H50zM3,12H4V13H3zM6,12H7V13H6zM7,12H8V13H7zM8,12H9V13H8zM9,12H10V13H9zM13,12H14V13H13zM15,12H16V13H15zM20,12H21V13H20zM21,12H22V13H21zM25,12H26V13H25zM26,12H27V13H26zM29,12H30V13H29zM30,12H31V13H30zM31,12H32V13H31zM33,12H34V13H33zM37,12H38V13H37zM39,12H40V13H39zM41,12H42V13H41zM43,12H44V13H43zM44,12H45V13H44zM45,12H46V13H45zM47,12H48V13H47zM48,12H49V13H48zM50,12H51V13H50zM2,13H3V14H2zM3,13H4V14H3zM7,13H8V14H7zM12,13H13V14H12zM16,13H17V14H16zM17,13H18V14H17zM18,13H19V14H18zM22,13H23V14H22zM23,13H24V14H23zM24,13H25V14H24zM25,13H26V14H25zM29,13H30V14H29zM30,13H31V14H30zM31,13H32V14H31zM32,13H33V14H32zM35,13H36V14H35zM36,13H37V14H36zM38,13H39V14H38zM44,13H45V14H44zM45,13H46V14H45zM46,13H47V14H46zM48,13H49V14H48zM49,13H50V14H49zM2,14H3V15H2zM4,14H5V15H4zM6,14H7V15H6zM8,14H9V15H8zM11,14H12V15H11zM12,14H13V15H12zM13,14H14V15H13zM14,14H15V15H14zM16,14H17V15H16zM17,14H18V15H17zM18,14H19V15H18zM19,14H20V15H19zM20,14H21V15H20zM22,14H23V15H22zM25,14H26V15H25zM26,14H27V15H26zM27,14H28V15H27zM28,14H29V15H28zM29,14H30V15H29zM30,14H31V15H30zM31,14H32V15H31zM33,14H34V15H33zM34,14H35V15H34zM37,14H38V15H37zM38,14H39V15H38zM39,14H40V15H39zM40,14H41V15H40zM41,14H42V15H41zM47,14H48V15H47zM2,15H3V16H2zM3,15H4V16H3zM5,15H6V16H5zM15,15H16V16H15zM16,15H17V16H16zM17,15H18V16H17zM18,15H19V16H18zM19,15H20V16H19zM21,15H22V16H21zM22,15H23V16H22zM23,15H24V16H23zM24,15H25V16H24zM26,15H27V16H26zM27,15H28V16H27zM29,15H30V16H29zM30,15H31V16H30zM33,15H34V16H33zM34,15H35V16H34zM35,15H36V16H35zM39,15H40V16H39zM43,15H44V16H43zM46,15H47V16H46zM48,15H49V16H48zM50,15H51V16H50zM6,16H7V17H6zM8,16H9V17H8zM10,16H11V17H10zM12,16H13V17H12zM14,16H15V17H14zM17,16H18V17H17zM22,16H23V17H22zM23,16H24V17H23zM24,16H25V17H24zM26,16H27V17H26zM28,16H29V17H28zM31,16H32V17H31zM33,16H34V17H33zM34,16H35V17H34zM35,16H36V17H35zM36,16H37V17H36zM37,16H38V17H37zM40,16H41V17H40zM42,16H43V17H42zM43,16H44V17H43zM46,16H47V17H46zM47,16H48V17H47zM50,16H51V17H50zM3,17H4V18H3zM4,17H5V18H4zM5,17H6V18H5zM11,17H12V18H11zM12,17H13V18H12zM13,17H14V18H13zM15,17H16V18H15zM16,17H17V18H16zM18,17H19V18H18zM22,17H23V18H22zM23,17H24V18H23zM24,17H25V18H24zM25,17H26V18H25zM26,17H27V18H26zM32,17H33V18H32zM35,17H36V18H35zM36,17H37V18H36zM37,17H38V18H37zM39,17H40V18H39zM42,17H43V18H42zM46,17H47V18H46zM47,17H48V18H47zM49,17H50V18H49zM2,18H3V19H2zM6,18H7V19H6zM7,18H8V19H7zM8,18H9V19H8zM9,18H10V19H9zM10,18H11V19H10zM11,18H12V19H11zM15,18H16V19H15zM16,18H17V19H16zM17,18H18V19H17zM18,18H19V19H18zM19,18H20V19H19zM22,18H23V19H22zM24,18H25V19H24zM26,18H27V19H26zM30,18H31V19H30zM32,18H33V19H32zM33,18H34V19H33zM34,18H35V19H34zM37,18H38V19H37zM39,18H40V19H39zM42,18H43V19H42zM43,18H44V19H43zM44,18H45V19H44zM48,18H49V19H48zM2,19H3V20H2zM4,19H5V20H4zM6,19H7V20H6zM10,19H11V20H10zM12,19H13V20H12zM15,19H16V20H15zM16,19H17V20H16zM19,19H20V20H19zM21,19H22V20H21zM22,19H23V20H22zM28,19H29V20H28zM29,19H30V20H29zM31,19H32V20H31zM34,19H35V20H34zM42,19H43V20H42zM45,19H46V20H45zM49,19H50V20H49zM2,20H3V21H2zM3,20H4V21H3zM4,20H5V21H4zM6,20H7V21H6zM8,20H9V21H8zM11,20H12V21H11zM14,20H15V21H14zM15,20H16V21H15zM16,20H17V21H16zM17,20H18V21H17zM19,20H20V21H19zM20,20H21V21H20zM21,20H22V21H21zM23,20H24V21H23zM25,20H26V21H25zM26,20H27V21H26zM27,20H28V21H27zM28,20H29V21H28zM29,20H30V21H29zM31,20H32V21H31zM32,20H33V21H32zM33,20H34V21H33zM35,20H36V21H35zM36,20H37V21H36zM37,20H38V21H37zM40,20H41V21H40zM42,20H43V21H42zM44,20H45V21H44zM45,20H46V21H45zM46,20H47V21H46zM48,20H49V21H48zM49,20H50V21H49zM2,21H3V22H2zM6,21H7V22H6zM11,21H12V22H11zM13,21H14V22H13zM15,21H16V22H15zM19,21H20V22H19zM20,21H21V22H20zM21,21H22V22H21zM22,21H23V22H22zM24,21H25V22H24zM25,21H26V22H25zM26,21H27V22H26zM27,21H28V22H27zM29,21H30V22H29zM32,21H33V22H32zM33,21H34V22H33zM34,21H35V22H34zM36,21H37V22H36zM38,21H39V22H38zM42,21H43V22H42zM45,21H46V22H45zM46,21H47V22H46zM48,21H49V22H48zM49,21H50V22H49zM2,22H3V23H2zM4,22H5V23H4zM5,22H6V23H5zM6,22H7V23H6zM8,22H9V23H8zM11,22H12V23H11zM14,22H15V23H14zM16,22H17V23H16zM17,22H18V23H17zM18,22H19V23H18zM20,22H21V23H20zM21,22H22V23H21zM23,22H24V23H23zM26,22H27V23H26zM27,22H28V23H27zM29,22H30V23H29zM36,22H37V23H36zM38,22H39V23H38zM39,22H40V23H39zM40,22H41V23H40zM44,22H45V23H44zM47,22H48V23H47zM3,23H4V24H3zM4,23H5V24H4zM5,23H6V24H5zM6,23H7V24H6zM14,23H15V24H14zM18,23H19V24H18zM19,23H20V24H19zM20,23H21V24H20zM23,23H24V24H23zM24,23H25V24H24zM25,23H26V24H25zM27,23H28V24H27zM30,23H31V24H30zM38,23H39V24H38zM41,23H42V24H41zM44,23H45V24H44zM46,23H47V24H46zM6,24H7V25H6zM7,24H8V25H7zM8,24H9V25H8zM9,24H10V25H9zM10,24H11V25H10zM11,24H12V25H11zM12,24H13V25H12zM13,24H14V25H13zM17,24H18V25H17zM20,24H21V25H20zM24,24H25V25H24zM25,24H26V25H25zM26,24H27V25H26zM27,24H28V25H27zM28,24H29V25H28zM29,24H30V25H29zM30,24H31V25H30zM31,24H32V25H31zM34,24H35V25H34zM36,24H37V25H36zM37,24H38V25H37zM39,24H40V25H39zM42,24H43V25H42zM43,24H44V25H43zM44,24H45V25H44zM45,24H46V25H45zM46,24H47V25H46zM47,24H48V25H47zM48,24H49V25H48zM2,25H3V26H2zM3,25H4V26H3zM4,25H5V26H4zM5,25H6V26H5zM6,25H7V26H6zM10,25H11V26H10zM13,25H14V26H13zM14,25H15V26H14zM16,25H17V26H16zM17,25H18V26H17zM21,25H22V26H21zM24,25H25V26H24zM28,25H29V26H28zM31,25H32V26H31zM32,25H33V26H32zM33,25H34V26H33zM34,25H35V26H34zM37,25H38V26H37zM38,25H39V26H38zM39,25H40V26H39zM41,25H42V26H41zM42,25H43V26H42zM46,25H47V26H46zM48,25H49V26H48zM6,26H7V27H6zM8,26H9V27H8zM10,26H11V27H10zM14,26H15V27H14zM18,26H19V27H18zM19,26H20V27H19zM21,26H22V27H21zM22,26H23V27H22zM24,26H25V27H24zM26,26H27V27H26zM28,26H29V27H28zM33,26H34V27H33zM35,26H36V27H35zM36,26H37V27H36zM37,26H38V27H37zM40,26H41V27H40zM42,26H43V27H42zM44,26H45V27H44zM46,26H47V27H46zM47,26H48V27H47zM49,26H50V27H49zM3,27H4V28H3zM6,27H7V28H6zM10,27H11V28H10zM11,27H12V28H11zM16,27H17V28H16zM17,27H18V28H17zM18,27H19V28H18zM19,27H20V28H19zM20,27H21V28H20zM24,27H25V28H24zM28,27H29V28H28zM29,27H30V28H29zM30,27H31V28H30zM32,27H33V28H32zM33,27H34V28H33zM35,27H36V28H35zM37,27H38V28H37zM39,27H40V28H39zM40,27H41V28H40zM42,27H43V28H42zM46,27H47V28H46zM47,27H48V28H47zM3,28H4V29H3zM5,28H6V29H5zM6,28H7V29H6zM7,28H8V29H7zM8,28H9V29H8zM9,28H10V29H9zM10,28H11V29H10zM15,28H16V29H15zM16,28H17V29H16zM20,28H21V29H20zM21,28H22V29H21zM24,28H25V29H24zM25,28H26V29H25zM26,28H27V29H26zM27,28H28V29H27zM28,28H29V29H28zM29,28H30V29H29zM30,28H31V29H30zM33,28H34V29H33zM35,28H36V29H35zM36,28H37V29H36zM38,28H39V29H38zM39,28H40V29H39zM41,28H42V29H41zM42,28H43V29H42zM43,28H44V29H43zM44,28H45V29H44zM45,28H46V29H45zM46,28H47V29H46zM47,28H48V29H47zM50,28H51V29H50zM2,29H3V30H2zM3,29H4V30H3zM4,29H5V30H4zM5,29H6V30H5zM9,29H10V30H9zM10,29H11V30H10zM14,29H15V30H14zM16,29H17V30H16zM23,29H24V30H23zM27,29H28V30H27zM29,29H30V30H29zM30,29H31V30H30zM32,29H33V30H32zM33,29H34V30H33zM34,29H35V30H34zM36,29H37V30H36zM37,29H38V30H37zM38,29H39V30H38zM39,29H40V30H39zM40,29H41V30H40zM42,29H43V30H42zM45,29H46V30H45zM47,29H48V30H47zM48,29H49V30H48zM49,29H50V30H49zM2,30H3V31H2zM4,30H5V31H4zM8,30H9V31H8zM9,30H10V31H9zM10,30H11V31H10zM11,30H12V31H11zM12,30H13V31H12zM15,30H16V31H15zM18,30H19V31H18zM22,30H23V31H22zM23,30H24V31H23zM24,30H25V31H24zM25,30H26V31H25zM26,30H27V31H26zM27,30H28V31H27zM28,30H29V31H28zM29,30H30V31H29zM31,30H32V31H31zM32,30H33V31H32zM33,30H34V31H33zM34,30H35V31H34zM37,30H38V31H37zM38,30H39V31H38zM41,30H42V31H41zM43,30H44V31H43zM44,30H45V31H44zM45,30H46V31H45zM48,30H49V31H48zM49,30H50V31H49zM3,31H4V32H3zM5,31H6V32H5zM6,31H7V32H6zM10,31H11V32H10zM11,31H12V32H11zM13,31H14V32H13zM16,31H17V32H16zM17,31H18V32H17zM18,31H19V32H18zM20,31H21V32H20zM21,31H22V32H21zM22,31H23V32H22zM25,31H26V32H25zM30,31H31V32H30zM31,31H32V32H31zM33,31H34V32H33zM34,31H35V32H34zM37,31H38V32H37zM38,31H39V32H38zM41,31H42V32H41zM43,31H44V32H43zM47,31H48V32H47zM48,31H49V32H48zM50,31H51V32H50zM3,32H4V33H3zM4,32H5V33H4zM6,32H7V33H6zM7,32H8V33H7zM8,32H9V33H8zM9,32H10V33H9zM12,32H13V33H12zM13,32H14V33H13zM16,32H17V33H16zM18,32H19V33H18zM19,32H20V33H19zM20,32H21V33H20zM21,32H22V33H21zM22,32H23V33H22zM23,32H24V33H23zM27,32H28V33H27zM28,32H29V33H28zM29,32H30V33H29zM31,32H32V33H31zM33,32H34V33H33zM34,32H35V33H34zM35,32H36V33H35zM36,32H37V33H36zM37,32H38V33H37zM40,32H41V33H40zM41,32H42V33H41zM44,32H45V33H44zM48,32H49V33H48zM49,32H50V33H49zM50,32H51V33H50zM2,33H3V34H2zM3,33H4V34H3zM6,33H7V34H6zM10,33H11V34H10zM13,33H14V34H13zM14,33H15V34H14zM15,33H16V34H15zM16,33H17V34H16zM17,33H18V34H17zM18,33H19V34H18zM19,33H20V34H19zM20,33H21V34H20zM23,33H24V34H23zM26,33H27V34H26zM28,33H29V34H28zM30,33H31V34H30zM31,33H32V34H31zM32,33H33V34H32zM40,33H41V34H40zM42,33H43V34H42zM44,33H45V34H44zM48,33H49V34H48zM50,33H51V34H50zM3,34H4V35H3zM4,34H5V35H4zM6,34H7V35H6zM8,34H9V35H8zM14,34H15V35H14zM16,34H17V35H16zM22,34H23V35H22zM23,34H24V35H23zM24,34H25V35H24zM26,34H27V35H26zM27,34H28V35H27zM28,34H29V35H28zM29,34H30V35H29zM30,34H31V35H30zM32,34H33V35H32zM35,34H36V35H35zM36,34H37V35H36zM39,34H40V35H39zM41,34H42V35H41zM45,34H46V35H45zM46,34H47V35H46zM47,34H48V35H47zM48,34H49V35H48zM49,34H50V35H49zM50,34H51V35H50zM2,35H3V36H2zM3,35H4V36H3zM4,35H5V36H4zM5,35H6V36H5zM11,35H12V36H11zM12,35H13V36H12zM13,35H14V36H13zM14,35H15V36H14zM15,35H16V36H15zM19,35H20V36H19zM20,35H21V36H20zM21,35H22V36H21zM22,35H23V36H22zM23,35H24V36H23zM24,35H25V36H24zM25,35H26V36H25zM27,35H28V36H27zM30,35H31V36H30zM31,35H32V36H31zM34,35H35V36H34zM37,35H38V36H37zM38,35H39V36H38zM39,35H40V36H39zM41,35H42V36H41zM44,35H45V36H44zM50,35H51V36H50zM2,36H3V37H2zM3,36H4V37H3zM8,36H9V37H8zM10,36H11V37H10zM12,36H13V37H12zM13,36H14V37H13zM14,36H15V37H14zM17,36H18V37H17zM19,36H20V37H19zM20,36H21V37H20zM22,36H23V37H22zM27,36H28V37H27zM28,36H29V37H28zM34,36H35V37H34zM35,36H36V37H35zM36,36H37V37H36zM41,36H42V37H41zM42,36H43V37H42zM44,36H45V37H44zM49,36H50V37H49zM2,37H3V38H2zM3,37H4V38H3zM4,37H5V38H4zM5,37H6V38H5zM10,37H11V38H10zM11,37H12V38H11zM14,37H15V38H14zM15,37H16V38H15zM16,37H17V38H16zM17,37H18V38H17zM19,37H20V38H19zM20,37H21V38H20zM23,37H24V38H23zM26,37H27V38H26zM28,37H29V38H28zM29,37H30V38H29zM33,37H34V38H33zM37,37H38V38H37zM38,37H39V38H38zM41,37H42V38H41zM42,37H43V38H42zM44,37H45V38H44zM45,37H46V38H45zM46,37H47V38H46zM49,37H50V38H49zM2,38H3V39H2zM3,38H4V39H3zM5,38H6V39H5zM7,38H8V39H7zM8,38H9V39H8zM10,38H11V39H10zM12,38H13V39H12zM15,38H16V39H15zM18,38H19V39H18zM19,38H20V39H19zM20,38H21V39H20zM21,38H22V39H21zM23,38H24V39H23zM24,38H25V39H24zM25,38H26V39H25zM26,38H27V39H26zM28,38H29V39H28zM29,38H30V39H29zM30,38H31V39H30zM31,38H32V39H31zM33,38H34V39H33zM35,38H36V39H35zM36,38H37V39H36zM37,38H38V39H37zM38,38H39V39H38zM39,38H40V39H39zM42,38H43V39H42zM47,38H48V39H47zM2,39H3V40H2zM15,39H16V40H15zM16,39H17V40H16zM23,39H24V40H23zM26,39H27V40H26zM27,39H28V40H27zM28,39H29V40H28zM29,39H30V40H29zM34,39H35V40H34zM36,39H37V40H36zM37,39H38V40H37zM38,39H39V40H38zM39,39H40V40H39zM44,39H45V40H44zM46,39H47V40H46zM47,39H48V40H47zM48,39H49V40H48zM49,39H50V40H49zM50,39H51V40H50zM3,40H4V41H3zM7,40H8V41H7zM8,40H9V41H8zM11,40H12V41H11zM14,40H15V41H14zM16,40H17V41H16zM20,40H21V41H20zM21,40H22V41H21zM22,40H23V41H22zM23,40H24V41H23zM24,40H25V41H24zM25,40H26V41H25zM26,40H27V41H26zM28,40H29V41H28zM30,40H31V41H30zM34,40H35V41H34zM37,40H38V41H37zM38,40H39V41H38zM40,40H41V41H40zM41,40H42V41H41zM43,40H44V41H43zM47,40H48V41H47zM49,40H50V41H49zM50,40H51V41H50zM3,41H4V42H3zM4,41H5V42H4zM5,41H6V42H5zM10,41H11V42H10zM13,41H14V42H13zM15,41H16V42H15zM18,41H19V42H18zM24,41H25V42H24zM27,41H28V42H27zM29,41H30V42H29zM30,41H31V42H30zM31,41H32V42H31zM32,41H33V42H32zM34,41H35V42H34zM35,41H36V42H35zM37,41H38V42H37zM38,41H39V42H38zM42,41H43V42H42zM43,41H44V42H43zM44,41H45V42H44zM46,41H47V42H46zM49,41H50V42H49zM50,41H51V42H50zM2,42H3V43H2zM3,42H4V43H3zM4,42H5V43H4zM8,42H9V43H8zM9,42H10V43H9zM12,42H13V43H12zM16,42H17V43H16zM17,42H18V43H17zM19,42H20V43H19zM20,42H21V43H20zM21,42H22V43H21zM23,42H24V43H23zM24,42H25V43H24zM25,42H26V43H25zM26,42H27V43H26zM27,42H28V43H27zM28,42H29V43H28zM29,42H30V43H29zM34,42H35V43H34zM36,42H37V43H36zM38,42H39V43H38zM42,42H43V43H42zM43,42H44V43H43zM44,42H45V43H44zM45,42H46V43H45zM46,42H47V43H46zM47,42H48V43H47zM49,42H50V43H49zM10,43H11V44H10zM11,43H12V44H11zM14,43H15V44H14zM15,43H16V44H15zM19,43H20V44H19zM21,43H22V44H21zM22,43H23V44H22zM23,43H24V44H23zM24,43H25V44H24zM28,43H29V44H28zM31,43H32V44H31zM32,43H33V44H32zM34,43H35V44H34zM35,43H36V44H35zM36,43H37V44H36zM37,43H38V44H37zM38,43H39V44H38zM39,43H40V44H39zM42,43H43V44H42zM46,43H47V44H46zM48,43H49V44H48zM49,43H50V44H49zM50,43H51V44H50zM2,44H3V45H2zM3,44H4V45H3zM4,44H5V45H4zM5,44H6V45H5zM6,44H7V45H6zM7,44H8V45H7zM8,44H9V45H8zM12,44H13V45H12zM15,44H16V45H15zM17,44H18V45H17zM20,44H21V45H20zM21,44H22V45H21zM22,44H23V45H22zM23,44H24V45H23zM24,44H25V45H24zM26,44H27V45H26zM28,44H29V45H28zM30,44H31V45H30zM31,44H32V45H31zM34,44H35V45H34zM40,44H41V45H40zM41,44H42V45H41zM42,44H43V45H42zM44,44H45V45H44zM46,44H47V45H46zM47,44H48V45H47zM48,44H49V45H48zM2,45H3V46H2zM8,45H9V46H8zM10,45H11V46H10zM12,45H13V46H12zM13,45H14V46H13zM17,45H18V46H17zM18,45H19V46H18zM20,45H21V46H20zM21,45H22V46H21zM22,45H23V46H22zM24,45H25V46H24zM28,45H29V46H28zM31,45H32V46H31zM32,45H33V46H32zM33,45H34V46H33zM34,45H35V46H34zM35,45H36V46H35zM36,45H37V46H36zM37,45H38V46H37zM38,45H39V46H38zM39,45H40V46H39zM42,45H43V46H42zM46,45H47V46H46zM49,45H50V46H49zM50,45H51V46H50zM2,46H3V47H2zM4,46H5V47H4zM5,46H6V47H5zM6,46H7V47H6zM8,46H9V47H8zM11,46H12V47H11zM12,46H13V47H12zM13,46H14V47H13zM14,46H15V47H14zM15,46H16V47H15zM23,46H24V47H23zM24,46H25V47H24zM25,46H26V47H25zM26,46H27V47H26zM27,46H28V47H27zM28,46H29V47H28zM30,46H31V47H30zM31,46H32V47H31zM32,46H33V47H32zM33,46H34V47H33zM36,46H37V47H36zM37,46H38V47H37zM38,46H39V47H38zM39,46H40V47H39zM41,46H42V47H41zM42,46H43V47H42zM43,46H44V47H43zM44,46H45V47H44zM45,46H46V47H45zM46,46H47V47H46zM47,46H48V47H47zM48,46H49V47H48zM50,46H51V47H50zM2,47H3V48H2zM4,47H5V48H4zM5,47H6V48H5zM6,47H7V48H6zM8,47H9V48H8zM10,47H11V48H10zM11,47H12V48H11zM12,47H13V48H12zM19,47H20V48H19zM20,47H21V48H20zM22,47H23V48H22zM23,47H24V48H23zM24,47H25V48H24zM26,47H27V48H26zM27,47H28V48H27zM28,47H29V48H28zM29,47H30V48H29zM31,47H32V48H31zM32,47H33V48H32zM33,47H34V48H33zM34,47H35V48H34zM35,47H36V48H35zM36,47H37V48H36zM39,47H40V48H39zM40,47H41V48H40zM41,47H42V48H41zM42,47H43V48H42zM46,47H47V48H46zM49,47H50V48H49zM50,47H51V48H50zM2,48H3V49H2zM4,48H5V49H4zM5,48H6V49H5zM6,48H7V49H6zM8,48H9V49H8zM11,48H12V49H11zM12,48H13V49H12zM13,48H14V49H13zM14,48H15V49H14zM18,48H19V49H18zM20,48H21V49H20zM21,48H22V49H21zM25,48H26V49H25zM26,48H27V49H26zM29,48H30V49H29zM31,48H32V49H31zM35,48H36V49H35zM36,48H37V49H36zM37,48H38V49H37zM40,48H41V49H40zM41,48H42V49H41zM43,48H44V49H43zM46,48H47V49H46zM47,48H48V49H47zM50,48H51V49H50zM2,49H3V50H2zM8,49H9V50H8zM12,49H13V50H12zM13,49H14V50H13zM14,49H15V50H14zM15,49H16V50H15zM16,49H17V50H16zM18,49H19V50H18zM24,49H25V50H24zM27,49H28V50H27zM30,49H31V50H30zM31,49H32V50H31zM33,49H34V50H33zM35,49H36V50H35zM37,49H38V50H37zM38,49H39V50H38zM41,49H42V50H41zM45,49H46V50H45zM46,49H47V50H46zM2,50H3V51H2zM3,50H4V51H3zM4,50H5V51H4zM5,50H6V51H5zM6,50H7V51H6zM7,50H8V51H7zM8,50H9V51H8zM10,50H11V51H10zM11,50H12V51H11zM12,50H13V51H12zM13,50H14V51H13zM14,50H15V51H14zM15,50H16V51H15zM19,50H20V51H19zM20,50H21V51H20zM21,50H22V51H21zM22,50H23V51H22zM29,50H30V51H29zM31,50H32V51H31zM39,50H40V51H39zM46,50H47V51H46zM48,50H49V51H48zM49,50H50V51H49zM50,50H51V51H50z" id="qr-path" fill="#000000" fill-opacity="1" fill-rule="nonzero" stroke="none" /></svg><div style="margin-top:10px;font-size:20px;font-weight:900;color:var(--blued)">#ｽﾀｯｸﾁｬﾝｻﾞｷﾞｬｻﾞﾘﾝｸﾞ</div><div style="font-size:13px;color:var(--ink2)">読み取ると X が開いて、ハッシュタグが入っています</div></div>` },

    /* ───────── C ───────── */
    { ch: 5, tag: '失敗事例', cover: { num: 'C', title: '失敗事例', sub: '3つだけ、1分ずつ' },
      talk: `<b>他の AI イベントは「できます」を見せます。「壊れ方」を配るところはあまりありません。</b><br>
             詰まって抜けるたびに書いた記録から、<b>今日は3件だけ、1分ずつ。</b>残りは配布物（失敗カタログ）に畳んであるので、気づいた失敗や良いプラクティスは交流会で。` },

    { ch: 5, tag: '失敗1 曲を止めても踊り続けた（原因は自分）',
      talk: `<b>1分。</b>原因は自分でした。実機を指しながら。`,
      html: K.head('マイクが拾っていたのは、<span class="r">自分のサーボ音。</span>') +
            `<div class="panel"><svg viewBox="0 0 760 230" role="img" aria-label="失敗1の自己増幅ループ：首が動くとサーボ音が出て、マイクが拾い、拍として検出され、また踊る。4秒ごとに首を止めて測ることで輪を切った" style="width:100%;height:auto;display:block;font-family:inherit;font-weight:700">
  <defs><marker id="ar6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#4E7590"/></marker></defs>
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
  <line x1="170" y1="65" x2="218" y2="65" stroke="#4E7590" stroke-width="2" marker-end="url(#ar6)"/>
  <line x1="370" y1="65" x2="418" y2="65" stroke="#4E7590" stroke-width="2" marker-end="url(#ar6)"/>
  <line x1="570" y1="65" x2="598" y2="65" stroke="#4E7590" stroke-width="2" marker-end="url(#ar6)"/>
  <path d="M670 100 Q 670 150 380 150 Q 95 150 95 102" fill="none" stroke="#C43D3D" stroke-width="2" marker-end="url(#ar6)"/>
  <text x="380" y="140" text-anchor="middle" font-size="12" fill="#C43D3D">踊るほど拍が立つ（自己増幅）</text>
  <rect x="300" y="168" width="160" height="44" rx="12" fill="#DCF5DF" stroke="#55C96A" stroke-width="3"/>
  <text x="380" y="188" text-anchor="middle" font-size="12" fill="#2E8C42">4秒ごとに首を止めて測る</text>
  <text x="380" y="204" text-anchor="middle" font-size="10" fill="#2E8C42">止まっている間だけ拍を見る＝「聴き入る」</text>
  <line x1="380" y1="168" x2="380" y2="152" stroke="#55C96A" stroke-width="2"/>
  <text x="392" y="164" font-size="14" fill="#2E8C42">✂</text>
</svg></div>` +
            K.cards([
              { k: '起きたこと', v: '曲を止めたのに踊り続けた。マイクが拾っていたのは自分のサーボ音', d: '首が動くと音量が40倍。動きは拍に同期しているので「拍」として検出され、踊るほど拍が立つ自己増幅。4秒ごとに首を止めて測ることで輪を切った（見た目は「聴き入る」）' },
              { k: '持ち帰り', v: 'センサーと動く部分が同じ体にあると、自分を観測してしまう', d: '手は3つ：物理的に離す／自分の出力を差し引く／動きを止めて測る' },
            ]) },

    { ch: 5, tag: '失敗2 見張ろうとしたら壊れた（原因は観測）',
      talk: `<b>1分。</b>原因は「見に行ったこと」でした。不安なほど細かく見たくなる、という話。`,
      html: K.head('測るために、<span class="o">壊していた。</span>') +
            `<div class="panel"><svg viewBox="0 0 760 230" role="img" aria-label="失敗2の悪循環：監督が0.4秒ごとにコマンドを送り、音声フレームを押しのけ、拍が取れなくなり、監督が止まったと判断してさらにコマンドを送る。監督を消して輪を切った" style="width:100%;height:auto;display:block;font-family:inherit;font-weight:700">
  <defs><marker id="ar7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#4E7590"/></marker></defs>
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
  <line x1="180" y1="65" x2="218" y2="65" stroke="#4E7590" stroke-width="2" marker-end="url(#ar7)"/>
  <line x1="380" y1="65" x2="418" y2="65" stroke="#4E7590" stroke-width="2" marker-end="url(#ar7)"/>
  <line x1="570" y1="65" x2="598" y2="65" stroke="#4E7590" stroke-width="2" marker-end="url(#ar7)"/>
  <path d="M670 100 Q 670 150 380 150 Q 100 150 100 102" fill="none" stroke="#C43D3D" stroke-width="2" marker-end="url(#ar7)"/>
  <text x="380" y="140" text-anchor="middle" font-size="12" fill="#C43D3D">壊れるほどコマンドが増え、増えるほど壊れる</text>
  <rect x="290" y="168" width="180" height="44" rx="12" fill="#DCF5DF" stroke="#55C96A" stroke-width="3"/>
  <text x="380" y="188" text-anchor="middle" font-size="12" fill="#2E8C42">監督そのものを消す</text>
  <text x="380" y="204" text-anchor="middle" font-size="10" fill="#2E8C42">状態を1か所に置いたら、見張りが要らなくなった</text>
  <line x1="380" y1="168" x2="380" y2="152" stroke="#55C96A" stroke-width="2"/>
  <text x="392" y="164" font-size="14" fill="#2E8C42">✂</text>
</svg></div>` +
            K.cards([
              { k: '起きたこと', v: '0.4秒ごとに見張る監督を回したら、拍の検出が壊れた', d: '音声と制御が同じ1本の線を通っていて、コマンドが音声フレームを押しのけた。壊れるほどコマンドが増え、増えるほど壊れた。監督そのものを消して直った' },
              { k: '持ち帰り', v: '測ることが、相手を壊すことがある', d: '見る頻度と、そこから出る指示の量は、対象の性能を削る。二重に判定しない' },
            ]) },

    { ch: 5, tag: '失敗3 派手にした瞬間に落ちた（仕様の1行）',
      talk: `<b>1分。</b>原因は仕様表の1行でした。LED テープを指しながら。`,
      html: K.head('繋がることと、使えることは<span class="r">別。</span>') +
            K.cards([
              { k: '起きたこと', v: '白で全開にしたら、本体ごと再起動', d: '同梱の LED テープ30粒は全開で 5V 1.8A。本体のポートからは取れない。一番派手にした瞬間に落ちる。ソフト側に上限35%を持たせて直った' },
              { k: '持ち帰り', v: '繋がることと、使えることは別', d: '最大電流・最大電圧・最大長は、繋ぐ前の3項目。仕様表の1行を、繋ぐ前に1回読む' },
            ]) },

    { ch: 5, tag: '残りは、交流会で',
      talk: `<b>ここで深掘りを止めます。</b>言うことは2つ。「<b>エキスパートのみなさま、うちではこう壊れた、をぜひ</b>」「<b>これからやりたい人は、知りたいことを聞かせてください</b>」。<br>
             配布物の失敗カタログに型ごとに畳んであります。型が分かると、まだ踏んでいない穴も避けられます。`,
      html: K.head('気づいた失敗や良いプラクティスは、<em>交流会で。</em>') +
            K.cards([
              { k: 'エキスパートのみなさまへ', v: '「うちではこう壊れた」を聞かせてください', d: '持ってきたスタックチャンの前で。他の人の壊れ方が、いちばん学べます' },
              { k: 'これからやりたい人へ', v: '「知りたいこと」を聞かせてください', d: 'まだ何も持っていなくて大丈夫。「まず何を買う？」「どこで詰まる？」で十分。進行役かエキスパートが、その場で答えます' },
              { k: '配布物', v: '失敗カタログ', d: '型ごとに畳んであります：黙って落ちる／犯人は自分／測り方／相手に見えていない／直感と逆／計画が追い越されていた' },
              { k: '質疑 bot', v: 'スマホから「○○で詰まった」と聞ける', d: '記録と配布物の範囲で答えます。答えられないときは「記憶にありません」と言います' },
            ]) +
            K.memo('<b>うまくいった話は、真似しにくい。壊れ方は、明日あなたの机で役に立ちます。</b>だから今日は、失敗をお土産にしました。') },

    /* ───────── D ───────── */
    { ch: 6, tag: '手を動かす', cover: { num: 'D', title: '動かす', sub: '渡し方を覚えてもらう' },
      talk: `<b>このブロック自体がメッセージです。</b><br>
             手順は人間に渡しません。<b>エージェントに渡します。人間が覚えるのは「渡し方」のほうです。</b><br>
             声の会話は今日は進行役からは見せません。持ってきたスタックチャンで会話できるものがあれば、そちらで。` },

    { ch: 6, tag: '① リポジトリを渡す（10分）',
      talk: `<b>大きな手順は6つ。止まりやすいのは、アンバインドと焼くの間です。</b><br>
             「<b>一度、喋らなくなります</b>」を知ってから始めてもらいます。知らずに入ると「自分が壊した」と思って、そこで止まります。`,
      html: K.head('今日は<em>1まで。</em>') +
            K.cards([
              { k: '買うもの', v: 'M5Stack K151<br>一択（¥18,150）', d: 'CoreS3・サーボ2基・カメラ・マイク・3ゾーンタッチ・LED 12個・バッテリー 550mAh。<b>USB ポートは2つ。本体側が書き込み、台側は給電だけ</b>' },
              { k: '6手順・実測', v: '30 / 20 / 10 / 60 / 20 分 / ずっと', d: '①出荷時で遊ぶ ②まるごと吸い出す ③アンバインド ④焼く ⑤gateway ⑥作り込む。⑤まで <b>2時間20分</b>' },
              { k: '渡し方', v: 'この一文を、自分の Claude Code に貼る', d: '「このリポジトリを読んで、僕の状況に合わせて手順を出して。持っているもの: K151／Mac。いまの状態: 箱を開けたところ。今日やりたいこと: 出荷時のまま喋らせるところまで。詰まったところは docs/learnings.md に全部書いてあるので、先に読んでから答えて」' },
            ]) +
            K.memo('★17分で焼くと事故になります。<b>今日やるのは「出荷時のまま喋らせる」まで。</b>持っていない人は、進行役の実機で見る。買うかどうかは見てから決めればよい。') },

    { ch: 6, tag: '① ★渡す前に外したもの（1.5分）',
      talk: `<b>QR を配った瞬間、こちらは「配る側」になります。</b>その前にやったことを見せます。<br>
             公開する前に <code>scripts/secret_scan.py</code> を通しています。名前ではなく<b>形</b>で探します。`,
      html: K.head('危ないのは鍵ではなく、<span class="r">ログ。</span>') +
            K.cards([
              { k: '形で探す', v: 'sk-…<br>ghp_…<br>32桁の16進', d: '名前（API_KEY=）で探すと、変数名を変えただけで抜ける' },
              { k: '入れないもの', v: '名簿<br>録音<br>文字起こし<br>NVS の退避', d: '<b>会話ログは作業ファイルの顔をしているのに、中に本名と雑談が入っている</b>。NFC の名簿（人名）は git に入れず、手で運ぶ' },
              { k: '取り消せない', v: '一度 push したら戻らない', d: 'GitHub から消しても、clone された分と履歴は残る。だから<b>配る前に機械に見せる</b>' },
            ]) +
            K.quote('鍵は形が決まっているので目に付きます。会話ログは、作業ファイルの顔をしているのに、中に本名と雑談が入っている。') },

    { ch: 6, tag: '② 三本立て（残り約7分）',
      talk: `<b>リポジトリを渡したあとは、自分のペースで。</b>進行役は机を回ります。持ってきた人には、黙々派の机で相談に乗ってもらえるとありがたい、と一言。`,
      html: K.cards([
              { k: '黙々派', v: 'エージェントと文字で', d: 'リポジトリを読ませて、自分の企画を詰める。質疑 bot（スマホ）にも「今日のこと」を聞ける' },
              { k: '話す派', v: 'DJ 機材を触る', d: '割り当て表を見ながら、つまみ・パッド・フェーダーを自由に。「自分ならどのつまみに何を割り当てますか」' },
              { k: '見る派', v: 'お披露目スペースで、持ってきた人と話す', d: 'お披露目会で聞けなかったことを、そのスタックチャンの前で' },
            ]) +
            K.memo('質疑 bot は道具を持たない作りです（読む・書く・実行の口が無い）。答えるのは配布物と記録の範囲だけ。5回/分の制限と、秘密の形をした文字列を出さないフィルタ。<b>「AI を使って中身を吸い出しに来る」前提で設計しました。</b>') },

    /* ───────── 交流 ───────── */
    { ch: 7, tag: '交流', cover: { num: '∞', title: '交流', sub: 'みんなで自由に。エージェントも一緒に、ロボットもね' },
      talk: `<b>最後は自由時間です。</b>冒頭の1分だけ、背景に図を1枚出します。<br>
             そのあとは、お披露目スペース・DJ 機材・黙々の机、どこでも。エージェントも一緒に、ロボットもね。` },

    { ch: 7, tag: '② 最後に図を1枚',
      talk: `<b>説明はしません。順番に指すだけです。</b>背景（iPad）に図を1枚。左に人、右に実機、真ん中に AI、下に机。`,
      html: K.todo([
              { title: '左を指す', body: '「さっき、つまみを回しましたよね。あれが左です」' },
              { title: '右を指す', body: '「踊っていたのが、右です」' },
              { title: '真ん中を指す', body: '「あいだにいるのが、AI です」' },
              { title: '机を指す', body: '「出会った場所は、この机の上でした」' },
            ]) +
            K.memo('A で触った手、デモで回したつまみ、D で読ませたリポジトリ。<b>今日やったことが、この1枚に全部入っています。</b>') },

    /* ───────── 締 ───────── */
    { ch: 8, tag: '最後のひとこと',
      talk: `<b>ここは言い切ります。</b>説明を足すと、全部ぼやけてしまいます。`,
      html: K.head('素材は、<em>自分が作ったものでなくていい。</em>') +
            K.lead('<b>選ぶ順番と、混ぜ方と、止めるタイミングに、その人が出ます。</b>ファームも、モデルも、曲も、借り物でした。') +
            K.rule() +
            K.head('さあ、<span class="o">始めましょう。</span>') },

    { ch: 8, tag: '落ちたときの言い換え',
      talk: `<b>慌てなくて大丈夫です。</b>どれも、そのまま話に繋がります。切り分けは <code>./scripts/rescue.sh</code>、実機の言い分は <code>--serial</code>。`,
      html: K.cards([
              { k: '踊りが変', v: '「いま聴き入っています」', d: '4秒ごとに首を止めて測る作り。そのまま失敗1の話へ' },
              { k: '踊らない', v: '「会場の音量だと閾値が足りません」', d: '→ 失敗1（サーボ音）に繋げる。感度を上げると悪化する（0.2 が最良だった）' },
              { k: '背景が出ない', v: '致命ではない', d: '実機は動く。iPad を MacBook の Wi-Fi に繋ぎ直して QR を読み直す' },
              { k: '実機が落ちた', v: '電源を入れ直す（顔まで約10〜35秒）', d: 'OTA スタブ → gateway の順で来る。30秒は待つ。それでもダメなら<b>デモ録画に切り替える</b>（★録画は必ず持っていく）' },
            ]) },

    { ch: 7, tag: '交流タイム！好きなことを試しましょう',
      talk: `<b>最後の画面。</b>ソースは全部公開しているので、どの機能を持ち出すかは自由です。持ってきたスタックチャンにも、これから買う人にも。`,
      html: K.head('ソースは全部公開。<em>好きなことを、試しましょう！</em>') +
            K.lead('<b>交流タイム！</b>どの機能を持ち出すかは自由です。下は「持ち出しやすいもの」の例。押すと場所が出ます。') +
            K.todo([
              { title: '表情 14 枚', body: '自分で描いて差し替えられる。<code>app/avatar/make_faces.py</code> で作って、起動時に流し込むだけ。焼き直し不要', link: { href: 'https://github.com/kou-uni/stack-chan-DJ', label: 'kou-uni/stack-chan-DJ' } },
              { title: 'DJ 機材の割り当て表', body: '<code>app/dj/mapping.json</code>。番号を書き換えれば、別の機材・別のつまみで同じことが起きる', link: { href: 'https://github.com/kou-uni/stack-chan-DJ', label: 'app/dj/mapping.json' } },
              { title: 'カードで名前を呼ぶ受付', body: 'RFID 2 Unit を Grove Port A に挿すだけ。<code>scripts/nfc_enroll.py</code> でカードを登録', link: { href: 'https://github.com/kou-uni/stack-chan-DJ', label: 'app/dj/nfc.py' } },
              { title: '背景の画面', body: 'ブラウザ1枚。実機と同じ色の列を受け取って、会場ごと光らせる', link: { href: 'https://github.com/kou-uni/stack-chan-DJ', label: 'app/dj/stage.html' } },
              { title: '質疑 bot', body: '配布物と記録の範囲だけで答える、道具を持たない bot。自分の資料に差し替えられる', link: { href: 'https://github.com/kou-uni/stack-chan-DJ', label: 'app/dj/ask.py' } },
              { title: '始め方の地図・失敗カタログ・原価と日数', body: '配布物10枚。そのまま持ち帰って、自分のエージェントに読ませてください', link: { href: 'https://kou-uni.github.io/workshop-of-stackchan-at-cryptobar/', label: '配布物のページ' } },
            ]) +
            K.callout('<div class="l1">その前に、QA・知見共有！（挙手で！）</div><div class="l2">さあ、楽しく自由に<br>ディスカッションしましょう！ <span class="spark">✦</span></div>') +
            `<div class="panel" style="text-align:center"><svg width="220" height="220" version="1.1" viewBox="0 0 53 53" xmlns="http://www.w3.org/2000/svg"><path d="M2,2H3V3H2zM3,2H4V3H3zM4,2H5V3H4zM5,2H6V3H5zM6,2H7V3H6zM7,2H8V3H7zM8,2H9V3H8zM11,2H12V3H11zM15,2H16V3H15zM19,2H20V3H19zM20,2H21V3H20zM21,2H22V3H21zM22,2H23V3H22zM23,2H24V3H23zM24,2H25V3H24zM25,2H26V3H25zM26,2H27V3H26zM27,2H28V3H27zM30,2H31V3H30zM36,2H37V3H36zM37,2H38V3H37zM39,2H40V3H39zM42,2H43V3H42zM44,2H45V3H44zM45,2H46V3H45zM46,2H47V3H46zM47,2H48V3H47zM48,2H49V3H48zM49,2H50V3H49zM50,2H51V3H50zM2,3H3V4H2zM8,3H9V4H8zM12,3H13V4H12zM14,3H15V4H14zM15,3H16V4H15zM16,3H17V4H16zM17,3H18V4H17zM18,3H19V4H18zM19,3H20V4H19zM20,3H21V4H20zM23,3H24V4H23zM25,3H26V4H25zM28,3H29V4H28zM29,3H30V4H29zM32,3H33V4H32zM33,3H34V4H33zM35,3H36V4H35zM40,3H41V4H40zM41,3H42V4H41zM42,3H43V4H42zM44,3H45V4H44zM50,3H51V4H50zM2,4H3V5H2zM4,4H5V5H4zM5,4H6V5H5zM6,4H7V5H6zM8,4H9V5H8zM13,4H14V5H13zM14,4H15V5H14zM15,4H16V5H15zM16,4H17V5H16zM18,4H19V5H18zM23,4H24V5H23zM25,4H26V5H25zM29,4H30V5H29zM31,4H32V5H31zM32,4H33V5H32zM33,4H34V5H33zM35,4H36V5H35zM41,4H42V5H41zM42,4H43V5H42zM44,4H45V5H44zM46,4H47V5H46zM47,4H48V5H47zM48,4H49V5H48zM50,4H51V5H50zM2,5H3V6H2zM4,5H5V6H4zM5,5H6V6H5zM6,5H7V6H6zM8,5H9V6H8zM12,5H13V6H12zM16,5H17V6H16zM18,5H19V6H18zM19,5H20V6H19zM23,5H24V6H23zM24,5H25V6H24zM26,5H27V6H26zM29,5H30V6H29zM30,5H31V6H30zM31,5H32V6H31zM33,5H34V6H33zM34,5H35V6H34zM35,5H36V6H35zM36,5H37V6H36zM37,5H38V6H37zM38,5H39V6H38zM41,5H42V6H41zM44,5H45V6H44zM46,5H47V6H46zM47,5H48V6H47zM48,5H49V6H48zM50,5H51V6H50zM2,6H3V7H2zM4,6H5V7H4zM5,6H6V7H5zM6,6H7V7H6zM8,6H9V7H8zM11,6H12V7H11zM12,6H13V7H12zM17,6H18V7H17zM19,6H20V7H19zM20,6H21V7H20zM21,6H22V7H21zM22,6H23V7H22zM23,6H24V7H23zM24,6H25V7H24zM25,6H26V7H25zM26,6H27V7H26zM27,6H28V7H27zM28,6H29V7H28zM30,6H31V7H30zM31,6H32V7H31zM32,6H33V7H32zM35,6H36V7H35zM37,6H38V7H37zM38,6H39V7H38zM44,6H45V7H44zM46,6H47V7H46zM47,6H48V7H47zM48,6H49V7H48zM50,6H51V7H50zM2,7H3V8H2zM8,7H9V8H8zM10,7H11V8H10zM14,7H15V8H14zM15,7H16V8H15zM16,7H17V8H16zM22,7H23V8H22zM23,7H24V8H23zM24,7H25V8H24zM28,7H29V8H28zM30,7H31V8H30zM32,7H33V8H32zM34,7H35V8H34zM36,7H37V8H36zM37,7H38V8H37zM39,7H40V8H39zM40,7H41V8H40zM44,7H45V8H44zM50,7H51V8H50zM2,8H3V9H2zM3,8H4V9H3zM4,8H5V9H4zM5,8H6V9H5zM6,8H7V9H6zM7,8H8V9H7zM8,8H9V9H8zM10,8H11V9H10zM12,8H13V9H12zM14,8H15V9H14zM16,8H17V9H16zM18,8H19V9H18zM20,8H21V9H20zM22,8H23V9H22zM24,8H25V9H24zM26,8H27V9H26zM28,8H29V9H28zM30,8H31V9H30zM32,8H33V9H32zM34,8H35V9H34zM36,8H37V9H36zM38,8H39V9H38zM40,8H41V9H40zM42,8H43V9H42zM44,8H45V9H44zM45,8H46V9H45zM46,8H47V9H46zM47,8H48V9H47zM48,8H49V9H48zM49,8H50V9H49zM50,8H51V9H50zM12,9H13V10H12zM19,9H20V10H19zM20,9H21V10H20zM24,9H25V10H24zM28,9H29V10H28zM30,9H31V10H30zM32,9H33V10H32zM34,9H35V10H34zM35,9H36V10H35zM37,9H38V10H37zM38,9H39V10H38zM2,10H3V11H2zM5,10H6V11H5zM7,10H8V11H7zM8,10H9V11H8zM10,10H11V11H10zM11,10H12V11H11zM13,10H14V11H13zM15,10H16V11H15zM17,10H18V11H17zM23,10H24V11H23zM24,10H25V11H24zM25,10H26V11H25zM26,10H27V11H26zM27,10H28V11H27zM28,10H29V11H28zM29,10H30V11H29zM33,10H34V11H33zM35,10H36V11H35zM38,10H39V11H38zM39,10H40V11H39zM43,10H44V11H43zM45,10H46V11H45zM5,11H6V12H5zM7,11H8V12H7zM9,11H10V12H9zM11,11H12V12H11zM15,11H16V12H15zM16,11H17V12H16zM17,11H18V12H17zM18,11H19V12H18zM20,11H21V12H20zM24,11H25V12H24zM25,11H26V12H25zM30,11H31V12H30zM31,11H32V12H31zM33,11H34V12H33zM34,11H35V12H34zM35,11H36V12H35zM36,11H37V12H36zM37,11H38V12H37zM38,11H39V12H38zM42,11H43V12H42zM43,11H44V12H43zM44,11H45V12H44zM46,11H47V12H46zM47,11H48V12H47zM49,11H50V12H49zM50,11H51V12H50zM3,12H4V13H3zM6,12H7V13H6zM7,12H8V13H7zM8,12H9V13H8zM9,12H10V13H9zM13,12H14V13H13zM15,12H16V13H15zM20,12H21V13H20zM21,12H22V13H21zM25,12H26V13H25zM26,12H27V13H26zM29,12H30V13H29zM30,12H31V13H30zM31,12H32V13H31zM33,12H34V13H33zM37,12H38V13H37zM39,12H40V13H39zM41,12H42V13H41zM43,12H44V13H43zM44,12H45V13H44zM45,12H46V13H45zM47,12H48V13H47zM48,12H49V13H48zM50,12H51V13H50zM2,13H3V14H2zM3,13H4V14H3zM7,13H8V14H7zM12,13H13V14H12zM16,13H17V14H16zM17,13H18V14H17zM18,13H19V14H18zM22,13H23V14H22zM23,13H24V14H23zM24,13H25V14H24zM25,13H26V14H25zM29,13H30V14H29zM30,13H31V14H30zM31,13H32V14H31zM32,13H33V14H32zM35,13H36V14H35zM36,13H37V14H36zM38,13H39V14H38zM44,13H45V14H44zM45,13H46V14H45zM46,13H47V14H46zM48,13H49V14H48zM49,13H50V14H49zM2,14H3V15H2zM4,14H5V15H4zM6,14H7V15H6zM8,14H9V15H8zM11,14H12V15H11zM12,14H13V15H12zM13,14H14V15H13zM14,14H15V15H14zM16,14H17V15H16zM17,14H18V15H17zM18,14H19V15H18zM19,14H20V15H19zM20,14H21V15H20zM22,14H23V15H22zM25,14H26V15H25zM26,14H27V15H26zM27,14H28V15H27zM28,14H29V15H28zM29,14H30V15H29zM30,14H31V15H30zM31,14H32V15H31zM33,14H34V15H33zM34,14H35V15H34zM37,14H38V15H37zM38,14H39V15H38zM39,14H40V15H39zM40,14H41V15H40zM41,14H42V15H41zM47,14H48V15H47zM2,15H3V16H2zM3,15H4V16H3zM5,15H6V16H5zM15,15H16V16H15zM16,15H17V16H16zM17,15H18V16H17zM18,15H19V16H18zM19,15H20V16H19zM21,15H22V16H21zM22,15H23V16H22zM23,15H24V16H23zM24,15H25V16H24zM26,15H27V16H26zM27,15H28V16H27zM29,15H30V16H29zM30,15H31V16H30zM33,15H34V16H33zM34,15H35V16H34zM35,15H36V16H35zM39,15H40V16H39zM43,15H44V16H43zM46,15H47V16H46zM48,15H49V16H48zM50,15H51V16H50zM6,16H7V17H6zM8,16H9V17H8zM10,16H11V17H10zM12,16H13V17H12zM14,16H15V17H14zM17,16H18V17H17zM22,16H23V17H22zM23,16H24V17H23zM24,16H25V17H24zM26,16H27V17H26zM28,16H29V17H28zM31,16H32V17H31zM33,16H34V17H33zM34,16H35V17H34zM35,16H36V17H35zM36,16H37V17H36zM37,16H38V17H37zM40,16H41V17H40zM42,16H43V17H42zM43,16H44V17H43zM46,16H47V17H46zM47,16H48V17H47zM50,16H51V17H50zM3,17H4V18H3zM4,17H5V18H4zM5,17H6V18H5zM11,17H12V18H11zM12,17H13V18H12zM13,17H14V18H13zM15,17H16V18H15zM16,17H17V18H16zM18,17H19V18H18zM22,17H23V18H22zM23,17H24V18H23zM24,17H25V18H24zM25,17H26V18H25zM26,17H27V18H26zM32,17H33V18H32zM35,17H36V18H35zM36,17H37V18H36zM37,17H38V18H37zM39,17H40V18H39zM42,17H43V18H42zM46,17H47V18H46zM47,17H48V18H47zM49,17H50V18H49zM2,18H3V19H2zM6,18H7V19H6zM7,18H8V19H7zM8,18H9V19H8zM9,18H10V19H9zM10,18H11V19H10zM11,18H12V19H11zM15,18H16V19H15zM16,18H17V19H16zM17,18H18V19H17zM18,18H19V19H18zM19,18H20V19H19zM22,18H23V19H22zM24,18H25V19H24zM26,18H27V19H26zM30,18H31V19H30zM32,18H33V19H32zM33,18H34V19H33zM34,18H35V19H34zM37,18H38V19H37zM39,18H40V19H39zM42,18H43V19H42zM43,18H44V19H43zM44,18H45V19H44zM48,18H49V19H48zM2,19H3V20H2zM4,19H5V20H4zM6,19H7V20H6zM10,19H11V20H10zM12,19H13V20H12zM15,19H16V20H15zM16,19H17V20H16zM19,19H20V20H19zM21,19H22V20H21zM22,19H23V20H22zM28,19H29V20H28zM29,19H30V20H29zM31,19H32V20H31zM34,19H35V20H34zM42,19H43V20H42zM45,19H46V20H45zM49,19H50V20H49zM2,20H3V21H2zM3,20H4V21H3zM4,20H5V21H4zM6,20H7V21H6zM8,20H9V21H8zM11,20H12V21H11zM14,20H15V21H14zM15,20H16V21H15zM16,20H17V21H16zM17,20H18V21H17zM19,20H20V21H19zM20,20H21V21H20zM21,20H22V21H21zM23,20H24V21H23zM25,20H26V21H25zM26,20H27V21H26zM27,20H28V21H27zM28,20H29V21H28zM29,20H30V21H29zM31,20H32V21H31zM32,20H33V21H32zM33,20H34V21H33zM35,20H36V21H35zM36,20H37V21H36zM37,20H38V21H37zM40,20H41V21H40zM42,20H43V21H42zM44,20H45V21H44zM45,20H46V21H45zM46,20H47V21H46zM48,20H49V21H48zM49,20H50V21H49zM2,21H3V22H2zM6,21H7V22H6zM11,21H12V22H11zM13,21H14V22H13zM15,21H16V22H15zM19,21H20V22H19zM20,21H21V22H20zM21,21H22V22H21zM22,21H23V22H22zM24,21H25V22H24zM25,21H26V22H25zM26,21H27V22H26zM27,21H28V22H27zM29,21H30V22H29zM32,21H33V22H32zM33,21H34V22H33zM34,21H35V22H34zM36,21H37V22H36zM38,21H39V22H38zM42,21H43V22H42zM45,21H46V22H45zM46,21H47V22H46zM48,21H49V22H48zM49,21H50V22H49zM2,22H3V23H2zM4,22H5V23H4zM5,22H6V23H5zM6,22H7V23H6zM8,22H9V23H8zM11,22H12V23H11zM14,22H15V23H14zM16,22H17V23H16zM17,22H18V23H17zM18,22H19V23H18zM20,22H21V23H20zM21,22H22V23H21zM23,22H24V23H23zM26,22H27V23H26zM27,22H28V23H27zM29,22H30V23H29zM36,22H37V23H36zM38,22H39V23H38zM39,22H40V23H39zM40,22H41V23H40zM44,22H45V23H44zM47,22H48V23H47zM3,23H4V24H3zM4,23H5V24H4zM5,23H6V24H5zM6,23H7V24H6zM14,23H15V24H14zM18,23H19V24H18zM19,23H20V24H19zM20,23H21V24H20zM23,23H24V24H23zM24,23H25V24H24zM25,23H26V24H25zM27,23H28V24H27zM30,23H31V24H30zM38,23H39V24H38zM41,23H42V24H41zM44,23H45V24H44zM46,23H47V24H46zM6,24H7V25H6zM7,24H8V25H7zM8,24H9V25H8zM9,24H10V25H9zM10,24H11V25H10zM11,24H12V25H11zM12,24H13V25H12zM13,24H14V25H13zM17,24H18V25H17zM20,24H21V25H20zM24,24H25V25H24zM25,24H26V25H25zM26,24H27V25H26zM27,24H28V25H27zM28,24H29V25H28zM29,24H30V25H29zM30,24H31V25H30zM31,24H32V25H31zM34,24H35V25H34zM36,24H37V25H36zM37,24H38V25H37zM39,24H40V25H39zM42,24H43V25H42zM43,24H44V25H43zM44,24H45V25H44zM45,24H46V25H45zM46,24H47V25H46zM47,24H48V25H47zM48,24H49V25H48zM2,25H3V26H2zM3,25H4V26H3zM4,25H5V26H4zM5,25H6V26H5zM6,25H7V26H6zM10,25H11V26H10zM13,25H14V26H13zM14,25H15V26H14zM16,25H17V26H16zM17,25H18V26H17zM21,25H22V26H21zM24,25H25V26H24zM28,25H29V26H28zM31,25H32V26H31zM32,25H33V26H32zM33,25H34V26H33zM34,25H35V26H34zM37,25H38V26H37zM38,25H39V26H38zM39,25H40V26H39zM41,25H42V26H41zM42,25H43V26H42zM46,25H47V26H46zM48,25H49V26H48zM6,26H7V27H6zM8,26H9V27H8zM10,26H11V27H10zM14,26H15V27H14zM18,26H19V27H18zM19,26H20V27H19zM21,26H22V27H21zM22,26H23V27H22zM24,26H25V27H24zM26,26H27V27H26zM28,26H29V27H28zM33,26H34V27H33zM35,26H36V27H35zM36,26H37V27H36zM37,26H38V27H37zM40,26H41V27H40zM42,26H43V27H42zM44,26H45V27H44zM46,26H47V27H46zM47,26H48V27H47zM49,26H50V27H49zM3,27H4V28H3zM6,27H7V28H6zM10,27H11V28H10zM11,27H12V28H11zM16,27H17V28H16zM17,27H18V28H17zM18,27H19V28H18zM19,27H20V28H19zM20,27H21V28H20zM24,27H25V28H24zM28,27H29V28H28zM29,27H30V28H29zM30,27H31V28H30zM32,27H33V28H32zM33,27H34V28H33zM35,27H36V28H35zM37,27H38V28H37zM39,27H40V28H39zM40,27H41V28H40zM42,27H43V28H42zM46,27H47V28H46zM47,27H48V28H47zM3,28H4V29H3zM5,28H6V29H5zM6,28H7V29H6zM7,28H8V29H7zM8,28H9V29H8zM9,28H10V29H9zM10,28H11V29H10zM15,28H16V29H15zM16,28H17V29H16zM20,28H21V29H20zM21,28H22V29H21zM24,28H25V29H24zM25,28H26V29H25zM26,28H27V29H26zM27,28H28V29H27zM28,28H29V29H28zM29,28H30V29H29zM30,28H31V29H30zM33,28H34V29H33zM35,28H36V29H35zM36,28H37V29H36zM38,28H39V29H38zM39,28H40V29H39zM41,28H42V29H41zM42,28H43V29H42zM43,28H44V29H43zM44,28H45V29H44zM45,28H46V29H45zM46,28H47V29H46zM47,28H48V29H47zM50,28H51V29H50zM2,29H3V30H2zM3,29H4V30H3zM4,29H5V30H4zM5,29H6V30H5zM9,29H10V30H9zM10,29H11V30H10zM14,29H15V30H14zM16,29H17V30H16zM23,29H24V30H23zM27,29H28V30H27zM29,29H30V30H29zM30,29H31V30H30zM32,29H33V30H32zM33,29H34V30H33zM34,29H35V30H34zM36,29H37V30H36zM37,29H38V30H37zM38,29H39V30H38zM39,29H40V30H39zM40,29H41V30H40zM42,29H43V30H42zM45,29H46V30H45zM47,29H48V30H47zM48,29H49V30H48zM49,29H50V30H49zM2,30H3V31H2zM4,30H5V31H4zM8,30H9V31H8zM9,30H10V31H9zM10,30H11V31H10zM11,30H12V31H11zM12,30H13V31H12zM15,30H16V31H15zM18,30H19V31H18zM22,30H23V31H22zM23,30H24V31H23zM24,30H25V31H24zM25,30H26V31H25zM26,30H27V31H26zM27,30H28V31H27zM28,30H29V31H28zM29,30H30V31H29zM31,30H32V31H31zM32,30H33V31H32zM33,30H34V31H33zM34,30H35V31H34zM37,30H38V31H37zM38,30H39V31H38zM41,30H42V31H41zM43,30H44V31H43zM44,30H45V31H44zM45,30H46V31H45zM48,30H49V31H48zM49,30H50V31H49zM3,31H4V32H3zM5,31H6V32H5zM6,31H7V32H6zM10,31H11V32H10zM11,31H12V32H11zM13,31H14V32H13zM16,31H17V32H16zM17,31H18V32H17zM18,31H19V32H18zM20,31H21V32H20zM21,31H22V32H21zM22,31H23V32H22zM25,31H26V32H25zM30,31H31V32H30zM31,31H32V32H31zM33,31H34V32H33zM34,31H35V32H34zM37,31H38V32H37zM38,31H39V32H38zM41,31H42V32H41zM43,31H44V32H43zM47,31H48V32H47zM48,31H49V32H48zM50,31H51V32H50zM3,32H4V33H3zM4,32H5V33H4zM6,32H7V33H6zM7,32H8V33H7zM8,32H9V33H8zM9,32H10V33H9zM12,32H13V33H12zM13,32H14V33H13zM16,32H17V33H16zM18,32H19V33H18zM19,32H20V33H19zM20,32H21V33H20zM21,32H22V33H21zM22,32H23V33H22zM23,32H24V33H23zM27,32H28V33H27zM28,32H29V33H28zM29,32H30V33H29zM31,32H32V33H31zM33,32H34V33H33zM34,32H35V33H34zM35,32H36V33H35zM36,32H37V33H36zM37,32H38V33H37zM40,32H41V33H40zM41,32H42V33H41zM44,32H45V33H44zM48,32H49V33H48zM49,32H50V33H49zM50,32H51V33H50zM2,33H3V34H2zM3,33H4V34H3zM6,33H7V34H6zM10,33H11V34H10zM13,33H14V34H13zM14,33H15V34H14zM15,33H16V34H15zM16,33H17V34H16zM17,33H18V34H17zM18,33H19V34H18zM19,33H20V34H19zM20,33H21V34H20zM23,33H24V34H23zM26,33H27V34H26zM28,33H29V34H28zM30,33H31V34H30zM31,33H32V34H31zM32,33H33V34H32zM40,33H41V34H40zM42,33H43V34H42zM44,33H45V34H44zM48,33H49V34H48zM50,33H51V34H50zM3,34H4V35H3zM4,34H5V35H4zM6,34H7V35H6zM8,34H9V35H8zM14,34H15V35H14zM16,34H17V35H16zM22,34H23V35H22zM23,34H24V35H23zM24,34H25V35H24zM26,34H27V35H26zM27,34H28V35H27zM28,34H29V35H28zM29,34H30V35H29zM30,34H31V35H30zM32,34H33V35H32zM35,34H36V35H35zM36,34H37V35H36zM39,34H40V35H39zM41,34H42V35H41zM45,34H46V35H45zM46,34H47V35H46zM47,34H48V35H47zM48,34H49V35H48zM49,34H50V35H49zM50,34H51V35H50zM2,35H3V36H2zM3,35H4V36H3zM4,35H5V36H4zM5,35H6V36H5zM11,35H12V36H11zM12,35H13V36H12zM13,35H14V36H13zM14,35H15V36H14zM15,35H16V36H15zM19,35H20V36H19zM20,35H21V36H20zM21,35H22V36H21zM22,35H23V36H22zM23,35H24V36H23zM24,35H25V36H24zM25,35H26V36H25zM27,35H28V36H27zM30,35H31V36H30zM31,35H32V36H31zM34,35H35V36H34zM37,35H38V36H37zM38,35H39V36H38zM39,35H40V36H39zM41,35H42V36H41zM44,35H45V36H44zM50,35H51V36H50zM2,36H3V37H2zM3,36H4V37H3zM8,36H9V37H8zM10,36H11V37H10zM12,36H13V37H12zM13,36H14V37H13zM14,36H15V37H14zM17,36H18V37H17zM19,36H20V37H19zM20,36H21V37H20zM22,36H23V37H22zM27,36H28V37H27zM28,36H29V37H28zM34,36H35V37H34zM35,36H36V37H35zM36,36H37V37H36zM41,36H42V37H41zM42,36H43V37H42zM44,36H45V37H44zM49,36H50V37H49zM2,37H3V38H2zM3,37H4V38H3zM4,37H5V38H4zM5,37H6V38H5zM10,37H11V38H10zM11,37H12V38H11zM14,37H15V38H14zM15,37H16V38H15zM16,37H17V38H16zM17,37H18V38H17zM19,37H20V38H19zM20,37H21V38H20zM23,37H24V38H23zM26,37H27V38H26zM28,37H29V38H28zM29,37H30V38H29zM33,37H34V38H33zM37,37H38V38H37zM38,37H39V38H38zM41,37H42V38H41zM42,37H43V38H42zM44,37H45V38H44zM45,37H46V38H45zM46,37H47V38H46zM49,37H50V38H49zM2,38H3V39H2zM3,38H4V39H3zM5,38H6V39H5zM7,38H8V39H7zM8,38H9V39H8zM10,38H11V39H10zM12,38H13V39H12zM15,38H16V39H15zM18,38H19V39H18zM19,38H20V39H19zM20,38H21V39H20zM21,38H22V39H21zM23,38H24V39H23zM24,38H25V39H24zM25,38H26V39H25zM26,38H27V39H26zM28,38H29V39H28zM29,38H30V39H29zM30,38H31V39H30zM31,38H32V39H31zM33,38H34V39H33zM35,38H36V39H35zM36,38H37V39H36zM37,38H38V39H37zM38,38H39V39H38zM39,38H40V39H39zM42,38H43V39H42zM47,38H48V39H47zM2,39H3V40H2zM15,39H16V40H15zM16,39H17V40H16zM23,39H24V40H23zM26,39H27V40H26zM27,39H28V40H27zM28,39H29V40H28zM29,39H30V40H29zM34,39H35V40H34zM36,39H37V40H36zM37,39H38V40H37zM38,39H39V40H38zM39,39H40V40H39zM44,39H45V40H44zM46,39H47V40H46zM47,39H48V40H47zM48,39H49V40H48zM49,39H50V40H49zM50,39H51V40H50zM3,40H4V41H3zM7,40H8V41H7zM8,40H9V41H8zM11,40H12V41H11zM14,40H15V41H14zM16,40H17V41H16zM20,40H21V41H20zM21,40H22V41H21zM22,40H23V41H22zM23,40H24V41H23zM24,40H25V41H24zM25,40H26V41H25zM26,40H27V41H26zM28,40H29V41H28zM30,40H31V41H30zM34,40H35V41H34zM37,40H38V41H37zM38,40H39V41H38zM40,40H41V41H40zM41,40H42V41H41zM43,40H44V41H43zM47,40H48V41H47zM49,40H50V41H49zM50,40H51V41H50zM3,41H4V42H3zM4,41H5V42H4zM5,41H6V42H5zM10,41H11V42H10zM13,41H14V42H13zM15,41H16V42H15zM18,41H19V42H18zM24,41H25V42H24zM27,41H28V42H27zM29,41H30V42H29zM30,41H31V42H30zM31,41H32V42H31zM32,41H33V42H32zM34,41H35V42H34zM35,41H36V42H35zM37,41H38V42H37zM38,41H39V42H38zM42,41H43V42H42zM43,41H44V42H43zM44,41H45V42H44zM46,41H47V42H46zM49,41H50V42H49zM50,41H51V42H50zM2,42H3V43H2zM3,42H4V43H3zM4,42H5V43H4zM8,42H9V43H8zM9,42H10V43H9zM12,42H13V43H12zM16,42H17V43H16zM17,42H18V43H17zM19,42H20V43H19zM20,42H21V43H20zM21,42H22V43H21zM23,42H24V43H23zM24,42H25V43H24zM25,42H26V43H25zM26,42H27V43H26zM27,42H28V43H27zM28,42H29V43H28zM29,42H30V43H29zM34,42H35V43H34zM36,42H37V43H36zM38,42H39V43H38zM42,42H43V43H42zM43,42H44V43H43zM44,42H45V43H44zM45,42H46V43H45zM46,42H47V43H46zM47,42H48V43H47zM49,42H50V43H49zM10,43H11V44H10zM11,43H12V44H11zM14,43H15V44H14zM15,43H16V44H15zM19,43H20V44H19zM21,43H22V44H21zM22,43H23V44H22zM23,43H24V44H23zM24,43H25V44H24zM28,43H29V44H28zM31,43H32V44H31zM32,43H33V44H32zM34,43H35V44H34zM35,43H36V44H35zM36,43H37V44H36zM37,43H38V44H37zM38,43H39V44H38zM39,43H40V44H39zM42,43H43V44H42zM46,43H47V44H46zM48,43H49V44H48zM49,43H50V44H49zM50,43H51V44H50zM2,44H3V45H2zM3,44H4V45H3zM4,44H5V45H4zM5,44H6V45H5zM6,44H7V45H6zM7,44H8V45H7zM8,44H9V45H8zM12,44H13V45H12zM15,44H16V45H15zM17,44H18V45H17zM20,44H21V45H20zM21,44H22V45H21zM22,44H23V45H22zM23,44H24V45H23zM24,44H25V45H24zM26,44H27V45H26zM28,44H29V45H28zM30,44H31V45H30zM31,44H32V45H31zM34,44H35V45H34zM40,44H41V45H40zM41,44H42V45H41zM42,44H43V45H42zM44,44H45V45H44zM46,44H47V45H46zM47,44H48V45H47zM48,44H49V45H48zM2,45H3V46H2zM8,45H9V46H8zM10,45H11V46H10zM12,45H13V46H12zM13,45H14V46H13zM17,45H18V46H17zM18,45H19V46H18zM20,45H21V46H20zM21,45H22V46H21zM22,45H23V46H22zM24,45H25V46H24zM28,45H29V46H28zM31,45H32V46H31zM32,45H33V46H32zM33,45H34V46H33zM34,45H35V46H34zM35,45H36V46H35zM36,45H37V46H36zM37,45H38V46H37zM38,45H39V46H38zM39,45H40V46H39zM42,45H43V46H42zM46,45H47V46H46zM49,45H50V46H49zM50,45H51V46H50zM2,46H3V47H2zM4,46H5V47H4zM5,46H6V47H5zM6,46H7V47H6zM8,46H9V47H8zM11,46H12V47H11zM12,46H13V47H12zM13,46H14V47H13zM14,46H15V47H14zM15,46H16V47H15zM23,46H24V47H23zM24,46H25V47H24zM25,46H26V47H25zM26,46H27V47H26zM27,46H28V47H27zM28,46H29V47H28zM30,46H31V47H30zM31,46H32V47H31zM32,46H33V47H32zM33,46H34V47H33zM36,46H37V47H36zM37,46H38V47H37zM38,46H39V47H38zM39,46H40V47H39zM41,46H42V47H41zM42,46H43V47H42zM43,46H44V47H43zM44,46H45V47H44zM45,46H46V47H45zM46,46H47V47H46zM47,46H48V47H47zM48,46H49V47H48zM50,46H51V47H50zM2,47H3V48H2zM4,47H5V48H4zM5,47H6V48H5zM6,47H7V48H6zM8,47H9V48H8zM10,47H11V48H10zM11,47H12V48H11zM12,47H13V48H12zM19,47H20V48H19zM20,47H21V48H20zM22,47H23V48H22zM23,47H24V48H23zM24,47H25V48H24zM26,47H27V48H26zM27,47H28V48H27zM28,47H29V48H28zM29,47H30V48H29zM31,47H32V48H31zM32,47H33V48H32zM33,47H34V48H33zM34,47H35V48H34zM35,47H36V48H35zM36,47H37V48H36zM39,47H40V48H39zM40,47H41V48H40zM41,47H42V48H41zM42,47H43V48H42zM46,47H47V48H46zM49,47H50V48H49zM50,47H51V48H50zM2,48H3V49H2zM4,48H5V49H4zM5,48H6V49H5zM6,48H7V49H6zM8,48H9V49H8zM11,48H12V49H11zM12,48H13V49H12zM13,48H14V49H13zM14,48H15V49H14zM18,48H19V49H18zM20,48H21V49H20zM21,48H22V49H21zM25,48H26V49H25zM26,48H27V49H26zM29,48H30V49H29zM31,48H32V49H31zM35,48H36V49H35zM36,48H37V49H36zM37,48H38V49H37zM40,48H41V49H40zM41,48H42V49H41zM43,48H44V49H43zM46,48H47V49H46zM47,48H48V49H47zM50,48H51V49H50zM2,49H3V50H2zM8,49H9V50H8zM12,49H13V50H12zM13,49H14V50H13zM14,49H15V50H14zM15,49H16V50H15zM16,49H17V50H16zM18,49H19V50H18zM24,49H25V50H24zM27,49H28V50H27zM30,49H31V50H30zM31,49H32V50H31zM33,49H34V50H33zM35,49H36V50H35zM37,49H38V50H37zM38,49H39V50H38zM41,49H42V50H41zM45,49H46V50H45zM46,49H47V50H46zM2,50H3V51H2zM3,50H4V51H3zM4,50H5V51H4zM5,50H6V51H5zM6,50H7V51H6zM7,50H8V51H7zM8,50H9V51H8zM10,50H11V51H10zM11,50H12V51H11zM12,50H13V51H12zM13,50H14V51H13zM14,50H15V51H14zM15,50H16V51H15zM19,50H20V51H19zM20,50H21V51H20zM21,50H22V51H21zM22,50H23V51H22zM29,50H30V51H29zM31,50H32V51H31zM39,50H40V51H39zM46,50H47V51H46zM48,50H49V51H48zM49,50H50V51H49zM50,50H51V51H50z" id="qr-path" fill="#000000" fill-opacity="1" fill-rule="nonzero" stroke="none" /></svg><div style="margin-top:10px;font-size:20px;font-weight:900;color:var(--blued)">#ｽﾀｯｸﾁｬﾝｻﾞｷﾞｬｻﾞﾘﾝｸﾞ</div><div style="font-size:13px;color:var(--ink2)">読み取ると X が開いて、ハッシュタグが入っています</div></div>` },

    /* ───────── C ───────── */
    { ch: 5, tag: '失敗事例', cover: { num: 'C', title: '失敗事例', sub: '3つだけ、1分ずつ' },
      talk: `<b>他の AI イベントは「できます」を見せます。「壊れ方」を配るところはあまりありません。</b><br>
             詰まって抜けるたびに書いた記録から、<b>今日は3件だけ、1分ずつ。</b>残りは配布物（失敗カタログ）に畳んであるので、気づいた失敗や良いプラクティスは交流会で。` },

    { ch: 5, tag: '失敗1 曲を止めても踊り続けた（原因は自分）',
      talk: `<b>1分。</b>原因は自分でした。実機を指しながら。`,
      html: K.head('マイクが拾っていたのは、<span class="r">自分のサーボ音。</span>') +
            `<div class="panel"><svg viewBox="0 0 760 230" role="img" aria-label="失敗1の自己増幅ループ：首が動くとサーボ音が出て、マイクが拾い、拍として検出され、また踊る。4秒ごとに首を止めて測ることで輪を切った" style="width:100%;height:auto;display:block;font-family:inherit;font-weight:700">
  <defs><marker id="ar6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#4E7590"/></marker></defs>
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
  <line x1="170" y1="65" x2="218" y2="65" stroke="#4E7590" stroke-width="2" marker-end="url(#ar6)"/>
  <line x1="370" y1="65" x2="418" y2="65" stroke="#4E7590" stroke-width="2" marker-end="url(#ar6)"/>
  <line x1="570" y1="65" x2="598" y2="65" stroke="#4E7590" stroke-width="2" marker-end="url(#ar6)"/>
  <path d="M670 100 Q 670 150 380 150 Q 95 150 95 102" fill="none" stroke="#C43D3D" stroke-width="2" marker-end="url(#ar6)"/>
  <text x="380" y="140" text-anchor="middle" font-size="12" fill="#C43D3D">踊るほど拍が立つ（自己増幅）</text>
  <rect x="300" y="168" width="160" height="44" rx="12" fill="#DCF5DF" stroke="#55C96A" stroke-width="3"/>
  <text x="380" y="188" text-anchor="middle" font-size="12" fill="#2E8C42">4秒ごとに首を止めて測る</text>
  <text x="380" y="204" text-anchor="middle" font-size="10" fill="#2E8C42">止まっている間だけ拍を見る＝「聴き入る」</text>
  <line x1="380" y1="168" x2="380" y2="152" stroke="#55C96A" stroke-width="2"/>
  <text x="392" y="164" font-size="14" fill="#2E8C42">✂</text>
</svg></div>` },

  ],
};
