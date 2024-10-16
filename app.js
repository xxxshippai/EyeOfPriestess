document.addEventListener("DOMContentLoaded", function () {
    const text = "Have you finally remembered, Doctor?\nThe past?           \nUs?           \nI'm glad.           \nWelcome back.";
    const typingSpeed = 150;  // Speed of typing in milliseconds
    const delayBeforeRhombus = 2000;  // Delay before showing the rhombus
    const consoleElement = document.getElementById("console");
    const rhombusElement = document.getElementById("rhombus");

    // Create an array for each line of the rhombus
    const rhombusLines = [
        "*",
        "***",
        "*****",
        "*******",
        "*********",
        "***********",
        "*********",
        "*******",
        "*****",
        "***",
        "*"
    ];

    let index = 0;

    // Function to type text character by character
    function typeText() {
        if (index < text.length) {
            consoleElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, typingSpeed);
        } else {
            // After typing is done, make the text disappear
            setTimeout(clearText, delayBeforeRhombus);
        }
    }

    // Function to clear the text after a delay
    function clearText() {
        consoleElement.textContent = '';
        displayRhombus();
    }

    // Function to display the ASCII rhombus with proper alignment
    function displayRhombus() {
        rhombusElement.style.visibility = 'visible';

        // Calculate max line length for padding
        const maxLineLength = rhombusLines[rhombusLines.length - 1].length;

        // Build the rhombus line by line with proper padding
        let rhombusText = rhombusLines.map(line => {
            const padding = Math.floor((maxLineLength - line.length) / 2);
            return line.padStart(line.length + padding, ' ');
        }).join('\n');

        rhombusElement.textContent = rhombusText;
    }

    // Start typing the text on page load
    typeText();
});
