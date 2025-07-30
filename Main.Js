function positionElementTop(viewportPercent, elId = '') {
  const el = document.querySelector(elId);
  const viewportHeight = window.innerHeight;
  const elHeight = el.offsetHeight;
  // Convert input percentage to decimal
  const percentDecimal = viewportPercent / 100;
  // Calculate offset
  const offsetTop = (viewportHeight * percentDecimal) - (elHeight / 2);
  el.style.top = `${offsetTop}px`;
  
}
function positionElementLeft(viewportPercent, elId = '') {
  const el = document.querySelector(elId);
  const viewportWidth = window.innerWidth;
  const elWidth = el.offsetWidth;
  // Convert input percentage to decimal
  const percentDecimal = viewportPercent / 100;
  // Calculate offset
  const offsetLeft = (viewportWidth * percentDecimal) - (elWidth / 2);
  el.style.left = `${offsetLeft}px`;
  
}
function apply(viewportPercent, elId = '',nr){
    if (nr === 1) {
        window.addEventListener('load', () => positionElementTop(viewportPercent, elId));
        window.addEventListener('resize', () => positionElementTop(viewportPercent, elId));
    } else if (nr === 2) {
        window.addEventListener('load', () => positionElementLeft(viewportPercent, elId));
        window.addEventListener('resize', () => positionElementLeft(viewportPercent, elId));
    }
    
}
function ds(size, elId) {
    window.addEventListener('load', () => dinamicsize(size, elId));
    window.addEventListener('resize', () => dinamicsize(size, elId));
}
function dinamicsize(size, elid) {
  const el = document.querySelector(elid+ ' img');
  const s = (window.innerHeight/ window.innerWidth)**(1/2);
  console.log('s:', s); // This prints the scale factor to the console
  const end=(size/100)*window.innerWidth*s
  el.style.width = end+ 'px';
  console.log('el.style.width:', el.style.width); // This prints the width to the console
  el.style.height = 'auto';
}
// Example usage: position the element at 15% of viewport height + half its own height


ds(25,'#img1');
ds(18,'#img2');
ds(5,'#a1');
ds(25,'#icon_cell');
ds(50,'#vieri'); 

////////////////////////////////////////////////////////////

apply(20, '#img1',1);
apply(75, '#img2',1);
apply(50, '#a1',2);
apply(50, '#icon_cell',2);
apply(50, '#vieri',1);
apply(15, '#vieri',2);