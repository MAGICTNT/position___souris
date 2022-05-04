let dernierPosition;

function hautDroit(x) {
    x.classList.add("text-red-500");
    x.classList.remove("text-blue-500");
    x.classList.remove("text-green-500");
    x.classList.remove("text-fuchsia-500");
}
function hautGauche(x) {
    x.classList.add("text-blue-500");
    x.classList.remove("text-red-500");
    x.classList.remove("text-green-500");
    x.classList.remove("text-fuchsia-500");
}
function basDroit(x) {
    x.classList.add("text-green-500");
    x.classList.remove("text-red-500");
    x.classList.remove("text-blue-500");
    x.classList.remove("text-fuchsia-500");
}
function basGauche(x) {
    x.classList.add("text-fuchsia-500");
    x.classList.remove("text-red-500");
    x.classList.remove("text-blue-500");
    x.classList.remove("text-green-500");
}

function mousePosition(evenement) {
    let Mouse_X = evenement.pageX,
        Mouse_Y = evenement.pageY;
    const   info = document.getElementById("info"),
            positionX = document.getElementById("positionX"),
            positionY = document.getElementById("positionY"),
            PositionEcran = document.getElementById("PositionEcran"),
            tailEcranX = screen.width / 2,
            tailEcranY = screen.height / 2;

    positionX.innerHTML = Mouse_X;
    positionY.innerHTML = Mouse_Y;

    if (Mouse_X > tailEcranX && Mouse_Y < tailEcranY) {
        if (dernierPosition != "en haut a droit") {
            hautDroit(info);
            PositionEcran.innerHTML = "en haut a droit";
            dernierPosition = "en haut a droit";
        }
    } else if (Mouse_X < tailEcranX && Mouse_Y < tailEcranY) {
        if (dernierPosition != "en haut a gauche") {
            hautGauche(info);
            PositionEcran.innerHTML = "en haut a gauche";
            dernierPosition = "en haut a gauche";
        }
    } else if (Mouse_X > tailEcranX && Mouse_Y > tailEcranY) {
        if (dernierPosition != "en bas a droit") {
            basDroit(info);
            PositionEcran.innerHTML = "en bas a droit";
            dernierPosition = "en bas a droit";
        }
    } else if (Mouse_X < tailEcranX && Mouse_Y > tailEcranY) {
        if (dernierPosition != "en bas a gauche") {
            basGauche(info);
            PositionEcran.innerHTML = "en bas a gauche";
            dernierPosition = "en bas a gauche";
        }
    }
}

document.addEventListener("mousemove", mousePosition, false);
