const radioBtns = document.querySelectorAll("input[name='unit-option']");
const options = document.querySelectorAll(".options");
const total = document.querySelector(".total span");

// Map radio button IDs to corresponding sections and prices
const sectionMap = {
    "one-unit": "hiddenSection",
    "two-unit": "hiddenSection2",
    "three-unit": "hiddenSection3"
};

const prices = {
    "one-unit": 10,
    "two-unit": 18,
    "three-unit": 24
};

// Function to handle radio button click
radioBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // Hide all sections and remove highlight from all options
        Object.values(sectionMap).forEach(sectionId => {
            document.getElementById(sectionId).style.display = "none";
        });

        options.forEach(opt => opt.classList.remove("selected"));

        // Show the selected section and highlight the box
        const selectedSection = document.getElementById(sectionMap[btn.id]);
        if (selectedSection) {
            selectedSection.style.display = "block";
        }

        btn.closest(".options").classList.add("selected");

        // Update total price
        total.textContent = `$${prices[btn.id].toFixed(2)} USD`;
    });
});
