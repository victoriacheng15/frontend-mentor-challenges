const rangeInput = document.querySelector('input[type="range"]');
const costs = document.querySelectorAll('[data-cost]');
const pageviews = document.querySelector('[data-pageviews]');
const discountToggle = document.querySelector('[data-discount] input');
const span = document.querySelector('[data-discount] span');

let monthly;
let views;

let infos = [
  { price: 8, views: '10K' },
  { price: 12, views: '50K' },
  { price: 16, views: '100K' },
  { price: 24, views: '500K' },
  { price: 32, views: '1M' },
];

function handleDiscount() {
  span.classList.toggle('discount');

  updateValues();
}

function updateValues() {
  let max = this.max;
  let min = this.min;
  let value = this.value;

  bgSize = Math.floor(((value - min) * 100) / (max - min));
  rangeInput.style.backgroundSize = `${bgSize}% 100%`;

  const valueRange = {
    price8: bgSize <= 20, // 10k pageviews
    price12: bgSize > 20 && bgSize <= 40, // 50k pageviews
    price16: bgSize > 40 && bgSize <= 60, // 100k pageviews
    price24: bgSize > 60 && bgSize <= 80, // 500k pageviews
    price36: bgSize > 80 && bgSize <= 100, // 1M pageviews
  };

  const { price8, price12, price16, price24, price36 } = valueRange;

  const priceAndView = (index) => {
    monthly = infos[index].price;
    views = infos[index].views;
  };

  if (price8) {
    priceAndView(0);
  } else if (price12) {
    priceAndView(1);
  } else if (price16) {
    priceAndView(2);
  } else if (price24) {
    priceAndView(3);
  } else if (price36) {
    priceAndView(4);
  }

  if (discountToggle.checked) {
    monthly = monthly * 0.75;
  }

  costs.forEach((cost) => (cost.textContent = `${monthly}.00`));
  pageviews.textContent = views;
}

discountToggle.addEventListener('click', handleDiscount);
rangeInput.addEventListener('input', updateValues);
