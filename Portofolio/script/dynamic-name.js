export function animateDynamicName(){
    const textElements = document.querySelectorAll('.dynamic-name');
    const textOptions = ["Nara","Naweed (na-wid)", "Naweed (ne-wid)", "Nawe", "Nawer", "Edu.", "Rahman","apa aja yang penting sopan dan tidak menyinggung."];
    let typingSpeed = 100; // Adjust typing speed as needed
    let pauseDelay = 1000; // Delay between typing and deleting

    function animateText(textElement) {
        let currentIndex = 0;
        let isDeleting = false;

        function typeText() {
            const fullText = textOptions[currentIndex];
            let currentText = textElement.textContent || '';

            if (isDeleting) {
                currentText = fullText.substring(0, currentText.length - 1);
            } else {
                currentText = fullText.substring(0, currentText.length + 1);
            }

            if (fullText.startsWith("apa aja yang penting sopan dan tidak menyinggung.")) {
                textElement.textContent = currentText;
                pauseDelay = 2000
            } else {
                textElement.textContent = currentText;
                pauseDelay = 1000
            }

            let typeSpeed = isDeleting ? typingSpeed / 2 : typingSpeed;

            if (!isDeleting && currentText === fullText) {
                typeSpeed = pauseDelay;
                isDeleting = true;
            } else if (isDeleting && currentText === "") {
                isDeleting = false;
                currentIndex = (currentIndex + 1) % textOptions.length;
            }

            setTimeout(typeText, typeSpeed);
        }

        // Start the typing animation
        setTimeout(typeText, typingSpeed);
    }

    // Start the animation for all elements with the class "dynamic-text"
    textElements.forEach((element) => {
        animateText(element);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    animateDynamicName();
});