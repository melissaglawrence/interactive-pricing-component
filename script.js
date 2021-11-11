const range = document.querySelector('.pricing__range');
const views = document.querySelector('.pricing__page-views');
const pricing = document.querySelector('.pricing__monthly-price');
const pricingInputs = document.querySelectorAll('.radio');
const pricingInput = Array.from(pricingInputs);

function displayRadioValue() {
  pricingInputs.forEach((ele) => {
    if (ele.checked && ele.value === 'pricingYearly') {
      if (range.value === '0') {
        views.textContent = '0 ';
        pricing.textContent = '$0';
      } else if (range.value === '20') {
        views.textContent = '10K ';
        pricing.textContent = '$6';
      } else if (range.value === '40') {
        views.textContent = '50K ';
        pricing.textContent = '$9';
      } else if (range.value === '60') {
        views.textContent = '100K ';
        pricing.textContent = '$12';
      } else if (range.value === '80') {
        views.textContent = '500K ';
        pricing.textContent = '$18';
      } else if (range.value === '100') {
        views.textContent = '1M ';
        pricing.textContent = '$27';
      }
    } else {
      if (range.value === '0') {
        views.textContent = '0 ';
        pricing.textContent = '$0';
      } else if (range.value === '20') {
        views.textContent = '10K ';
        pricing.textContent = '$8';
      } else if (range.value === '40') {
        views.textContent = '50K ';
        pricing.textContent = '$12';
      } else if (range.value === '60') {
        views.textContent = '100K ';
        pricing.textContent = '$16';
      } else if (range.value === '80') {
        views.textContent = '500K ';
        pricing.textContent = '$24';
      } else if (range.value === '100') {
        views.textContent = '1M ';
        pricing.textContent = '$36';
      }
    }
  });
}

displayRadioValue();

range.addEventListener('change', displayRadioValue, false);
pricingInput.forEach((ele) =>
  ele.addEventListener('change', displayRadioValue, false),
);
