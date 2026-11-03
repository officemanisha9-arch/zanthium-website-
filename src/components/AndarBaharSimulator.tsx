import { useState, useEffect, useRef } from 'react'
import { Play, RotateCcw, Trophy, ChevronRight } from 'lucide-react'

type Suit = '♥' | '♦' | '♠' | '♣'
type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A'

interface Card {
  id: string
  rank: Rank
  suit: Suit
  color: 'red' | 'black'
}

const SUITS: { symbol: Suit; color: 'red' | 'black' }[] = [
  { symbol: '♥', color: 'red' },
  { symbol: '♦', color: 'red' },
  { symbol: '♠', color: 'black' },
  { symbol: '♣', color: 'black' },
]

const RANKS: Rank[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

function createDeck(): Card[] {
  const deck: Card[] = []
  for (const suitObj of SUITS) {
    for (const rank of RANKS) {
      deck.push({
        id: `${rank}-${suitObj.symbol}-${Math.random()}`,
        rank,
        suit: suitObj.symbol,
        color: suitObj.color,
      })
    }
  }
  return shuffleDeck(deck)
}

function shuffleDeck(deck: Card[]): Card[] {
  const array = [...deck]
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export default function AndarBaharSimulator() {
  const [deck, setDeck] = useState<Card[]>([])
  const [middleCard, setMiddleCard] = useState<Card | null>(null)
  const [andarCards, setAndarCards] = useState<Card[]>([])
  const [baharCards, setBaharCards] = useState<Card[]>([])
  const [turn, setTurn] = useState<'andar' | 'bahar'>('andar')
  const [userChoice, setUserChoice] = useState<'andar' | 'bahar' | null>(null)
  const [winner, setWinner] = useState<'andar' | 'bahar' | null>(null)
  const [winningCard, setWinningCard] = useState<Card | null>(null)
  const [isAutoDealing, setIsAutoDealing] = useState(false)
  const autoDealRef = useRef<number | null>(null)

  // Initialize preset game matching Section 4 example (King of Hearts middle)
  const initGame = (customMiddleRank?: Rank) => {
    if (autoDealRef.current) {
      clearInterval(autoDealRef.current)
      autoDealRef.current = null
    }
    setIsAutoDealing(false)
    setWinner(null)
    setWinningCard(null)
    setAndarCards([])
    setBaharCards([])
    setTurn('andar')

    const newDeck = createDeck()

    let chosenMiddle: Card
    if (customMiddleRank) {
      const idx = newDeck.findIndex((c) => c.rank === customMiddleRank)
      if (idx !== -1) {
        chosenMiddle = newDeck.splice(idx, 1)[0]
      } else {
        chosenMiddle = newDeck.pop()!
      }
    } else {
      // Default to King of Hearts if possible for instant familiarity with the guide
      const kIndex = newDeck.findIndex((c) => c.rank === 'K' && c.suit === '♥')
      if (kIndex !== -1) {
        chosenMiddle = newDeck.splice(kIndex, 1)[0]
      } else {
        chosenMiddle = newDeck.pop()!
      }
    }

    setMiddleCard(chosenMiddle)
    setDeck(newDeck)
  }

  useEffect(() => {
    initGame()
    return () => {
      if (autoDealRef.current) clearInterval(autoDealRef.current)
    }
  }, [])

  // Deal single card
  const dealSingleCard = () => {
    if (winner || !middleCard || deck.length === 0) return

    const cardToDeal = deck[0]
    const remainingDeck = deck.slice(1)
    setDeck(remainingDeck)

    const isMatch = cardToDeal.rank === middleCard.rank

    if (turn === 'andar') {
      setAndarCards((prev) => [...prev, cardToDeal])
      if (isMatch) {
        setWinner('andar')
        setWinningCard(cardToDeal)
        setIsAutoDealing(false)
      } else {
        setTurn('bahar')
      }
    } else {
      setBaharCards((prev) => [...prev, cardToDeal])
      if (isMatch) {
        setWinner('bahar')
        setWinningCard(cardToDeal)
        setIsAutoDealing(false)
      } else {
        setTurn('andar')
      }
    }
  }

  // Auto deal effect
  useEffect(() => {
    if (isAutoDealing && !winner && deck.length > 0) {
      autoDealRef.current = window.setInterval(() => {
        dealSingleCard()
      }, 500)
    } else {
      if (autoDealRef.current) {
        clearInterval(autoDealRef.current)
        autoDealRef.current = null
      }
    }
    return () => {
      if (autoDealRef.current) {
        clearInterval(autoDealRef.current)
      }
    }
  }, [isAutoDealing, winner, deck, turn, middleCard])

  const totalCardsDealt = andarCards.length + baharCards.length

  return (
    <div className="my-8 rounded-2xl overflow-hidden border-2 border-emerald-900 bg-gradient-to-b from-[#0b331e] via-[#082816] to-[#04160c] text-white shadow-xl font-sans">
      {/* Simulator Top Header */}
      <div className="bg-[#051c10] border-b border-emerald-800/80 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-yellow-400 text-black flex items-center justify-center font-black text-sm shadow-md">
            AB
          </div>
          <div>
            <h4 className="font-extrabold text-base sm:text-lg text-white tracking-wide flex items-center gap-2">
              Interactive Andar Bahar Simulator
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                Live Demo
              </span>
            </h4>
            <p className="text-xs text-emerald-200/80">
              Pick your side, click deal, and observe the alternate card matching mechanics
            </p>
          </div>
        </div>

        <button
          onClick={() => initGame()}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 border border-emerald-700/50 text-xs font-semibold text-emerald-100 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>New Round</span>
        </button>
      </div>

      <div className="p-5 sm:p-7 space-y-6">
        {/* Step 1: Pick Prediction & Middle Card Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
          {/* User Prediction Selector (5 cols) */}
          <div className="md:col-span-5 bg-black/30 backdrop-blur-xs p-4 rounded-xl border border-emerald-700/40">
            <label className="text-xs font-bold uppercase tracking-wider text-yellow-400 block mb-2">
              1. Choose Your Side (Prediction):
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                disabled={totalCardsDealt > 0 && !winner}
                onClick={() => setUserChoice('andar')}
                className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                  userChoice === 'andar'
                    ? 'bg-red-700 border-yellow-400 ring-2 ring-yellow-400/50 text-white font-black'
                    : 'bg-red-950/40 border-red-800/60 text-red-200 hover:bg-red-900/50'
                } ${totalCardsDealt > 0 && !winner ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                <div className="text-base font-black">ANDAR</div>
                <div className="text-[10px] text-red-300 tracking-wider">Inside (First)</div>
              </button>

              <button
                disabled={totalCardsDealt > 0 && !winner}
                onClick={() => setUserChoice('bahar')}
                className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                  userChoice === 'bahar'
                    ? 'bg-blue-700 border-yellow-400 ring-2 ring-yellow-400/50 text-white font-black'
                    : 'bg-blue-950/40 border-blue-800/60 text-blue-200 hover:bg-blue-900/50'
                } ${totalCardsDealt > 0 && !winner ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                <div className="text-base font-black">BAHAR</div>
                <div className="text-[10px] text-blue-300 tracking-wider">Outside (Second)</div>
              </button>
            </div>
            {userChoice ? (
              <p className="text-[11px] text-emerald-300 mt-2 text-center">
                You predicted <strong className="text-yellow-400 uppercase">{userChoice}</strong>.
              </p>
            ) : (
              <p className="text-[11px] text-gray-400 mt-2 text-center">
                Select Andar or Bahar to test your intuition!
              </p>
            )}
          </div>

          {/* Middle Main Card Spotlight (7 cols) */}
          <div className="md:col-span-7 flex flex-col sm:flex-row items-center justify-center gap-5 bg-black/40 p-4 rounded-xl border border-yellow-500/30">
            <div className="text-center sm:text-left">
              <span className="text-[11px] uppercase tracking-wider font-bold text-yellow-400 block mb-0.5">
                Main Card in Center (Joker)
              </span>
              <h5 className="text-sm font-semibold text-gray-200">
                Target Rank to Match: <span className="text-yellow-300 font-extrabold text-base">{middleCard?.rank}</span>
              </h5>
              <p className="text-[11px] text-gray-400 mt-1 max-w-xs">
                Deal will alternate between Andar and Bahar until any {middleCard?.rank} appears!
              </p>
            </div>

            {/* Glowing Middle Playing Card */}
            {middleCard && (
              <div className="relative group">
                <div className="absolute -inset-1 rounded-xl bg-yellow-400/40 blur-xs"></div>
                <div
                  className={`relative w-20 h-28 rounded-xl bg-white border-2 border-yellow-400 flex flex-col justify-between p-2 shadow-2xl select-none ${
                    middleCard.color === 'red' ? 'text-red-600' : 'text-gray-900'
                  }`}
                >
                  <div className="text-left font-black leading-none text-base">
                    <div>{middleCard.rank}</div>
                    <div className="text-sm">{middleCard.suit}</div>
                  </div>
                  <div className="text-center text-3xl font-extrabold leading-none">
                    {middleCard.suit}
                  </div>
                  <div className="text-right font-black leading-none rotate-180 text-base">
                    <div>{middleCard.rank}</div>
                    <div className="text-sm">{middleCard.suit}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Visual Deal Table: ANDAR (Left) vs BAHAR (Right) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* ANDAR Zone */}
          <div
            className={`rounded-xl p-4 border transition-all min-h-[170px] ${
              winner === 'andar'
                ? 'bg-red-950/70 border-yellow-400 ring-2 ring-yellow-400'
                : turn === 'andar' && !winner
                ? 'bg-red-950/40 border-red-500 ring-1 ring-red-400/50'
                : 'bg-black/30 border-red-950/80'
            }`}
          >
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-red-900/50">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-600 inline-block"></span>
                <span className="font-extrabold text-sm tracking-wider text-red-200">
                  ANDAR (INSIDE)
                </span>
              </div>
              <span className="text-xs text-red-300 font-mono">
                {andarCards.length} {andarCards.length === 1 ? 'card' : 'cards'}
              </span>
            </div>

            {/* Dealt Cards Horizontal Scroll/Wrap */}
            <div className="flex flex-wrap gap-2 items-center min-h-[90px]">
              {andarCards.length === 0 ? (
                <div className="text-xs text-emerald-300/40 italic py-6 w-full text-center">
                  Waiting for first deal...
                </div>
              ) : (
                andarCards.map((card, idx) => {
                  const isWinning = winner === 'andar' && idx === andarCards.length - 1
                  return (
                    <div
                      key={card.id}
                      className={`w-14 h-20 rounded-lg bg-white border flex flex-col justify-between p-1 shadow-md transition-all select-none ${
                        card.color === 'red' ? 'text-red-600' : 'text-gray-900'
                      } ${
                        isWinning
                          ? 'border-yellow-400 ring-3 ring-yellow-400 scale-105 animate-bounce'
                          : 'border-gray-300'
                      }`}
                    >
                      <div className="text-left font-black text-xs leading-none">
                        <div>{card.rank}</div>
                        <div className="text-[10px]">{card.suit}</div>
                      </div>
                      <div className="text-center text-lg leading-none font-bold">
                        {card.suit}
                      </div>
                      <div className="text-right font-black text-xs leading-none rotate-180">
                        <div>{card.rank}</div>
                        <div className="text-[10px]">{card.suit}</div>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          </div>

          {/* BAHAR Zone */}
          <div
            className={`rounded-xl p-4 border transition-all min-h-[170px] ${
              winner === 'bahar'
                ? 'bg-blue-950/70 border-yellow-400 ring-2 ring-yellow-400'
                : turn === 'bahar' && !winner
                ? 'bg-blue-950/40 border-blue-500 ring-1 ring-blue-400/50'
                : 'bg-black/30 border-blue-950/80'
            }`}
          >
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-blue-900/50">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-600 inline-block"></span>
                <span className="font-extrabold text-sm tracking-wider text-blue-200">
                  BAHAR (OUTSIDE)
                </span>
              </div>
              <span className="text-xs text-blue-300 font-mono">
                {baharCards.length} {baharCards.length === 1 ? 'card' : 'cards'}
              </span>
            </div>

            {/* Dealt Cards Horizontal Scroll/Wrap */}
            <div className="flex flex-wrap gap-2 items-center min-h-[90px]">
              {baharCards.length === 0 ? (
                <div className="text-xs text-emerald-300/40 italic py-6 w-full text-center">
                  Waiting for first deal...
                </div>
              ) : (
                baharCards.map((card, idx) => {
                  const isWinning = winner === 'bahar' && idx === baharCards.length - 1
                  return (
                    <div
                      key={card.id}
                      className={`w-14 h-20 rounded-lg bg-white border flex flex-col justify-between p-1 shadow-md transition-all select-none ${
                        card.color === 'red' ? 'text-red-600' : 'text-gray-900'
                      } ${
                        isWinning
                          ? 'border-yellow-400 ring-3 ring-yellow-400 scale-105 animate-bounce'
                          : 'border-gray-300'
                      }`}
                    >
                      <div className="text-left font-black text-xs leading-none">
                        <div>{card.rank}</div>
                        <div className="text-[10px]">{card.suit}</div>
                      </div>
                      <div className="text-center text-lg leading-none font-bold">
                        {card.suit}
                      </div>
                      <div className="text-right font-black text-xs leading-none rotate-180">
                        <div>{card.rank}</div>
                        <div className="text-[10px]">{card.suit}</div>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          </div>
        </div>

        {/* ── Status Announcement & Result Banner ── */}
        {winner ? (
          <div className="p-4 rounded-xl bg-gradient-to-r from-yellow-500/20 via-yellow-500/30 to-yellow-500/20 border-2 border-yellow-400 text-center animate-fade-in space-y-2">
            <div className="flex items-center justify-center gap-2 text-yellow-300 font-extrabold text-lg">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span>ROUND FINISHED: {winner.toUpperCase()} WINS!</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-100">
              Matching <strong className="text-yellow-300 font-black">{middleCard?.rank}</strong> (
              {winningCard?.rank}
              {winningCard?.suit}) landed on <strong>{winner.toUpperCase()}</strong> after {totalCardsDealt} total cards!
            </p>
            {userChoice && (
              <div className="inline-block mt-1 px-3 py-1 rounded-full text-xs font-bold bg-black/40 text-yellow-300 border border-yellow-400/50">
                {userChoice === winner ? (
                  <span>🎯 Amazing! Your prediction on {userChoice.toUpperCase()} was correct!</span>
                ) : (
                  <span>Your prediction was {userChoice.toUpperCase()}. Better luck next round!</span>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-between text-xs text-emerald-200/90 bg-black/20 px-4 py-2.5 rounded-lg border border-emerald-800/40">
            <span>Next deal side: <strong className="text-yellow-400 uppercase">{turn}</strong></span>
            <span>Cards in deck remaining: <strong>{deck.length}</strong></span>
            <span>Total dealt: <strong>{totalCardsDealt}</strong></span>
          </div>
        )}

        {/* ── Action Buttons: Manual Deal & Auto Deal ── */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {!winner ? (
            <>
              <button
                onClick={dealSingleCard}
                disabled={isAutoDealing}
                className="px-5 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-gray-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-md hover:scale-105 transition-all cursor-pointer disabled:opacity-50"
              >
                <span>Deal Next Card ({turn.toUpperCase()})</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsAutoDealing(!isAutoDealing)}
                className={`px-5 py-2.5 rounded-xl border text-xs font-bold tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                  isAutoDealing
                    ? 'bg-amber-600 text-white border-amber-400 animate-pulse'
                    : 'bg-emerald-800 hover:bg-emerald-700 text-emerald-100 border-emerald-600'
                }`}
              >
                <Play className="w-3.5 h-3.5" />
                <span>{isAutoDealing ? 'Pause Auto Deal' : 'Auto Deal Round'}</span>
              </button>
            </>
          ) : (
            <button
              onClick={() => initGame()}
              className="px-6 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-gray-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Play Next Round</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
