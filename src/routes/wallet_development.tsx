import SEO from "../components/SEO";
import { createFileRoute } from '@tanstack/react-router'
import { Smartphone, Globe, Monitor, Shield, Building2, Repeat } from 'lucide-react'

export const Route = createFileRoute('/wallet_development')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
        <SEO title="Wallet Development | Zanthium Technosoft" />

      {/* Hero */}
      <section className="bg-white px-6 py-16 lg:py-24 mt-7">
        <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center w-full">

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111111] leading-tight mb-6">
                Secure<br />Cryptocurrency<br />Wallet Development
              </h1>
              <p className="text-[#a00000] text-base sm:text-lg leading-relaxed max-w-xl">
                Build next-gen blockchain wallets with enterprise-grade security,
                intuitive UI, and seamless crypto management.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[420px] h-[380px]">
                {/* Gold circle background */}
                
          
                <img
                  src="/blockchain/wallet.webp"
                  alt="Crypto Wallet App"
                  className="relative z-10 sm:w-full sm:h-full w-75 h-95 object-contain drop-shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Wallet Development Solutions */}
      <section className="bg-[#f4f4f8] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-4">
              Our Wallet Development Solutions
            </h2>
            <div className="w-16 h-1 bg-[#c8960c] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
  icon: <Smartphone />,
  title: 'Mobile Wallets',
  body: 'Secure iOS and Android cryptocurrency wallets with biometric authentication and intuitive interfaces.',
  features: [
    'Cross-platform development',
    'QR code scanning',
    'Push notifications',
    'Multi-currency support',
    'Hardware wallet integration',
  ],
},
{
  icon: <Globe />,
  title: 'Web Wallets',
  body: 'Browser-based wallet solutions with secure cloud backup and easy accessibility.',
  features: [
    'Responsive design',
    'Browser extension options',
    'Two-factor authentication',
    'API integration',
    'Transaction history',
  ],
},
{
  icon: <Monitor />,
  title: 'Desktop Wallets',
  body: 'Feature-rich cryptocurrency wallets for Windows, macOS, and Linux platforms.',
  features: [
    'Full node integration',
    'Advanced security features',
    'Multi-signature support',
    'Cold storage options',
    'Custom blockchain support',
  ],
},
{
  icon: <Shield />,
  title: 'Hardware Wallets',
  body: 'Physical device solutions for maximum security and offline storage of cryptocurrencies.',
  features: [
    'Secure element chips',
    'Bluetooth/USB connectivity',
    'Tamper-proof design',
    'Multi-currency support',
    'OLED display',
  ],
},
{
  icon: <Building2 />,
  title: 'Custodial Wallets',
  body: 'Exchange and institutional-grade wallet solutions with managed private keys.',
  features: [
    'Multi-user accounts',
    'Withdrawal approvals',
    'Compliance features',
    'Insurance options',
    'Audit trails',
  ],
},
{
  icon: <Repeat />,
  title: 'White-label Wallets',
  body: 'Custom-branded wallet solutions ready for quick deployment with your branding.',
  features: [
    'Fully customizable UI',
    'Rapid deployment',
    'Token support',
    'Admin dashboard',
    'Ongoing maintenance',
  ],
},
            ].map(({ icon, title, body, features }) => (
              <div key={title} className="bg-white rounded-2xl p-7 shadow-sm border-t-4 border-[#7a0e0e] hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-4 text-[#7a0e0e]">{icon}</div>
                <h3 className="text-xl font-bold text-[#111111] mb-3">{title}</h3>
                <p className="text-gray-600 text-md leading-relaxed mb-5">{body}</p>
                <ul className="space-y-2">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-gray-700 text-md">
                      <span className="w-[5px] h-[5px] rounded-full bg-[#7a0e0e] mt-[7px] flex-shrink-0"></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Wallet Development Process */}
      <section className="bg-[#f4f4f8] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-4">
              Wallet Development Process
            </h2>
            <div className="w-16 h-1 bg-[#c8960c] mx-auto"></div>
          </div>

          {/* Steps */}
          <div className="relative">

            {/* Connector line */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gray-200 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                {
                  num: 1,
                  title: 'Requirement Analysis',
                  body: 'Understand your security needs and target audience',
                },
                {
                  num: 2,
                  title: 'Architecture Design',
                  body: 'Create technical specifications and security model',
                },
                {
                  num: 3,
                  title: 'Core Development',
                  body: 'Implement wallet functionality and security features',
                },
                {
                  num: 4,
                  title: 'Security Audit',
                  body: 'Penetration testing and vulnerability assessment',
                },
                {
                  num: 5,
                  title: 'Deployment',
                  body: 'App store submission or server deployment',
                },
              ].map(({ num, title, body }) => (
                <div key={num} className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-14 h-14 rounded-full bg-[#7a0e0e] text-white font-black text-xl flex items-center justify-center mb-5 shadow-md">
                    {num}
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-sm w-full">
                    <h4 className="font-bold text-gray-900 text-md mb-2">{title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Security Features */}
      <section className="bg-[#111111] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Advanced Security Features
            </h2>
            <div className="w-16 h-1 bg-[#c8960c] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                label: 'Encryption',
                body: 'Military-grade AES-256 encryption for all sensitive data and communications',
              },
              {
                label: 'Biometric Auth',
                body: 'Fingerprint and facial recognition for secure access control',
              },
              {
                label: 'Multi-Signature',
                body: 'Require multiple approvals for transactions',
              },
              {
                label: 'Hierarchical Deterministic',
                body: 'HD wallets for generating unlimited addresses from a single seed',
              },
              {
                label: 'Cold Storage',
                body: 'Offline key generation and storage solutions',
              },
              {
                label: 'Anti-Phishing',
                body: 'Protection against social engineering attacks',
              },
            ].map(({ label, body }) => (
              <div key={label} className="bg-[#1e1e1e] rounded-xl p-6 border border-[#2a2a2a] hover:border-[#c8960c]/40 transition-colors duration-300">
                <span className="text-[#c8960c] text-xs font-bold uppercase tracking-widest block mb-3">{label}</span>
                <p className="text-white text-base font-semibold leading-snug">{body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Supported Blockchains */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] mb-4">
              Supported Blockchains
            </h2>
            <div className="w-16 h-1 bg-[#c8960c] mx-auto"></div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {[
              { name: 'Upbit',           img: '/exchange/upbit.png' },
              { name: 'BNB Chain',       img: '/exchange/bnb.png' },
              { name: 'KCS',             img: '/exchange/kcs.png' },
              { name: 'Bitmart',         img: '/exchange/bitmart.png' },
              { name: 'Bitcoin',         img: '/exchange/bitcoin.png' },
              { name: 'Coindcx',         img: '/exchange/coindcx.png' },
              { name: 'Uniswap Exchange',img: '/exchange/uniswap-exchange.png' },
              { name: 'Poloniex',        img: '/exchange/poloniex.png' },
            ].map(({ name, img }) => (
              <div key={name} className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                <img src={img} alt={name} className="h-10 w-10 object-contain" />
                <span className="text-gray-700 text-xs font-medium text-center leading-tight">{name}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}