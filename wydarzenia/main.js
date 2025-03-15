// Funkcja, która sprawdza szerokość ekranu i dodaje/usuwa klasę
function checkWindowSize() {
  const element = document.querySelector(".div4v2"); // Zmienna dla elementu, do którego chcesz dodać klasę
  const hidden = document.querySelector(".hidden");
  // Sprawdzenie szerokości okna
  if (window.innerWidth <= 1150) {
    // Dodaj klasę, jeśli szerokość okna jest mniejsza lub równa 1250px
    element.classList.add("showMoreFrame");
    hidden.style.display = "flex";
  } else {
    // Usuń klasę, jeśli szerokość okna jest większa niż 1250px
    element.classList.remove("showMoreFrame");
    hidden.style.display = "none";
  }
}

// Nasłuchiwanie na zmianę rozmiaru okna
window.addEventListener("resize", checkWindowSize);

// Wywołanie funkcji przy ładowaniu strony, aby sprawdzić początkowy rozmiar
checkWindowSize();
