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
        "https://youtube.com/@eleazaralliance?si=gdmG4bsAgWzAUsY_",
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

HomePageToAboutUS();
socialMediaLinking();
sideBarFunction();
primaryButton();
HomePagetoBlogPage()
