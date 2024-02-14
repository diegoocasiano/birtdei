const imageBasePath = process.env.NODE_ENV === 'development' ? '/public/' : '/react-components/dist/';

const dataRegalos = [
    {   
        id: 1,
        regalo: "1 Helado",
        regaloFull: "1 Helado",
        nombreMarca: "McDonald's",
        linkInsta: "https://www.instagram.com/mcdonalds_peru",
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
        ]
    },
    {   
        id: 37,
        regalo: "15% dsct",
        regaloFull: "15% dsct",
        nombreMarca: "Adidas",
        linkInsta: "https://www.instagram.com/adidaspe",
        categoriaMarca: "Ropa deportiva",
        colorMarca: "#000000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/adidas-logo.png`,
            size: "78%",
            sizeLittle: "72%",
        },
        condicionesRegalo: [
            "Regístrate en Adiclub a través de www.adidas.pe",
            "Válido el día de tu cumple (te llegará un correo)",
        ]
    },
    {   
        id: 2,
        regalo: "1 Bebida alta",
        regaloFull: "1 Bebida alta",
        nombreMarca: "Starbucks",
        linkInsta: "https://www.instagram.com/starbuckspe",
        categoriaMarca: "Cafetería",
        colorMarca: "#006341",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-starbucks.png`,
            size: "80%",
            sizeLittle: "75%",
        },
        condicionesRegalo: [
            "Ser parte de Starbucks Rewards: adquiere la Starbucks Card en cualquiera de sus tiendas, regístrala en la app de Starbucks y realiza un depósito mínimo de 20 soles para activarla. ¡Eso es todo!",
            "Válido en todo el mes de tu cumpleaños",
        ]
    },
    {   
        id: 26,
        regalo: "1 Helado",
        regaloFull: "1 Helado",
        nombreMarca: "Pasta",
        linkInsta: "https://www.instagram.com/pasta.pe",
        categoriaMarca: "Restaurante",
        colorMarca: "#ffffff",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/pasta-logo.png`,
            size: "70%",
            sizeLittle: "74%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Consumir antes",
            "Válido el día de tu cumple",
        ]
    },
    {   
        id: 8,
        regalo: "1 Entrada 2D",
        regaloFull: "1 Entrada 2D",
        nombreMarca: "Cineplanet",
        linkInsta: "https://www.instagram.com/cineplanetoficial",
        categoriaMarca: "Cine",
        colorMarca: "#003162",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/cineplanet-logo.png`,
            size: "85%",
            sizeLittle: "80%",
        },
        condicionesRegalo: [
            "Ser miembro del programa Socio Cineplanet",
            "Válido hasta 3 días después de tu cumple",
        ]
    },
    {   
        id: 50,
        regalo: "15% dsct en...",
        regaloFull: "15% dsct en todos los productos",
        nombreMarca: "Prodigiosa",
        linkInsta: "https://www.instagram.com/prodigiosa.pe",
        categoriaMarca: "Lencería",
        colorMarca: "#0f151c",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/prodigiosa-logo.png`,
            size: "94%",
            sizeLittle: "86%",
        },
        condicionesRegalo: [
            "Tener +18 años.",
            "Enviar una foto del lado frontal de tu DNI al WhatsApp de Prodigiosa (para verificar tu fecha de cumpleaños).",
            "Disponible en toda la semana de tu cumple (desde 3 días antes y hasta 3 días después).",
            "No aplica sobre otras promociones.",

        ]
    },
    {   
        id: 33,
        regalo: "50% dsct",
        regaloFull: "50% dsct",
        nombreMarca: "Rodizio",
        linkInsta: "https://www.instagram.com/rodizio_peru",
        categoriaMarca: "Buffet",
        colorMarca: "#ffebca",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/rodizio-logo.png`,
            size: "76%",
            sizeLittle: "80%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Válido  7 días antes y 7 días después de tu cumple (incluyendo el día de tu cumple)",
        ]
    },
    {   
        id: 51,
        regalo: "2x1 en café peruano de especialidad",
        regaloFull: "2x1 en café peruano de especialidad",
        nombreMarca: "Cafeteria.pe",
        linkInsta: "https://www.instagram.com/cafeteria.pe",
        categoriaMarca: "Café",
        colorMarca: "#ffffff",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/cafeteria-logo.png`,
            size: "80%",
            sizeLittle: "80%",
        },
        condicionesRegalo: [
            "Disponible con los siguientes productos: Café \"Ayacuchano\" y Café \"El Abuelo\".",
            "Enviar una foto del lado frontal de tu DNI al WhatsApp de Cafeteria.pe (para verificar tu fecha de cumpleaños).",
            "No incluye el precio del delivery.",
        ]
    },
    // {   
    //     id: 52,
    //     regalo: "10% dsct",
    //     regaloFull: "10% dsct",
    //     nombreMarca: "VK Studio",
    //     linkInsta: "https://www.instagram.com/vkstudio.hn",
    //     categoriaMarca: "Salón de uñas",
    //     colorMarca: "#e64f94",
    //     logoMarca: {
    //         url: `${imageBasePath}logos-marcas/kvstudio-logo.svg`,
    //         size: "75%",
    //         sizeLittle: "75%",
    //     },
    //     condicionesRegalo: [
    //         "Válido todo el mes de tu cumpleaños",
    //         "Disponible en: Kapping Rubber, Kapping polygel y Polygel en uña natural",
    //         "No válido para extensiones artificiales",
    //         "Enviar una foto del lado frontal de tu DNI al WhatsApp de Cafeteria.pe (para verificar tu fecha de cumpleaños).",
    //     ]
    // },
    {   
        id: 9,
        regalo: "1 Pancake especial",
        regaloFull: "1 Pancake especial",
        nombreMarca: "IHOP",
        linkInsta: "https://www.instagram.com/ihopperu",
        categoriaMarca: "Restaurante",
        colorMarca: "#1598D5",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/ihop-logo.png`,
            size: "80%",
            sizeLittle: "75%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Consumir antes",
            "Válido el día de tu cumple",
        ]
    },

    {   
        id: 28,
        regalo: "1 Postre sorpresa",
        regaloFull: "1 Postre sorpresa",
        nombreMarca: "Museo Larco Café",
        linkInsta: "https://www.instagram.com/museolarcocafe",
        categoriaMarca: "Café/Restaurante",
        colorMarca: "#772037",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/larcoCafe-logo.png`,
            size: "72%",
            sizeLittle: "76%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Consumir antes",
            "Válido el día de tu cumple",
        ]
    },
    {   
        id: 3,
        regalo: "1 Postre",
        regaloFull: "1 Postre",
        nombreMarca: "Chilli's",
        linkInsta: "https://www.instagram.com/chilisperu",
        categoriaMarca: "Restaurante",
        colorMarca: "#F6EADE",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-chillis.png`,
            size: "77%",
            sizeLittle: "75%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Consumir o comprar",
            "Válido el día de tu cumple",
        ]
    },
    {   
        id: 25,
        regalo: "1 Copa de champagne",
        regaloFull: "1 Copa de champagne",
        nombreMarca: "Carnaval",
        linkInsta: "https://www.instagram.com/carnavalbar",
        categoriaMarca: "Bar",
        colorMarca: "#ffffff",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/carnaval-logo.png`,
            size: "70%",
            sizeLittle: "74%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Consumir antes",
            "Válido el día de tu cumple",
        ]
    },
    {   
        id: 4,
        regalo: "1 Shot o 1 Postre",
        regaloFull: "1 Shot o 1 Postre",
        nombreMarca: "Fridays",
        linkInsta: "https://www.instagram.com/fridaysperu",
        categoriaMarca: "Restaurante",
        colorMarca: "#E31836",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/logo-fridays.png`,
            size: "80%",
            sizeLittle: "80%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Consumir o comprar",
            "Válido el día de tu cumple",
        ]
    },
    
    {   
        id: 10,
        regalo: "1 Brownie c/ helado de vainilla",
        regaloFull: "1 Brownie de chocolate c/ helado de vainilla",
        nombreMarca: "Osaka",
        linkInsta: "https://www.instagram.com/osakanikkei",
        categoriaMarca: "Restaurante",
        colorMarca: "#000000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/osaka-logo.png`,
            size: "85%",
            sizeLittle: "75%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Consumir antes",
            "Válido el día de tu cumple",
        ]
    },
    {   
        id: 34,
        regalo: "20% dsct",
        regaloFull: "20% dsct",
        nombreMarca: "Todomoda",
        linkInsta: "https://www.instagram.com/todomodaoficial",
        categoriaMarca: "Accesorios",
        colorMarca: "#ffffff",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/todomoda-logo.png`,
            size: "76%",
            sizeLittle: "80%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Válido  7 días antes y 7 días después de tu cumple (incluyendo el día de tu cumple)"
        ]
    },
    {   
        id: 5,
        regalo: "1 Minifigura + 1 Postal",
        regaloFull: "1 Minifigura + 1 Postal",
        nombreMarca: "Lego",
        linkInsta: "https://www.instagram.com/legostore_peru",
        categoriaMarca: "Juguetería",
        colorMarca: "#E3000b",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/lego-logo.png`,
            size: "78%",
            sizeLittle: "80%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Comprar antes",
            "Válido el día de tu cumpleaños",
        ]
    },
    
    {   
        id: 6,
        regalo: "1 Brownie con helado",
        regaloFull: "1 Brownie con helado",
        nombreMarca: "Juicy Lucy",
        linkInsta: "https://www.instagram.com/juicylucyperu",
        categoriaMarca: "Restaurante",
        colorMarca: "#1C1C1C",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/juicyLucy-logo.png`,
            size: "78%",
            sizeLittle: "80%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Comprar o consumir",
            "Válido el día de tu cumple",
        ]
    },
    
    {   
        id: 7,
        regalo: "Ingreso gratis",
        regaloFull: "Ingreso gratis",
        nombreMarca: "Mr. Joy",
        linkInsta: "https://www.instagram.com/mrjoype",
        categoriaMarca: "Juegos",
        colorMarca: "#6F2594",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/mrJoy-logo.png`,
            size: "80%",
            sizeLittle: "72%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Válido el día de tu cumple",
        ]
    },
    
    
    {   
        id: 24,
        regalo: "1 Postre",
        regaloFull: "1 Postre",
        nombreMarca: "Madam Tusan",
        linkInsta: "https://www.instagram.com/madamtusanperu",
        categoriaMarca: "Restaurante chino",
        colorMarca: "#ffffff",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/madamTusan-logo.png`,
            size: "78%",
            sizeLittle: "80%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Consumir antes",
            "Válido el día de tu cumple",
        ]
    },
    {   
        id: 11,
        regalo: "1 Copa de helados + 1 Caja de pastel",
        regaloFull: "1 Copa de helados + 1 Caja de pastel",
        nombreMarca: "La Bistecca",
        linkInsta: "https://www.instagram.com/labisteccaperu",
        categoriaMarca: "Buffet",
        colorMarca: "#A0000A",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/laBistecca-logo.png`,
            size: "82%",
            sizeLittle: "80%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Consumir antes",
            "Válido el día de tu cumple",
        ]
    },
   
    {   
        id: 12,
        regalo: "1 Postre",
        regaloFull: "1 Postre",
        nombreMarca: "Siete Sopas",
        linkInsta: "https://www.instagram.com/sietesopas",
        categoriaMarca: "Restaurante",
        colorMarca: "#e9dacc",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/sieteSopas-logo.png`,
            size: "88%",
            sizeLittle: "83%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Consumir antes",
            "Válido el día de tu cumple",
        ]
    },
    
    {   
        id: 13,
        regalo: "1 Helado",
        regaloFull: "1 Helado",
        nombreMarca: "Pardos Chicken",
        linkInsta: "https://www.instagram.com/pardoschicken",
        categoriaMarca: "Restaurante",
        colorMarca: "#000000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/pardosChicken-logo.png`,
            size: "80%",
            sizeLittle: "80%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Consumir antes",
            "Válido el día de tu cumple",
        ]
    },
    {   
        id: 14,
        regalo: "1 Postre especial",
        regaloFull: "Crunch de almendra con brownie, chantillí, grageas de colores, salsa de chocolate y manjar",
        nombreMarca: "Papacho's",
        linkInsta: "https://www.instagram.com/papachosperu",
        categoriaMarca: "Restaurante",
        colorMarca: "#F4E02A",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/papachos-logo.png`,
            size: "80%",
            sizeLittle: "80%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Consumir antes",
            "Válido el día de tu cumple",
        ]
    },
    {   
        id: 18,
        regalo: "20% dsct",
        regaloFull: "20% dsct",
        nombreMarca: "Isadora",
        linkInsta: "https://www.instagram.com/isadorastyle_peru",
        categoriaMarca: "Accesorios",
        colorMarca: "#fff",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/isadora-logo.png`,
            size: "80%",
            sizeLittle: "82%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Comprar en una de sus tiendas físicas",
            "Válido desde una semana antes y después de tu cumple",
        ]
    },
    {   
        id: 16,
        regalo: "1 Cóctel o bebida sin alcohol",
        regaloFull: "1 Cóctel o bebida sin alcohol",
        nombreMarca: "Rustica",
        linkInsta: "https://www.instagram.com/rusticaperu",
        categoriaMarca: "Restaurante",
        colorMarca: "#000000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/rustica-logo.png`,
            size: "85%",
            sizeLittle: "82%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Consumir antes",
            "Válido el día de tu cumple",
        ]
    },
   
    {   
        id: 17,
        regalo: "1 Tempura de helado",
        regaloFull: "1 Tempura de helado",
        nombreMarca: "Doomo Saltado",
        linkInsta: "https://www.instagram.com/doomosaltado",
        categoriaMarca: "Restaurante",
        colorMarca: "#101b31",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/doomoSaltado-logo.png`,
            size: "80%",
            sizeLittle: "82%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Consumir antes",
            "Válido el día de tu cumple",
        ]
    },
    {   
        id: 22,
        regalo: "1 Cóctel + 1 corona de rey o reina",
        regaloFull: "1 Cóctel + 1 corona de rey o reina",
        nombreMarca: "El Olimpo",
        linkInsta: "https://www.instagram.com/el.olimpo.restobar",
        categoriaMarca: "Restobar",
        colorMarca: "#ffffff",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/elOlimpoRestobar-logo.png`,
            size: "86%",
            sizeLittle: "88%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Consumir antes",
            "Válido el día de tu cumple",
        ]
    },
    {   
        id: 19,
        regalo: "1 Crema volteada o 1 postre sorpresa",
        regaloFull: "Crema volteada o postre sorpresa",
        nombreMarca: "Donde Walter",
        linkInsta: "https://www.instagram.com/dondewalter.pe",
        categoriaMarca: "Restaurante",
        colorMarca: "#cc7444",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/dondeWalter-logo.png`,
            size: "94%",
            sizeLittle: "90%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Consumir antes",
            "Válido el día de tu cumple",
        ]
    },
    
    
    {   
        id: 20,
        regalo: "1 Helado",
        regaloFull: "1 Helado",
        nombreMarca: "Primos Chicken Bar",
        linkInsta: "https://www.instagram.com/primoschickenbar",
        categoriaMarca: "Restobar",
        colorMarca: "#1e201e",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/primosChicken-logo.png`,
            size: "92%",
            sizeLittle: "84%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Consumir antes",
            "Válido el día de tu cumple",
        ]
    },
    
    {   
        id: 21,
        regalo: "1 Ramen o sorpresa",
        regaloFull: "1 Ramen o sorpresa",
        nombreMarca: "Shimaya Ramen",
        linkInsta: "https://www.instagram.com/shimaya_ramen",
        categoriaMarca: "Restaurante",
        colorMarca: "#000000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/shimayaRamen-logo.png`,
            size: "96%",
            sizeLittle: "86%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Consumir antes",
            "Válido el día de tu cumple",
        ]
    },
    
    
    
    {  
        id: 30,
        regalo: "1 Brownie con helado",
        regaloFull: "1 Brownie con helado",
        nombreMarca: "Mis Costillitas",
        linkInsta: "https://www.instagram.com/miscostillitas",
        categoriaMarca: "Restaurante",
        colorMarca: "#ffffff",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/misCostillitas-logo.png`,
            size: "78%",
            sizeLittle: "78%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Consumir antes",
            "Válido el día de tu cumple",
        ]
    },
    {   
        id: 36,
        regalo: "20% dsct",
        regaloFull: "20% dsct",
        nombreMarca: "Topitop",
        linkInsta: "https://www.instagram.com/topitop_pe",
        categoriaMarca: "Moda",
        colorMarca: "#000000",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/topitop-logo.png`,
            size: "70%",
            sizeLittle: "74%",
        },
        condicionesRegalo: [
            "Un mes antes de tu cumple, crea tu cuenta en www.topitop.pe. Después, registra tu correo en el formulario para recibir promociones/novedades.",
            "Regalo válido durante todo el mes de tu cumple (solo puedes canjearlo una vez) y exclusivo para compras online",
        ]
    },
    
    
    
    {   
        id: 32,
        regalo: "1 Copa de helado de vainilla bañada en fudge",
        regaloFull: "1 Copa de helado de vainilla bañada en fudge",
        nombreMarca: "Pizza Hut",
        linkInsta: "https://www.instagram.com/pizzahut_peru",
        categoriaMarca: "Restaurante",
        colorMarca: "#ffffff",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/pizzaHut-logo.png`,
            size: "70%",
            sizeLittle: "74%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Consumo mínimo de S/30 en cualquiera de los restaurantes de Pizza Hut",
            "Válido el día de tu cumple",
        ]
    },
    {   
        id: 27,
        regalo: "1 Postre sorpresa",
        regaloFull: "1 Postre sorpresa",
        nombreMarca: "La Leña",
        linkInsta: "https://www.instagram.com/lalenaperu",
        categoriaMarca: "Restaurante",
        colorMarca: "#ea0111",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/laLena-logo.png`,
            size: "70%",
            sizeLittle: "76%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Consumir antes",
            "Válido el día de tu cumple",
        ]
    },
    {   
        id: 31,
        regalo: "1 Postre sorpresa",
        regaloFull: "1 Postre Sorpresa",
        nombreMarca: "Pancho Fierro",
        linkInsta: "https://www.instagram.com/panchofierro.pe",
        categoriaMarca: "Restaurante",
        colorMarca: "#fbf0de",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/panchoFierro-logo.png`,
            size: "70%",
            sizeLittle: "74%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Consumir antes",
            "Válido el día de tu cumple",
        ]
    },
    {   
        id: 15,
        regalo: "1 Porción de helado",
        regaloFull: "1 Porción de helado",
        nombreMarca: "Barrio",
        linkInsta: "https://www.instagram.com/barrio.pe",
        categoriaMarca: "Restaurante",
        colorMarca: "#FFFFFF",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/barrio-logo.png`,
            size: "80%",
            sizeLittle: "80%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Consumir antes",
            "Válido el día de tu cumple",
        ]
    },
    {   
        id: 35,
        regalo: "20% dsct",
        regaloFull: "20% dsct",
        nombreMarca: "Crepier",
        linkInsta: "https://www.instagram.com/crepier_official",
        categoriaMarca: "Accesorios",
        colorMarca: "#ffffff",
        logoMarca: {
            url: `${imageBasePath}logos-marcas/crepier-logo.png`,
            size: "76%",
            sizeLittle: "80%",
        },
        condicionesRegalo: [
            "Presentar tu DNI físico (Tener +18 años)",
            "Comprar en cualquiera de las tiendas físicas"
        ]
    },
    
    
     {   
         id: 38,
         regalo: "10% dsct",
         regaloFull: "10% dsct",
         nombreMarca: "Gotta",
         linkInsta: "https:www.instagram.com/gotta_peru",
         categoriaMarca: "Tienda de zapatos",
         colorMarca: "#000000",
         logoMarca: {
             url: `${imageBasePath}logos-marcas/gotta-logo.png`,
             size: "74%",
             sizeLittle: "76%",
         },
         condicionesRegalo: [
             "Crea una cuenta en www.gottaperu.com",
             "Válido el día de tu cumple (te llegará un correo)",
         ]
     },
    
    // {   
    //     id: 23,
    //     regalo: "1 Helado",
    //     regaloFull: "1 Helado",
    //     nombreMarca: "Edo Sushi Bar",
    //     linkInsta: "https://www.instagram.com/edosushibarperu",
    //     categoriaMarca: "Restaurante",
    //     colorMarca: "#000000",
    //     logoMarca: {
    //         url: `${imageBasePath}logos-marcas/edoSushiBar-logo.png`,
    //         size: "76%",
    //         sizeLittle: "80%",
    //     },
    //     condicionesRegalo: [
    //         "Presentar tu DNI físico (Tener +18 años)",
    //         "Consumir antes",
    //         "Válido el día de tu cumple",
    //     ]
    // },
    
    
    // {   
    //     id: 29,
    //     regalo: "1 Postre sorpresa",
    //     regaloFull: "1 Postre sorpresa",
    //     nombreMarca: "Señor Limón",
    //     linkInsta: "https://www.instagram.com/senorlimonoficial",
    //     categoriaMarca: "Restaurante",
    //     colorMarca: "#ffffff",
    //     logoMarca: {
    //         url: `${imageBasePath}logos-marcas/senorLimon-logo.png`,
    //         size: "78%",
    //         sizeLittle: "76%",
    //     },
    //     condicionesRegalo: [
    //         "Presentar tu DNI físico (Tener +18 años)",
    //         "Consumir antes",
    //         "Válido el día de tu cumple",
    //     ]
    // },
    
];
export default dataRegalos;