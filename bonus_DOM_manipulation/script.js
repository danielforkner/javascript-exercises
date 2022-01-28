const container = document.querySelector('#container');

const redTxt = document.createElement('p');
redTxt.classList.add('red');
redTxt.style.color = 'red';
redTxt.textContent = 'Hey I\'m red';

const blueH3 = document.createElement('h3');
blueH3.style.color = 'blue';
blueH3.textContent = 'I\'m a blue h3!';

const newDiv = document.createElement('div');
newDiv.classList.add('container');
newDiv.style.cssText = 'background-color: pink; border: 5px solid black;';

const divTitle = document.createElement('h1');
divTitle.textContent = "I'm in a div";

const divText = document.createElement('p');
divText.textcontent = "ME TOO!";

container.appendChild(redTxt);
container.appendChild(blueH3);
container.appendChild(newDiv);

newDiv.appendChild(divTitle);
newDiv.appendChild(divText);
