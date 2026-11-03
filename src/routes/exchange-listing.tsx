import { createFileRoute } from "@tanstack/react-router";
import SEO from "../components/SEO";

export const Route = createFileRoute("/exchange-listing")({
  component: ExchangeListingPage,
});

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */

const benefits = [
  {
    icon: "https://cdn-icons-png.flaticon.com/128/2920/2920244.png",
    title: "Multi- Exchange Listings",
    desc: "Our team offers comprehensive support for listing on multiple exchanges, with dedicated coordinators available 24/7 to assist clients worldwide in securing listings on reputable cryptocurrency platforms.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/3281/3281289.png",
    title: "Exchange Research",
    desc: "We carefully assess key factors like exchange reputation, trading volume, user base, and listing fees to identify the most suitable crypto exchange for listing your cryptocurrency successfully.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/2920/2920277.png",
    title: "Application Assistance",
    desc: "We assist in preparing and submitting listing applications to cryptocurrency exchanges, ensuring all necessary documentation and requirements are meticulously met to increase the likelihood of a successful listing.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/3281/3281315.png",
    title: "Market-making & Liquidity",
    desc: "We offer market-making solutions designed to boost token liquidity on exchanges. Our goal is to attract investors and cultivate a dynamic, thriving trading ecosystem for your token.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/2920/2920349.png",
    title: "Exchange negotiation",
    desc: "We collaborate with exchanges on your behalf to secure favorable listing terms, including reduced fees, optimal trading pairs, and additional benefits that boost visibility and create more trading opportunities for your project.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/3281/3281352.png",
    title: "Promotions",
    desc: "Our crypto exchange listing services also include promotional support to enhance project visibility and awareness. We employ a variety of marketing strategies to attract potential investors and traders.",
  },
];

const exchanges = [
  { name: "Binance",  logo: "/exchange/bnb.png" },
  { name: "KuCoin",   logo: "/exchange/kcs.png" },
  { name: "Bitrue",   logo: "/exchange/bitcoin.png" },
  { name: "BYBIT",    logo: "/exchange/bitcoin.png" },
  { name: "UPbit",    logo: "/exchange/upbit.png" },
  { name: "Poloniex", logo: "/exchange/poloniex.png" },
  { name: "CoinDCX",  logo: "/exchange/coindcx.png" },
  { name: "BitMart",  logo: "/exchange/bitmart.png" },
  { name: "CoinEx",   logo: "/exchange/coinex.png" },
  { name: "Coinbase", logo: "/exchange/coinbase.png" },
  { name: "Gemini",   logo: "/exchange/Gemini.webp" },
  { name: "Uniswap",  logo: "/exchange/uniswap-exchange.png" },
];

const listingServices = [
  {
    img: "/exchange/9.png",
    title: "Centralized exchange Listing",
    desc: "As a trusted listing service provider, we handle the entire process of listing your crypto token or coin on centralized exchanges (CEX), ensuring optimal results every step of the way.",
  },
  {
    img: "/exchange/6.png",
    title: "Decentralized Exchange Listings",
    desc: "Our experienced experts help list your tokens on top DEX platforms or decentralized finance (DeFi) platforms, ensuring increased exposure and access to trading pair liquidity.",
  },
  {
    img: "/exchange/22.png",
    title: "Initial Dex Offering (IDO)",
    desc: "We offer listing support for IDOs, where a project conducts a token sale on one or more decentralized liquidity platforms, providing greater transparency than IEOs.",
  },
  {
    img: "/exchange/17.png",
    title: "Initial Exchange Offering (IEO)",
    desc: "Our experts assist with listing on IEOs, an advanced version of ICOs conducted by reputable crypto exchanges, ensuring greater visibility and investor engagement.",
  },
];

