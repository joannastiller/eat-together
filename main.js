const menuItems = document.querySelectorAll('.item');
const listOfProducts = document.querySelector('.list-of-products');
const sum = document.querySelector('.sum');

//Usuwanie dań z listy
const removeItem = (e) => {
    e.target.parentNode.remove()
}

//Dodawanie dań do listy
menuItems.forEach(menuItem => menuItem.addEventListener('click', function () {
    const itemName = menuItem.getAttribute('data-name');
    let itemPrice = menuItem.getAttribute('data-price');
    const newItem = document.createElement('p');
    listOfProducts.appendChild(newItem);
    newItem.innerHTML = `${itemName} ${itemPrice} zł <button>x</button>`;

    newItem.querySelector('button').addEventListener('click', removeItem);

    // let itemPriceNum = Number(itemPrice);
    // itemPriceNum += itemPriceNum;
    sum.textContent = Number(itemPrice);


}))