products   =  []
quantity = {

}
function AddToCart(product) {
    let products, quantity;

    try {
        products = JSON.parse(localStorage.getItem("products") || "[]");
        quantity = JSON.parse(localStorage.getItem("quantity") || "{}");
    } catch (e) {
        products = [];
        quantity = {};
    }

    if (quantity[product.Name] === undefined) {
        quantity[product.Name] = 0;
    }

    quantity[product.Name] += 1;

    if (!products.some(p => p.Name === product.Name)) {
        products.push(product);
    }

    updateSessionStorage(products, quantity);
}

function updateSessionStorage(products, quantity) {
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("quantity", JSON.stringify(quantity));
    console.log(products)
    console.log(quantity)
}
function DeleteFromCart(parent,id){
    products =  JSON.parse(localStorage["products"])
    quantity = JSON.parse(localStorage["quantity"])
    
    for(let product of products){
        console.log(id)
        console.log(product.Name)
        if (product.Name == id){
            if (quantity[id] > 1)
            {   quantity[id]  -= 1
                break;
                
                


            }
            else{
                delete  quantity[id]  
                products = products.filter(function(item) {
                    return item !== product
                })
                parent.remove();  // Remove the row from the DOM
                
                
                

            }

        
            
        }
    }
    updateSessionStorage(products,quantity)
    }
   
function ReturnTotal(products){
    let  sum;
    products.forEach(product => {
        sum += product.price * quantity[product.Name]
    });
    return(sum)
}



