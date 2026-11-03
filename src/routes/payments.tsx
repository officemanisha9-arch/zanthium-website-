import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
    ShieldCheck, Lock, CheckCircle2, AlertCircle,
    ArrowRight, RefreshCw,
    File,
    CreditCard,
    Check
} from 'lucide-react'

export const Route = createFileRoute('/payments')({
    component: RouteComponent,
})

// ─── CONFIG ── Replace with your actual Razorpay key ─────────────────────────
// const RAZORPAY_KEY = 'rzp_test_T1oYqxsyUAyNVX'
const RAZORPAY_KEY = 'rzp_live_T2AXbf4dJA9CL6'
const MERCHANT_NAME = 'Zanthium Technosoft'
// ─────────────────────────────────────────────────────────────────────────────

type Step = 'form' | 'verifying' | 'success' | 'error'

declare global { interface Window { Razorpay: any } }

// ── Validators ────────────────────────────────────────────────────────────────
const validate = {
    amount: (v: string) => {
        const n = parseFloat(v)
        if (!v || isNaN(n)) return 'Amount is required.'
        if (n < 1) return 'Minimum amount is ₹1.'
        if (n > 500000) return 'Maximum amount is ₹5,00,000.'
        if (!/^\d+(\.\d{1,2})?$/.test(v)) return 'Enter a valid amount (max 2 decimal places).'
        return ''
    },
    name: (v: string) => {
        if (!v.trim()) return 'Full name is required.'
        if (v.trim().length < 2) return 'Name must be at least 2 characters.'
        if (v.trim().length > 100) return 'Name is too long.'
        if (!/^[a-zA-Z\s'-]+$/.test(v.trim())) return 'Name can only contain letters, spaces, hyphens, and apostrophes.'
        return ''
    },
    email: (v: string) => {
        if (!v.trim()) return 'Email is required.'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())) return 'Enter a valid email address.'
        if (v.length > 254) return 'Email is too long.'
        return ''
    },
    phone: (v: string) => {
        const digits = v.replace(/\D/g, '').slice(-10)
        if (!v.trim()) return 'Phone number is required.'
        if (digits.length !== 10) return 'Enter a valid 10-digit Indian mobile number.'
        if (!/^[6-9]\d{9}$/.test(digits)) return 'Mobile number must start with 6, 7, 8, or 9.'
        return ''
    },
}

function loadRazorpay(): Promise<boolean> {
    return new Promise(resolve => {
        if (window.Razorpay) return resolve(true)
        const script = document.createElement('script')
        script.src = 'https://checkout.razorpay.com/v1/checkout.js'
        script.onload = () => resolve(true)
        script.onerror = () => resolve(false)
        document.body.appendChild(script)
    })
}

