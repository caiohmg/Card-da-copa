let figure = true;
function changeCard(event) {
  const card = event.currentTarget;
  card.style.backgroundImage = figure;
  const backgroundImage = figure
    ? "url(./assets/figure.svg)"
    : "url(./assets/figure-green.svg)";
  figure = !figure;
  card.style.backgroundImage = backgroundImage;
}
