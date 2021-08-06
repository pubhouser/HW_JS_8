let title = document.createElement('title');
title.innerHTML = 'JS document';

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');

document.head.insertBefore(title, document.head.firstElementChild);
document.head.insertBefore(metaUtf8, document.head.firstElementChild);

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose your option';
document.body.appendChild(h1);

h1.style.textAlign = 'center';
h1.style.fontSize = '40px';
h1.style.marginBottom = '-10px';

let p1 = document.createElement('p');
p1.innerHTML = 'But I must eplain to you how all this mistaken idea of denouncing';
document.body.appendChild(p1);

p1.style.cssText = 'text-align: center; color: #9fa3a7; margin: 20px 0 35px 0; line-height: 30px;';

let ul1 = document.createElement('ul');
ul1.classList.add('list');
document.body.appendChild(ul1);

let li1 = document.createElement('li');
ul1.appendChild(li1);

let span1 = document.createElement('span');
span1.classList.add('span1');
span1.innerHTML = 'studio';
li1.appendChild(span1);

let h2 = document.createElement('h2');
h2.innerHTML = 'Initially designed to';
li1.appendChild(h2);

let p2 = p1.cloneNode(true);
li1.appendChild(p2);

let button = document.createElement('button');
button.innerHTML = 'Start here';
li1.appendChild(button);

let li2 = li1.cloneNode(true);
ul1.appendChild(li2);

let span2 = document.querySelector('.span1');
span2.innerHTML = 'freelancer';

let style = document.createElement('style');

style.innerHTML = `
@import url(https://fonts.googleapis.com/css2?family=Arvo:wght@400&display=swap);

body {
    font-family: 'Arvo', serif; 
}

.list {
    display: flex;
    list-style: none;
    text-align: center;
    justify-content: center;
    width: 63%;
    padding-inline-start: 0;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #ccc;
    border-radius: 5px;  
}

.list li:nth-child(1) {
    border-right: 1px solid #ccc;
}

.list li h2 {
    font-size: 38px;
}

.list li {
    padding: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-betwwen;
    align-items: center;
}

.list li:hover {
    background-color: #8f75be;
}

.list li:hover > span {
    color: #ffc80a;
}

.list li:hover > h2,
.list li:hover > p,
.list li:hover > button {
    color: #fff !important;
}

.list li span {
    font-size: 12px;
    text-transform: uppercase;
    color: #9fa3a7;
    letter-spacing: 4px;
}

.list button {
    background-color: transparent;
    border: 3px solid #ffc80a;
    font-size: 12px;
    text-transform: uppercase;
    color: #000;
    font-weight: bold;
    padding: 18px 30px;
    border-radius: 30px;
    letter-spacing: 2px;
    cursor: pointer;
    width: 165px;
}`;

document.head.appendChild(style);

