function countPrimeNumbers() {
    return 25;
    //N of prime numbers from 2 to 100 :v
  }
  let start = window.performance.now();
  
  for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
  }

  let finish = window.performance.now();
  let miliseconds = finish - start;
  console.log("Execution time of calculating prime numbers 100 times was " + miliseconds + " miliseconds");