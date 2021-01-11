/*script for burgerbar show/hide act */
$(document).ready(function() {
    $('.btn').click(function() {
        $('.items').toggleClass("show");
        $('ul li').toggleClass("hide");
    });
});

/*Script for biltype display, viser de elementer der skal vises og blokere for dem der ikke skal vises  */
const myFunction = () => {
    document.getElementById("first").style.display = 'block';
    document.getElementById("second").style.display = 'none';
    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'none';
}

const myFunction2 = () => {
    document.getElementById("second").style.display = 'block';
    document.getElementById("first").style.display = 'none';
    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'none';
}

const myFunction3 = () => {
    document.getElementById("third").style.display = 'block';
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'none';
    document.getElementById("fourth").style.display = 'none';
}

const myFunction4 = () => {
    document.getElementById("fourth").style.display = 'block';
    document.getElementById("third").style.display = 'none';
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'none';

}

const myFunction5 = () => {
        document.getElementById("fourth").style.display = 'none';
        document.getElementById("third").style.display = 'none';
        document.getElementById("first").style.display = 'none';
        document.getElementById("second").style.display = 'none';


    }
    /* Script for auto type, ny variabel af typen typed bliver oprettet og der tages fat i .skriv class, hvorefter der indsættes der string værdier inde i .skriv klassen */
var typed = new Typed('.skriv', {
    strings: ['kommer til dig', 'tilbyder proffesionel service', 'gør din bil ren', 'gør din sofa ren', 'servicere både store og små'],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true,
});