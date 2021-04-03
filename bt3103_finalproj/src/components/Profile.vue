<template>
    <div id="profile">
        <div id="user">
            <img src="https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg">
            <h1> RYAN TAN </h1>
            <p1> {{'MEMBER SINCE '+user[0].startdate}} </p1>
        </div>
        <div id="bar">
            <h1>This Week </h1>
            <p1>How much you saved this week </p1>
        </div>
        <div id="pie1">
            <doughnut-chart :height="230"></doughnut-chart>
        </div>
        <div id="lifetime">
            <h1>Lifetime Statistics</h1> <br>
            <img src="https://www.ymadvocacy.org/wp-content/uploads/2015/03/YMAP-ICONS-PEOPLE-01-300x300.png" id="img2">
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
      database.collection('profile').get().then((querySnapShot)=>{
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
    width: 260px;
    height: 260px;
}

ul{
    list-style-type: none;
    font-size: 25px;
}
</style>