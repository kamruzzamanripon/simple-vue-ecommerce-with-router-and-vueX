<template>
    <div>
        <div class="row" v-if="!loading">
            <div class="col-lg-4" v-for="(item, index) in items" :key="index">
                <div class="card shop-card" >

                    <router-link :to="{ path: '/item/' + item.id }">
                    <img class="card-img-top" :src="item.photo" alt="Card image cap">
                    </router-link>

                    <div class="card-body">
                        <h5 class="card-title">{{ item.title}}</h5>
                        <p class="card-text">{{ item.price }}</p>
                        <a  class="btn btn-primary" @click="addToCart(item)">+ add</a>
                    </div>
                </div>
            </div>
        </div>
        <h2 v-else>Loading............</h2>
    </div>
</template>

<script>
    import  axios from  'axios'
    export default {
        data(){
            return{
                loading: true,
            }
        },
        computed:{
            items(){
                return this.$store.getters.getInventory
            }
        },
        mounted(){
            this.fetchInventory();
        },
        methods:{
            fetchInventory(){
                var self = this
                axios.get('http://localhost:3000/items').then(response => {
                    //console.log(response)
                    //this.$store.commit('setInventory', response.data)
                    this.$store.dispatch('setInventory', response.data)
                    self.loading = false
                })
            },
            addToCart(item){
                //this.$store.commit('addToCart', item)
                this.$store.dispatch('addToCart', item)
            }
        }
    }
</script>