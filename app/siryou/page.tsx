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
    text: "AIや開発を勉強しているのに、仕事につながらない。",
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
    title: "学んだ先で、当社の実案件に参加する。",
    text: "当社がお客さまから受けた案件に、スキルに応じてチームで参加します。業務委託として報酬を受け取りながら、開発や納品に携わり、実務経験を積んでいきます。",
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
    tag: "土台から",
    title: "現場に入る前に、土台をつくる。",
    text: "実案件に入る前に、基本的な技術構成やセキュリティなど、現場で欠かせない前提知識を学びます。そのうえで、つくって確かめる実践へ進みます。",
    image: "/assets/feature-practice.webp",
  },
];

const skills = [
  "お客さまとの打ち合わせ",
  "メンバーへの指示",
  "人に教え、育てる",
  "開発・納品をやりきる",
];

const courses = [
  {
    stage: "ステップ１",
    name: "どんぐり会員",
    price: "無料",
    lead: "AI活用に、まず触れてみる",
    catch: "まずは、種をまこう。",
    items: [
      "ChatGPTなど、AIツールの基本的な使い方",
      "日々の作業に、AIを取り入れてみる",
      "続けられるか、自分のペースを知る",
    ],
    image: "/assets/course-donguri.webp",
  },
  {
    stage: "ステップ２",
    name: "わかば会員",
    price: "有料・案件参加",
    lead: "前提知識を学び、当社の案件へ",
    catch: "実務で、できることを広げよう。",
    items: [
      "基本的な技術構成・セキュリティを学ぶ",
      "当社の実案件にチームで参加（報酬あり）",
      "1on1で振り返り、担当範囲を広げる",
    ],
    image: "/assets/course-wakaba.webp",
  },
  {
    stage: "ゴール",
    name: "けやき",
    price: "卒業ライン",
    lead: "自分で仕事を回せる人へ",
    catch: "仲間と、大きく育とう。",
    items: [
      "お客さまとの打ち合わせを進める",
      "メンバーに指示を出し、開発を進める",
      "人に教え、次のメンバーを育てる",
    ],
    image: "/assets/course-keyaki.webp",
  },
];

const agreements = [
  {
    title: "少人数で受け入れます",
    text: "一度に受け入れる人数を限っています。面談でお話を伺ったうえで、ご参加いただけるかを判断します。",
  },
  {
    title: "まずは無料のどんぐり会員から",
    text: "自分で手を動かし、行動を続けられた方に、わかば会員（有料・案件参加）をご案内します。",
  },
  {
    title: "案件は業務委託で参加します",
    text: "報酬は担当する範囲によって変わります。本業の都合などで続けられなくなった場合、業務委託は継続できません。",
  },
  {
    title: "案件参加・収入は保証しません",
    text: "案件状況やスキル、学習状況に応じて参加機会をつくります。入会前に、ここまでをご確認いただきます。",
  },
];

const steps = [
  {
    number: "01",
    title: "面談で、現在地を知る",
    text: "経験と目標を伺い、ご参加いただけるかを判断します。",
    image: "/assets/journey-start.webp",
  },
  {
    number: "02",
    title: "どんぐり会員",
    text: "無料でAI活用に触れ、自分で手を動かし続けられるかを確かめます。",
    image: "/assets/journey-learn.webp",
  },
  {
    number: "03",
    title: "わかば会員",
    text: "前提知識を学んだうえで、業務委託として当社の実案件にチームで参加します。",
    image: "/assets/journey-project.webp",
  },
  {
    number: "04",
    title: "けやきを目指す",
    text: "打ち合わせを進め、指示を出し、人に教えられる状態を目指します。",
    image: "/assets/journey-next.webp",
  },
];

const faqs = [
  {
    q: "プログラミング未経験でも大丈夫ですか？",
    a: "はい。無料のどんぐり会員では、ChatGPTなどを使ったかんたんなAI活用から始めます。",
  },
  {
    q: "どこから始めればいいですか？",
    a: "まずはどんぐり会員から。行動を続けられた方に、わかば会員をご案内します。",
  },
  {
    q: "誰でも参加できますか？",
    a: "少人数で受け入れているため、面談でお話を伺ったうえで判断します。ご希望に添えない場合もあります。",
  },
  {
    q: "料金を教えてください。",
    a: "どんぐり会員は無料です。わかば会員の受講料・案件報酬・支払い方法は現在調整中です。",
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
            株式会社SHINJIDAIが運営する、
            <br />
            学習から当社の実案件までをつなぐスクールです。
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
            前提知識を身につけたら、当社の案件にチームで参加。実務を経験しながら、仕事に使える力を育てます。
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
            <p className="deck-label">ゴール（卒業ライン）</p>
            <h2>
              当社の中で、自分で仕事を回せる
              <br />
              <span className="deck-grad">「グロースAIエンジニア」</span>
            </h2>
            <p className="deck-lead">
              卒業ラインの目安は、当社エンジニアの今の働き方です。お客さまとの打ち合わせを進め、メンバーに指示を出し、人に教えられる。つくるだけで終わらず、仕事を前に進められる人を育てます。
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
          <p className="deck-label">会員のしくみ</p>
          <h2>どんぐりから、大きなけやきへ。</h2>
          <div className="course-row">
            {courses.map((course) => (
              <article key={course.name}>
                <span className="deck-course-stage">{course.stage}</span>
                <img src={course.image} alt="" width={800} height={800} />
                <p className="deck-course-catch">{course.catch}</p>
                <h3>{course.name}</h3>
                <p className="deck-course-price">{course.price}</p>
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
            ※ わかば会員の受講料・案件報酬・支払い方法は現在調整中です。面談時にご案内します。
          </p>
          <SlideFooter page={6} />
        </section>

        <section className="slide">
          <p className="deck-label">ご参加の前に</p>
          <h2>はじめる前に、そろえておきたいこと。</h2>
          <ul className="agree-grid">
            {agreements.map((item, index) => (
              <li key={item.title}>
                <span className="pain-num">{index + 1}</span>
                <b>{item.title}</b>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
          <SlideFooter page={7} />
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
          <SlideFooter page={8} />
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
          <SlideFooter page={9} />
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
          <SlideFooter page={10} />
        </section>

        <section className="slide slide-split">
          <div>
            <p className="deck-label">運営会社</p>
            <h2>{operator.name}</h2>
            <p className="deck-lead">
              当社には、未経験から業務を学び、実際に収入につなげてきたメンバーがいます。何を学び、どのように実案件へ参加したのか。こうした経験をもとに、学習から実務への道のりを一緒に考えます。
            </p>
            <p className="deck-note">
              ※
              紹介しているのは当社での経験であり、本スクールの卒業生実績ではありません。成果には個人差があります。
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
          <SlideFooter page={11} />
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
