const menuItems = document.querySelectorAll('.item');
const listOfProducts = document.querySelector('.list-of-products');
const sum = document.querySelector('.sum');
const guestNumber = document.querySelector('input');
const result = document.querySelector('.result');



//Dodawanie dań do listy i ich usuwanie
menuItems.forEach(menuItem => menuItem.addEventListener('click', function () {
    let itemName = menuItem.getAttribute('data-name');
    let itemPrice = Number(menuItem.getAttribute('data-price'));
    const newItem = document.createElement('p');
    listOfProducts.appendChild(newItem);
    newItem.innerHTML = `${itemName} ${itemPrice} zł <button>x</button>`;


    const removeItem = (e) => {
        e.target.parentNode.remove();
        sum.textContent = Number(sum.textContent) - itemPrice;
    }
    newItem.querySelector('button').addEventListener('click', removeItem);

    sum.textContent = Number(sum.textContent) + itemPrice;
}))

//Obliczanie kwoty dla każdej osoby
guestNumber.addEventListener('input', function () {
    let costPerPerson = (Number(sum.textContent) / guestNumber.value).toFixed(1);
    result.textContent = costPerPerson;
})