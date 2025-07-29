function positionElement(viewportPercent, elId = '') {
  const el = document.querySelector(elId);
  const viewportHeight = window.innerHeight;
  const elHeight = el.offsetHeight;
  // Convert input percentage to decimal
  const percentDecimal = viewportPercent / 100;
  // Calculate offset
  const offsetTop = (viewportHeight * percentDecimal) + (elHeight / 2);
  el.style.top = `${offsetTop}px`;
}
// Example usage: position the element at 15% of viewport height + half its own height
window.addEventListener('load', () => positionElement(10, '#img1'));
window.addEventListener('resize', () => positionElement(10, '#img1'));
window.addEventListener('load', () => positionElement(40, '#img2'));
window.addEventListener('resize', () => positionElement(40, '#img2'));