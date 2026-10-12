
"use client";

import React, { useState } from "react";
import { HiArrowRight, HiOutlineLockClosed } from "react-icons/hi2";

interface AuditFormProps {
  id?: string;
}

interface FormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  websiteUrl: string;
  companyStage: string;
  monthlyMarketingBudget: string;
  agreeToTerms: boolean;
}

const initialFormData: FormData = {
  fullName: "",
  workEmail: "",
  companyName: "",
  websiteUrl: "",
  companyStage: "",
  monthlyMarketingBudget: "",
  agreeToTerms: false,
};

const inputStyles = `
  w-full
  h-[42px]
  bg-white
  text-[#1e293b]
  placeholder:text-[#94a3b8]
  text-[12px]
  sm:text-[13px]
  font-normal
  rounded-[5px]
  px-3
  outline-none
  border border-[#e2e8f0]
  transition-all duration-200
  focus:border-[#93c5fd]
  focus:ring-2 focus:ring-white/30
`;

const labelStyles = `
  block
  mb-[6px]
  text-[11px]
  sm:text-[12px]
  font-semibold
  text-white
  leading-normal
`;

export default function AuditForm({
  id = "audit-form",
}: AuditFormProps) {
  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [errorMessage, setErrorMessage] = useState("");
  const [infoMessage, setInfoMessage] = useState("");
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const target = e.target;

  if (
    target instanceof HTMLInputElement &&
    target.type === "checkbox"
  ) {
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.checked,
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

  const handleSubmit = (
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

    // UI preview only.
    // No customer information is submitted or stored.
    // Connect a verified server-side endpoint later.
    setInfoMessage(
      "This form is currently a design preview. " +
      "Your details have not been sent."
    );
  };

  return (
    <div
      id={id}
      className="
        relative
        w-full
        overflow-hidden
        rounded-[14px]
        bg-[#1240f4]
        px-5 py-5
        sm:px-6 sm:py-6
        lg:px-7 lg:py-7
        text-white
      "
    >
      <form
        onSubmit={handleSubmit}
        className="w-full"
        noValidate
      >
        {/* FORM FIELDS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-x-3
            gap-y-3.5
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

          {/* Website URL */}
          <div>
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
                  appearance-none
                  pr-9
                  cursor-pointer
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
                  pointer-events-none
                  absolute
                  right-3 top-1/2
                  h-4 w-4
                  -translate-y-1/2
                  text-[#64748b]
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
                  appearance-none
                  pr-9
                  cursor-pointer
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
                  pointer-events-none
                  absolute
                  right-3 top-1/2
                  h-4 w-4
                  -translate-y-1/2
                  text-[#64748b]
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

        {/* AGREEMENT */}
        <div className="mt-4 flex items-start gap-2">
          <input
            id={`${id}-agreeToTerms`}
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="
              mt-[2px]
              h-[13px] w-[13px]
              shrink-0
              cursor-pointer
              rounded-[2px]
              border-white
              bg-white
              accent-white
              focus:ring-2
              focus:ring-white/50
            "
            required
          />

          <label
            htmlFor={`${id}-agreeToTerms`}
            className="
              cursor-pointer
              text-[10px]
              sm:text-[11px]
              leading-[1.5]
              text-white/95
            "
          >
            I agree to be contacted by Ayatiworks
            about my audit request. Your details
            are intended only for this request;
            submission is not connected yet.
          </label>
        </div>

        {/* ERROR / INFORMATION */}
        {errorMessage && (
          <div
            role="alert"
            className="
              mt-4 rounded-md
              bg-white px-3 py-2
              text-[12px]
              text-red-700
            "
          >
            {errorMessage}
          </div>
        )}

        {infoMessage && (
          <div
            role="status"
            className="
              mt-4 rounded-md
              border border-white/30
              bg-white/15 px-3 py-2
              text-center text-[12px]
              text-white
            "
          >
            {infoMessage}
          </div>
        )}

        {/* SUBMIT BUTTON */}
        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="
              group
              inline-flex
              min-h-[36px]
              max-w-full
              items-center
              justify-center
              gap-2
              bg-white
              px-3 py-1.5
              text-[#1240f4]
              shadow-sm
              transition-all
              duration-200
              hover:bg-[#f3f6ff]
              hover:shadow-md
              active:scale-[0.98]
            "
          >
            <span
              className="
                text-center
                text-[10px]
                sm:text-[11px]
                font-extrabold
                uppercase
                tracking-[0.01em]
                leading-tight
              "
            >
              GET MY FREE GROWTH ROADMAP
            </span>

            <span
              className="
                flex
                h-[23px] w-[23px]
                shrink-0
                items-center
                justify-center
                bg-[#f47721]
                text-white
                transition-transform
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

        {/* DISCLAIMER */}
        <div
          className="
            mt-4
            text-center
            text-[10px]
            sm:text-[11px]
            leading-[1.65]
            text-white/85
          "
        >
          <p
            className="
              flex flex-wrap
              items-center
              justify-center
              gap-1
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

          <p>
            Audit booking and scheduling are not
            connected yet. No details will be sent.
          </p>
        </div>
      </form>
    </div>
  );
}
