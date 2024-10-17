document.addEventListener("DOMContentLoaded", function () {
    const text = "Have you finally remembered, Doctor?\nThe past?           \nUs?           \nI'm glad.           \nWelcome back.";
    const text2 = "What do you seek?";
    const answer1 = 'Where pure white meets pitch black.';
    const answer2 = 'Where frigid winds caress the ground.';
    const answer3 = 'Where mementos of past lay dormant.';
    const answer4 = 'You will find me.';
    const answer5 = `Is it truly what you seek?`;
    const answer6 = `. . .`;
    const answer7 = `Then what is it that you seek?`;
    const typingSpeed = 100;
    const delayBeforeRhombus = 2000;
    const delayBeforeInput = 2000;  // Delay before allowing user input
    const consoleElement = document.getElementById("console");
    const rhombusElement = document.getElementById("rhombus");
    const soundElement = document.getElementById("sound");
    const delayBeforeQuestion = 139767;

    const rhombusLines = [
        "*",
        "* *",
        "*   *",
        "*     *",
        "*       *",
        "*         *",
        "*       *",
        "*     *",
        "*   *",
        "* *",
        "*"
    ];

    let index = 0;
    let inputAllowed = false;

    // Function to type text character by character
    function typeText() {
        displayRhombus();
    }

    function typeText2(text, callback) {
        consoleElement.textContent = '';  // Clear previous text
        index = 0;  // Reset index for new text

        function typeNextChar() {
            if (index < text.length) {
                consoleElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeNextChar, typingSpeed);
            } else if (callback) {
                setTimeout(callback, delayBeforeInput);  // Wait before allowing input again
            }
        }

        typeNextChar();
    }

    // Function to clear the text after a delay
    function clearText() {
        consoleElement.textContent = '';
        displayRhombus();
    }

    // Function to display the ASCII rhombus with proper alignment
    function displayRhombus() {
        rhombusElement.style.visibility = 'visible';

        const maxLineLength = rhombusLines[rhombusLines.length - 1].length;

        let rhombusText = rhombusLines.map(line => {
            const padding = Math.floor((maxLineLength - line.length) / 2);
            return line.padStart(line.length + padding, ' ');
        }).join('\n');

        rhombusElement.textContent = rhombusText;

        setTimeout(displayQuestion, delayBeforeQuestion);
    }

    function displayQuestion() {
        rhombusElement.textContent = '';
        index = 0; // Reset index
        typeText2(text2, allowUserInput);  // Display the question and allow input
    }

    // Function to allow user input
    function allowUserInput() {
        const inputElement = document.createElement("input");
        inputElement.type = "text";
        inputElement.placeholder = "";
        inputElement.style.position = "absolute";
        inputElement.style.top = "60%";
        inputElement.style.left = "50%";
        inputElement.style.transform = "translate(-50%, -50%)";
        inputElement.style.padding = "10px";
        inputElement.style.fontSize = "18px";
        inputElement.style.backgroundColor = "#000";
        inputElement.style.color = "#ffffff";
        inputElement.style.border = "none";  // Remove border
        inputElement.style.outline = "none";  // Remove focus outline (blue border)
        inputElement.style.zIndex = 1;

        document.body.appendChild(inputElement);

        // Focus on the input so the user can type immediately
        inputElement.focus();

        // Handle user input (e.g., when the user presses 'Enter')
        inputElement.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                const userInput = inputElement.value;
                inputElement.remove();  // Remove the input after the user submits

                if (userInput == `Priestess` || userInput == `priestess`) {
                    typeText2(answer1, allowUserInput);  // Callback to allow input again after text is displayed
                } else if (userInput == `Pure white` || userInput == `pure white` || userInput == `Pure White`) {
                    typeText2(answer2, allowUserInput);
                } else if (userInput == `Pitch black` || userInput == `pitch black` || userInput == `Pitch Black`) {
                    typeText2(answer3, allowUserInput);
                } else if (userInput == `You` || userInput == `you`) {
                    typeText2(answer4, allowUserInput);
                } else {
                    typeText2(answer5, allowUserInput2);  // After this, allow the second input stage
                }
            }
        });
    }

    // Function to allow user input in second phase
    function allowUserInput2() {
        const inputElement = document.createElement("input");
        inputElement.type = "text";
        inputElement.placeholder = "";
        inputElement.style.position = "absolute";
        inputElement.style.top = "60%";
        inputElement.style.left = "50%";
        inputElement.style.transform = "translate(-50%, -50%)";
        inputElement.style.padding = "10px";
        inputElement.style.fontSize = "18px";
        inputElement.style.backgroundColor = "#000";
        inputElement.style.color = "#ffffff";
        inputElement.style.border = "none";  // Remove border
        inputElement.style.outline = "none";  // Remove focus outline (blue border)
        inputElement.style.zIndex = 1;

        document.body.appendChild(inputElement);

        // Focus on the input so the user can type immediately
        inputElement.focus();

        // Handle user input (e.g., when the user presses 'Enter')
        inputElement.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                const userInput = inputElement.value;
                inputElement.remove();  // Remove the input after the user submits

                if (userInput != `No` && userInput != `no`) {
                    typeText2(answer6, allowUserInput2);  // If no, stay in this phase
                } else {
                    typeText2(answer7, allowUserInput);  // Return to the first input phase
                }
            }
        });
    }

    // Event listener for any user interaction
    document.addEventListener('click', function () {
        soundElement.play(); // Play sound when user clicks anywhere
        typeText(); // Start typing effect
    }, { once: true }); // The event fires only once
});
