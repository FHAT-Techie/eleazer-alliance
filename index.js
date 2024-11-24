let primaryBTN = document.querySelectorAll(".primaryBTN");
let menuBar = document.querySelector(".fa-bars");
let sideBar = document.querySelector(".mobile-sideBar");
let cancelSidebar = document.querySelector(".fa-rectangle-xmark");
let sideBarContainer = document.querySelector(".sideBar-container");

function socialMediaLinking() {
  let tikTok = document.querySelectorAll(".tikTok");
  let instagram = document.querySelectorAll(".instagram");
  let linkedIn = document.querySelectorAll(".linkedIn");
  let youTube = document.querySelectorAll(".youTube");
  let facebook = document.querySelectorAll(".facebook");

  tikTok.forEach((item) => {
    item.addEventListener("click", () => {
      window.open(
        "https://www.tiktok.com/@eleazar_alliance?_t=8pRtmQwnpBt&_r=1",
        "_blank"
      );
    });
  });

  instagram.forEach((item) => {
    item.addEventListener("click", () => {
      window.open(
        "https://www.instagram.com/eleazar_alliance?igsh=bG9oMnc2azFkMWpu",
        "_blank"
      );
    });
  });

  linkedIn.forEach((item) => {
    item.addEventListener("click", () => {
      window.open(
        "https://www.linkedin.com/company/eleazar-alliance",
        "_blank"
      );
    });
  });

  youTube.forEach((item) => {
    item.addEventListener("click", () => {
      window.open(
        "https://youtube.com/@eleazaralliance?si=gdmG4bsAgWzAUsY_",
        "_blank"
      );
    });
  });

  facebook.forEach((item) => {
    item.addEventListener("click", () => {
      window.open(
        " https://www.facebook.com/share/CjM6ZsYdh6ivuEcY/?mibextid=qi2Omg",
        "_blank"
      );
    });
  });
}

let primaryButton = () => {
  primaryBTN.forEach((item) => {
    item.addEventListener("click", () => {
      window.location.href = "./donate.html";
    });
  });
};

let sideBarFunction = () => {
  menuBar.addEventListener("click", () => {
    sideBar.style.display = "flex";
  });

  cancelSidebar.addEventListener("click", () => {
    sideBar.style.display = "none";
  });

  sideBar.addEventListener("click", (event) => {
    if (!sideBarContainer.contains(event.target)) {
      sideBar.style.display = "none";
    }
  });
};

function HomePageToAboutUS() {
  let AboutUsBTN = document.querySelectorAll(".toAboutUs");

  AboutUsBTN.forEach((item) => {
    item.addEventListener("click", () => {
      window.location.href = "./About-Us.html";
    });
  });
}

function HomePagetoBlogPage() {
  let toBlogPage = document.querySelectorAll(".toBlogPage");

  toBlogPage.forEach((item) => {
    item.addEventListener("click", () => {
      window.location.href = "./Blog.html";
    });
  });
}

// function setupResponsiveTextToggle() {
//   const workItems = document.querySelectorAll('.our-work-item');

//   workItems.forEach(item => {
//     const text = item.querySelector('.our-work-note p');

//     if (window.innerWidth > 768) { // Desktop view
//       item.addEventListener('mouseenter', () => {
//         text.style.display = 'block';
//       });

//       item.addEventListener('mouseleave', () => {
//         text.style.display = 'none';
//       });
//     } else { // Mobile view
//       item.addEventListener('click', () => {
//         // Toggle visibility on each click
//         text.style.display = text.style.display === 'block' ? 'none' : 'block';
//       });
//     }
//   });
// }

// setupResponsiveTextToggle();

// window.addEventListener('resize', setupResponsiveTextToggle);


// function setupTestimonialSlider(containerId, prevBtnId, stopBtnId, nextBtnId) {
//   const testimonialContainer = document.getElementById(containerId);
//   const stopBtn = document.getElementById(stopBtnId);
//   const nextBtn = document.getElementById(nextBtnId);
//   const prevBtn = document.getElementById(prevBtnId);

