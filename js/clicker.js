/* Med document.queryselector(selector) kan vi hämta
 * de element som vi behöver från html dokumentet.
 * Vi spearar elementen i const variabler då vi inte kommer att
 * ändra dess värden.
 * Läs mer:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 * Viktigt: queryselector ger oss ett html element eller flera om det finns.
 */
const clickerButton = document.querySelector('#game-button');
const display = document.querySelector('#resourcesDisplay')

const moneyTracker = document.querySelector('#money');
const metalTracker = document.querySelector('#Metals');
const energyTracker = document.querySelector('#Energy');
const crystalTracker = document.querySelector('#Crystals');
const mpsTracker = document.querySelector('#mps'); // money per second
const mpcTracker = document.querySelector('#mpc'); // money per click
const upgradesTracker = document.querySelector('#upgrades');
const upgradeList = document.querySelector('#upgradelist');
const msgbox = document.querySelector('#msgbox');
const audioAchievement = document.querySelector('#swoosh');
const tickspeedTracker = document.querySelector('#tickspeed');
// const helperTracker = document.querySelector('#helpers');

// const factoryTracker = document.querySelector('#factories');
// const industralGeneratorTracker = document.querySelector('#industrialGenerators');
// const assemblyPlantTracker = document.querySelector('#assemblyPlants');





/* Följande variabler använder vi för att hålla reda på hur mycket pengar som
 * spelaren, har och tjänar.
 * last används för att hålla koll på tiden.
 * För dessa variabler kan vi inte använda const, eftersom vi tilldelar dem nya
 * värden, utan då använder vi let.
 * Läs mer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */
let money = 0;
let moneyPerClick = 1;
let moneyPerSecond = 0;
let acquiredUpgrades = 0;
let last = 0;
let numberOfClicks = 0; // hur många gånger har spelare eg. klickat

let activeMetal = false; // exempel för att visa att du kan lägga till klass för att indikera att spelare får valuta
let activeEnergy = false;
let activeCrystal = false;

// Resources
let Metals = 0;
let Energy = 0;
let Crystals = 0;
let tickSpeed = 1000;

let robotHelpers = 0;
let addRobotHelper = 1;

let factories = 0;
let addFactories = 1;
let produceHelpers = 0;

let industrialGenerators = 0;
let addIndustrialGenerators = 1;
let produceFactories = 0;

let assemblyPlants = 0;
let addAssemblyPlants = 1;
let produceIndustralGenerators = 0;


let metalLoop = 0;
let energyLoop = 0;
let crystalLoop = 0;

// likt upgrades skapas här en array med objekt som innehåller olika former
// av achievements.
// requiredSOMETHING är vad som krävs för att få dem

let achievements = [
    {
        description: 'Museet är redo att öppna, grattis! ',
        requiredUpgrades: 10,
        acquired: false,
    },
    {
        description: 'Nu börjar det likna något, fortsätt gräva!',
        requiredUpgrades: 100,
        acquired: false,
    },
    {
        description: 'Klickare, med licens att klicka!',
        requiredClicks: 100,
        acquired: false,
    },
    {
        description: 'Tac-2 god!',
        requiredClicks: 1000,
        acquired: false,
    },
];
/* Med ett valt element, som knappen i detta fall så kan vi skapa listeners
 * med addEventListener så kan vi lyssna på ett specifikt event på ett html-element
 * som ett klick.
 * Detta kommer att driva klickerknappen i spelet.
 * Efter 'click' som är händelsen vi lyssnar på så anges en callback som kommer
 * att köras vi varje klick. I det här fallet så använder vi en anonym funktion.
 * Koden som körs innuti funktionen är att vi lägger till moneyPerClick till
 * money.
 * Läs mer: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 */
