const listData = [
  {
    img_url: "./assets/img1.jpg",
  },
  {
    img_url: "./assets/img2.jpg",
  },
  {
    img_url: "./assets/img3.jpg",
  },
];

const slidesBox = document.querySelector(".slides-box");

const next = document.querySelector(".next-btn");
const previous = document.querySelector(".previous-btn");

let allowClick = true;

function renderSlides() {
  slidesBox.innerHTML = "";
  const slides = document.createElement("div");
  slides.classList.add("slides");
  slides.setAttribute("style", `margin-left: -800px`);
  listData.forEach((item, index) => {
    //  ADD SLIDE INTO SLIDES

    const slide = document.createElement("div");
    slide.classList.add("slide");
    const img = document.createElement("img");
    img.setAttribute("src", item.img_url);
    img.setAttribute("alt", "");
    slide.append(img);
    slides.append(slide);
  });

  slidesBox.append(slides);
}

function autoSlide() {
  let interval = setInterval(() => {
    next.click();
  }, 3000);

  slidesBox.addEventListener("mouseover", () => {
    console.log("in");
    clearInterval(interval);
  });
  slidesBox.addEventListener("mouseout", () => {
    console.log("out");
    interval = setInterval(() => {
      next.click();
    }, 3000);
  });
}

function init() {
  renderSlides();
  handleNextSlide();
  handlePreviousSlide();
  autoSlide();
}

function handleNextSlide() {
  next.addEventListener("click", () => {
    if (allowClick) {
      const slides = document.querySelector(".slides");
      slides.setAttribute("style", `margin-left: -1600px`);
      allowClick = false;

      setTimeout(() => {
        listData.push(listData.shift());
        renderSlides();
        allowClick = true;
      }, 1000);
    }
  });
}

function handlePreviousSlide() {
  previous.addEventListener("click", () => {
    if (allowClick) {
      const slides = document.querySelector(".slides");
      slides.setAttribute("style", `margin-left: 0px`);
      allowClick = false;

      setTimeout(() => {
        listData.unshift(listData.pop());
        renderSlides();
        allowClick = true;
      }, 1000);
    }
  });
}

init();