//   let animationId;
//   let isAnimating = true;
//   let position = 0;

//   const cardWidth = document.querySelector(".testimonial-card").offsetWidth + 20; // Card width + gap

//   // Start animation
//   function startAnimation() {
//     isAnimating = true;
//     animate();
//   }

//   // Animate testimonials
//   function animate() {
//     if (isAnimating) {
//       position -= 1;
//       if (Math.abs(position) >= testimonialContainer.scrollWidth / 2) {
//         position = 0; // Reset position
//       }
//       testimonialContainer.style.transform = `translateX(${position}px)`;
//       animationId = requestAnimationFrame(animate);
//     }
//   }

//   // Stop animation
//   function stopAnimation() {
//     isAnimating = false;
//     cancelAnimationFrame(animationId);
//   }

//   // Navigate testimonials
//   function navigateTestimonials(direction) {
//     stopAnimation();
//     if (direction === "next") {
//       position -= cardWidth;
//     } else if (direction === "prev") {
//       position += cardWidth;
//     }
//     testimonialContainer.style.transform = `translateX(${position}px)`;
//   }

//   // Attach event listeners
//   stopBtn.addEventListener("click", stopAnimation);
//   nextBtn.addEventListener("click", () => navigateTestimonials("next"));
//   prevBtn.addEventListener("click", () => navigateTestimonials("prev"));

//   // Start the animation on load
//   startAnimation();
// }

// // Initialize the testimonial slider
// setupTestimonialSlider("testimonialContainer", "prevBtn", "stopBtn", "nextBtn");



HomePageToAboutUS();
socialMediaLinking();
sideBarFunction();
primaryButton();
HomePagetoBlogPage()

document.addEventListener("DOMContentLoaded", () => {
  const testimonialContainer = document.querySelector(".testimonialContainer");
  const progressBar = document.querySelector(".progress-bar");

  // Duplicate cards for seamless scrolling
  const cards = Array.from(testimonialContainer.children);
  cards.forEach((card) => {
    const clone = card.cloneNode(true);
    testimonialContainer.appendChild(clone);
  });

  // Variables for scrolling
  let scrollSpeed = 1; // Initial speed
  let scrollPosition = 0;
  const maxScroll = testimonialContainer.scrollWidth / 2; // Half the width due to duplication

  // Function to adjust scroll speed based on screen size
  function updateScrollSpeed() {
    if (window.innerWidth <= 480) {
      scrollSpeed = 0.5; // Slow speed for small screens
    } else if (window.innerWidth <= 1120) {
      scrollSpeed = 0.5; // Moderate speed for medium screens
    } else {
      scrollSpeed = 1; // Default speed for larger screens
    }
  }

  // Initial call to set the speed
  updateScrollSpeed();

  // Update speed on window resize
  window.addEventListener("resize", updateScrollSpeed);

  // Scroll loop
  function scrollTestimonials() {
    scrollPosition += scrollSpeed;
    testimonialContainer.scrollLeft = scrollPosition;

    // Update progress bar
    const progress = (scrollPosition % maxScroll) / maxScroll;
    progressBar.style.width = `${progress * 100}%`;

    // Reset scroll when reaching the duplicated set
    if (scrollPosition >= maxScroll) {
      scrollPosition = 0;
    }

    requestAnimationFrame(scrollTestimonials);
  }

  scrollTestimonials();
});




// Contact Form Submissionconst contactForm = document.getElementById("contactForm");
const contactStatus = document.getElementById("contactStatus");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  contactStatus.textContent = "Sending...";
  contactStatus.style.color = " #8c62ff;"; // Use a color that contrasts with the blue backgro
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  try {
    const response = await fetch("https://ea-back.onrender.com/send-contact-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      contactStatus.textContent = "Message sent successfully!";
      contactStatus.style.color = "green";
      contactForm.reset();
    } else {
      throw new Error("Failed to send message.");
    }
  } catch (error) {
    contactStatus.textContent = "Error: Could not send message.";
    contactStatus.style.color = "red";
  }
});
