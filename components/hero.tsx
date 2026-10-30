export function Hero() {
  return (
    <section className="hero">
      <div className="sky" aria-hidden="true">
        <svg className="cloud cloud-one" viewBox="0 0 360 150">
          <path d="M22 99C6 76 26 53 52 58 39 20 96 5 119 37 131-3 200-3 215 39 249 11 289 40 284 68 325 55 354 80 342 111 326 137 275 130 251 133L62 132C38 132 16 123 22 99Z" />
        </svg>
        <svg className="cloud cloud-two" viewBox="0 0 360 150">
          <path d="M18 105C4 80 33 54 65 67 60 28 115 10 136 44 156 8 211 27 212 55 252 21 295 48 287 80 327 66 355 92 339 115 317 138 270 131 241 133L59 134C36 134 20 125 18 105Z" />
        </svg>
        <svg className="drifting-leaf leaf-one">
          <use href="#leaf" />
        </svg>
        <svg className="drifting-leaf leaf-two">
          <use href="#leaf" />
        </svg>
        <svg className="drifting-leaf leaf-three">
          <use href="#leaf" />
        </svg>
      </div>
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">フリーランスを目指す方の、実務型AI開発スクール</p>
          <h1>
            <span>学んで、実案件へ。</span>
            <br />
            <span>経験を、自分の力に。</span>
          </h1>
          <p className="hero-description">
            案件獲得に悩んでいるあなたへ。
            <br />
            基礎を学び、チームで実案件に挑戦する。
            <br />
            現場で使えるスキルと経験を、ここから。
          </p>
          <a href="#consultation" className="button">
            実案件への一歩を相談する <span>↗</span>
          </a>
        </div>
      </div>
      <img
        className="forest-panorama"
        src="/assets/forest-landscape.webp"
        alt="緑の丘と木々に囲まれた部室で、キツネやウサギたちが一緒に開発を学ぶ、手描きの森の風景"
        width={1536}
        height={1024}
        fetchPriority="high"
      />
      <svg className="hero-wave" viewBox="0 0 1440 180" preserveAspectRatio="none" aria-hidden="true">
        <path className="hero-wave-accent" d="M760 180C900 120 1040 70 1190 62C1300 56 1390 70 1440 84V180Z" />
        <path d="M0 26C150 4 300 30 420 92C540 154 720 168 900 150C1080 132 1230 96 1440 118V180H0Z" />
      </svg>
    </section>
  );
}
