const names = document.querySelector(".names");

// Generate divs for names
for (let i = 0; i < 7; i++) {
    const nameDiv = document.createElement('div');
    nameDiv.className = `MyName name${i + 1}`;
    nameDiv.innerText = `»Arman     Saini`;

    // Add mouse enter and leave events
    nameDiv.addEventListener('mouseenter', () => {

        nameDiv.classList.add('scaled'); // Add the scaled class on hover
    });
    
    nameDiv.addEventListener('mouseleave', () => {
        nameDiv.classList.remove('scaled'); // Remove the scaled class on mouse leave
    });
    nameDiv.addEventListener('click', () => {
        window.location.href = `https://www.instagram.com/arman.saini._`;
    });

    names.appendChild(nameDiv);
}
