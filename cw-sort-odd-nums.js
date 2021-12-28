let sampleArr = [5, 8, 6, 3, 4]
function sortArray(array) {
    // Return a sorted array.
    let oddNums = [];
    for (i = 0; i < array.length; i ++) {
      if (array[i] % 2 !== 0) {
          array.sort();
          } 
    }
    
    return array
  }

  console.log(sortArray(sampleArr));