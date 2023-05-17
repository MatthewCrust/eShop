function openForm() {
  document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// Define an array to store the items in the cart
var cartItems = [];

// Get references to the DOM elements we need to manipulate
var cartItemsList = document.getElementById("cart-items");
var cartTotal = document.getElementById("cart-total");

// Function to add an item to the cart
function addToCart(btn) {
  // Get the product name and price for the item that was clicked
  var productName = btn.parentNode.querySelector(".product-name");
  var productPrice = btn.parentNode.querySelector(".product-price");

  // Check if the item is already in the cart
  var itemIndex = cartItems.findIndex(function(item) {
    return item.name === productName.textContent;
  });

  // If the item is in the cart, increase its quantity, otherwise add it to the cart
  if (itemIndex !== -1) {
    cartItems[itemIndex].quantity += 1;
  } else {
    var item = {
      name: productName.textContent,
      price: parseFloat(productPrice.textContent.substring(0, productPrice.textContent.length - 2)),
      quantity: 1
    };
    cartItems.push(item);
  }

  // Update the cart display
  updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
  // Clear the cart display
  cartItemsList.innerHTML = "";

  // Iterate over the items in the cart and display them
  var total = 0;
  cartItems.forEach(function(item) {
    var li = document.createElement("li");
    li.textContent = item.quantity + "x " +  item.name + " - " + (item.price * item.quantity).toFixed(2) + " Kč";
    cartItemsList.appendChild(li);
    total += item.price * item.quantity;
  });

  // Update the total display
  cartTotal.textContent = total.toFixed(2) + " Kč";
}

function clearCart(){
    cartItems=[];
    updateCartDisplay();
}

function filter(){

  const produktyList = Array.from(document.getElementsByClassName(':not(.chipsy)'));

  for (let i = 0; i < produktyList.length; i++) {
    produktyList[i].style.display= "none";
  }
}