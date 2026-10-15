"use client";

import React, { useState } from "react";
import { HiArrowRight } from "react-icons/hi2";

interface EcommerceAuditFormProps {
  id?: string;
}

export default function EcommerceAuditForm({ id = "audit-form" }: EcommerceAuditFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phoneNumber: "",
    websiteUrl: "",
    adSpend: "",
    goal: "",
    agreeToTerms: false,
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

  const handleSubmit = async (e: React.FormEvent) => {
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
    if (!/^\+?[0-9\s()-]{7,20}$/.test(formData.phoneNumber.trim())) {
      setErrorMessage("Please enter a valid phone number.");
      return;
    }
    try {
      new URL(formData.websiteUrl);
    } catch {
      setErrorMessage("Please enter a valid website URL, including https://.");
      return;
    }
    if (!formData.adSpend) {
      setErrorMessage("Please select your monthly ad spend.");
      return;
    }
    if (!formData.goal) {
      setErrorMessage("Please select your primary growth goal.");
      return;
    }
    if (!formData.agreeToTerms) {
      setErrorMessage("Please accept the terms to proceed.");
      return;
    }

    setIsSubmitting(true);
    const payload = {
      data: {
        fullname: formData.fullName.trim(),
        workemail: formData.workEmail.trim(),
        phonenumber: formData.phoneNumber.trim(),
        websiteurl: formData.websiteUrl.trim(),
        adspend: formData.adSpend,
        goal: formData.goal,
        agreetoterms: formData.agreeToTerms ? "true" : "false",
        campaign: "ecommerce_d2c_growth_agency",
      },
    };

    try {
      const response = await fetch(
        "https://api.ayatiworks.com/api/v1/public/ayatiwork/campain_form/records",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": "YOUR_API_KEY",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const serverResponse = await fetch("/api/audit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!serverResponse.ok) {
          throw new Error("Failed to submit request.");
        }
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch {
      try {
        const serverResponse = await fetch("/api/audit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!serverResponse.ok) {
          throw new Error("Server submission failed.");
        }

        setIsSubmitting(false);
        setIsSuccess(true);
      } catch {
        setIsSubmitting(false);
        setErrorMessage("We could not submit your request. Please try again or contact Ayatiworks directly.");
      }
    }
  };

  return (
    <div
      id={id}
      className="w-full bg-[#1541e0] rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 text-white shadow-2xl relative overflow-hidden transition-all duration-300 border border-blue-400/30 hover:shadow-blue-600/30"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-300/25 rounded-full blur-3xl pointer-events-none animate-pulse-soft" />
      <div
        className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-700/35 rounded-full blur-3xl pointer-events-none animate-pulse-soft"
        style={{ animationDelay: "1.5s" }}
      />

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
            Thank you, <span className="font-bold text-white">{formData.fullName}</span>. One of our E-commerce & D2C Growth Specialists will review your store metrics and contact you within 24 hours.
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
                goal: "",
                agreeToTerms: false,
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
                htmlFor="ecom-fullName"
                className="block text-xs sm:text-[13px] font-semibold text-white tracking-wide"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="ecom-fullName"
                name="fullName"
                autoComplete="name"
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
                htmlFor="ecom-workEmail"
                className="block text-xs sm:text-[13px] font-semibold text-white tracking-wide"
              >
                Work Email *
              </label>
              <input
                type="email"
                id="ecom-workEmail"
                name="workEmail"
                autoComplete="email"
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
                htmlFor="ecom-phoneNumber"
                className="block text-xs sm:text-[13px] font-semibold text-white tracking-wide"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="ecom-phoneNumber"
                name="phoneNumber"
                autoComplete="tel"
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
                htmlFor="ecom-websiteUrl"
                className="block text-xs sm:text-[13px] font-semibold text-white tracking-wide"
              >
                Website URL *
              </label>
              <input
                type="url"
                id="ecom-websiteUrl"
                name="websiteUrl"
                autoComplete="url"
                required
                value={formData.websiteUrl}
                onChange={handleChange}
                placeholder="https://yourstore.com"
                className="w-full bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm rounded-lg px-3.5 py-2.5 outline-none transition-all duration-200 shadow-sm font-normal focus:ring-2 focus:ring-amber-400 focus:shadow-[0_0_12px_rgba(251,191,36,0.3)]"
              />
            </div>

            {/* Monthly Ad Spend */}
            <div className="space-y-1">
              <label
                htmlFor="ecom-adSpend"
                className="block text-xs sm:text-[13px] font-semibold text-white tracking-wide"
              >
                Monthly Ad Spend *
              </label>
              <div className="relative">
                <select
                  id="ecom-adSpend"
                  name="adSpend"
                  required
                  value={formData.adSpend}
                  onChange={handleChange}
                  className="w-full bg-white text-slate-900 text-xs sm:text-sm rounded-lg px-3.5 py-2.5 outline-none transition-all duration-200 shadow-sm appearance-none font-normal pr-8 cursor-pointer focus:ring-2 focus:ring-amber-400 focus:shadow-[0_0_12px_rgba(251,191,36,0.3)]"
                >
                  <option value="" disabled>
                    Select monthly spend
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

            {/* Primary Growth Goal */}
            <div className="space-y-1">
              <label
                htmlFor="ecom-goal"
                className="block text-xs sm:text-[13px] font-semibold text-white tracking-wide"
              >
                Primary Growth Goal *
              </label>
              <div className="relative">
                <select
                  id="ecom-goal"
                  name="goal"
                  required
                  value={formData.goal}
                  onChange={handleChange}
                  className="w-full bg-white text-slate-900 text-xs sm:text-sm rounded-lg px-3.5 py-2.5 outline-none transition-all duration-200 shadow-sm appearance-none font-normal pr-8 cursor-pointer focus:ring-2 focus:ring-amber-400 focus:shadow-[0_0_12px_rgba(251,191,36,0.3)]"
                >
                  <option value="" disabled>
                    Select primary goal
                  </option>
                  <option value="scale-revenue-lower-cac">Scale Revenue & Lower CAC</option>
                  <option value="improve-blended-roas">Improve Blended ROAS</option>
                  <option value="conversion-rate-cro">Conversion Rate Optimization (CRO)</option>
                  <option value="marketplace-growth">Amazon & Marketplace Scaling</option>
                  <option value="customer-retention">Retention & Repeat Purchase Rate</option>
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
              id="ecom-agreeToTerms"
              name="agreeToTerms"
              required
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mt-0.5 h-4 w-4 rounded text-blue-600 focus:ring-amber-400 border-white/60 bg-white cursor-pointer shrink-0"
            />
            <label
              htmlFor="ecom-agreeToTerms"
              className="text-[11px] sm:text-xs text-blue-100 leading-tight font-normal select-none cursor-pointer"
            >
              I agree to be contacted by Ayatiworks for this growth audit. We will never share your data. You may opt out at any time as per our Privacy Policy.
            </label>
          </div>

          {/* Submit Button with Orange Arrow Icon */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-between bg-white text-[#1541e0] font-black text-xs sm:text-sm tracking-wide uppercase px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg cursor-pointer group active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed hover:shadow-xl"
            >
              <span>{isSubmitting ? "PROCESSING AUDIT..." : "Get My Free E-commerce Audit"}</span>
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-[#ea580c] text-white flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform duration-200 shadow-sm">
                <HiArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </span>
            </button>
          </div>

          {/* Micro-copy footer */}
          <div className="text-center pt-1">
            <p className="text-[11px] text-blue-200/90 font-medium">
              30-min consultation • Zero spam • Actionable insights.
            </p>
            <p className="text-[10px] text-blue-200/70 pt-0.5">
              30-min consultation • Zero spam • Actionable insights.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
