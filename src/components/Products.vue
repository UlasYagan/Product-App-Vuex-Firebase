<template>
  <div class="container">
    <h3>Products</h3>
    <div class="products">
      <div
        v-for="(pro,index) in allProducts"
        :key="index"
        class="product text-white">
        <button class="btn btn-xs" @click="getProductActions(pro)">Edit</button>
     <h3>   {{ pro.ProductName }}  </h3>
        Fiyat: {{pro.UnitPrice}} TL <br>
        Stok Miktarı: {{pro.UnitsInStock}} <br>
        Sipariş Miktarı: {{pro.UnitsOnOrder}}
        <i class="fas fa-trash-alt" @click="deleteProduct(pro)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {

  data() {
    return {};
  },

  methods: {
    ...mapActions(["getProducts","deleteProduct","getProductActions"]),

  },

  computed: {
    ...mapGetters(["allProducts"])
  },

  created() {
    this.getProducts();
  }


};
</script>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.product {
  border: 1px solid #ccc;
  background: #ccf4fb;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: rgb(10, 10, 10);
  cursor: pointer;
}

.btn{
  flex: 2;
    background: #51d39d;
    color: #fff;
    position: absolute;
    top: 10px;
    right: 10px;
    border: 1px solid #41b883;
    cursor: pointer;
}
</style>
