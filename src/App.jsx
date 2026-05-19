import {
  ArrowRight,
  CalendarDays,
  ChartNoAxesCombined,
  Check,
  Crown,
  Gift,
  Laptop,
  Link2,
  Martini,
  MessageCircle,
  PackageOpen,
  ShieldCheck,
  Truck,
  UsersRound,
} from 'lucide-react';
import { contactLinks } from './lib/tracking.js';

const assets = {
  hero: '/assets/hero-background-soft-green.png',
  bottles: '/assets/champagne-bottles-crop.png',
  heroBottles: '/assets/hero-bottles-background.png',
  audienceBar: '/assets/audience-bar.png',
  audienceEvent: '/assets/audience-event.png',
  audienceBrand: '/assets/audience-brand.png',
  audienceSide: '/assets/audience-side.png',
  audienceC01: '/assets/audience-c-01.png',
  audienceC02: '/assets/audience-c-02.png',
  audienceC03: '/assets/audience-c-03.png',
  audienceC04: '/assets/audience-c-04.png',
  glow: '/assets/transparent-green-glow-overlay.png',
  leaf: '/assets/leaf-decoration-transparent.png',
  section: '/assets/section-card-background-pale-green.png',
  cta: '/assets/cta-background-deep-green.png',
  badge: '/assets/circle-badge-frame-transparent.png',
  planHeader: '/assets/plan-card-green-header.png',
};

const categories = ['オリシャン', 'OEM', '副業', 'サイドビジネス', 'フリーランス', '新規事業'];

const heroBadges = ['在庫負担なし', '専用設備不要', '受注ベース'];

const badges = [
  { label: '在庫負担', value: 'なし', Icon: PackageOpen },
  { label: '専用設備', value: '不要', Icon: ShieldCheck },
  { label: '制作発送', value: '代行', Icon: UsersRound },
  { label: '対応本数', value: '1本〜', Icon: Check },
];

const steps = [
  {
    number: '01',
    title: 'オンラインで契約',
    text: 'フォームからお申し込み、オンラインで開始',
    Icon: Laptop,
  },
  {
    number: '02',
    title: '仕組みを受け取る',
    text: '専用ページや注文導線を整え、運用準備へ',
    Icon: Link2,
  },
  {
    number: '03',
    title: '制作・発送を任せる',
    text: '注文後の制作・印刷・発送まで弊社が対応',
    Icon: Truck,
  },
];

const benefits = [
  {
    label: '在庫体制',
    title: '在庫を抱えずに始められる',
    text: '必要なボトルを自社で大量に抱える必要はありません。',
    Icon: PackageOpen,
  },
  {
    label: '専用設備',
    title: '設備投資なしで提案できる',
    text: '印刷機・制作環境を用意せずにスタートできます。',
    Icon: ShieldCheck,
  },
  {
    label: '制作運用',
    title: '制作から発送まで任せられる',
    text: '注文後の印刷・加工・発送まで洋サポが対応します。',
    Icon: Truck,
  },
];

const audiences = [
  {
    number: '01',
    title: ['飲食店・バーの', '新規展開に'],
    description: 'オリジナルシャンパンでお店の価値を高める',
    image: assets.audienceC01,
    Icon: Martini,
  },
  {
    number: '02',
    title: ['ナイト事業の', 'イベントに'],
    description: 'バースデーや周年イベントを華やかに演出',
    image: assets.audienceC02,
    Icon: Crown,
  },
  {
    number: '03',
    title: ['ブランド・企業の', 'ノベルティに'],
    description: 'オリジナルデザインでブランド価値を向上',
    image: assets.audienceC03,
    Icon: Gift,
  },
  {
    number: '04',
    title: ['サイドビジネス・', '副業に'],
    description: '設備ゼロ・在庫ゼロで手軽に始められる',
    image: assets.audienceC04,
    Icon: ChartNoAxesCombined,
  },
];

const ctaButtons = [
  { label: '公式LINEで無料相談', Icon: MessageCircle, href: contactLinks.line, eventLabel: 'line_consultation', primary: true },
  { label: 'オンライン相談を予約', Icon: CalendarDays, href: contactLinks.consultation, eventLabel: 'consultation' },
  { label: '仕組みを見る', Icon: ArrowRight, href: '#steps', eventLabel: 'view_flow' },
];

const floatingCtaButtons = ctaButtons.slice(0, 2);

const faqs = [
  {
    question: '在庫を持たずに始められますか？',
    answer: 'はい。洋サポの在庫体制を使うため、事前に大量の在庫を抱える必要はありません。',
  },
  {
    question: 'デザインや印刷の知識が全くありません。',
    answer: '大丈夫です。制作・印刷・発送は洋サポ側で行うため、特別な準備物は不要です。',
  },
  {
    question: 'お酒の取り扱いも任せられますか？',
    answer: 'はい。酒販に対応した体制のもと、制作からお届けまで洋サポ側で対応します。',
  },
  {
    question: '資材価格や供給状況の影響が心配です。',
    answer: 'サプライヤーと年間契約を結び、常時半年分ほどの在庫を確保。年間50万本出荷を想定した体制です。',
  },
  {
    question: '導入後は受注だけで大丈夫ですか？',
    answer: 'はい。受注後のボトル準備・印刷・発送は洋サポ側で行うため、専用設備や制作作業は不要です。',
  },
];

function SectionHeading({ children }) {
  return (
    <div className="mb-6 flex items-center justify-center gap-8 text-center">
      <span className="hidden h-px w-12 bg-[#9DBD99] sm:block" />
      <h2 className="section-title text-[22px] text-[#183826] md:text-[25px]">{children}</h2>
      <span className="hidden h-px w-12 bg-[#9DBD99] sm:block" />
    </div>
  );
}

