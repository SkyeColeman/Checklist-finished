// Write your helper functions here!=
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let div = document.getElementById('missionTarget');
    div.innerHTML =`
   
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
    `;
}

function validateInput(testInput) {
    let numInput = Number(testInput) 
  if (testInput === "") {
    return "Empty"
} else if (isNaN(numInput)) {
    return "Not a number";
   } else if (isNaN(numInput) === false) {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   

   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty" ){
    alert("All fields are required");
   }else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a number" || validateInput(cargoLevel) === "Not a number") {
alert("Please enter the correct information.")
   }else {
    list.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready!`;
    copilotStatus.innerHTML = `Copilot ${copilot} is ready!`
    let launchStatus = document.getElementById("launchStatus");
   
    
    if((fuelLevel) < 10000 && ((cargoLevel)) <= 10000){
    fuelStatus.innerHTML="Fuel level is too low (needs to be more than 10,000)";
    cargoStatus.innerHTML= "Cargo level is ready to go!";
    launchStatus.innerHTML = "Shuttle not ready to launch";
    launchStatus.style.color = '#C7254E';
   } else if ((fuelLevel) >= 10000 && ((cargoLevel)) > 10000){
    launchStatus.innerHTML = "Shuttle not is ready for launch";
    launchStatus.style.color = "#C7254E";
    fuelLevel.innerHTML = "Fuel is ready to go!";
    cargoLevel.innerHTML = "Cargo is too heavy!";

}else if  ((fuelLevel) < 10000 && ((cargoLevel)) > 10000){
    fuelStatus.innerHTML="Fuel level is too low (needs to be more than 10,000)";
    cargoLevel.innerHTML = "Cargo is too heavy!"
    launchStatus.innerHTML = "Shuttle is not ready for launch"
    launchStatus.style.color = "#C7254E"
} else {
    fuelLevel.innerHTML = "Fuel is ready to go!";
    cargoStatus.innerHTML= "Cargo level is ready to go!";
    launchStatus.innerHTML = "Shuttle is ready for launch"
    launchStatus.style.color = "#419F6A"
} 
};
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        console.log(response)
        return response.json();
      });
    console.log(planetsReturned);
    return planetsReturned;
}

function pickPlanet(planets) {
    let planet = planets[Math.floor(Math.random()*planets.length)];
    return planet;
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
