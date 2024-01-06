// Get information from HTML 
const wrapper = document.querySelector('.wrapper');
let faBars = document.querySelector('.fa-bars');
let toggle = document.querySelector('.bars')
const right = document.querySelector('.right');
let leftBars = document.querySelector('.left');
let totalLength = document.querySelector('.totalLength')
// Get information from HTML end

// Massiv Data
const data = [
    { id: 1, image: './image/rasm.png', nomi: 'Olive', narxi: 20, discount: 10, son: 1 },
    { id: 2, image: './image/salad (2).png', nomi: 'Tartar', narxi: 35, discount: 10, son: 1 },
    { id: 3, image: './image/salad3.png', nomi: 'Pancake', narxi: 24, discount: 10, son: 1 },
    { id: 4, image: './image/salad4.png', nomi: 'Sandviche', narxi: 20, discount: 10, son: 1 },
    { id: 5, image: './image/salad4.png', nomi: 'Sandviche', narxi: 20, discount: 10, son: 1 },
    { id: 6, image: './image/salad5.png', nomi: 'Hamburger', narxi: 25, discount: 10, son: 1 },
    { id: 7, image: './image/salad6 (2).png', nomi: 'Twister', narxi: 31, discount: 10, son: 1 },
    { id: 8, image: './image/salad6.png', nomi: 'Cheesburger', narxi: 34, discount: 10, son: 1 },


]
// Massiv Data end

// Fa-bars Function
toggle.addEventListener('click', ()=>{
    if(faBars.classList.contains('fa-bars')){
        faBars.classList.replace('fa-bars','fa-times')
        leftBars.style.transform = 'translateX(0)';
    }else{
        faBars.classList.replace('fa-times','fa-bars')
        leftBars.style.transform = 'translateX(-175px)'
    }
})
// Fa-bars Function end
// Function newData push to data and local storage.
const newdata = JSON.parse(localStorage.getItem('basket')) || [];

function toBasket(index){
    newdata.push(data[index])
    localStorage.setItem('basket', JSON.stringify(newdata))
    updateReload()
};
// Function newData push to data and local storage end. 

// Data Map iteration
  right.innerHTML = ''
data.map((item,index) => {
    right.innerHTML += `
   <div class ="cards">
     <img src ="${item.image} "/>
     <p>${item.nomi}</p>
     <b>${item.narxi}$</b>
     <h3>${item.discount}%</h3>
     <button class ="basket" onclick ="toBasket(${index})">Add to Basket</button>
   </div>

   `
});
// Data Map iteration end

// Total length
function updateReload(){
    totalLength.innerHTML = newdata.length
}
updateReload()
// console.log(newdata.length)
