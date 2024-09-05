const productos = [
    {
        "id": 1,
        "title": "Monitor de computadora de pantalla plana negro junto a un teclado de computadora blanco",
        "url": "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHwxfHxjb21wdXRhZG9yYSUyMFBDfGVufDB8fHx8MTcyNTQ4MzY0NXww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "Monitor y teclado",
        "price": 400,
        "category_id": '1'
    }, {
        "id": 2,
        "title": "CPU completo de computadora",
        "url": "https://images.unsplash.com/photo-1591238372338-22d30c883a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHwyfHxjb21wdXRhZG9yYSUyMFBDfGVufDB8fHx8MTcyNTQ4MzY0NXww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "Construcción de computadora",
        "price": 320,
        "category_id": '1'
    }, {
        "id": 3,
        "title": "Macbook plateada",
        "url": "https://images.unsplash.com/photo-1607459726370-d1abfcda1370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHwzfHxjb21wdXRhZG9yYSUyMFBDfGVufDB8fHx8MTcyNTQ4MzY0NXww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "Macbook plateada",
        "price": 450,
        "category_id": '1'
    }, {
        "id": 4,
        "title": "Macbook pro",
        "url": "https://images.unsplash.com/photo-1572274407649-6cb883740677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHw0fHxjb21wdXRhZG9yYSUyMFBDfGVufDB8fHx8MTcyNTQ4MzY0NXww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "MacBook Pro",
        "price": 480,
        "category_id": '1'
    }, {
        "id": 5,
        "title": "macbook pro 2",
        "url": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHw1fHxjb21wdXRhZG9yYSUyMFBDfGVufDB8fHx8MTcyNTQ4MzY0NXww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "Macbook Air retina 2018",
        "price": 500,
        "category_id": '1'
    }, {
        "id": 6,
        "title": "macbook pro 3",
        "url": "https://images.unsplash.com/photo-1601524909162-ae8725290836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHw2fHxjb21wdXRhZG9yYSUyMFBDfGVufDB8fHx8MTcyNTQ4MzY0NXww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "macbook pro en mesa blanca",
        "price": 350,
        "category_id": '1'
    }, {
        "id": 7,
        "title": "Computadora portátil Microsoft",
        "url": "https://images.unsplash.com/photo-1587613842560-0816bd27a096?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHw2fHxtaWNyb3NvZnR8ZW58MHx8fHwxNzI1NTUzODI1fDA&ixlib=rb-4.0.3&q=80&w=400",
        "description": "Microsoft Surface Laptop 3",
        "price": 400,
        "category_id": '1'
    }, {
        "id": 8,
        "title": "Computadora portátil Microsoft",
        "url": "https://images.unsplash.com/photo-1601751839329-dd71d6428a5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHw1fHxtb3VzZSUyMFBDfGVufDB8fHx8MTcyNTU1MzY0M3ww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "Para estudiar",
        "price": 350,
        "category_id": '1'
    }, {
        "id": 9,
        "title": "Computadora portátil con Windows 11",
        "url": "https://images.unsplash.com/photo-1624571395775-253d9666612b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHw5fHxjb21wdXRhZG9yYSUyMFBDfGVufDB8fHx8MTcyNTQ4MzY0NXww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "persona que trabaja en una computadora con Windows 11",
        "price": 100,
        "category_id": '1'
    }, {
        "id": 10,
        "title": "computadora portátil al lado del monitor con teclado y mouse",
        "url": "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHwxMHx8Y29tcHV0YWRvcmElMjBQQ3xlbnwwfHx8fDE3MjU0ODM2NDV8MA&ixlib=rb-4.0.3&q=80&w=400",
        "description": "Lo que veo a diario mientras me esfuerzo por mejorar como desarrollador autodidacta",
        "price": 120,
        "category_id": '1'
    },
    {
        "id": 11,
        "title": "Auriculares negros Denon",
        "url": "https://images.unsplash.com/photo-1532778597765-a2a1c4dda1ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkcGhvbmV8ZW58MHx8fHwxNzI1NTUzOTI4fDA&ixlib=rb-4.0.3&q=80&w=400",
        "description": "Auriculares negros",
        "price": 150,
        "category_id": '2'
    }, {
        "id": 12,
        "title": "Auriculares negros Sony",
        "url": "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkcGhvbmVzfGVufDB8fHx8MTcyNTQ4Mzg2MHww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "Auriculares marca Sony",
        "price": 100,
        "category_id": '2'
    }, {
        "id": 13,
        "title": "auriculares bluetooth negros y grises earbuds",
        "url": "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmVzfGVufDB8fHx8MTcyNTQ4Mzg2MHww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "Auriculares negros True Wireless",
        "price": 80,
        "category_id": '2'
    }, {
        "id": 14,
        "title": "auriculares inalámbricos genéricos",
        "url": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmVzfGVufDB8fHx8MTcyNTQ4Mzg2MHww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "Fotografía plana de auriculares inalámbricos",
        "price": 120,
        "category_id": '2'
    }, {
        "id": 15,
        "title": "Auriculares earbuds AREA BI",
        "url": "https://images.unsplash.com/photo-1606400082777-ef05f3c5cde2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHw1fHxoZWFkcGhvbmVzfGVufDB8fHx8MTcyNTQ4Mzg2MHww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "Auriculares negros True Wireless",
        "price": 30,
        "category_id": '2'
    }, {
        "id": 16,
        "title": "Auriculares con iPad",
        "url": "https://images.unsplash.com/photo-1598698287642-9ceaf9a7a011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHw2fHxoZWFkcGhvbmVzfGVufDB8fHx8MTcyNTQ4Mzg2MHww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "Auriculares en iPad con Apple Music",
        "price": 50,
        "category_id": '2'
    }, {
        "id": 17,
        "title": "Auriculares JBL headphones",
        "url": "https://images.unsplash.com/photo-1661983228625-f4619e57f66b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHw3fHxoZWFkcGhvbmVzfGVufDB8fHx8MTcyNTQ4Mzg2MHww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "Marca JBL",
        "price": 80,
        "category_id": '2'
    }, {
        "id": 18,
        "title": "Auriculares blancos Beats",
        "url": "https://images.unsplash.com/photo-1491927570842-0261e477d937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHx8fHwxNzI1NTUzOTI4fDA&ixlib=rb-4.0.3&q=80&w=400",
        "description": "Auriculares blancos marca Beats",
        "price": 99,
        "category_id": '2'
    }, {
        "id": 19,
        "title": "auriculares sony blancos con cable",
        "url": "https://images.unsplash.com/photo-1577174881658-0f30ed549adc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHwxMHx8aGVhZHBob25lc3xlbnwwfHx8fDE3MjU0ODM4NjB8MA&ixlib=rb-4.0.3&q=80&w=400",
        "description": "Headset auriculares sony blancos con cable",
        "price": 45,
        "category_id": '2'
    },
    {
        "id": 20,
        "title": "Telefono Samsung A24",
        "url": "https://images.unsplash.com/photo-1720048171731-15b3d9d5473f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MXwxfHNlYXJjaHwxfHxzbWFydHBob25lfGVufDB8fHx8MTcyNTQ4Mzk1OHww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "Con Android 3.0",
        "price": 199,
        "category_id": '3'
    }, {
        "id": 21,
        "title": "Telefono negro con Android",
        "url": "https://images.unsplash.com/photo-1596742578443-7682ef5251cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHwyfHxzbWFydHBob25lfGVufDB8fHx8MTcyNTQ4Mzk1OHww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "Team google.",
        "price": 250,
        "category_id": '3'
    }, {
        "id": 22,
        "title": "teléfono inteligente Android negro",
        "url": "https://images.unsplash.com/photo-1600087626014-e652e18bbff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHwzfHxzbWFydHBob25lfGVufDB8fHx8MTcyNTQ4Mzk1OHww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "¡Android 11 ya está aquí! Esta es la pantalla de presentación oficial de Android 11",
        "price": 400,
        "category_id": '3'
    }, {
        "id": 23,
        "title": "teléfono inteligente Android negro sobre mesa blanca",
        "url": "https://images.unsplash.com/photo-1603184017968-953f59cd2e37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHw1fHxzbWFydHBob25lfGVufDB8fHx8MTcyNTQ4Mzk1OHww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "Hey Siri...",
        "price": 450,
        "category_id": '3'
    }, {
        "id": 24,
        "title": "Persona sosteniendo un teléfono inteligente Android negro",
        "url": "https://images.unsplash.com/photo-1598965402089-897ce52e8355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHw2fHxzbWFydHBob25lfGVufDB8fHx8MTcyNTQ4Mzk1OHww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "Persona sosteniendo un teléfono inteligente Android negro",
        "price": 500,
        "category_id": '3'
    }, {
        "id": 25,
        "title": "Smartphone en blanco y negro que muestra la búsqueda de Google",
        "url": "https://images.unsplash.com/photo-1598618826732-fb2fdf367775?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHw3fHxzbWFydHBob25lfGVufDB8fHx8MTcyNTQ4Mzk1OHww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "Tomar una foto con un teléfono inteligente Android de Google",
        "price": 399,
        "category_id": '3'
    }, {
        "id": 26,
        "title": "ipod touch azul",
        "url": "https://images.unsplash.com/photo-1600087626120-062700394a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHw4fHxzbWFydHBob25lfGVufDB8fHx8MTcyNTQ4Mzk1OHww&ixlib=rb-4.0.3&q=80&w=400",
        "description": "¡Android 11 ya está aquí! Esta es la pantalla de presentación oficial de Android 11",
        "price": 400,
        "category_id": '3'
    }, {
        "id": 27,
        "title": "iPhone 7 negro sobre superficie marrón",
        "url": "https://images.unsplash.com/photo-1517765371796-5bd3a7d30a29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDYyNjZ8MHwxfHNlYXJjaHwxMHx8c21hcnRwaG9uZXxlbnwwfHx8fDE3MjU0ODM5NTh8MA&ixlib=rb-4.0.3&q=80&w=400",
        "description": "iPhone 7 negro sobre superficie marrón",
        "price": 450,
        "category_id": '3'
    }
]
export const getProducts = () => {
    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve(productos)
        }, 500)
    })
}
export const getProductById = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve(productos.find(prod => prod.id === Number(id)))
        }, 500)
    })
}
export const getProductsByCategoryId = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve(productos.filter(prod => prod.category_id === id))
        }, 500)
    })
}