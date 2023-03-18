// Write your JavaScript code here!//


window.addEventListener("load", function() {


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   console.log(listedPlanetsResponse);
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let selectedPlanet = pickPlanet(listedPlanets);
       let name = selectedPlanet.name;
       let diameter = selectedPlanet.diameter;
       let star = selectedPlanet.star;
       let distance = selectedPlanet.distance;
       let moons = selectedPlanet.moons
       let imageUrl = selectedPlanet.image;
       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl  );
   })
    const form = document.querySelector("form");
    let list= document.getElementById("faultyItems");
list.style.visibility="hidden";

   form.addEventListener("submit", function(event) {
    event.preventDefault();

    let document = window.document;
    let pilot = document.querySelector("input[name=pilotName").value;
    let copilot = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoLevel = document.querySelector("input[name=cargoMass]").value;
    let list= document.getElementById('faultyItems');

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);   })
  
});