function changeMode(size, weight, transform, background, color) {
    return function () {
        const body = document.querySelector("body")
        body.style.fontSize = size;
        body.style.fontWeight = weight;
        body.style.textTransform = transform;
        body.style.backgroundColor = background;
        body.style.color = color;
    }
}

function main() {
    var spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    var darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    var screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    const body = document.querySelector("body");    
    var paragraph = document.createElement("P");
    paragraph.innerText = "Welcome Holberton!";
    body.appendChild(paragraph);

    var btnSpooky = document.createElement("BUTTON")
    btnSpooky.innerText ="Spooky";
    body.appendChild(btnSpooky);

    var btnDark = document.createElement("BUTTON")
    btnDark.innerText = "Dark mode";
    body.appendChild(btnDark);

    var btnScream = document.createElement("BUTTON")
    btnScream.innerText = "Scream mode";
    body.appendChild(btnScream);

    btnSpooky.onclick = spooky;
    btnDark.onclick = darkMode;
    btnScream.onclick = screamMode;
}

main();