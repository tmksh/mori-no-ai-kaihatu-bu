import { ConsultationPanel, ConsultationProvider, CourseLink } from "@/components/consultation";
import { Hero } from "@/components/hero";
import { SiteHeader } from "@/components/site-header";
import { Symbols } from "@/components/symbols";
import { operator } from "@/lib/site-config";

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
            「学んだ。でも、
            <br />
            案件につながらない。」
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
          <div className="growth-garden">
            <svg className="garden-trail" viewBox="0 0 640 100" preserveAspectRatio="none" aria-hidden="true">
              <path d="M62 65C139 89 171 22 242 48S355 85 401 47 517 25 577 40" />
            </svg>
            <ol aria-label="学びから成長への流れ">
              <li>
                <div className="garden-plant seed">
                  <svg aria-hidden="true">
                    <use href="#acorn" />
                  </svg>
                </div>
                <span>学ぶ</span>
              </li>
              <li>
                <div className="garden-plant shoot">
                  <svg aria-hidden="true">
                    <use href="#sprout" />
                  </svg>
                </div>
                <span>つくる</span>
              </li>
              <li>
                <div className="garden-plant sapling">
                  <svg aria-hidden="true">
                    <use href="#tree" />
                  </svg>
                </div>
                <span>実案件へ</span>
              </li>
              <li>
                <div className="garden-plant grown">
                  <svg aria-hidden="true">
                    <use href="#tree" />
                  </svg>
                  <svg className="garden-bird" viewBox="0 0 32 24" aria-hidden="true">
                    <path d="M3 16Q11 7 16 15Q23 2 29 9" />
                  </svg>
                </div>
                <span>力にする</span>
              </li>
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
            <div className="feature-grid">
              <article>
                <div className="feature-top">
                  <span>01</span>
                  <svg>
                    <use href="#sprout" />
                  </svg>
                </div>
                <h3>
                  学んだ先で、
                  <br />
                  実案件に挑戦する。
                </h3>
                <p>
                  SHINJIDAIが案件獲得を進め、学習後にスキルに合う実案件へ参加する機会をつくります。チームで業務を理解し、開発や納品に携わりながら、実務経験を積んでいきます。
                </p>
                <span className="feature-footer">基礎学習から、チームでの実案件参加へ</span>
              </article>
              <article>
                <div className="feature-top">
                  <span>02</span>
                  <div className="chat-art">
                    <span>どうだった？</span>
                    <span>できました！</span>
                  </div>
                </div>
                <h3>
                  つまずいたら、
                  <br />
                  一緒に考える人がいる。
                </h3>
                <p>
                  一人ひとりに定期的な1on1。わからないことも、進め方の悩みも話しながら、今のあなたに合った次の一歩を見つけます。
                </p>
                <span className="feature-footer">基本は2週間に1回の1on1</span>
              </article>
              <article>
                <div className="feature-top">
                  <span>03</span>
                  <div className="steps-art">
                    <i />
                    <i />
                    <i>
                      <svg>
                        <use href="#leaf" />
                      </svg>
                    </i>
                  </div>
                </div>
                <h3>
                  実務で育てる、
                  <br />
                  仕事に使えるスキル。
                </h3>
                <p>
                  お客さまの要望を聞き、必要な機能を考え、つくって確かめる。提案から開発・納品までの実践を通じて、現場で必要な判断や進め方を学び、次の仕事にも活かせるスキルを育てます。
                </p>
                <span className="feature-footer">開発・業務理解・提案・納品を実践で学ぶ</span>
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
          <svg viewBox="0 0 1440 180" preserveAspectRatio="none">
            <path d="M0 130Q160 -10 330 99T650 98T990 78T1440 100V180H0Z" fill="#55b94b" />
            <path d="M0 85Q140 20 300 138T640 130T1000 105T1440 65V180H0Z" fill="#00996b" />
          </svg>
          <svg className="hill-leaf">
            <use href="#leaf" />
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
                <div className="course-stage">
                  その１ <span>まずは、種をまこう。</span>
                </div>
                <svg className="course-icon">
                  <use href="#acorn" />
                </svg>
                <h3>どんぐりコース</h3>
                <p className="course-lead">AI開発の基礎を学ぶ</p>
                <p>「はじめて」からで大丈夫。AIと一緒に手を動かし、つくる楽しさを知るコース。</p>
                <ul>
                  <li>AI開発の基本と環境づくり</li>
                  <li>AIへの伝え方と出力の確かめ方</li>
                  <li>小さなアプリづくりに挑戦</li>
                </ul>
                <div className="course-goal">
                  <small>このコースで目指す姿</small>
                  <strong>自分で、小さなものをつくれる。</strong>
                </div>
                <CourseLink course="どんぐりコース" />
              </article>
              <article className="course wakaba">
                <div className="course-stage">
                  その２ <span>できることを、広げよう。</span>
                </div>
                <svg className="course-icon">
                  <use href="#sprout" />
                </svg>
                <h3>わかばコース</h3>
                <p className="course-lead">業務を理解し、開発する</p>
                <p>つくる前に、仕事を知る。現場の困りごとを整理して、使える仕組みに変えるコース。</p>
                <ul>
                  <li>業務の流れ・課題を整理する</li>
                  <li>必要な機能を考え、設計する</li>
                  <li>動作確認と改善を重ねる</li>
                </ul>
                <div className="course-goal">
                  <small>このコースで目指す姿</small>
                  <strong>仕事の課題を、開発で解決できる。</strong>
                </div>
                <CourseLink course="わかばコース" />
              </article>
              <article className="course keyaki">
                <div className="course-stage">
                  その３ <span>仲間と、大きく育とう。</span>
                </div>
                <svg className="course-icon">
                  <use href="#tree" />
                </svg>
                <h3>けやきコース</h3>
                <p className="course-lead">提案から納品まで、チームで</p>
                <p>仲間と役割を分担し、お客さまに価値を届ける。実務の一連の流れに取り組むコース。</p>
                <ul>
                  <li>ヒアリングから提案をつくる</li>
                  <li>チームでの開発・レビュー</li>
                  <li>納品と、その後の改善を考える</li>
                </ul>
                <div className="course-goal">
                  <small>このコースで目指す姿</small>
                  <strong>チームで、価値を届けられる。</strong>
                </div>
                <CourseLink course="けやきコース" />
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
          <div className="container">
            <div className="section-heading">
              <h2>
                <span>学びを、</span>
                <span>仕事につなぐ道のり。</span>
              </h2>
              <p>学習で土台をつくり、実案件で経験を積み、次の仕事につなげる。</p>
            </div>
            <ol className="journey-list">
              <li>
                <span>01</span>
                <h3>現在地を知る</h3>
                <p>個別面談で経験と目標を整理。自分に合うスタートを見つけます。</p>
              </li>
              <li>
                <span>02</span>
                <h3>学んで、つくる</h3>
                <p>基礎から実践へ。1on1で振り返りながら、開発経験を積みます。</p>
              </li>
              <li>
                <span>03</span>
                <h3>実案件に挑戦する</h3>
                <p>学習状況とスキルを確認し、条件の合う実案件にチームで参加する機会をつくります。</p>
              </li>
              <li>
                <span>04</span>
                <h3>経験を次の仕事へ</h3>
                <p>実務で得たスキルと経験を、次の提案や案件獲得、収益化につなげていきます。</p>
              </li>
            </ol>
          </div>
        </section>
        <section className="support section">
          <div className="container support-inner">
            <div>
              <h2>「最近、どう？」がある安心。</h2>
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
              <span className="tape" />
              <p>森の1on1ノート</p>
              <ul>
                <li>今の「できた」を振り返る</li>
                <li>つまずいていることを整理する</li>
                <li>次の小さな目標を決める</li>
              </ul>
              <div>
                <b>2週間に1回</b>
                <small>を基本に、一人ひとりに合わせて</small>
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
              <svg>
                <use href="#tree" />
              </svg>
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
