function loadHome() {
    const contentDiv = document.querySelector("#content");

    const heading = document.createElement("h1");
    const description = document.createElement("p");
    const image = document.createElement("img");

    heading.classList.add("heading");
    description.classList.add("description");
    image.classList.add("home-image");

    heading.textContent = "The Willow Fork";
    description.textContent = "Nestled in the heart of the city, The Willow Fork blends rustic charm with bold flavors. From hand-tossed sourdough pizzas to locally sourced seasonal dishes, every plate is crafted with warmth and intention.";
    image.src = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    image.alt = "Rustic restaurant interior with wooden tables and warm lighting.";

    contentDiv.appendChild(heading);
    contentDiv.appendChild(description);
    contentDiv.appendChild(image);
}

export { loadHome };