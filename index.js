// add solution here

function theBeatlesPlay(musicians, instruments) {
  let arr = [];
  
  for (let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return arr;
}

function johnLennonFacts(facts) {
  i = 0;
  
  let factsWithExlamation = [];
  
  while (i < facts.length) {
    factsWithExlamation.push(`${facts[i]}!!!`)
  }
  
  return factsWithExlamation;
}