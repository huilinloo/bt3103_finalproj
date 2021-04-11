<template>
    <div id="welcome">
        <h1 id="w">{{'Welcome back, ' + home[0].username + '!'}}</h1> <br>
        <div id="chart">
            <line-chart :height="200"> </line-chart>
        </div>
        <div id="info">
            <ul>
                <li>Day of Intiative
                    <h2>{{home[0].startdate + 'th day'}}</h2>
                </li>
                <li> Number of Participants 
                    <h2> {{home.length}} </h2>
                </li>
                <li  v-on:click='findTotalPlastic'> Total Plastic Bags Saved in SG 
                    <h2> {{totalPlastic +' KG'}} </h2>

                </li>
                <li v-on:click='findTotalTarget'> Total Weekly Target Plastic to Save
                    <h2> {{totalTarget +' KG'}} </h2>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import database from '../firebase.js'
import linechart from '../linechart_home.js'

export default{
    components:{
        'line-chart':linechart
    },
    data : function(){
    return{
        home: [],
        totalPlastic:0,
        totalTarget:0
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
            }) })    
    },   
    findTotalPlastic: function() {
        for (let i = 0; i < this.home.length; i++) {
            this.totalPlastic=0
            this.totalPlastic += this.home[i].totalplastic
        }
    } ,
    findTotalTarget: function() {
        for (let i = 0; i < this.home.length; i++) {
            this.totalTarget=0
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