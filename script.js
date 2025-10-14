// ✅ 20 Products with working Unsplash images
const products = [
  { id: 1, name: "Leather Jacket", price: 2499, image: "image.png" },
  { id: 2, name: "Running Shoes", price: 1799, image: "image copy.png" },
  { id: 3, name: "Classic Watch", price: 1199, image: "image copy 2.png" },
  { id: 4, name: "Backpack", price: 899, image: "image copy 3.png" },
  { id: 5, name: "Denim Jeans", price: 1599, image: "image copy 4.png" },
  { id: 6, name: "Formal Shirt", price: 999, image: "image copy 5.png" },
  { id: 7, name: "T-Shirt", price: 699, image: "image copy 6.png" },
  { id: 8, name: "Sunglasses", price: 799, image: "image copy 7.png" },
  { id: 9, name: "Wireless Headphones", price: 22999, image: "image copy 8.png" },
  { id: 10, name: "Smartphone", price: 99999, image: "image copy 9.png" },
  { id: 11, name: "Smartwatch", price: 2999, image: "image copy 10.png" },
  { id: 12, name: "Bluetooth Speaker", price: 1499, image: "image copy 11.png" },
  { id: 13, name: "Casual Sneakers", price: 1699, image: "image copy 12.png" },
  { id: 14, name: "Gaming Mouse", price: 899, image: "image copy 13.png" },
  { id: 15, name: "Laptop Bag", price: 1299, image: "image copy 14.png" },
  { id: 16, name: "Wireless Keyboard", price: 999, image: "image copy 15.png" },
  { id: 17, name: "Perfume", price: 1199, image: "image copy 16.png" },
  { id: 18, name: "Women’s Handbag", price: 1899, image: "image copy 17.png" },
  { id: 19, name: "Winter Hoodie", price: 1399, image: "image copy 18.png" },
  { id: 20, name: "Sports Cap", price: 499, image: "image copy 19.png" }
];

const productList = document.getElementById('product-list');
const cartModal = document.getElementById('cart-modal');
const cartBtn = document.getElementById('cart-btn');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsDiv = document.getElementById('cart-items');
const totalDiv = document.getElementById('total');
const cartCount = document.getElementById('cart-count');

let cart = [];

// ✅ Display all products dynamically
products.forEach(product => {
  const div = document.createElement('div');
  div.classList.add('product');
  div.innerHTML = `
    <img src="${product.image}?auto=format&fit=crop&w=400&q=80" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
  `;
  productList.appendChild(div);
});

// ✅ Add to Cart logic
document.addEventListener('click', e => {
  if (e.target.classList.contains('add-to-cart')) {
    const id = parseInt(e.target.dataset.id);
    const item = products.find(p => p.id === id);
    const existing = cart.find(i => i.id === id);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ ...item, qty: 1 });
    }
    updateCart();
  }
});

// ✅ Update Cart display
function updateCart() {
  cartItemsDiv.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    const div = document.createElement('div');
    div.innerHTML = `
      ${item.name} × ${item.qty} = ₹${item.price * item.qty}
    `;
    cartItemsDiv.appendChild(div);
  });
  totalDiv.textContent = `Total: ₹${total}`;
  cartCount.textContent = cart.length;
}

// ✅ Cart Modal show/hide
cartBtn.addEventListener('click', () => cartModal.style.display = 'flex');
closeCartBtn.addEventListener('click', () => cartModal.style.display = 'none');
