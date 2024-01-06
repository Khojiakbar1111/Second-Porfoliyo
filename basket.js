const conteiner = document.querySelector('.conteiner');
const basket1 = document.querySelector('.basket1');
let totalPrice = document.querySelector('.totalPrice');
const basketData = JSON.parse(localStorage.getItem('basket')) || [];

function basketBaza() {
    basket1.innerHTML = '';
    let umumiyNarx = 0;
    let totalProduct = 0;
    basketData.map((item) => {
        basket1.innerHTML += `
        <div class ="card1">
         <img src ="${item.image}" />
         <p>${item.nomi}</p>
         <h3>${item.narxi * item.son}$</h3>
         <b>${item.discount}%</b>
         <div class ="count">
         <button class ="plus" onclick ="plus(${item.id})">+</button>
         <p>${item.son}</p>
         <button class ="minus" onclick ="minus(${item.id})">-</button>
         </div>
         <button class ="delete" onclick ="deletee(${item.id})"><i class="fa-solid fa-trash"></i></button>
        </div>
        `;

        totalProduct += (item.narxi - item.narxi / 100 * item.discount) * item.son;
    });

    umumiyNarx = totalProduct;
     totalPrice.innerHTML = umumiyNarx.toFixed(2) + '$';
}

function plus(id) {
    basketData.map((item) => {
        if (item.id === id) {
            item.son = item.son + 1;
        }
        return item;
    });
    localStorage.setItem("basket", JSON.stringify(basketData));
    basketBaza();
}

function minus(id) {
    basketData.forEach((item) => {
        if (item.id === id) {
            if (item.son > 1) {
                item.son--;
            } else {
                item.son;
            }
            localStorage.setItem('basket', JSON.stringify(basketData));
        }
    });
    basketBaza();
}

function updateFunction() {
    basketBaza();
}

function deletee(deleteData) {
    let ochirish = basketData.filter((item) => item.id !== deleteData);
    localStorage.setItem('basket', JSON.stringify(ochirish));
    location.reload();
}

updateFunction();
