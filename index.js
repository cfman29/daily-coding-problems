// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

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
