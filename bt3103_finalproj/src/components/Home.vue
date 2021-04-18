<template>
    <div id="welcome">
        <h1 id="w">{{'Welcome back, ' + this.name + '!'}}</h1> <br>
        <div id="chart">
            <h2> Weekly Trend of Platic You Saved </h2>
            <line-chart :chart-data="datacollection" :options="chartOptions" :height="200"> </line-chart>
            <button @click="fillData()">Show</button>
        </div>
        <div id="info">
            <h2> Number of Merchants and Users in GreenSG </h2>
            <bar-chart :chart-data="datacollection1"> </bar-chart>
            <button @click="fillData1()">Show</button>
        </div>
    </div>
</template>

<script>
import database from '../firebase.js'
import linechart from '../linechart_home.js'
import firebase from "firebase"
import barchart from '../barchart_home.js'
export default{
    components:{
        'line-chart':linechart,
        'bar-chart':barchart
    },
    data : function(){
    return{
        datacollection: null,
        home: [],
        userid: "",
        start: "",
        name: "",
        plastic: {},
        me: [],
        datacollection1: null,
        chartOptions:null
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
                this.plastic = snapshot.data().list_plastic
            }); 
            database.collection('merchants').get().then((querySnapShot)=>{
                let item={}
                querySnapShot.forEach(doc=>{
                    item=doc.data()
                    this.me.push(item) 
            }) }); 
    },   
    fillData() {
        this.datacollection = {
          labels: ['Monday', 'Tuesday','Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday'],
          datasets: [
            {
              label: 'This week',
              data: [this.plastic["2021-4-12"], this.plastic["2021-4-13"], this.plastic["2021-4-14"], this.plastic["2021-4-15"],this.plastic["2021-4-16"],this.plastic["2021-4-17"], this.plastic["2021-4-18"]],
              borderWidth: 3,
              borderColor: "#004d99",
              backgroundColor:"#e6f3ff"
            },
            {
                label: 'Last week',
                data: [this.plastic["2021-4-05"],this.plastic["2021-4-06"],this.plastic["2021-4-07"],this.plastic["2021-4-08"],this.plastic["2021-4-09"],this.plastic["2021-4-10"],this.plastic["2021-4-11"]],
                borderWidth: 3,
                borderColor:"#c2d6d6",
                fill:false  
                
              }
          ]
        },
        this.chartOptions = {
            legend: {
                position:'left',
                labels: {
                    fontSize: 25
                }
            }
        }   
    } ,
    fillData1() {
        this.datacollection1 = {
            labels: ['Merchants', 'Users'],
                datasets: [
              {
                label: 'Number',
                data: [this.me.length, this.home.length],
                backgroundColor:['#70dbdb', '#bdf5bd'],
                borderWidth: 2,
                borderColor:"#000"
              }
            ]
        }   
    }
    },
    created(){
        this.fetchItems()
    },
    mounted() {
        this.fillData(),
        this.fillData1()
    },
}
</script>

<style scoped>
line-chart{
    height: 200px;
}

h2 {
    font-weight: bold;
}
#w {
    position: absolute;
    left: 3%;
}
#chart{
  height:200px;
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