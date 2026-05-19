import {
  CalendarDays,
  Check,
  CircleDollarSign,
  Factory,
  Handshake,
  MessageCircle,
  PackageX,
  Repeat,
  Rocket,
  Users,
} from "lucide-react";
import { Fragment } from "react";
import type { ComponentType, ReactNode, SVGProps } from "react";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

const navItems = ["副業", "サイドビジネス", "フリーランス", "新規事業"];

const profitItems = [
  { label: "仕入価格", value: "¥1,200", note: "1本あたり" },
  { label: "販売価格", value: "¥3,000", note: "想定販売価格" },
  { label: "1本粗利", value: "¥1,800", note: "粗利イメージ" },
];

const monthlyItems = [
  { volume: "200本", profit: "¥36万" },
  { volume: "500本", profit: "¥90万" },
  { volume: "1,000本", profit: "¥180万" },
  { volume: "2,000本", profit: "¥360万" },
];

const heroMetricItems = [
  { id: "rate", label: "利益率", value: "60%", note: "仕入¥1,200 → 販売¥3,000" },
  { id: "equipment", label: "専用設備・初期投資", value: "0円", note: "機材・工場を持たずに開始" },
  { id: "monthly", label: "月500本の利益", value: "¥90万", note: "1本利益¥1,800の場合" },
];

const reasonItems: Array<{ title: string; text: string; icon: IconType }> = [
  {
    title: "在庫ゼロでリスクが低い",
    text: "必要な分だけ製造・出荷できるため、在庫を抱えずに始めやすい設計です。",
    icon: PackageX,
  },
  {
    title: "制作・製造を丸投げできる",
    text: "デザイン作成から製造、出荷までの工程をまとめて任せられます。",
    icon: Factory,
  },
  {
    title: "高単価で販売しやすい",
    text: "記念日やイベント需要と相性がよく、単価を保った提案ができます。",
    icon: CircleDollarSign,
  },
  {
    title: "リピート・イベント需要がある",
    text: "店舗イベント、周年、誕生日など継続的な販売機会につながります。",
    icon: Repeat,
  },
];

const profitReasonLabels = [
  ["在庫を持たずに", "始められる"],
  ["制作・製造は", "任せられる"],
  ["高単価で", "提案しやすい"],
  ["継続需要に", "つながる"],
];

const solutionItems: Array<{ label: string; value: string; icon: IconType }> = [
  { label: "専用設備", value: "ゼロ円", icon: Factory },
  { label: "在庫リスク", value: "なし", icon: PackageX },
  { label: "制作ノウハウ", value: "不要", icon: Users },
  { label: "人件費も", value: "不要", icon: CircleDollarSign },
  { label: "丸投げ", value: "OK", icon: Handshake },
  { label: "即日", value: "スタート", icon: Rocket },
];

const marketItems = [
  {
    title: "既製品・輸入シャンパンの高騰",
    textLines: [
      "高級シャンパン、輸入商品の価格が上がる中で、",
      "ここ数年オリシャン需要が高まっている",
    ],
  },
  {
    title: "SNSで宣伝できる",
    textLines: ["コンカフェ・飲食店・バーでも", "一般的な販促になっている"],
  },
  {
    title: "利益を残せる",
    textLines: [
      "既製品の値上がりに対して",
      "利益を残せる",
      "既製品より提案でき、",
      "店舗側にも選ばれる",
    ],
  },
  {
    title: "リピートが生まれる",
    textLines: ["誕生日・開店祝い・周年記念など、", "毎年・毎回注文が続く"],
  },
];

const faqItems = [
  {
    q: "本当に利益率60%を狙えますか？",
    a: "仕入¥1,200・販売¥3,000なら、1本粗利は¥1,800。販売価格を上げるほど粗利も大きくなります。",
  },
  {
    q: "いきなり大量販売しないといけませんか？",
    a: "いいえ。月200本、500本、1,000本など、販売規模に合わせて利益を積み上げられます。",
  },
  {
    q: "専用設備は必要ですか？",
    a: "専用設備や工場を持たずに始められるモデルです。制作まわりはサポート可能です。",
  },
  {
    q: "どんな販売先に提案できますか？",
    a: "ナイト事業、飲食店・バー、イベント・推し活、企業や店舗ノベルティなどに提案できます。",
  },
];

