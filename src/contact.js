function loadContact() {
    const contentDiv = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";

    const phone = document.createElement("p");
    phone.textContent = "Phone: (555) 867-5309";

    const email = document.createElement("p");
    email.textContent = "Email: hello@thewillowfork.com";

    const address = document.createElement("p");
    address.innerHTML = "Address:<br>123 Willow Street<br>Springfield, IL 62704";

    const hours = document.createElement("p");
    hours.innerHTML = "Opening Hours:<br>Monday–Saturday: 11am–10pm<br>Sunday: Closed";

    contentDiv.appendChild(heading);
    contentDiv.appendChild(phone);
    contentDiv.appendChild(email);
    contentDiv.appendChild(address);
    contentDiv.appendChild(hours);
}

export { loadContact };