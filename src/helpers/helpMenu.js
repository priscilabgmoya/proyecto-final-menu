import axios from 'axios'




const fetchDataFood = () => {
  axios.get('https://localhost/')
  console.log(a)
}

fetchDataFood()




const a = {
  "menu": [
    {
      nombre: "Pizza Marguerita Grande",
      estado: null,
      precio: 3000,
      detalle: "Salsa de tomate y muzzarella",
      categoria: "pizza",
      img: "https://images.deliveryhero.io/image/pedidosya/products/d03c4737-893b-40a4-8e61-750e02a20f5d.jpg?quality=90&width=1440&webp=1"
    },
    {
      nombre: "Pizza Fugazzeta Grande",
      estado: null,
      precio: 3200,
      detalle: "Muzzarella y cebolla",
      categoria: "pizza",
      img: "https://images.deliveryhero.io/image/pedidosya/products/07e8a9d9-dd85-4583-aaa4-0c52214a0c8a.jpg?quality=90&width=1440&webp=1"
    },
    {
      nombre: "Sándwich de milanesa",
      estado: null,
      precio: 1620,
      detalle: "Milanesa de carne, lechuga, tomate, mayonesa hellmans y savora",
      categoria: "Sandwich",
      img: "https://images.deliveryhero.io/image/pedidosya/products/a330544f-255b-4fe0-90c6-dc0e73e73933.jpg?quality=90&width=1440&webp=1"
    },
    {
      nombre: "Lomito de carne",
      estado: null,
      precio: 1710,
      detalle: "Lomo de carne",
      categoria: "Sandwich",
      img: "https://images.deliveryhero.io/image/pedidosya/products/10969185-2936bae2-bf10-4e4f-aa49-fc9062dd06d1.jpeg?quality=90&width=1440&webp=1"
    },
    {
      nombre: "Sándwich de lomito de carne Friky",
      estado: null,
      precio: 2070,
      detalle: "Queso, jamón, huevo y papas fritas.",
      categoria: "Sandwich",
      img: "https://images.deliveryhero.io/image/pedidosya/products/259544-e52e0a88-7bb1-4b2e-95e5-4716384706f7.jpg?quality=90&width=1440&webp=1"
    },
    {
      nombre: "Sándwich de milanesa de pollo",
      estado: null,
      precio: 1440,
      detalle: "Milanesa de pollo, verduras y aderezos.",
      categoria: "Sandwich",
      img: "https://images.deliveryhero.io/image/pedidosya/products/259544-fcca3536-093d-4b22-b7d3-74e0b78ea741.jpg?quality=90&width=1440&webp=1"
    },
    {
      nombre: "Sándwich de milanesa de pollo Friky",
      estado: null,
      precio: 1800,
      detalle: "Jamón, queso y huevos. Con papas fritas.",
      categoria: "Sandwich",
      img: "https://images.deliveryhero.io/image/pedidosya/products/259544-6bd9fd0e-8bb0-41c0-8b53-0c8efa433368.jpg?quality=90&width=1440&webp=1"
    }
    
  ]
}