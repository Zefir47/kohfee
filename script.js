// Проста демонстраційна логіка для макета (без бекенду)
let cartCount = 2;

function updateCartCount() {
  const el = document.getElementById("cart-count");
  if (el) el.textContent = cartCount;
}

function addToCart(name) {
  cartCount += 1;
  updateCartCount();
  alert("Додано в кошик: " + name);
}

document.addEventListener("DOMContentLoaded", updateCartCount);