function getRandomMaterial(robotHelpers) { // Generate a random material


    for (let i = 0; i < robotHelpers; i++) {
        let randomGet = Math.floor(Math.random() * 100) + 1; // Get a random number
        Math.floor(Math.random() * 100) + 1;
        if (randomGet <= 80) {
            Metals += 1 * (robotHelpers);
            //                metalTracker.textContent = Math.round(Metals); // Update the values in the text
            metalLoop++;
            //                console.log(metalLoop + ' Metals')
        } else if (randomGet > 80 && randomGet < 99) {
            energyLoop++;
            Energy += 1 * (robotHelpers);
            //                energyTracker.textContent = Math.round(Energy);// Update the values in the text
            //                console.log(energyLoop + ' Energy')
        } else {
            crystalLoop++;
            Crystals += 1 * (robotHelpers);
            //                crystalTracker.textContent = Math.round(Crystals);// Update the values in the text
            //                console.log(crystalLoop + ' Crystals')
        }
    }
    /*
    let randomGet = Math.floor(Math.random() * 100) + 1; // Get a random number
    
    // Get a random resource based on luck on each click.
    if(randomGet <= 80) { // 80% 
        Metals += 1 * (robotHelpers);
        metalTracker.textContent = Math.round(Metals); // Update the values in the text
       // console.log(Metals + " Metals");
        
    } else if (randomGet > 80 &&  randomGet < 99){ // 19% 
        Energy += 1 * (robotHelpers);
        energyTracker.textContent = Math.round(Energy);// Update the values in the text
        //console.log(Energy + " Energy");
        
    } else { // 1%
        Crystals +=1 * (robotHelpers);
        crystalTracker.textContent = Math.round(Crystals);// Update the values in the text
        //console.log(Crystals + " Crystals");
 
    }    
        */
};

function displayResources(resource) {
    display.style.position = "absolute";
    display.style.left = randomPosition();
    display.style.top = randomPosition();
    display.textContent = resource;
}

function randomPosition() {
    var x = Math.floor(Math.random() * 100) // RANDOM NUMBER BETWEEN 0 AND 100
    var y = x + "px";
    console.log(y);
    return y;
}

clickerButton.addEventListener(
    'click',
    () => {
        numberOfClicks += 1;
        metalTracker.textContent = Math.round(Metals);
        energyTracker.textContent = Math.round(Energy);
        crystalTracker.textContent = Math.round(Crystals);

        // console.log(clicker.score);
        //getRandomMaterial(robotHelpers); // getRandomMaterial each click

        let randomGet = Math.floor(Math.random() * 100) + 1; // Get a random number
        // Get a random resource based on luck on each click.
        if (randomGet <= 80) { // 80% 
            Metals += 1;
            metalTracker.textContent = Math.round(Metals); // Update the values in the text
            displayResources('Metal')
            //console.log(Metals + " Metals");
            return Metals;
        } else if (randomGet > 80 && randomGet < 99) { // 19% 
            Energy += 1;
            energyTracker.textContent = Math.round(Energy);// Update the values in the text
            displayResources('Energy')
            //console.log(Energy + " Energy");
            return Energy;
        } else { // 1%
            Crystals += 1;
            crystalTracker.textContent = Math.round(Crystals);// Update the values in the text
            displayResources('Crystal')
            // console.log(Crystals + " Crystals");
            return Crystals;
        }

        // vid click öka score med moneyPerClick
        // money += moneyPerClick;
        // håll koll på hur många gånger spelaren klickat
    },
    false
);





/* För att driva klicker spelet så kommer vi att använda oss av en metod som heter
 * requestAnimationFrame.
 * requestAnimationFrame försöker uppdatera efter den refresh rate som användarens
 * maskin har, vanligtvis 60 gånger i sekunden.
 * Läs mer: https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
 * funktionen step används som en callback i requestanaimationframe och det är
 * denna metod som uppdaterar webbsidans text och pengarna.
 * Sist i funktionen så kallar den på sig själv igen för att fortsätta uppdatera.
 */
