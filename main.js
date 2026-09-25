// Changed from array to dictionary so it's easier to find the conversion with the name
const planets = {
    Pluto: 0.06,
    Neptune: 1.148,
    Uranus: 0.917,
    Saturn: 1.139,
    Jupiter: 2.640,
    Mars: 0.3895,
    Moon: 0.1655,
    Earth: 1,
    Venus: 0.9032,
    Mercury: 0.377,
    Sun: 27.9
};

const accentColors = {
    Pluto:   'rgb(210, 185, 170)', // Warm cream
    Neptune: 'rgb(130, 150, 235)', // Periwinkle blue
    Uranus:  'rgb(155, 215, 215)', // Soft cyan
    Saturn:  'rgb(185, 160, 220)', // Lavender
    Jupiter: 'rgb(225, 185, 155)', // Peach
    Mars:    'rgb(195, 170, 140)', // Sandy beige
    Moon:    'rgb(205, 205, 210)', // Silver
    Earth:   'rgb(155, 170, 225)', // Cloudy blue
    Venus:   'rgb(135, 185, 230)', // Sky blue
    Mercury: 'rgb(180, 185, 190)', // Cool gray
    Sun:     'rgb(235, 180, 100)'  // Amber
};

// Populates the planets dropdown element with the names of the planets from the planets array
const planetDropdown = document.getElementById('planets');
Object.keys(planets).forEach(function (planet) {
    const option = document.createElement('option');
    option.value = planet;
    option.textContent = planet;
    planetDropdown.appendChild(option);
});

// generates a random planet as a string
const randPlanet = Object.keys(planets)[Math.floor(Math.random() * 11)];

// sets planet image and color to randomly generated planet
setPlanet(randPlanet);

planetDropdown.value = randPlanet;

// set planet image and accent color
function setPlanet(planet) {
    const planetImg = document.getElementById('planet-image');
    planetImg.src = `images/${planet}.jpg`;
    const title = document.getElementById('title');
    if (planet === "Sun" || planet === "Moon") {
        title.textContent = `How much do you weigh on the ${planet}?`
    } else{
        title.textContent = `How much do you weigh on ${planet}?`
    }

    document.documentElement.style.setProperty(
        '--accent-color',
        accentColors[planet]
    );
}

function calculateWeight(weight, planetConversion) { 
    return weight * planetConversion;
} 

// Update when the dropdown changes.
planetDropdown.addEventListener('change', function () {
    setPlanet(planetDropdown.value);
});

function handleClickEvent(e) {
    let userWeight = document.getElementById('user-weight').value;
    
    // get planet selection and conversion
    let planetName = document.getElementById('planets').value;
    let planetConversion = planets[planetName];

    // calculates weight based on inputs
    let result = calculateWeight(userWeight, planetConversion);

    // outputs weight message
    const output = document.getElementById('output');
    output.textContent = `If you were on ${planetName}, you would weigh ${result.toFixed(2)}lbs!`;
} 

// sets calcButton to use the handleClickEvent on click
const calcButton = document.getElementById("calculate-button").onclick = handleClickEvent;
