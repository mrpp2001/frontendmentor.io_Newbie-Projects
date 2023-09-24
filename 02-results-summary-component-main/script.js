const jsonFile = './data/data.json';

const reactionCategoryElement = document.querySelector("#reactionCategory");
const memoryCategoryElement = document.querySelector("#memoryCategory");
const verbalCategoryElement = document.querySelector("#verbalCategory");
const visualCategoryElement = document.querySelector("#visualCategory");

const reactionScoreElement = document.querySelector("#reactionScore");
const memoryScoreElement = document.querySelector("#memoryScore");
const verbalScoreElement = document.querySelector("#verbalScore");
const visualScoreElement = document.querySelector("#visualScore");

// Add icons to HTML elements based on JSON data
fetch(jsonFile)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    // Categories and Scores
    reactionCategoryElement.textContent = data[0].category;
    memoryCategoryElement.textContent = data[1].category;
    verbalCategoryElement.textContent = data[2].category;
    visualCategoryElement.textContent = data[3].category;

    reactionScoreElement.textContent = data[0].score;
    memoryScoreElement.textContent = data[1].score;
    verbalScoreElement.textContent = data[2].score;
    visualScoreElement.textContent = data[3].score;

    // Add icons to HTML elements
    const reactionIcon = document.querySelector(".res.reaction img");
    reactionIcon.src = data[0].icon;

    const memoryIcon = document.querySelector(".res.memory img");
    memoryIcon.src = data[1].icon;

    const verbalIcon = document.querySelector(".res.verbal img");
    verbalIcon.src = data[2].icon;

    const visualIcon = document.querySelector(".res.visual img");
    visualIcon.src = data[3].icon;
  })
  .catch(error => {
    console.error("Error loading JSON file: ", error);
  });
