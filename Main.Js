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
// Example usage: position the element at 15% of viewport height + half its own height
apply(20, '#img1',1);
apply(75, '#img2',1);
apply(50, '#a1',2);
apply(50, '#icon_cell',2);