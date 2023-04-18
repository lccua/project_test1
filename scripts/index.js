const names = ["Al Bundy", "Peggy Bundy", "Kelly Bundy", "Bud Bundy", "Buck Bundy"];
const urls = ["images/al.webp", "images/peg.webp", "images/kelly.webp", "images/bud.webp", "images/buck.webp"];

const setup = () => {

    let img = document.getElementsByClassName("selectable")
    for (let i = 0; i < img.length ; i++) {
        img[i].addEventListener("click", clickImage )
    }
}


let selectedImage = null;

const clickImage = (event) => {

    let source = event.target.getAttribute("src");

    let index = urls.indexOf(source);

    let naam = names[index];

    let result = document.getElementsByClassName("result")
    for (let i = 0; i < result.length ; i++) {
        result[i].innerHTML = naam;

    const clickedImage = event.target;

    if ( clickedImage.classList.contains("selected")) {
        clickedImage.classList.remove("selected");
        result[i].innerHTML = null;


        selectedImage = null;
    } else {
        // Remove the 'selected' class from the previously selected image, if any
        if (selectedImage !== null) {
            selectedImage.classList.remove('selected');
        }

        clickedImage.classList.add('selected');
        selectedImage = clickedImage;
    }

    let tekst = event.target.value
    console.log(tekst)
    }
}

window.addEventListener("load", setup);

