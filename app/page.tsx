import {
  ConsultationLink,
  ConsultationPanel,
  ConsultationProvider,
  ConsultationTrigger,
  CourseLink,
} from "@/components/consultation";
import { Hero } from "@/components/hero";
import { ScrollMotion } from "@/components/scroll-motion";
import { SiteHeader } from "@/components/site-header";
import { Symbols } from "@/components/symbols";
import { memberVoices } from "@/lib/member-voices";
import { operator } from "@/lib/site-config";

const growthCycle = [
  { label: "学ぶ", next: "実践", image: "/assets/cycle-icon-learn.webp", width: 420, height: 314 },
  { label: "つくる", next: "スキル確認", image: "/assets/cycle-icon-make.webp", width: 420, height: 335 },
  { label: "実案件へ", next: "実務経験", image: "/assets/cycle-icon-project.webp", width: 420, height: 419 },
  { label: "力にする", next: "次の挑戦へ", image: "/assets/cycle-icon-grow.webp", width: 420, height: 566 },
];

const journeySteps = [
  {
    number: "01",
    title: "面談で、現在地を知る",
    text: "個別面談で、これまでの経験と目標を伺います。少人数で受け入れているため、面談を通してご参加いただけるかを判断します。",
    image: "/assets/journey/start.webp",
    alt: "木のテーブルをはさみ、ノートとパソコンを置いて二人で話している面談のイメージ写真",
  },
  {
    number: "02",
    title: "どんぐり会員で、触れてみる",
    text: "無料のどんぐり会員で、ChatGPTなどを使ったAI活用に触れます。自分で手を動かし、続けられるかを確かめる期間です。",
    image: "/assets/journey/learn.webp",
    alt: "窓辺の机で、パソコンのAIチャットを見ながらノートを取って学ぶイメージ写真",
  },
  {
    number: "03",
    title: "わかば会員で、実案件へ",
    text: "技術構成やセキュリティなどの前提知識を学んだうえで、業務委託として当社の実案件にチームで参加します。",
    image: "/assets/journey/project.webp",
    alt: "3人のチームが、パソコンと画面設計のスケッチを囲んで話し合うイメージ写真",
  },
  {
    number: "04",
    title: "けやきを目指す",
    text: "お客さまとの打ち合わせを進め、メンバーに指示を出し、人に教えられる。当社の中で、自分で仕事を回せる人を目指します。その先の関わり方も、面談で一緒に決めていきます。",
    image: "/assets/journey/next.webp",
    alt: "ホワイトボードの図を使って、メンバーに進め方を説明しているイメージ写真",
  },
];

const footerLinks = [
  { label: "トップ", href: "#main" },
  { label: "森のAI開発部とは", href: "#about" },
  { label: "学びと実案件", href: "#features" },
  { label: "会員のしくみ", href: "#courses" },
  { label: "実務への一歩", href: "#stories" },
  { label: "よくある質問", href: "#faq" },
  { label: "個別面談について", href: "#consultation" },
];

const pawTrails = ["paw-trail-one", "paw-trail-two", "paw-trail-three"];

const marqueeTags = [
  "はじめてのAI活用",
  "どんぐり会員は無料",
  "当社の実案件にチームで参加",
  "定期1on1で伴走",
  "技術構成とセキュリティから",
  "少人数で受け入れ",
  "グロースAIエンジニアへ",
];

const growStages = [
  { key: "sprout", src: "sprout", width: 260, height: 203, label: "どんぐり" },
  { key: "sapling", src: "sapling", width: 320, height: 616, label: "わかば" },
  { key: "young", src: "young", width: 420, height: 505, label: "" },
  { key: "keyaki", src: "keyaki", width: 560, height: 582, label: "けやき" },
];

