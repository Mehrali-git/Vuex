const product = {
    namespaced: true,
    state: {
        products: [{
                id: 1,
                name: "Apple",
                description: "Lorem ipsum dolor sit amet consectetur ",
                image: "https://www.imagemobiles.com/wp-content/uploads/2021/09/iphone-11.jpg",
                price: 100,
            },
            {
                id: 2,
                name: "shiumi",
                description: "Lorem ipsum dolor sit amet consectetur ",
                image: "https://www.imagemobiles.com/wp-content/uploads/2021/09/note-20-2.jpg",
                price: 200,
            },
            {
                id: 3,
                name: "Huawei",
                description: "Lorem ipsum dolor sit amet consectetur ",
                image: "https://www.imagemobiles.com/wp-content/uploads/2021/09/iphone-12.jpg",
                price: 300,
            },
            {
                id: 4,
                name: "Sony",
                description: "Lorem ipsum dolor sit amet consectetur ",
                image: "https://www.imagemobiles.com/wp-content/uploads/2021/09/realme.jpg",
                price: 400,
            },
            {
                id: 5,
                name: "Blakbery",
                description: "Lorem ipsum dolor sit amet consectetur ",
                image: "https://www.imagemobiles.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-21-at-6.25.17-PM.jpeg",
                price: 500,
            },
            {
                id: 6,
                name: "Huawei",
                description: "Lorem ipsum dolor sit amet consectetur ",
                image: "https://www.imagemobiles.com/wp-content/uploads/2021/09/iphone-12.jpg",
                price: 300,
            },
            {
                id: 7,
                name: "Sony",
                description: "Lorem ipsum dolor sit amet consectetur ",
                image: "https://www.imagemobiles.com/wp-content/uploads/2021/09/realme.jpg",
                price: 400,
            },
            {
                id: 8,
                name: "Blakbery",
                description: "Lorem ipsum dolor sit amet consectetur ",
                image: "https://www.imagemobiles.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-21-at-6.25.17-PM.jpeg",
                price: 500,
            },


        ],
    },
    getters: {
        allProducts(state) {
            console.log(state)
            return state.products
        }
    },
    mutations: {

    },
    actions: {}
}
export default product;