var app = new Vue({
   el: '#app',
   data: {
       product: 'Socks',
       image: '../../assets/images/vmSocks-green-onWhite.jpg',
       inStock: false,
       details: ["80% cotton", "20% polyester", "Gender-neutral"],
       variants: [
           {
               variantId: 2234,
               variantColor: "green",
               variantImage: '../assets/images/vmSocks-green-onWhite.jpg',
           },
           {
               variantId: 2235,
               variantColor: "blue",
               variantImage: '../assets/images/vmSocks-blue-onWhite.jpg',
           },
       ],
       cart: 0,
   },
    methods: {
       addToCart: function () {
           this.cart += 1;
       },
        updateProduct(variantImage) {
            this.image = variantImage;
        }
    }
});