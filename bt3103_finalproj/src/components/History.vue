<template>
    <div id="history">
        <h1>Past Transctions </h1>
        <h2>Your most three recent reward redemptions </h2>
        <br><br>
        <h2> From Most Recent </h2>
        <ul>
            <li>
                <br>
                <h2>{{user[0].redeemed[user[0].redeemed.length-1] + ' *1'}}</h2>
                <br>
            </li>
                <li>
                    <h2> {{user[0].redeemed[user[0].redeemed.length-2] + ' *1'}} </h2>
                    <br>
                </li>
                <li> 
                    <h2> {{user[0].redeemed[user[0].redeemed.length-3] + ' *1'}} </h2>
                    <br>
                </li>
            </ul>
    </div>
</template>
<script>
import database from '../firebase.js'
export default {
  data(){
    return{
        user: []
    }
  },
  methods:{
    fetchItems:function(){
      database.collection('users').get().then((querySnapShot)=>{
        let item={}
        querySnapShot.forEach(doc=>{
            item=doc.data()
            item.id=doc.id
            this.user.push(item) 
            })      })    
        },   
    },
  created(){
      this.fetchItems()    
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