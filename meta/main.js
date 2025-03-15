const hamburger = document.querySelector(".hamburger");
const midNav = document.querySelector(".midNav");
const navBar = document.querySelector(".navBar");
const rightNav = document.querySelector(".rightNav");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
  rightNav.classList.toggle("active");
  midNav.classList.toggle("active");
});

//wyświetlanie menu nawigacji rozwijanego
function transformToHamburger() {
  var slidingMenu = document.getElementById("myLinks");
  var icon = document.querySelector(".icon");

  if (slidingMenu.style.display === "block") {
    slidingMenu.style.display = "none";
    icon.style.backgroundImage = "url('../meta/icons/hamburger.svg')";
  } else {
    slidingMenu.style.display = "block";
    icon.style.backgroundImage = "url('../meta/icons/close.svg')";
  }
}

//zmiana wielkosci paska nawigacji
window.addEventListener("scroll", function () {
  const navBar = document.querySelector(".navBar");
  const topnav = document.querySelector(".topnav");

  if (window.scrollY > 100) {
    navBar.classList.add("scrolled");
    document.querySelector(".topnav img").style.width = "60px";
    document.querySelector(".topnav a.icon").style.top = "7px";
  } else {
    navBar.classList.remove("scrolled");
    document.querySelector(".topnav img").style.width = "100px";
    document.querySelector(".topnav a.icon").style.top = "25px";
  }
});

//zmiana strony jezyka na Angielski/wyswietlenie alertu a braku tlumaczenia
document
  .querySelector(".topnav span img:nth-child(1)")
  .addEventListener("click", function () {
    englishLanguage();
  });
//zmiana strony jezyka na Polski/wyswietlenie alertu a braku tlumaczenia
document
  .querySelector(".topnav span img:nth-child(2)")
  .addEventListener("click", function () {
    polishLanguage();
  });
//zmiana strony jezyka na Turecki/wyswietlenie alertu a braku tlumaczenia
document
  .querySelector(".topnav span img:nth-child(3)")
  .addEventListener("click", function () {
    turkishLanguage();
  });
//zmiana strony jezyka na Rumunski/wyswietlenie alertu a braku tlumaczenia
document
  .querySelector(".topnav span img:nth-child(4)")
  .addEventListener("click", function () {
    romanianLanguage();
  });
//zmiana strony jezyka na Belgijski/wyswietlenie alertu a braku tlumaczenia
document
  .querySelector(".topnav span img:nth-child(5)")
  .addEventListener("click", function () {
    belgiumLanguage();
  });

var alert = document.querySelector(".alert");
//tłumaczenie na wybrany język lub alert o braku dostępnego języka
function englishLanguage() {
  showAlert(
    "<img src='meta/icons/close.svg' alt='close'><br>Sorry, english language will be added in the future. "
  );
}
function polishLanguage() {}
function turkishLanguage() {
  showAlert(
    "<img src='meta/icons/close.svg' alt='close'><br>Sorry, turkish language will be added in the future."
  );
}
function romanianLanguage() {
  showAlert(
    "<img src='meta/icons/close.svg' alt='close'><br>Sorry, rRomanian language will be added in the future."
  );
}
function belgiumLanguage() {
  showAlert(
    "<img src='meta/icons/close.svg' alt='close'><br>Sorry, belgian language will be added in the future."
  );
}

//wyświetlanie alertu o podanym tekscie i ukrywanie go
function showAlert(text) {
  alert.innerHTML = text;

  alert.style.display = "block";
  document.querySelector(".overlay").style.display = "block";
}

document.querySelector(".alert").addEventListener("click", function () {
  alert.style.display = "none";
  document.querySelector(".overlay").style.display = "none";
});
