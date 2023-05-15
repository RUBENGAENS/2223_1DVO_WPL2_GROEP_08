const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


let i = 0; 			// Start Point
let images = [];	// Images Array
let time = 3000;	// Time Between Switch

// Image List
images[0] = "assets/illustrator_lionII.png";
images[1] = "assets/photoshop_man.png";
images[2] = "assets/webstorm_pokemon.png";
images[3] = "assets/test.jpeg";

// Change Image
function changeImg(){
    document.slide.src = images[i];

    // Check If Index Is Under Max
    if(i < images.length - 1){
        // Add 1 to Index
        i++;
    } else {
        // Reset Back To O
        i = 0;
    }

    // Run function every x seconds
    setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;