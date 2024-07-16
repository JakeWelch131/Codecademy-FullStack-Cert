// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(number, dnaArray) {
  return {
    specimenNum: number,
    dna: dnaArray,
    mutate() {
      const dnaBases = ['A', 'T', 'C', 'G'];
      let base = returnRandBase();
      randomIndex = Math.floor(Math.random() * 15);
      let selectedBase = dnaArray[randomIndex];
      if (selectedBase === base) {
        let newArray = dnaBases.filter(index => index != base);
        newBase = newArray[Math.floor(Math.random() * 3)];
        dnaArray[randomIndex] = newBase;
        return dnaArray;
      }
      else {
        dnaArray[randomIndex] = base;
        return dnaArray;
      }
    },
    compareDNA(otherObject) {
      let counter = 0;
      for(let i = 0; i < this.dna.length; ++i) {
        for(let j = 0; j < otherObject.dna.length; ++j) {
          if ((this.dna[i] === otherObject.dna[j]) && (i === j)) {
            ++counter;
          }
        }
      }
      let percentage = Math.floor((counter/this.dna.length) * 100);
      console.log(`specimen #${this.specimenNum} and specimen #${otherObject.specimenNum} have ${percentage}% DNA in common.`);

    },
    willLikelySurvive() {
      let counter = 0;
      for(let i = 0; i < this.dna.length; ++i) {
        if ((this.dna[i] === 'C') || (this.dna[i] === 'G')) {
          ++counter;
        }
      }
      let percentage = Math.floor((counter/this.dna.length) * 100);
      if (percentage >= 60) {
        return true;
      }
      else {
        return false;
      }
    }
  }
}

let survivors = [];
let i = 0;
while(survivors.length < 30) {
  let creature = new pAequorFactory(i, mockUpStrand());
  if (creature.willLikelySurvive() == true) {
    survivors.push(creature);
  }
  ++i;
}
console.log(survivors);




//let creature = new pAequorFactory(1, mockUpStrand());
//let creature2 = new pAequorFactory(2, mockUpStrand());

//creature.compareDNA(creature2);
//console.log(creature.dna);

//console.log(creature.mutate());
//console.log(creature.willLikelySurvive());




