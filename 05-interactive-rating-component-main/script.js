const ratingStart = document.getElementById('rating-section');
const ratingEnd = document.getElementById('rating-end');
const ratingItems = document.querySelectorAll('.rating-value');
const submitBtn = document.getElementById("button");
const selectedRatingElement = document.getElementById("scoreRating");

ratingItems.forEach(item => {
    item.addEventListener("click", function() {
        // Remove the "active" class from all rating items
        ratingItems.forEach(item => {
            item.classList.remove("active");
        });

        // Add the "active" class to the clicked rating item
        item.classList.add("active");
    });
});

submitBtn.addEventListener("click", function() {
    // Find the selected rating value
    const selectedRating = document.querySelector('.rating-value.active');

    if (selectedRating) {
        // Display the selected rating
        selectedRatingElement.textContent = selectedRating.textContent + " out of 5";
        ratingEnd.style.display = 'flex';
        ratingStart.style.display = 'none';
    } else {
        // No rating selected
        selectedRatingElement.textContent = "Please select a rating.";
    }
});