function Bottle({ tone, className = '' }) {
  return (
    <div className={`bottle bottle-${tone} ${className}`} aria-hidden="true">
      <div className="bottle-cap" />
      <div className="bottle-neck">
        <span>YOSAPO</span>
      </div>
      <div className="bottle-crest" />
      <div className="bottle-body">
        <div className="bottle-label">
          <span className="label-leaf" />
          <strong>Original</strong>
          <em>Champagne</em>
          <small>Brut</small>
        </div>
      </div>
    </div>
  );
}

function BadgeCard({ label, value, suffix, Icon }) {
  return (
    <div className="group relative min-w-0 overflow-hidden rounded-[12px] border border-[#C9DCC5]/85 bg-white/82 px-2 py-2.5 text-center shadow-[0_10px_24px_rgba(24,56,38,0.055)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(24,56,38,0.08)] sm:rounded-[16px] sm:px-4 sm:py-4 md:px-5 md:py-5">
      <div className="mx-auto flex h-6 w-6 items-center justify-center rounded-[7px] border border-[#C9DCC5] bg-[#EEF6EA] text-[#1F5D34] sm:h-9 sm:w-9 sm:rounded-[10px]">
        <Icon className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
      </div>
      <p className="button-text mt-1.5 text-[8.5px] leading-none text-[#183826]/82 sm:mt-2.5 sm:text-[12px] md:text-[13px]">{label}</p>
      <p className="button-text mt-1 text-[17px] leading-none text-[#1F5D34] sm:mt-1.5 sm:text-[28px] md:text-[34px]">{value}</p>
      {suffix && <p className="button-text mt-0.5 text-[8px] leading-none text-[#1F5D34] sm:mt-1 sm:text-[12px] md:text-[14px]">{suffix}</p>}
    </div>
  );
}

function StepCard({ step, index }) {
  const { number, title, text, Icon } = step;
  return (
    <div className="relative rounded-[8px] border border-[#C9DCC5] bg-white/95 px-2 pb-3 pt-5 transition duration-300 hover:-translate-y-1 sm:rounded-[9px] sm:px-4 sm:pb-5 sm:pt-7 md:px-5 md:pb-6">
      <span className="number-text absolute -left-1.5 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#1F5D34] text-[11px] text-white shadow-[0_8px_20px_rgba(31,93,52,0.16)] sm:-left-3 sm:-top-3 sm:h-10 sm:w-10 sm:text-[15px] md:h-11 md:w-11 md:text-[17px]">
        {number}
      </span>
      <Icon className="mx-auto h-8 w-8 text-[#1F5D34] sm:h-11 sm:w-11 md:h-[52px] md:w-[52px]" strokeWidth={1.6} />
      <h3 className="button-text mt-3 text-center text-[10px] leading-[1.45] text-[#183826] sm:mt-5 sm:text-[16px] md:text-[19px]">{title}</h3>
      <p className="mx-auto mt-2 max-w-[92px] text-center text-[8.5px] font-normal leading-[1.65] tracking-[0.01em] text-[#183826]/85 sm:mt-3 sm:max-w-[170px] sm:text-[12px] md:max-w-[190px] md:text-[13px]">
        {text}
      </p>
      {index < steps.length - 1 && (
        <ArrowRight
          className="absolute right-[-32px] top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 text-[#1F5D34] md:block"
          strokeWidth={1.7}
        />
      )}
    </div>
  );
}

function BenefitCard({ label, title, text, Icon }) {
  return (
    <article className="rounded-[9px] border border-[#C9DCC5]/75 bg-white px-2.5 py-3 shadow-[0_10px_24px_rgba(24,56,38,0.04)] sm:rounded-[12px] sm:px-5 sm:py-5">
      <div className="flex items-center justify-center gap-1.5 sm:justify-start sm:gap-3">
        <span className="button-text rounded-full bg-[#EEF6EA] px-2 py-1 text-[10px] leading-none text-[#1F5D34] sm:px-3 sm:text-[12px]">{label}</span>
        <Icon className="h-4 w-4 text-[#B8A15A] sm:h-5 sm:w-5" strokeWidth={1.8} />
      </div>
      <h3 className="button-text mt-2 text-center text-[11px] leading-[1.45] text-[#183826] sm:mt-4 sm:text-left sm:text-[18px] sm:leading-[1.55]">{title}</h3>
      <p className="mt-1.5 text-center text-[8.5px] font-normal leading-[1.55] tracking-[0.01em] text-[#183826]/72 sm:mt-2 sm:text-left sm:text-[13px] sm:leading-[1.85]">{text}</p>
    </article>
  );
}

function FaqItem({ question, answer, index }) {
  return (
    <article className="relative grid grid-cols-[34px_1fr] gap-2.5 rounded-[10px] border border-[#C9DCC5]/80 bg-white/[0.92] px-3 py-3 shadow-[0_8px_18px_rgba(24,56,38,0.045)] sm:grid-cols-[42px_1fr] sm:gap-3.5 sm:px-4 sm:py-3.5">
      <span className="number-text flex h-7 w-7 items-center justify-center rounded-full border border-[#D9C991]/80 bg-[#FBFCF7] text-[10px] leading-none text-[#B8A15A] sm:h-8 sm:w-8 sm:text-[11px]">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div>
        <h3 className="button-text text-[12px] leading-[1.55] text-[#183826] sm:text-[14px]">{question}</h3>
        <p className="body-text mt-1 text-[10.5px] leading-[1.65] text-[#183826]/68 sm:text-[12px]">{answer}</p>
      </div>
    </article>
  );
}

