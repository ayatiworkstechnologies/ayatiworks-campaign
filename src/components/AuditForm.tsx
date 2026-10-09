"use client";

import React, { useState } from "react";

interface AuditFormProps {
  id?: string;
}

export default function AuditForm({ id = "audit-form" }: AuditFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phoneNumber: "",
    websiteUrl: "",
    adSpend: "",
    role: "",
    agreeToTerms: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!formData.workEmail.trim() || !formData.workEmail.includes("@")) {
      setErrorMessage("Please enter a valid work email address.");
      return;
    }
    if (!formData.phoneNumber.trim()) {
      setErrorMessage("Please enter your phone number.");
      return;
    }
    if (!formData.websiteUrl.trim()) {
      setErrorMessage("Please enter your website URL.");
      return;
    }
    if (!formData.adSpend) {
      setErrorMessage("Please select your monthly ad spend.");
      return;
    }
    if (!formData.role) {
      setErrorMessage("Please select what describes you best.");
      return;
    }
    if (!formData.agreeToTerms) {
      setErrorMessage("Please accept the terms to proceed.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  return (
    <div
      id={id}
      className="w-full bg-[#1541e0] rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 text-white shadow-2xl relative overflow-hidden transition-all duration-300 border border-blue-400/30 hover:shadow-blue-600/30"
    >
      {/* Decorative ambient background glows with subtle breathing animation */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-300/25 rounded-full blur-3xl pointer-events-none animate-pulse-soft" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-700/35 rounded-full blur-3xl pointer-events-none animate-pulse-soft" style={{ animationDelay: "1.5s" }} />

      {isSuccess ? (
        <div className="py-12 px-4 text-center space-y-4 animate-fade-in relative z-10">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto text-white backdrop-blur-sm border border-white/30 shadow-inner">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-black tracking-tight">Audit Request Received!</h3>
          <p className="text-blue-100 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-bold text-white">{formData.fullName}</span>. One of our Senior Performance Strategists will review your account and contact you within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                fullName: "",
                workEmail: "",
                phoneNumber: "",
                websiteUrl: "",
                adSpend: "",
                role: "",
                agreeToTerms: true,
              });
            }}
            className="mt-4 px-6 py-2.5 rounded-xl bg-white text-[#1541e0] font-bold text-xs sm:text-sm hover:bg-blue-50 transition-all duration-200 shadow-md hover:scale-105 active:scale-95"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative z-10 space-y-3.5">
          {errorMessage && (
            <div className="bg-red-500/90 text-white text-xs sm:text-sm py-2 px-3.5 rounded-lg border border-red-400 font-medium animate-fade-in shadow-sm">
              {errorMessage}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
            {/* Full Name */}
            <div className="space-y-1">
              <label
                htmlFor="fullName"
                className="block text-xs sm:text-[13px] font-semibold text-white tracking-wide"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm rounded-lg px-3.5 py-2.5 outline-none transition-all duration-200 shadow-sm font-normal focus:ring-2 focus:ring-amber-400 focus:shadow-[0_0_12px_rgba(251,191,36,0.3)]"
              />
            </div>

            {/* Work Email */}
            <div className="space-y-1">
              <label
                htmlFor="workEmail"
                className="block text-xs sm:text-[13px] font-semibold text-white tracking-wide"
              >
                Work Email *
              </label>
              <input
                type="email"
                id="workEmail"
                name="workEmail"
                required
                value={formData.workEmail}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm rounded-lg px-3.5 py-2.5 outline-none transition-all duration-200 shadow-sm font-normal focus:ring-2 focus:ring-amber-400 focus:shadow-[0_0_12px_rgba(251,191,36,0.3)]"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-1">
              <label
                htmlFor="phoneNumber"
                className="block text-xs sm:text-[13px] font-semibold text-white tracking-wide"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm rounded-lg px-3.5 py-2.5 outline-none transition-all duration-200 shadow-sm font-normal focus:ring-2 focus:ring-amber-400 focus:shadow-[0_0_12px_rgba(251,191,36,0.3)]"
              />
            </div>

            {/* Website URL */}
            <div className="space-y-1">
              <label
                htmlFor="websiteUrl"
                className="block text-xs sm:text-[13px] font-semibold text-white tracking-wide"
              >
                Website URL *
              </label>
              <input
                type="url"
                id="websiteUrl"
                name="websiteUrl"
                required
                value={formData.websiteUrl}
                onChange={handleChange}
                placeholder="https://yourcompany.com"
                className="w-full bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm rounded-lg px-3.5 py-2.5 outline-none transition-all duration-200 shadow-sm font-normal focus:ring-2 focus:ring-amber-400 focus:shadow-[0_0_12px_rgba(251,191,36,0.3)]"
              />
            </div>

            {/* Monthly Ad Spend */}
            <div className="space-y-1">
              <label
                htmlFor="adSpend"
                className="block text-xs sm:text-[13px] font-semibold text-white tracking-wide"
              >
                Monthly Ad Spend *
              </label>
              <div className="relative">
                <select
                  id="adSpend"
                  name="adSpend"
                  required
                  value={formData.adSpend}
                  onChange={handleChange}
                  className="w-full bg-white text-slate-900 text-xs sm:text-sm rounded-lg px-3.5 py-2.5 outline-none transition-all duration-200 shadow-sm appearance-none font-normal pr-8 cursor-pointer focus:ring-2 focus:ring-amber-400 focus:shadow-[0_0_12px_rgba(251,191,36,0.3)]"
                >
                  <option value="" disabled>
                    Select your ad spend
                  </option>
                  <option value="under-100k">Under ₹1,00,000 / mo</option>
                  <option value="100k-500k">₹1,00,000 – ₹5,00,000 / mo</option>
                  <option value="500k-2000k">₹5,00,000 – ₹20,00,000 / mo</option>
                  <option value="2000k-plus">₹20,00,000+ / mo</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* What Describes You Best */}
            <div className="space-y-1">
              <label
                htmlFor="role"
                className="block text-xs sm:text-[13px] font-semibold text-white tracking-wide"
              >
                What Describes You Best? *
              </label>
              <div className="relative">
                <select
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full bg-white text-slate-900 text-xs sm:text-sm rounded-lg px-3.5 py-2.5 outline-none transition-all duration-200 shadow-sm appearance-none font-normal pr-8 cursor-pointer focus:ring-2 focus:ring-amber-400 focus:shadow-[0_0_12px_rgba(251,191,36,0.3)]"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="founder">Founder / CEO / Managing Director</option>
                  <option value="cmo">CMO / Head of Marketing</option>
                  <option value="growth">Growth / Brand Manager</option>
                  <option value="ecommerce">E-Commerce Brand Owner</option>
                  <option value="other">Other Business Leader</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Agreement Checkbox */}
          <div className="flex items-start gap-2.5 pt-1">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mt-0.5 w-4 h-4 rounded text-blue-600 bg-white border-0 focus:ring-2 focus:ring-amber-400 cursor-pointer shrink-0 transition"
            />
            <label
              htmlFor="agreeToTerms"
              className="text-[11px] sm:text-xs text-blue-100 leading-tight select-none cursor-pointer"
            >
              I agree to receive communications from Ayatiworks regarding growth audits, campaign recommendations, and marketing insights.
            </label>
          </div>

          {/* Submit Button with Magnetic Hover Feel */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white hover:bg-slate-50 text-[#1541e0] font-extrabold text-xs sm:text-sm tracking-wider uppercase py-3.5 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-[1.01] flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.99] disabled:opacity-80"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-[#1541e0]" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  PREPARING YOUR AUDIT...
                </span>
              ) : (
                <>
                  <span>GET MY FREE GROWTH AUDIT</span>
                  <span className="w-5 h-5 rounded bg-amber-500 text-white flex items-center justify-center text-xs font-bold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 shadow-xs">
                    ↗
                  </span>
                </>
              )}
            </button>
          </div>

          {/* Privacy Note */}
          <p className="text-[11px] text-blue-200/90 text-center flex items-center justify-center gap-1.5 pt-1">
            <span>🔒</span>
            <span>100% confidential. No credit card required. We will never share or sell your information.</span>
          </p>
        </form>
      )}
    </div>
  );
}
