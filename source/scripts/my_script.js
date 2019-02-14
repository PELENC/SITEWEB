/*
* init web page
*called when body loaded
*/
i = 50;
var etat = 1; 
count_aller_retour =0;

function init() {
    //document.getElementById("test").innerHTML = "init says HI !";
    window.setInterval(carre, 10);
}

function test_button() {
    alert("Cliked")
    var my_test_div = document.getElementById("test");
    my_test_div.innerHTML = "Buttun Cliked!";
    my_test_div.style.backgroundColor = "green";
}

function carre() {
    switch(etat) {
        case 1 :
            i = i + 30;
            var my_square = document.getElementById("my_square");
            my_square.style.left = i + "px";
            console.log(i);
            if (i>1200) { 
                etat = 2;
                count_aller_retour = count_aller_retour + 1;
            }
            break;
        case 2 : 
            
            i = i - 30;
            var my_square = document.getElementById("my_square");
            my_square.style.left = i + "px";
            console.log(i);
            if (i<50) { etat = 1;}
            if (i<50 && count_aller_retour ==3) { etat = 3;}
            break;
        case 3 : 
            var my_square = document.getElementById("my_square");
            my_square.style.left = "50px";
            break;

        default :
            console.log("ERREUR");
            break;

    }
   console.log(count_aller_retour);
   console.log(etat);
    /*et root = document.documentElement; 

    root.addEventListener("mousemove", e => {
        c.setProperty('--mouse-x', e.clientX + "px");
        root.style.setProperty('--mouse-y', e.clientY + "px");
    });*/
}