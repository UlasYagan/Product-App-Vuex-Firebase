<template>
  <div class="container">
    <h3>Add Product</h3>
    <div class="add">
      {{getProductDetail}}
      <form @submit.prevent="onSubmit">
        <input type="hidden" v-model="product.Id">
        <input type="text" v-model="product.ProductName" placeholder="Product Name">
        <input type="text" v-model="product.UnitPrice" placeholder="Unit Price">
        <input type="text" v-model="product.UnitsInStock" placeholder="Units In Stock">
        <input type="text" v-model="product.UnitsOnOrder" placeholder="Units On Order">
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      product: {
        Id: null,
        ProductName: "",
        UnitPrice: null,
        UnitsInStock: null,
        UnitsOnOrder: null
      }
    };
  },

  computed: {
    ...mapGetters({
      getProductDetail: "getProduct"
    })
  },

  updated() {
    this.product = this.getProductDetail;
  },

  methods: {
    ...mapActions(["addProduct","updateProduct"]),

    onSubmit() {
      if (this.product.Id !== "") {
        this.updateProduct(this.product);
     } else {
        this.addProduct(this.product);
      }
    }
  }
};
</script>


<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px solid #41b883;
  cursor: pointer;
}
</style>
