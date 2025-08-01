const main = document.getElementById("main");

const cartsContainer = document.getElementById("cartsContainer");


fetch("https://dummyjson.com/carts?limit=50")
    .then(res => res.json())
    .then((cartsObject) => {
    const {carts} = cartsObject;
    for (const cart of carts) {
        const cartContainer = document.createElement("div");
        cartContainer.className = "cartContainer";
        const productsContainer = document.createElement("div");
        for (const product of cart.products) {
            const title = document.createElement("h2");
            title.innerText = product.title;
            const id = document.createElement("p");
            id.innerText = `Product id - ${product.id}`;
            const img = document.createElement("img");
            img.src = product.thumbnail;
            const quantity = document.createElement("p");
            quantity.innerText = `Product quantity - ${product.quantity}`;
            const price = document.createElement("p");
            price.innerText = `Product price - ${product.price}`;
            const totalPrice = document.createElement("p");
            totalPrice.innerText = `Total product price - ${product.total}`;
            const totalDiscount = document.createElement("p");
            totalDiscount.innerText = `Discount $ - ${product.discountedTotal}`;
            const discountPercentage = document.createElement("p");
            discountPercentage.innerText = `Discount % - ${product.discountPercentage}`;
            productsContainer.append(title, id, img, quantity, price, totalPrice, totalDiscount, discountPercentage);
        }
        const totalProducts = document.createElement("p");
        totalProducts.innerText = `Total products count -  ${cart.totalProducts}`;
        const totalQuantity = document.createElement("p");
        totalQuantity.innerText = `Total products quantity - ${cart.totalQuantity}`;
        const discountedTotal = document.createElement("p");
        discountedTotal.innerText = `Total discount $ - ${cart.discountedTotal}`;
        const totalPrice = document.createElement("p");
        totalPrice.innerText = `Total price - ${cart.total}`;
        const userId = document.createElement("p");
        userId.innerText = `Ordered by user - ${cart.userId}`;
        cartContainer.append(productsContainer, totalProducts, totalQuantity, discountedTotal, totalPrice, userId);
        cartsContainer.appendChild(cartContainer)
    }
});

main.appendChild(cartsContainer);

// // Could be GET or POST/PUT/PATCH/DELETE
// fetch('https://dummyjson.com/carts?limit=50')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);});
//
// /* { status: 'ok', method: 'GET' } */