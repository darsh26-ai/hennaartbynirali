// Mobile navigation
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

// Set minimum booking date to today
const dateInput = document.getElementById("date");

const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");

dateInput.min = `${yyyy}-${mm}-${dd}`;

// ==========================================
// EMAILJS CONFIGURATION
// ==========================================

// Replace this with your EmailJS Public Key
const EMAILJS_PUBLIC_KEY = "uIYNGzThqukn6qBs0";

// Replace these with your actual EmailJS IDs
const EMAILJS_SERVICE_ID = "service_243257g";
const EMAILJS_TEMPLATE_ID = "template_4q8yq8h";


// Initialize EmailJS
emailjs.init({
  publicKey: EMAILJS_PUBLIC_KEY
});



// Booking form
const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const service = document.getElementById("service").value;
  const guests = document.getElementById("guests").value;
  const message = document.getElementById("message").value;

  /*
    IMPORTANT:
    This demo does not send the booking anywhere yet.

    For production, connect this form to:
    - Formspree
    - Netlify Forms
    - EmailJS
    - Your own backend
    - A booking platform
  */

  console.log({
    name,
    email,
    phone,
    date,
    service,
    guests,
    message
  });

  formMessage.style.display = "block";
  formMessage.textContent =
    `Thank you, ${name}! Your booking request has been received. ` +
    `Nirali will get back to you soon.`;

  bookingForm.reset();
});
