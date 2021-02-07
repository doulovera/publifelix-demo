const products = document.getElementById('products').children;
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const pageNumber = document.getElementById('page-num');

const maxItem = 16;
let index = 1;

const pagination = Math.ceil(products.length/maxItem);
console.log(pagination)

prev.addEventListener("click", () => {
    index--;
    check();
    showItems();
});

next.addEventListener("click", () => {
    index++;
    check();
    showItems();
});

function check() {
    if(index == pagination) {
        next.classList.add("disabled");
    } else {
        next.classList.remove("disabled");
    }

    if(index === 1) {
        prev.classList.add("disabled");
    } else {
        prev.classList.remove("disabled");
    }
}

function showItems() {
    for(let i=0;i<products.length;i++) {
        products[i].classList.remove("show");
        products[i].classList.add("hide");

        if(i>=(index*maxItem)-maxItem && i<index*maxItem){
            products[i].classList.remove("hide");
            products[i].classList.add("show");
        }
        pageNumber.innerHTML = index;
    }
}

window.onload = function() {
    showItems();
    check();
}