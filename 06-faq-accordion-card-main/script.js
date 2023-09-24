const questions = document.querySelectorAll(".ques");
const arrows = document.querySelectorAll(".ques img");
const answers = document.querySelectorAll(".ans");
let selectedIndex = null; // Track the index of the currently selected question

// Function to toggle the answer and rotate the arrow
function toggleAnswer(index) {
  if (answers[index].style.display === "flex") {
    answers[index].style.display = "none";
    arrows[index].style.transform = "rotate(0deg)";
    questions[index].style.fontWeight = "normal";
    selectedIndex = null; // Reset the selected index
  } else {
    if (selectedIndex !== null) {
      // If another question is already selected, reset it
      answers[selectedIndex].style.display = "none";
      arrows[selectedIndex].style.transform = "rotate(0deg)";
      questions[selectedIndex].style.fontWeight = "normal";
    }

    // Show the clicked answer and rotate the arrow
    answers[index].style.display = "flex";
    arrows[index].style.transform = "rotate(180deg)";
    questions[index].style.fontWeight = "bold";
    selectedIndex = index; // Update the selected index
  }
}

// Add click event listeners to each question
questions.forEach((ques, index) => {
  ques.addEventListener("click", () => {
    toggleAnswer(index);
  });
});
