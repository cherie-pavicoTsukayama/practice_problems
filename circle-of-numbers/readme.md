# Exercise from CodeSignal
https://app.codesignal.com/arcade/code-arcade/intro-gates/vExYvcGnFsEYSt8nQ


- Consider integer numbers from `0` to `n - 1` written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that `0` and `n - 1` are neighboring, too).

  Given `n` and `firstNumber`, find the number which is written in the radially opposite position to `firstNumber`.

## Example

- For `n = 10` and `firstNumber = 2`, the output should be<br>
  `circleOfNumbers(n, firstNumber) = 7`.

<img src="./example (1).png">

## Input/Output
- [execution time limit] 4 seconds (js)
- [input] integer `n`
  - A positive <strong> even</strong> integer.
  - Guaranteed constraints: <br> `4 ≤ n ≤ 20`.
- [input] integer `firstNumber`
  - Guaranteed constraints: <br> `0 ≤ firstNumber ≤ n - 1`.

