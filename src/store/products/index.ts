import {Action, Module, Mutation, VuexModule} from 'vuex-module-decorators'
import {productsArray, Product} from "@/mocks/mocks";


@Module
export default class Products extends VuexModule{
    products: Product[] = productsArray

    get product(){
        return this.products
    }
    @Mutation
    changeProducts(value: Product){
        this.products.push(value)
    }
    @Mutation
    removeProduct(value: Product){
        this.products = this.products.filter((v: Product) => v.id !== value.id)
    }
    @Mutation
    editProduct(value: Product){
        this.products = this.products.map((v: Product) => {
            if(v.id === value.id){
                return value
            }
            return v
        })
    }

    @Action({rawError: true, commit: 'changeProducts'})
    addProduct(value : Product | {}){
        console.log(this.context.getters.product);
        return value
    }
}
