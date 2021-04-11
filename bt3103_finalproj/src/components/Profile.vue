<template>
    <div id="profile">
        <div id="user">
            <img src="https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg">
            <h1> {{user[0].username}} </h1>
            <p1> {{'MEMBER SINCE '+user[0].startdate}} </p1>
        </div>
        <div id="bar">
            <h1 id="thisweek">This Week </h1>
        </div>
        <div id="pie1">
            <doughnut-chart :height="230"></doughnut-chart>
        </div>
        <div id="lifetime">
            <h1 id="l">Lifetime Statistics</h1> <br>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqrsTh0P06Y5o3PSd-4PKbuo-eS-ttZAtp8Us6brIytrxhq4WD15hlZzOOqD8vk7W6HmE&usqp=CAU" id="img2">
            <h1> {{user[0].friends + ' FRIENDS'}} </h1>
        </div>
        <div id="plastic">
            <img src="https://image.flaticon.com/icons/png/512/2639/2639818.png" id="img1">
            <h1> {{user[0].totalplastic + 'G PLASTIC SAVED'}}</h1>
        </div>
    </div>
</template>

<script>
import doughnut from '../profile_doughnut.js'
import database from '../firebase.js'
export default {
    components:{
        'doughnut-chart':doughnut
    },
  
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
#thisweek,#l,#h {
    text-align: left;
}
#user{
    height:200px;
    float:left;
    width:50%;
    padding:30px;
}

#bar{
    width: 25%;
    height: 50%;
    float: right;
    position: absolute;
    top: 25%;
    left: 50%;
}

#pie1{
    width: 25%;
    float: right;
    position: absolute;
    top: 25%;
    left: 70%;
}

#lifetime{
    width: 25%;
    height: 50%;
    float: right;
    position: absolute;
    top: 50%;
    left: 50%;
}

#plastic {
    float: right;
    position: absolute;
    top: 58%;
    left: 75%;
}
#img1{
    width: 280px;
    height: 280px;
}
#img2{
    width: 280px;
    height: 280px;
}

ul{
    list-style-type: none;
    font-size: 25px;
}
</style>