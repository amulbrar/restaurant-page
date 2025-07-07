function loadMenu() {
    const contentDiv = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "Menu";

    const menuDiv = document.createElement("div");
    const menuItems = [
        { name: "Margherita Pizza", desc: "Classic pizza with fresh mozzarella, basil, and tomato sauce." },
        { name: "Pepperoni Pizza", desc: "Spicy pepperoni layered on melty mozzarella and crisp crust." },
        { name: "BBQ Chicken Pizza", desc: "Grilled chicken with BBQ sauce, onions, and cheddar." },
        { name: "Veggie Pizza", desc: "Loaded with bell peppers, olives, onions, and mushrooms." },
        { name: "Hawaiian Pizza", desc: "Sweet pineapple and savory ham on a golden crust." },
        { name: "Pasta Primavera", desc: "Seasonal vegetables tossed with penne in a light cream sauce." },
        { name: "Lasagna", desc: "Layers of pasta, cheese, meat, and rich tomato sauce." },
        { name: "Caesar Salad", desc: "Crisp romaine, parmesan, and house-made Caesar dressing." },
        { name: "Garlic Bread", desc: "Toasted baguette slices smothered in garlic butter." },
        { name: "Tiramisu", desc: "Espresso-soaked ladyfingers layered with mascarpone cream." }
    ];

    menuItems.forEach(({ name, desc }) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("menu-item");

        const itemName = document.createElement("h3");
        itemName.textContent = name;

        const itemDescription = document.createElement("p");
        itemDescription.textContent = desc;

        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemDescription);
        menuDiv.appendChild(itemDiv);
    });

    contentDiv.appendChild(menuDiv);
}

export { loadMenu }; 