<template>
    <div id="welcome">
        <h1 id="w">{{'Welcome back, ' + this.name + '!'}}</h1> <br>
        <div id="chart">
            <line-chart :height="200"> </line-chart>
        </div>
        <div id="info">
            <ul>
                <li>Start Date of Initiative
                    <h2>{{this.start}}</h2>
                </li>
                <li> Number of Participants 
                    <h2> {{home.length}} </h2>
                </li>
                <li> Total Plastic Bags Saved in SG 
                    <br>
                    <button v-on:click='findTotalPlastic'>Click to see value </button>
                    <h2> {{totalPlastic +' G'}} </h2>
                </li>
                <li> Total Weekly Target Plastic to Save<br>
                    <button v-on:click='findTotalTarget'>Click to see value </button>
                    <h2> {{totalTarget +' G'}} </h2>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import database from '../firebase.js'
import linechart from '../linechart_home.js'
import firebase from "firebase"

export default{
    components:{
        'line-chart':linechart
    },
    data : function(){
    return{
        home: [],
        totalPlastic:0,
        totalTarget:0,
        userid: "",
        start: "",
        name: ""
        }
    },
    methods:{
        fetchItems:function(){
            database.collection('users').get().then((querySnapShot)=>{
                let item={}
                querySnapShot.forEach(doc=>{
                    item=doc.data()
            item.id=doc.id
            this.home.push(item) 
            }) });
            this.userid = firebase.auth().currentUser.uid; 
            database.collection('users').doc(this.userid).get().then(snapshot => {
                this.start = snapshot.data().startdate
                this.name = snapshot.data().username
            });   
    },   
    findTotalPlastic: function() {
        this.totalPlastic=0
        for (let i = 0; i < this.home.length; i++) {
            this.totalPlastic += this.home[i].totalplastic
        }
    } ,
    findTotalTarget: function() {
        this.totalTarget=0
        for (let i = 0; i < this.home.length; i++) {
            this.totalTarget += this.home[i].weeklygoal
        }
    }
    },
    created(){
        this.fetchItems()
    }
}
</script>

<style scoped>
h2 {
    font-weight: bold;
}
#w {
    position: absolute;
    left: 3%;
}
#chart{
  height:300px;
  width:70%;
  padding:30px;
  float:left;
}
li {
    background: #bdf5bd;
    padding:30px;
}
#info{
    width: 30%;
    float: right;
    position: absolute;
    top: 27%;
    left: 70%;
}

ul{
    list-style-type: none;
    font-size: 25px;
    height:300px;
}
</style>