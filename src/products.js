const products = [
    {
        "id": 1,
        "title": "El Principito", 
        "author": "Antoine de Saint-Exupéry", 
        "category": "Fantasía",
        "price": 500, 
        "img": "images/el-principito.jpg",
        "stock": 43,
        "label": "Best seller",
        "description": "El principito es una novela corta y la obra más famosa del escritor y aviador francés Antoine de Saint-Exupéry."
    },
    {
        "id": 2,
        "title": "Las Aventuras de Sherlock Holmes", 
        "author": "Arthur Conan Doyle", 
        "category": "Misterio",
        "price": 650, 
        "img": "images/las-aventuras-de-sherlock-holmes.jpg",
        "stock": 34,
        "label": "Clasicos",
        "description": "Las aventuras de Sherlock Holmes es una colección de doce cuentos escritos por Arthur Conan Doyle, en los que el personaje principal es el detective de ficción Sherlock Holmes."
    },
    {
        "id": 3,
        "title": "Fahrenheit 451", 
        "author": "Ray Bradbury", 
        "category": "Ciencia Ficción",
        "price": 500, 
        "img": "images/fahrenheit-451.jpg",
        "stock": 43,
        "label": "Clasicos",
        "description": "Fahrenheit 451 es una novela distópica del escritor estadounidense Ray Bradbury, publicada en 1953 y considerada una de sus mejores obras."
    },
    {
        "id": 4,
        "title": "Orgullo y Prejuicio", 
        "author": "Jane Austen", 
        "category": "Romance",
        "price": 460, 
        "img": "images/orgullo-y-prejuicio.jfif",
        "stock": 43,
        "label": "Clasico",
        "description": "Orgullo y prejuicio, publicada por primera vez el 28 de enero de 1813 como una obra anónima, es la más famosa de las novelas de Jane Austen y una de las primeras comedias románticas en la historia de la novela."
    },
    {
        "id": 5,
        "title": "20000 leguas de viaje submarino", 
        "author": "Julio Verne", 
        "category": "Aventura",
        "price": 488, 
        "img": "images/20.000-leguas-de-viaje-submarino.jpg",
        "stock": 43,
        "label": "Clasico",
        "description": "Veinte mil leguas de viaje submarino es una de las obras literarias más conocidas del escritor francés Julio Verne."
    },
    {
        "id": 6,
        "title": "El Señor de los Anillos - La comunidad del anillo", 
        "author": "J.R.R. Tolkien", 
        "category": "Fantasía",
        "price": 940, 
        "img": "images/el-senor-de-los-anillos-la-comunidad-del-anillo.jpg",
        "stock": 73,
        "label": "Best seller",
        "description": "El Señor de los Anillos es una novela de fantasía épica escrita por el filólogo y escritor británico J. R. R. Tolkien."
    },
    {
        "id": 7,
        "title": "El código Da Vinci", 
        "author": "Dan Brown", 
        "category": "Misterio",
        "price": 1200, 
        "img": "images/el-codigo-da-vinci.jpg",
        "stock": 43,
        "label": "Best seller",
        "description": "El código Da Vinci es una novela de misterio escrita por Dan Brown y publicada por primera vez por Random House en 2003. Se ha convertido en un superventas mundial, con más de 80 millones de ejemplares vendidos y traducido a 44 idiomas."
    },
    {
        "id": 8,
        "title": "It", 
        "author": "Stephen King", 
        "category": "Terror",
        "price": 3300, 
        "img": "images/it.jpg",
        "stock": 55,
        "label": "Best seller",
        "description": "It es una novela de terror publicada en 1986 por el escritor estadounidense Stephen King. Cuenta la historia de un grupo de siete niños que son aterrorizados por un malvado monstruo -al que llaman «Eso»- que es capaz de cambiar de forma, alimentándose del terror que produce en sus víctimas."
    },
    {
        "id": 9,
        "title": "El arte de engañar al karma", 
        "author": "Elisabet Benavent", 
        "category": "Romance",
        "price": 1400, 
        "img": "images/el-arte-de-enganar-al-karma.jfif",
        "stock": 66,
        "label": "Best seller",
        "description": "Una aspirante a actriz cansada de hacer castings... Un artista reconocido en plena crisis creativa... Unos valiosos cuadros encontrados en un desván... Y el arte del engaño para cambiar las leyes del karma."
    },
    {
        "id": 10,
        "title": "La sombra del viento", 
        "author": "Carlos Ruiz Zafón", 
        "category": "Misterio",
        "price": 4323, 
        "img": "images/la-sombra-del-viento.jpg",
        "stock": 23,
        "label": "Best seller",
        "description": "La sombra del viento es una novela de Carlos Ruiz Zafón publicada en 2001, el primer libro de la saga del Cementerio de los libros olvidados y un superventas mundial, con más de quince millones de ejemplares vendidos en 36 idiomas diferentes.​"
    },
    {
        "id": 11,
        "title": "Harry Potter y la piedra filosofal", 
        "author": "J. K. Rowling", 
        "category": "Fantasía",
        "price": 2500, 
        "img": "images/harry-potter-y-la-piedra-filosofal.jpg",
        "stock": 79,
        "label": "Best seller",
        "description": "Harry Potter y la piedra filosofal, es el primer libro de la serie literaria Harry Potter, escrito por la autora británica J. K. Rowling en 1997, que supuso además el debut de Rowling como escritora profesional."
    },
    {
        "id": 12,
        "title": "1984", 
        "author": "George Orwell", 
        "category": "Ciencia ficción",
        "price": 1120, 
        "img": "images/1984.jpg",
        "stock": 51,
        "label": "Clasico",
        "description": "1984 es una novela política de ficción distópica, escrita por George Orwell entre 1947 y 1948 y publicada el 8 de junio de 1949."
    },
    {
        "id": 13,
        "title": "El cuento de la criada", 
        "author": "Margaret Atwood", 
        "category": "Ciencia ficción",
        "price": 1600, 
        "img": "images/el-cuento-de-la-criada.jpg",
        "stock": 82,
        "label": "Best seller",
        "description": "El cuento de la criada, publicada en 1985, es una novela distópica y una de las obras más importantes de la escritora canadiense Margaret Atwood. En ella destaca la crítica social y el trato a la mujer, temas frecuentes en sus obras."
    },
    {
        "id": 14,
        "title": "No Me Hagas Pensar", 
        "author": "Steve Krug", 
        "category": "Diseño",
        "price": 3200, 
        "img": "images/no-me-hagas-pensar.jpg",
        "stock": 64,
        "label": "Best seller",
        "description": "Cientos de miles de diseñadores y desarrolladores web se han basado en la guía del gurú de usabilidad Steve Krug para ayudarles a entender los principios de la navegación intuitiva y diseño Web. Un libro eminentemente práctico, uno de los más queridos y más recomendados sobre el tema."
    },
    {
        "id": 15,
        "title": "Eloquent JavaScript: Una moderna introducción a la programación", 
        "author": "Marijn Haverbeke", 
        "category": "Programación",
        "price": 4800, 
        "img": "images/eloquent-javascript.jpg",
        "stock": 99,
        "label": "Tendencia",
        "description": "JavaScript está en el corazón de casi todas las aplicaciones web modernas, ya sea Google Apps, Twitter o el último juego basado en el navegador. Aunque es sencillo para los principiantes, JavaScript no es un juguete: es un lenguaje flexible y complejo que puede utilizarse para crear aplicaciones a gran escala."
    },
    {
        "id": 16,
        "title": "Cracking the Coding Interview", 
        "author": "Gayle Laakmann McDowell", 
        "category": "Programación",
        "price": 5.479, 
        "img": "images/cracking-the-coding-interview.jpg",
        "stock": 107,
        "label": "Tendencia",
        "description": "Cracking the Coding Interview, 6ª edición, está aquí para ayudarte en el proceso de entrevistas, enseñándote lo que necesitas saber y permitiéndote dar lo mejor de ti."
    },
    {
        "id": 17,
        "title": "The Design of Everyday Things", 
        "author": "Donald A. Norman", 
        "category": "Diseño",
        "price": 2.419, 
        "img": "images/the-design-of-everyday-things.jpg",
        "stock": 128,
        "label": "Tendencia",
        "description": "The Design of Everyday Things demuestra que el diseño bueno y útil es posible. Las reglas son sencillas: hacer que las cosas sean visibles, explotar las relaciones naturales que unen la función y el control, y hacer un uso inteligente de las restricciones."
    },
    {
        "id": 18,
        "title": "Hábitos Atómicos", 
        "author": "James Clear", 
        "category": "Autoayuda",
        "price": 1.728, 
        "img": "images/habitos-atomicos.jpg",
        "stock": 33,
        "label": "Tendencia",
        "description": "Hábitos atómicos: Un método sencillo y comprobado para desarrollar buenos hábitos y eliminar los malos De James Clear: Conversaciones Escritas del Libro. Aprende a ser un 1% mejor día a día. Rompe los hábitos no deseados y apégate a los que te ayudan a convertirte en una mejor persona."
    },
    {
        "id": 19,
        "title": "Todos deberíamos ser feministas", 
        "author": "Chimamanda Ngozi Adichie", 
        "category": "Contemporaneo",
        "price": 1.578, 
        "img": "images/todos-deberiamos-ser-feministas.jpg",
        "stock": 69,
        "label": "Best seller",
        "description": "Ser feminista no es solo cosa de mujeres. Con un estilo claro y directo, y sin dejar de lado el humor, esta carismática autora explora el papel de la mujer actual y apunta ideas para hacer de este mundo un lugar más justo."
    },
    {
        "id": 20,
        "title": "El Sutil Arte de Que Te Importe Un Caraj*", 
        "author": "Mark Manson", 
        "category": "Autoayuda",
        "price": 1.987, 
        "img": "images/el-sutil-arte-de-que-te-importe-un-carajo.jpg",
        "stock": 125,
        "label": "Tendencia",
        "description": "Durante los últimos años, Mark Manson -en su popular blog- se ha afanado en corregir nuestras delirantes expectativas sobre nosotros mismos y el mundo. Ahora nos ofrece su toda su intrépida sabiduría en este libro pionero."
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

