//To do
// Create population - yum
// fitness function - yum
// selection function - yum
// breed function - yum
// mutation function - yum

const target = "Joseph Witten"
var population = []
var fitness = []


function start() {
    population = createPopulation(100);
    console.log("INIT POP")
    console.log(population)

    continuous:
    while(true) {

    fitness = getFitness(population);
    console.log("FITNESS")
    console.log(fitness)
    matingPool = getMatingPool(fitness)
    console.log("MATING POOL")
    console.log(matingPool)
    population = selectAndBreed(matingPool)
    console.log("POPULATION")
    console.log(population)
    mutate(population, 2)

    
        
    if(population.includes(target)){
        console.log("DONE")
        indexOfWord = population.indexOf(target);
        console.log(indexOfWord)
        console.log(population[indexOfWord])
 
        break continuous;
    }


    
    }
}


function createPopulation(amount) {6
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
        Initfitness.push(sum)
    }
    return Initfitness
}

function getMatingPool(fitness) {
    matingPool = []
    for (let i = 0; i < population.length; i++) {
        for (let j = 0; j < fitness[i]; j++) {
            matingPool.push(population[i])
        }
    }
    return matingPool
}

function selectAndBreed(matingPool) {
    if (Math.max(matingPool) == 0) {
        console.log("EMPTY MATING POOL")
        matingPool.push(population[Math.floor(Math.random() * population.length)])
    }
    newPop = []
    for (let i = 0; i < population.length; i++) {
        TempMatingPool = matingPool
        firstRandomChoice = Math.floor(Math.random() * matingPool.length)
        secondRandomChoice = Math.floor(Math.random() * TempMatingPool.length)
        newChromosome = ""
     
        for(let j = 0; j < target.length; j++) {
            var randomBool = Math.random() >= 0.5;
            if (randomBool) {
                newChromosome += matingPool[firstRandomChoice].charAt(j);
            }
            else {
                newChromosome += TempMatingPool[secondRandomChoice].charAt(j);
            }
        }
        newPop.push(newChromosome);
        
    }
    return newPop
}

function mutate(population, rate) {

    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy ";
    var charactersLength = characters.length;

    amountToChange = Math.ceil((population.length/100)*rate)
    for (let i = 0; i < amountToChange; i++) {
        ChromosomeToChange = Math.floor(Math.random() * population.length)
        geneToChange = Math.floor(Math.random() * target.length)
        randomChar = characters.charAt(Math.floor(Math.random() * charactersLength));
        population[ChromosomeToChange] = replaceCharAt(population[ChromosomeToChange], geneToChange, randomChar)
        // console.log("Element of population that has been change")
        // console.log(ChromosomeToChange)
        // console.log(population[ChromosomeToChange])
    }
}

function replaceCharAt(stringToChange, index, replacement) {
    s = ""
    s = stringToChange.substring(0, index) + replacement + stringToChange.substring(index + 1, stringToChange.length);
    return s
    }
