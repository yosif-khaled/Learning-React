const productsArray = [
    {
        id: '1',
        title: 'coffee',
        price: 4.99,
    },
    {
        id: '2',
        title: 'sunglasses',
        price: 9.99,
    },
    {
        id: '3',
        title: 'camera',
        price: 39.9,
    },
]

const getProductData = (id) => {
    let productData = productsArray.find(product=> product.id === id)
    if(productData === undefined){
      console.log('Product Data does not exist for ID: ' + id)
      return undefined
    }
    return productData
}

export { productsArray, getProductData }