const planItems = [
  {
    name: "プレミアム",
    price: "¥100,000",
    shortPrice: "10万",
    summary: "基本導入",
    features: [
      "シミュレーター入稿",
      "お客様対応はご自身で実施",
      "製造・出荷まで洋サポ対応",
    ],
  },
  {
    name: "オーナーズ",
    price: "¥300,000",
    shortPrice: "30万",
    summary: "自動化対応",
    featured: true,
    features: [
      "屋号入りシミュレーター提供",
      "デザイン自動作成",
      "お客様の自動決済に対応",
    ],
  },
  {
    name: "エグゼクティブ",
    price: "¥500,000",
    shortPrice: "50万",
    summary: "丸投げ拡大",
    features: [
      "注文受付・デザイン・顧客対応まで",
      "すべて洋サポが対応",
      "本格的に拡大したい方向け",
    ],
  },
];

function LogoMark() {
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_0_0_1px_rgba(215,25,32,0.18)]"
      aria-hidden="true"
    >
      <img
        src="/assets/youtaru-logo.png"
        alt=""
        className="h-full w-full object-cover"
      />
    </span>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5 sm:h-[76px] lg:px-8">
        <a href="#" className="flex items-center gap-3 leading-none" aria-label="洋サポ オリシャンOEM">
          <LogoMark />
          <span className="flex flex-col">
            <span className="text-[15px] font-bold text-brand-ink sm:text-lg">洋サポ</span>
            <span className="mt-1 text-[11px] font-bold text-neutral-500 sm:text-xs">
              オリシャン/OEM
            </span>
          </span>
        </a>
        <nav aria-label="主要カテゴリ" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#plans"
              className="text-sm font-bold text-neutral-700 transition hover:text-brand-red"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function CtaButton({
  children,
  href,
  icon: Icon,
  variant = "primary",
}: {
  children: ReactNode;
  href: string;
  icon: IconType;
  variant?: "primary" | "light" | "outline";
}) {
  const variants = {
    primary:
      "red-button text-white border-brand-red hover:border-brand-deep",
    light:
      "bg-white text-brand-red border-white hover:bg-[#fff7f7] hover:border-[#fff7f7]",
    outline:
      "bg-white text-brand-ink border-neutral-300 hover:border-brand-red hover:text-brand-red",
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border px-5 text-center text-sm font-bold leading-snug shadow-soft transition sm:min-h-14 sm:px-7 sm:text-base ${variants[variant]}`}
    >
      <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2.4} />
      <span className="phrase-nowrap">{children}</span>
    </a>
  );
}

function LineCtaButton() {
  return (
    <a
      href="https://lin.ee/7fjxWlK"
      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-[#06C755] bg-[#06C755] px-5 text-sm font-bold text-white shadow-soft transition hover:bg-[#05b74f] sm:min-h-14 sm:px-7 sm:text-base"
    >
      <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-1.5 text-[10px] font-extrabold leading-none text-[#06C755]">
        LINE
      </span>
      <span className="phrase-nowrap">利益モデルについて相談する</span>
    </a>
  );
}

function SectionTitle({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-3 text-sm font-extrabold text-brand-red sm:text-base">{eyebrow}</p>
      )}
      <h2 className="heading-serif balanced-text text-3xl font-bold text-brand-ink sm:text-4xl lg:text-[42px]">
        {title}
      </h2>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative mx-auto grid w-full max-w-[1200px] items-center gap-7 px-5 py-8 sm:py-12 lg:min-h-[650px] lg:grid-cols-[1.16fr_0.84fr] lg:px-8 lg:py-12">
        <div className="relative z-20 max-w-3xl">
          <p className="hero-ribbon red-strip mb-5 inline-flex whitespace-nowrap px-4 py-2 pr-9 text-sm font-extrabold text-white sm:text-base">
            <span className="phrase-nowrap">仕入¥1,200 → 販売¥3,000の利益モデル</span>
          </p>
          <h1 className="hero-mincho hero-text-shadow text-brand-ink">
            <span className="block text-[34px] font-black leading-[1.12] min-[390px]:text-[36px] sm:whitespace-nowrap sm:text-[52px] lg:text-[58px]">
              <span className="phrase-nowrap">オリシャン屋は、</span>
            </span>
            <span className="mt-1 flex items-baseline whitespace-nowrap text-[34px] font-black leading-[0.92] min-[390px]:text-[36px] sm:mt-1.5 sm:text-[52px] lg:text-[58px]">
              <span className="phrase-nowrap">利益率</span>
              <span className="number-strong mx-1 inline-block text-[74px] leading-[0.9] text-brand-red min-[390px]:text-[78px] sm:mx-2 sm:text-[112px] lg:text-[132px]">
                60%
              </span>
              <span className="hero-copy-outline phrase-nowrap text-[19px] leading-none min-[390px]:text-[21px] sm:text-[40px] lg:text-[44px]">を狙える</span>
            </span>
            <span className="mt-2 block text-[34px] font-black leading-[1.08] min-[390px]:text-[36px] sm:mt-2.5 sm:whitespace-nowrap sm:text-[52px] lg:text-[58px]">
              <span className="phrase-nowrap">高収益ビジネス。</span>
            </span>
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 sm:mt-5">
            <p className="hero-proof inline-flex items-center gap-2 border-l-[3px] border-brand-red pl-3 text-[13px] font-bold leading-none tracking-[0.02em] text-neutral-700 min-[390px]:text-sm sm:text-[15px]">
              <span className="phrase-nowrap">導入実績12社</span>
              <span className="h-3 w-px bg-neutral-300" aria-hidden="true" />
              <span className="phrase-nowrap">月間出荷32,000本</span>
            </p>
            <div className="hidden h-[92px] w-[92px] shrink-0 items-center justify-center rounded-full border-[3px] border-[#c89b39] bg-neutral-950 text-center text-white shadow-soft sm:flex lg:hidden">
              <div>
                <p className="text-[10px] font-extrabold leading-none text-[#e4c06d]">導入</p>
                <p className="number-strong mt-1 text-[26px] font-extrabold leading-none text-[#f2d783]">
                  12
                  <span className="text-sm text-white">社</span>
                </p>
                <p className="mt-1 text-[9px] font-extrabold leading-tight text-white/90">
                  月間出荷
                  <br />
                  32,000本
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-3">
            {heroMetricItems.map((item) => (
              <div
                key={item.id}
                className="clean-card relative min-h-[94px] border border-neutral-200 px-2.5 py-3 text-center before:absolute before:left-0 before:top-0 before:h-[3px] before:w-full before:bg-brand-red sm:min-h-[118px] sm:px-4 sm:py-4"
              >
                <p
                  className="hero-metric-label balanced-text text-[10px] leading-[1.35] text-brand-ink sm:text-xs"
                >
                  {item.id === "equipment" ? (
                    <>
                      <span className="phrase-nowrap">専用設備・</span>
                      <span className="phrase-nowrap">初期投資</span>
                    </>
                  ) : (
                    <span className="phrase-nowrap">{item.label}</span>
                  )}
                </p>
                <p
                  className={`hero-metric-value mt-1 flex h-[38px] items-center justify-center whitespace-nowrap leading-none sm:h-[48px] ${
                    item.id === "rate"
                      ? "text-[30px] text-brand-red sm:text-[40px]"
                      : item.id === "equipment"
                        ? "text-[24px] text-brand-red min-[390px]:text-[26px] sm:text-[36px]"
                      : item.id === "monthly"
                        ? "text-[24px] text-brand-red min-[390px]:text-[26px] sm:text-[36px]"
                        : "text-[23px] text-brand-red sm:text-[34px]"
                  }`}
                >
                  {item.value}
                </p>
                <p className="hero-metric-note mt-2 text-[9px] leading-[1.45] text-neutral-500 sm:text-[11px]">
                  {item.id === "rate" ? (
                    <>
                      <span className="block whitespace-nowrap">仕入¥1,200 →</span>
                      <span className="block whitespace-nowrap">販売¥3,000</span>
                    </>
                  ) : item.id === "equipment" ? (
                    <>
                      <span className="block whitespace-nowrap">機材・工場を</span>
                      <span className="block whitespace-nowrap">持たずに開始</span>
                    </>
                  ) : (
                    <>
                      <span className="block whitespace-nowrap">1本利益¥1,800</span>
                      <span className="block whitespace-nowrap">の場合</span>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute right-[-8px] top-[42px] z-10 h-[282px] w-[144px] overflow-visible sm:static sm:mx-auto sm:block sm:h-[430px] sm:w-full sm:max-w-[500px] sm:overflow-hidden lg:h-[500px] lg:max-w-none">
          <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(215,25,32,0.20)_0%,rgba(215,25,32,0.11)_44%,rgba(215,25,32,0)_72%)] sm:h-[390px] sm:w-[390px] lg:h-[450px] lg:w-[450px]" />
          <div className="absolute right-1 top-3 z-20 hidden h-[112px] w-[112px] items-center justify-center rounded-full border-[3px] border-[#c89b39] bg-neutral-950 text-center text-white shadow-soft lg:flex">
            <div>
              <p className="text-[11px] font-extrabold leading-none text-[#e4c06d]">導入12社</p>
              <p className="mt-2 text-[12px] font-extrabold leading-none text-white">月間出荷</p>
              <p className="number-strong mt-1 text-[29px] font-extrabold leading-none text-[#f2d783]">
                32,000
              </p>
              <p className="mt-1 text-[11px] font-extrabold leading-none text-white">本</p>
            </div>
          </div>
          <div className="absolute bottom-7 left-1/2 hidden h-24 w-80 -translate-x-1/2 rounded-[50%] bg-neutral-100 blur-sm sm:block" />
          <img
            src="/assets/hero-bottles-user.png"
            alt="高級感のあるオリジナルシャンパンボトル"
            className="relative z-10 h-full w-full scale-100 object-contain object-bottom drop-shadow-[0_20px_26px_rgba(0,0,0,0.10)] sm:scale-[1.12] lg:scale-[1.14]"
          />
        </div>
      </div>
    </section>
  );
}

function ProfitSimulation() {
  return (
    <section id="profit" className="bg-white py-8 sm:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-[1200px] px-5 lg:px-8">
        <div className="red-panel rounded-lg px-3 py-5 text-white sm:px-7 sm:py-8 lg:px-10">
          <p className="mb-2 text-center text-[10px] font-extrabold tracking-[0.35em] text-white/80 sm:text-xs">
            PROFIT
          </p>
          <h2 className="heading-serif balanced-text text-center text-[17px] font-bold text-white sm:text-[23px] lg:text-[26px]">
            <span className="phrase-nowrap">利益率60%の根拠</span>
          </h2>

          <div className="clean-card mt-4 rounded-lg px-2.5 py-4 text-brand-ink sm:px-6 sm:py-6 lg:px-7">
            <div className="grid grid-cols-[1fr_16px_1fr_16px_1fr] items-center gap-1 sm:grid-cols-[1fr_28px_1fr_28px_1fr] sm:gap-3">
              {profitItems.map((item, index) => (
                <Fragment key={item.label}>
                  <div className="text-center">
                    <p
                      className={`mx-auto inline-flex rounded px-2 py-1 text-[10px] font-bold sm:px-3 sm:text-xs ${
                        item.label === "1本粗利"
                          ? "bg-brand-soft text-brand-red"
                          : "bg-neutral-50 text-brand-ink"
                      }`}
                    >
                      {item.label}
                    </p>
                    <p
                      className={`simulation-number mt-2 whitespace-nowrap leading-none ${
                        item.label === "1本粗利"
                          ? "text-[24px] text-brand-red min-[390px]:text-[26px] sm:text-[40px] lg:text-[46px]"
                          : "text-[22px] text-brand-ink min-[390px]:text-[24px] sm:text-[36px] lg:text-[42px]"
                      }`}
                    >
                      {item.value}
                    </p>
                    <p className="mt-2 hidden text-xs font-bold text-neutral-500 sm:block">{item.note}</p>
                  </div>
                  {index < profitItems.length - 1 && (
                    <span className="text-center text-base font-extrabold text-brand-red sm:text-2xl">
                      {index === 0 ? "→" : "="}
                    </span>
                  )}
                </Fragment>
              ))}
            </div>
          </div>

          <div className="mt-5 text-center sm:mt-7">
            <p className="heading-serif balanced-text text-[15px] font-bold sm:text-[17px]">
              <span className="phrase-nowrap">販売本数ごとの</span>
              <span className="phrase-nowrap">粗利シミュレーション</span>
            </p>
            <p className="balanced-text mt-2 text-[10px] font-bold leading-5 text-white/80 min-[390px]:text-[11px] sm:text-sm">
              <span className="phrase-nowrap">販売本数が増えるほど、</span>
              <span className="phrase-nowrap">利益はそのまま積み上がります。</span>
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-brand-ink sm:mt-4 sm:gap-3 lg:grid-cols-4">
              {monthlyItems.map((item) => (
                <div
                  key={item.volume}
                  className="clean-card rounded-lg border border-white/70 bg-white px-3 py-4 text-center sm:px-4 sm:py-5"
                >
                  <p className="text-[10px] font-bold text-neutral-500 sm:text-[11px]">月間販売本数</p>
                  <p className="simulation-number mt-2 whitespace-nowrap text-[24px] leading-none text-brand-ink sm:text-[30px] lg:text-[31px]">
                    {item.volume}
                  </p>
                  <p className="mt-3 text-[10px] font-bold leading-none text-brand-red sm:text-[11px]">
                    月間粗利
                  </p>
                  <p className="simulation-number mt-1.5 whitespace-nowrap text-[29px] leading-none text-brand-red sm:text-[35px] lg:text-[34px]">
                    {item.profit}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-2 text-[10px] font-bold leading-5 text-white/80 min-[390px]:text-[11px] sm:mt-3 sm:text-xs">
              <span className="phrase-nowrap">※販売価格¥3,000・仕入¥1,200・</span>
              <span className="phrase-nowrap">1本粗利¥1,800の場合の試算です。</span>
            </p>
          </div>

          <div className="mt-6 sm:mt-8">
            <h3 className="heading-serif balanced-text text-center text-[17px] font-bold sm:text-[22px]">
              <span className="phrase-nowrap">粗利が残る理由</span>
            </h3>
            <div className="mx-auto mt-3 max-w-3xl text-center text-[11px] font-bold leading-6 text-white/85 min-[390px]:text-xs sm:text-sm sm:leading-7">
              <p>
                <span className="phrase-nowrap">洋サポが制作・製造・出荷を担うから、</span>
                <span className="whitespace-nowrap">本来かかる設備費や人件費を抑えやすい。</span>
              </p>
              <p>
                <span className="phrase-nowrap">販売側は、</span>
                <span className="phrase-nowrap">提案と受注に集中できます。</span>
              </p>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-1.5 sm:mt-5 sm:gap-2">
              {reasonItems.map(({ title, icon: Icon }, index) => (
                <article
                  key={title}
                  aria-label={title}
                  className="min-w-0 rounded-lg border border-white/55 bg-white/[0.92] px-1.5 py-4 text-center shadow-[0_8px_20px_rgba(120,0,0,0.10)] sm:px-4 sm:py-5"
                >
                  <Icon aria-hidden="true" className="mx-auto h-7 w-7 text-brand-red sm:h-8 sm:w-8" strokeWidth={2.3} />
                  <h4 className="mx-auto mt-2 flex min-h-[34px] w-full flex-col items-center justify-center text-center text-[9.5px] font-bold leading-[1.42] tracking-[-0.02em] text-brand-ink min-[390px]:text-[10px] sm:mt-3 sm:min-h-[45px] sm:text-sm sm:leading-[1.6] sm:tracking-normal">
                    {profitReasonLabels[index].map((line) => (
                      <span key={line} className="block w-full whitespace-nowrap text-center">
                        {line}
                      </span>
                    ))}
                  </h4>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MonthlySimulation() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5 lg:px-8">
        <SectionTitle title="平均月間粗利シミュレーション" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {monthlyItems.map((item) => (
            <div
              key={item.volume}
              className="rounded-lg border border-neutral-200 bg-white px-6 py-8 text-center shadow-soft"
            >
              <p className="number-strong text-3xl font-extrabold text-brand-ink sm:text-4xl">
                {item.volume}
              </p>
              <div className="mx-auto my-5 h-px w-16 bg-brand-red" />
              <p className="number-strong text-[48px] font-extrabold leading-none text-brand-red sm:text-[56px]">
                {item.profit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonCards() {
  return (
    <section className="bg-neutral-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5 lg:px-8">
        <SectionTitle title="なぜ、これだけ利益が出るのか？" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasonItems.map(({ title, text, icon: Icon }) => (
            <article
              key={title}
              className="rounded-lg border border-neutral-200 bg-white p-6 shadow-soft"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-soft text-brand-red">
                <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={2.4} />
              </div>
              <h3 className="text-lg font-bold leading-[1.55] text-brand-ink">{title}</h3>
              <p className="mt-3 text-sm font-medium leading-7 text-neutral-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SalesTargets() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-5 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-center text-[11px] font-extrabold tracking-[0.4em] text-brand-red sm:text-sm">
            MARKET
          </p>
          <h2 className="heading-serif balanced-text text-center text-[25px] font-bold leading-[1.45] text-brand-ink sm:text-3xl">
            <span className="phrase-nowrap">なぜ今オリシャンが</span>
            <span className="phrase-nowrap">売れるのか</span>
          </h2>
        </div>
        <div className="mx-auto mt-7 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {marketItems.map((item) => (
            <article
              key={item.title}
              className="clean-card relative rounded-lg border border-neutral-200 px-5 py-5 text-left before:absolute before:left-0 before:top-0 before:h-[3px] before:w-full before:bg-brand-red sm:px-6 sm:py-6"
            >
              <h3 className="balanced-text text-base font-bold leading-7 text-brand-ink sm:text-lg">
                <span className="phrase-nowrap">{item.title}</span>
              </h3>
              <p className="mt-2 text-sm font-bold leading-7 text-neutral-600">
                {item.textLines.map((line) => (
                  <span key={line} className="phrase-nowrap">
                    {line}
                  </span>
                ))}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section id="solution" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-5 lg:px-8">
        <p className="mb-3 text-center text-[11px] font-extrabold tracking-[0.4em] text-brand-red sm:text-sm">
          SUPPORT
        </p>
        <h2 className="heading-serif balanced-text text-center text-[25px] font-bold leading-[1.45] text-brand-ink sm:text-3xl">
          <span className="block"><span className="phrase-nowrap">販売に必要なのは、</span></span>
          <span className="block"><span className="phrase-nowrap">工場や専用設備ではありません。</span></span>
        </h2>
        <p className="balanced-text mx-auto mt-4 max-w-3xl text-center text-sm font-bold leading-7 text-neutral-600 sm:text-base sm:leading-8">
          <span className="phrase-nowrap">制作・印刷・出荷まわりは</span>
          <span className="phrase-nowrap">サポート可能。</span>
          <span className="phrase-nowrap">販売先への提案に集中できるため、</span>
          <span className="phrase-nowrap">プリンターや制作環境を持たずに</span>
          <span className="phrase-nowrap">始められます。</span>
        </p>
        <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">
          {solutionItems.map((item) => {
            const Icon = item.icon;
            return (
            <div
              key={`${item.label}-${item.value}`}
              className="clean-card flex min-h-[96px] flex-col items-center justify-center rounded-lg border border-red-200 px-1.5 py-3 text-center sm:min-h-[122px] sm:px-3 sm:py-5"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-red-100 bg-brand-soft text-brand-red sm:h-9 sm:w-9">
                <Icon aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.4} />
              </span>
              <p className="mt-2 whitespace-nowrap text-[9px] font-bold leading-none text-brand-red sm:text-xs">
                {item.label}
              </p>
              <p className="number-strong mt-1.5 whitespace-nowrap text-[14px] font-extrabold leading-none text-brand-ink min-[390px]:text-[15px] sm:mt-2 sm:text-[24px]">
                {item.value}
              </p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Plans() {
  return (
    <section id="plans" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-5 lg:px-8">
        <p className="mb-3 text-center text-[11px] font-extrabold tracking-[0.4em] text-brand-red sm:text-sm">
          PLAN
        </p>
        <h2 className="heading-serif balanced-text text-center text-[25px] font-bold text-brand-ink sm:text-3xl">
          <span className="phrase-nowrap">選べる3つのプラン</span>
        </h2>
        <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-5">
          {planItems.map((plan) => (
            <article
              key={plan.name}
              className={`clean-card relative rounded-lg ${
                plan.featured
                  ? "border-2 border-brand-red ring-2 ring-brand-soft"
                  : "border border-neutral-200"
              }`}
            >
              {plan.featured && (
                <p className="red-strip absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full px-2 py-0.5 text-[9px] font-extrabold leading-none text-white sm:px-3 sm:py-1 sm:text-xs">
                  おすすめ
                </p>
              )}
              <h3
                className={`rounded-t-md px-1 py-2.5 text-center text-[11px] font-extrabold leading-none text-white min-[390px]:text-[12px] sm:px-5 sm:py-3 sm:text-lg ${
                  plan.featured ? "red-strip-deep" : "red-strip"
                }`}
              >
                <span className="phrase-nowrap">{plan.name}</span>
              </h3>
              <div className="px-2 py-4 sm:px-5 sm:py-6">
                <p className="plan-price text-center leading-none text-brand-ink">
                  <span className="text-[22px] min-[390px]:text-[24px] sm:text-[29px]">
                    {plan.shortPrice}
                  </span>
                  <span className="text-[13px] min-[390px]:text-sm sm:text-base">円</span>
                  <span className="ml-1 text-[10px] text-neutral-500 min-[390px]:text-[11px] sm:text-[13px]">
                    /月
                  </span>
                </p>
                <p className="mt-2 text-center text-[10px] font-extrabold leading-snug text-neutral-500 sm:hidden">
                  <span className="phrase-nowrap">{plan.summary}</span>
                </p>
                <ul className="mt-5 hidden space-y-3.5 sm:block">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm font-bold leading-[1.75] text-neutral-700">
                      <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-brand-red" strokeWidth={3} />
                      <span className="balanced-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[960px] px-5 lg:px-8">
        <p className="mb-3 text-center text-[11px] font-extrabold tracking-[0.4em] text-brand-red sm:text-sm">
          FAQ
        </p>
        <h2 className="heading-serif balanced-text text-center text-[25px] font-bold text-brand-ink sm:text-3xl">
          <span className="phrase-nowrap">よくある質問</span>
        </h2>
        <div className="mt-7 space-y-3">
          {faqItems.map((item) => (
            <article
              key={item.q}
              className="clean-card rounded-lg border border-neutral-200 px-4 py-4 sm:px-6 sm:py-5"
            >
              <h3 className="text-sm font-bold leading-7 text-brand-ink sm:text-base">
                <span className="mr-2 text-brand-red">Q.</span>
                {item.q}
              </h3>
              <p className="mt-2 text-xs font-bold leading-6 text-neutral-600 sm:text-sm sm:leading-7">
                <span className="mr-2 text-brand-red">A.</span>
                {item.a}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="red-section py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5 lg:px-8">
        <div className="text-center">
          <p className="mb-4 text-center text-[11px] font-extrabold tracking-[0.4em] text-white/80 sm:text-sm">
            CONTACT
          </p>
          <h2 className="heading-serif balanced-text text-[25px] font-bold leading-[1.55] sm:text-[32px] lg:text-[36px]">
            <span className="block"><span className="phrase-nowrap">利益率60%を狙える</span></span>
            <span className="block"><span className="phrase-nowrap">オリシャンOEMを、</span></span>
            <span className="block"><span className="phrase-nowrap">あなたの商材に。</span></span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[12.5px] font-bold leading-7 text-white/90 min-[390px]:text-sm sm:text-base sm:leading-8">
            <span className="block">
              <span className="phrase-nowrap">まずは販売イメージと</span>
              <span className="phrase-nowrap">利益シミュレーションを</span>
              <span className="phrase-nowrap">ご相談ください。</span>
            </span>
          </p>
          <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
            <LineCtaButton />
            <CtaButton href="https://cal.com/ayaka-miura-m7jftn/洋サホ-lpオンラインこ相談b" icon={CalendarDays} variant="light">
              オリシャンOEMを相談する
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingContactButton() {
  return (
    <a
      href="#contact"
      className="red-button fixed bottom-4 right-4 z-[60] inline-flex items-center gap-1.5 rounded-full border border-white/70 px-4 py-2.5 text-[12px] font-bold leading-none text-white transition sm:bottom-6 sm:right-6 sm:px-5 sm:py-3 sm:text-sm"
      aria-label="問い合わせはこちら"
    >
      <MessageCircle aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.4} />
      <span className="phrase-nowrap">問い合わせはこちら</span>
    </a>
  );
}

export default function App() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Header />
      <Hero />
      <ProfitSimulation />
      <SalesTargets />
      <Solution />
      <Plans />
      <FaqSection />
      <FinalCta />
      <footer className="border-t border-neutral-200 bg-white py-8">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-5 text-sm font-bold text-neutral-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <LogoMark />
            <div>
              <a
                href="https://mononopu.com/"
                className="font-bold text-brand-ink transition hover:text-brand-red"
                target="_blank"
                rel="noreferrer"
              >
                株式会社洋樽本家酒造
              </a>
              <p className="mt-1 text-xs">オリシャンサポート課</p>
            </div>
          </div>
          <p>専用設備なしで始める、高収益オリシャンビジネス。</p>
        </div>
      </footer>
      <FloatingContactButton />
    </main>
  );
}
