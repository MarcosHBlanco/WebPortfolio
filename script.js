const menuButton = document.querySelector(".menu-button");
const menuList = document.querySelector(".menu-list");

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("active");
  menuList.classList.toggle("active");
});

const cards = document.querySelectorAll(".card");
const viewMoreBtns = document.querySelectorAll(".card-button");

// Define the detailed text content for each card
const contentArray = [
  "I played football every week during my first college, and my team even traveled to tournaments in other cities. I’d love to try snowboarding someday! I used to practice jiujutsu, but after an ACL tear, I had to step back—a sport I truly miss.",
  "My favorite pastime! I’ve owned every Nintendo console and some PlayStations (the latest is the PS5). Games like Mario, Zelda, and Mario Kart are staples, but I’m also exploring the Souls series like Dark Souls, Elden Ring, and Bloodborne. I've played World of Warcraft for over 15 years, making friendships that last to this day.",
  "Traveling is a passion of mine. So far, I’ve explored Portugal, England, Canada, and the USA, with many more on my list. Japan is next, where I can finally see the cherry blossoms in bloom.",
  "While not my favorite activity, working out keeps my mind and body in sync. It's more about discipline and health than enjoyment, but the benefits are worth the effort.",
];

// Store the original text in a data attribute when the page loads
cards.forEach((card, index) => {
  const paragraph = card.querySelector("p");
  paragraph.setAttribute("data-original-text", paragraph.textContent); // Store the original text
});

viewMoreBtns.forEach((button, index) => {
  button.addEventListener("click", () => {
    const card = cards[index];
    const paragraph = card.querySelector("p");

    // Get the original text from the data attribute
    const originalText = paragraph.getAttribute("data-original-text");
    const detailedText = contentArray[index];

    // Toggle between the original and detailed text
    if (paragraph.textContent === originalText) {
      paragraph.textContent = detailedText;
    } else {
      paragraph.textContent = originalText;
    }

    // Toggle a unique class for scaling each card
    card.classList.toggle(`scaled${index + 1}`);
  });
});
