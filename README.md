# オリシャン事業導入LP

Next.js / React / Tailwind CSS の静的LPです。

## Environment Variables

Vercel、Netlify どちらでも同じ環境変数を設定できます。

- `NEXT_PUBLIC_GA_ID`: GA4の測定ID。例: `G-3D4NC4BTG1`
- `NEXT_PUBLIC_CLARITY_ID`: Microsoft ClarityのProject ID。未設定なら読み込みません。
- `NEXT_PUBLIC_LINE_URL`: LINE友だち追加ボタンのURL。例: `https://lin.ee/P4whNSS`
- `NEXT_PUBLIC_GOOGLE_FORM_URL`: オンライン相談予約ボタンのURL。例: `https://cal.com/ayaka-miura-m7jftn/洋サホ-lpオンラインこ相談c`
- `NEXT_PUBLIC_DOWNLOAD_URL`: 資料ダウンロードURL。未設定ならページ内CTAへ戻ります。

## Commands

```bash
npm run dev
npm run build
```

`next.config.js` で `output: 'export'` を指定しているため、`npm run build` 後は `out/` をNetlifyなどの静的ホスティングに配置できます。
