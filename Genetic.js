//To do
// Create population - yum
// fitness function
// selection function
// breed function
// mutation function

const target = "Joseph Witten"
var population = []
var fitness = []


function start() {
    population = createPopulation(10);
    console.log(population)
    fitness = getFitness(population);
    console.log(fitness)
}


function createPopulation(amount) {
    var InitPopulation = []
    for (let index = 0; index < amount; index++) {
        InitPopulation.push(randomString())
    }
    return InitPopulation
}

function randomString() {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy ";
    var charactersLength = characters.length;
    for (var i = 0; i < target.length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result
}

function getFitness(population) {
    var Initfitness = [];
    for (let i = 0; i < population.length; i++) {
       
        sum = 0;
        for (let j = 0; j < target.length; j++) {
            if (population[i].charAt(j) === target.charAt(j)) {
                sum = sum + 1;
            }
        }
        console.log(sum)
        Initfitness.push(sum)
    }
    return Initfitness
}
