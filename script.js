const roles = ["full-stack developer", "computer science student", "coder", "problem-solver"];
let currentRole = 0;
const roleElement = document.getElementById("role");

function typeRole() {
    roleElement.textContent = "";
    let roleText = roles[currentRole];
    let index = 0;

    // hides the caret initially while typing
    showCaret(false);

    const typingInterval = setInterval(() => {
        roleElement.textContent += roleText.charAt(index);
        index++;
        if (index === roleText.length) {
            clearInterval(typingInterval);
            setTimeout(() => {
                showCaret(true);  // start blinking caret immediately after typing is finished
                setTimeout(() => {
                    deleteRole(roleText);
                }, 2000);  // wait
            }, 500);  // shorter wait before showing the blinking caret
        }
    }, 150);  // speed of typing effect
}

function deleteRole(roleText) {
    let index = roleText.length;
    const deletingInterval = setInterval(() => {
        roleElement.textContent = roleText.slice(0, index);
        index--;
        if (index < 0) {
            clearInterval(deletingInterval);
            currentRole = (currentRole + 1) % roles.length;
            setTimeout(() => {
                typeRole();
            }, 500);  // wait
        }
    }, 100);  // speed of deleting effect
}

function showCaret(isVisible) {
    if (isVisible) {
        roleElement.classList.add("blinkingCaret");
    } else {
        roleElement.classList.remove("blinkingCaret");
    }
}

typeRole();  // start typing the first role


// nav queries
const navLinks = document.querySelectorAll('.nav-bar a');
const sections = document.querySelectorAll('section');
function highlightNavLink() {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY + window.innerHeight / 3 >= sectionTop && window.scrollY + window.innerHeight / 3 < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => link.style.color = 'var(--black)');

  const activeLink = document.querySelector(`.nav-bar a[href="#${currentSection}"]`);
  if (activeLink) {
    activeLink.style.color = 'var(--blue)';
  }
}


window.addEventListener('scroll', highlightNavLink);

function toggleNav() {
  const navBar = document.querySelector('.nav-bar');
  navBar.classList.toggle('open');
}

// adjusts for about section
window.addEventListener("scroll", function() {
  const aboutSection = document.getElementById("about");
  const aboutContent = aboutSection.querySelector(".about-content");
  const sectionPosition = aboutSection.getBoundingClientRect();

  // percentage of the section that is visible
  const sectionHeight = aboutSection.offsetHeight;
  const sectionTop = sectionPosition.top;
  const sectionVisiblePercentage = (window.innerHeight - sectionTop) / sectionHeight;

  // trigger when 30% of the section is visible
  if (sectionVisiblePercentage >= 0.3) {
    aboutContent.classList.add("visible");
  } else {
    aboutContent.classList.remove("visible");
  }
});

window.addEventListener("scroll", function() {
  const portfolioSection = document.getElementById("portfolio");
  const portfolioContent = portfolioSection.querySelectorAll(".project-container");
  
  portfolioContent.forEach((project) => {
    const projectPosition = project.getBoundingClientRect();
    const sectionHeight = project.offsetHeight;
    const sectionTop = projectPosition.top;
    const sectionVisiblePercentage = (window.innerHeight - sectionTop) / sectionHeight;

    if (sectionVisiblePercentage >= 0.3) {
      project.classList.add("visible");
    } else {
      project.classList.remove("visible");
    }
  });
});

window.addEventListener("scroll", function() {
  const portfolioSection = document.getElementById("portfolio");
  const portfolioContent = portfolioSection.querySelectorAll(".project-container");
  
  portfolioContent.forEach((project) => {
    const projectPosition = project.getBoundingClientRect();
    const sectionHeight = project.offsetHeight;
    const sectionTop = projectPosition.top;
    const sectionVisiblePercentage = (window.innerHeight - sectionTop) / sectionHeight;

    if (sectionVisiblePercentage >= 0.3) {
      project.classList.add("visible");
    } else {
      project.classList.remove("visible");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".project-container");
  
  const observerOptions = {
    root: null, 
    threshold: 0.2, 
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 800); // 800ms delay between each project
      }
    });
  }, observerOptions);

  projects.forEach((project) => observer.observe(project));
});

const portfolioTitle = "I've been working on...";
const portfolioElement = document.getElementById("portfolio-title");
let portfolioIndex = 0;
let portfolioTyped = false;

function typePortfolioTitle() {
    portfolioElement.style.opacity = 1; 
    portfolioElement.style.visibility = 'visible';
    portfolioElement.textContent = "";

    // reduce the typing interval to make smoooother
    let typingInterval = setInterval(() => {
        portfolioElement.textContent += portfolioTitle.charAt(portfolioIndex);
        portfolioIndex++;
        
        if (portfolioIndex === portfolioTitle.length) {
            clearInterval(typingInterval);
            setTimeout(() => {
                portfolioElement.classList.add("blinkingPortfolioCaret");
                setTimeout(() => {
                    portfolioElement.style.borderRight = "none"; // remove caret after blinking
                }, 8000); // blink for 8 seconds
            }, 500); // pause
        }
    }, 100); // reduced interval to make typing smoother
}

// trigger when portfolio section is in view
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !portfolioTyped) {
        portfolioTyped = true; // Ensures it only runs once
        typePortfolioTitle();
    }
}, { threshold: 0.5 });

observer.observe(portfolioElement);


document.querySelector('a[href="#about"]').addEventListener('click', function (event) {
  event.preventDefault();  // Prevent the default anchor click behavior
  const aboutSection = document.getElementById('about');
  const sectionOffset = aboutSection.offsetTop;
  const sectionHeight = aboutSection.offsetHeight;

  window.scrollTo({
    top: sectionOffset + (sectionHeight / 2) - (window.innerHeight / 2),
    behavior: 'smooth' // smooth scrolling
  });
});

const greetings = ["hello!", "hola!", "bonjour!", "ciao!", "hallo!"];
let currentGreeting = 0;
const greetingElement = document.getElementById("greeting-text");

function typeGreeting() {
    greetingElement.textContent = ""; // clear previous greeting
    let index = 0;

    // make caret solid during typing (no blinking)
    const caret = document.querySelector(".contactBlinkingCaret");
    caret.style.visibility = "visible";
    caret.style.animation = "none";

    const typingInterval = setInterval(() => {
        greetingElement.textContent += greetings[currentGreeting].charAt(index);
        index++;

        if (index === greetings[currentGreeting].length) {
            clearInterval(typingInterval);
            setTimeout(() => {
                // after typing, start blinking caret
                showContactCaret(true);  // start blinking caret
                setTimeout(() => {
                    deleteGreeting();
                }, 2000);  // pause
            }, 500); 
        }
    }, 150);  // speed
}

function deleteGreeting() {
    let greetingText = greetings[currentGreeting];
    let index = greetingText.length;
    const deletingInterval = setInterval(() => {
        greetingElement.textContent = greetingText.slice(0, index);
        index--;
        if (index < 0) {
            clearInterval(deletingInterval);
            currentGreeting = (currentGreeting + 1) % greetings.length; // cycle through greetings
            setTimeout(() => {
                typeGreeting();
            }, 700);  // wait before typing the next greeting
        }
    }, 100);  // speed
}

function showContactCaret(isVisible) {
    const caret = document.querySelector(".contactBlinkingCaret");
    if (isVisible) {
        caret.style.animation = "contactBlinkCaret 1s step-end infinite";  // start blinking
    } else {
        caret.style.animation = "none";  // stop blinking, keep caret solid
    }
}

typeGreeting();  // start typing the first greeting

