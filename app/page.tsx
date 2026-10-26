import { ConsultationPanel, ConsultationProvider, CourseLink } from "@/components/consultation";
import { Hero } from "@/components/hero";
import { SiteHeader } from "@/components/site-header";
import { Symbols } from "@/components/symbols";
import { operator } from "@/lib/site-config";

const growthCycle = [
  { label: "学ぶ", next: "実践", image: "/assets/growth-learn.webp" },
  { label: "つくる", next: "スキル確認", image: "/assets/growth-make.webp" },
  { label: "実案件へ", next: "実務経験", image: "/assets/growth-project.webp" },
  { label: "力にする", next: "次の挑戦へ", image: "/assets/growth-grow.webp" },
];

const journeySteps = [
  {
    number: "01",
    title: "現在地を知る",
    text: "個別面談で経験と目標を整理。自分に合うスタートを見つけます。",
    image: "/assets/journey-start.webp",
    alt: "ウサギとメガネのフクロウが、森の丸太に座って地図を広げ、進む道を相談する手描きイラスト",
  },
  {
    number: "02",
    title: "学んで、つくる",
    text: "基礎から実践へ。1on1で振り返りながら、開発経験を積みます。",
    image: "/assets/journey-learn.webp",
    alt: "ツリーハウスの勉強部屋で、キツネが本を広げてパソコンで学ぶ手描きイラスト",
  },
  {
    number: "03",
    title: "実案件に挑戦する",
    text: "学習状況とスキルを確認し、条件の合う実案件にチームで参加する機会をつくります。",
    image: "/assets/journey-project.webp",
    alt: "木の工房で、キツネ・ウサギ・リスが設計図を囲み、クマのお客さまと一緒に仕事を進める手描きイラスト",
  },
  {
    number: "04",
    title: "経験を次の仕事へ",
    text: "実務で得たスキルと経験を、次の提案や案件獲得、収益化につなげていきます。",
    image: "/assets/journey-next.webp",
    alt: "キツネとウサギが、大きな木の立つ丘へ続く道を並んで歩いていく手描きイラスト",
  },
];

const pawTrails = ["paw-trail-one", "paw-trail-two", "paw-trail-three"];

