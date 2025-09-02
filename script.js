// Get elements
const dateInput = document.getElementById("date");
const button = document.querySelector("button");

// Add click event
button.addEventListener("click", () => {
    const birthDate = new Date(dateInput.value);

    if (!dateInput.value) {
        alert("Please select your birth date!");
        return;
    }

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // Adjust age if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    // Show result
    alert(`You are ${age} years old.`);
});
