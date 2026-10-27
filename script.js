// Dynamic Floating Butterflies & Sparkles Effect
function createButterflies() {
  const container = document.getElementById('butterflyBg');
  if (!container) return;
  
  const icons = ['🦋', '✨', '🌸', '💖'];
  const count = 18;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'floating-butterfly';
    el.innerText = icons[Math.floor(Math.random() * icons.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.animationDuration = (Math.random() * 12 + 8) + 's';
    el.style.animationDelay = (Math.random() * 5) + 's';
    container.appendChild(el);
  }
}

// Schedule Tab Switcher
function switchTab(tabName) {
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));

  if (tabName === 'weekly') {
    tabs[0].classList.add('active');
    document.getElementById('weekly-view').classList.add('active');
  } else {
    tabs[1].classList.add('active');
    document.getElementById('details-view').classList.add('active');
  }
}

// Coffee Category Filter (Safe with event handling)
function filterCoffee(category) {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.coffee-card');

  buttons.forEach(btn => btn.classList.remove('active'));
  
  if (typeof event !== 'undefined' && event && event.target) {
    event.target.classList.add('active');
  }

  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Interactive Coffee Order Cart
let cart = [];

function addToOrder(name, price) {
  cart.push({ name, price });
  renderOrder();
}

function renderOrder() {
  const orderList = document.getElementById('order-list');
  const totalPriceEl = document.getElementById('order-total-price');

  if (!orderList || !totalPriceEl) return;

  if (cart.length === 0) {
    orderList.innerHTML = '<li class="empty-msg">No items added yet. Click "Add to Order" above!</li>';
    totalPriceEl.innerText = '₱0.00';
    return;
  }

  let html = '';
  let total = 0;

  cart.forEach((item) => {
    total += item.price;
    html += `
      <li class="order-item">
        <span>${item.name}</span>
        <span>₱${item.price.toFixed(2)}</span>
      </li>
    `;
  });

  orderList.innerHTML = html;
  totalPriceEl.innerText = `₱${total.toFixed(2)}`;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  createButterflies();
});
