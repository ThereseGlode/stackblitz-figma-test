// Hent elementene
const burgerIcon = document.getElementById('burger-icon');
const headerNav = document.getElementById('headerNav');

// Legg til en event listener for å vise/skjule menyen
burgerIcon.addEventListener('click', () => {
  // Legger til eller fjerner 'show' klassen på navigasjonen
  headerNav.classList.toggle('show');
});
