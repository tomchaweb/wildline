gsap.to(".hero-title", {
  scrollTrigger: { trigger: ".hero", start: "top center" },
  opacity: 1,
  y: 0,
  duration: 0.2,
});

gsap.to(".hero-span", {
  scrollTrigger: { trigger: ".hero", start: "top center" },
  opacity: 1,
  y: 0,
  duration: 0.2,
  delay: 0.2,
});

gsap.to(".hero-btn", {
  scrollTrigger: { trigger: ".hero", start: "top center" },
  opacity: 1,
  y: 0,
  duration: 0.2,
  delay: 0.4,
});

const images = document.querySelectorAll("img");

images.forEach((image) => {
  image.classList.add("opacity-0");

  gsap.to(image, {
    scrollTrigger: { trigger: image, start: "top 90%" },
    opacity: 1,
    duration: 0.4,
  });
});

const goalCardImages = document.querySelectorAll(".goals-card-img-container");

goalCardImages.forEach((image) => {
  image.classList.add("opacity-0");

  gsap.to(image, {
    scrollTrigger: { trigger: image, start: "top 90%" },
    opacity: 1,
    duration: 0.4,
  });
});

const searchBtn = document.querySelector(".search-btn");
const searchOverlay = document.querySelector(".search-overlay");
const closeSearchButton = document.querySelector(".close-search-btn");

const toggleSearchMenu = () => {
  searchOverlay.classList.toggle("hidden");
  searchOverlay.classList.toggle("flex");
};

searchBtn.addEventListener("click", toggleSearchMenu);
closeSearchButton.addEventListener("click", toggleSearchMenu);

const burgerBtn = document.querySelector(".burger-btn");
const burgerOverlay = document.querySelector(".burger-overlay");
const closeBurgerBtn = document.querySelector(".close-burger-btn");

const toggleVisibleBurgerMenu = () => {
  burgerOverlay.classList.toggle("hidden");
  burgerOverlay.classList.toggle("flex");
};

burgerBtn.addEventListener("click", toggleVisibleBurgerMenu);
closeBurgerBtn.addEventListener("click", toggleVisibleBurgerMenu);

const goalCards = document.querySelectorAll(".goals-card");
const goalsGrid = document.querySelector(".goals-grid");

let goal1 = {
  percentageElement: document.querySelector(".goal-percentage-1"),
  raisedElement: document.querySelector(".goal-raised-1"),
  maxPercentage: 46,
  maxRaised: 46000,
};

let goal2 = {
  percentageElement: document.querySelector(".goal-percentage-2"),
  raisedElement: document.querySelector(".goal-raised-2"),
  maxPercentage: 72,
  maxRaised: 72000,
};

let goal3 = {
  percentageElement: document.querySelector(".goal-percentage-3"),
  raisedElement: document.querySelector(".goal-raised-3"),
  maxPercentage: 23,
  maxRaised: 23000,
};

const observeGoalCards = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  if (window.innerWidth > 1025) return;

  let currentPercent = 0;
  let currentRaised = 0;

  const increasePercentAmount = () => {
    if (entry.target.id === "goal-card-1") {
      if (currentPercent < goal1.maxPercentage) {
        goal1.percentageElement.textContent = `${currentPercent}%`;
        currentPercent++;
        setTimeout(increasePercentAmount, 25);
      }
    } else if (entry.target.id === "goal-card-2") {
      if (currentPercent < goal2.maxPercentage) {
        goal2.percentageElement.textContent = `${currentPercent}%`;
        currentPercent++;
        setTimeout(increasePercentAmount, 25);
      }
    } else if (entry.target.id === "goal-card-3") {
      if (currentPercent < goal3.maxPercentage) {
        goal3.percentageElement.textContent = `${currentPercent}%`;
        currentPercent++;
        setTimeout(increasePercentAmount, 25);
      }
    }
  };

  const increaseRaisedAmount = () => {
    if (entry.target.id === "goal-card-1") {
      if (currentRaised < goal1.maxRaised) {
        goal1.raisedElement.textContent = `£${currentRaised}`;
        currentRaised += 1000;
        setTimeout(increaseRaisedAmount, 25);
      }
    } else if (entry.target.id === "goal-card-2") {
      if (currentRaised < goal2.maxRaised) {
        goal2.raisedElement.textContent = `£${currentRaised}`;
        currentRaised += 1000;
        setTimeout(increaseRaisedAmount, 25);
      }
    } else if (entry.target.id === "goal-card-3") {
      if (currentRaised < goal3.maxRaised) {
        goal3.raisedElement.textContent = `£${currentRaised}`;
        currentRaised += 1000;
        setTimeout(increaseRaisedAmount, 25);
      }
    }
  };

  increasePercentAmount();
  increaseRaisedAmount();

  observer.unobserve(entry.target);
};

const observeGoalsGrid = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  if (window.innerWidth < 1025) return;

  let currentPercent1 = 0;
  let currentPercent2 = 0;
  let currentPercent3 = 0;

  let currentRaised1 = 0;
  let currentRaised2 = 0;
  let currentRaised3 = 0;

  const increasePercentAmount = () => {
    if (currentPercent1 < goal1.maxPercentage) {
      goal1.percentageElement.textContent = `${currentPercent1}%`;
      currentPercent1++;
    }
    if (currentPercent2 < goal2.maxPercentage) {
      goal2.percentageElement.textContent = `${currentPercent2}%`;
      currentPercent2++;
    }
    if (currentPercent3 < goal3.maxPercentage) {
      goal3.percentageElement.textContent = `${currentPercent3}%`;
      currentPercent3++;
    }
    setTimeout(increasePercentAmount, 25);
  };

  const increaseRaisedAmount = () => {
    if (currentRaised1 < goal1.maxRaised) {
      goal1.raisedElement.textContent = `£${currentRaised1}`;
      currentRaised1 += 1000;
    }
    if (currentRaised2 < goal2.maxRaised) {
      goal2.raisedElement.textContent = `£${currentRaised2}`;
      currentRaised2 += 1000;
    }
    if (currentRaised3 < goal3.maxRaised) {
      goal3.raisedElement.textContent = `£${currentRaised3}`;
      currentRaised3 += 1000;
    }
    setTimeout(increaseRaisedAmount, 25);
  };

  increasePercentAmount();
  increaseRaisedAmount();

  observer.unobserve(entry.target);
};

const cardObserver = new IntersectionObserver(observeGoalCards, {
  root: null,
  threshold: 0.79,
});

goalCards.forEach((card) => {
  cardObserver.observe(card);
});

const goalsGridObserver = new IntersectionObserver(observeGoalsGrid, {
  root: null,
  threshold: 0.9,
});

goalsGridObserver.observe(goalsGrid);
