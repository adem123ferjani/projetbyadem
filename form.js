    const checkboxes = document.querySelectorAll('.item-checkbox');
    const amountInput = document.getElementById('amount');
    const totalDisplay = document.querySelector('.total');

   function updateTotal() {
  let total = Number(amountInput.value || 0);
  checkboxes.forEach((cb, index) => {
    const qty = document.querySelectorAll('.item-quantity')[index].value || 1;
    if(cb.checked){
      total += Number(cb.dataset.price) * Number(qty);
    }
  });
  totalDisplay.textContent = 'المجموع: ' + total + '$';
}

checkboxes.forEach(cb => cb.addEventListener('change', updateTotal));
amountInput.addEventListener('input', updateTotal);
document.querySelectorAll('.item-quantity').forEach(qtyInput => qtyInput.addEventListener('input', updateTotal));

