class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      return this.products;
    }
  
    checaProduct(product) {
      return product.code; 
    }
  
    addProduct(product) {
      if (this.checaProduct(product) && !this.products.find(p => p.code === product.code)) {
        this.products.push({ ...product, id: this.products.length + 1 });
        return console.log(`Producto agregado: ${product.title}`)
      } else {
        return console.log(`El producto ${product.title} ya existe.`);
      }
    }
  
    getProductById(id) {
      const findById = this.products.find(p => p.id === id);
  
      if (findById) return console.log(`El producto buscado con el id ${id} es:`), console.log(findById);
      else return console.log(`El producto con el id ${id} no existe.`);
    }
  }


  const guitarra1 = {
    title: "Gibson",
    description: "Les Paul Standard",
    price: 2700,
    thumbnail: "https://media.sweetwater.com/api/i/q-82__f-webp__ha-1359f5921d463511__hmac-fac5c0ec53ac524ebe618da127a278a7c293f1e3/images/guitars/LPS6B8NH/222020209/222020209-body-large.jpg.auto.webp",
    code: 10,
    stock:5
  }
  
  const guitarra2 = {
    title: "Gibson",
    description: "Les Paul Classic",
    price: 2200,
    thumbnail: "https://media.sweetwater.com/api/i/q-85__f-webp__ha-2787f70697e5b13b__hmac-d30e71130334ec1dbb452dc257c346d981f8e4f1/images/guitars/LPCLSWSMB/223020105/223020105-body-xlarge.jpg.auto.webp",
    code: 10,
    stock:4
  }



  // 1.- Crear Clase Product Manager
  const productos = new ProductManager();


  // 2 .- getProducts devuelve array vacio
  console.log(productos.getProducts());


  // 3.- Metodo addProduct agrega nuevo producto al Array con id
  productos.addProduct(guitarra1);


  // 4.- getProducts devuelve array con el producto dentro
  console.log(productos.getProducts());


  // 5.- Se llama a addProduct y genera error por codigo repetido.
  productos.addProduct(guitarra2);


  // 6.- getProductsById retorna un producto con el id deseado.
  productos.getProductById(1);


  // 7.- getProductsById marca error si el id no existe.
  productos.getProductById(16);