// Write your JavaScript code here!
console.dir("planets");
var planets = [ 
    ['Pluto', 0.06], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9] 
];
function populateDropDown(){
    let dropDown = document.getElementById("planets");
    planets.forEach(planet => {
        const opt = document.createElement("option");
        opt.value = planet[1];
        opt.textContent = planet[0];
        dropDown.appendChild(opt);
    });
}
document.addEventListener("DOMContentLoaded", populateDropDown());

function calculateWeight(weight, planetName){
    let conversion;
    switch(planetName){
        case "Pluto":
            conversion = weight*.06;
            break;
        case "Neptune":
            conversion = weight*1.148;
            break;
        case "Uranus":
            conversion = weight*.917;
            break;
        case "Saturn":
            conversion = weight*1.1139;
            break;
        case "Jupiter":
            conversion = weight*2.64;
            break;
        case "Mars":
            conversion = weight*.3895;
            break;
        case "Moon":
            conversion = weight*.1655;
            break;
        case "Earth":
            conversion = weight;
            break;
        case "Venus":
            conversion = weight*.9032;
            break;
        case "Mercury":
            conversion = weight*.377;
            break;
        case "Sun":
            conversion = weight*27.9;
            break;
    }
    return conversion;
}
document.getElementById("calculate-button").addEventListener("click", function(){
    const answer = document.getElementById("user-weight");
    let userWeight = parseFloat(answer.value);
    let dropdown = document.querySelector("#planets");
    let selectedPlanet = dropdown.options[dropdown.selectedIndex].text
    let result = calculateWeight(userWeight, selectedPlanet);
    document.querySelector("#output").innerText = `If you were on ${selectedPlanet}, you would weigh ${result}lbs!`
});

function clearDisplay(){
    document.getElementById("user-weight").value = "";
    document.getElementById("output").textContent = "";
}

document.getElementById("clear-button").addEventListener("click", function(){
    document.getElementById("user-weight").value = "";
    document.getElementById("output").textContent = "";
});