function step(timestamp) {
    // moneyTracker.textContent = Math.round(money);
    //    mpsTracker.textContent = moneyPerSecond;
    //    mpcTracker.textContent = moneyPerClick;
    upgradesTracker.textContent = acquiredUpgrades;





    produceHelpers = 1 * factories;
    produceFactories = 1 * industrialGenerators;
    produceIndustralGenerators = 1 * assemblyPlants;



    if (timestamp >= last + tickSpeed) {
        getRandomMaterial(robotHelpers);

        metalTracker.textContent = Math.round(Metals);
        energyTracker.textContent = Math.round(Energy);
        crystalTracker.textContent = Math.round(Crystals);
        
        tickspeedTracker.textContent = tickSpeed + 'ms'; // Uppdatera tickspeed texten
        // helperTracker.textContent = robotHelpers; // Uppdatera robothelper texten
        // assemblyPlantTracker.textContent = assemblyPlants;
        // factoryTracker.textContent = factories;
        // industralGeneratorTracker.textContent = industrialGenerators;



        last = timestamp;

        if (factories > 0) {
            robotHelpers += produceHelpers
            //console.log(`Factories produced ${produceHelpers} robot helpers`)
        }
        if (industrialGenerators > 0) {
            factories += produceFactories;
            //console.log(`Industral generators produced ${produceFactories} factories`)
        }

        if (assemblyPlants > 0) {
            industrialGenerators += produceIndustralGenerators;
        }
    }

    if (robotHelpers > 2 && !activeMetal) {
        metalTracker.classList.add('active');
        activeMetal = true;
    }

    if (robotHelpers > 10 && !activeEnergy) {
        energyTracker.classList.add('active')
        activeEnergy = true;
    }

    if (robotHelpers > 100 && !activeCrystal) {
        crystalTracker.classList.add('active')
        activeCrystal = true;
    }


    // achievements, utgår från arrayen achievements med objekt
    // koden nedan muterar (ändrar) arrayen och tar bort achievements
    // som spelaren klarat
    // villkoren i första ifsatsen ser till att achivments som är klarade
    // tas bort. Efter det så kontrolleras om spelaren har uppfyllt kriterierna
    // för att få den achievement som berörs.
    achievements = achievements.filter((achievement) => {
        if (achievement.acquired) {
            return false;
        }
        if (
            achievement.requiredUpgrades &&
            acquiredUpgrades >= achievement.requiredUpgrades
        ) {
            achievement.acquired = true;
            message(achievement.description, 'achievement');
            return false;
        } else if (
            achievement.requiredClicks &&
            numberOfClicks >= achievement.requiredClicks
        ) {
            achievement.acquired = true;
            message(achievement.description, 'achievement');
            return false;
        }
        return true;
    });

    window.requestAnimationFrame(step);
}


/* Här använder vi en listener igen. Den här gången så lyssnar vi efter window
 * objektet och när det har laddat färdigt webbsidan(omvandlat html till dom)
 * När detta har skett så skapar vi listan med upgrades, för detta använder vi
 * en forEach loop. För varje element i arrayen upgrades så körs metoden upgradeList
 * för att skapa korten. upgradeList returnerar ett kort som vi fäster på webbsidan
 * med appendChild.
 * Läs mer:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
 * Efter det så kallas requestAnimationFrame och spelet är igång.
 */
window.addEventListener('load', (event) => {
    upgrades.forEach((upgrade) => {
        upgradeList.appendChild(createCard(upgrade));
    });
    window.requestAnimationFrame(step);
});

/* En array med upgrades. Varje upgrade är ett objekt med egenskaperna name, cost
 * och amount. Önskar du ytterligare text eller en bild så går det utmärkt att
 * lägga till detta.
 * Läs mer:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
 */
upgrades = [
    {
        name: 'Robothelper', // Generates materials
        metalCost: 10,
        energyCost: 0,
        crystalCost: 0,
        addRobotHelper: 1,
        manualPurchase: 1,
    },
    {
        name: 'Factory', // Generates robot helpers
        metalCost: 10,
        energyCost: 0,
        crystalCost: 0,
        amount: 1, // Amount that increases
        manualPurchase: 1, // Gives a manual purchase
    },
    {
        name: 'Industrial Generator',
        metalCost: 10,
        energyCost: 0,
        crystalCost: 0,
        amount: 1,
        manualPurchase: 1,
    },
    {
        name: 'Assembly Plant',
        metalCost: 10,
        energyCost: 0,
        crystalCost: 0,
        amount: 0,
        manualPurchase: 0,
    },
];

