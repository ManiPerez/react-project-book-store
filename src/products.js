const products = [
    {
        id: 1,
        title: "El Principito", 
        author: "Antoine de Saint-Exupéry", 
        category: "novel",
        price: 500, 
        img: "./images/el-principito.jpg",
        stock: 43
    },
    {
        id: 2,
        title: "Las Aventuras de Sherlock Holmes", 
        author: "Arthur Conan Doyle", 
        category: "novel",
        price: 650, 
        img: "./images/sherlock-holmes.jpg",
        stock: 34
    }
] 

export const getProducts = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

