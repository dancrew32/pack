import './style.css';
import testImage from './test.png';

document.title = 'App';
const root = document.createElement('div');
document.body.appendChild(root);
const img = new Image();
img.src = testImage;
root.appendChild(img);
