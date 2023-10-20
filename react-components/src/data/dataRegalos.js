const imageBasePath = process.env.NODE_ENV === 'development' ? '/public/' : '/react-components/dist/';

const dataRegalos = [
    {   
        id: 1,
        regalo: "1 Helado",
        regaloFull: "1 Helado",
        nombreMarca: "McDonald's",
        categoriaMarca: "Comida Rápida",
        colorMarca: "#e50000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-mcdonalds.png`,
            size: "70%",
            sizeLittle: "60%",
        },
        condicionesRegalo: [
            "Presentar DNI", 
            "Consumir o comprar",
            "Válido en el día de tu cumple"
        ]
    },
    {   
        id: 2,
        regalo: "1 Bebida alta",
        regaloFull: "1 Bebida alta",
        nombreMarca: "Starbucks",
        categoriaMarca: "Cafetería",
        colorMarca: "#006341",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-starbucks.png`,
            size: "80%",
            sizeLittle: "75%",
        },
        // El cuadradito amarillo es un carácter invisible que ayuda a dar un salto de linea (alt + 255)
        condicionesRegalo: [
            "Ser parte de Starbucks Rewards: adquiere la Starbucks Card en cualquiera de sus tiendas, regístrala en la app de Starbucks y realiza un depósito mínimo de 20 soles para activarla.   ¡Eso es todo!",
        ]
    },
    {   
        id: 3,
        regalo: "1 Postre",
        regaloFull: "1 Postre",
        nombreMarca: "Chilli's",
        categoriaMarca: "Restaurante",
        colorMarca: "#F6EADE",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-chillis.png`,
            size: "77%",
            sizeLittle: "75%",
        },
        condicionesRegalo: [
            "Presentar tu DNI",
            "Consumir o comprar",
            "Válido en el día de tu cumple"
        ]
    },
    {   
        id: 4,
        regalo: "1 Shot o 1 Postre",
        regaloFull: "1 Shot o 1 Postre",
        nombreMarca: "Fridays",
        categoriaMarca: "Restaurante",
        colorMarca: "#E31836",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-fridays.png`,
            size: "80%",
            sizeLittle: "80%",
        },
        condicionesRegalo: [
            "Presentar tu DNI",
            "Consumir o comprar",
            "Válido en el día de tu cumple"
        ]
    },
    {   
        id: 5,
        regalo: "1 Minifigura + 1 Po...",
        regaloFull: "1 Minifigura + 1 Postal",
        nombreMarca: "Lego",
        categoriaMarca: "Juguetería",
        colorMarca: "#E3000b",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/lego-logo.png`,
            size: "78%",
            sizeLittle: "80%",
        },
        condicionesRegalo: [
            "Presentar tu DNI",
            "Comprar antes",
            "Válido en el día de tu cumpleaños"
        ]
    },
    {   
        id: 6,
        regalo: "1 Brownie c/ helado",
        regaloFull: "1 Brownie c/ helado",
        nombreMarca: "Juicy Lucy",
        categoriaMarca: "Restaurante",
        colorMarca: "#1C1C1C",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/juicyLucy-logo.png`,
            size: "78%",
            sizeLittle: "80%",
        },
        condicionesRegalo: [
            "Presentar tu DNI",
            "Comprar o consumir",
            "Válido en el día de tu cumple"
        ]
    },
    {   
        id: 7,
        regalo: "Ingreso gratis",
        regaloFull: "Ingreso gratis",
        nombreMarca: "Mr. Joy",
        categoriaMarca: "Juegos",
        colorMarca: "#6F2594",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/mrJoy-logo.png`,
            size: "80%",
            sizeLittle: "72%",
        },
        condicionesRegalo: [
            "Presentar tu DNI",
            "Válido en el día de tu cumple"
        ]
    },
    {   
        id: 8,
        regalo: "1 Entrada 2D",
        regaloFull: "Ingreso gratis",
        nombreMarca: "Cineplanet",
        categoriaMarca: "Cine",
        colorMarca: "#003162",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/cineplanet-logo.png`,
            size: "85%",
            sizeLittle: "80%",
        },
        condicionesRegalo: [
            "Ser miembro del programa Socio Cineplanet",
            "Válido hasta 3 días después de tu cumple"
        ]
    },
    {   
        id: 9,
        regalo: "1 Pancake especial",
        regaloFull: "Ingreso gratis",
        nombreMarca: "IHOP",
        categoriaMarca: "Restaurante",
        colorMarca: "#1598D5",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/ihop-logo.png`,
            size: "80%",
            sizeLittle: "75%",
        },
        condicionesRegalo: [
            "Presentar tu DNI",
            "Consumir antes",
            "Válido en el día de tu cumple"
        ]
    },
    {   
        id: 10,
        regalo: "1 Brownie c/ hel...",
        regaloFull: "1 Brownie de chocolate c/ helado de vainilla",
        nombreMarca: "Osaka",
        categoriaMarca: "Restaurante",
        colorMarca: "#000000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/osaka-logo.png`,
            size: "85%",
            sizeLittle: "75%",
        },
        condicionesRegalo: [
            "Presentar tu DNI",
            "Consumir antes",
            "Válido en el día de tu cumple"
        ]
    },
    {   
        id: 11,
        regalo: "1 Copa de Helados +",
        regaloFull: "1 Copa de helados + 1 Caja de pastel",
        nombreMarca: "La Bistecca",
        categoriaMarca: "Buffet",
        colorMarca: "#A0000A",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/laBistecca-logo.png`,
            size: "82%",
            sizeLittle: "80%",
        },
        condicionesRegalo: [
            "Presentar tu DNI",
            "Consumir antes",
            "Válido en el día de tu cumple"
        ]
    },
    {   
        id: 12,
        regalo: "1 Postre",
        regaloFull: "1 Postre",
        nombreMarca: "Siete Sopas",
        categoriaMarca: "Restaurante",
        colorMarca: "#e9dacc",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/sieteSopas-logo.png`,
            size: "88%",
            sizeLittle: "83%",
        },
        condicionesRegalo: [
            "Presentar tu DNI",
            "Consumir antes",
            "Válido en el día de tu cumple"
        ]
    },
    {   
        id: 13,
        regalo: "1 Helado",
        regaloFull: "1 Helado",
        nombreMarca: "Pardos Chicken",
        categoriaMarca: "Restaurante",
        colorMarca: "#000000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/pardosChicken-logo.png`,
            size: "80%",
            sizeLittle: "80%",
        },
        condicionesRegalo: [
            "Presentar tu DNI",
            "Consumir antes",
            "Válido en el día de tu cumple"
        ]
    },
    {   
        id: 14,
        regalo: "1 Postre especial...",
        regaloFull: "Un crunch de almendra con brownie, chantillí, grageas de colores, salsa de chocolate y manjar",
        nombreMarca: "Papacho's",
        categoriaMarca: "Restaurante",
        colorMarca: "#F4E02A",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/papachos-logo.png`,
            size: "80%",
            sizeLittle: "80%",
        },
        condicionesRegalo: [
            "Presentar tu DNI",
            "Consumir antes",
            "Válido en el día de tu cumple"
        ]
    },
    {   
        id: 15,
        regalo: "1 Porción de helado",
        regaloFull: "1 Porción de helado",
        nombreMarca: "Barrio",
        categoriaMarca: "Restaurante",
        colorMarca: "#FFFFFF",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/barrio-logo.png`,
            size: "80%",
            sizeLittle: "80%",
        },
        condicionesRegalo: [
            "Presentar tu DNI",
            "Consumir antes",
            "Válido en el día de tu cumple"
        ]
    },
    {   
        id: 16,
        regalo: "1 Cóctel o bebida...",
        regaloFull: "1 Cóctel o bebida sin alcohol",
        nombreMarca: "Rustica",
        categoriaMarca: "Restaurante",
        colorMarca: "#000000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/rustica-logo.png`,
            size: "85%",
            sizeLittle: "82%",
        },
        condicionesRegalo: [
            "Presentar tu DNI",
            "Consumir antes",
            "Válido en el día de tu cumple"
        ]
    },
    
];
export default dataRegalos;