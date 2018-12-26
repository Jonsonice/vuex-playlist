<template>
  <div id="product-list-two">
    <h1>扣工资</h1>
    <ul>
      <li v-for="product in saleProducts" :key="product.id">
        <span class="name">{{product.name}}</span>
        <span class="price">{{product.price}} RMB</span>
      </li>
    </ul>
    <button @click="reducePrice1">抽烟</button>
    <button @click="reducePrice2">偷懒</button>
    <button @click="reducePrice3">请假</button>
  </div>
</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.state.products;
        },
        saleProducts() {
            return this.$store.getters.saleProducts;
        }
    },
    methods: {
        reducePrice1: function() {
            this.$store.commit('reducePrice1');
        },
        reducePrice2: function() {
            this.$store.commit('reducePrice2');
        },
        reducePrice3: function() {
            this.$store.commit('reducePrice3');
        }
    }
};
</script>

<style scoped>
#product-list-two {
    background: #d1e4ff;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0, 2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-two ul {
    padding: 0;
    list-style-type: none;
}
#product-list-two li {
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.7);
}
.price {
    font-weight: bold;
    color: #860ce8;
    display: block;
}
</style>
