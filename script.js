let elements = document.querySelectorAll("li");
let selectedIndex = -1;
elements.forEach((element, i) => {
  element.addEventListener("click", () => {
    // check if rating already selected
    if (!element.classList.contains("rating-num-active")) {
      selectedIndex = i;
      document.querySelector(".submit-check").style.visibility = "hidden";
      // check and remove active class from any other rating
      for (let j = 0; j < elements.length; j++) {
        if (j !== i) {
          elements[j].classList.remove("rating-num-active");
          elements[j].classList.remove("no-hover");
        }
      }
    } else {
      selectedIndex = -1;
    }
    // toggle state for current rating
    element.classList.toggle("rating-num-active");
    element.classList.toggle("no-hover");
  });
});

// Add event listener on submit button
let button = document.querySelector(".submit");
button.addEventListener("click", () => {
  // check if any rating selected
  if (selectedIndex === -1) {
    // prompt user to select a rating first
    document.querySelector(".submit-check").style.visibility = "visible";
  } else {
    // switch display to thank you page and view rating
    document.querySelector(".rating-div").style.display = "none";
    let container = document.querySelector(".thank");
    container.classList.remove("thank");
    container.classList.add("container");
    container.classList.add("thank-flex");
    // set rating for thank you bar
    document.querySelector(".selected-rating").innerHTML = selectedIndex + 1;
  }
});
