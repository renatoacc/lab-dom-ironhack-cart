// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subTotal = product.querySelector('.subtotal span');

  const subTotalValue = Number(price.innerText) * quantity.value;
  
  subTotal.innerText = subTotalValue;
  return subTotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // ITERATION 2
  const multiProduct = document.querySelectorAll('.product');
  //updateSubtotal(multiProduct);

  // ITERATION 3
  let totalPrice = 0;
  
  multiProduct.forEach((subtotal) => {
    totalPrice += updateSubtotal(subtotal);
  });
  

  const total = document.querySelector('#total-value span');
  total.innerText = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  // const trProduct = documente.createElement("tr");
  // for (let i = 0; i <=5; i++){
  //   const tdProduct = document.createElement("td");
  //   trProduct.appendChild(tdProduct);
  // }
  
  let newProduct = document.querySelector(".product");
  document.tbody.appendChild(newProduct);

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const buttonCreate = document.getElementById('create');
  buttonCreate.addEventListener('click', createProduct);
});
