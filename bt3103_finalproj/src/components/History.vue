<template>
    <div id="history">
        <h1>Past Transctions</h1>
        <h2>Your most three recent reward redemptions </h2>
        <br><br>
        <h2> From Most Recent </h2>
        <ul>
            <li v-for="item in redeemed" :key="item.id">
                <br>
                <h2>{{item}}</h2>
                <br>
            </li>
            </ul>
    </div>
</template>
<script>
import database from '../firebase.js'
import firebase from "firebase"
export default {
  data(){
    return{
        redeemed: [],
        userid:""
    }
  },
  methods:{
    fetchData:function(){
        this.userid = firebase.auth().currentUser.uid
        database.collection('users').doc(this.userid).get().then((snapshot)=>{
            this.redeemed = snapshot.data().redeemed 
            })   
        },   
    },
  created(){
      this.fetchData()    
      }
}
</script>

<style scoped>
h1 {
    font-size: 80px;
    text-decoration:underline;
}
h2 {
    font-size: 50px;
}
p {
    font-size: 25px;
}
li {
    font-weight: bold;
}
ul{
    position: absolute;
    left: 25%;
    list-style-type: none;
    background-color: #bdf5bd;
    width: 50%;
}
</style>