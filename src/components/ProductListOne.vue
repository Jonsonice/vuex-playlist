<template>
  <div id="product-list-one">
    <h1>涨工资</h1>
    <ul>
      <li v-for="product in saleProducts" :key="product.id">
        <span class="name">{{product.name}}</span>
        <span class="price">{{product.price}} RMB</span>
      </li>
    </ul>
    <button @click="addPrice1(200)">加班(2s后显示)</button>
    <button @click="addPrice2">拔草</button>
    <button @click="addPrice3">修机器</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
    computed: {
        products() {
            return this.$store.state.products;
        },
        ...mapGetters([
            "saleProducts"
        ])
    },
    methods: {
        ...mapActions([
            "addPrice1"
            ]),
        // addPrice1: function(amount) {
        //     this.$store.dispatch('addPrice1',amount);
        // },
        addPrice2: function() {
            this.$store.commit('addPrice2');
        },
        addPrice3: function() {
            this.$store.commit('addPrice3');
        }
    }
};
</script>

<style scoped>
#product-list-one {
    background: #fff8b1;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0, 2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul {
    padding: 0;
    list-style-type: none;
}
#product-list-one li {
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.7);
}
.price {
    font-weight: bold;
    color: #e8800c;
}

</style>
