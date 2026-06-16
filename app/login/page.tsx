"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BriefcaseIcon, Eye, EyeOff, Mail, Lock, User, CheckCircle2 } from "lucide-react";
import { FaGoogle, FaGithub } from "react-icons/fa";

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function LoginPage() {
  const [tab, setTab] = useState<"signin" | "register">("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState<"jobseeker" | "employer">("jobseeker");

  const [signInForm, setSignInForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ name: "", email: "", password: "", confirm: "" });

  const handleSignIn = () => {
    if (!signInForm.email || !signInForm.password) return;
    setSubmitted(true);
  };

  const handleRegister = () => {
    if (!registerForm.name || !registerForm.email || !registerForm.password) return;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center py-16 px-4 relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 dark:bg-blue-950 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-50 dark:bg-purple-950 rounded-full blur-3xl opacity-40 -translate-x-1/3 translate-y-1/4 pointer-events-none" />

      <div className="relative w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 justify-center">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-200 dark:shadow-blue-900">
              <BriefcaseIcon className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            <span className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Kabul<span className="text-blue-600">Hire</span>
            </span>
          </Link>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
            {tab === "signin" ? "Welcome back! Sign in to your account." : "Create your free account today."}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-xl shadow-gray-100 dark:shadow-gray-900 overflow-hidden">

          {/* Tabs */}
          <div className="flex border-b border-gray-100 dark:border-gray-800">
            {(["signin", "register"] as const).map((t) => (
              <button
                key={t}
                onClick={() => { setTab(t); setSubmitted(false); }}
                className={`flex-1 py-4 text-sm font-semibold transition-all duration-200 cursor-pointer
                  ${tab === t
                    ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 bg-blue-50/50 dark:bg-blue-900/10"
                    : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                  }`}
              >
                {t === "signin" ? "Sign In" : "Create Account"}
              </button>
            ))}
          </div>

          <div className="p-8">
            <AnimatePresence mode="wait">

              {/* ── Sign In ── */}
              {tab === "signin" && (
                <motion.div
                  key="signin"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                      <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center mb-5">
                        <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Signed In!</h3>
                      <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">Redirecting to your dashboard...</p>
                      <Link href="/" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all">
                        Go to Dashboard
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-5">
                      {/* Social logins */}
                      <div className="grid grid-cols-2 gap-3">
                        <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:border-blue-300 hover:text-blue-600 dark:hover:border-blue-700 dark:hover:text-blue-400 transition-all cursor-pointer">
                          <FaGoogle className="w-4 h-4 text-red-500" />
                          Google
                        </button>
                        <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:border-gray-900 hover:text-gray-900 dark:hover:border-gray-400 dark:hover:text-white transition-all cursor-pointer">
                          <FaGithub className="w-4 h-4" />
                          GitHub
                        </button>
                      </div>

                      {/* Divider */}
                      <div className="flex items-center gap-3">
                        <div className="flex-1 border-t border-gray-100 dark:border-gray-800" />
                        <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">or continue with email</span>
                        <div className="flex-1 border-t border-gray-100 dark:border-gray-800" />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="email"
                            value={signInForm.email}
                            onChange={(e) => setSignInForm({ ...signInForm, email: e.target.value })}
                            placeholder="ahmad@example.com"
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Password */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Password</label>
                          <Link href="/forgot-password" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                            Forgot password?
                          </Link>
                        </div>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type={showPassword ? "text" : "password"}
                            value={signInForm.password}
                            onChange={(e) => setSignInForm({ ...signInForm, password: e.target.value })}
                            placeholder="••••••••"
                            className="w-full pl-11 pr-11 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors"
                          />
                          <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      {/* Remember me */}
                      <label className="flex items-center gap-2.5 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded accent-blue-600 cursor-pointer" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">Remember me</span>
                      </label>

                      {/* Submit */}
                      <button
                        onClick={handleSignIn}
                        className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-bold rounded-xl transition-all shadow-md shadow-blue-200 dark:shadow-blue-900 cursor-pointer"
                      >
                        Sign In
                      </button>

                      <p className="text-center text-xs text-gray-400 dark:text-gray-500">
                        Don't have an account?{" "}
                        <button onClick={() => setTab("register")} className="text-blue-600 dark:text-blue-400 font-semibold hover:underline cursor-pointer">
                          Create one free
                        </button>
                      </p>
                    </div>
                  )}
                </motion.div>
              )}

              {/* ── Register ── */}
              {tab === "register" && (
                <motion.div
                  key="register"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                      <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center mb-5">
                        <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Account Created!</h3>
                      <p className="text-sm text-gray-400 dark:text-gray-500 mb-6">Welcome to KabulHire. Let's find you a job.</p>
                      <Link href="/" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all">
                        Go to Dashboard
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-5">

                      {/* Role selector */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">I am a...</label>
                        <div className="grid grid-cols-2 gap-3">
                          {(["jobseeker", "employer"] as const).map((r) => (
                            <button
                              key={r}
                              onClick={() => setRole(r)}
                              className={`py-3 rounded-xl text-xs font-bold border transition-all cursor-pointer capitalize
                                ${role === r
                                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                                  : "bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-blue-300"
                                }`}
                            >
                              {r === "jobseeker" ? "Job Seeker" : "Employer"}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Social logins */}
                      <div className="grid grid-cols-2 gap-3">
                        <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:border-blue-300 hover:text-blue-600 transition-all cursor-pointer">
                          <FaGoogle className="w-4 h-4 text-red-500" />
                          Google
                        </button>
                        <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:border-gray-900 hover:text-gray-900 dark:hover:text-white transition-all cursor-pointer">
                          <FaGithub className="w-4 h-4" />
                          GitHub
                        </button>
                      </div>

                      {/* Divider */}
                      <div className="flex items-center gap-3">
                        <div className="flex-1 border-t border-gray-100 dark:border-gray-800" />
                        <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">or register with email</span>
                        <div className="flex-1 border-t border-gray-100 dark:border-gray-800" />
                      </div>

                      {/* Full name */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            value={registerForm.name}
                            onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                            placeholder="Ahmad Karimi"
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="email"
                            value={registerForm.email}
                            onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                            placeholder="ahmad@example.com"
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Password */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Password</label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type={showPassword ? "text" : "password"}
                            value={registerForm.password}
                            onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                            placeholder="Min. 8 characters"
                            className="w-full pl-11 pr-11 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors"
                          />
                          <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      {/* Confirm password */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Confirm Password</label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type={showConfirm ? "text" : "password"}
                            value={registerForm.confirm}
                            onChange={(e) => setRegisterForm({ ...registerForm, confirm: e.target.value })}
                            placeholder="Re-enter your password"
                            className={`w-full pl-11 pr-11 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-colors
                              ${registerForm.confirm && registerForm.confirm !== registerForm.password
                                ? "border-red-300 dark:border-red-700 focus:border-red-400"
                                : "border-gray-200 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-500"
                              }`}
                          />
                          <button
                            onClick={() => setShowConfirm(!showConfirm)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                          >
                            {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                        {registerForm.confirm && registerForm.confirm !== registerForm.password && (
                          <p className="text-xs text-red-500 mt-1.5">Passwords do not match.</p>
                        )}
                      </div>

                      {/* Terms */}
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded accent-blue-600 cursor-pointer mt-0.5 shrink-0" />
                        <span className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                          I agree to the{" "}
                          <Link href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</Link>
                          {" "}and{" "}
                          <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</Link>
                        </span>
                      </label>

                      {/* Submit */}
                      <button
                        onClick={handleRegister}
                        className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-bold rounded-xl transition-all shadow-md shadow-blue-200 dark:shadow-blue-900 cursor-pointer"
                      >
                        Create Account
                      </button>

                      <p className="text-center text-xs text-gray-400 dark:text-gray-500">
                        Already have an account?{" "}
                        <button onClick={() => setTab("signin")} className="text-blue-600 dark:text-blue-400 font-semibold hover:underline cursor-pointer">
                          Sign in
                        </button>
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Back to home */}
        <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-6">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            ← Back to KabulHire
          </Link>
        </p>
      </div>
    </main>
  );
}