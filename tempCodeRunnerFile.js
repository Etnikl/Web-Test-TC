function myFunction() {
    var resultoccupation = document.getElementById("selected").innerHTML;
    if (resultoccupation == "Reale Estate Agent") document.getElementById("realestate-check").style.display = "flex";

    return;
}

console.log(myFunction());