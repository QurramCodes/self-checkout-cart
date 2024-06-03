const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault(); 
  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();

  if (validateEmail(email)) {
    alert(`Thank you! Your email ${email} has been submitted.`);
    console.log("Email:", email); 
    emailInput.value = "";
    window.location.href = "http://192.168.0.101";
  } else {
    alert("Please enter a valid email address.");
  }
});
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}


ScrollReveal().reveal(".container__left h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".container__left, .container__email, .container__btn", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".container__right h4", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".container__right h2", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".container__right h3", {
  ...scrollRevealOption,
  delay: 3000,
});
ScrollReveal().reveal(".container__right p", {
  ...scrollRevealOption,
  delay: 3500,
});

ScrollReveal().reveal(".container__right .tent-1", {
  duration: 1000,
  delay: 4000,
});
ScrollReveal().reveal(".container__right .tent-2", {
  duration: 1000,
  delay: 4500,
});

ScrollReveal().reveal(".location", {
  ...scrollRevealOption,
  origin: "left",
  delay: 5000,
});

ScrollReveal().reveal(".socials span", {
  ...scrollRevealOption,
  origin: "top",
  delay: 5500,
  interval: 500,
});
