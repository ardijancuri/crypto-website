function toggleFAQ(button) {
    const content = button.parentElement.nextElementSibling;
    const openIcon = button.querySelector('.open-icon');
    const closeIcon = button.querySelector('.close-icon');

    content.classList.toggle('hidden');
    openIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
}

document.addEventListener('scroll', function () {
    const image = document.getElementById('buyImage');
    const scrollPosition = window.scrollY;
    const scaleFactor = 1 + (scrollPosition / 10000); // Adjust the divisor to control scaling intensity

    image.style.transform = `scale(${scaleFactor})`;
});

///////////////////////

function openMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
////////////
document.getElementById("copy").addEventListener("click", function () {
    // Get the text content from the h3 element
    var textToCopy = "Coming Soon";

    // Create a temporary textarea to copy the text
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;
    document.body.appendChild(tempTextarea);

    // Select the text and copy it
    tempTextarea.select();
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempTextarea);

    // Show the "Copied!" message
    var copiedMessage = document.getElementById("copied-message");
    copiedMessage.style.display = "block";
    copiedMessage.style.opacity = 1;

    // Hide the message after 1 second
    setTimeout(function () {
        copiedMessage.style.opacity = 0;
        setTimeout(function () {
            copiedMessage.style.display = "none";
        }, 300); // Wait for the transition to finish before hiding
    }, 1000);
});