export default function HomePage() {
  return (
    <ConsultationProvider>
      <a className="skip" href="#main">
        本文へ移動
      </a>
      <Symbols />
      <SiteHeader />
      <ScrollMotion />
      <main id="main">
        <Hero />
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((round) => (
              <ul key={round}>
                {marqueeTags.map((tag) => (
                  <li key={tag}>
                    <svg>
                      <use href="#leaf" />
                    </svg>
                    #{tag}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <section id="about" className="intro section">
          <p className="eyebrow">ABOUT</p>
          <h2>
            <span>「学んだ。でも、</span>
            <span>案件につながらない。」</span>
          </h2>
          <p className="intro-worry">
            AIや開発を勉強しているのに、仕事につながらない。
            <br />
            実務経験がないから、自信を持って提案できない。
          </p>
          <p className="intro-lead">
            森のAI開発部は、株式会社SHINJIDAIが運営する
            <br />
            <strong>学習から当社の実案件への参加までをつなぐ</strong>
            <br />
            実務型AI開発スクールです。
            <br />
            前提知識を身につけたら、当社の案件にチームで参加。
            <br />
            実務を経験しながら、仕事に使える力を育てます。
          </p>
          <p className="intro-goal">
            目指すのは、お客さまとの打ち合わせを進め、
            <br />
            メンバーに指示を出し、人に教えられる状態。
            <br />
            実務を通して価値を届けられる<strong>「グロースAIエンジニア」</strong>を目指します。
          </p>
          <div className="growth-cycle">
            <ol aria-label="学びから成長への流れ">
              {growthCycle.map((stage, index) => (
                <li key={stage.label} className={`cycle-stage cycle-stage-${index + 1}`}>
                  <div className="cycle-card">
                    <img src={stage.image} alt="" width={stage.width} height={stage.height} loading="lazy" />
                  </div>
                  <span className="cycle-bubble">{stage.label}</span>
                  <span className="cycle-link">
                    <b>{stage.next}</b>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <img className="intro-tree tree-left" src="/assets/intro/fox-tree.webp" alt="" width={400} height={603} loading="lazy" />
          <img className="intro-tree tree-right" src="/assets/intro/rabbit-sapling.webp" alt="" width={400} height={630} loading="lazy" />
        </section>
        <section id="features" className="features section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">FEATURES</p>
              <h2>
                学びと実案件を、
                <br />
                ひとつながりに。
              </h2>
              <p>実務への参加機会と、スキルを伸ばすサポートを。</p>
            </div>
            <div className="feature-cards">
              <article className="feature-card is-main">
                <div className="feature-visual">
                  <span className="feature-number">01</span>
                  <div className="ui-window" aria-hidden="true">
                    <p className="ui-window-bar">
                      <span />
                      project_board.md
                    </p>
                    <div className="ui-window-body">
                      <p className="ui-comment">// 今週のタスク</p>
                      <ul className="ui-tasks">
                        <li className="is-done">お客さまヒアリング</li>
                        <li className="is-done">画面の設計</li>
                        <li className="is-now">
                          実装<em>あなたの担当</em>
                        </li>
                        <li>レビュー・納品</li>
                      </ul>
                    </div>
                  </div>
                  <img className="feature-peek" src="/assets/feature-fox.webp" alt="" width={620} height={761} loading="lazy" />
                  <span className="feature-tag">実案件へ</span>
                </div>
                <div className="feature-body">
                  <h3>
                    学んだ先で、当社の実案件に参加する。
                  </h3>
                  <p>
                    当社（株式会社SHINJIDAI）がお客さまから受けた案件に、スキルに応じてチームで参加します。業務委託として報酬を受け取りながら、開発や納品に携わり、実務経験を積んでいきます。
                  </p>
                  <span className="feature-note">わかば会員から、当社の案件にチームで参加</span>
                </div>
              </article>
              <article className="feature-card">
                <div className="feature-visual">
                  <span className="feature-number">02</span>
                  <div className="ui-window" aria-hidden="true">
                    <p className="ui-window-bar">
                      <span />
                      1on1_chat
                    </p>
                    <div className="ui-window-body ui-chat">
                      <p className="from-mentor">最近、どう？</p>
                      <p className="from-you">エラーで止まってて…</p>
                      <p className="from-mentor">画面、一緒に見てみよう</p>
                    </div>
                  </div>
                  <img className="feature-peek" src="/assets/feature-bear.webp" alt="" width={620} height={737} loading="lazy" />
                  <span className="feature-tag">伴走</span>
                </div>
                <div className="feature-body">
                  <h3>
                    つまずいたら、一緒に考える人がいる。
                  </h3>
                  <p>
                    一人ひとりに定期的な1on1。わからないことも、進め方の悩みも話しながら、今のあなたに合った次の一歩を見つけます。
                  </p>
                  <span className="feature-note">基本は2週間に1回の1on1</span>
                </div>
              </article>
              <article className="feature-card">
                <div className="feature-visual">
                  <span className="feature-number">03</span>
                  <div className="ui-window" aria-hidden="true">
                    <p className="ui-window-bar">
                      <span />
                      basics.ts
                    </p>
                    <pre className="ui-window-body ui-code">
                      <code>
                        <i>{"// 現場に入る前に"}</i>
                        {"\n"}
                        <b>const</b> base = {"{"}
                        {"\n  "}stack: <s>{'"技術構成"'}</s>,{"\n  "}security: <s>{'"基本の守り方"'}</s>,{"\n  "}ready: <b>true</b>,{"\n"}
                        {"}"}
                      </code>
                    </pre>
                  </div>
                  <img className="feature-peek" src="/assets/feature-rabbit.webp" alt="" width={620} height={929} loading="lazy" />
                  <span className="feature-tag">土台から</span>
                </div>
                <div className="feature-body">
                  <h3>
                    現場に入る前に、土台をつくる。
                  </h3>
                  <p>
                    実案件に入る前に、基本的な技術構成やセキュリティなど、現場で欠かせない前提知識を学びます。そのうえで、お客さまの要望を聞き、つくって確かめる実践へ進みます。
                  </p>
                  <span className="feature-note">技術構成・セキュリティを先に学ぶ</span>
                </div>
              </article>
            </div>
            <p className="section-footnote">
              ※ 実案件への参加は、案件状況やスキル等に応じて調整します。案件参加・収入を保証するものではありません。
              <br />
              ※ 1on1は開始3ヶ月以降、月1回にするなど、学習状況に応じて頻度を調整します。
            </p>
          </div>
        </section>
        <div className="hill-divider" aria-hidden="true">
          <svg className="hill-cloud hill-cloud-one" viewBox="0 0 200 70">
            <path d="M14 56c-12-2-14-18-2-23 0-14 18-20 28-11 6-15 30-17 38-3 9-9 27-6 30 7 14-3 26 6 22 18 10 1 16 8 12 13-3 3-8 4-14 4H22c-3 0-6-2-8-5Z" />
          </svg>
          <svg className="hill-cloud hill-cloud-two" viewBox="0 0 200 70">
            <path d="M14 56c-12-2-14-18-2-23 0-14 18-20 28-11 6-15 30-17 38-3 9-9 27-6 30 7 14-3 26 6 22 18 10 1 16 8 12 13-3 3-8 4-14 4H22c-3 0-6-2-8-5Z" />
          </svg>
          <div className="hill-scene">
            <svg className="hill-shape hill-back" viewBox="0 0 1440 260" preserveAspectRatio="none">
              <path d="M0 150C200 110 380 120 560 100S900 60 1100 50S1360 20 1440 30V260H0Z" />
            </svg>
            <svg className="hill-shape hill-mid" viewBox="0 0 1440 260" preserveAspectRatio="none">
              <path d="M0 180C260 160 480 140 700 130S1050 100 1260 70S1400 60 1440 62V260H0Z" />
            </svg>
            {growStages.map((stage) => (
              <div key={stage.src} className={`grow-item grow-${stage.key}`}>
                <img src={`/assets/grow/${stage.src}.webp`} alt="" width={stage.width} height={stage.height} loading="lazy" />
                {stage.label && <span>{stage.label}</span>}
              </div>
            ))}
            <svg className="hill-shape hill-front" viewBox="0 0 1440 260" preserveAspectRatio="none">
              <path d="M0 200C240 190 420 160 640 150S1000 120 1180 92S1380 70 1440 72V260H0Z" />
            </svg>
            <div className="grow-squirrel">
              <img src="/assets/grow/squirrel.webp" alt="" width={220} height={187} loading="lazy" />
            </div>
          </div>
        </div>
        <section id="courses" className="courses section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">COURSE</p>
              <h2>
                <span>どんぐりから、</span>
                <span>大きなけやきへ。</span>
              </h2>
              <p>まずは無料のどんぐり会員から。行動を重ねた先で、わかば会員として実案件へ。</p>
            </div>
            <div className="course-grid">
              <article className="course donguri">
                <div className="course-head">
                  <span className="course-stage">STEP 01</span>
                  <img
                    className="course-illust"
                    src="/assets/grow/sprout.webp"
                    alt=""
                    width={260}
                    height={203}
                    loading="lazy"
                  />
                  <p className="course-catch">まずは、種をまこう。</p>
                </div>
                <div className="course-body">
                  <div className="course-title">
                    <h3>どんぐり会員</h3>
                    <span className="course-price">無料</span>
                  </div>
                  <p className="course-lead">AI活用に、まず触れてみる</p>
                  <p className="course-text">ChatGPTなどを使った、かんたんなAI活用から。<br />自分で手を動かしてみる、最初の一歩です。</p>
                  <ul>
                    <li>ChatGPTなど、AIツールの基本的な使い方</li>
                    <li>日々の作業に、AIを取り入れてみる</li>
                    <li>続けられるか、自分のペースを知る</li>
                  </ul>
                  <CourseLink course="どんぐり会員" />
                </div>
              </article>
              <article className="course wakaba">
                <div className="course-head">
                  <span className="course-stage">STEP 02</span>
                  <img
                    className="course-illust"
                    src="/assets/grow/sapling.webp"
                    alt=""
                    width={320}
                    height={616}
                    loading="lazy"
                  />
                  <p className="course-catch">実務で、できることを広げよう。</p>
                </div>
                <div className="course-body">
                  <div className="course-title">
                    <h3>わかば会員</h3>
                    <span className="course-price">有料・案件参加</span>
                  </div>
                  <p className="course-lead">前提知識を学び、当社の案件へ</p>
                  <p className="course-text">技術構成やセキュリティの土台を学び、<br />業務委託として当社の実案件に参加します。</p>
                  <ul>
                    <li>基本的な技術構成・セキュリティを学ぶ</li>
                    <li>当社の実案件にチームで参加する（報酬あり）</li>
                    <li>1on1で振り返り、担当できる範囲を広げる</li>
                  </ul>
                  <CourseLink course="わかば会員" />
                </div>
              </article>
              <article className="course keyaki">
                <div className="course-head">
                  <span className="course-stage">GOAL</span>
                  <img
                    className="course-illust"
                    src="/assets/grow/keyaki.webp"
                    alt=""
                    width={560}
                    height={582}
                    loading="lazy"
                  />
                  <p className="course-catch">仲間と、大きく育とう。</p>
                </div>
                <div className="course-body">
                  <div className="course-title">
                    <h3>けやき</h3>
                    <span className="course-price">目指す姿</span>
                  </div>
                  <p className="course-lead">自分で仕事を回せる人へ</p>
                  <p className="course-text">
                    目安は、当社エンジニアの今の働き方。お客さまとの打ち合わせから、チームへの指示、メンバーの育成までを担える状態を目指します。たどり着いたあとの次の挑戦も、一緒に考えます。
                  </p>
                  <ul>
                    <li>背景と目的を整理し、打ち合わせを進める</li>
                    <li>メンバーに指示を出し、開発を進める</li>
                    <li>人に教え、次のメンバーを育てる</li>
                  </ul>
                  <CourseLink course="けやき" />
                </div>
              </article>
            </div>
            <p className="course-note">
              一度に受け入れる人数は、少人数に限っています。面談でお話を伺ったうえで、ご参加いただけるかを判断します。
              <br />
              <small>わかば会員の受講料・案件報酬・支払い方法は現在調整中です。決まり次第ご案内します。</small>
            </p>
          </div>
        </section>
        <section id="stories" className="stories section">
          <div className="container story-layout">
            <div className="story-visual">
              <div className="story-photo">
                <img
                  src="/assets/story/photo.webp"
                  alt="窓辺の机でパソコンに向かい、届いたメッセージを読んで笑顔になっているイメージ写真"
                  width={720}
                  height={960}
                  loading="lazy"
                />
                <div className="story-notice story-notice-client" aria-hidden="true">
                  <p className="story-notice-head">
                    <b>お</b>お客さま<time>たった今</time>
                  </p>
                  <p>新しい画面、とても使いやすいです。ありがとうございます！</p>
                </div>
                <div className="story-notice story-notice-team" aria-hidden="true">
                  <p className="story-notice-head">
                    <b>リ</b>チームリーダー<time>5分前</time>
                  </p>
                  <p>レビューOK！次の機能もお願いします</p>
                </div>
              </div>
              <span className="story-paper">
                学んだことが、
                <br />
                「ありがとう」に変わる。
              </span>
              <small className="story-caption">※ 写真・メッセージはイメージです。</small>
            </div>
            <div className="story-copy">
              <p className="eyebrow">STORY</p>
              <h2>
                学びの先の景色を、
                <br />
                もっと具体的に。
              </h2>
              <p>当社（株式会社SHINJIDAI）には、未経験から業務を学び、実際に収入につなげてきたメンバーがいます。</p>
              <p>
                何を学び、どのように実案件へ参加し、収入につなげたのか。案件を通して、どんなスキルが身についたのか。個別面談では、こうした経験をもとに、あなたの学習から実務への道のりを一緒に考えます。
              </p>
              <ConsultationLink className="text-link">
                自分の「これから」を相談する <span>↗</span>
              </ConsultationLink>
            </div>
          </div>
          <div className="container">
            <ul className="member-voices" aria-label="メンバーの声">
              {memberVoices.map((member) => (
                <li key={member.name} className="member-voice">
                  <div className="member-photo">
                    {member.photo ? (
                      <img src={member.photo} alt={`${member.name}のイラスト`} width={240} height={240} loading="lazy" />
                    ) : (
                      <span aria-hidden="true">{member.name.charAt(0)}</span>
                    )}
                  </div>
                  <div className="member-body">
                    <p className="member-name">{member.name}</p>
                    {member.role ? <p className="member-role">{member.role}</p> : null}
                    <blockquote className={member.voice ? undefined : "is-pending"}>
                      {member.voice || "コメントを準備中です"}
                    </blockquote>
                  </div>
                </li>
              ))}
            </ul>
            <p className="member-note">
              ※ 紹介しているのは当社での経験であり、本スクールの受講生の実績ではありません。成果には個人差があります。受講生の毎月の振り返りは、ご本人の了承を得たうえで、今後ここで紹介していきます。
            </p>
          </div>
        </section>
        <section className="journey section">
          <svg className="journey-wave journey-wave-top" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 0H1440V38C1320 70 1190 22 1050 40S800 86 640 62 360 18 220 44 60 70 0 52Z" />
          </svg>
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">FLOW</p>
              <h2>
                <span>学びを、</span>
                <span>仕事につなぐ道のり。</span>
              </h2>
              <p>面談から、どんぐり会員、わかば会員、そしてけやきへ。</p>
            </div>
            <div className="journey-board">
              {pawTrails.map((trail) => (
                <div key={trail} className={`paw-trail ${trail}`} aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((step) => (
                    <svg key={step}>
                      <use href="#paw" />
                    </svg>
                  ))}
                </div>
              ))}
              <ol className="journey-list">
                {journeySteps.map((step) => (
                  <li key={step.number} className="journey-step">
                    <div className="journey-photo">
                      <img src={step.image} alt={step.alt} width={960} height={720} loading="lazy" />
                      <span className="journey-number">{step.number}</span>
                      <h3 className="journey-label">{step.title}</h3>
                    </div>
                    <p>{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>
            <p className="journey-note">※ 写真はイメージです。</p>
          </div>
          <svg className="journey-wave journey-wave-bottom" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 90H1440V40C1340 14 1220 58 1080 46S820 6 660 30 380 72 230 52 70 22 0 36Z" />
          </svg>
        </section>
        <section className="support section">
          <div className="container">
            <div className="support-inner">
              <div className="support-copy">
                <p className="support-eyebrow">1on1 SUPPORT</p>
                <h2>
                  <span>「最近、どう？」が</span>
                  <span>ある安心。</span>
                </h2>
                <p>
                  うまく進んだ日も、少し立ち止まった日も。
                  <br />
                  加藤さんを含む運営メンバーが、定期1on1で伴走します。
                  <br />
                  学習のこと、仕事のこと、これからのこと。
                  <br />
                  あなたのペースを、一緒につくっていきましょう。
                </p>
              </div>
              <div className="support-note">
                <p className="support-note-bar">
                  <span aria-hidden="true" />
                  1on1_note.md
                </p>
                <p className="support-note-comment">// 森の1on1でやること</p>
                <ul>
                  <li>今の「できた」を振り返る</li>
                  <li>つまずいていることを整理する</li>
                  <li>次の小さな目標を決める</li>
                </ul>
                <div className="support-pace">
                  <b>2週間に1回</b>
                  <small>を基本に、一人ひとりに合わせて</small>
                </div>
                <img className="support-peek" src="/assets/hero/squirrel.webp" alt="" width={300} height={353} loading="lazy" />
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="faq section">
          <div className="container narrow">
            <div className="section-heading">
              <p className="eyebrow">FAQ</p>
              <h2>
                <span>森に入る前の、</span>
                <span>気になること。</span>
              </h2>
            </div>
            <div className="faq-list">
              <details>
                <summary>
                  <span>Q.</span> プログラミング未経験でも大丈夫ですか？<i>＋</i>
                </summary>
                <p>
                  はい。無料のどんぐり会員では、ChatGPTなどを使ったかんたんなAI活用から始めます。個別面談でこれまでの経験や学習に使える時間を伺い、始め方を一緒に考えます。
                </p>
              </details>
              <details>
                <summary>
                  <span>Q.</span> どこから始めればいいですか？<i>＋</i>
                </summary>
                <p>
                  まずは無料のどんぐり会員から始めていただきます。自分で手を動かし、行動を続けられた方に、わかば会員（有料・案件参加）をご案内します。
                </p>
              </details>
              <details>
                <summary>
                  <span>Q.</span> 誰でも参加できますか？<i>＋</i>
                </summary>
                <p>
                  一度に受け入れる人数を少人数に限っているため、個別面談でお話を伺ったうえで、ご参加いただけるかを判断します。ご希望に添えない場合もありますので、あらかじめご了承ください。
                </p>
              </details>
              <details>
                <summary>
                  <span>Q.</span> 学習はしていますが、案件獲得につながりません。<i>＋</i>
                </summary>
                <p>
                  そうした方も対象です。個別面談で今のスキルや経験を確認し、必要な学習と実務へのステップを一緒に整理します。わかば会員になると、前提知識を学んだうえで、当社がお客さまから受けた案件にチームで参加します。
                </p>
              </details>
              <details>
                <summary>
                  <span>Q.</span> 必ず案件に参加したり、収入を得られますか？<i>＋</i>
                </summary>
                <p>
                  案件参加や収入を保証するものではありません。わかば会員は業務委託として当社の案件に参加し、報酬は担当する範囲によって変わります。本業の都合などで案件を続けられなくなった場合、業務委託は継続できません。入会前にご確認いただきます。
                </p>
              </details>
              <details>
                <summary>
                  <span>Q.</span> 1on1ではどんな相談ができますか？<i>＋</i>
                </summary>
                <p>
                  学習の進み具合や技術的なつまずき、実務への挑戦に向けた目標などを相談できます。基本は2週間に1回、開始3ヶ月以降は月1回にするなど、状況に合わせて調整します。
                </p>
              </details>
              <details>
                <summary>
                  <span>Q.</span> 料金を教えてください。<i>＋</i>
                </summary>
                <p>
                  どんぐり会員は無料です。わかば会員の受講料・案件報酬・支払い方法は現在調整中のため、決まり次第ご案内します。個別面談では、ご希望や目標に合った進め方についてお話しします。
                </p>
              </details>
              <details>
                <summary>
                  <span>Q.</span> けやきにたどり着いたら、どうなりますか？<i>＋</i>
                </summary>
                <p>
                  そこで終わりではありません。当社の中でどんな役割を担っていくか、次にどんな挑戦をするかを、面談で一緒に決めていきます。
                </p>
              </details>
            </div>
          </div>
        </section>
        <ConsultationPanel />
      </main>
      <footer className="site-footer">
        <a href="#main" className="footer-pagetop">
          <span aria-hidden="true">↑</span>
          PAGETOP
        </a>
        <div className="footer-main">
          <div className="footer-info">
            <a href="#" className="footer-brand" aria-label="森のAI開発部 トップ">
              <img src="/assets/logo-mark.webp" alt="" width={256} height={256} loading="lazy" />
              <span>
                <small>実務型AI開発スクール</small>
                <strong>森のAI開発部</strong>
              </span>
            </a>
            <p className="footer-tagline">
              <span>小さな一歩が、</span>
              <span>大きな未来をつくる。</span>
            </p>
            <p className="footer-operator-line">
              運営：
              <a className="footer-operator" href={operator.url} target="_blank" rel="noopener noreferrer">
                {operator.name}
              </a>
            </p>
          </div>
          <nav className="footer-nav" aria-label="フッターナビゲーション">
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>
                    <span aria-hidden="true">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-side">
            <ConsultationTrigger className="footer-cta">
              <span className="footer-cta-acorns" aria-hidden="true">
                <svg>
                  <use href="#acorn" />
                </svg>
                <svg>
                  <use href="#acorn" />
                </svg>
              </span>
              <span className="footer-cta-label">
                個別面談のご案内 <span aria-hidden="true">↗</span>
              </span>
            </ConsultationTrigger>
            <p className="footer-copyright">© 森のAI開発部</p>
          </div>
        </div>
      </footer>
    </ConsultationProvider>
  );
}
