function mousePosition(evenement) {
    var Mouse_X = evenement.pageX,
        Mouse_Y = evenement.pageY,
        dernierPosition;
    const positionX = document.getElementById("positionX"),
        positionY = document.getElementById("positionY"),
        PositionEcran = document.getElementById("PositionEcran"),
        tailEcranX = screen.width / 2,
        tailEcranY = screen.height / 2;

    positionX.innerHTML = Mouse_X;
    positionY.innerHTML = Mouse_Y;

    if (Mouse_X > tailEcranX && Mouse_Y < tailEcranY) {
        PositionEcran.innerHTML = 'en haut a droit';
    } else if (Mouse_X < tailEcranX && Mouse_Y < tailEcranY) {
        PositionEcran.innerHTML = 'en haut a gauche';
    } else if (Mouse_X > tailEcranX && Mouse_Y > tailEcranY) {
        PositionEcran.innerHTML = 'en bas a droit';
    } else if (Mouse_X < tailEcranX && Mouse_Y > tailEcranY) { 
        PositionEcran.innerHTML = 'en bas a gauche';
    }
}

document.addEventListener("mousemove", mousePosition, false);
