// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function problem1() {
  const list = [10, 3, 15, 7];
  const target = 17;

  for (let i = 0; i < list.length; i++) {
    let current = list[i];
    for (let j = 0; j < list.length; j++) {
      let adds = list[j];
      if (current + adds == target) {
        console.log('done - ' + current + '+' + adds);
      }
    }
  }
}
// problem1();

function problem816() {
  // Given three 32-bit integers x, y, and b, (return x if b is 1 )and (y if b is 0), using only mathematical or bit operations. You can assume b can only be 1 or 0
}
// problem816();

function problem806() {
  // Let (A) be an (N) by (M) matrix in which every row and every column is sorted.
  // Given i1, j1, i2, and j2, compute the number of elements of (M) smaller than M[i1, j1] and larger than M[i2, j2].
  // For example, given the following matrix:
  // [
  //  [1, 3, 7, 10, 15, 20],
  //  [2, 6, 9, 14, 22, 25],
  //  [3, 8, 10, 15, 25, 30],
  //  [10, 11, 12, 23, 30, 35],
  //  [20, 25, 30, 35, 40, 45]
  // ]
  // And i1 = 1, j1 = 1, i2 = 3, j2 = 3, return 15 as there are 15 numbers in the matrix smaller than 6 or greater than 23.

  const list = [
    [1, 3, 7, 10, 15, 20],
    [2, 6, 9, 14, 22, 25],
    [3, 8, 10, 15, 25, 30],
    [10, 11, 12, 23, 30, 35],
    [20, 25, 30, 35, 40, 45],
  ];

  let num1 = 6;
  let num2 = 23;
  let amount = 0;

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length; j++) {
      let current = list[i][j];
      if (current < num1 || current > num2) {
        amount++;
        console.log(amount + '-' + current);
      }
    }
  }
}
// problem806();

function problem805() {
  // Spreadsheets often use this alphabetical encoding for its columns: "A", "B", "C", ..., "AA", "AB", ..., "ZZ", "AAA", "AAB", ....
  // Given a column number, return its alphabetical column id. For example, given 1, return "A". Given 27, return "AA".
  const num = 27;
  let alph = 'abcdefghijklmnopqrstuvwxyz'.split('');
  if (num > 26) {
    let selector = Math.floor(num / 26);
    selector = alph[selector - 1];
  } else {
    console.log(alph[num - 1]);
  }
}
problem805();

function problem() {}
problem();