const whyList = [
  {
    title: "Increased Visibility",
    desc: "Reach a wide audience of investors and traders, increasing awareness and sparking new interest in your cryptocurrency.",
  },
  {
    title: "Price Appreciation Possibilities",
    desc: "Listing on high-visibility exchanges can attract new investors, boost demand, and substantially increase your token's value.",
  },
  {
    title: "Partnership Opportunities",
    desc: "Attract new investors and open doors to collaboration opportunities with other projects or businesses, helping to expand your reach.",
  },
  {
    title: "Enhanced Liquidity",
    desc: "Enable smooth trading through a dedicated marketplace, enhancing liquidity and potentially stabilizing token prices.",
  },
  {
    title: "Credibility and Trust",
    desc: "Enhance your project's credibility and reputation by meeting the stringent standards of top exchanges, gaining legitimacy in the process.",
  },
  {
    title: "Advanced Functionalities",
    desc: "Leverage advanced exchange features such as margin trading and staking to increase user utility and enhance your project's overall value.",
  },
];

const keyBenefits = [
  {
    img: "/exchange/32.png",
    title: "Enhanced Local SEO",
    desc: "Improve search rankings with accurate crypto listings across platforms, enhancing local visibility and exposure on search engines.",
  },
  {
    img: "/exchange/3.png",
    title: "Expand Your Audience",
    desc: "Reach new prospects by connecting with potential customers searching for your offerings on targeted platforms.",
  },
  {
    img: "/exchange/39.png",
    title: "Better User Engagement",
    desc: "Add detailed descriptions and reviews to crypto listings, building trust and helping customers make informed decisions.",
  },
  {
    img: "/exchange/1.png",
    title: "Valuable Insights & Analytics",
    desc: "Analyze how users discover your listings and optimize your presence to maximize reach and engagement.",
  },
];

const launchpads = [
  { name: "Binance Launchpad", logo: "/exchange/4.png" },
  { name: "Bybit Launchpad",   logo: "/exchange/7.png" },
  { name: "OKX Jumpstart",     logo: "/exchange/27.png" },
  { name: "Gate. io Startup",  logo: "/exchange/20.png" },
  { name: "DAO Maker",         logo: "/exchange/16.png" },
  { name: "Coin List",         logo: "/exchange/11.png" },
  { name: "Crypto Hub",        logo: "/exchange/15.png" },
  { name: "Red Kite",          logo: "/exchange/29.png" },
];

const industries = [
  { name: "Supply Chain",       icon: "/exchange/34.png" },
  { name: "Travel & Logistics", icon: "/exchange/24.png"},
  { name: "Healthcare",         icon: "/exchange/21.png" },
  { name: "Fintech",            icon: "/exchange/18.png" },
];

