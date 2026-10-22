
"use client";

import React, { useState } from "react";
import { HiArrowRight, HiOutlineLockClosed } from "react-icons/hi2";
import { detectCampaignName, CAMPAIGN_NAMES } from "@/lib/campaignDetector";

interface AuditFormProps {
  id?: string;
  campaignName?: string;
}

interface FormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  phone: string;
  websiteUrl: string;
  companyStage: string;
  monthlyMarketingBudget: string;
  agreeToTerms: boolean;
}

const initialFormData: FormData = {
  fullName: "",
  workEmail: "",
  companyName: "",
  phone: "",
  websiteUrl: "",
  companyStage: "",
  monthlyMarketingBudget: "",
  agreeToTerms: false,
};

const inputStyles = `
  w-full h-[42px] bg-white text-[#1e293b]
  placeholder:text-[#94a3b8]
  text-[12px] sm:text-[13px] font-normal
  rounded-[5px] px-3 outline-none
  border border-[#e2e8f0]
  transition-all duration-200
  focus:border-[#93c5fd]
  focus:ring-2 focus:ring-white/30
`;

const labelStyles = `
  block mb-[6px]
  text-[11px] sm:text-[12px]
  font-semibold text-white leading-normal
`;

export default function AuditForm({
  id = "audit-form",
  campaignName,
}: AuditFormProps) {
  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [infoMessage, setInfoMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const target = e.target;

    if (target.type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [target.name]: (target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [target.name]: target.value,
      }));
    }

    setErrorMessage("");
    setInfoMessage("");
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setErrorMessage("");
    setInfoMessage("");

    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.workEmail.trim()
      )
    ) {
      setErrorMessage(
        "Please enter a valid work email address."
      );
      return;
    }

    if (!formData.companyName.trim()) {
      setErrorMessage("Please enter your company name.");
      return;
    }

    if (
      !/^[+]?[0-9\s()-]{7,20}$/.test(
        formData.phone.trim()
      )
    ) {
      setErrorMessage(
        "Please enter a valid phone number."
      );
      return;
    }

    try {
      const url = new URL(formData.websiteUrl.trim());

      if (!["http:", "https:"].includes(url.protocol)) {
        throw new Error("Invalid protocol");
      }
    } catch {
      setErrorMessage(
        "Please enter a valid website URL including https://."
      );
      return;
    }

    if (!formData.companyStage) {
      setErrorMessage("Please select your company stage.");
      return;
    }

    if (!formData.monthlyMarketingBudget) {
      setErrorMessage(
        "Please select your monthly marketing budget."
      );
      return;
    }

    if (!formData.agreeToTerms) {
      setErrorMessage(
        "Please accept the agreement to proceed."
      );
      return;
    }

    setIsSubmitting(true);
    const detectedCampaign = detectCampaignName(
      campaignName || CAMPAIGN_NAMES.GROWTH
    );

    const payload = {
      data: {
        fullname: formData.fullName.trim(),
        workemail: formData.workEmail.trim(),
        phonenumber: formData.phone.trim(),
        websiteurl: formData.websiteUrl.trim(),
        adspend: formData.monthlyMarketingBudget,
        goal: formData.companyStage,
        agreetoterms: formData.agreeToTerms ? "true" : "false",
        campaign_name: detectedCampaign,
      },
    };

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request.");
      }

      setIsSubmitting(false);
      setIsSuccess(true);
    } catch {
      setIsSubmitting(false);
      setErrorMessage(
        "We could not submit your request. Please try again or contact Ayatiworks directly."
      );
    }
  };

  return (
    <div
      id={id}
      className="
        relative w-full overflow-hidden
        rounded-[14px] bg-[#1240f4]
        px-5 py-5 sm:px-6 sm:py-6
        lg:px-7 lg:py-7 text-white
      "
    >
      {isSuccess ? (
        <div className="py-10 px-4 text-center space-y-4 animate-fade-in relative z-10">
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
          <h3 className="text-xl sm:text-2xl font-black tracking-tight">
            Growth Roadmap Request Received!
          </h3>
          <p className="text-blue-100 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-bold text-white">{formData.fullName}</span>. One of our Senior Growth Strategists will review your request and connect with you shortly.
          </p>
          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setFormData(initialFormData);
            }}
            className="mt-4 px-6 py-2 rounded-lg bg-white text-[#1240f4] font-bold text-xs sm:text-sm hover:bg-blue-50 transition-all duration-200 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
      <form
        onSubmit={handleSubmit}
        className="w-full"
        noValidate
      >
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2
            gap-x-3 gap-y-3.5
          "
        >
          {/* Full Name */}
          <div>
            <label
              htmlFor={`${id}-fullName`}
              className={labelStyles}
            >
              Full Name *
            </label>
            <input
              id={`${id}-fullName`}
              name="fullName"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              value={formData.fullName}
              onChange={handleChange}
              className={inputStyles}
              required
            />
          </div>

          {/* Work Email */}
          <div>
            <label
              htmlFor={`${id}-workEmail`}
              className={labelStyles}
            >
              Work Email *
            </label>
            <input
              id={`${id}-workEmail`}
              name="workEmail"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              value={formData.workEmail}
              onChange={handleChange}
              className={inputStyles}
              required
            />
          </div>

          {/* Company Name */}
          <div>
            <label
              htmlFor={`${id}-companyName`}
              className={labelStyles}
            >
              Company Name *
            </label>
            <input
              id={`${id}-companyName`}
              name="companyName"
              type="text"
              autoComplete="organization"
              placeholder="ayatiworks"
              value={formData.companyName}
              onChange={handleChange}
              className={inputStyles}
              required
            />
          </div>

          {/* Phone Number - Replaced Website URL */}
          <div>
            <label
              htmlFor={`${id}-phone`}
              className={labelStyles}
            >
              Phone Number *
            </label>
            <input
              id={`${id}-phone`}
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className={inputStyles}
              required
            />
          </div>

          {/* Company Stage */}
          <div>
            <label
              htmlFor={`${id}-companyStage`}
              className={labelStyles}
            >
              Company Stage *
            </label>

            <div className="relative">
              <select
                id={`${id}-companyStage`}
                name="companyStage"
                value={formData.companyStage}
                onChange={handleChange}
                className={`
                  ${inputStyles}
                  appearance-none pr-9 cursor-pointer
                `}
                required
              >
                <option value="" disabled>
                  Select your company stage
                </option>
                <option value="startup">
                  Startup / Early Stage
                </option>
                <option value="growing">
                  Growing Business
                </option>
                <option value="established">
                  Established Business
                </option>
                <option value="scaling">
                  Scaling / Expansion Stage
                </option>
              </select>

              <svg
                className="
                  pointer-events-none absolute
                  right-3 top-1/2 h-4 w-4
                  -translate-y-1/2 text-[#64748b]
                "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m6 9 6 6 6-6"
                />
              </svg>
            </div>
          </div>

          {/* Monthly Marketing Budget */}
          <div>
            <label
              htmlFor={`${id}-monthlyMarketingBudget`}
              className={labelStyles}
            >
              Monthly Marketing Budget *
            </label>

            <div className="relative">
              <select
                id={`${id}-monthlyMarketingBudget`}
                name="monthlyMarketingBudget"
                value={formData.monthlyMarketingBudget}
                onChange={handleChange}
                className={`
                  ${inputStyles}
                  appearance-none pr-9 cursor-pointer
                `}
                required
              >
                <option value="" disabled>
                  Select your marketing budget
                </option>
                <option value="below-1-lakh">
                  Below ₹1 Lakh
                </option>
                <option value="1-5-lakhs">
                  ₹1 Lakh - ₹5 Lakhs
                </option>
                <option value="5-10-lakhs">
                  ₹5 Lakhs - ₹10 Lakhs
                </option>
                <option value="10-20-lakhs">
                  ₹10 Lakhs - ₹20 Lakhs
                </option>
                <option value="above-20-lakhs">
                  Above ₹20 Lakhs
                </option>
              </select>

              <svg
                className="
                  pointer-events-none absolute
                  right-3 top-1/2 h-4 w-4
                  -translate-y-1/2 text-[#64748b]
                "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m6 9 6 6 6-6"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Website URL - Now Full Width */}
        <div className="mt-3.5">
          <label
            htmlFor={`${id}-websiteUrl`}
            className={labelStyles}
          >
            Website URL *
          </label>
          <input
            id={`${id}-websiteUrl`}
            name="websiteUrl"
            type="url"
            autoComplete="url"
            placeholder="https://yourcompany.com"
            value={formData.websiteUrl}
            onChange={handleChange}
            className={inputStyles}
            required
          />
        </div>

        {/* Agreement */}
        <div className="mt-4 flex items-start gap-2">
          <input
            id={`${id}-agreeToTerms`}
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="
              mt-[2px] h-[13px] w-[13px]
              shrink-0 cursor-pointer
              rounded-[2px] border-white
              bg-white accent-white
              focus:ring-2 focus:ring-white/50
            "
            required
          />

          <label
            htmlFor={`${id}-agreeToTerms`}
            className="
              cursor-pointer text-[10px]
              sm:text-[11px] leading-[1.5]
              text-white/95
            "
          >
            I agree to be contacted by Ayatiworks about
            my growth roadmap request. We will never
            share your data.
          </label>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div
            role="alert"
            className="
              mt-4 rounded-md bg-white
              px-3 py-2 text-[12px] text-red-700
            "
          >
            {errorMessage}
          </div>
        )}

        {/* Information Message */}
        {infoMessage && (
          <div
            role="status"
            className="
              mt-4 rounded-md border
              border-white/30 bg-white/15
              px-3 py-2 text-center
              text-[12px] text-white
            "
          >
            {infoMessage}
          </div>
        )}

        {/* Submit Button */}
        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              group inline-flex min-h-[36px]
              max-w-full items-center
              justify-center gap-2 bg-white
              px-3 py-1.5 text-[#1240f4]
              shadow-sm transition-all
              duration-200 hover:bg-[#f3f6ff]
              hover:shadow-md active:scale-[0.98]
              disabled:opacity-75 disabled:cursor-not-allowed
            "
          >
            <span
              className="
                text-center text-[10px]
                sm:text-[11px] font-extrabold
                uppercase tracking-[0.01em]
                leading-tight
              "
            >
              {isSubmitting ? "PREPARING ROADMAP..." : "GET MY FREE GROWTH ROADMAP"}
            </span>

            <span
              className="
                flex h-[23px] w-[23px]
                shrink-0 items-center
                justify-center bg-[#f47721]
                text-white transition-transform
                duration-200
                group-hover:translate-x-0.5
              "
            >
              <HiArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </span>
          </button>
        </div>

        {/* Disclaimer */}
        <div
          className="
            mt-4 text-center
            text-[10px] sm:text-[11px]
            leading-[1.65] text-white/85
          "
        >
          <p
            className="
              flex flex-wrap items-center
              justify-center gap-1
            "
          >
            <HiOutlineLockClosed
              className="h-3 w-3"
              aria-hidden="true"
            />
            <span>
              No obligation. Just a clearer path
              to growth.
            </span>
          </p>
        </div>
      </form>
      )}
    </div>
  );
}
