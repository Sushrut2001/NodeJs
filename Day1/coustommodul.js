
const addTocart = () => {
    return "Add to cart";

}

const addQty = () => {
    return {
        action: "Add Quantity",
        qty: 1,
        price: 100
    }
}
let Name = "Sushrut"

// module.exports = addTocart; Default export
module.exports = { addTocart, addQty, Name }; //Named export