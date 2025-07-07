import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

const contentDiv = document.querySelector("#content");

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const contactBtn = document.querySelector(".contact-btn");

homeBtn.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    loadHome();
})

menuBtn.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    loadMenu();
})

contactBtn.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    loadContact();
});

loadHome();