function AudienceCard({ number, title, description, image, Icon }) {
  return (
    <article className="group overflow-hidden rounded-[8px] border border-[#D9C991]/70 bg-white shadow-[0_8px_18px_rgba(24,56,38,0.08)] transition duration-300 hover:-translate-y-1 sm:rounded-[18px] sm:shadow-[0_14px_30px_rgba(24,56,38,0.08)]">
      <div className="relative aspect-[354/425] overflow-hidden bg-[#EEF6EA]">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <span className="audience-card-number absolute left-[3%] top-[2.5%] z-20 flex aspect-square w-[20%] items-center justify-center rounded-full border border-[#B8A15A] bg-white font-semibold leading-none text-[#1F5D34] shadow-[0_8px_18px_rgba(184,161,90,0.08)]">
          {number}
        </span>
      </div>
      <div className="audience-card-body relative pt-0 text-center">
        <div className="audience-card-icon relative z-20 mx-auto flex items-center justify-center rounded-full bg-[#0E6039] ring-2 ring-white sm:ring-4">
          <Icon className="text-[#D2B75C]" strokeWidth={1.7} />
        </div>
        <h3 className="audience-card-title mx-auto max-w-[270px] text-[#1F5D34]">
          {Array.isArray(title)
            ? title.map((line) => (
                <span key={line} className="block whitespace-nowrap">
                  {line}
                </span>
              ))
            : title}
        </h3>
        <div className="audience-divider relative mx-auto h-px w-[86%] bg-[#D2B75C]/70">
          <span className="audience-divider-dot absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#B8A15A]" />
        </div>
        <p className="audience-card-description body-text mx-auto max-w-[260px] text-[#183826]">
          {description}
        </p>
      </div>
    </article>
  );
}

function FloatingCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[calc(10px+env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-[820px] items-center gap-2 rounded-[14px] border border-[#C9DCC5]/90 bg-[#FBFCF7]/95 p-2 shadow-[0_14px_38px_rgba(24,56,38,0.18)] backdrop-blur-md">
        <div className="hidden min-w-0 flex-1 px-2 text-left sm:block">
          <p className="button-text text-[12px] leading-[1.5] text-[#1F5D34]">洋サポと組む導入方法を相談</p>
          <p className="body-text text-[11px] leading-[1.5] text-[#183826]/62">在庫・酒販・制作体制を使った始め方をご案内します。</p>
        </div>
        <div className="grid min-w-0 flex-1 grid-cols-2 gap-2 sm:flex sm:flex-none">
          {floatingCtaButtons.map(({ label, Icon, primary, href, eventLabel }) => {
            const isExternal = href.startsWith('http');

            return (
              <a
                key={label}
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                data-track-event="floating_cta_click"
                data-track-label={eventLabel}
                className={`button-text inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[10px] px-3 text-[13px] leading-[1.25] transition duration-300 hover:-translate-y-0.5 sm:min-w-[176px] sm:text-[14px] ${
                  primary
                    ? 'bg-[#1F5D34] text-white shadow-[0_10px_22px_rgba(31,93,52,0.24)]'
                    : 'border border-[#C9DCC5] bg-white text-[#1F5D34] shadow-[0_8px_18px_rgba(24,56,38,0.08)]'
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" strokeWidth={1.9} />
                <span>{label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main className="mx-auto min-h-screen max-w-[864px] overflow-x-hidden bg-[#FBFCF7] pb-[86px] font-sans text-[#183826] sm:pb-[92px]">
      <style>{`
        * { box-sizing: border-box; }
        .hero-section {
          background-image: url('${assets.hero}');
          background-size: cover;
          background-position: center top;
        }
        .bottle-scene::before {
          content: '';
          position: absolute;
          left: 12%;
          right: 8%;
          bottom: 33px;
          height: 48px;
          border-radius: 999px;
          background: rgba(31, 93, 52, 0.11);
          filter: blur(16px);
        }
        .bottle-photo {
          -webkit-mask-image:
            linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 8%, #000 24%, #000 100%),
            linear-gradient(to bottom, #000 0%, #000 88%, transparent 100%);
          -webkit-mask-composite: source-in;
          mask-image:
            linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 8%, #000 24%, #000 100%),
            linear-gradient(to bottom, #000 0%, #000 88%, transparent 100%);
          mask-composite: intersect;
          filter: drop-shadow(0 22px 18px rgba(24, 56, 38, 0.1));
        }
        .bottle {
          position: absolute;
          bottom: 54px;
          width: 145px;
          height: 505px;
          filter: drop-shadow(0 24px 24px rgba(24, 56, 38, 0.16));
          transform-origin: bottom center;
          animation: floatBottle 7s ease-in-out infinite;
        }
        .bottle-white { left: clamp(22px, 12vw, 118px); z-index: 2; }
        .bottle-green { left: clamp(150px, 27vw, 268px); z-index: 3; animation-delay: -1.6s; }
        .bottle-cap,
        .bottle-neck,
        .bottle-body {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          overflow: hidden;
        }
        .bottle-cap {
          top: 0;
          width: 55px;
          height: 84px;
          border-radius: 18px 18px 12px 12px;
          border: 1px solid rgba(201, 220, 197, 0.72);
          background: linear-gradient(90deg, rgba(255,255,255,0.72), rgba(238,246,234,0.7), rgba(255,255,255,0.28));
        }
        .bottle-green .bottle-cap {
          border-color: rgba(183, 201, 172, 0.55);
          background: linear-gradient(90deg, #173d25, #1f5d34 45%, #0e2919);
        }
        .bottle-cap::after {
          content: '';
          position: absolute;
          inset: 9px 16px;
          border-left: 1px solid rgba(184, 161, 90, 0.65);
          border-right: 1px solid rgba(184, 161, 90, 0.35);
        }
        .bottle-neck {
          top: 70px;
          width: 58px;
          height: 145px;
          border-left: 1px solid rgba(201, 220, 197, 0.62);
          border-right: 1px solid rgba(201, 220, 197, 0.62);
          background: linear-gradient(90deg, rgba(255,255,255,0.5), rgba(251,252,247,0.82) 48%, rgba(230,238,225,0.58));
        }
        .bottle-green .bottle-neck {
          border-color: rgba(201, 220, 197, 0.28);
          background: linear-gradient(90deg, #173d25, #1f5d34 42%, #081d12);
        }
        .bottle-neck span {
          position: absolute;
          left: 50%;
          top: 28px;
          transform: translateX(-50%) rotate(90deg);
          color: #1F5D34;
          font-size: 10px;
          font-weight: 700;
          white-space: nowrap;
        }
        .bottle-green .bottle-neck span { color: #B8A15A; }
        .bottle-crest {
          position: absolute;
          left: 50%;
          top: 196px;
          z-index: 4;
          width: 38px;
          height: 38px;
          transform: translateX(-50%);
          border: 2px solid #B8A15A;
          border-radius: 50%;
          background: radial-gradient(circle, #FBFCF7 0 45%, rgba(184,161,90,0.45) 47% 58%, rgba(255,255,255,0.86) 60%);
          box-shadow: 0 4px 12px rgba(24, 56, 38, 0.12);
        }
        .bottle-body {
          top: 202px;
          width: 138px;
          height: 304px;
          border: 1px solid rgba(201, 220, 197, 0.82);
          border-radius: 66px 66px 23px 23px / 80px 80px 23px 23px;
          background:
            linear-gradient(98deg, rgba(255,255,255,0.86) 0 18%, rgba(255,255,255,0.34) 19% 23%, rgba(238,246,234,0.52) 24% 66%, rgba(255,255,255,0.34) 68% 72%, rgba(214,230,207,0.56));
        }
        .bottle-green .bottle-body {
          border-color: rgba(201, 220, 197, 0.28);
          background:
            linear-gradient(96deg, rgba(255,255,255,0.18) 0 13%, rgba(31,93,52,0.92) 14% 35%, #0d2d1a 38% 75%, rgba(255,255,255,0.16) 76% 80%, #07180f 82%);
        }
        .bottle-body::before {
          content: '';
          position: absolute;
          inset: 24px 18px auto;
          height: 134px;
          border-radius: 50%;
          border: 1px solid rgba(31, 93, 52, 0.19);
          opacity: 0.7;
        }
        .bottle-label {
          position: absolute;
          left: 50%;
          bottom: 42px;
          width: 100px;
          min-height: 118px;
          transform: translateX(-50%);
          border: 1px solid rgba(184, 161, 90, 0.8);
          border-radius: 44px 44px 18px 18px;
          background: rgba(251,252,247,0.92);
          color: #1F5D34;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 18px 10px 12px;
          box-shadow: inset 0 0 0 4px rgba(238,246,234,0.9);
        }
        .label-leaf {
          width: 58px;
          height: 18px;
          margin-bottom: 5px;
          border-top: 1px solid rgba(31, 93, 52, 0.38);
          border-radius: 50%;
        }
        .bottle-label strong {
          font-family: Georgia, serif;
          font-size: 18px;
          line-height: 1.1;
          font-weight: 500;
        }
        .bottle-label em {
          margin-top: 2px;
          font-family: Georgia, serif;
          font-size: 16px;
          line-height: 1.2;
        }
        .bottle-label small {
          margin-top: 7px;
          color: #183826;
          font-size: 10px;
          font-weight: 700;
        }
        @keyframes floatBottle {
          0%, 100% { transform: translateY(0) rotate(-0.7deg); }
          50% { transform: translateY(-7px) rotate(0.4deg); }
        }
        .visual-card {
          position: relative;
          height: 100px;
          overflow: hidden;
          isolation: isolate;
          background: #EEF6EA;
        }
        .visual-card::before,
        .visual-card::after {
          content: '';
          position: absolute;
          pointer-events: none;
        }
        .visual-card::after {
          inset: 0;
          z-index: 8;
          background:
            linear-gradient(180deg, rgba(251,252,247,0.02), rgba(251,252,247,0.36)),
            radial-gradient(circle at 76% 16%, rgba(255,255,255,0.42), transparent 34%);
        }
        .scene-glow,
        .scene-line,
        .scene-figure,
        .scene-detail {
          position: absolute;
          display: block;
          pointer-events: none;
        }
        .scene-glow {
          inset: 0;
          z-index: 7;
          background:
            linear-gradient(180deg, rgba(251,252,247,0.02), rgba(251,252,247,0.34)),
            radial-gradient(circle at 78% 16%, rgba(255,255,255,0.36), transparent 34%);
        }
        .scene-bar {
          background:
            linear-gradient(180deg, rgba(24,56,38,0.9) 0%, rgba(31,93,52,0.82) 48%, rgba(238,246,234,0.96) 100%),
            linear-gradient(110deg, #183826, #EEF6EA 86%);
        }
        .scene-bar::before {
          left: 18px;
          top: 16px;
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: rgba(184,161,90,0.72);
          box-shadow:
            30px -2px 0 rgba(184,161,90,0.62),
            62px 3px 0 rgba(184,161,90,0.45),
            92px -1px 0 rgba(251,252,247,0.36);
          filter: blur(0.2px);
        }
        .scene-bar::after {
          left: 0;
          right: 0;
          bottom: 0;
          height: 46px;
          z-index: 4;
          background:
            linear-gradient(180deg, rgba(251,252,247,0.14), rgba(251,252,247,0.84)),
            linear-gradient(90deg, rgba(184,161,90,0.22), rgba(201,220,197,0.38));
        }
        .scene-bar .scene-line-one { left: 16px; right: 16px; bottom: 30px; z-index: 5; height: 1px; background: rgba(184,161,90,0.62); }
        .scene-bar .scene-line-two { left: 24px; right: 22px; bottom: 18px; z-index: 5; height: 1px; background: rgba(31,93,52,0.2); }
        .scene-bar .scene-figure-one,
        .scene-bar .scene-figure-two {
          bottom: 28px;
          z-index: 6;
          width: 16px;
          height: 24px;
          border: 1px solid rgba(251,252,247,0.78);
          border-top: 0;
          border-radius: 0 0 9px 9px;
        }
        .scene-bar .scene-figure-one { left: 48px; }
        .scene-bar .scene-figure-two { left: 78px; height: 27px; }
        .scene-bar .scene-detail-one,
        .scene-bar .scene-detail-two {
          bottom: 20px;
          z-index: 6;
          width: 1px;
          height: 12px;
          background: rgba(251,252,247,0.72);
        }
        .scene-bar .scene-detail-one { left: 56px; }
        .scene-bar .scene-detail-two { left: 86px; }
        .scene-event {
          background:
            radial-gradient(circle at 48% 10%, rgba(184,161,90,0.42), transparent 23%),
            linear-gradient(180deg, rgba(24,56,38,0.82), rgba(31,93,52,0.66) 46%, rgba(251,252,247,0.92) 100%);
        }
        .scene-event::before {
          left: 50%;
          top: 9px;
          width: 58px;
          height: 24px;
          transform: translateX(-50%);
          border-top: 1px solid rgba(184,161,90,0.8);
          border-radius: 50%;
          box-shadow:
            0 8px 18px rgba(184,161,90,0.28),
            -34px 8px 0 -10px rgba(184,161,90,0.45),
            34px 8px 0 -10px rgba(184,161,90,0.45);
        }
        .scene-event::after {
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 4;
          height: 38px;
          background: linear-gradient(180deg, rgba(251,252,247,0.22), rgba(251,252,247,0.88));
        }
        .scene-event .scene-line-one { left: 22px; right: 22px; bottom: 26px; z-index: 5; height: 1px; background: rgba(184,161,90,0.56); }
        .scene-event .scene-figure-one,
        .scene-event .scene-figure-two {
          bottom: 25px;
          z-index: 6;
          width: 18px;
          height: 30px;
          border: 1px solid rgba(251,252,247,0.86);
          border-radius: 10px 10px 4px 4px;
        }
        .scene-event .scene-figure-one { left: 52px; transform: rotate(-4deg); }
        .scene-event .scene-figure-two { left: 78px; transform: rotate(5deg); }
        .scene-event .scene-detail-one,
        .scene-event .scene-detail-two {
          bottom: 15px;
          z-index: 6;
          width: 1px;
          height: 13px;
          background: rgba(251,252,247,0.74);
        }
        .scene-event .scene-detail-one { left: 61px; }
        .scene-event .scene-detail-two { left: 87px; }
        .scene-brand {
          background:
            radial-gradient(circle at 74% 20%, rgba(31,93,52,0.16), transparent 28%),
            linear-gradient(135deg, #FBFCF7 0%, #EEF6EA 100%);
        }
        .scene-brand::before {
          left: 22px;
          bottom: 18px;
          z-index: 3;
          width: 36px;
          height: 52px;
          border: 1px solid rgba(201,220,197,0.96);
          border-radius: 5px;
          background: rgba(251,252,247,0.82);
          box-shadow: 0 12px 18px rgba(24,56,38,0.08);
        }
        .scene-brand::after {
          left: 16px;
          right: 16px;
          bottom: 14px;
          z-index: 2;
          height: 1px;
          background: rgba(31,93,52,0.15);
          box-shadow: 0 16px 18px rgba(31,93,52,0.08);
        }
        .scene-brand .scene-figure-one {
          left: 68px;
          bottom: 15px;
          z-index: 4;
          width: 24px;
          height: 70px;
          border: 1px solid rgba(31,93,52,0.5);
          border-radius: 12px 12px 5px 5px;
          background: linear-gradient(90deg, rgba(251,252,247,0.84), rgba(238,246,234,0.72));
        }
        .scene-brand .scene-figure-one::before {
          content: '';
          position: absolute;
          left: 50%;
          top: -14px;
          width: 10px;
          height: 18px;
          transform: translateX(-50%);
          border: 1px solid rgba(31,93,52,0.38);
          border-bottom: 0;
          border-radius: 4px 4px 0 0;
          background: rgba(251,252,247,0.8);
        }
        .scene-brand .scene-figure-two {
          left: 102px;
          bottom: 18px;
          z-index: 4;
          width: 18px;
          height: 45px;
          border-radius: 10px 10px 4px 4px;
          background: linear-gradient(90deg, #1F5D34, #123722);
        }
        .scene-brand .scene-detail-one {
          right: 28px;
          bottom: 28px;
          z-index: 4;
          width: 42px;
          height: 42px;
          border-left: 1px solid rgba(31,93,52,0.38);
          transform: rotate(-18deg);
        }
        .scene-brand .scene-detail-one::before,
        .scene-brand .scene-detail-one::after {
          content: '';
          position: absolute;
          width: 14px;
          height: 8px;
          border-radius: 999px 0 999px 0;
          background: rgba(31,93,52,0.42);
        }
        .scene-brand .scene-detail-one::before { left: -2px; top: 8px; }
        .scene-brand .scene-detail-one::after { left: 5px; top: 22px; transform: rotate(36deg); }
        .scene-side {
          background:
            radial-gradient(circle at 78% 24%, rgba(31,93,52,0.12), transparent 24%),
            linear-gradient(140deg, #FBFCF7 0%, #EEF6EA 100%);
        }
        .scene-side::before {
          left: 20px;
          right: 20px;
          bottom: 20px;
          z-index: 2;
          height: 1px;
          background: rgba(31,93,52,0.16);
          box-shadow: 0 16px 20px rgba(31,93,52,0.08);
        }
        .scene-side::after {
          right: 20px;
          bottom: 30px;
          z-index: 4;
          width: 26px;
          height: 18px;
          border: 1px solid rgba(184,161,90,0.46);
          border-radius: 0 0 12px 12px;
          background: rgba(251,252,247,0.72);
        }
        .scene-side .scene-figure-one {
          left: 32px;
          bottom: 31px;
          z-index: 4;
          width: 68px;
          height: 42px;
          border: 2px solid rgba(31,93,52,0.56);
          border-radius: 5px;
          background: linear-gradient(135deg, rgba(251,252,247,0.8), rgba(238,246,234,0.72));
        }
        .scene-side .scene-figure-one::after {
          content: '';
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: -9px;
          height: 3px;
          border-radius: 999px;
          background: rgba(31,93,52,0.35);
        }
        .scene-side .scene-figure-two {
          right: 25px;
          top: 20px;
          z-index: 3;
          width: 1px;
          height: 42px;
          background: rgba(31,93,52,0.28);
          transform: rotate(12deg);
        }
        .scene-side .scene-figure-two::before,
        .scene-side .scene-figure-two::after {
          content: '';
          position: absolute;
          width: 12px;
          height: 8px;
          border-radius: 999px 0 999px 0;
          background: rgba(31,93,52,0.34);
        }
        .scene-side .scene-figure-two::before { right: 1px; top: 7px; transform: rotate(-22deg); }
        .scene-side .scene-figure-two::after { left: 2px; top: 21px; transform: rotate(34deg); }
        .scene-side .scene-line-one { left: 30px; right: 24px; bottom: 23px; z-index: 5; height: 1px; background: rgba(184,161,90,0.28); }
        @media (max-width: 767px) {
          .bottle-scene { min-height: 318px; }
          .bottle { height: 388px; width: 112px; bottom: 38px; }
          .bottle-white { left: calc(50% - 122px); }
          .bottle-green { left: calc(50% - 8px); }
          .bottle-cap { width: 43px; height: 66px; }
          .bottle-neck { top: 55px; width: 45px; height: 112px; }
          .bottle-neck span { font-size: 8px; top: 20px; }
          .bottle-crest { top: 150px; width: 30px; height: 30px; }
          .bottle-body { top: 154px; width: 108px; height: 234px; border-radius: 52px 52px 18px 18px / 63px 63px 18px 18px; }
          .bottle-label { width: 82px; min-height: 94px; bottom: 30px; padding: 14px 8px 10px; }
          .bottle-label strong { font-size: 14px; }
          .bottle-label em { font-size: 13px; }
          .label-leaf { width: 46px; height: 13px; }
          .visual-card { height: 100px; }
        }
      `}</style>

      <section className="hero-section relative">
        <img
          src={assets.glow}
          alt=""
          className="pointer-events-none absolute right-0 top-0 h-[58%] w-[72%] object-cover opacity-70"
        />
        <div className="relative mx-auto grid max-w-[790px] grid-cols-[minmax(0,62%)_minmax(0,38%)] gap-x-0 px-4 pb-4 pt-6 sm:px-9 md:grid-cols-[0.64fr_0.36fr] md:gap-4 md:px-0 md:pb-5 md:pt-9">
          <div className="nav-text col-span-2 flex max-w-full flex-wrap gap-x-1 gap-y-1.5 border-b border-[#C9DCC5] pb-3 text-[10px] leading-[1.6] text-[#1F5D34] md:flex-nowrap md:gap-x-1 md:pb-4 md:text-[13px]">
            {categories.map((category, index) => (
              <span key={category}>
                {category}
                {index < categories.length - 1 && <span className="mx-1.5 text-[#B8A15A]">/</span>}
              </span>
            ))}
          </div>

          <div className="relative z-10 min-w-0 pt-5 md:pt-4">
            <p className="button-text inline-flex rounded-[0px] bg-[#1F5D34] px-3 py-2 text-[12px] leading-[1.15] text-white shadow-[0_12px_26px_rgba(31,93,52,0.12)] sm:text-[16px] md:mt-4 md:px-7 md:py-3 md:text-[24px]">
              在庫負担なし・専用設備不要
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5 md:mt-4 md:gap-2">
              {heroBadges.map((badge) => (
                <span
                  key={badge}
                  className="button-text rounded-full border border-[#C9DCC5] bg-white/76 px-2.5 py-1 text-[9px] leading-none text-[#1F5D34] shadow-[0_8px_18px_rgba(24,56,38,0.05)] md:px-4 md:py-1.5 md:text-[13px]"
                >
                  {badge}
                </span>
              ))}
            </div>

            <h1 className="hero-title mt-5 text-[24px] leading-[1.16] text-[#1F5D34] [letter-spacing:0.01em] sm:text-[44px] md:mt-8 md:text-[60px] md:[letter-spacing:0.04em]">
              在庫を抱えずに、
              <br />
              <span className="whitespace-nowrap">オリシャン事業を</span>
              <br />
              かんたんスタート。
            </h1>

            <p className="body-text mt-4 max-w-[410px] text-[12px] leading-[1.85] text-[#183826] md:mt-8 md:text-[17px]">
              制作・印刷・発送はすべて代行。
              <br />
              専門知識がなくても、
              <br />
              事業立ち上げを進められる仕組みです。
            </p>

            <div className="mt-7 hidden max-w-[430px] flex-col gap-3 sm:flex sm:flex-row">
              <a
                href={contactLinks.line}
                target="_blank"
                rel="noopener noreferrer"
                data-track-event="hero_cta_click"
                data-track-label="line_consultation"
                className="button-text inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-[10px] bg-[#1F5D34] px-5 text-[15px] leading-none text-white shadow-[0_14px_26px_rgba(31,93,52,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(31,93,52,0.26)]"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={1.9} />
                公式LINEで無料相談
              </a>
              <a
                href="#steps"
                data-track-event="hero_cta_click"
                data-track-label="view_flow"
                className="button-text inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-[10px] border border-[#C9DCC5] bg-white/78 px-5 text-[15px] leading-none text-[#1F5D34] shadow-[0_10px_22px_rgba(24,56,38,0.07)] transition duration-300 hover:-translate-y-0.5"
              >
                仕組みを見る
                <ArrowRight className="h-4 w-4" strokeWidth={1.9} />
              </a>
            </div>
            <p className="body-text mt-3 hidden text-[11px] leading-[1.7] text-[#183826]/58 sm:block">
              洋サポの体制を使う前提で、導入目的に合わせた進め方をご案内します。
            </p>
          </div>

          <div className="bottle-scene relative z-0 flex min-h-[318px] min-w-0 items-start justify-end overflow-visible pt-3 md:min-h-[500px] md:pt-0">
            <img
              src={assets.heroBottles}
              alt="オリジナルシャンパンの白ボトルとグリーンボトル"
              className="bottle-photo relative z-0 -mr-8 mt-0 w-[202px] max-w-none object-contain sm:w-[300px] md:z-10 md:mr-[28px] md:w-[394px]"
            />
          </div>
        </div>
      </section>

        <section className="relative z-10 px-4 pb-3 sm:px-9 md:px-0">
          <div className="mx-auto grid max-w-[720px] grid-cols-4 gap-2 sm:gap-4 md:gap-5">
            {badges.map((badge) => (
              <BadgeCard key={badge.label} {...badge} />
            ))}
        </div>
      </section>

      <section className="px-4 py-6 sm:px-7 sm:py-8 md:px-0">
        <div className="mx-auto max-w-[806px]">
          <div className="mb-4 sm:mb-5">
            <p className="button-text text-[12px] leading-none text-[#B8A15A]">BENEFIT</p>
            <h2 className="section-title mt-2 text-[22px] leading-[1.45] text-[#183826] md:text-[30px]">
              初期負担を抑えて、
              <br />
              事業立ち上げを進めやすい。
            </h2>
            <p className="body-text mt-2 max-w-[560px] text-[12.5px] leading-[1.8] text-[#183826]/75 sm:mt-3 sm:text-[14px] sm:leading-[1.9]">
              在庫・専用設備・制作発送の実務を洋サポ側で持つため、
              <br className="hidden sm:block" />
              準備負担を抑えながら、オリシャン事業を始められます。
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.title} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      <section id="steps" className="px-3 py-0 sm:px-6 md:px-0">
        <div
          className="mx-auto max-w-[820px] rounded-[16px] border border-[#C9DCC5]/70 bg-[#EEF6EA] bg-cover bg-center px-3 py-5 shadow-[0_18px_50px_rgba(24,56,38,0.04)] sm:px-7 sm:py-6"
          style={{ backgroundImage: `url(${assets.section})` }}
        >
          <SectionHeading>洋サポと進める3ステップ</SectionHeading>
          <div className="grid grid-cols-3 gap-2 sm:gap-5 md:gap-12">
            {steps.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-2 py-8 sm:px-8 md:px-0">
        <div className="mx-auto max-w-[840px]">
          <div className="mb-7 text-center">
            <div className="mb-2 flex items-center justify-center gap-5">
              <span className="hidden h-px w-12 bg-[#B8A15A] sm:block" />
              <p className="button-text whitespace-nowrap text-[12px] leading-[1.7] text-[#B8A15A] sm:text-[16px] md:text-[20px]">
                多くの店舗・事業者様にご利用いただいています
              </p>
              <span className="hidden h-px w-12 bg-[#B8A15A] sm:block" />
            </div>
            <div className="mb-1 flex items-center justify-center gap-3">
              <span className="h-1.5 w-1.5 rotate-45 bg-[#B8A15A]" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#B8A15A]" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#B8A15A]" />
            </div>
            <h2 className="hero-title whitespace-nowrap text-[23px] leading-[1.16] text-[#1F5D34] sm:text-[38px] md:text-[56px]">
              こんな方に選ばれています
            </h2>
            <span className="mx-auto mt-2 block h-2 w-24 rounded-[50%] border-t-[3px] border-[#B8A15A]" />
          </div>
          <div className="grid grid-cols-4 gap-1.5 sm:gap-5">
            {audiences.map((audience) => (
              <AudienceCard key={audience.number} {...audience} />
            ))}
          </div>
          <p className="body-text mt-5 text-center text-[12px] leading-[1.7] text-[#183826]/60 md:text-[13px]">
            ※業種や規模を問わず、1本からオリジナルシャンパンを制作いただけます。
          </p>
        </div>
      </section>

      <section className="px-5 pb-4 pt-0 sm:px-7 md:px-0">
        <div
          className="mx-auto max-w-[806px] rounded-[14px] border border-[#C9DCC5]/70 bg-[#EEF6EA] bg-cover bg-center px-5 py-5 shadow-[0_14px_34px_rgba(24,56,38,0.035)] sm:px-7"
          style={{ backgroundImage: `url(${assets.section})` }}
        >
          <div className="grid items-center gap-4 md:grid-cols-[0.8fr_1.2fr_auto]">
            <div className="text-center md:text-left">
              <p className="button-text text-[11px] leading-none text-[#B8A15A]">PRICE</p>
              <h2 className="section-title mt-2 text-[20px] leading-[1.45] text-[#183826] md:text-[24px]">
                店舗を持たずに、
                <br />
                月額10万円から導入可能
              </h2>
            </div>
            <p className="body-text text-center text-[13px] leading-[1.85] text-[#183826]/76 md:text-left md:text-[14px]">
              洋サポの在庫・酒販・制作体制を使って、オリシャン事業をスタート。運用内容や対応範囲は、事業規模に合わせてご提案します。
            </p>
            <a
              href={contactLinks.line}
              target="_blank"
              rel="noopener noreferrer"
              data-track-event="price_cta_click"
              data-track-label="line_consultation"
              className="button-text inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[10px] bg-[#1F5D34] px-5 text-[14px] leading-none text-white shadow-[0_12px_24px_rgba(31,93,52,0.2)] transition duration-300 hover:-translate-y-0.5"
            >
              料金と仕組みを相談する
              <ArrowRight className="h-4 w-4" strokeWidth={1.9} />
            </a>
          </div>
          <p className="body-text mt-3 text-center text-[10px] leading-[1.5] text-[#183826]/58 md:text-left">
            ※表示価格は税抜です。詳細な対応範囲はご相談内容に合わせてご案内します。
          </p>
        </div>
      </section>

      <section className="px-5 pb-5 pt-0 sm:px-7 md:px-0">
        <div
          className="mx-auto max-w-[806px] rounded-[14px] border border-[#C9DCC5]/70 bg-[#EEF6EA]/70 bg-cover bg-center px-3 py-4 shadow-[0_12px_28px_rgba(24,56,38,0.035)] sm:px-5 sm:py-5"
          style={{ backgroundImage: `url(${assets.section})` }}
        >
          <div className="mb-3 flex items-center gap-3 sm:mb-4">
            <span className="h-px flex-1 bg-[#B8A15A]/55" />
            <h2 className="button-text whitespace-nowrap text-[15px] leading-none text-[#183826] sm:text-[18px]">よくある質問</h2>
            <span className="h-px flex-1 bg-[#B8A15A]/55" />
          </div>
          <div className="grid gap-2 sm:gap-2.5">
            {faqs.map((faq, index) => (
              <FaqItem key={faq.question} {...faq} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="px-5 pb-0 pt-2 sm:px-7 md:px-0">
        <div className="relative mx-auto max-w-[806px] overflow-hidden rounded-[14px] bg-[#1F5D34] px-5 py-6 text-center text-white shadow-[0_16px_36px_rgba(24,56,38,0.14)] sm:px-8 sm:py-7">
          <span className="mx-auto mb-3 block h-px w-14 bg-[#B8A15A]" />
          <h2 className="section-title mx-auto max-w-[350px] text-[24px] text-white md:max-w-none md:text-[29px]">
            公式LINEで無料相談
          </h2>
          <p className="body-text mx-auto mt-1 max-w-[520px] text-[13px] leading-[1.8] text-[#EEF6EA] md:text-[15px]">
            洋サポと組んで始める導入方法を、
            <br />
            <span className="whitespace-nowrap">事業内容に合わせてご案内します。</span>
          </p>
          <div className="mx-auto mt-5 grid max-w-[660px] gap-2 sm:grid-cols-2">
            {ctaButtons.slice(0, 2).map(({ label, Icon, primary, href, eventLabel }) => {
              const isExternal = href.startsWith('http');

              return (
                <a
                  key={label}
                  href={href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  data-track-event="cta_click"
                  data-track-label={eventLabel}
                  className={`button-text inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-[9px] border px-4 py-2.5 text-[14px] leading-[1.35] text-[#1F5D34] shadow-[0_8px_18px_rgba(6,28,15,0.12)] transition duration-300 hover:-translate-y-0.5 md:text-[15px] ${
                    primary ? 'border-[#EEF6EA] bg-[#EEF6EA]' : 'border-[#EEF6EA] bg-[#FBFCF7]'
                  }`}
                >
                  <Icon className="h-5 w-5 shrink-0" strokeWidth={1.8} />
                  <span>{label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <footer className="bg-[#FBFCF7] px-5 py-5 text-center">
        <a
          href="https://mononopu.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="button-text text-[12px] leading-none text-[#1F5D34]/70 transition duration-300 hover:text-[#1F5D34]"
        >
          株式会社洋樽本家酒造
        </a>
      </footer>
      <FloatingCta />
    </main>
  );
}
