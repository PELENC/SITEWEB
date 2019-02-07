/*
* init web page
*called when body loaded
*/

function init() {
    document.getElementById("test").innerHTML = "init says HI !";
}

function test_button() {
    alert("Cliked")
    var my_test_div = document.getElementById("test");
    my_test_div.innerHTML = "Buttun Cliked!";
    my_test_div.style.backgroundColor = "green";
}