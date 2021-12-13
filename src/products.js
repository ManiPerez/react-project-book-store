const products = [
    {
        id: 1,
        title: "El Principito", 
        author: "Antoine de Saint-Exupéry", 
        category: "Fantasía",
        price: 500, 
        img: "images/el-principito.jpg",
        stock: 43,
        status: "In stock",
        description: "El principito es una novela corta y la obra más famosa del escritor y aviador francés Antoine de Saint-Exupéry."
    },
    {
        id: 2,
        title: "Las Aventuras de Sherlock Holmes", 
        author: "Arthur Conan Doyle", 
        category: "Misterio",
        price: 650, 
        img: "images/sherlock-holmes.jpg",
        stock: 34,
        status: "In stock",
        description: "Las aventuras de Sherlock Holmes es una colección de doce cuentos escritos por Arthur Conan Doyle, en los que el personaje principal es el detective de ficción Sherlock Holmes."
    },
    {
        id: 3,
        title: "Fahrenheit 451", 
        author: "Ray Bradbury", 
        category: "Ciencia Ficción",
        price: 500, 
        img: "images/fahrenheit-451.jpg",
        stock: 0,
        status: "Out of stock",
        description: "Fahrenheit 451 es una novela distópica del escritor estadounidense Ray Bradbury, publicada en 1953 y considerada una de sus mejores obras."
    },
    {
        id: 4,
        title: "Orgullo y Prejuicio", 
        author: "Jane Austen", 
        category: "Romance",
        price: 400, 
        img: "images/orgullo-y-prejuicio.jfif",
        stock: 23,
        status: "In stock",
        description: "Orgullo y prejuicio, publicada por primera vez el 28 de enero de 1813 como una obra anónima, es la más famosa de las novelas de Jane Austen y una de las primeras comedias románticas en la historia de la novela."
    },
    {
        id: 5,
        title: "20000 leguas de viaje submarino", 
        author: "Julio Verne", 
        category: "Aventura",
        price: 488, 
        img: "images/20.000-leguas-de-viaje-submarino.jpg",
        stock: 37,
        status: "In stock",
        description: "Veinte mil leguas de viaje submarino es una de las obras literarias más conocidas del escritor francés Julio Verne."
    },
    {
        id: 6,
        title: "El Señor de los Anillos - La comunidad del anillo", 
        author: "J.R.R. Tolkien", 
        category: "Fantasía",
        price: 700, 
        img: "images/el-senor-de-los-anillos-la-comunidad-del-anillo.jpg",
        stock: 120,
        status: "In stock",
        description: "El Señor de los Anillos es una novela de fantasía épica escrita por el filólogo y escritor británico J. R. R. Tolkien."
    },
    {
        id: 7,
        title: "El código Da Vinci", 
        author: "Dan Brown", 
        category: "Misterio",
        price: 923, 
        img: "images/el-codigo-da-vinci.jpg",
        stock: 115,
        status: "In stock",
        description: "El código Da Vinci es una novela de misterio escrita por Dan Brown y publicada por primera vez por Random House en 2003. Se ha convertido en un superventas mundial, con más de 80 millones de ejemplares vendidos y traducido a 44 idiomas."
    },
    {
        id: 8,
        title: "It", 
        author: "Stephen King", 
        category: "Terror",
        price: 4889, 
        img: "images/it.jpg",
        stock: 57,
        status: "In stock",
        description: "It es una novela de terror publicada en 1986 por el escritor estadounidense Stephen King. Cuenta la historia de un grupo de siete niños que son aterrorizados por un malvado monstruo -al que llaman «Eso»- que es capaz de cambiar de forma, alimentándose del terror que produce en sus víctimas."
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

