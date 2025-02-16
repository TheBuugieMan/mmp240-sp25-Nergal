document.addEventListener("DOMContentLoaded", function () {
    const brownieContainer = document.getElementById("brownie-container");

    function createBrownie() {
        const brownie = document.createElement("img");
        brownie.src = "images/brownie.png"; // Make sure this path is correct
        brownie.classList.add("brownie");

        // Randomize position and animation duration
        const randomX = Math.random() * window.innerWidth;
        const randomDuration = Math.random() * 3 + 2; // Between 2s and 5s

        brownie.style.left = `${randomX}px`;
        brownie.style.animationDuration = `${randomDuration}s`;

        brownieContainer.appendChild(brownie);

        // Remove brownie after animation ends
        setTimeout(() => {
            brownie.remove();
        }, randomDuration * 1000);
    }

    // Create falling brownies every 500ms
    setInterval(createBrownie, 500);

    // Function to create a burst of brownies on click
    function burstBrownies(event) {
        const numBrownies = 8; // Number of brownies in the burst
        for (let i = 0; i < numBrownies; i++) {
            setTimeout(() => {
                createBrownie(event.clientX, event.clientY, true);
            }, i * 50); // Stagger appearance
        }
    }

    // Add event listener for mouse clicks
    document.addEventListener("click", burstBrownies);

    // Keep generating falling brownies every 500ms
    setInterval(() => createBrownie(), 500);
});
