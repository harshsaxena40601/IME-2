// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Add click handlers for enrollment buttons
document.querySelectorAll(".enroll-btn, .enroll-main-btn").forEach((button) => {
  button.addEventListener("click", function () {
    alert("Enrollment functionality would be implemented here!");
  });
});

// Add hover effects for module items
document.querySelectorAll(".module-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-4px)";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

// Add intersection observer for scroll animations
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  document
    .querySelectorAll(".module-item, .audience-card, .feature-item, .info-card")
    .forEach((el) => {
      observer.observe(el);
    });
}

// Add dynamic pricing updates
function updatePricing() {
  const priceElement = document.querySelector(".price-amount");
  const originalPrice = 399;
  const discountPrice = 299;
  const savings = originalPrice - discountPrice;

  // You could add discount timer logic here
  console.log(`Special offer: Save $${savings} on this course!`);
}

updatePricing();

// Add form validation for future contact forms
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Add mobile menu toggle (for future mobile navigation)
function toggleMobileMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

// Add progress tracking for course modules
function trackProgress(moduleId) {
  const progress = JSON.parse(localStorage.getItem("courseProgress") || "{}");
  progress[moduleId] = true;
  localStorage.setItem("courseProgress", JSON.stringify(progress));
  updateProgressDisplay();
}

function updateProgressDisplay() {
  const progress = JSON.parse(localStorage.getItem("courseProgress") || "{}");
  const totalModules = 8;
  const completedModules = Object.keys(progress).length;
  const progressPercent = (completedModules / totalModules) * 100;

  // Update progress display if progress bar exists
  const progressBar = document.querySelector(".progress-bar");
  if (progressBar) {
    progressBar.style.width = progressPercent + "%";
  }
}

// Initialize progress display on page load
updateProgressDisplay();
