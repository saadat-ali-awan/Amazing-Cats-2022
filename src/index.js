import './style.css';
import { customBinRequestDataURL } from './modules/strings.js';
import getItemsList from './modules/get_items_list.js';

let catList = [
  {
    id: '1',
    name: 'Tofu',
    image: 'https://images.freeimages.com/images/large-previews/8aa/kitten-1405674.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices.',
    skils: ['Skill 1', 'Skill 2'],
    role: 'Fighter',
  },
  {
    id: '2',
    name: 'Josh',
    image: 'https://images.freeimages.com/images/large-previews/064/cat-1537181.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices.',
    skils: ['Skill 1', 'Skill 2'],
    role: 'Fighter',
  },
  {
    id: '3',
    name: 'Wilde',
    image: 'https://images.freeimages.com/images/large-previews/db5/cat-1407260.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices.',
    skils: ['Skill 1', 'Skill 2'],
    role: 'Fighter',
  },
  {
    id: '4',
    name: 'Mr Watchful',
    image: 'https://images.freeimages.com/images/large-previews/5af/cat-1377061.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices.',
    skils: ['Skill 1', 'Skill 2'],
    role: 'Fighter',
  },
  {
    id: '5',
    name: 'Tic Tac',
    image: 'https://images.freeimages.com/images/large-previews/81a/angry-kitten-1382470.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices.',
    skils: ['Skill 1', 'Skill 2'],
    role: 'Fighter',
  },
  {
    id: '6',
    name: 'Ying-Yang',
    image: 'https://images.freeimages.com/images/large-previews/a92/kitten-1555712.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices.',
    skils: ['Skill 1', 'Skill 2'],
    role: 'Fighter',
  },
];

catList.forEach((element) => {
  document.querySelector('main').innerHTML += `
  <div id="${element.id}">
    <img src="${element.image}" class='cat-image'>
    <h3>${element.name}</h3>
    <p class='description'>${element.description}</p>
    <ul>${element.skils.map((skill) => `<li>${skill}</li>`).join('')}</ul>
    <p class='cat-role'>${element.role}</p>  
    <div class='btns'><button>Like</button><button>Comment</button></div>  
  </div>`;
});

// getItemsList(customBinRequestDataURL).then((list) => {
//   catList = list;

//   catList.forEach((element) => {
//     document.querySelector('main').innerHTML += `
//     <div id="${element.id}">
//       <img src="${element.image}" class='cat-image'>
//       <h3>${element.name}</h3>
//       <p class='description'>${element.description}</p>
//       <ul>${element.skils.map((skill) => `<li>${skill}</li>`).join('')}</ul>
//       <p class='cat-role'>${element.role}</p>  
//       <div class='btns'><button>Like</button><button>Comment</button></div>  
//     </div>`;
//   });
// });