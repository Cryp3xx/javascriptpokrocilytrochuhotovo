function mainfunction() {
    const inputcheck = parseInt(document.getElementById("ageInput").value);
    if (inputcheck >= 18) {
        document.getElementById("result").textContent = "Jsi dospělý.";
    } else {
        document.getElementById("result").textContent = "Nejsi dospělý.";
    }
}

function checkYear() {
    const yearSelect = parseInt(document.getElementById("yearInput").value);

    if (yearSelect <= 2005) {
        document.getElementById("result").textContent = "Jsi dospělý.";
    } else {
        document.getElementById("result").textContent = "Nejsi dospělý.";
    }
}

function allfunction() {
    const allinputselect = parseInt(document.getElementById("allInput").value);
    if (allinputselect > 1800) 
                      { 
        checkYear()
    } else {
        mainfunction()
    }

}

function forCycle() {

    let userInput = parseInt(document.getElementById("cycleInput").value);

    let output = " "
    for(let i = 0; i < userInput; i++) {
        output = output + "."
        document.getElementById("result").innerHTML = output

    }

}


function SnScript() {
    let userInput = parseInt(document.getElementById("sumnumberscript").value);
    let output = 0;
    for (let i = userInput; i >= 1; i--) {
        output += i;
    } if (userInput = 0) {
    stop } else {
        SnScript
                }

    document.getElementById("result").innerHTML = output
}