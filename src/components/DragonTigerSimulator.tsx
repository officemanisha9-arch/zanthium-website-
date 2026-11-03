import { useState, useRef } from 'react'
import { Play, RotateCcw, Trophy, Flame, Shield, Sparkles, BarChart2 } from 'lucide-react'

type Choice = 'dragon' | 'tiger' | 'tie'
type Suit = '♥' | '♦' | '♠' | '♣'

interface PlayingCard {
  rank: string
  value: number // Ace=14, King=13, Queen=12, Jack=11, 10=10 ... 2=2
  suit: Suit
  color: 'red' | 'black'
}

interface RoundHistoryItem {
  id: string
  dragonCard: PlayingCard
  tigerCard: PlayingCard
  winner: Choice
  userChoice: Choice | null
  won: boolean
}

const SUITS: { suit: Suit; color: 'red' | 'black' }[] = [
  { suit: '♠', color: 'black' },
  { suit: '♥', color: 'red' },
  { suit: '♣', color: 'black' },
  { suit: '♦', color: 'red' },
]

const RANK_VALUES: { rank: string; value: number }[] = [
  { rank: 'A', value: 14 },
  { rank: 'K', value: 13 },
  { rank: 'Q', value: 12 },
  { rank: 'J', value: 11 },
  { rank: '10', value: 10 },
  { rank: '9', value: 9 },
  { rank: '8', value: 8 },
  { rank: '7', value: 7 },
  { rank: '6', value: 6 },
  { rank: '5', value: 5 },
  { rank: '4', value: 4 },
  { rank: '3', value: 3 },
  { rank: '2', value: 2 },
]

function getRandomCard(rankStr?: string): PlayingCard {
  const suitObj = SUITS[Math.floor(Math.random() * SUITS.length)]
  let rankObj: { rank: string; value: number }
  if (rankStr) {
    rankObj = RANK_VALUES.find((r) => r.rank === rankStr) || RANK_VALUES[0]
  } else {
    rankObj = RANK_VALUES[Math.floor(Math.random() * RANK_VALUES.length)]
  }
  return {
    rank: rankObj.rank,
    value: rankObj.value,
    suit: suitObj.suit,
    color: suitObj.color,
  }
}

function CardDisplay({
  card,
  isDealing,
  side,
  isWinner,
}: {
  card: PlayingCard | null
  isDealing: boolean
  side: 'dragon' | 'tiger'
  isWinner: boolean
}) {
  const isDragon = side === 'dragon'

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider">
        {isDragon ? (
          <span className="text-amber-400 flex items-center gap-1">
            <Shield className="w-3.5 h-3.5" /> Dragon Side
          </span>
        ) : (
          <span className="text-orange-400 flex items-center gap-1">
            <Flame className="w-3.5 h-3.5" /> Tiger Side
          </span>
        )}
      </div>

      <div
        className={`relative w-24 h-36 sm:w-28 sm:h-40 rounded-2xl border-2 transition-all duration-300 flex flex-col justify-between p-3 select-none ${
          isDealing
            ? 'animate-pulse scale-95 border-neutral-700 bg-neutral-900 shadow-inner'
            : isWinner
            ? isDragon
              ? 'border-amber-400 bg-gradient-to-br from-amber-50 to-amber-100 shadow-xl shadow-amber-500/20 scale-105 ring-4 ring-amber-400/40'
              : 'border-orange-500 bg-gradient-to-br from-orange-50 to-orange-100 shadow-xl shadow-orange-500/20 scale-105 ring-4 ring-orange-500/40'
            : 'border-neutral-700 bg-white shadow-lg'
        }`}
      >
        {isDealing || !card ? (
          <div className="w-full h-full flex items-center justify-center rounded-xl bg-gradient-to-br from-red-950 via-neutral-900 to-black border border-amber-500/30">
            <div className="w-10 h-10 rounded-full border border-amber-400/40 flex items-center justify-center">
              <span className="text-xs font-black text-amber-300">
                {isDragon ? '🐉' : '🐅'}
              </span>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <span
                className={`text-base sm:text-lg font-black leading-none ${
                  card.color === 'red' ? 'text-red-600' : 'text-neutral-900'
                }`}
              >
                {card.rank}
              </span>
              <span
                className={`text-sm ${
                  card.color === 'red' ? 'text-red-600' : 'text-neutral-900'
                }`}
              >
                {card.suit}
              </span>
            </div>

            <div
              className={`text-3xl sm:text-4xl text-center self-center my-auto ${
                card.color === 'red' ? 'text-red-600' : 'text-neutral-900'
              }`}
            >
              {card.suit}
            </div>

            <div className="flex items-center justify-between rotate-180">
              <span
                className={`text-base sm:text-lg font-black leading-none ${
                  card.color === 'red' ? 'text-red-600' : 'text-neutral-900'
                }`}
              >
                {card.rank}
              </span>
              <span
                className={`text-sm ${
                  card.color === 'red' ? 'text-red-600' : 'text-neutral-900'
                }`}
              >
                {card.suit}
              </span>
            </div>
          </>
        )}
      </div>

      <div className="text-center">
        <span className="text-xs text-neutral-400 font-semibold block">
          Rank: {card && !isDealing ? `${card.rank} (${card.value === 14 ? 'Highest' : card.value})` : '—'}
        </span>
      </div>
    </div>
  )
}

