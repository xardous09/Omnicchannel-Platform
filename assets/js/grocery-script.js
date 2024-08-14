'use strict';



/**
 * add event on element
 */

<<<<<<< HEAD
const addEventOnElem = function(elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
=======
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
}



/**
 * navbar toggle
 */

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

<<<<<<< HEAD
const toggleNavbar = function() {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
=======
const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
}

addEventOnElem(navTogglers, "click", toggleNavbar);

<<<<<<< HEAD
const closeNavbar = function() {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
=======
const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header sticky & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

<<<<<<< HEAD
const headerActive = function() {
    if (window.scrollY > 150) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
=======
const headerActive = function () {
  if (window.scrollY > 150) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
}

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

<<<<<<< HEAD
const headerSticky = function() {
    if (lastScrolledPos >= window.scrollY) {
        header.classList.remove("header-hide");
    } else {
        header.classList.add("header-hide");
    }

    lastScrolledPos = window.scrollY;
=======
const headerSticky = function () {
  if (lastScrolledPos >= window.scrollY) {
    header.classList.remove("header-hide");
  } else {
    header.classList.add("header-hide");
  }

  lastScrolledPos = window.scrollY;
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
}

addEventOnElem(window, "scroll", headerSticky);



/**
 * scroll reveal effect
 */

const sections = document.querySelectorAll("[data-section]");

<<<<<<< HEAD
const scrollReveal = function() {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
            sections[i].classList.add("active");
        }
    }
=======
const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);