//This code is loaded when document is ready to add animation on introduction page
$(document).ready(function() {
    const typedTextSpan = document.querySelector(".typed-text");
    const textArray = ["engineer", "designer", "developer", "programmer"];
    const typingDelay = 100;
    const erasingDelay = 100;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    //If the text is empty add the text one letter at a time
    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        }
        else {
            setTimeout(erase, newTextDelay);
        }
    }

    //If the text is present remove the ext one letter at a time
    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        }
        else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay);
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(type, newTextDelay);
    });

    type();
});
