import type { Metadata } from "next";
import localFont from "next/font/local";
import { PrintButton } from "@/components/print-button";
import { operator } from "@/lib/site-config";
import "./siryou.css";

const moriHandFull = localFont({
  src: "../fonts/yusei-magic.ttf",
  variable: "--font-mori-full",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "森のAI開発部｜ご案内資料",
  robots: { index: false, follow: false },
};

const pains = [
  {
    title: "案件獲得の壁",
    text: "フリーランスを目指して勉強しているのに、案件が取れない。",
  },
  {
    title: "実務経験の壁",
    text: "実務経験がないから、自信を持って提案できない。",
  },
  {
    title: "スキルへの不安",
    text: "今の学び方で、仕事に使える力が身につくのかわからない。",
  },
];

const cycle = [
  { label: "学ぶ", image: "/assets/growth-learn.webp" },
  { label: "つくる", image: "/assets/growth-make.webp" },
  { label: "実案件へ", image: "/assets/growth-project.webp" },
  { label: "力にする", image: "/assets/growth-grow.webp" },
];

const features = [
  {
    number: "01",
    tag: "実案件へ",
    title: "学んだ先で、実案件に挑戦する。",
    text: "SHINJIDAIが案件獲得を進め、学習後にスキルに合う実案件へ参加する機会をつくります。チームで業務を理解し、開発や納品に携わりながら、実務経験を積んでいきます。",
    image: "/assets/feature-project.webp",
  },
  {
    number: "02",
    tag: "伴走",
    title: "つまずいたら、一緒に考える人がいる。",
    text: "一人ひとりに定期的な1on1。わからないことも、進め方の悩みも話しながら、今のあなたに合った次の一歩を見つけます。",
    image: "/assets/feature-mentor.webp",
  },
  {
    number: "03",
    tag: "実践力",
    title: "実務で育てる、仕事に使えるスキル。",
    text: "お客さまの要望を聞き、必要な機能を考え、つくって確かめる。提案から開発・納品までの実践を通じて、現場で必要な判断や進め方を学びます。",
    image: "/assets/feature-practice.webp",
  },
];

const skills = [
  "開発スキル",
  "業務を理解する力",
  "提案する力",
  "納品までやりきる力",
];

const courses = [
  {
    name: "どんぐりコース",
    lead: "AI開発の基礎を学ぶ",
    catch: "まずは、種をまこう。",
    items: [
      "AI開発の基本と環境づくり",
      "AIへの伝え方と出力の確かめ方",
      "小さなアプリづくりに挑戦",
    ],
    image: "/assets/course-donguri.webp",
  },
  {
    name: "わかばコース",
    lead: "業務を理解し、開発する",
    catch: "できることを、広げよう。",
    items: [
      "業務の流れ・課題を整理する",
      "必要な機能を考え、設計する",
      "動作確認と改善を重ねる",
    ],
    image: "/assets/course-wakaba.webp",
  },
  {
    name: "けやきコース",
    lead: "提案から納品まで、チームで",
    catch: "仲間と、大きく育とう。",
    items: [
      "ヒアリングから提案をつくる",
      "チームでの開発・レビュー",
      "納品と、その後の改善を考える",
    ],
    image: "/assets/course-keyaki.webp",
  },
];

const steps = [
  {
    number: "01",
    title: "現在地を知る",
    text: "個別面談で経験と目標を整理。自分に合うスタートを見つけます。",
    image: "/assets/journey-start.webp",
  },
  {
    number: "02",
    title: "学んで、つくる",
    text: "基礎から実践へ。1on1で振り返りながら、開発経験を積みます。",
    image: "/assets/journey-learn.webp",
  },
  {
    number: "03",
    title: "実案件に挑戦する",
    text: "学習状況とスキルを確認し、条件の合う実案件にチームで参加する機会をつくります。",
    image: "/assets/journey-project.webp",
  },
  {
    number: "04",
    title: "経験を次の仕事へ",
    text: "実務で得たスキルと経験を、次の提案や案件獲得、収益化につなげていきます。",
    image: "/assets/journey-next.webp",
  },
];

const faqs = [
  {
    q: "プログラミング未経験でも大丈夫ですか？",
    a: "はい。どんぐりコースでは、AI開発の基礎から取り組みます。個別面談で経験や学習に使える時間を伺い、始め方を一緒に考えます。",
  },
  {
    q: "どのコースを選べばいいですか？",
    a: "基礎から始めたい方はどんぐり、業務に役立つ開発を学びたい方はわかば、チームで提案から納品まで取り組みたい方はけやきが目安です。",
  },
  {
    q: "必ず案件に参加したり、収入を得られますか？",
    a: "案件参加や収入を保証するものではありません。案件状況・必要なスキル・学習状況などに応じて、参加機会をつくっていく方針です。",
  },
  {
    q: "受講料や期間を教えてください。",
    a: "受講料・期間・募集スケジュールは現在準備中です。決まり次第ご案内します。",
  },
];

function SlideFooter({ page }: { page: number }) {
  return (
    <footer className="deck-foot">
      <span className="deck-foot-brand">
        <img src="/assets/logo-mark.webp" alt="" width={256} height={256} />
        森のAI開発部
      </span>
      <span>{String(page).padStart(2, "0")}</span>
    </footer>
  );
}

export default function SiryouPage() {
  return (
    <div className={`deck ${moriHandFull.variable}`}>
      <div className="deck-toolbar">
        <span>森のAI開発部 ご案内資料</span>
        <PrintButton />
      </div>
      <div className="deck-slides">
        <section className="slide slide-cover">
          <img
            className="cover-forest"
            src="/assets/forest-landscape.webp"
            alt=""
            width={1536}
            height={1024}
          />
          <div className="cover-copy">
            <div className="cover-brand">
              <img
                src="/assets/logo-mark.webp"
                alt=""
                width={256}
                height={256}
              />
              <strong>森のAI開発部</strong>
            </div>
            <h1>
              学んで、実案件へ。
              <br />
              経験を、自分の力に。
            </h1>
            <p className="cover-sub">実務型AI開発スクール ご案内資料</p>
          </div>
          <p className="cover-operator">運営：{operator.name}</p>
        </section>

        <section className="slide">
          <p className="deck-label">こんなお悩みはありませんか</p>
          <h2>「学んだ。でも、案件につながらない。」</h2>
          <ul className="pain-list">
            {pains.map((pain, index) => (
              <li key={pain.title}>
                <span className="pain-num">{index + 1}</span>
                <b>{pain.title}</b>
                <p>{pain.text}</p>
              </li>
            ))}
          </ul>
          <p className="deck-bridge">
            学ぶだけでも、案件を探すだけでもない。「学び」と「実務」をつなぐ場所が必要です。
          </p>
          <SlideFooter page={2} />
        </section>

        <section className="slide">
          <p className="deck-label">森のAI開発部とは</p>
          <h2>
            学習から実案件への参加までをつなぐ、
            <br />
            実務型AI開発スクールです。
          </h2>
          <ol className="cycle-row">
            {cycle.map((stage) => (
              <li key={stage.label}>
                <img src={stage.image} alt="" width={560} height={560} />
                <span>{stage.label}</span>
              </li>
            ))}
          </ol>
          <p className="deck-lead">
            基礎を身につけたら、スキルに合った案件にチームで挑戦。実務を経験しながら、仕事に使える力を育てます。
          </p>
          <SlideFooter page={3} />
        </section>

        <section className="slide">
          <p className="deck-label">3つの特徴</p>
          <h2>学びと実案件を、ひとつながりに。</h2>
          <div className="feature-row">
            {features.map((feature) => (
              <article key={feature.number}>
                <div className="feature-pic">
                  <img src={feature.image} alt="" width={800} height={800} />
                  <span>{feature.number}</span>
                </div>
                <em>{feature.tag}</em>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
          <SlideFooter page={4} />
        </section>

        <section className="slide slide-split">
          <div>
            <p className="deck-label">目指す姿</p>
            <h2>
              実務を通して価値を届ける
              <br />
              <span className="deck-grad">「グロースAIエンジニア」</span>
            </h2>
            <p className="deck-lead">
              開発スキルに加えて、業務を理解する力、提案する力、納品までやりきる力も。つくるだけで終わらず、お客さまの困りごとを解決できる人を育てます。
            </p>
          </div>
          <ul className="skill-grid">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <SlideFooter page={5} />
        </section>

        <section className="slide">
          <p className="deck-label">3つのコース</p>
          <h2>どんぐりから、大きなけやきへ。</h2>
          <div className="course-row">
            {courses.map((course) => (
              <article key={course.name}>
                <img src={course.image} alt="" width={800} height={800} />
                <p className="deck-course-catch">{course.catch}</p>
                <h3>{course.name}</h3>
                <p className="deck-course-lead">{course.lead}</p>
                <ul>
                  {course.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="deck-note">
            ※
            受講料・期間・具体的なカリキュラムは、詳細が決まり次第ご案内します。
          </p>
          <SlideFooter page={6} />
        </section>

        <section className="slide slide-green">
          <p className="deck-label">参加の流れ</p>
          <h2>学びを、仕事につなぐ道のり。</h2>
          <ol className="step-row">
            {steps.map((step) => (
              <li key={step.number}>
                <div className="step-pic">
                  <img src={step.image} alt="" width={960} height={720} />
                  <span>{step.number}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <SlideFooter page={7} />
        </section>

        <section className="slide slide-split">
          <div>
            <p className="deck-label">伴走サポート</p>
            <h2>「最近、どう？」がある安心。</h2>
            <p className="deck-lead">
              加藤さんを含む運営メンバーが、定期1on1で伴走します。学習のこと、仕事のこと、これからのこと。一人ひとりのペースを一緒につくります。
            </p>
            <img
              className="support-pic"
              src="/assets/feature-mentor.webp"
              alt=""
              width={800}
              height={800}
            />
          </div>
          <div className="note-card">
            <p className="note-title">森の1on1ノート</p>
            <ul>
              <li>今の「できた」を振り返る</li>
              <li>つまずいていることを整理する</li>
              <li>次の小さな目標を決める</li>
            </ul>
            <div className="note-pace">
              <b>2週間に1回</b>
              <span>
                を基本に、開始3ヶ月以降は月1回など、状況に合わせて調整します。
              </span>
            </div>
          </div>
          <SlideFooter page={8} />
        </section>

        <section className="slide">
          <p className="deck-label">よくあるご質問</p>
          <h2>はじめる前に、知っておいてほしいこと。</h2>
          <dl className="faq-grid">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <dt>
                  <span>Q</span>
                  {faq.q}
                </dt>
                <dd>{faq.a}</dd>
              </div>
            ))}
          </dl>
          <SlideFooter page={9} />
        </section>

        <section className="slide slide-split">
          <div>
            <p className="deck-label">運営会社</p>
            <h2>{operator.name}</h2>
            <p className="deck-lead">
              SHINJIDAIには、未経験から業務を学び、実際に収入につなげてきたメンバーがいます。何を学び、どのように実案件へ参加したのか。こうした経験をもとに、学習から実務への道のりを一緒に考えます。
            </p>
            <p className="deck-note">
              ※
              紹介しているのはSHINJIDAIでの経験であり、本スクールの卒業生実績ではありません。成果には個人差があります。
            </p>
          </div>
          <dl className="company-card">
            <div>
              <dt>運営</dt>
              <dd>{operator.name}</dd>
            </div>
            <div>
              <dt>Web</dt>
              <dd>
                {operator.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </dd>
            </div>
            <div>
              <dt>サービス</dt>
              <dd>森のAI開発部（実務型AI開発スクール）</dd>
            </div>
          </dl>
          <SlideFooter page={10} />
        </section>

        <section className="slide slide-closing">
          <img
            className="closing-forest"
            src="/assets/forest-friends.webp"
            alt=""
            width={1024}
            height={1024}
          />
          <div className="closing-copy">
            <p className="deck-label">次のステップ</p>
            <h2>
              学びを、
              <br />
              実務につなげよう。
            </h2>
            <p>
              まずは個別面談で、今の経験と目標を整理しましょう。
              <br />
              今の経験に合う学び方と、実案件へのステップを一緒に考えます。
            </p>
            <span className="closing-cta">個別面談のご案内</span>
          </div>
          <p className="cover-operator">運営：{operator.name}</p>
        </section>
      </div>
    </div>
  );
}
