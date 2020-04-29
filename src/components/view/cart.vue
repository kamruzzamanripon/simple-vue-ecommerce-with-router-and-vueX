<template>
    <div class="cart-information">
        <ul>
            <li class="product-info">
                <div class="row">
                    <div class="col-lg-8">Product Name</div>
                    <div class="col-lg-4">Price</div>
                </div>
            </li>
            <li class="product-info" v-for="(item, index) in items" :key="index">
                <div class="row">
                    <div class="col-lg-8">
                        <span style="float: left; cursor: pointer" @click="removeItem(index)">X</span>
                        {{ item.title }}
                    </div>
                    <div class="col-lg-4">${{ item.price }}</div>
                </div>
            </li>



            <li class="total">
                <div class="row">
                    <div class="col-lg-8">Total Amount</div>
                    <div class="col-lg-4">$ {{ totalPrice }}</div>
                </div>
            </li>

            <li class="checkout" v-if="items.length > 0">
                <button class="btn btn-block btn-success" @click="checkout">Checkout</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        computed:{
            items(){
                return this.$store.getters.getCart
            },
            totalPrice(){
                var total = 0
                this.items.forEach(item =>{
                    total += parseFloat(item.price)
                })
                return total.toFixed(2);
            }
        },
        methods:{
            removeItem(index){
                //this.$store.commit('removeItem', index)
                this.$store.dispatch('removeItem', index)
            },
            checkout(){
                if(confirm("Are you Sure you want to checkout>")){
                    //this.$store.commit('clearCart')
                    this.$store.dispatch('clearCart')
                }
            }
        }
    }
</script>


<style>
    .cart-information ul {
        list-style: none;
        margin: 0;
        padding: 0;
        border: 2px solid #ddd;
    }

    .cart-information ul li.product-info {
        background: #ffdcdc;
        line-height: 32px;
        font-size: 18px;
        border-bottom: 1px solid #ffa4a4;
    }

    .cart-information ul li.total {
        line-height: 45px;
        font-size: 20px;
        font-weight: 600;
        border-top: 2px solid #b00f0f;
    }
</style>
