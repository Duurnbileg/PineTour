const product = {
    name: "iPhone 14 Pro Max",
    price: 1200000,
    colors: ["Silver", "Space Black", "Gold", "Deep Purple"],
    isAvailable: true,
    description:
        "The iPhone 14 Pro Max is the latest flagship smartphone from Apple, featuring a stunning design, powerful performance,and advanced camera capabilities.",
    manufacturer: {
        name: "Apple Inc.",
        country: "United States",
        founded: 1976,
    },
};

const data = [
    {
        name: "iPhone 14 Pro Max",
        price: 1200000,
        colors: ["Silver", "Space Black", "Gold", "Deep Purple"],
        isAvailable: true,
        description:
            "The iPhone 14 Pro Max is the latest flagship smartphone from Apple, featuring a stunning design, powerful performance,and advanced camera capabilities.",
        manufacturer: {
            name: "Apple Inc.",
            country: "United States",
            founded: 1976,
        },
    },
    {
        name: "Samsung Galaxy S23 Ultra",
        price: 1100000,
        colors: [
            "Phantom Black",
            "Phantom Silver",
            "Phantom Green",
            "Phantom Pink",
        ],
        isAvailable: true,
        description:
            "The Samsung Galaxy S23 Ultra is a high-end Android smartphone that offers a large display, powerful performance, and animpressive camera system.",
        manufacturer: {
            name: "Samsung Electronics",
            country: "South Korea",
            founded: 1969,
        },
    },
    {
        name: "Google Pixel 7 Pro",
        price: 900000,
        colors: ["Obsidian", "Snow", "Lemongrass"],
        isAvailable: true,
        description:
            "The Google Pixel 7 Pro is a premium Android smartphone known for its excellent camera performance, clean softwareexperience, and regular updates.",
        manufacturer: {
            name: "Google LLC",
            country: "United States",
            founded: 1998,
        },
    },
    {
        name: "Google Pixel 7 Pro",
        price: 900000,
        colors: ["Obsidian", "Snow", "Lemongrass"],
        isAvailable: true,
        description:
            "The Google Pixel 7 Pro is a premium Android smartphone known for its excellent camera performance, clean softwareexperience, and regular updates.",
        manufacturer: {
            name: "Google LLC",
            country: "United States",
            founded: 1998,
        },
    },
    {
        name: "Google Pixel 7 Pro",
        price: 900000,
        colors: ["Obsidian", "Snow", "Lemongrass"],
        isAvailable: true,
        description:
            "The Google Pixel 7 Pro is a premium Android smartphone known for its excellent camera performance, clean softwareexperience, and regular updates.",
        manufacturer: {
            name: "Google LLC",
            country: "United States",
            founded: 1998,
        },
    },
    {
        name: "Google Pixel 7 Pro",
        price: 900000,
        colors: ["Obsidian", "Snow", "Lemongrass"],
        isAvailable: true,
        description:
            "The Google Pixel 7 Pro is a premium Android smartphone known for its excellent camera performance, clean softwareexperience, and regular updates.",
        manufacturer: {
            name: "Google LLC",
            country: "United States",
            founded: 1998,
        },
    },
];

const createProductCard = (product) => {
    const card = document.createElement("div");
    card.className = "bg-white shadow-md rounded-lg p-4 mb-4";

    const name = document.createElement("h2");
    name.className = "text-xl font-bold mb-2";
    name.textContent = product.name;
    card.appendChild(name);

    const price = document.createElement("p");
    price.className = "text-gray-700 mb-2";
    price.textContent = `Price: ${product.price} MNT`;
    card.appendChild(price);

    const colors = document.createElement("p");
    colors.className = "text-gray-700 mb-2";
    colors.textContent = `Available Colors: ${product.colors.join(", ")}`;
    card.appendChild(colors);

    const availability = document.createElement("p");
    availability.className = "text-gray-700 mb-2";
    availability.textContent = `Availability: ${product.isAvailable ? "In Stock" : "Out of Stock"
        }`;
    card.appendChild(availability);

    const description = document.createElement("p");
    description.className = "text-gray-700 mb-2";
    description.textContent = product.description;
    card.appendChild(description);

    const manufacturer = document.createElement("p");
    manufacturer.className = "text-gray-700 mb-2";
    manufacturer.textContent = `Manufacturer: ${product.manufacturer.name} (${product.manufacturer.country})`;
    card.appendChild(manufacturer);

    return card;
};

const createProd = (product) => {
    return `
<div class="bg-white shadow-md rounded-lg p-4 mb-4">
    <h2 class="text-xl font-bold mb-2">${product.name}</h2>
    <p class="text-gray-700 mb-2">Price: ${product.price} MNT</p>
    <p class="text-gray-700 mb-2">Available Colors: ${product.colors.join(", ")}</p>
    <p class="text-gray-700 mb-2">Availability: ${product.isAvailable ? "In Stock" : "Out of Stock"
        }</p>
    <p class="text-gray-700 mb-2">${product.description}</p>
    <p class="text-gray-700 mb-2">Manufacturer: ${product.manufacturer.name} (${product.manufacturer.country})</p>
</div>
`;
};

const productContainer = document.getElementById("container");

const productList = data.map((product) => createProd(product)).join("");

productContainer.innerHTML = productList;