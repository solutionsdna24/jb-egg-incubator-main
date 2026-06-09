import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

interface EnquiryFormData {
  fullName: string;
  email: string;
  mobileNumber: string;
  shippingAddress: string;
  incubatorModel: string;
  quantity: string;
  notes: string;
}


interface EnquiryFormErrors {
  fullName?: string;
  email?: string;
  mobileNumber?: string;
  shippingAddress?: string;
  incubatorModel?: string;
  quantity?: string;
}

const initialFormData: EnquiryFormData = {
  fullName: "",
  email: "",
  mobileNumber: "",
  shippingAddress: "",
  incubatorModel: "",
  quantity: "1",
  notes: "I am interested in purchasing an egg incubator. Please contact me with pricing and delivery details."};

const incubatorOptions = [
  "JBW100",
  "JBST100",
  "JBI80M",
  "Custom Requirement",
];

const JbEggIncubatorOrder = () => {
  const [formData, setFormData] = useState<EnquiryFormData>(initialFormData);
  const [errors, setErrors] = useState<EnquiryFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const previousTitle = document.title;
    const previousDescription = document
      .querySelector('meta[name="description"]')
      ?.getAttribute("content");

    document.title = "JB Egg Incubator Order Enquiry | JB Incubators";

    let descriptionMetaTag = document.querySelector('meta[name="description"]');
    if (!descriptionMetaTag) {
      descriptionMetaTag = document.createElement("meta");
      descriptionMetaTag.setAttribute("name", "description");
      document.head.appendChild(descriptionMetaTag);
    }
    descriptionMetaTag.setAttribute(
      "content",
      "Submit your JB Egg Incubator order enquiry with model, quantity, and shipping details. Our team will contact you shortly.",
    );

    return () => {
      document.title = previousTitle;
      if (previousDescription) {
        descriptionMetaTag?.setAttribute("content", previousDescription);
      }
    };
  }, []);

  const fieldClassName = useMemo(
    () =>
      "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100",
    [],
  );

  const validateForm = (data: EnquiryFormData): EnquiryFormErrors => {
    const validationErrors: EnquiryFormErrors = {};

    if (data.fullName.trim().length < 3) {
      validationErrors.fullName = "Full Name must be at least 3 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      validationErrors.email = "Enter a valid email address.";
    }

    if (!/^\d{10}$/.test(data.mobileNumber.trim())) {
      validationErrors.mobileNumber = "Mobile Number must be exactly 10 digits.";
    }

    if (data.shippingAddress.trim().length < 10) {
      validationErrors.shippingAddress = "Shipping Address must be at least 10 characters.";
    }

    if (!data.incubatorModel) {
      validationErrors.incubatorModel = "Please select an incubator model.";
    }

    const qty = Number(data.quantity);
    if (!Number.isInteger(qty) || qty < 1) {
      validationErrors.quantity = "Quantity must be a positive number (minimum 1).";
    }

    return validationErrors;
  };

  const handleChange = (name: keyof EnquiryFormData, value: string) => {
    if (name === "mobileNumber") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    if (name === "quantity") {
      value = value.replace(/[^\d]/g, "");
    }

    setFormData((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please correct the highlighted fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxSx2PqFeV7otUjXCdccZaO6nQXm9Ui-wTMCeB1LJKCPJhaDt88FuCb6GmhUVWOjTJBBQ/exec",
        {
          method: "POST",
          mode: "no-cors",
        
          body: JSON.stringify(formData),
        }
      );
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "d12fbcaf-2983-43c2-ac22-1f3b436d12d4",
    
          subject: "New JB Egg Incubator Order Enquiry",
    
          fullName: formData.fullName,
          email: formData.email,
          mobileNumber: formData.mobileNumber,
          shippingAddress: formData.shippingAddress,
          incubatorModel: formData.incubatorModel,
          quantity: formData.quantity,
          notes: formData.notes,
        }),      });

      if (!response.ok) {
        const responseData = (await response.json().catch(() => null)) as
          | { message?: string }
          | null;
        throw new Error(responseData?.message || "Unable to submit enquiry.");
      }

      toast.success("Enquiry submitted successfully. Our team will contact you shortly.");
      setFormData(initialFormData);
      setErrors({});
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong while submitting.";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-600 px-4 py-16 text-white">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              JB Egg Incubator Order Enquiry
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-blue-100 sm:text-base">
              Submit your requirement and our team will contact you shortly.
            </p>
          </div>
        </section>

        <section className="px-4 py-10 sm:py-14">
          <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-slate-800">
                    Full Name <span aria-hidden="true" className="text-red-600">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="full Name"
                    type="text"
                    className={fieldClassName}
                    value={formData.fullName}
                    onChange={(event) => handleChange("fullName", event.target.value)}
                    autoComplete="name"
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="mt-1 text-sm text-red-600">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-800">
                    Email Address <span aria-hidden="true" className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={fieldClassName}
                    value={formData.email}
                    onChange={(event) => handleChange("email", event.target.value)}
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    placeholder="name@example.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="mobileNumber" className="mb-2 block text-sm font-semibold text-slate-800">
                    Mobile Number <span aria-hidden="true" className="text-red-600">*</span>
                  </label>
                  <input
                    id="mobileNumber"
                    name="mobileNumber"
                    inputMode="numeric"
                    type="tel"
                    className={fieldClassName}
                    value={formData.mobileNumber}
                    onChange={(event) => handleChange("mobileNumber", event.target.value)}
                    autoComplete="tel"
                    aria-invalid={Boolean(errors.mobileNumber)}
                    aria-describedby={errors.mobileNumber ? "mobileNumber-error" : undefined}
                    placeholder="10-digit mobile number"
                  />
                  {errors.mobileNumber && (
                    <p id="mobileNumber-error" className="mt-1 text-sm text-red-600">
                      {errors.mobileNumber}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="shippingAddress"
                    className="mb-2 block text-sm font-semibold text-slate-800"
                  >
                    Shipping Address <span aria-hidden="true" className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="shippingAddress"
                    name="shippingAddress"
                    className={`${fieldClassName} min-h-28 resize-y`}
                    value={formData.shippingAddress}
                    onChange={(event) => handleChange("shippingAddress", event.target.value)}
                    autoComplete="street-address"
                    aria-invalid={Boolean(errors.shippingAddress)}
                    aria-describedby={errors.shippingAddress ? "shippingAddress-error" : undefined}
                    placeholder="Enter complete shipping address"
                  />
                  {errors.shippingAddress && (
                    <p id="shippingAddress-error" className="mt-1 text-sm text-red-600">
                      {errors.shippingAddress}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="incubatorModel"
                    className="mb-2 block text-sm font-semibold text-slate-800"
                  >
                    Select Incubator Model <span aria-hidden="true" className="text-red-600">*</span>
                  </label>
                  <select
                    id="incubatorModel"
                    name="incubatorModel"
                    className={fieldClassName}
                    value={formData.incubatorModel}
                    onChange={(event) => handleChange("incubatorModel", event.target.value)}
                    aria-invalid={Boolean(errors.incubatorModel)}
                    aria-describedby={errors.incubatorModel ? "incubatorModel-error" : undefined}
                  >
                    <option value="">Choose a model</option>
                    {incubatorOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.incubatorModel && (
                    <p id="incubatorModel-error" className="mt-1 text-sm text-red-600">
                      {errors.incubatorModel}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="quantity" className="mb-2 block text-sm font-semibold text-slate-800">
                    Quantity <span aria-hidden="true" className="text-red-600">*</span>
                  </label>
                  <input
                    id="quantity"
                    name="quantity"
                    inputMode="numeric"
                    type="text"
                    className={fieldClassName}
                    value={formData.quantity}
                    onChange={(event) => handleChange("quantity", event.target.value)}
                    aria-invalid={Boolean(errors.quantity)}
                    aria-describedby={errors.quantity ? "quantity-error" : undefined}
                    placeholder="Minimum 1"
                  />
                  {errors.quantity && (
                    <p id="quantity-error" className="mt-1 text-sm text-red-600">
                      {errors.quantity}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="notes" className="mb-2 block text-sm font-semibold text-slate-800">
                    Additional Notes / Message
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    className={`${fieldClassName} min-h-24 resize-y`}
                    value={formData.notes}
                    onChange={(event) => handleChange("notes", event.target.value)}
                    placeholder="Any special requirement, delivery preference, or custom request"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-6 py-3 text-base font-semibold text-white shadow-sm transition duration-200 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Submitting Enquiry..." : "Submit Enquiry"}
              </button>

              <p className="text-center text-xs text-slate-500">
                By submitting this form, you agree to be contacted by the JB Incubator team.
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JbEggIncubatorOrder;
