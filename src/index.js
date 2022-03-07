import './style.css';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = '<div>Hello TEAM</div>';
  
    return element;
  }
  
  document.body.appendChild(component());