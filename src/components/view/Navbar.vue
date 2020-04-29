<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid row">
            <div class="col-lg-6 text-left">
                <router-link :to="{ path:'/' }"> Ri-Simple Shop</router-link>
            </div>
            <div class="col-lg-6 text-right">
                <form @submit.prevent="search" class="form-inline my-2 my-lg-0" style="float: right">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="keyword">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                keyword: ''
            }
        },
        methods:{
            search(){
                var self = this
                axios.get('http://localhost:3000/search/' + this.keyword).then(response =>{
                    //console.log(response)
                    self.$store.commit('setInventory', response.data)
                })
            }
        }
    }
</script>