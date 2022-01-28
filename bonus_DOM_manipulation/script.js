// https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/dom-manipulation-and-events

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

function alertFunction() {
    alert('This is a test of the alert system');
}

const myBtn = document.querySelector('#btn');
myBtn.onclick = () => alert('I use an on_event property in the JS file');

const myBtn2 = document.querySelector('#btn2');
myBtn2.addEventListener('click', () => {
    alert('How you doin? I have an eventlistener');
});

const myBtn3 = document.querySelector('#btn3');
myBtn3.addEventListener('click', alertFunction);

const myBtn4 = document.querySelector('#btn4');
myBtn4.addEventListener('click', function(e) {
    e.target.classList.toggle('active');
});

// Attaching listeners to groups of nodes
const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        alert(btn.id);
    });
});
