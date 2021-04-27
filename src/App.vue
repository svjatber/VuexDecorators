<template>
  <div v-for="product in products">
    <span>{{product.id}} - {{product.name}} - {{product.price}}</span>
    <button @click="changeProduct(product, 'removeProduct')">Remove</button>
    <button @click="changeProduct({id: product.id, name: 'edit', price: 15}, 'editProduct')">Edit</button>
  </div>
  <button @click="changeProduct({id: 1000, name: 'add', price: 25}, 'addProduct')">Add</button>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import {useStore} from "vuex";
export default defineComponent({
  setup () {
    const store = useStore()
    const products: any = computed(() =>{
      return store.getters['product']
    })

    function changeProduct(obj: any, action: string) {
      console.log(store.dispatch('addProduct', {}))
      return store.commit(action, obj)
    }

    return {
      products,
      changeProduct
    }
  }
})
</script>

<style>
</style>
