export function fizzbuzz(n1) {
    if (n1 % 3 === 0 && n1 % 5 === 0)
        return "FizzBuzz"


    if (n1 % 3 === 0) {
        return 'fizz'
    }


    if (n1 % 5 === 0) {
        return 'Buzz'
    }

    if (n1 % 15 === 0) {
        return 'FizzBuzz'
    }
}
