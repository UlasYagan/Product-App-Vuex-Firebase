import axios from 'axios';

var firebaseUrl = "firebaseUrl";
const state = {
  products: [],
  getProduct: {}
};

const getters = {
  allProducts: (state) => state.products,
  getProduct: (state) => state.getProduct
};

const actions = {
  getProducts({commit}) {
    axios.get(firebaseUrl+ 'products.json')
      .then((res) => {
        let data = res.data;
        let products = [];
        console.log(data)
        for (let key in data) {
          products.push({ ...data[key], id: key });
        }

        commit('setProducts', products);
      }).catch((err) => {

      });
  },

  getProductActions({commit}, product){
      commit('getProductDetail', product);
  },

  addProduct({commit}, product) {
      axios.post(firebaseUrl + `products.json`, product)
      .then((res) => {
         axios.get(firebaseUrl + `products/${res.data.name}.json`)
          .then((response) => {
             commit('newAddProduct',response.data);
          }).catch((err) => {
          });
      }).catch((err) => {

      });
  },
  updateProduct({commit}, product) {
    axios.patch(firebaseUrl + `products/${product.id}.json`, product)
    .then((res) => {
      axios.get(firebaseUrl+ 'products.json')
      .then((res) => {
        let data = res.data;
        let products = [];
        for (let key in data) {
          products.push({ ...data[key], id: key });
        }

        commit('editProduct', products);
      }).catch((err) => {

      });
    }).catch((err) => {

    });
},
  deleteProduct({commit},product){
        axios.delete(firebaseUrl + `products/${product.id}.json`)
        .then((res) => {
          console.log(res)
          commit('removeProduct', product)
        }).catch((err) => {

        });
  }




};

const mutations = {
  setProducts: (state, products) => {
    state.products = products;
  },

  getProductDetail:(state,product) => {
    state.getProduct = product;
  },

  newAddProduct: (state, pro) => {
    state.products.push(pro);
  },

  editProduct: (state,products) => {
    state.products = products;
  },

  removeProduct:(state,product) => {
     state.products = state.products.filter((pro) => pro.id !== product.id);
  },



};


export default {
  state,
  getters,
  actions,
  mutations
};
