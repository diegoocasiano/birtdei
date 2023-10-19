const imageBasePath = process.env.NODE_ENV === 'development' ? '/public/' : '/react-components/dist/';

const dataRegalos = [
    {   
        id: 1,
        regalo: "1 Helado",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "McDonald's",
        categoriaMarca: "FastFood",
        colorMarca: "#e50000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-mcdonalds.png`,
            size: "75%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 2,
        regalo: "1 Bebida Alta",
        regaloFull: "1 bebida con chispas de chocolate",
        nombreMarca: "Starbucks",
        categoriaMarca: "Cafetería",
        colorMarca: "#006341",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-starbucks.png`,
            size: "70%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños" 
        ]
    },
    {   
        id: 3,
        regalo: "1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Chilli's",
        categoriaMarca: "Restaurante",
        colorMarca: "#F6EADE",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-chillis.png`,
            size: "",
        },
        condicionesRegalo: [
            "Presentar DNI",
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 4,
        regalo: "1 Shot o 1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Fridays",
        categoriaMarca: "Restaurante",
        colorMarca: "#E51937",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-fridays.png`,
            size: "75%",
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 1,
        regalo: "1 Helado",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "McDonald's",
        categoriaMarca: "FastFood",
        colorMarca: "#e50000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-mcdonalds.png`,
            size: "75%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños" 
        ]
    },
    {   
        id: 2,
        regalo: "1 Bebida Alta",
        regaloFull: "1 bebida con chispas de chocolate",
        nombreMarca: "Starbucks",
        categoriaMarca: "Cafetería",
        colorMarca: "#006341",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-starbucks.png`,
            size: "70%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños" 
        ]
    },
    {   
        id: 3,
        regalo: "1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Chilli's",
        categoriaMarca: "Restaurante",
        colorMarca: "#F6EADE",
        logoMarca: {
            url: `${imageBasePath}/logos-marcas/logo-chillis.png`,
            size: "",
        },
        condicionesRegalo: [
            "Presentar DNI",
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 4,
        regalo: "1 Shot o 1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Fridays",
        categoriaMarca: "Restaurante",
        colorMarca: "#E51937",
        logoMarca: {
            url: `${imageBasePath}/logos-marcas/logo-fridays.png`,
            size: "75%",
        },
        condicionesRegalo: [
            "Presentar DNI",
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ],
    },
    {   
        id: 1,
        regalo: "1 Helado",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "McDonald's",
        categoriaMarca: "FastFood",
        colorMarca: "#e50000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-mcdonalds.png`,
            size: "75%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 2,
        regalo: "1 Bebida Alta",
        regaloFull: "1 bebida con chispas de chocolate",
        nombreMarca: "Starbucks",
        categoriaMarca: "Cafetería",
        colorMarca: "#006341",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-starbucks.png`,
            size: "70%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños" 
        ]
    },
    {   
        id: 3,
        regalo: "1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Chilli's",
        categoriaMarca: "Restaurante",
        colorMarca: "#F6EADE",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-chillis.png`,
            size: "",
        },
        condicionesRegalo: [
            "Presentar DNI",
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 4,
        regalo: "1 Shot o 1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Fridays",
        categoriaMarca: "Restaurante",
        colorMarca: "#E51937",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-fridays.png`,
            size: "75%",
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 1,
        regalo: "1 Helado",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "McDonald's",
        categoriaMarca: "FastFood",
        colorMarca: "#e50000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-mcdonalds.png`,
            size: "75%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños" 
        ]
    },
    {   
        id: 2,
        regalo: "1 Bebida Alta",
        regaloFull: "1 bebida con chispas de chocolate",
        nombreMarca: "Starbucks",
        categoriaMarca: "Cafetería",
        colorMarca: "#006341",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-starbucks.png`,
            size: "70%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños" 
        ]
    },
    {   
        id: 3,
        regalo: "1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Chilli's",
        categoriaMarca: "Restaurante",
        colorMarca: "#F6EADE",
        logoMarca: {
            url: `${imageBasePath}/logos-marcas/logo-chillis.png`,
            size: "",
        },
        condicionesRegalo: [
            "Presentar DNI",
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 4,
        regalo: "1 Shot o 1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Fridays",
        categoriaMarca: "Restaurante",
        colorMarca: "#E51937",
        logoMarca: {
            url: `${imageBasePath}/logos-marcas/logo-fridays.png`,
            size: "75%",
        },
        condicionesRegalo: [
            "Presentar DNI",
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ],
    },
    {   
        id: 1,
        regalo: "1 Helado",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "McDonald's",
        categoriaMarca: "FastFood",
        colorMarca: "#e50000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-mcdonalds.png`,
            size: "75%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 2,
        regalo: "1 Bebida Alta",
        regaloFull: "1 bebida con chispas de chocolate",
        nombreMarca: "Starbucks",
        categoriaMarca: "Cafetería",
        colorMarca: "#006341",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-starbucks.png`,
            size: "70%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños" 
        ]
    },
    {   
        id: 3,
        regalo: "1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Chilli's",
        categoriaMarca: "Restaurante",
        colorMarca: "#F6EADE",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-chillis.png`,
            size: "",
        },
        condicionesRegalo: [
            "Presentar DNI",
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 4,
        regalo: "1 Shot o 1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Fridays",
        categoriaMarca: "Restaurante",
        colorMarca: "#E51937",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-fridays.png`,
            size: "75%",
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 1,
        regalo: "1 Helado",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "McDonald's",
        categoriaMarca: "FastFood",
        colorMarca: "#e50000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-mcdonalds.png`,
            size: "75%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños" 
        ]
    },
    {   
        id: 2,
        regalo: "1 Bebida Alta",
        regaloFull: "1 bebida con chispas de chocolate",
        nombreMarca: "Starbucks",
        categoriaMarca: "Cafetería",
        colorMarca: "#006341",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-starbucks.png`,
            size: "70%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños" 
        ]
    },
    {   
        id: 3,
        regalo: "1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Chilli's",
        categoriaMarca: "Restaurante",
        colorMarca: "#F6EADE",
        logoMarca: {
            url: `${imageBasePath}/logos-marcas/logo-chillis.png`,
            size: "",
        },
        condicionesRegalo: [
            "Presentar DNI",
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 4,
        regalo: "1 Shot o 1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Fridays",
        categoriaMarca: "Restaurante",
        colorMarca: "#E51937",
        logoMarca: {
            url: `${imageBasePath}/logos-marcas/logo-fridays.png`,
            size: "75%",
        },
        condicionesRegalo: [
            "Presentar DNI",
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ],
    },
    {   
        id: 1,
        regalo: "1 Helado",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "McDonald's",
        categoriaMarca: "FastFood",
        colorMarca: "#e50000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-mcdonalds.png`,
            size: "75%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 2,
        regalo: "1 Bebida Alta",
        regaloFull: "1 bebida con chispas de chocolate",
        nombreMarca: "Starbucks",
        categoriaMarca: "Cafetería",
        colorMarca: "#006341",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-starbucks.png`,
            size: "70%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños" 
        ]
    },
    {   
        id: 3,
        regalo: "1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Chilli's",
        categoriaMarca: "Restaurante",
        colorMarca: "#F6EADE",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-chillis.png`,
            size: "",
        },
        condicionesRegalo: [
            "Presentar DNI",
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 4,
        regalo: "1 Shot o 1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Fridays",
        categoriaMarca: "Restaurante",
        colorMarca: "#E51937",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-fridays.png`,
            size: "75%",
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 1,
        regalo: "1 Helado",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "McDonald's",
        categoriaMarca: "FastFood",
        colorMarca: "#e50000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-mcdonalds.png`,
            size: "75%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños" 
        ]
    },
    {   
        id: 2,
        regalo: "1 Bebida Alta",
        regaloFull: "1 bebida con chispas de chocolate",
        nombreMarca: "Starbucks",
        categoriaMarca: "Cafetería",
        colorMarca: "#006341",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-starbucks.png`,
            size: "70%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños" 
        ]
    },
    {   
        id: 3,
        regalo: "1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Chilli's",
        categoriaMarca: "Restaurante",
        colorMarca: "#F6EADE",
        logoMarca: {
            url: `${imageBasePath}/logos-marcas/logo-chillis.png`,
            size: "",
        },
        condicionesRegalo: [
            "Presentar DNI",
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 4,
        regalo: "1 Shot o 1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Fridays",
        categoriaMarca: "Restaurante",
        colorMarca: "#E51937",
        logoMarca: {
            url: `${imageBasePath}/logos-marcas/logo-fridays.png`,
            size: "75%",
        },
        condicionesRegalo: [
            "Presentar DNI",
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ],
    },
    {   
        id: 1,
        regalo: "1 Helado",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "McDonald's",
        categoriaMarca: "FastFood",
        colorMarca: "#e50000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-mcdonalds.png`,
            size: "75%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 2,
        regalo: "1 Bebida Alta",
        regaloFull: "1 bebida con chispas de chocolate",
        nombreMarca: "Starbucks",
        categoriaMarca: "Cafetería",
        colorMarca: "#006341",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-starbucks.png`,
            size: "70%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños" 
        ]
    },
    {   
        id: 3,
        regalo: "1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Chilli's",
        categoriaMarca: "Restaurante",
        colorMarca: "#F6EADE",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-chillis.png`,
            size: "",
        },
        condicionesRegalo: [
            "Presentar DNI",
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 4,
        regalo: "1 Shot o 1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Fridays",
        categoriaMarca: "Restaurante",
        colorMarca: "#E51937",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-fridays.png`,
            size: "75%",
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 1,
        regalo: "1 Helado",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "McDonald's",
        categoriaMarca: "FastFood",
        colorMarca: "#e50000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-mcdonalds.png`,
            size: "75%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños" 
        ]
    },
    {   
        id: 2,
        regalo: "1 Bebida Alta",
        regaloFull: "1 bebida con chispas de chocolate",
        nombreMarca: "Starbucks",
        categoriaMarca: "Cafetería",
        colorMarca: "#006341",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-starbucks.png`,
            size: "70%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños" 
        ]
    },
    {   
        id: 3,
        regalo: "1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Chilli's",
        categoriaMarca: "Restaurante",
        colorMarca: "#F6EADE",
        logoMarca: {
            url: `${imageBasePath}/logos-marcas/logo-chillis.png`,
            size: "",
        },
        condicionesRegalo: [
            "Presentar DNI",
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 4,
        regalo: "1 Shot o 1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Fridays",
        categoriaMarca: "Restaurante",
        colorMarca: "#E51937",
        logoMarca: {
            url: `${imageBasePath}/logos-marcas/logo-fridays.png`,
            size: "75%",
        },
        condicionesRegalo: [
            "Presentar DNI",
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ],
    },
    {   
        id: 1,
        regalo: "1 Helado",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "McDonald's",
        categoriaMarca: "FastFood",
        colorMarca: "#e50000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-mcdonalds.png`,
            size: "75%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 2,
        regalo: "1 Bebida Alta",
        regaloFull: "1 bebida con chispas de chocolate",
        nombreMarca: "Starbucks",
        categoriaMarca: "Cafetería",
        colorMarca: "#006341",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-starbucks.png`,
            size: "70%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños" 
        ]
    },
    {   
        id: 3,
        regalo: "1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Chilli's",
        categoriaMarca: "Restaurante",
        colorMarca: "#F6EADE",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-chillis.png`,
            size: "",
        },
        condicionesRegalo: [
            "Presentar DNI",
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 4,
        regalo: "1 Shot o 1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Fridays",
        categoriaMarca: "Restaurante",
        colorMarca: "#E51937",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-fridays.png`,
            size: "75%",
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 1,
        regalo: "1 Helado",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "McDonald's",
        categoriaMarca: "FastFood",
        colorMarca: "#e50000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-mcdonalds.png`,
            size: "75%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños" 
        ]
    },
    {   
        id: 2,
        regalo: "1 Bebida Alta",
        regaloFull: "1 bebida con chispas de chocolate",
        nombreMarca: "Starbucks",
        categoriaMarca: "Cafetería",
        colorMarca: "#006341",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-starbucks.png`,
            size: "70%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños" 
        ]
    },
    {   
        id: 3,
        regalo: "1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Chilli's",
        categoriaMarca: "Restaurante",
        colorMarca: "#F6EADE",
        logoMarca: {
            url: `${imageBasePath}/logos-marcas/logo-chillis.png`,
            size: "",
        },
        condicionesRegalo: [
            "Presentar DNI",
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 4,
        regalo: "1 Shot o 1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Fridays",
        categoriaMarca: "Restaurante",
        colorMarca: "#E51937",
        logoMarca: {
            url: `${imageBasePath}/logos-marcas/logo-fridays.png`,
            size: "75%",
        },
        condicionesRegalo: [
            "Presentar DNI",
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ],
    },
    {   
        id: 1,
        regalo: "1 Helado",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "McDonald's",
        categoriaMarca: "FastFood",
        colorMarca: "#e50000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-mcdonalds.png`,
            size: "75%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 2,
        regalo: "1 Bebida Alta",
        regaloFull: "1 bebida con chispas de chocolate",
        nombreMarca: "Starbucks",
        categoriaMarca: "Cafetería",
        colorMarca: "#006341",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-starbucks.png`,
            size: "70%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños" 
        ]
    },
    {   
        id: 3,
        regalo: "1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Chilli's",
        categoriaMarca: "Restaurante",
        colorMarca: "#F6EADE",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-chillis.png`,
            size: "",
        },
        condicionesRegalo: [
            "Presentar DNI",
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 4,
        regalo: "1 Shot o 1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Fridays",
        categoriaMarca: "Restaurante",
        colorMarca: "#E51937",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-fridays.png`,
            size: "75%",
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 1,
        regalo: "1 Helado",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "McDonald's",
        categoriaMarca: "FastFood",
        colorMarca: "#e50000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-mcdonalds.png`,
            size: "75%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños" 
        ]
    },
    {   
        id: 2,
        regalo: "1 Bebida Alta",
        regaloFull: "1 bebida con chispas de chocolate",
        nombreMarca: "Starbucks",
        categoriaMarca: "Cafetería",
        colorMarca: "#006341",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-starbucks.png`,
            size: "70%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños" 
        ]
    },
    {   
        id: 3,
        regalo: "1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Chilli's",
        categoriaMarca: "Restaurante",
        colorMarca: "#F6EADE",
        logoMarca: {
            url: `${imageBasePath}/logos-marcas/checo.jpg`,
            size: "",
        },
        condicionesRegalo: [
            "Presentar DNI",
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 4,
        regalo: "1 Shot o 1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Fridays",
        categoriaMarca: "Restaurante",
        colorMarca: "#E51937",
        logoMarca: {
            url: `${imageBasePath}/logos-marcas/logo-fridays.png`,
            size: "75%",
        },
        condicionesRegalo: [
            "Presentar DNI",
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ],
    },
    {   
        id: 1,
        regalo: "1 Helado",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "McDonald's",
        categoriaMarca: "FastFood",
        colorMarca: "#e50000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-mcdonalds.png`,
            size: "75%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 58,
        regalo: "1 Bebida Alta",
        regaloFull: "1 bebida con chispas de chocolate",
        nombreMarca: "Starbucks",
        categoriaMarca: "Cafetería",
        colorMarca: "#006341",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-starbucks.png`,
            size: "70%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños" 
        ]
    },
    {   
        id: 59,
        regalo: "1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Chilli's",
        categoriaMarca: "Restaurante",
        colorMarca: "#F6EADE",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-chillis.png`,
            size: "",
        },
        condicionesRegalo: [
            "Presentar DNI",
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 60,
        regalo: "1 Shot o 1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Fridays",
        categoriaMarca: "Restaurante",
        colorMarca: "#E51937",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-fridays.png`,
            size: "75%",
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 61,
        regalo: "1 Helado",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "McDonald's",
        categoriaMarca: "FastFood",
        colorMarca: "#e50000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-mcdonalds.png`,
            size: "75%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños" 
        ]
    },
    {   
        id: 62,
        regalo: "1 Bebida Alta",
        regaloFull: "1 bebida con chispas de chocolate",
        nombreMarca: "Starbucks",
        categoriaMarca: "Cafetería",
        colorMarca: "#006341",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-starbucks.png`,
            size: "70%"
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumo previo",
            "Válido en el día de tu cumpleaños" 
        ]
    },
    {   
        id: 63,
        regalo: "1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Chilli's",
        categoriaMarca: "Restaurante",
        colorMarca: "#F6EADE",
        logoMarca: {
            url: `${imageBasePath}/logos-marcas/logo-chillis.png`,
            size: "",
        },
        condicionesRegalo: [
            "Presentar DNI",
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 64,
        regalo: "1 Shot o 1 Postre",
        regaloFull: "1 helado con chispas de chocolate",
        nombreMarca: "Fridays",
        categoriaMarca: "Restaurante",
        colorMarca: "#E51937",
        logoMarca: {
            url: `${imageBasePath}/logos-marcas/logo-fridays.png`,
            size: "75%",
        },
        condicionesRegalo: [
            "Presentar DNI",
            "Consumo previo",
            "Válido en el día de tu cumpleaños"
        ],
    },
];
export default dataRegalos;