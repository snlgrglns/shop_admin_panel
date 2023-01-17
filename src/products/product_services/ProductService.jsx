import axios from 'axios';

const PRODUCT_API_BASE_URL="http://localhost:8080/shop/api/products";
const COLOR_API_BASE_URL="http://localhost:8080/shop/api/color";
const PRICE_API_BASE_URL="http://localhost:8080/shop/api/price";
const SIZE_API_BASE_URL="http://localhost:8080/shop/api/size";
const IMAGE_API_BASE_URL="http://localhost:8080/shop/api/image";

class ProductService{
    getProducts(){
        return axios.get(PRODUCT_API_BASE_URL);
    }

    createProduct(productData){
        return axios.post(PRODUCT_API_BASE_URL, productData);
    }

    getProductById(productId){
        return axios.get(PRODUCT_API_BASE_URL+'/'+productId);
    }

    updateProduct(product, productId){
        return axios.put(PRODUCT_API_BASE_URL+'/'+productId, product);
    }

    deleteProduct(productId){
        return axios.delete(PRODUCT_API_BASE_URL+'/color/'+productId);
    }

    deleteProductColor(colorId){
        return axios.delete(COLOR_API_BASE_URL+'/'+colorId);
    }

    deleteProductSize(sizeId){
        return axios.delete(SIZE_API_BASE_URL+'/'+sizeId);
    }

    deleteProductImage(imageId){
        return axios.delete(IMAGE_API_BASE_URL+'/'+imageId);
    }

    addColor(productColor){
        // console.log(productColor);
        return axios.post(COLOR_API_BASE_URL, productColor);
    }

    addSize(size){
        return axios.post(SIZE_API_BASE_URL, size);
    }

    addPrice(price){
        return axios.post(PRICE_API_BASE_URL, price);
    }
    uploadImage(imageData){
        return axios.post(IMAGE_API_BASE_URL, imageData);
    }
    getImage(product_id){
        return axios.get(IMAGE_API_BASE_URL, product_id);
    }
}

export default new ProductService()