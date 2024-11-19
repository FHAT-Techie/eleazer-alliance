const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com", // Replace with your email
    pass: "your-email-password-or-app-password", // Use an app password if 2FA is enabled
  },
});

// Route to Handle Contact Form
app.post("/send-contact-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields in contact form." });
  }

  const emailContent = `
    Name: ${name}
    Email: ${email}
    Message: ${message}
  `;

  const mailOptions = {
    from: `"Contact Inquiry" <your-email@gmail.com>`,
    to: "recipient-email@example.com", // Replace with your email
    subject: "New Contact Form Submission",
    text: emailContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Contact email sent: ", info.response);
    res.status(200).json({ message: "Contact form submitted successfully!" });
  } catch (error) {
    console.error("Error sending contact email:", error);
    res.status(500).json({ error: "Failed to send contact email." });
  }
});

// Route to Handle Partnership Form
app.post("/send-partnership-email", async (req, res) => {
  const {
    partnerName,
    partnerEmail,
    partnerPhoneNumber,
    partnerOrganizationName,
    partnerOrganizationWebsite,
    partnerOrganizationType,
    otherOrganizationType,
    howWouldYouPartner,
    otherHowWouldYouPartner,
    partnershipIdea,
    howDidYouHearAboutUs,
    additionalCommentOrQuestion,
    communicationAgreement,
  } = req.body;

  // Validate required fields
  if (!partnerName || !partnerEmail || !partnerPhoneNumber || !howWouldYouPartner?.length) {
    return res.status(400).json({ error: "Missing required fields in partnership form." });
  }

  const emailContent = `
    Name: ${partnerName}
    Email: ${partnerEmail}
    Phone: ${partnerPhoneNumber}
    Organization Name: ${partnerOrganizationName || "N/A"}
    Organization Website: ${partnerOrganizationWebsite || "N/A"}
    Organization Type: ${partnerOrganizationType || otherOrganizationType || "N/A"}
    How Would You Partner: ${howWouldYouPartner.join(", ")}
    Other Partnership Type: ${otherHowWouldYouPartner || "N/A"}
    Partnership Idea: ${partnershipIdea || "N/A"}
    How Did You Hear About Us: ${howDidYouHearAboutUs || "N/A"}
    Additional Comment or Question: ${additionalCommentOrQuestion || "N/A"}
    Communication Agreement: ${communicationAgreement ? "Agreed" : "Not Agreed"}
  `;

  const mailOptions = {
    from: `"Partnership Inquiry" <your-email@gmail.com>`,
    to: "recipient-email@example.com", // Replace with your email
    subject: "New Partnership Inquiry",
    text: emailContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Partnership email sent: ", info.response);
    res.status(200).json({ message: "Partnership form submitted successfully!" });
  } catch (error) {
    console.error("Error sending partnership email:", error);
    res.status(500).json({ error: "Failed to send partnership email." });
  }
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
