# YieldGuard - Safe DeFi Yields

Sleep easy while your crypto earns — vetted vaults, zero guesswork.

## Features

- 🛡️ **AI Risk Sentinel**: Real-time risk scoring for DeFi vaults
- 🎯 **Vault Matchmaker**: Personalized vault recommendations via quiz
- 🔔 **Yield Pulse Notifications**: Smart alerts for risk changes and opportunities
- ⚡ **One-Tap Vault Entry**: Seamless in-frame deposits
- 👥 **Social Proof Layer**: See what your Farcaster network is using

## Tech Stack

- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS
- OnchainKit for Base integration
- Farcaster MiniKit SDK

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local`:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Base Mini App Integration

This app is built as a Farcaster Mini App with:
- Frame manifest at `public/.well-known/farcaster.json`
- MiniKit SDK integration for wallet and notifications
- OnchainKit for Base blockchain interactions
- Mobile-first responsive design

## Deployment

Deploy to Vercel or any Next.js-compatible platform:

```bash
npm run build
npm start
```

## License

MIT
