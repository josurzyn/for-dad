console.log("🚀");

const numbers = [
  4,
  0,
  0,
  0,
  0,
  0,
  0,
  7,
  8,
  7,
  0,
  0,
  1,
  0,
  0,
  4,
  0,
  9,
  0,
  0,
  2,
  3,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  4,
  0,
  6,
  0,
  0,
  0,
  0,
  6,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  4,
  0,
  0,
  5,
  3,
  1,
  0,
  0,
  0,
  0,
  0,
  5,
  0,
  0,
  0,
  0,
  0,
  8,
  1,
  3,
  0,
  0,
  0,
  0,
  0,
  7,
  0,
  0,
  0,
  0,
  2,
  0,
  0,
  0,
  0,
];

const container = document.getElementsByClassName("sudoku-container")[0];

createSudoku = () => {
  container.innerHTML = "";
  const fragment = document.createDocumentFragment();

  numbers.forEach((number) => {
    const numberBox = document.createElement("div");
    // if number is 0, create input
    if (number === 0) {
      const input = document.createElement("input");
      input.type = "number";
      input.min = "1";
      input.max = "9";
      numberBox.appendChild(input);
    } else {
      //else create div to show number
      const digit = document.createElement("p");
      digit.innerText = number;
      numberBox.appendChild(digit);
    }
    numberBox.classList.add("number-box");
    fragment.appendChild(numberBox);
  });

  container.appendChild(fragment);
};

document.addEventListener("DOMContentLoaded", function () {
  console.log("🔥");

  createSudoku();
});

const wrapper = document.getElementsByClassName("wrapper")[0];
const flip = document.getElementsByClassName("flip")[0];

openCard = () => {
  wrapper.classList.add("wrapper-open");
  flip.classList.add("flip-open");
};

closeCard = () => {
  wrapper.classList.remove("wrapper-open");
  flip.classList.remove("flip-open");
};

// Checking logic -
// doesn't have to implement sudoku logic
// just has to check number = expected number