const networks = [
  { name: "Uniswap",      logo: "https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=040" },
  { name: "Vechain",      logo: "https://cryptologos.cc/logos/vechain-vet-logo.svg?v=040" },
  { name: "Stellar",      logo: "https://cryptologos.cc/logos/stellar-xlm-logo.svg?v=040" },
  { name: "USD Coin",     logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=040" },
  { name: "Tezos",        logo: "https://cryptologos.cc/logos/tezos-xtz-logo.svg?v=040" },
  { name: "Binance Coin", logo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=040" },
  { name: "Chainlink",    logo: "https://cryptologos.cc/logos/chainlink-link-logo.svg?v=040" },
  { name: "Cardano",      logo: "https://cryptologos.cc/logos/cardano-ada-logo.svg?v=040" },
  { name: "Litecoin",     logo: "https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=040" },
  { name: "Bitcoin",      logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=040" },
  { name: "Ripple",       logo: "https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=040" },
  { name: "Tether",       logo: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=040" },
];

/* ─────────────────────────────────────────
   Reusable Logo Card
───────────────────────────────────────── */
function LogoCard({ logo, name, size = "w-16 h-16", rounded = false }: { logo: string; name: string; size?: string; rounded?: boolean }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 hover:shadow-md transition-shadow duration-300">
      <img
        src={logo}
        alt={name}
        className={`${size} object-contain ${rounded ? "rounded-full" : ""}`}
        onError={(e) => {
          e.currentTarget.style.display = "none";
          if (e.currentTarget.parentElement) {
            e.currentTarget.parentElement.insertAdjacentHTML(
              "afterbegin",
              `<div style="width:56px;height:56px;border-radius:50%;background:#f3f4f6;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:#6366f1">${name.slice(0, 2).toUpperCase()}</div>`
            );
          }
        }}
      />
      <span className="text-md font-semibold text-gray-800 text-center">{name}</span>
    </div>
  );
}

/* ─────────────────────────────────────────
   Main Component
───────────────────────────────────────── */
function ExchangeListingPage() {
  return (
    <div className="font-sans antialiased text-gray-800 bg-white mt-4">
        <SEO title="Exchange Listing | Zanthium Technosoft" />

      {/* ══════════════════════════════════
          SECTION 1 — HERO INTRO (Image 1 top)
      ══════════════════════════════════ */}
      <section className="bg-[#f5f7fa] py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Cryptocurrency Exchange Listing Company
            </h1>
            <p className="text-gray-600 text-base leading-relaxed text-justify">
              A cryptocurrency exchange listing company specializes in helping projects list their tokens or coins on top
              exchanges. With <strong>crypto exchange listing</strong> experts, these companies ensure seamless
              cryptocurrency coin listing for enhanced visibility and liquidity.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/exchange/13.png"
              alt="Crypto Exchange"
              className="w-72 h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 2 — ENHANCE VISIBILITY (Image 1 bottom)
      ══════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="/exchange/14.png"
              alt="Enhance Visibility"
              className="w-72 h-auto object-contain"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 leading-tight mb-5">
              Enhance Your Crypto Visibility with Our Crypto Exchange
            </h2>
            <p className="text-gray-600 text-base leading-relaxed text-justify">
              <strong>cryptocurrency exchange listing solutions</strong> play a vital role in getting your coins listed
              on top exchanges, enhancing visibility, attracting buyers, and building credibility. Navigating the listing
              process can be complex, which is why businesses turn to experts for guidance. Our experienced professionals
              simplify this journey by leveraging their expertise and industry connections to secure faster listings on
              the most suitable exchanges. From managing the application process to promoting your project to exchanges
              and providing liquidity solutions, our crypto exchange listing specialists ensure a seamless and efficient
              experience for your business.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 3 — BENEFITS CARDS (Image 2)
      ══════════════════════════════════ */}
      <section className="bg-[#f5f7fa] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 leading-tight mb-4">
              Benefits of Our Comprehensive Cryptocurrency Exchange Listing Services
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-base leading-relaxed text-center">
              Our expert team delivers premium cryptocurrency exchange listing services, managing every crucial detail to
              maximize your project's visibility, credibility, and reach, ensuring a seamless and impactful listing
              experience for your cryptocurrency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img src={b.icon} alt={b.title} className="w-12 h-12 object-contain" />
                  <h4 className="text-lg font-bold text-gray-900 leading-snug">{b.title}</h4>
                </div>
                <p className="text-gray-500 text-md leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 4 — PREMIER EXCHANGES (Image 3)
      ══════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Get Your Crypto Coin Listed on Premier Exchange Platforms
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-base leading-relaxed">
              Our experienced team helps you reach your target audience by securing{" "}
              <strong>crypto coin listings</strong> on trusted{" "}
              <span className="text-green-600 font-semibold">cryptocurrency exchanges</span>, ensuring enhanced
              visibility and greater access to potential investors and traders.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {exchanges.map((ex) => (
              <LogoCard key={ex.name} logo={ex.logo} name={ex.name} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 5 — LISTING SERVICES (Image 4)
      ══════════════════════════════════ */}
      <section className="bg-[#f5f7fa] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Comprehensive Crypto Exchange Listing Services We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
              We help projects with various crypto exchange listing services, tailored to meet their goals, specific
              needs, and budget requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {listingServices.map((svc) => (
              <div
                key={svc.title}
                className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <img src={svc.img} alt={svc.title} className="w-32 h-32 object-contain mb-5" />
                <h4 className="text-lg font-extrabold text-gray-900 mb-3">{svc.title}</h4>
                <p className="text-gray-500 text-md leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 6 — WHY LIST (Image 5)
      ══════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Why You Should List Your Coin on Top Exchanges
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-base leading-relaxed">
              Our experts highlight the key benefits of listing your crypto coin on top exchanges, including increased
              visibility, access to a larger investor base, enhanced liquidity, and greater credibility in the
              competitive crypto market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyList.map((item) => (
              <div
                key={item.title}
                className="bg-[#f5f7fa] rounded-2xl border border-gray-100 p-7 hover:shadow-md transition-shadow duration-300"
              >
                <h4 className="text-base font-extrabold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-md leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 7 — KEY BENEFITS (Image 6)
      ══════════════════════════════════ */}
      <section className="bg-[#f5f7fa] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Key Benefits of Our Crypto Exchange Listing Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-base leading-relaxed text-center">
              Zanthium Technosoft crypto exchange listing experts are committed to delivering crypto exchange listing
              services that provide projects with substantial benefits, including enhanced visibility, credibility, and
              market reach, ensuring the foundation for long-term success in the competitive crypto market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyBenefits.map((kb) => (
              <div
                key={kb.title}
                className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition-shadow duration-300"
              >
                <img src={kb.img} alt={kb.title} className="w-20 h-20 object-contain mb-5" />
                <h4 className="text-base font-extrabold text-gray-900 mb-2">{kb.title}</h4>
                <p className="text-gray-500 text-md leading-relaxed">{kb.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 8 — LAUNCHPADS (Image 7)
      ══════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Optimizing Crypto Coin Listings with Top Launchpads
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-base leading-relaxed text-center">
              We perform in-depth analysis and research to select the most effective launchpads for promoting our crypto
              coin listing solutions, ensuring maximum reach and engagement with the target audience.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {launchpads.map((lp) => (
              <div
                key={lp.name}
                className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center gap-3 hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={lp.logo}
                  alt={lp.name}
                  className="w-16 h-16 object-contain rounded-full"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.insertAdjacentHTML(
                        "afterbegin",
                        `<div style="width:64px;height:64px;border-radius:50%;background:#1e1e1e;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;color:#fff">${lp.name.slice(0, 2).toUpperCase()}</div>`
                      );
                    }
                  }}
                />
                <span className="text-md font-semibold text-gray-800 text-center">{lp.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 9 — INDUSTRIES (Image 8 top)
      ══════════════════════════════════ */}
      <section className="bg-[#f5f7fa] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Industries That Benefit from Our Coin Listing Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-base leading-relaxed text-center">
              Our team of crypto exchange listing experts is equipped with the knowledge and experience to offer coin
              listing solutions across multiple industries globally, ensuring tailored services that meet the unique
              needs of each sector.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center gap-3 min-w-[160px] hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-5xl"><img src={ind.icon} alt="" className="w-16 h-16 object-contain" /></span>
                <span className="text-md font-semibold text-gray-800 text-center">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 10 — BLOCKCHAIN NETWORKS (Image 8 bottom)
      ══════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Blockchain Networks We Support for Cryptocurrency Coin Listings
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-base leading-relaxed text-center">
              As a trusted cryptocurrency coin listing company, our blockchain specialists ensure seamless adaptability
              for cryptocurrencies across multiple blockchain networks, offering tailored solutions that meet the unique
              requirements of each network for optimal performance.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {networks.map((net) => (
              <div
                key={net.name}
                className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center gap-2 hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={net.logo}
                  alt={net.name}
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.insertAdjacentHTML(
                        "afterbegin",
                        `<div style="width:48px;height:48px;border-radius:50%;background:#6366f1;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;color:#fff">${net.name.slice(0, 2).toUpperCase()}</div>`
                      );
                    }
                  }}
                />
                <span className="text-xs font-semibold text-gray-700 text-center">{net.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}