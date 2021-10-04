axios.get("https://291c88c5-44f1-4e5d-a470-e9e7b87b9358.mock.pstmn.io/products")
  .then(function (result) {
    let products = result.data.products;
	console.log(products);
    let productsHTML = "";
    for (let i = 0; i < products.length; i++) {
      productsHTML +=
        '<div class="product-card">' +
        "<div>" +
        '<img class="product-img" src="' +
        products[i].imageUrl +
        '" />' +
        "</div>" +
        '<div class="product-contents">' +
        '<span class="product-name">' +
        products[i].name +
        "</span>" +
        '<span class="product-price">' +
        products[i].price +
        "</span>" +
        '<div class="product-seller">' +
        '<img class = "product-avatar" src="images/icons/avatar.png"/>' +
        "<span>그랩</span>" +
        "</div>" +
        "</div>" +
        "</div>";
    }
document.querySelector("#product-list").innerHTML = productsHTML;

  });

