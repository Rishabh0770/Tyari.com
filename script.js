// Scroll Bar Progress
window.onscroll = function () {
  myFunction();
  scrollAppear();
};

function myFunction() {
  const bar = document.getElementById("myBar");
  if (!bar) return;

  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  bar.style.width = scrolled + "%";
}

// Scroll-based animation trigger
function scrollAppear() {
  const introText = document.querySelector(".side-text");
  const sideImage = document.querySelector(".sideImage");

  const screenPosition = window.innerHeight / 1.2;

  if (introText && introText.getBoundingClientRect().top < screenPosition) {
    introText.classList.add("side-text-appear");
  }

  if (sideImage && sideImage.getBoundingClientRect().top < screenPosition) {
    sideImage.classList.add("sideImage-appear");
  }
}

// Mobile nav toggle
let tabToggle = 2;
function switchTAB() {
  const list = document.getElementById("list-switch");
  const search = document.getElementById("search-switch");

  if (!list || !search) return;

  if (tabToggle % 2 === 0) {
    list.style.display = "grid";
    list.style.height = "50vh";
    list.style.marginLeft = "5%";
    search.style.display = "block";
    search.style.marginLeft = "5%";
  } else {
    list.style.display = "none";
    search.style.display = "none";
  }
  tabToggle++;
}

// Login/Register form toggle
const x = document.getElementById("login");
const y = document.getElementById("register");
const z = document.getElementById("btn");
const a = document.getElementById("log");
const b = document.getElementById("reg");
const w = document.getElementById("other");

function register() {
  if (!x || !y || !z || !a || !b || !w) return;
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
  w.style.visibility = "hidden";
  b.style.color = "#fff";
  a.style.color = "#000";
}

function login() {
  if (!x || !y || !z || !a || !b || !w) return;
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
  w.style.visibility = "visible";
  a.style.color = "#fff";
  b.style.color = "#000";
}

// Checkbox submit enable
function goFurther() {
  const checkbox = document.getElementById("chkAgree");
  const btn = document.getElementById("btnSubmit");

  if (!checkbox || !btn) return;

  btn.style.background = checkbox.checked
    ? "linear-gradient(to right, #8ab92d, #8ab92d)"
    : "lightgray";
}

// Google redirect
function google() {
  window.location.assign(
    "https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue&csig=AF-SEnbZHbi77CbAiuHE%3A1585466693&flowName=GlifWebSignIn&flowEntry=AddSession",
    "_blank"
  );
}

// QUIZ page toggle logic
function quizt(frame) {
  for (let i = 1; i <= 11; i++) {
    const f = document.getElementById("f" + i);
    if (f) f.style.display = "none";
  }

  const active = document.getElementById("f" + frame);
  if (active) {
    active.style.display = "block";
  } else {
    alert("error");
  }
}

function startquiz() {
  const title = document.getElementById("title");
  const panel = document.getElementById("panel");

  if (title) title.style.display = "none";
  if (panel) panel.style.display = "inline-flex";

  quizt(1); // Optional: Default to HOME
}
function toggleQuizMenu() {
  const leftPanel = document.getElementById("left");
  if (leftPanel) {
    leftPanel.classList.toggle("show");
  }
}


// Search panel display
function searchdisplay() {
  const panel = document.getElementById("searchpanel");
  if (panel) panel.style.display = "block";
}

// Display sections (images & buttons)
function display(n) {
  for (let i = 1; i <= 4; i++) {
    const img = document.getElementById("img" + i);
    const btn = document.getElementById("s" + i);

    if (img) img.style.display = "none";
    if (btn) {
      btn.style.background = "#8ab92d";
      btn.style.color = "#FFF";
    }
  }

  const activeImg = document.getElementById("img" + n);
  const activeBtn = document.getElementById("s" + n);

  if (activeImg) activeImg.style.display = "block";
  if (activeBtn) {
    activeBtn.style.background = "#E5E8EF";
    activeBtn.style.color = "#8ab92d";
  }
}

// Side Menu (Hamburger)
function sideMenu(side) {
  const menu = document.getElementById("side-menu");
  if (!menu) return;

  if (side === 0) {
    menu.style.transform = "translateX(0vh)";
    menu.style.position = "fixed";
  } else {
    menu.style.transform = "translateX(-100%)";
  }
}

// Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("switch-tab");
  const navMenu = document.getElementById("list-switch");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // Search bar toggle
  const searchBtn = document.getElementById("search-btn");
  const searchBox = document.getElementById("search-box");

  if (searchBtn && searchBox) {
    searchBtn.addEventListener("click", () => {
      searchBox.classList.toggle("show");
    });
  }
});
