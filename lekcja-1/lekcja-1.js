function ustawCzarneTlo() {
    background("black");
}

function ustawBialeTlo() {
    background("white");
}

function ustawNiebieskieTlo() {
    background("blue");
}

function dodajKolko(x, y, promien) {
    fill("red");
    noStroke();
    circle(x, y, promien);
}

function dodajNapis(x, y, tresc) {
    textSize(32);
    fill("black");
    noStroke();
    text(tresc, x, y);
}

function dodajKwadrat(x, y, bok) {
    fill("green");
    noStroke();
    rect(x, y, bok);
}
