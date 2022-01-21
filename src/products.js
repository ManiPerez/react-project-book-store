const products = [
    {
        id: 1,
        title: "El Principito", 
        author: "Antoine de Saint-Exupéry", 
        category: "Fantasía",
        categoryId: 'fantasia',
        pages: 96,
        editorial: "Mariner",
        publication: 1943,
        price: 899, 
        img: "/images/el-principito.jpg",
        stock: 1,
        label: "Bestseller",
        description: "El principito es una novela corta y la obra más famosa del escritor y aviador francés Antoine de Saint-Exupéry.",
        reviews: "Es un libro imprescindible para cualquier lector. Recibí este libro por primera vez cuando tenía 6 años. Fue un regalo de mi madre cuando empecé a leer. Ahora de grande todavía lo leo de vez en cuando, es un libro increíble para niños y adultos y cada vez que lo lees sacas algo de él."
    },
    {
        id: 2,
        title: "Las Aventuras de Sherlock Holmes", 
        author: "Arthur Conan Doyle", 
        category: "Misterio",
        categoryId: "misterio",
        pages: 368,
        editorial: "Alma",
        publication: 1892,
        price: 3285, 
        img: "/images/las-aventuras-de-sherlock-holmes.jpg",
        stock: 2,
        label: "Clásico",
        description: "Las aventuras de Sherlock Holmes es una colección de doce cuentos escritos por Arthur Conan Doyle, en los que el personaje principal es el detective de ficción Sherlock Holmes.",
        reviews: "El libro en si es muy bueno, pero sin duda lo volvería a comprar solamente por su presentación, un empastado de calidad, colores nítidos, presentación impecable! ya estoy reuniendo para comprar mas libro de esta colección, sea cual sea el libro tener estas bellezas en tu biblioteca es requisito!"
    },
    {
        id: 3,
        title: "Fahrenheit 451", 
        author: "Ray Bradbury", 
        category: "Ciencia ficción",
        categoryId: "ciencia-ficcion",
        pages: 176,
        editorial: "Debolsillo",
        publication: 1953,
        price: 1799, 
        img: "/images/fahrenheit-451.jpg",
        stock: 3,
        label: "Clásico",
        description: "Fahrenheit 451 es una novela distópica del escritor estadounidense Ray Bradbury, publicada en 1953 y considerada una de sus mejores obras.",
        reviews: "Estas ediciones de Contemporánea de Bolsillo son de mis favoritas. Trato de conseguir los clásicos contemporáneos de esta edición por su practicidad, la calidad de la portada (brillante) y su tamaño y que guarda una uniformidad entre ellos. Excelente libro que te deja mucho en que pensar."
    },
    {
        id: 4,
        title: "Orgullo y Prejuicio", 
        author: "Jane Austen", 
        category: "Romance",
        categoryId: "romance",
        pages: 448,
        editorial: "Penguin",
        publication: 1813,
        price: 1750, 
        img: "/images/orgullo-y-prejuicio.jfif",
        stock: 4,
        label: "Clásico",
        description: "Orgullo y prejuicio, publicada por primera vez el 28 de enero de 1813 como una obra anónima, es la más famosa de las novelas de Jane Austen y una de las primeras comedias románticas en la historia de la novela.",
        reviews: "Me encanta esta novela es mi favorita. Me llegó en buenas condiciones. Lo único que no me gustó es que algunas palabras están mal escritas y que si tocas las letras se mancha el libro. Por lo demás tiene buena calidad y a buen precio."
    },
    {
        id: 5,
        title: "20.000 Leguas de Viaje Submarino", 
        author: "Julio Verne",
        category: "Aventura",
        categoryId: "aventura",
        pages: 162,
        editorial: "Penguin",
        publication: 1870, 
        price: 1190, 
        img: "/images/20.000-leguas-de-viaje-submarino.jpg",
        stock: 5,
        label: "Clásico",
        description: "Veinte mil leguas de viaje submarino es una de las obras literarias más conocidas del escritor francés Julio Verne.",
        reviews: "Este autor se convirtió en uno de mis favoritos, en sus libros puedes aprender un poco de geografía, de ictiología, de historia natural y de muchas cosas mas. Te adentras en las aventuras que pueden vivir los personajes. Excelente lectura para niños y adultos."
    },
    {
        id: 6,
        title: "El Señor de Los Anillos - La Comunidad del Anillo", 
        author: "J.R.R. Tolkien", 
        category: "Fantasía",
        categoryId: "fantasia",
        pages: 587,
        editorial: "Minotauro",
        publication: 1954,
        price: 2590, 
        img: "/images/el-senor-de-los-anillos-la-comunidad-del-anillo.jpg",
        stock: 6,
        label: "Bestseller",
        description: "El Señor de los Anillos es una novela de fantasía épica escrita por el filólogo y escritor británico J. R. R. Tolkien.",
        reviews: "No hace falta decir que esta obra de Tolkien es de la mejor literatura que se pueda encontrar. Me parace útil decir que esta edición para Kindle es muy buena. Hasta ahora no he encontrado ningún error tipográfico. Lo recomiendo."
    },
    {
        id: 7,
        title: "El Código Da Vinci", 
        author: "Dan Brown",
        category: "Misterio", 
        categoryId: "misterio", 
        pages: 656,
        editorial: "Planeta",
        publication: 2003,
        price: 2040, 
        img: "/images/el-codigo-da-vinci.jpg",
        stock: 7,
        label: "Bestseller",
        description: "El código Da Vinci es una novela de misterio escrita por Dan Brown y publicada por primera vez por Random House en 2003. Se ha convertido en un superventas mundial, con más de 80 millones de ejemplares vendidos y traducido a 44 idiomas.",
        reviews: "Sin duda el mejor libro de Dan Brown por mucho. Con el Lost Symbol tuvo un traspié enorme, mejoró bastante con Inferno y Origen, pero ésta es su obra más pulcra, minuciosa y creativa y vale la pena leerla o releerla."
    },
    {
        id: 8,
        title: "It", 
        author: "Stephen King",
        category: "Terror",
        categoryId: "terror",
        pages: 1504,
        editorial: "Vintage",
        publication: 1986, 
        price: 5799, 
        img: "/images/it.jpg",
        stock: 8,
        label: "Bestseller",
        description: "It es una novela de terror publicada en 1986 por el escritor estadounidense Stephen King. Cuenta la historia de un grupo de siete niños que son aterrorizados por un malvado monstruo -al que llaman «Eso»- que es capaz de cambiar de forma, alimentándose del terror que produce en sus víctimas.",
        reviews: "El libro me mantuvo pegada a cada hoja de principio a fin. Sentí terror, sentí amor, sentí la infancia y el pacto de los niños. Esta definitivamente es otra gran obra del autor."
    },
    {
        id: 9,
        title: "El Gran Gatsby", 
        author: "Francis Scott Fitzgerald", 
        category: "Romance",
        categoryId: "romance",
        pages: 184,
        editorial: "Debolsillo",
        publication: 1925,
        price: 3499, 
        img: "/images/el-gran-gatsby.jpg",
        stock: 9,
        label: "Clásico",
        description: "Una aspirante a actriz cansada de hacer castings... Un artista reconocido en plena crisis creativa... Unos valiosos cuadros encontrados en un desván... Y el arte del engaño para cambiar las leyes del karma.",
        reviews: "Clásico del siglo XX muy ameno y excelente narrativa? Es bueno leerlo y releerlo así como otras obras del autor."
    },
    {
        id: 10,
        title: "La Sombra del Viento", 
        author: "Carlos Ruiz Zafón", 
        category: "Misterio",
        categoryId: "misterio",
        pages: 569,
        editorial: "Vintage",
        publication: 2001,
        price: 2170, 
        img: "/images/la-sombra-del-viento.jpg",
        stock: 10,
        label: "Bestseller",
        description: "La sombra del viento es una novela de Carlos Ruiz Zafón publicada en 2001, el primer libro de la saga del Cementerio de los libros olvidados y un superventas mundial, con más de quince millones de ejemplares vendidos en 36 idiomas diferentes.​",
        reviews: "Sin duda alguna, este ha sido uno de los mejores libros que he leido en mi vida, lo mantiene a uno tan entretenido que no quiere parar uno de leerlo. Esta tan brillantemente escrito q uno se siente parte de la historia, en lo personal me pude imaginar cada lugar, persona y circunstancia que iba surgiendo en cada pagina. Tiene de todo, simpatia, inocencia, historia, alegria, tristeza, suspenso y audacidad. Lo recomiendo."
    },
    {
        id: 11,
        title: "Harry Potter y La Piedra Filosofal", 
        author: "J. K. Rowling",
        category: "Fantasía",
        categoryId: "fantasia",
        pages: 254,
        editorial: "Salamandra",
        publication: 1997, 
        price: 3849, 
        img: "/images/harry-potter-y-la-piedra-filosofal.jpg",
        stock: 11,
        label: "Bestseller",
        description: "Harry Potter y la piedra filosofal, es el primer libro de la serie literaria Harry Potter, escrito por la autora británica J. K. Rowling en 1997, que supuso además el debut de Rowling como escritora profesional.",
        reviews: "Los libros de Harry Potter son algunos de mis favoritos de todos los tiempos. Crecí amándolos, y cada libro ha sido leído muchas veces por lo que la historia es excelente, por supuesto."
    },
    {
        id: 12,
        title: "1984", 
        author: "George Orwell", 
        category: "Ciencia ficción",
        categoryId: "ciencia-ficcion",
        pages: 352,
        editorial: "Debolsillo",
        publication: 1949,
        price: 1799, 
        img: "/images/1984.jpg",
        stock: 12,
        label: "Clásico",
        description: "1984 es una novela política de ficción distópica, escrita por George Orwell entre 1947 y 1948 y publicada el 8 de junio de 1949.",
        reviews: "Seguramente las personas que compraron este libro ya saben que se trata de un clásico muy bien reconocido, así que sólo diré que la traducción está muy bien lograda; quizás algunas palabras como mono para overall le quitan fuerza a lo que el autor quiso decir, pero por lo demás está muy bien."
    },
    {
        id: 13,
        title: "El Cuento de La Criada", 
        author: "Margaret Atwood",
        category: "Ciencia ficción",
        categoryId: "ciencia-ficcion",
        pages: 297,
        editorial: "Salamandra",
        publication: 1985, 
        price: 3199, 
        img: "/images/el-cuento-de-la-criada.jpg",
        stock: 13,
        label: "Bestseller",
        description: "El cuento de la criada, publicada en 1985, es una novela distópica y una de las obras más importantes de la escritora canadiense Margaret Atwood. En ella destaca la crítica social y el trato a la mujer, temas frecuentes en sus obras.",
        reviews: "Tal como dice el titulo, es un cuento, tan bien contado que no notas como vas pasando de una pagina a otra. Lo mejor de todo es cuando ves el concepto de criada que tiene la autora, muy diferente al que manejamos en America Latina. Vale la pena leer."
    },
    {
        id: 14,
        title: "No Me Hagas Pensar", 
        author: "Steve Krug",
        category: "Diseño",
        categoryId: "disenio", 
        pages: 216,
        editorial: "Anaya Multimedia",
        publication: 2006, 
        price: 5164, 
        img: "/images/no-me-hagas-pensar.jpg",
        stock: 14,
        label: "Bestseller",
        description: "Cientos de miles de diseñadores y desarrolladores web se han basado en la guía del gurú de usabilidad Steve Krug para ayudarles a entender los principios de la navegación intuitiva y diseño Web. Un libro eminentemente práctico, uno de los más queridos y más recomendados sobre el tema.",
        reviews: "Este libro lo mejor que tiene es la descripción del metodo para realizar test de usuarios y medir si un diseño esta centrado en el usuario, siguiendo los pasos que ahí utilizan de forma muy amigable se obtiene resultados sorprendentes."
    },
    {
        id: 15,
        title: "Eloquent JavaScript", 
        author: "Marijn Haverbeke", 
        category: "Programación",
        categoryId: "programacion",
        pages: 472,
        editorial: "No Starch Press",
        publication: 2011,
        price: 6799, 
        img: "/images/eloquent-javascript.jpg",
        stock: 15,
        label: "Tendencia",
        description: "JavaScript está en el corazón de casi todas las aplicaciones web modernas, ya sea Google Apps, Twitter o el último juego basado en el navegador. Aunque es sencillo para los principiantes, JavaScript no es un juguete: es un lenguaje flexible y complejo que puede utilizarse para crear aplicaciones a gran escala.",
        reviews: "Es un tutorial de JavaScript inteligente y sencillo que existe en forma de libro impreso y una versión web gratuita con un buen formato... fácilmente la lectura más agradable de esta lista. Y hay tantas ideas útiles que no te aburrirás."
    },
    {
        id: 16,
        title: "El Último Deseo", 
        author: "Andrzej Sapkowski",
        category: "Fantasía",
        categoryId: "fantasia",
        pages: 256,
        editorial: "Alamut", 
        publication: 1993,
        price: 3334, 
        img: "/images/el-ultimo-deseo.jpg",
        stock: 16,
        label: "Tendencia",
        description: "Geralt de Rivia, brujo y mutante sobrehumano, se gana la vida como cazador de monstruos en una tierra de magia y maravilla: con sus dos espadas al hombro -la de acero para hombres, y la de plata para bestias- da cuenta de estriges, mantícoras, grifos, vampiros, quimeras y lobisomes, pero sólo cuando amenazan la paz. Irónico, cínico, descreído y siempre errante, sus pasos lo llevan de pueblo en pueblo ofreciendo sus servicios, hallando las más de las veces que los auténticos monstruos se esconden bajo rostros humanos. En su camino sorteará intrigas, elegirá el mal menor, debatirá cuestiones de precio, hollará el confín del mundo y realizará su último deseo: así comienzan las aventuras del brujo Geralt de Rivia.",
        reviews: "Si eres fan de los videojuegos de Witcher, de la producción de Netflix o un entusiasta de la literatura de fantasía, esta es una lectura buenisíma. La serie es más fiel a los libros que los juegos. La lectura es muy amena, por lo que te enganchas enseguida. Quizás lo único malo sería el precio de los tomos, pero valen la pena (es buena editorial). El libro llegó en perfecto estado."
    },
    {
        id: 17,
        title: "The Design of Everyday Things", 
        author: "Donald A. Norman",
        category: "Diseño", 
        categoryId: "disenio",
        pages: 368,
        editorial: "Basic",
        publication: 1988,
        price: 4097, 
        img: "/images/the-design-of-everyday-things.jpg",
        stock: 17,
        label: "Tendencia",
        description: "The Design of Everyday Things demuestra que el diseño bueno y útil es posible. Las reglas son sencillas: hacer que las cosas sean visibles, explotar las relaciones naturales que unen la función y el control, y hacer un uso inteligente de las restricciones.",
        reviews: "Este libro cambió el campo del diseño. A medida que se acelera el ritmo del cambio tecnológico, los principios de este libro son cada vez más importantes. Los nuevos ejemplos e ideas sobre el diseño y el desarrollo de productos lo convierten en una lectura esencial."
    },
    {
        id: 18,       
        title: "Hábitos Atómicos", 
        author: "James Clear",
        category: "Sociología",
        categoryId: "sociologia",
        pages: 320,
        editorial: "Alta",
        publication: 2018, 
        price: 1920, 
        img: "/images/habitos-atomicos.jpg",
        stock: 18,
        label: "Tendencia",
        description: "Hábitos atómicos: Un método sencillo y comprobado para desarrollar buenos hábitos y eliminar los malos De James Clear: Conversaciones Escritas del Libro. Aprende a ser un 1% mejor día a día. Rompe los hábitos no deseados y apégate a los que te ayudan a convertirte en una mejor persona.",
        reviews: "Es un libro excelente, con ayudas practicas para ampliar tu mente y enfrentar el desafió de crecer usando algo que todos podemos mejorar y crear, los hábitos pequeños. Lectura muy recomendada si buscar nuevas formas de crecimiento personal."
    },
    {
        id: 19,     
        title: "Todos Deberíamos Ser Feministas", 
        author: "Chimamanda Ngozi Adichie", 
        category: "Sociología",
        categoryId: "sociologia",
        pages: 28,
        editorial: "Random House",
        publication: 2014, 
        price: 1699, 
        img: "/images/todos-deberiamos-ser-feministas.jpg",
        stock: 19,
        label: "Bestseller",
        description: "Ser feminista no es solo cosa de mujeres. Con un estilo claro y directo, y sin dejar de lado el humor, esta carismática autora explora el papel de la mujer actual y apunta ideas para hacer de este mundo un lugar más justo.",
        reviews: "Toca, de manera muy acertada, muchos puntos en el que, en nuestro diario vivir, nuestras conductas y pensamientos son machistas. Ya sean a grandes o cortos rasgos. Recomendado para cualquier persona."
    },
    {
        id: 20,
        title: "Happier", 
        author: "Tal Ben-Shahar",
        category: "Sociología",
        categoryId: "sociologia",
        pages: 224,
        editorial: "Alienta", 
        publication: 2011,
        price: 1450, 
        img: "/images/happier.jpg",
        stock: 20,
        label: "Tendencia",
        description: "Durante los últimos años, Mark Manson -en su popular blog- se ha afanado en corregir nuestras delirantes expectativas sobre nosotros mismos y el mundo. Ahora nos ofrece su toda su intrépida sabiduría en este libro pionero.",
        reviews: "El libro me lo recomendaron y encontré sumamente estructurado su contenido, mismo que es analizado con todo detalle por el autor. Explica con claridad las bases de la Psicología Positiva y las formas de comportamiento humano con respecto al éxito."
    }
]

const categories = [
    {id: 'aventura', description: 'Aventura'}, 
    {id: 'ciencia-ficcion', description: 'Ciencia Ficción'}, 
    {id: 'disenio', description: "Diseño"},
    {id: 'fantasia', description: 'Fantasía'}, 
    {id: 'misterio', description: 'Misterio'}, 
    {id: 'programacion', description: 'Programación'},
    {id: 'romance', description: 'Romance'}, 
    {id: 'sociologia', description: 'Sociología'},
    {id: 'terror', description: 'Terror'}
]

export const getCategories = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(categories)
        }, 500)        
    })
}

export const getProducts = (categoryId) => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            categoryId ? resolve(products.filter(product => product.categoryId === categoryId)) : resolve(products)
        }, 500)        
    })
}

export const getProductById = (id) => {  
    return new Promise((resolve, reject) => {
        const product = products.find(prod => parseInt(prod.id) === parseInt(id))
        setTimeout(() => resolve(product), 1000)
    })
}

export const getProductsByCategory = (categoryId) => {  
    return new Promise((resolve, reject) => {
        const product = products.filter(prod => prod.categoryId === categoryId)
        setTimeout(() => resolve(product), 500)
    })
}

