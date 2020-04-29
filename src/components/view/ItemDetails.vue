<template>
    <div class="row" v-if="item">
        <div class="col-lg-6">
            <img :src="item.photo" alt="photo">
        </div>
        <div class="col-lg-6">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
            <p>Price : {{ item.price }}</p>
            <button @click="AddToCart(item)">Add To Cart</button>
        </div>
    </div>
    <h3 v-else>Loading.....</h3>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                item: null
            }
        },
        mounted() {
            this.fetchItem()
        },
        methods:{
            fetchItem(){
                var self = this
                axios.get('http://localhost:3000/item/' + this.$route.params.id).then(response =>{
                    //console.log(response)
                    self.item = response.data

                })
            },
            AddToCart(item){
                //this.$store.commit('addToCart', item)
                this.$store.dispatch('addToCart', item)
            }
        }
    }
</script>