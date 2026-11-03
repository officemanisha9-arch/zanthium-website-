import { useState } from "react";

const NavratriPopup = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 right-4 z-[9999] w-[calc(100%-42px)] max-w-[520px] sm:bottom-6 sm:right-6">
            <div
                className="relative overflow-hidden rounded-2xl border border-[#e5cfb5] shadow-xl"
                style={{
                    backgroundImage: "url('/popupbottom.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Light overlay for readability */}
                <div className="absolute inset-0 bg-[#fff8eb]/20" />

                {/* Close button */}
                <button
                    type="button"
                    onClick={() => setIsVisible(false)}
                    aria-label="Close Navratri popup"
                    className="absolute right-2 top-2 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-black/30 text-lg text-white hover:bg-black/50"
                >
                    ×
                </button>

                {/* Content */}
                <div className="relative z-10 w-[62%] p-4 sm:p-6">
                    <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#bd1836] sm:text-[10px]">
                        ✨ Shubh Navratri
                    </p>

                    <h3 className="mt-2 text-xl font-extrabold leading-tight text-[#71172b] sm:text-2xl">
                        Celebrate the Divine
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#51453e] sm:text-sm">
                        May Maa Durga bless you with joy, strength and prosperity.
                    </p>

                    <a
                        href="/contact"
                        className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#941b36] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#74142a]"
                    >
                        Celebrate With Us <span>→</span>
                    </a>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#d8a64e]" />
            </div>

            <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }
          div.fixed {
            animation: slideUp 0.4s ease-out;
          }
        }
      `}</style>
        </div>
    );
};

export default NavratriPopup;