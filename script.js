// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


// ==========================================
// SET MINIMUM BOOKING DATE TO TODAY
// ==========================================

const dateInput = document.getElementById("date");

const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");

dateInput.min = `${yyyy}-${mm}-${dd}`;


// ==========================================
// EMAILJS CONFIGURATION
// ==========================================

const EMAILJS_PUBLIC_KEY = "uIYNGzThqukn6qBs0";
const EMAILJS_SERVICE_ID = "service_243257g";
const EMAILJS_TEMPLATE_ID = "template_4q8yq8h";


// Initialize EmailJS
emailjs.init({
  publicKey: EMAILJS_PUBLIC_KEY
});


// ==========================================
// BOOKING FORM
// ==========================================

const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

bookingForm.addEventListener("submit", function (event) {

  // Stop normal form submission
  event.preventDefault();

  const submitButton = bookingForm.querySelector(
    'button[type="submit"]'
  );

  // Show sending status
  submitButton.disabled = true;
  submitButton.textContent = "Sending Request...";

  formMessage.style.display = "block";
  formMessage.className = "form-message";
  formMessage.textContent = "Sending your booking request...";

  // ==========================================
  // SEND FORM THROUGH EMAILJS
  // ==========================================

  emailjs.sendForm(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    bookingForm
  )

  .then(function (response) {

    console.log(
      "EMAILJS SUCCESS:",
      response.status,
      response.text
    );

    // Get customer's name for confirmation message
    const name = document.getElementById("name").value;

    formMessage.className = "form-message success";

    formMessage.textContent =
      `Thank you, ${name}! Your booking request has been sent successfully. ` +
      `Nirali will get back to you soon.`;

    // Clear form
    bookingForm.reset();

  })

  .catch(function (error) {

    console.error("EMAILJS ERROR:", error);

    formMessage.className = "form-message error";

    formMessage.textContent =
      "Sorry, we could not send your booking request. " +
      "Please try again or contact us directly.";

  })

  .finally(function () {

    // Restore button
    submitButton.disabled = false;
    submitButton.textContent = "Send Booking Request ✦";

  });

});
