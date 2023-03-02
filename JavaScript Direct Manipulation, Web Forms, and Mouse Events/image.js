const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgs = ["./images/pic1.jpg", "./images/pic2.jpg", "./images/pic3.jpg", "./images/pic4.jpg", "./images/pic5.jpg"];

/* Declaring the alternative text for each image file */
const alts = {1: "Eye close up", 2: "Smooth waves", 3: "Purple flowers", 4: "Egyptian art", 5: "Butterfly on leaf"};

/* Looping through images */

for (let i = 0; i < imgs.length; i += 1) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgs[i]);
    newImage.setAttribute('alt', alts[i]);
    thumbBar.appendChild(newImage);

    const currSrc = imgs[i];
    const currAlt = alts[i];

    console.log("IMAGE: " + currSrc + " " + currAlt);

    newImage.addEventListener("click", () => {
        console.log("ALT: " + currSrc + " " + currAlt);

        displayedImage.setAttribute('src', currSrc);
        displayedImage.setAttribute('alt', currAlt);
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    const state = btn.getAttribute("class");

    if (state == "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});