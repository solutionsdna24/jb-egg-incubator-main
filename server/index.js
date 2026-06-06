import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const port = process.env.API_PORT || 5000;

app.use(cors());
app.use(express.json());

const requiredEnvVars = [
  "SMTP_USER",
  "SMTP_PASS",
  "ENQUIRY_TO_EMAIL",
];

const hasAllEnvVars = requiredEnvVars.every((key) => process.env[key]);

if (!hasAllEnvVars) {
  console.warn(
    "Missing one or more required environment variables: SMTP_USER, SMTP_PASS, ENQUIRY_TO_EMAIL",
  );
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const isValidPayload = (payload) => {
  const fullName = String(payload.fullName || "").trim();
  const email = String(payload.email || "").trim();
  const mobileNumber = String(payload.mobileNumber || "").trim();
  const shippingAddress = String(payload.shippingAddress || "").trim();
  const incubatorModel = String(payload.incubatorModel || "").trim();
  const quantity = Number(payload.quantity);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return (
    fullName.length >= 3 &&
    emailRegex.test(email) &&
    /^\d{10}$/.test(mobileNumber) &&
    shippingAddress.length >= 10 &&
    incubatorModel.length > 0 &&
    Number.isInteger(quantity) &&
    quantity >= 1
  );
};

app.post("/api/incubator-enquiry", async (req, res) => {
  try {
    if (!hasAllEnvVars) {
      return res.status(500).json({
        message: "Email service is not configured on server.",
      });
    }

    if (!isValidPayload(req.body)) {
      return res.status(400).json({
        message: "Please provide valid enquiry details.",
      });
    }

    const {
      fullName,
      email,
      mobileNumber,
      shippingAddress,
      incubatorModel,
      quantity,
      notes,
    } = req.body;

    const safeNotes = String(notes || "").trim();

    const textBody = [
      "New JB Egg Incubator Order Enquiry",
      "",
      `Full Name: ${fullName}`,
      `Email: ${email}`,
      `Mobile Number: ${mobileNumber}`,
      `Shipping Address: ${shippingAddress}`,
      `Incubator Model: ${incubatorModel}`,
      `Quantity: ${quantity}`,
      `Notes: ${safeNotes || "N/A"}`,
    ].join("\n");

    const textNew = `


                 JB EGG INCUBATOR
          Premium Poultry Incubation Solutions


============================================================

🔔 NEW ORDER ENQUIRY RECEIVED

A customer has submitted a new order enquiry through the website.

---

## CUSTOMER INFORMATION

👤 Full Name       : ${fullName}
📧 Email           : ${email}
📱 Mobile Number   : ${mobileNumber}

---

## ORDER INFORMATION

🥚 Incubator Model : ${incubatorModel}
📦 Quantity        : ${quantity}

---

## SHIPPING ADDRESS

${shippingAddress}

---

## ADDITIONAL NOTES

${safeNotes || "No additional notes provided."}

============================================================
ACTION REQUIRED
===============

Please review this enquiry and contact the customer.

Reply directly to:
${email}

---

JB EGG INCUBATOR
Website Order Enquiry Notification
Generated on: ${new Date().toLocaleString()}
--------------------------------------------

`

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ENQUIRY_TO_EMAIL,
      subject: "New JB Egg Incubator Order Enquiry",
      replyTo: email,
     text: textNew,
      html: `
       <div style="margin:0;padding:20px;background:#f4f6f9;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:700px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,0.08);">

<!-- Header -->
<tr>
  <td style="background:linear-gradient(135deg,#0f4c81,#1f7ae0);padding:30px;text-align:center;"
   style={{
        backgroundImage: cid:jbLogo}} >
  <img
      src="cid:jbLogo"
      alt="JB Egg Incubator"
      style="max-height:70px;margin-bottom:10px;"
    />
    <h1 style="margin:0;color:#ffffff;font-size:26px;">
      New Order Enquiry
    </h1>
    <p style="margin:8px 0 0;color:#dbeafe;font-size:14px;">
      JB Egg Incubator Website
    </p>
  </td>
</tr>

<!-- Content -->
<tr>
  <td style="padding:30px;">
    <p style="margin-top:0;color:#333;font-size:16px;">
      A new order enquiry has been submitted through the website.
    </p>

    <table width="100%" cellpadding="12" cellspacing="0" style="border-collapse:collapse;margin-top:20px;">
      
      <tr style="background:#f8fafc;">
        <td style="font-weight:bold;width:35%;border:1px solid #e5e7eb;">Full Name</td>
        <td style="border:1px solid #e5e7eb;">${fullName}</td>
      </tr>

      <tr>
        <td style="font-weight:bold;border:1px solid #e5e7eb;">Email</td>
        <td style="border:1px solid #e5e7eb;">
          <a href="mailto:${email}" style="color:#1f7ae0;text-decoration:none;">
            ${email}
          </a>
        </td>
      </tr>

      <tr style="background:#f8fafc;">
        <td style="font-weight:bold;border:1px solid #e5e7eb;">Mobile Number</td>
        <td style="border:1px solid #e5e7eb;">${mobileNumber}</td>
      </tr>

      <tr>
        <td style="font-weight:bold;border:1px solid #e5e7eb;">Shipping Address</td>
        <td style="border:1px solid #e5e7eb;">${shippingAddress}</td>
      </tr>

      <tr style="background:#f8fafc;">
        <td style="font-weight:bold;border:1px solid #e5e7eb;">Incubator Model</td>
        <td style="border:1px solid #e5e7eb;">${incubatorModel}</td>
      </tr>

      <tr>
        <td style="font-weight:bold;border:1px solid #e5e7eb;">Quantity</td>
        <td style="border:1px solid #e5e7eb;">${quantity}</td>
      </tr>

      <tr style="background:#f8fafc;">
        <td style="font-weight:bold;border:1px solid #e5e7eb;">Notes</td>
        <td style="border:1px solid #e5e7eb;">
          ${safeNotes || "No additional notes provided."}
        </td>
      </tr>

    </table>

    <div style="margin-top:25px;padding:15px;background:#eef6ff;border-left:4px solid #1f7ae0;border-radius:6px;">
      <strong>Action Required:</strong><br/>
      Please contact the customer regarding this enquiry.
    </div>
  </td>
</tr>

<tr>
  <td style="background:#f8fafc;padding:20px;text-align:center;border-top:1px solid #e5e7eb;">
    <p style="margin:0;font-size:13px;color:#6b7280;">
      This email was automatically generated from the JB Egg Incubator website.
    </p>
    <p style="margin:8px 0 0;font-size:12px;color:#9ca3af;">
      © ${new Date().getFullYear()} JB Egg Incubator. All rights reserved.
    </p>
  </td>
</tr>

  </table>
</div>

      `
    });

    return res.status(200).json({
      message: "Enquiry submitted successfully.",
    });
  } catch (error) {
    console.error("Enquiry API error:", error);
    return res.status(500).json({
      message: "Failed to submit enquiry. Please try again later.",
    });
  }
});

app.get("/api/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Enquiry API server running on port ${port}`);
});
