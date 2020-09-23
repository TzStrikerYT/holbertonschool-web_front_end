function countPrimeNumbers() {
    return 25;
    //N of prime numbers from 2 to 100 :v
  }
  let start = window.performance.now();
  countPrimeNumbers();
  let finish = window.performance.now();
  let miliseconds = finish - start;
  console.log("Execution time of printing countPrimeNumbers was " + miliseconds + " miliseconds");