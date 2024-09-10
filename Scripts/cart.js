products   =  []
function AddToCart(product){
    if(!(product in products)){
    products.push(product)
    }
    updateSessionStorage()
}
function DeleteFromCart(product){
    products  = products.filter((item) => item.id != product.id)
}
function ReturnTotal(){
    sum  = 0
    products.forEach(product => {
        sum += product.price
    });
    return(sum)
}
function updateSessionStorage(){
    sessionStorage.setItem("products",products)

}