export default function HomePage() {
  return (
    <ConsultationProvider>
      <a className="skip" href="#main">
        本文へ移動
      </a>
      <Symbols />
      <SiteHeader />
      <main id="main">
        <Hero />
        <section id="about" className="intro section">
          <h2>
            <span>「学んだ。でも、</span>
            <span>案件につながらない。」</span>
          </h2>
          <p>
            フリーランスを目指して勉強しているのに、案件が取れない。
            <br />
            実務経験がないから、自信を持って提案できない。
          </p>
          <p>
            森のAI開発部は、<strong>学習から実案件への参加までをつなぐ</strong>
            <br />
            実務型AI開発スクールです。
            <br />
            基礎を身につけたら、スキルに合った案件にチームで挑戦。
            <br />
            実務を経験しながら、仕事に使える力を育てます。
          </p>
          <p>
            開発スキルに加えて、業務を理解する力、提案する力、
            <br />
            納品までやりきる力も。
            <br />
            実務を通して価値を届けられる<strong>「グロースAIエンジニア」</strong>を目指します。
          </p>
          <div className="growth-cycle">
            <ol aria-label="学びから成長への流れ">
              {growthCycle.map((stage, index) => (
                <li key={stage.label} className={`cycle-stage cycle-stage-${index + 1}`}>
                  <div className="cycle-card">
                    <img src={stage.image} alt="" width={560} height={560} loading="lazy" />
                  </div>
                  <span className="cycle-bubble">{stage.label}</span>
                  <span className="cycle-link">
                    <b>{stage.next}</b>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <svg className="intro-tree tree-left" aria-hidden="true">
            <use href="#tree" />
          </svg>
          <svg className="intro-tree tree-right" aria-hidden="true">
            <use href="#sprout" />
          </svg>
        </section>
        <section id="features" className="features section">
          <div className="container">
            <div className="section-heading">
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
                  <img
                    className="feature-illust"
                    src="/assets/feature-project.webp"
                    alt="キツネとウサギが、クマのお客さまと握手して仕事を受け取る手描きイラスト"
                    width={800}
                    height={800}
                    loading="lazy"
                  />
                  <span className="feature-tag">実案件へ</span>
                </div>
                <div className="feature-body">
                  <h3>
                    <svg aria-hidden="true">
                      <use href="#acorn" />
                    </svg>
                    学んだ先で、実案件に挑戦する。
                  </h3>
                  <p>
                    SHINJIDAIが案件獲得を進め、学習後にスキルに合う実案件へ参加する機会をつくります。チームで業務を理解し、開発や納品に携わりながら、実務経験を積んでいきます。
                  </p>
                  <span className="feature-note">基礎学習から、チームでの実案件参加へ</span>
                </div>
              </article>
              <article className="feature-card">
                <div className="feature-visual">
                  <span className="feature-number">02</span>
                  <img
                    className="feature-illust"
                    src="/assets/feature-mentor.webp"
                    alt="メガネのフクロウとウサギが、切り株に座ってお茶を飲みながら話す手描きイラスト"
                    width={800}
                    height={800}
                    loading="lazy"
                  />
                  <span className="feature-tag">伴走</span>
                </div>
                <div className="feature-body">
                  <h3>
                    <svg aria-hidden="true">
                      <use href="#acorn" />
                    </svg>
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
                  <img
                    className="feature-illust"
                    src="/assets/feature-practice.webp"
                    alt="キツネがパソコンで開発し、リスが画面設計のスケッチを指して相談する手描きイラスト"
                    width={800}
                    height={800}
                    loading="lazy"
                  />
                  <span className="feature-tag">実践力</span>
                </div>
                <div className="feature-body">
                  <h3>
                    <svg aria-hidden="true">
                      <use href="#acorn" />
                    </svg>
                    実務で育てる、仕事に使えるスキル。
                  </h3>
                  <p>
                    お客さまの要望を聞き、必要な機能を考え、つくって確かめる。提案から開発・納品までの実践を通じて、現場で必要な判断や進め方を学び、次の仕事にも活かせるスキルを育てます。
                  </p>
                  <span className="feature-note">開発・業務理解・提案・納品を実践で学ぶ</span>
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
          <svg className="hill-shape" viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path d="M0 118C110 92 250 26 420 24S650 112 800 114S1010 38 1150 42S1360 104 1440 126V200H0Z" />
          </svg>
          <svg className="hill-tree">
            <use href="#tree" />
          </svg>
        </div>
        <section id="courses" className="courses section">
          <div className="container">
            <div className="section-heading">
              <h2>
                <span>どんぐりから、</span>
                <span>大きなけやきへ。</span>
              </h2>
              <p>今のあなたに合う場所から。3つのコースで、じっくり育とう。</p>
            </div>
            <div className="course-grid">
              <article className="course donguri">
                <div className="course-head">
                  <span className="course-stage">その１</span>
                  <img
                    className="course-illust"
                    src="/assets/course-donguri.webp"
                    alt="リスが土にどんぐりを植える手描きイラスト"
                    width={800}
                    height={800}
                    loading="lazy"
                  />
                  <p className="course-catch">まずは、種をまこう。</p>
                </div>
                <div className="course-body">
                  <h3>どんぐりコース</h3>
                  <p className="course-lead">AI開発の基礎を学ぶ</p>
                  <p className="course-text">「はじめて」でも大丈夫。<br />AIと手を動かし、つくる楽しさを知る。</p>
                  <ul>
                    <li>AI開発の基本と環境づくり</li>
                    <li>AIへの伝え方と出力の確かめ方</li>
                    <li>小さなアプリづくりに挑戦</li>
                  </ul>
                  <CourseLink course="どんぐりコース" />
                </div>
              </article>
              <article className="course wakaba">
                <div className="course-head">
                  <span className="course-stage">その２</span>
                  <img
                    className="course-illust"
                    src="/assets/course-wakaba.webp"
                    alt="ウサギが若木に水をあげる手描きイラスト"
                    width={800}
                    height={800}
                    loading="lazy"
                  />
                  <p className="course-catch">できることを、広げよう。</p>
                </div>
                <div className="course-body">
                  <h3>わかばコース</h3>
                  <p className="course-lead">業務を理解し、開発する</p>
                  <p className="course-text">つくる前に、仕事を知る。<br />困りごとを、使える仕組みに変える。</p>
                  <ul>
                    <li>業務の流れ・課題を整理する</li>
                    <li>必要な機能を考え、設計する</li>
                    <li>動作確認と改善を重ねる</li>
                  </ul>
                  <CourseLink course="わかばコース" />
                </div>
              </article>
              <article className="course keyaki">
                <div className="course-head">
                  <span className="course-stage">その３</span>
                  <img
                    className="course-illust"
                    src="/assets/course-keyaki.webp"
                    alt="大きなけやきの下で、キツネ・ウサギ・リス・クマがチームで仕事をする手描きイラスト"
                    width={800}
                    height={800}
                    loading="lazy"
                  />
                  <p className="course-catch">仲間と、大きく育とう。</p>
                </div>
                <div className="course-body">
                  <h3>けやきコース</h3>
                  <p className="course-lead">提案から納品まで、チームで</p>
                  <p className="course-text">仲間と役割を分担して、<br />お客さまに価値を届ける。</p>
                  <ul>
                    <li>ヒアリングから提案をつくる</li>
                    <li>チームでの開発・レビュー</li>
                    <li>納品と、その後の改善を考える</li>
                  </ul>
                  <CourseLink course="けやきコース" />
                </div>
              </article>
            </div>
            <p className="course-note">
              どこから始めるか迷っても大丈夫。経験や目標を聞きながら、一緒に考えます。
              <br />
              <small>受講料・期間・具体的なカリキュラムは、詳細が決まり次第ご案内します。</small>
            </p>
          </div>
        </section>
        <section id="stories" className="stories section">
          <div className="container story-layout">
            <div className="story-visual">
              <img
                src="/assets/forest-friends.webp"
                alt="キツネとウサギが、小さな木の机で一緒に開発する手描きイラスト"
                width={1024}
                height={1024}
                loading="lazy"
              />
              <span className="story-paper">
                学んだことが、
                <br />
                「ありがとう」に変わる。
              </span>
            </div>
            <div className="story-copy">
              <h2>
                学びの先の景色を、
                <br />
                もっと具体的に。
              </h2>
              <p>SHINJIDAIには、未経験から業務を学び、実際に収入につなげてきたメンバーがいます。</p>
              <div className="member-names">
                <span>じゅっきー</span>
                <span>あやとくん</span>
                <span>井上さん</span>
                <span>あきむねくん</span>
              </div>
              <p>
                何を学び、どのように実案件へ参加し、収入につなげたのか。案件を通して、どんなスキルが身についたのか。個別面談では、こうした経験をもとに、あなたの学習から実務への道のりを一緒に考えます。
              </p>
              <p className="quiet">
                ※ 上記はSHINJIDAIでの経験であり、本スクールの卒業生実績ではありません。成果には個人差があります。
              </p>
              <a className="text-link" href="#consultation">
                自分の「これから」を相談する <span>↗</span>
              </a>
            </div>
          </div>
        </section>
        <section className="journey section">
          <svg className="journey-wave journey-wave-top" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 0H1440V38C1320 70 1190 22 1050 40S800 86 640 62 360 18 220 44 60 70 0 52Z" />
          </svg>
          <div className="container">
            <div className="section-heading">
              <h2>
                <span>学びを、</span>
                <span>仕事につなぐ道のり。</span>
              </h2>
              <p>学習で土台をつくり、実案件で経験を積み、次の仕事につなげる。</p>
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
          </div>
          <svg className="journey-wave journey-wave-bottom" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 90H1440V40C1340 14 1220 58 1080 46S820 6 660 30 380 72 230 52 70 22 0 36Z" />
          </svg>
        </section>
        <section className="support section">
          <div className="container">
            <div className="support-inner">
              <div className="support-copy">
                <div className="support-illust">
                  <img src="/assets/feature-mentor.webp" alt="" width={800} height={800} loading="lazy" />
                </div>
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
                <p>森の1on1ノート</p>
                <ul>
                  <li>今の「できた」を振り返る</li>
                  <li>つまずいていることを整理する</li>
                  <li>次の小さな目標を決める</li>
                </ul>
                <div className="support-pace">
                  <b>2週間に1回</b>
                  <small>を基本に、一人ひとりに合わせて</small>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="faq section">
          <div className="container narrow">
            <div className="section-heading">
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
                  はい。どんぐりコースでは、AI開発の基礎から取り組みます。個別面談でこれまでの経験や学習に使える時間を伺い、始め方を一緒に考えます。
                </p>
              </details>
              <details>
                <summary>
                  <span>Q.</span> どのコースを選べばいいですか？<i>＋</i>
                </summary>
                <p>
                  基礎から始めたい方はどんぐり、業務に役立つ開発を学びたい方はわかば、チームで提案から納品まで取り組みたい方はけやきが目安です。面談時に現在地を整理してご案内します。
                </p>
              </details>
              <details>
                <summary>
                  <span>Q.</span> 学習はしていますが、案件獲得につながりません。<i>＋</i>
                </summary>
                <p>
                  そうした方も対象です。個別面談で今のスキルや経験を確認し、必要な学習と実務へのステップを一緒に整理します。SHINJIDAIが案件獲得を進め、学習後にスキルに合う実案件へチームで参加する機会をつくります。参加は案件状況や必要なスキル等に応じて調整します。
                </p>
              </details>
              <details>
                <summary>
                  <span>Q.</span> 必ず案件に参加したり、収入を得られますか？<i>＋</i>
                </summary>
                <p>
                  案件参加や収入を保証するものではありません。SHINJIDAIで案件獲得を進め、案件状況・必要なスキル・学習状況などに応じて、参加機会をつくっていく方針です。
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
                  <span>Q.</span> 受講料や期間を教えてください。<i>＋</i>
                </summary>
                <p>
                  受講料・期間・募集スケジュールは現在準備中です。決まり次第ご案内します。個別面談では、ご希望や目標に合った学び方についてお話しします。
                </p>
              </details>
            </div>
          </div>
        </section>
        <ConsultationPanel />
      </main>
      <footer>
        <div className="footer-inner">
          <a href="#" className="brand">
            <span className="brand-mark">
              <img src="/assets/logo-emblem.webp" alt="" width={192} height={192} loading="lazy" />
            </span>
            <span>
              <small>実務型AI開発スクール</small>
              <strong>森のAI開発部</strong>
            </span>
          </a>
          <p>小さな一歩が、大きな未来をつくる。</p>
          <a href="#main">ページの先頭へ ↑</a>
        </div>
        <div className="footer-bottom">
          <span>
            運営：
            <a className="footer-operator" href={operator.url} target="_blank" rel="noopener noreferrer">
              {operator.name}
            </a>
          </span>
          <span>© 森のAI開発部</span>
          <span>学んで、つくって、一緒に育とう。</span>
        </div>
      </footer>
    </ConsultationProvider>
  );
}
