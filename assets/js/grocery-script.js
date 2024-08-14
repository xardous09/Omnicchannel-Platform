'use strict';



/**
 * add event on element
 */

<<<<<<< HEAD
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
=======
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
<<<<<<< HEAD
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
=======
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
<<<<<<< HEAD
const toggleNavbar = function() {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
=======
const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
=======
const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
}

addEventOnElem(navTogglers, "click", toggleNavbar);

<<<<<<< HEAD
<<<<<<< HEAD
const closeNavbar = function() {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
=======
const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
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
=======
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
const headerActive = function () {
  if (window.scrollY > 150) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
<<<<<<< HEAD
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
=======
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
}

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

<<<<<<< HEAD
<<<<<<< HEAD
const headerSticky = function() {
    if (lastScrolledPos >= window.scrollY) {
        header.classList.remove("header-hide");
    } else {
        header.classList.add("header-hide");
    }

    lastScrolledPos = window.scrollY;
=======
=======
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
const headerSticky = function () {
  if (lastScrolledPos >= window.scrollY) {
    header.classList.remove("header-hide");
  } else {
    header.classList.add("header-hide");
  }

  lastScrolledPos = window.scrollY;
<<<<<<< HEAD
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
=======
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
}

addEventOnElem(window, "scroll", headerSticky);



/**
 * scroll reveal effect
 */

const sections = document.querySelectorAll("[data-section]");

<<<<<<< HEAD
<<<<<<< HEAD
const scrollReveal = function() {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
            sections[i].classList.add("active");
        }
    }
=======
=======
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
<<<<<<< HEAD
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
=======
>>>>>>> 6977c416c89718376764ad0a239c53d202812e3d
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);