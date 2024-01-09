let counter1 = 0;
let counter2 = 1;
let bool = true;

const sections = document.querySelectorAll("section");
const progress = document.querySelector(".progress h2");
const circles = document.querySelectorAll(".circle");
const menu = document.querySelector(".menu");
const section1wrapper = document.querySelector(".section-1-wrapper");
const section5wrapper = document.querySelector(".section-5-wrapper");

section1wrapper.style.transform = "scale(1)";

const progressCounter = () => {
  progress.textContent = `${counter2}/${sections.length}`;

  Array.from(circles).forEach((circle) => {
    circle.style.backgroundColor = "transparent";
  });
  document.querySelector(`.circle-${counter2}`).style.backgroundColor = "#ddd";
};

const pageController = () => {
  bool = true;
  if (counter1 === 5) {
    Array.from(sections).forEach((section) => {
      section.style.left = "0";
    });
    counter1 = 0;
    counter2 = 1;
    section1wrapper.style.transform = "scale(1)";
    section5wrapper.style.transform = "scale(1.5)";
    progressCounter();
    bool = false;
  }

  if (counter1 === -1) {
    Array.from(sections).forEach((section) => {
      if (section.classList[0] === "section-5") {
        return;
      }
      section.style.left = "-100vw";
    });
    counter1 = 4;
    counter2 = 5;
    section1wrapper.style.transform = "scale(1.5)";
    section5wrapper.style.transform = "scale(1)";
    progressCounter();
    bool = false;
  }
  progressCounter();
  return bool;
};

window.addEventListener("wheel", (e) => {
  const deltaY = e.deltaY > 0;

  if (deltaY) {
    counter1++;
    counter2++;
  } else {
    counter1--;
    counter2--;
  }

  pageController();
  progressCounter();
  console.log(counter1, counter2);

  if (bool) {
    document.querySelector(
      `.section-${deltaY ? counter1 : counter2}`
    ).style.left = `${deltaY ? "-100vw" : "0"}`;

    document.querySelector(
      `.section-${deltaY ? counter1 : counter2}-wrapper`
    ).style.transform = `scale(${deltaY ? "1.5" : "1"})`;

    document.querySelector(
      `.section-${deltaY ? counter1 + 1 : counter2 + 1}-wrapper`
    ).style.transform = `scale(${deltaY ? "1" : "1.5"})`;
  }
});

document.querySelector(".left-btn").addEventListener("click", () => {
  counter1--;
  counter2--;
  pageController() &&
    (document.querySelector(`.section-${counter2}`).style.left = "0");

  if (bool) {
    document.querySelector(`.section-${counter2}-wrapper`).style.transform =
      "scale(1)";
    document.querySelector(`.section-${counter2 + 1}-wrapper`).style.transform =
      "scale(1.5)";
  }
});

document.querySelector(".right-btn").addEventListener("click", () => {
  counter1++;
  counter2++;
  pageController() &&
    (document.querySelector(`.section-${counter1}`).style.left = "-100vw");

  if (bool) {
    document.querySelector(`.section-${counter2}-wrapper`).style.transform =
      "scale(1)";
    document.querySelector(`.section-${counter1}-wrapper`).style.transform =
      "scale(1.5)";
  }
});

document.querySelector(".realizacje-img").addEventListener("mouseover", () => {
  document.querySelector(".section-3-wrapper").style.opacity = ".5";
});

document.querySelector(".realizacje-img").addEventListener("mouseout", () => {
  document.querySelector(".section-3-wrapper").style.opacity = "1";
});

menu.addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("change");
});


document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link, index) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      // Update the counters based on the clicked link
      counter1 = index;
      counter2 = index + 1;

      // Update the sections' visibility
      updateSectionsVisibility();

      // Update progress and circles
      progressCounter();
    });
  });
});

function updateSectionsVisibility() {
  sections.forEach((section, index) => {
    if (index === counter1) {
      section.style.left = '0';
      section.querySelector('.section-wrapper').style.transform = 'scale(1)';
    } else {
      section.style.left = '-100vw';
      section.querySelector('.section-wrapper').style.transform = 'scale(1.5)';
    }
  });
}

document.querySelector('.sale-btn').addEventListener('click', function() {
  document.getElementById('emailForm').style.display = 'block';
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var description = document.getElementById('description').value;
  var email = 'test@test.com';
  var subject = 'Zamówienie wyceny';
  var emailBody = 'Imię: ' + name + '%0D%0A' + 'Opis: ' + description;

  window.location = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody;
});
