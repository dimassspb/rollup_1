import '../index.css';
import image from '../assets/image.png'

console.log('Hello World!');
const h1HTML = document.createElement('h1')
h1HTML.textContent = 'I love JavaScript'
document.body.prepend(h1HTML)
const imageHTML = document.createElement('img');
imageHTML.className = 'js-image';
imageHTML.src = image

document.body.append(imageHTML);