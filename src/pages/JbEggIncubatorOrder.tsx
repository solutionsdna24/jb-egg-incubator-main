import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PromoBar from "@/components/PromoBar";
import SeoHead from "@/components/SeoHead";
import { whatsAppUrl } from "@/lib/social";
import { FormEvent, useMemo, useState } from "react";
import { toast } from "sonner";
import { Phone, MessageCircle, Truck, Shield, Zap } from "lucide-react";

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
  "JB528C (528+104 Combine)",
  "JB160A (160 Egg Automatic)",
  "JB240C (240+80 Combine)",
  "JB612C (612+204 Combine)",
  "JB816C (816+272 Combine)",
  "Custom Requirement",
];

const JbEggIncubatorOrder = () => {
  const [formData, setFormData] = useState<EnquiryFormData>(initialFormData);
  const [errors, setErrors] = useState<EnquiryFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fieldClassName = useMemo(
    () =>
      "w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-stone-800 outline-none transition duration-200 placeholder:text-stone-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100",
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
    <div className="page-shell">
      <SeoHead page="order" />
      <Header />
      <PromoBar />
      <main>
        <section className="relative overflow-hidden px-4 py-14 sm:py-16 text-center">
          <div className="absolute inset-0 hero-grid opacity-60" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/80 via-white to-stone-50 z-0" aria-hidden="true" />
          <div className="hero-blob top-0 right-[15%] h-40 w-40 bg-emerald-200/50 animate-blob z-0" aria-hidden="true" />
          <div className="hero-blob bottom-0 left-[10%] h-48 w-48 bg-orange-200/40 animate-blob animation-delay-300 z-0" aria-hidden="true" />

          <div className="relative z-10 mx-auto max-w-4xl animate-fade-in-up">
            <span className="inline-block text-xs font-medium uppercase tracking-widest text-orange-600 mb-3">
              Limited Stock · Selling Fast
            </span>
            <h1 className="text-3xl font-semibold leading-tight text-stone-800 sm:text-4xl md:text-5xl">
              JB Egg Incubator Order Enquiry
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-stone-600 sm:text-base">
              Submit your requirement — our team responds quickly with pricing, stock status & delivery details.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <a href="tel:+918767189437" className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700 hover:border-emerald-200 transition-colors">
                <Phone className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                Call Now
              </a>
              <a href={whatsAppUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700 hover:bg-emerald-100 transition-colors">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp Order
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 pb-12 sm:pb-16">
          <div className="mx-auto max-w-3xl">
            <div className="grid grid-cols-3 gap-3 mb-6 animate-fade-in-up animation-delay-200">
              {[
                { icon: Zap, text: "From ₹2,700" },
                { icon: Truck, text: "Pan-India" },
                { icon: Shield, text: "1 Yr Warranty" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex flex-col items-center gap-1 rounded-xl border border-stone-200 bg-white py-3 px-2 text-center text-xs sm:text-sm text-stone-600">
                  <Icon className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  {text}
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-8 animate-fade-in-up animation-delay-300">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-stone-800">
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
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-stone-800">
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
                  <label htmlFor="mobileNumber" className="mb-2 block text-sm font-medium text-stone-800">
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
                    className="mb-2 block text-sm font-medium text-stone-800"
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
                    className="mb-2 block text-sm font-medium text-stone-800"
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
                  <label htmlFor="quantity" className="mb-2 block text-sm font-medium text-stone-800">
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
                  <label htmlFor="notes" className="mb-2 block text-sm font-medium text-stone-800">
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
                className="btn-accent w-full py-3.5 text-base disabled:cursor-not-allowed disabled:opacity-70 hover:scale-[1.01] transition-transform"
              >
                {isSubmitting ? "Submitting Enquiry..." : "Submit Order Enquiry"}
              </button>

              <p className="text-center text-xs text-stone-500">
                By submitting this form, you agree to be contacted by the JB Incubator team.
              </p>
            </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JbEggIncubatorOrder;
