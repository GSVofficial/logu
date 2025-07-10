// Import GSAP and ScrollTrigger
const gsap = window.gsap
const ScrollTrigger = window.ScrollTrigger

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Initialize animations when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeAnimations()
  initializeNavigation()
  initializeSkillBars()
  initializeCounters()
  initializeContactForm()
})

// Navigation functionality
function initializeNavigation() {
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")
  const navLinks = document.querySelectorAll(".nav-link")

  // Toggle mobile menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = link.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // Change navbar background on scroll
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(255, 255, 255, 0.98)"
      navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)"
      navbar.style.boxShadow = "none"
    }
  })
}

// GSAP Animations
function initializeAnimations() {
  // Hero section animations
  const heroTl = gsap.timeline()

  heroTl
    .from(".hero-title .title-line", {
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
    })
    .from(
      ".hero-subtitle",
      {
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.5",
    )
    .from(
      ".hero-description",
      {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.4",
    )
    .from(
      ".hero-buttons .btn",
      {
        duration: 0.6,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out",
      },
      "-=0.3",
    )
    .from(
      ".code-animation",
      {
        duration: 1,
        scale: 0.8,
        opacity: 0,
        ease: "power3.out",
      },
      "-=0.8",
    )
    .from(
      ".floating-element",
      {
        duration: 1,
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "-=0.5",
    )

  // Section animations with ScrollTrigger
  gsap.utils.toArray("section:not(.hero)").forEach((section) => {
    gsap.from(section.querySelector(".section-title"), {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    })

    gsap.from(section.querySelector(".section-subtitle"), {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      duration: 0.8,
      y: 30,
      opacity: 0,
      delay: 0.2,
      ease: "power3.out",
    })
  })

  // About section animations
  gsap.from(".about-card", {
    scrollTrigger: {
      trigger: ".about",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play none none reverse",
    },
    duration: 0.8,
    x: -50,
    opacity: 0,
    ease: "power3.out",
  })

  gsap.from(".stat-item", {
    scrollTrigger: {
      trigger: ".stats-grid",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
    duration: 0.6,
    y: 30,
    opacity: 0,
    stagger: 0.1,
    ease: "power3.out",
  })

  gsap.from(".highlight-item", {
    scrollTrigger: {
      trigger: ".learning-highlights",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
    duration: 0.6,
    x: 50,
    opacity: 0,
    stagger: 0.1,
    ease: "power3.out",
  })

  gsap.from(".skill-item", {
    scrollTrigger: {
      trigger: ".skills",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play none none reverse",
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out",
  })

  gsap.from(".learning-goals", {
    scrollTrigger: {
      trigger: ".skills",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play none none reverse",
    },
    duration: 0.8,
    x: 50,
    opacity: 0,
    ease: "power3.out",
  })

  gsap.from(".goal-item", {
    scrollTrigger: {
      trigger: ".learning-goals",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
    duration: 0.6,
    scale: 0.8,
    opacity: 0,
    stagger: 0.1,
    ease: "back.out(1.7)",
  })

  // Projects section animations
  gsap.from(".project-card", {
    scrollTrigger: {
      trigger: ".projects",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play none none reverse",
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out",
  })

  // Contact section animations
  gsap.from(".contact-item", {
    scrollTrigger: {
      trigger: ".contact",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play none none reverse",
    },
    duration: 0.6,
    x: -30,
    opacity: 0,
    stagger: 0.1,
    ease: "power3.out",
  })

  gsap.from(".contact-form", {
    scrollTrigger: {
      trigger: ".contact",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play none none reverse",
    },
    duration: 0.8,
    x: 30,
    opacity: 0,
    ease: "power3.out",
  })

  // Floating elements animation
  gsap.to(".floating-element", {
    duration: 3,
    y: -20,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut",
    stagger: {
      each: 0.5,
      from: "random",
    },
  })
}

// Skill bars animation
function initializeSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress")

  skillBars.forEach((bar) => {
    const width = bar.getAttribute("data-width")

    gsap.to(bar, {
      scrollTrigger: {
        trigger: bar,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      width: width + "%",
      duration: 1.5,
      ease: "power3.out",
      delay: 0.2,
    })
  })
}

// Counter animation
function initializeCounters() {
  const counters = document.querySelectorAll(".stat-number")

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.getAttribute("data-target"))

    gsap.to(counter, {
      scrollTrigger: {
        trigger: counter,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      innerHTML: target,
      duration: 2,
      ease: "power3.out",
      snap: { innerHTML: 1 },
      onUpdate: () => {
        counter.innerHTML = Math.ceil(counter.innerHTML)
      },
    })
  })
}

// Contact form functionality
function initializeContactForm() {
  const form = document.getElementById("contactForm")

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(form)
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    // Simple validation
    if (!name || !email || !subject || !message) {
      showNotification("Please fill in all fields", "error")
      return
    }

    if (!isValidEmail(email)) {
      showNotification("Please enter a valid email address", "error")
      return
    }

    // Simulate form submission
    const submitBtn = form.querySelector('button[type="submit"]')
    const originalText = submitBtn.textContent

    submitBtn.textContent = "Sending..."
    submitBtn.disabled = true

    setTimeout(() => {
      showNotification("Message sent successfully! I'll get back to you soon.", "success")
      form.reset()
      submitBtn.textContent = originalText
      submitBtn.disabled = false
    }, 2000)
  })
}

// Utility functions
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function showNotification(message, type) {
  // Create notification element
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.textContent = message

  // Style the notification
  Object.assign(notification.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "15px 20px",
    borderRadius: "8px",
    color: "white",
    fontWeight: "500",
    zIndex: "10000",
    transform: "translateX(400px)",
    transition: "transform 0.3s ease",
    backgroundColor: type === "success" ? "#10b981" : "#ef4444",
  })

  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(400px)"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 5000)
}

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll(".floating-element")

  parallaxElements.forEach((element, index) => {
    const speed = element.getAttribute("data-speed") || 1
    const yPos = -(scrolled * speed * 0.1)
    element.style.transform = `translateY(${yPos}px)`
  })
})

// Add smooth reveal animation for elements coming into view
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in")
    }
  })
}, observerOptions)

// Observe all animatable elements
document.querySelectorAll(".project-card, .skill-item, .contact-item").forEach((el) => {
  observer.observe(el)
})

// Add CSS for intersection observer animations
const style = document.createElement("style")
style.textContent = `
    .project-card,
    .skill-item,
    .contact-item {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`
document.head.appendChild(style)
