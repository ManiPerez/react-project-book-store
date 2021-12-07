const products = [
    {
        id: 1,
        title: "El Principito", 
        author: "Antoine de Saint-Exupéry", 
        category: "Fantasía",
        price: 500, 
        img: "images/el-principito.jpg",
        stock: 43,
        details: "El principito es una novela corta y la obra más famosa del escritor y aviador francés Antoine de Saint-Exupéry."
    },
    {
        id: 2,
        title: "Las Aventuras de Sherlock Holmes", 
        author: "Arthur Conan Doyle", 
        category: "Misterio",
        price: 650, 
        img: "images/sherlock-holmes.jpg",
        stock: 34
    },
    {
        id: 3,
        title: "Fahrenheit 451", 
        author: "Ray Bradbury", 
        category: "Ciencia Ficción",
        price: 500, 
        img: "images/fahrenheit-451.jpg",
        stock: 77
    },
    {
        id: 4,
        title: "Orgullo y Prejuicio", 
        author: "Jane Austen", 
        category: "Romance",
        price: 400, 
        img: "images/orgullo-y-prejuicio.jfif",
        stock: 23
    }
] 

export const getProducts = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getItems = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(products[0])
        }, 2000)
    })
}

