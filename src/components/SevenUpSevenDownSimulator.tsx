import { useState, useRef } from 'react'
import { Play, RotateCcw, Trophy, Dices, ArrowDown, ArrowUp, Star, Sparkles, BarChart2 } from 'lucide-react'

type OutcomeType = '7down' | '7exact' | '7up'

interface RollHistoryItem {
  id: string
  die1: number
  die2: number
  total: number
  outcome: OutcomeType
  userPrediction?: OutcomeType | null
  won?: boolean
}

// Render pips on a die face
function DieFace({ value, rolling }: { value: number; rolling: boolean }) {
  const getPips = (val: number) => {
    switch (val) {
      case 1:
        return [
          { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
        ]
      case 2:
        return [
          { top: '25%', left: '25%', transform: 'translate(-50%, -50%)' },
          { top: '75%', left: '75%', transform: 'translate(-50%, -50%)' },
        ]
      case 3:
        return [
          { top: '22%', left: '22%', transform: 'translate(-50%, -50%)' },
          { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
          { top: '78%', left: '78%', transform: 'translate(-50%, -50%)' },
        ]
      case 4:
        return [
          { top: '25%', left: '25%', transform: 'translate(-50%, -50%)' },
          { top: '25%', left: '75%', transform: 'translate(-50%, -50%)' },
          { top: '75%', left: '25%', transform: 'translate(-50%, -50%)' },
          { top: '75%', left: '75%', transform: 'translate(-50%, -50%)' },
        ]
      case 5:
        return [
          { top: '22%', left: '22%', transform: 'translate(-50%, -50%)' },
          { top: '22%', left: '78%', transform: 'translate(-50%, -50%)' },
          { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
          { top: '78%', left: '22%', transform: 'translate(-50%, -50%)' },
          { top: '78%', left: '78%', transform: 'translate(-50%, -50%)' },
        ]
      case 6:
        return [
          { top: '22%', left: '25%', transform: 'translate(-50%, -50%)' },
          { top: '50%', left: '25%', transform: 'translate(-50%, -50%)' },
          { top: '78%', left: '25%', transform: 'translate(-50%, -50%)' },
          { top: '22%', left: '75%', transform: 'translate(-50%, -50%)' },
          { top: '50%', left: '75%', transform: 'translate(-50%, -50%)' },
          { top: '78%', left: '75%', transform: 'translate(-50%, -50%)' },
        ]
      default:
        return []
    }
  }

  return (
    <div
      className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-white via-neutral-100 to-neutral-200 rounded-2xl shadow-lg border-2 border-neutral-300 flex items-center justify-center transition-transform duration-300 ${
        rolling ? 'animate-bounce scale-105' : 'hover:scale-105'
      }`}
      style={{
        boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.9), 0 8px 16px rgba(0,0,0,0.25)',
      }}
    >
      {getPips(value).map((pos, idx) => (
        <span
          key={idx}
          className="absolute w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-gradient-to-br from-red-600 to-red-800 shadow-inner"
          style={pos}
        />
      ))}
    </div>
  )
}

export default function SevenUpSevenDownSimulator() {
  const [die1, setDie1] = useState<number>(3)
  const [die2, setDie2] = useState<number>(4)
  const [isRolling, setIsRolling] = useState<boolean>(false)
  const [userPrediction, setUserPrediction] = useState<OutcomeType | null>('7down')
  const [history, setHistory] = useState<RollHistoryItem[]>([
    { id: '1', die1: 1, die2: 4, total: 5, outcome: '7down', userPrediction: '7down', won: true },
    { id: '2', die1: 3, die2: 4, total: 7, outcome: '7exact', userPrediction: '7up', won: false },
    { id: '3', die1: 5, die2: 6, total: 11, outcome: '7up', userPrediction: '7up', won: true },
  ])
  const [lastResult, setLastResult] = useState<{
    total: number
    outcome: OutcomeType
    won: boolean | null
  } | null>({
    total: 7,
    outcome: '7exact',
    won: null,
  })

  const rollIntervalRef = useRef<number | null>(null)

  const getOutcomeType = (total: number): OutcomeType => {
    if (total < 7) return '7down'
    if (total === 7) return '7exact'
    return '7up'
  }

  const rollDice = (forcedDie1?: number, forcedDie2?: number) => {
    if (isRolling) return

    setIsRolling(true)
    let counter = 0
    const maxTicks = 12

    if (rollIntervalRef.current) {
      clearInterval(rollIntervalRef.current)
    }

    rollIntervalRef.current = window.setInterval(() => {
      counter++
      const temp1 = Math.floor(Math.random() * 6) + 1
      const temp2 = Math.floor(Math.random() * 6) + 1
      setDie1(temp1)
      setDie2(temp2)

      if (counter >= maxTicks) {
        if (rollIntervalRef.current) clearInterval(rollIntervalRef.current)

        const final1 = forcedDie1 ?? Math.floor(Math.random() * 6) + 1
        const final2 = forcedDie2 ?? Math.floor(Math.random() * 6) + 1
        const total = final1 + final2
        const outcome = getOutcomeType(total)
        const won = userPrediction ? userPrediction === outcome : null

        setDie1(final1)
        setDie2(final2)
        setIsRolling(false)

        setLastResult({
          total,
          outcome,
          won,
        })

        setHistory((prev) => [
          {
            id: Date.now().toString(),
            die1: final1,
            die2: final2,
            total,
            outcome,
            userPrediction,
            won: won ?? undefined,
          },
          ...prev.slice(0, 7),
        ])
      }
    }, 70)
  }

  const handleReset = () => {
    setDie1(3)
    setDie2(4)
    setIsRolling(false)
    setUserPrediction('7down')
    setLastResult(null)
    setHistory([])
  }

  const totalSum = die1 + die2
  const currentOutcome = getOutcomeType(totalSum)

  // Probability stats
  const totalRounds = history.length
  const downCount = history.filter((h) => h.outcome === '7down').length
  const exactCount = history.filter((h) => h.outcome === '7exact').length
  const upCount = history.filter((h) => h.outcome === '7up').length

  return (
    <div className="my-8 rounded-2xl overflow-hidden border border-amber-500/30 bg-gradient-to-b from-[#161922] via-[#0d1117] to-[#0a0d14] text-white shadow-2xl">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-red-950/80 via-neutral-900 to-amber-950/80 border-b border-amber-500/20 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-red-600 flex items-center justify-center shadow-md">
            <Dices className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-wide flex items-center gap-2">
              7 Up 7 Down Interactive Simulator
              <span className="text-[10px] uppercase font-extrabold tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded-full">
                Live Engine
              </span>
            </h3>
            <p className="text-xs text-neutral-400">
              Select an outcome, roll two dice, and test the 41.67% vs 16.67% probability
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
        {/* Step 1: User Prediction Selector */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
              Step 1: Choose Your Outcome
            </span>
            <span className="text-xs text-amber-400 font-medium">
              Target Sum Rule
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {/* 7 Down */}
            <button
              type="button"
              onClick={() => setUserPrediction('7down')}
              className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden ${
                userPrediction === '7down'
                  ? 'border-blue-500 bg-blue-950/40 shadow-lg shadow-blue-500/10 ring-2 ring-blue-500/30'
                  : 'border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 hover:bg-neutral-800/40'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-blue-400 flex items-center gap-1.5">
                  <ArrowDown className="w-4 h-4" /> 7 Down
                </span>
                <span className="text-[11px] font-semibold text-neutral-400 bg-neutral-800 px-2 py-0.5 rounded">
                  Totals 2 - 6
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                15 / 36 Combinations (41.67%)
              </p>
              {userPrediction === '7down' && (
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              )}
            </button>

            {/* Exactly 7 */}
            <button
              type="button"
              onClick={() => setUserPrediction('7exact')}
              className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden ${
                userPrediction === '7exact'
                  ? 'border-amber-500 bg-amber-950/40 shadow-lg shadow-amber-500/10 ring-2 ring-amber-500/30'
                  : 'border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 hover:bg-neutral-800/40'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-amber-400 flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-amber-400" /> Exactly 7
                </span>
                <span className="text-[11px] font-semibold text-neutral-400 bg-neutral-800 px-2 py-0.5 rounded">
                  Total = 7
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                6 / 36 Combinations (16.67%)
              </p>
              {userPrediction === '7exact' && (
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              )}
            </button>

            {/* 7 Up */}
            <button
              type="button"
              onClick={() => setUserPrediction('7up')}
              className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden ${
                userPrediction === '7up'
                  ? 'border-emerald-500 bg-emerald-950/40 shadow-lg shadow-emerald-500/10 ring-2 ring-emerald-500/30'
                  : 'border-neutral-800 bg-neutral-900/60 hover:border-neutral-700 hover:bg-neutral-800/40'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                  <ArrowUp className="w-4 h-4" /> 7 Up
                </span>
                <span className="text-[11px] font-semibold text-neutral-400 bg-neutral-800 px-2 py-0.5 rounded">
                  Totals 8 - 12
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                15 / 36 Combinations (41.67%)
              </p>
              {userPrediction === '7up' && (
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              )}
            </button>
          </div>
        </div>

        {/* Dice Rolling Arena */}
        <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 flex flex-col items-center justify-center gap-6 relative">
          <div className="flex items-center justify-center gap-6 sm:gap-10">
            <div className="text-center space-y-2">
              <DieFace value={die1} rolling={isRolling} />
              <span className="text-[11px] font-semibold text-neutral-400 block">Die 1</span>
            </div>

            <div className="text-3xl font-extrabold text-neutral-500">+</div>

            <div className="text-center space-y-2">
              <DieFace value={die2} rolling={isRolling} />
              <span className="text-[11px] font-semibold text-neutral-400 block">Die 2</span>
            </div>

            <div className="text-3xl font-extrabold text-neutral-500">=</div>

            {/* Sum Display */}
            <div className="text-center space-y-2">
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex flex-col items-center justify-center font-extrabold text-2xl sm:text-3xl shadow-lg border-2 transition-all ${
                  currentOutcome === '7exact'
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-amber-500/20'
                    : currentOutcome === '7down'
                    ? 'bg-blue-500/20 border-blue-500 text-blue-300 shadow-blue-500/20'
                    : 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-emerald-500/20'
                }`}
              >
                {totalSum}
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  {currentOutcome === '7exact' ? 'Lucky 7' : currentOutcome === '7down' ? '7 Down' : '7 Up'}
                </span>
              </div>
              <span className="text-[11px] font-semibold text-neutral-400 block">Total</span>
            </div>
          </div>

          {/* Roll Action Button */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full">
            <button
              onClick={() => rollDice()}
              disabled={isRolling}
              className={`px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-lg transition-all flex items-center gap-2 cursor-pointer ${
                isRolling
                  ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-red-600 via-amber-600 to-red-600 hover:from-red-500 hover:to-amber-500 text-white shadow-red-900/30 hover:scale-[1.02] active:scale-[0.98]'
              }`}
            >
              <Play className={`w-4 h-4 fill-white ${isRolling ? 'animate-spin' : ''}`} />
              <span>{isRolling ? 'Rolling Dice...' : 'Roll Dice (Random)'}</span>
            </button>
          </div>

          {/* Preset Demonstrations from Blog Guide */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs pt-2 border-t border-neutral-900 w-full">
            <span className="text-neutral-500 font-medium">Try Blog Examples:</span>
            <button
              onClick={() => rollDice(1, 4)}
              disabled={isRolling}
              className="px-2.5 py-1 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 rounded border border-neutral-800 hover:border-neutral-700 transition-colors cursor-pointer"
            >
              1 + 4 = 5 (7 Down)
            </button>
            <button
              onClick={() => rollDice(3, 4)}
              disabled={isRolling}
              className="px-2.5 py-1 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 rounded border border-neutral-800 hover:border-neutral-700 transition-colors cursor-pointer"
            >
              3 + 4 = 7 (Exactly 7)
            </button>
            <button
              onClick={() => rollDice(5, 6)}
              disabled={isRolling}
              className="px-2.5 py-1 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 rounded border border-neutral-800 hover:border-neutral-700 transition-colors cursor-pointer"
            >
              5 + 6 = 11 (7 Up)
            </button>
          </div>
        </div>

        {/* Result Callout Banner */}
        {lastResult && (
          <div
            className={`p-4 rounded-xl border flex items-center justify-between gap-4 transition-all ${
              lastResult.won === true
                ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                : lastResult.won === false
                ? 'bg-red-950/40 border-red-500/40 text-red-200'
                : 'bg-neutral-900/60 border-neutral-800 text-neutral-300'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                  lastResult.won === true
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : lastResult.won === false
                    ? 'bg-red-500/20 text-red-400'
                    : 'bg-neutral-800 text-neutral-400'
                }`}
              >
                {lastResult.won === true ? (
                  <Trophy className="w-5 h-5" />
                ) : (
                  <Sparkles className="w-5 h-5" />
                )}
              </div>
              <div>
                <p className="text-sm font-bold">
                  {lastResult.won === true
                    ? '🎉 Correct Prediction!'
                    : lastResult.won === false
                    ? '❌ Missed Prediction'
                    : 'Roll Completed'}
                </p>
                <p className="text-xs opacity-80">
                  Total was <strong>{lastResult.total}</strong> ({die1} + {die2}) &rarr; Outcome is{' '}
                  <span className="uppercase font-semibold">
                    {lastResult.outcome === '7exact'
                      ? 'Exactly 7'
                      : lastResult.outcome === '7down'
                      ? '7 Down'
                      : '7 Up'}
                  </span>
                </p>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[11px] uppercase tracking-wider font-semibold opacity-70 block">
                Category
              </span>
              <span className="text-sm font-extrabold">
                {lastResult.outcome === '7exact'
                  ? 'Lucky 7 (1:5)'
                  : lastResult.outcome === '7down'
                  ? '7 Down (1:1)'
                  : '7 Up (1:1)'}
              </span>
            </div>
          </div>
        )}

        {/* Live Rolling History & Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Recent Roll Log */}
          <div className="bg-neutral-900/60 p-4 rounded-xl border border-neutral-800 space-y-2.5">
            <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider flex items-center gap-1.5">
              <Dices className="w-3.5 h-3.5" /> Recent Roll History
            </span>
            {history.length === 0 ? (
              <p className="text-xs text-neutral-500 italic">No rolls recorded yet.</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {history.map((item) => (
                  <div
                    key={item.id}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 border ${
                      item.outcome === '7exact'
                        ? 'bg-amber-950/60 text-amber-300 border-amber-600/40'
                        : item.outcome === '7down'
                        ? 'bg-blue-950/60 text-blue-300 border-blue-600/40'
                        : 'bg-emerald-950/60 text-emerald-300 border-emerald-600/40'
                    }`}
                  >
                    <span>{item.die1}+{item.die2}={item.total}</span>
                    <span className="text-[10px] uppercase font-bold opacity-80">
                      {item.outcome === '7exact' ? '7' : item.outcome === '7down' ? 'Down' : 'Up'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Probability Distribution Tracker */}
          <div className="bg-neutral-900/60 p-4 rounded-xl border border-neutral-800 space-y-2.5">
            <span className="text-xs uppercase font-bold text-neutral-400 tracking-wider flex items-center gap-1.5">
              <BarChart2 className="w-3.5 h-3.5" /> Frequency Tracker ({totalRounds} Rolls)
            </span>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 rounded-lg bg-blue-950/30 border border-blue-900/40">
                <span className="text-neutral-400 block text-[10px]">7 Down</span>
                <span className="text-sm font-bold text-blue-400">{downCount}</span>
                <span className="text-[10px] text-neutral-500 block">
                  {totalRounds > 0 ? `${Math.round((downCount / totalRounds) * 100)}%` : '41.7%'}
                </span>
              </div>
              <div className="p-2 rounded-lg bg-amber-950/30 border border-amber-900/40">
                <span className="text-neutral-400 block text-[10px]">Lucky 7</span>
                <span className="text-sm font-bold text-amber-400">{exactCount}</span>
                <span className="text-[10px] text-neutral-500 block">
                  {totalRounds > 0 ? `${Math.round((exactCount / totalRounds) * 100)}%` : '16.7%'}
                </span>
              </div>
              <div className="p-2 rounded-lg bg-emerald-950/30 border border-emerald-900/40">
                <span className="text-neutral-400 block text-[10px]">7 Up</span>
                <span className="text-sm font-bold text-emerald-400">{upCount}</span>
                <span className="text-[10px] text-neutral-500 block">
                  {totalRounds > 0 ? `${Math.round((upCount / totalRounds) * 100)}%` : '41.7%'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