/* createCard är en funktion som tar ett upgrade objekt som parameter och skapar
 * ett html kort för det.
 * För att skapa nya html element så används document.createElement(), elementen
 * sparas i en variabel så att vi kan manipulera dem ytterligare.
 * Vi kan lägga till klasser med classList.add() och text till elementet med
 * textcontent = 'värde'.
 * Sedan skapas en listener för kortet och i den hittar vi logiken för att köpa
 * en uppgradering.
 * Funktionen innehåller en del strängar och konkatenering av dessa, det kan göras
 * med +, variabel + 'text'
 * Sist så fäster vi kortets innehåll i kortet och returnerar elementet.
 * Läs mer:
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
 * https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
 * https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */
function getWhiteSpace(count) {
    return '\xa0'.repeat(count);
}


function createCard(upgrade) {
    const card = document.createElement('div');
    card.classList.add('card');
    const header = document.createElement('p');
    header.classList.add('title');
    const cost = document.createElement('p');
    const crystalCost = document.createElement('p');
    const energyCost = document.createElement('p');
    setInterval (function() {
        if (upgrade.name == 'Robothelper') {
            header.textContent = `${upgrade.name} ${getWhiteSpace(38)} Amount: ${robotHelpers}`;
        }
        else if (upgrade.name == 'Factory') {
            header.textContent = `${upgrade.name} ${getWhiteSpace(46)} Amount: ${factories}`;
        }
        else if (upgrade.name == 'Industrial Generator') {
            header.textContent = `${upgrade.name} ${getWhiteSpace(25)} Amount: ${industrialGenerators}`;
        }
        else if (upgrade.name == 'Assembly Plant') {
            header.textContent = `${upgrade.name} ${getWhiteSpace(32)} Amount: ${assemblyPlants}`;
        }
    });
    
   
    cost.textContent = `Köp för ${upgrade.metalCost} Metal, ${upgrade.energyCost} Energy, ${upgrade.crystalCost} Crystals.`;

    card.addEventListener('click', (e) => {
        if (Metals >= upgrade.metalCost && Energy >= upgrade.energyCost && Crystals >= upgrade.crystalCost) {
            acquiredUpgrades++;
            Metals -= upgrade.metalCost;
            Energy -= upgrade.energyCost;
            Crystals -= upgrade.crystalCost;


            if (upgrade.name == 'Tickspeed') {
                tickSpeed *= 0.9;
            }

            else if (upgrade.name == 'Robothelper') {
                robotHelpers += addRobotHelper;
                upgrade.metalCost *= 1.5;
            }

            else if (upgrade.name == 'Factory') {
                factories += addFactories;
                upgrade.metalCost *= 1.5;
            }

            else if (upgrade.name == 'Industrial Generator') {
                industrialGenerators += addIndustrialGenerators;
                upgrade.metalCost *= 1.5;
            }

            else if (upgrade.name == 'Assembly Plant') {
                assemblyPlants += addAssemblyPlants;
                upgrade.metalCost *= 1.5;
            }

            cost.textContent = `Köp för ${Math.round(upgrade.metalCost)} Metal, ${Math.round(upgrade.energyCost)} Energy, ${Math.round(upgrade.crystalCost)} Crystals.`;


            message('Grattis du har köpt en uppgradering!', 'success');
        } else {
            message('Du har inte råd.', 'warning');
        }
    });

    card.appendChild(header);
    card.appendChild(cost);
    return card;
}

/* Message visar hur vi kan skapa ett html element och ta bort det.
 * appendChild används för att lägga till och removeChild för att ta bort.
 * Detta görs med en timer.
 * Läs mer:
 * https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
 * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
 */
function message(text, type) {
    const p = document.createElement('p');
    p.classList.add(type);
    p.textContent = text;
    msgbox.appendChild(p);
    if (type === 'achievement') {
        tickSpeed *= 0.95;
        audioAchievement.play();
    }
    setTimeout(() => {
        p.parentNode.removeChild(p);
    }, 2000);
}
