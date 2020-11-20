//needs to be divisible by 7, then 11, then 13

function isPrime(num){
    let potentialFactor = Math.floor(num/2);
    while(potentialFactor > 1){
        if(num % potentialFactor == 0){
            //if the number can be divided evenly by a number that 
            //is not itself or one, return false
            return false
        }
        potentialFactor--
    }
    //if it refuses to be divided by anything, it's prime
    return true 
}

function reachLuckyLength(num, length){
    let multiplier = 2
    copyOfNum = num
    numbersToDecode = []
    while(num.toString().length <= length){
        num = copyOfNum * multiplier
        multiplier++
        if(num.toString().length == length){
            numbersToDecode.push(num);
        }
    }
    return numbersToDecode 
}

function arrayOfMultiples(num, length){
    let array = []
    let multiplier = 2
    let multiple = num
    while(multiple.toString().length == length){
        multiple = num * multiplier
        array.push(multiple)
        multiplier++
    }
    return array
}


    function isSecretJackPot(symbols) {
      let symbolsByParts = symbols.split(" ");
      //split the symbols about the middle space
      let firstSequence = symbolsByParts[0];
      let secondSequence = symbolsByParts[1];
      if (firstSequence == secondSequence) {
        return true;
      } else {
        return false;
      }
    }

    function findTheSecretJackpot(treasureArray) {
      for (let i = 0; i < treasureArray.length; i++) {
        //   console.log(treasureArray[i].chestSymbols)
        if (isSecretJackPot(treasureArray[i].chestSymbols)) {
          return treasureArray[i];
        }
      }
    }

const treasureChests = [treasureChestOne = {chestSymbols:'TNT NTN'}, 
    treasureChestTwo = {chestSymbols: 'EFK EFK'}, 
    treasureChestThree = {chestSymbols: 'TEC CET'}, 
    treasureChestFour = {chestSymbols: 'KKZ ZCC'}, 
    treasureChestFive = {chestSymbols: 'HTE TEH'}]

    const LeviathinLords = {count: 7}
    const crackenCommanders = {count: 10}
    const mermiteMinions = {count: 12}



function saveAtlantarctica(lords, commanders, minions, treasures){

//
  let firstShare = lords.count;
  let secondShare = commanders.count + 1;
  //has to be divided among the 10 cracken commanders, plus one for the Leviathin Lord
  let thirdShare = minions.count + 1
  //has to be divided among the 12 Mermite Minions, plus one for the Cracken Commander

  let LCM;
  if (isPrime(firstShare) && isPrime(secondShare) && isPrime(thirdShare)) {
    LCM = firstShare * secondShare * thirdShare;
    //since all of the inputs are prime, that means that the amount of gold we will need
    //is a multiple of this ^ LCM (Lowest Common Multiple)
  }

  //There is no way to decode what the actual numbers on the chest are, but we can look for patterns
  //first thing, would be find the length of the string (minus the space in the middle)
  // since they are all the same length, any chest will do
  const luckyLength = treasures[0].chestSymbols.length - 1;

  // so lets multiply our LCM until we reach this length so we can match up patterns
  // console.log(numbersToDecode[0])
  
  //we get 100100--A pattern if I've ever seen one
  //lets see if this pattern persists by printing out the rest of the array
  
  // console.log(numbersToDecode.slice(1,60));
  let numbersToDecode = reachLuckyLength(LCM, luckyLength);
  //we get these results: looks like the pattern persists persists
  //   101101, 102102, 103103, 104104, 105105,
  //   106106, 107107, 108108, 109109, 110110,
  //   111111, 112112, 113113, 114114, 115115,
  //   116116, 117117, 118118, 119119, 120120,
  //   121121, 122122, 123123, 124124, 125125,
  //   126126, 127127, 128128, 129129, 130130,
  //   131131, 132132, 133133, 134134, 135135,
  //   136136, 137137, 138138, 139139, 140140,
  //   141141, 142142, 143143, 144144, 145145,
  //   146146, 147147, 148148, 149149, 150150,
  //   151151, 152152, 153153, 154154, 155155,
  //   156156, 157157, 158158, 159159
  // ]

  //we just have to check which of the treasure chests match this pattern
  //what's the pattern? Looks like the first three numbers (or in the treasure chest case, the first three characters)
  // can be anything, however the last three numbers (or character) MUST repeat the sequence
  // this is pretty simple...
  let secretJackpot = findTheSecretJackpot(treasures);
  console.log(`The chest we want to give to save the day is: ${secretJackpot}`);
//   we get the chest of EFK EFK
  return secretJackpot;
  //the city is saved
}

saveAtlantarctica(LeviathinLords, crackenCommanders, mermiteMinions, treasureChests);
