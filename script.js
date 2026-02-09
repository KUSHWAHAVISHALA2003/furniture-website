
let cart = [];

// Login Function
function login(){

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "admin" && pass === "1234"){
        alert("Login Successful");
        window.location.href = "index.html";
    }
    else{
        alert("Invalid Login");
    }
}


// Add To Cart
function addToCart(product, price){

    cart.push({product,price});
    document.getElementById("cartCount").innerText = cart.length;
    alert(product + " Added To Cart");
}


// Show Cart
function showCart(){

    let total = 0;
    let message = "Cart Items:\n";

    cart.forEach(item=>{
        message += item.product + " - ₹" + item.price + "\n";
        total += item.price;
    });

    message += "\nTotal = ₹" + total;
    alert(message);
}


// Filter Products
function filterProducts(category){

    let products = document.querySelectorAll(".product");

    products.forEach(product=>{

        if(category==="all" || product.dataset.category===category){
            product.style.display="block";
        }
        else{
            product.style.display="none";
        }

    });
}


// Payment
function paymentSuccess(){
    alert("Payment Successful 🎉");
    cart = [];
}