export default function DragonTigerSimulator() {
  const [dragonCard, setDragonCard] = useState<PlayingCard>({
    rank: 'K',
    value: 13,
    suit: '♠',
    color: 'black',
  })
  const [tigerCard, setTigerCard] = useState<PlayingCard>({
    rank: '8',
    value: 8,
    suit: '♦',
    color: 'red',
  })
  const [userChoice, setUserChoice] = useState<Choice>('dragon')
  const [isDealing, setIsDealing] = useState<boolean>(false)
  const [lastResult, setLastResult] = useState<{
    winner: Choice
    won: boolean
    explanation: string
  } | null>({
    winner: 'dragon',
    won: true,
    explanation: 'King ranks higher than 8. Dragon wins!',
  })
  const [history, setHistory] = useState<RoundHistoryItem[]>([
    {
      id: '1',
      dragonCard: { rank: 'K', value: 13, suit: '♠', color: 'black' },
      tigerCard: { rank: '8', value: 8, suit: '♦', color: 'red' },
      winner: 'dragon',
      userChoice: 'dragon',
      won: true,
    },
    {
      id: '2',
      dragonCard: { rank: '5', value: 5, suit: '♣', color: 'black' },
      tigerCard: { rank: 'Q', value: 12, suit: '♥', color: 'red' },
      winner: 'tiger',
      userChoice: 'tiger',
      won: true,
    },
    {
      id: '3',
      dragonCard: { rank: '7', value: 7, suit: '♥', color: 'red' },
      tigerCard: { rank: '7', value: 7, suit: '♠', color: 'black' },
      winner: 'tie',
      userChoice: 'dragon',
      won: false,
    },
    {
      id: '4',
      dragonCard: { rank: 'A', value: 14, suit: '♦', color: 'red' },
      tigerCard: { rank: '4', value: 4, suit: '♣', color: 'black' },
      winner: 'dragon',
      userChoice: 'dragon',
      won: true,
    },
  ])

  const dealIntervalRef = useRef<number | null>(null)

  const dealRound = (forcedDragonRank?: string, forcedTigerRank?: string) => {
    if (isDealing) return
    setIsDealing(true)

    let ticks = 0
    if (dealIntervalRef.current) clearInterval(dealIntervalRef.current)

    dealIntervalRef.current = window.setInterval(() => {
      ticks++
      setDragonCard(getRandomCard())
      setTigerCard(getRandomCard())

      if (ticks >= 8) {
        if (dealIntervalRef.current) clearInterval(dealIntervalRef.current)

        const finalDragon = getRandomCard(forcedDragonRank)
        const finalTiger = getRandomCard(forcedTigerRank)

        let winner: Choice = 'tie'
        let explanation = ''

        if (finalDragon.value > finalTiger.value) {
          winner = 'dragon'
          explanation = `${finalDragon.rank} ranks higher than ${finalTiger.rank}. Dragon wins!`
        } else if (finalTiger.value > finalDragon.value) {
          winner = 'tiger'
          explanation = `${finalTiger.rank} ranks higher than ${finalDragon.rank}. Tiger wins!`
        } else {
          winner = 'tie'
          explanation = `Both cards are rank ${finalDragon.rank}. The round is a Tie!`
        }

        const won = userChoice === winner

        setDragonCard(finalDragon)
        setTigerCard(finalTiger)
        setIsDealing(false)

        setLastResult({
          winner,
          won,
          explanation,
        })

        setHistory((prev) => [
          {
            id: Date.now().toString(),
            dragonCard: finalDragon,
            tigerCard: finalTiger,
            winner,
            userChoice,
            won,
          },
          ...prev.slice(0, 9),
        ])
      }
    }, 80)
  }

  const handleReset = () => {
    setDragonCard({ rank: 'K', value: 13, suit: '♠', color: 'black' })
    setTigerCard({ rank: '8', value: 8, suit: '♦', color: 'red' })
    setUserChoice('dragon')
    setIsDealing(false)
    setLastResult(null)
    setHistory([])
  }

  // Statistical counters
  const totalRounds = history.length
  const dragonWins = history.filter((h) => h.winner === 'dragon').length
  const tigerWins = history.filter((h) => h.winner === 'tiger').length
  const ties = history.filter((h) => h.winner === 'tie').length

  return (
    <div className="my-8 rounded-2xl overflow-hidden border border-amber-500/30 bg-gradient-to-b from-[#181512] via-[#0f0e0c] to-[#0a0908] text-white shadow-2xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-950/80 via-neutral-900 to-red-950/80 border-b border-amber-500/20 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 flex items-center justify-center text-lg shadow-md">
            🐉
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-wide flex items-center gap-2">
              Dragon Tiger Live Simulator
              <span className="text-[10px] uppercase font-extrabold tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded-full">
                Single Card Battle
              </span>
            </h3>
            <p className="text-xs text-neutral-400">
              Select Dragon, Tiger, or Tie &mdash; Higher card rank wins instantly
            </p>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="text-xs text-neutral-400 hover:text-white flex items-center gap-1.5 transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5 border border-transparent hover:border-neutral-700"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      <div className="p-6 sm:p-8 space-y-7">
        {/* Step 1: User Prediction */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
              Step 1: Choose Your Side
            </span>
            <span className="text-xs text-amber-400 font-medium">
              Rank Rule: Ace (High) &gt; K &gt; Q &gt; J &gt; 10... &gt; 2
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {/* Dragon Choice */}
            <button
              type="button"
              onClick={() => setUserChoice('dragon')}
              className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden ${
                userChoice === 'dragon'
                  ? 'border-amber-400 bg-amber-950/40 shadow-lg shadow-amber-500/10 ring-2 ring-amber-400/40'
                  : 'border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 hover:bg-neutral-800/40'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-amber-400 flex items-center gap-1.5">
                  🐉 Dragon
                </span>
                <span className="text-[11px] font-semibold text-amber-300/80 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-700/50">
                  Payout 1:1
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                Dragon card ranks higher than Tiger card
              </p>
              {userChoice === 'dragon' && (
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              )}
            </button>

            {/* Tie Choice */}
            <button
              type="button"
              onClick={() => setUserChoice('tie')}
              className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden ${
                userChoice === 'tie'
                  ? 'border-emerald-400 bg-emerald-950/40 shadow-lg shadow-emerald-500/10 ring-2 ring-emerald-400/40'
                  : 'border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 hover:bg-neutral-800/40'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                  🤝 Tie
                </span>
                <span className="text-[11px] font-semibold text-emerald-300/80 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-700/50">
                  Payout 8:1 / 11:1
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                Both cards share identical rank
              </p>
              {userChoice === 'tie' && (
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              )}
            </button>

            {/* Tiger Choice */}
            <button
              type="button"
              onClick={() => setUserChoice('tiger')}
              className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden ${
                userChoice === 'tiger'
                  ? 'border-orange-500 bg-orange-950/40 shadow-lg shadow-orange-500/10 ring-2 ring-orange-500/40'
                  : 'border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 hover:bg-neutral-800/40'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-orange-400 flex items-center gap-1.5">
                  🐅 Tiger
                </span>
                <span className="text-[11px] font-semibold text-orange-300/80 bg-orange-950/80 px-2 py-0.5 rounded border border-orange-700/50">
                  Payout 1:1
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                Tiger card ranks higher than Dragon card
              </p>
              {userChoice === 'tiger' && (
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              )}
            </button>
          </div>
        </div>

        {/* Step 2: Battle Arena */}
        <div className="p-6 rounded-2xl bg-neutral-950/90 border border-neutral-800/80 flex flex-col items-center justify-center gap-6">
          <div className="flex items-center justify-center gap-6 sm:gap-14 w-full">
            <CardDisplay
              card={dragonCard}
              isDealing={isDealing}
              side="dragon"
              isWinner={lastResult?.winner === 'dragon'}
            />

            <div className="flex flex-col items-center justify-center gap-1 select-none">
              <span className="text-2xl sm:text-3xl font-black text-amber-500/60">VS</span>
              <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest">
                Highest Wins
              </span>
            </div>

            <CardDisplay
              card={tigerCard}
              isDealing={isDealing}
              side="tiger"
              isWinner={lastResult?.winner === 'tiger'}
            />
          </div>

          {/* Deal Button */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => dealRound()}
              disabled={isDealing}
              className={`px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg transition-all flex items-center gap-2 cursor-pointer ${
                isDealing
                  ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 hover:from-amber-500 hover:to-orange-500 text-white shadow-amber-900/30 hover:scale-[1.02] active:scale-[0.98]'
              }`}
            >
              <Play className={`w-4 h-4 fill-white ${isDealing ? 'animate-spin' : ''}`} />
              <span>{isDealing ? 'Dealing Cards...' : 'Deal Cards (Random Deck)'}</span>
            </button>
          </div>

          {/* Preset Demonstrations from Blog Guide Section 5 */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs pt-2 border-t border-neutral-900 w-full">
            <span className="text-neutral-500 font-medium">Try Blog Examples:</span>
            <button
              onClick={() => dealRound('K', '8')}
              disabled={isDealing}
              className="px-2.5 py-1 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 rounded border border-neutral-800 hover:border-neutral-700 transition-colors cursor-pointer"
            >
              King vs 8 (Dragon wins)
            </button>
            <button
              onClick={() => dealRound('5', 'Q')}
              disabled={isDealing}
              className="px-2.5 py-1 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 rounded border border-neutral-800 hover:border-neutral-700 transition-colors cursor-pointer"
            >
              5 vs Queen (Tiger wins)
            </button>
            <button
              onClick={() => dealRound('7', '7')}
              disabled={isDealing}
              className="px-2.5 py-1 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 rounded border border-neutral-800 hover:border-neutral-700 transition-colors cursor-pointer"
            >
              7 vs 7 (Tie)
            </button>
            <button
              onClick={() => dealRound('A', '4')}
              disabled={isDealing}
              className="px-2.5 py-1 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 rounded border border-neutral-800 hover:border-neutral-700 transition-colors cursor-pointer"
            >
              Ace vs 4 (Dragon wins)
            </button>
          </div>
        </div>

        {/* Result Callout Banner */}
        {lastResult && (
          <div
            className={`p-4 rounded-xl border flex items-center justify-between gap-4 transition-all ${
              lastResult.won
                ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                : 'bg-red-950/40 border-red-500/40 text-red-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                  lastResult.won
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-red-500/20 text-red-400'
                }`}
              >
                {lastResult.won ? (
                  <Trophy className="w-5 h-5" />
                ) : (
                  <Sparkles className="w-5 h-5" />
                )}
              </div>
              <div>
                <p className="text-sm font-bold">
                  {lastResult.won ? '🎉 Correct Prediction!' : '❌ Missed Prediction'}
                </p>
                <p className="text-xs opacity-80">{lastResult.explanation}</p>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[11px] uppercase tracking-wider font-semibold opacity-70 block">
                Winner
              </span>
              <span className="text-sm font-extrabold uppercase">
                {lastResult.winner === 'dragon'
                  ? '🐉 Dragon Wins'
                  : lastResult.winner === 'tiger'
                  ? '🐅 Tiger Wins'
                  : '🤝 Tie'}
              </span>
            </div>
          </div>
        )}

        {/* History & Frequency Tracker */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* History */}
          <div className="bg-neutral-900/60 p-4 rounded-xl border border-neutral-800 space-y-2.5">
            <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" /> Recent Rounds History
            </span>
            {history.length === 0 ? (
              <p className="text-xs text-neutral-500 italic">No rounds played yet.</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {history.map((item) => (
                  <div
                    key={item.id}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 border ${
                      item.winner === 'dragon'
                        ? 'bg-amber-950/60 text-amber-300 border-amber-600/40'
                        : item.winner === 'tiger'
                        ? 'bg-orange-950/60 text-orange-300 border-orange-600/40'
                        : 'bg-emerald-950/60 text-emerald-300 border-emerald-600/40'
                    }`}
                  >
                    <span>
                      D:{item.dragonCard.rank} vs T:{item.tigerCard.rank}
                    </span>
                    <span className="text-[10px] uppercase font-bold opacity-80">
                      {item.winner === 'dragon' ? 'D' : item.winner === 'tiger' ? 'T' : 'Tie'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Stats Tracker */}
          <div className="bg-neutral-900/60 p-4 rounded-xl border border-neutral-800 space-y-2.5">
            <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider flex items-center gap-1.5">
              <BarChart2 className="w-3.5 h-3.5" /> Outcome Frequency ({totalRounds} Rounds)
            </span>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 rounded-lg bg-amber-950/30 border border-amber-900/40">
                <span className="text-neutral-400 block text-[10px]">Dragon</span>
                <span className="text-sm font-bold text-amber-400">{dragonWins}</span>
                <span className="text-[10px] text-neutral-500 block">
                  {totalRounds > 0 ? `${Math.round((dragonWins / totalRounds) * 100)}%` : '46.3%'}
                </span>
              </div>
              <div className="p-2 rounded-lg bg-emerald-950/30 border border-emerald-900/40">
                <span className="text-neutral-400 block text-[10px]">Tie</span>
                <span className="text-sm font-bold text-emerald-400">{ties}</span>
                <span className="text-[10px] text-neutral-500 block">
                  {totalRounds > 0 ? `${Math.round((ties / totalRounds) * 100)}%` : '7.4%'}
                </span>
              </div>
              <div className="p-2 rounded-lg bg-orange-950/30 border border-orange-900/40">
                <span className="text-neutral-400 block text-[10px]">Tiger</span>
                <span className="text-sm font-bold text-orange-400">{tigerWins}</span>
                <span className="text-[10px] text-neutral-500 block">
                  {totalRounds > 0 ? `${Math.round((tigerWins / totalRounds) * 100)}%` : '46.3%'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