function RouteComponent() {
    const [step, setStep] = useState<Step>('form')

    // Form fields
    const [amount, setAmount] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    // Per-field errors
    const [errors, setErrors] = useState({ amount: '', name: '', email: '', phone: '' })
    const [apiError, setApiError] = useState('')

    // Receipt details shown on success screen
    const [txnId, setTxnId] = useState('')
    const [paidAmount, setPaidAmount] = useState(0)

    const parsedAmount = parseFloat(amount) || 0

    // Validate a single field on blur
    const touch = (field: keyof typeof errors, value: string) => {
        setErrors(prev => ({ ...prev, [field]: validate[field](value) }))
    }

    // Validate all fields; return true if clean
    const validateAll = () => {
        const next = {
            amount: validate.amount(amount),
            name: validate.name(name),
            email: validate.email(email),
            phone: validate.phone(phone),
        }
        setErrors(next)
        return Object.values(next).every(e => e === '')
    }

    const handleProceed = async (e: React.FormEvent) => {
        e.preventDefault()
        setApiError('')

        if (!validateAll()) return

        try {
            const res = await fetch('https://zanthiumtechnosoft.com/api/create_order.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: parsedAmount }),
            })

            if (!res.ok) throw new Error(`Server error: ${res.status}`)

            const order = await res.json()

            if (!order.id) throw new Error('Invalid order response from server.')

            const loaded = await loadRazorpay()
            if (!loaded) {
                setApiError('Razorpay failed to load. Check your internet connection.')
                return
            }

            const options = {
                key: RAZORPAY_KEY,
                amount: order.amount,
                currency: 'INR',
                name: MERCHANT_NAME,
                description: 'Payment',
                order_id: order.id,
                prefill: {
                    name,
                    email,
                    contact: phone.replace(/\D/g, '').slice(-10),
                },
                theme: { color: '#a90404' },
                handler: async (response: any) => {
                    setStep('verifying')
                    try {
                        const verify = await fetch('https://zanthiumtechnosoft.com/api/verify.php', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ ...response, name, email, phone, amount: parsedAmount }),
                        })

                        if (!verify.ok) throw new Error(`Verify server error: ${verify.status}`)

                        const result = await verify.json()

                        if (result.success) {
                            setTxnId(response.razorpay_payment_id)
                            setPaidAmount(parsedAmount)
                            setStep('success')
                        } else {
                            setApiError('Payment verification failed. Contact support if amount was deducted.')
                            setStep('form')
                        }
                    } catch {
                        setApiError('Verification request failed. Please contact support.')
                        setStep('form')
                    }
                },
                modal: {
                    ondismiss: () => setApiError('Payment was cancelled.'),
                },
            }

            const rzp = new window.Razorpay(options)
            rzp.on('payment.failed', (response: any) => {
                setApiError(response?.error?.description || 'Payment failed. Please try again.')
            })
            rzp.open()

        } catch (err: any) {
            setApiError(err.message || 'Could not start payment. Please try again.')
        }
    }

    // ── SUCCESS ───────────────────────────────────────────────────────────────
    if (step === 'success') return (
        <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
            <div className="bg-white border border-zinc-200 rounded-3xl shadow-xl p-8 max-w-md w-full text-center">
                <div className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-2">Payment Successful!</h2>
                <p className="text-zinc-500 text-sm mb-6">
                    ₹{paidAmount.toLocaleString('en-IN')} received. A confirmation has been sent to{' '}
                    <span className="font-semibold text-zinc-700">{email}</span>.
                </p>
                <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 text-left mb-6 space-y-3">
                    <div className="flex justify-between text-sm">
                        <span className="text-zinc-500">Payment ID</span>
                        <span className="text-zinc-900 font-mono font-semibold text-xs break-all">{txnId}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-zinc-500">Amount</span>
                        <span className="text-zinc-900 font-semibold">₹{paidAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-zinc-500">Paid to</span>
                        <span className="text-zinc-900 font-semibold">{MERCHANT_NAME}</span>
                    </div>
                </div>
                <a href="/" className="inline-flex items-center justify-center w-full py-3.5 rounded-xl text-sm font-semibold bg-[#a90404] text-white hover:bg-red-700 transition-colors duration-200">
                    Back to Home
                </a>
            </div>
        </div>
    )

    // ── VERIFYING ─────────────────────────────────────────────────────────────
    if (step === 'verifying') return (
        <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
            <div className="bg-white border border-zinc-200 rounded-3xl shadow-xl p-10 max-w-sm w-full text-center">
                <div className="w-16 h-16 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center mx-auto mb-5">
                    <RefreshCw className="w-7 h-7 text-blue-500 animate-spin" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-2">Verifying Payment</h3>
                <p className="text-xs text-zinc-500">Please wait while we confirm your payment with the bank…</p>
            </div>
        </div>
    )

    // ── FORM ──────────────────────────────────────────────────────────────────
    return (
        <div className="bg-white py-12">

            {/* Hero */}
            <div className="relative py-20 overflow-hidden">
                <img
                    src="/gatawaybg.avif"
                    alt="Secure Payment"
                    className="absolute inset-0 w-full h-full object-cover" />

                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                        <ShieldCheck className="w-4 h-4 text-green-400" />
                        <span>Trusted by 10,000+ Customers</span>
                    </div>

                    <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-red-600 via-rose-500 to-amber-600">
                        Fast & Secure Online Payments
                    </h1>

                    <p className="text-lg text-gray-200 max-w-2xl mx-auto ">
                        Pay instantly using UPI, QR Code and other secure payment methods.
                    </p>
                </div>
            </div>

            {/* Form */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 items-stretch">

                    {/* Left: Form */}
                    <div className="lg:col-span-3 h-full">
                        <div className="bg-white/90 backdrop-blur-xl border border-zinc-200/70 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] relative overflow-hidden">
    
                        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-red-700 via-red-500 to-red-700"></div>

                        <p className="text-[11px] tracking-[0.25em] uppercase text-red-600 font-bold mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            Payment Details
                        </p>
                            <form onSubmit={handleProceed} noValidate className="space-y-4">

                                {/* Amount */}
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">Amount (₹)</label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 font-semibold text-sm">₹</span>
                                        <input
                                            type="number" min="1" max="500000"
                                            value={amount}
                                            onChange={e => { setAmount(e.target.value); setErrors(p => ({ ...p, amount: '' })) } }
                                            onBlur={e => touch('amount', e.target.value)}
                                            placeholder="0.00"
                                            className={`text-zinc-900 w-full pl-8 pr-4 py-4 rounded-2xl border
bg-zinc-50/70 text-lg font-bold transition-all duration-300
focus:ring-4 focus:ring-red-100 focus:outline-none ${errors.amount ? 'border-red-400 bg-red-50' : 'border-zinc-200 focus:border-red-500 hover:border-zinc-300'}`} />
                                    </div>
                                    {errors.amount
                                        ? <p className="text-[11px] text-red-500 mt-1">{errors.amount}</p>
                                        : <div className="flex flex-wrap gap-2 mt-2">
                                            {[499, 999, 2999, 4999, 14999].map(a => (
                                                <button key={a} type="button" onClick={() => { setAmount(String(a)); setErrors(p => ({ ...p, amount: '' })) } }
                                                    className={`text-[11px] font-semibold px-4 py-2 rounded-xl border
cursor-pointer transition-all duration-300 ${amount === String(a) ? 'bg-linear-to-r from-red-600 to-red-700 text-white border-red-600 shadow-md' : 'bg-white border-zinc-200 text-zinc-600 hover:border-red-300 hover:text-red-600 hover:-translate-y-0.5'}`}>
                                                    ₹{a.toLocaleString('en-IN')}
                                                </button>
                                            ))}
                                        </div>}
                                </div>

                                {/* Name + Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">Full Name</label>
                                        <input type="text" value={name}
                                            onChange={e => { setName(e.target.value); setErrors(p => ({ ...p, name: '' })) } }
                                            onBlur={e => touch('name', e.target.value)}
                                            placeholder="Your full name"
                                            className={`text-zinc-900 w-full px-4 py-3 rounded-2xl border bg-zinc-50/70
focus:bg-white focus:outline-none transition-all duration-300
focus:ring-4 focus:ring-red-100 ${errors.name ? 'border-red-400 bg-red-50' : 'border-zinc-200 focus:border-red-500'}`} />
                                        {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">Email</label>
                                        <input type="email" value={email}
                                            onChange={e => { setEmail(e.target.value); setErrors(p => ({ ...p, email: '' })) } }
                                            onBlur={e => touch('email', e.target.value)}
                                            placeholder="name@example.com"
                                            className={`text-zinc-900 w-full px-4 py-3 rounded-2xl border bg-zinc-50/70
focus:bg-white focus:outline-none transition-all duration-300
focus:ring-4 focus:ring-red-100 ${errors.email ? 'border-red-400 bg-red-50' : 'border-zinc-200 focus:border-red-500'}`} />
                                        {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">Phone Number</label>
                                    <input type="tel" value={phone}
                                        onChange={e => { setPhone(e.target.value); setErrors(p => ({ ...p, phone: '' })) } }
                                        onBlur={e => touch('phone', e.target.value)}
                                        placeholder="+91 XXXXX XXXXX"
                                        className={`text-zinc-900 w-full px-4 py-3 rounded-2xl border bg-zinc-50/70
focus:bg-white focus:outline-none transition-all duration-300
focus:ring-4 focus:ring-red-100 ${errors.phone ? 'border-red-400 bg-red-50' : 'border-zinc-200 focus:border-red-500'}`} />
                                    {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                                </div>

                                {/* API-level error */}
                                {apiError && (
                                    <div className="flex items-start gap-2 text-sm font-medium p-3 rounded-lg bg-red-50 text-red-600 border border-red-100">
                                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" /> {apiError}
                                    </div>
                                )}

                                <button type="submit"
                                    className="group w-full py-4 rounded-2xl text-sm font-bold
bg-linear-to-r from-[#a90404] via-red-700 to-[#a90404]
text-white shadow-xl shadow-red-900/20
hover:shadow-red-900/40 hover:-translate-y-1
transition-all duration-300 cursor-pointer
flex items-center justify-center gap-2">
                                    <Lock className="w-4 h-4" />
                                    Proceed to Pay{parsedAmount > 0 ? ` ₹${parsedAmount.toLocaleString('en-IN')}` : ''}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <div className="mt-5 pt-4 border-t border-zinc-100">
    <p className="text-center text-[11px] text-zinc-500 flex items-center justify-center gap-2">
        <ShieldCheck className="w-4 h-4 text-emerald-500" />
        <span className="font-medium">
            256-bit SSL encrypted • Secure Razorpay Checkout
        </span>
    </p>
</div>
                            </form>
                        </div>
                    </div>

                    {/* Right: Info panel */}
                    <div className="lg:col-span-3 h-full">
    <div className="bg-white border rounded-3xl p-6 shadow-sm h-full">

        <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-zinc-800">
                Quick Payment Process
            </h3>
            <p className="text-sm text-zinc-500 mt-1">
                Fast, secure and hassle-free transactions
            </p>
        </div>

        <div className="space-y-4">

            <div className="flex gap-4 border rounded-2xl p-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
                    <File className="w-5 h-5 text-red-600" />
                </div>
                <div>
                    <h4 className="font-semibold text-zinc-900">Enter Details</h4>
                    <p className="text-sm text-zinc-500">
                        Fill in the payment amount and required information.
                    </p>
                </div>
            </div>

            <div className="flex gap-4 border rounded-2xl p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                    <CreditCard className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                    <h4 className="font-semibold text-zinc-900">Select Payment Method</h4>
                    <p className="text-sm text-zinc-500">
                        Choose your preferred payment method.
                    </p>
                </div>
            </div>

            <div className="flex gap-4 border rounded-2xl p-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                    <h4 className="font-semibold text-zinc-900">Payment Success</h4>
                    <p className="text-sm text-zinc-500">
                        Transaction completed securely and instantly.
                    </p>
                </div>
            </div>

        </div>

        <div className="mt-6 bg-green-50 border border-green-100 rounded-2xl p-4">
            <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-green-600 shrink-0" />
                <div>
                    <h4 className="font-semibold text-green-800">
                        Secure & Protected
                    </h4>
                    <p className="text-sm text-green-700 mt-1">
                        All payments are protected with bank-grade encryption.
                    </p>
                </div>
            </div>
        </div>

    </div>
                    </div>

                </div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-7xl items-stretch">
                <div className="grid lg:grid-cols-3 gap-6 items-stretch">

                    {/* Large Banner */}
                    <div className="lg:col-span-2 bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-sm h-full">
                        <img
                            src="https://media.istockphoto.com/id/2191609942/photo/mobile-contactless-payment-at-coffee-shop.jpg?s=612x612&w=0&k=20&c=y8kOWdtTa17ZX32eAcAgrTL94y4F368obKF2QFNukFs="
                            alt="Online Payment"
                            className="w-full h-72 object-cover"
                        />

                        <div className="p-6">
                            <span className="inline-flex px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-semibold">
                                Secure Payments
                            </span>

                            <h3 className="text-2xl font-bold text-zinc-800 mt-4">
                                Fast & Trusted Digital Transactions
                            </h3>

                            <p className="text-zinc-500 mt-3">
                                Experience seamless UPI, QR and online payments with
                                industry-grade security and instant confirmations.
                            </p>
                        </div>
                    </div>

                    {/* Right Side Highlights */}
                   <div className="lg:col-span-1 h-full flex flex-col gap-4">

    <div className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-3xl p-6 flex flex-col justify-center">
        <h4 className="text-4xl font-bold">10K+</h4>
        <p className="text-red-100 mt-2">
            Successful Payments Processed
        </p>
    </div>

    <div className="flex-1 bg-white border rounded-3xl p-6 flex flex-col justify-center">
        <h4 className="text-4xl font-bold text-green-600">99.9%</h4>
        <p className="text-zinc-500 mt-2">
            Payment Success Rate
        </p>
    </div>

    <div className="flex-1 bg-zinc-900 text-white rounded-3xl p-6 flex flex-col justify-center">
        <h4 className="font-semibold text-lg">
            Bank-Level Security
        </h4>
        <p className="text-zinc-300 text-sm mt-2">
            SSL encrypted checkout with secure payment gateway.
        </p>
    </div>

</div>

                </div>
            </div>
        </div>
        
    )
}