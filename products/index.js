const products = document.getElementById('products');

const productsToShow = [];

async function showProducts() {

    const data = await fetch('products.json');
    const res = await data.json();
    
    if(products.children.textil) {

        productsToShow.push(res[0].textil[0])

    } else if(products.children.llaveros) {

        productsToShow.push(res[0].llaveros[0])
        
    } else if(products.children.plasticos) {
        
        productsToShow.push(res[0].plasticos[0])
        
    } else if(products.children.acrilico) {
        
        productsToShow.push(res[0].acrilico[0])
        
    } else if(products.children.importados) {
        
        productsToShow.push(res[0].importados[0])
        
    } else if(products.children.otros) {
        
        productsToShow.push(res[0].otros[0])
        
    }
    
    productsToShow[0].forEach(el => {
        products.innerHTML += `<div class="p-lg-2">
                                    <img class="img-thumbnail px-lg-1" draggable="false" src="${el}" />
                                </div>`
    });
}

// console.log(productsToShow)


window.onload = showProducts