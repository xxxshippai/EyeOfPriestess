document.addEventListener("DOMContentLoaded", function () {
    const text = "Have you finally remembered, Doctor?\nThe past?           \nUs?           \nI'm glad.           \nWelcome back.";
    const text2 = "What do you seek?";
    const typingSpeed = 100;
    const delayBeforeRhombus = 2000;
    const delayBeforeInput = 2000;  // Delay before allowing user input
    const consoleElement = document.getElementById("console");
    const rhombusElement = document.getElementById("rhombus");
    const soundElement = document.getElementById("sound");
    const delayBeforeQuestion = 2000;//139767;

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

    // Function to type text character by character
    function typeText() {
        /*if (index < text.length) {
            consoleElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, typingSpeed);
        } else {
            setTimeout(clearText, delayBeforeRhombus);
        }*/
        consoleElement.textContent = '';
        displayRhombus();
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
        if (index < text2.length) {
            consoleElement.textContent += text2.charAt(index);
            index++;
            setTimeout(displayQuestion, typingSpeed);
        }

        setTimeout(allowUserInput, delayBeforeInput);
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
                if (userInput != `Priestess` && userInput != `priestess`) {
                    consoleElement.textContent = `Is it truly what you seek?`;
                    allowUserInput2();
                }
                else {
                    consoleElement.textContent = `Where pure white meets pitch black.`;
                }
                inputElement.remove();  // Remove the input after the user submits
            }
        });
    }

    // Function to allow user input
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
                if (userInput != `No` && userInput != `no`) {
                    consoleElement.textContent = `. . .`;
                    allowUserInput2();
                }
                else {
                    consoleElement.textContent = `Then what is it that you seek?`;
                    allowUserInput();
                }
                inputElement.remove();  // Remove the input after the user submits
            }
        });
    }

    // Event listener for any user interaction
    document.addEventListener('click', function () {
        soundElement.play(); // Play sound when user clicks anywhere
        typeText(); // Start typing effect
    }, { once: true }); // The event fires only once
});