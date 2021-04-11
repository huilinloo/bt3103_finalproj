<template>
    <div id="welcome">
        <h1>{{'Welcome back, ' + home[0].name + '!'}}</h1> <br>
        <div id="chart">
            <line-chart :height="200"> </line-chart>
        </div>
        <div id="info">
            <ul>
                <li>Day of Intiative
                    <h2> {{home[0].initial + 'th day'}} </h2>
                </li>
                <li> Number of Participants 
                    <h2> {{home[0].participants}} </h2>
                </li>
                <li> Total Plastic Bags Saved in SG 
                    <h2> {{home[0].totalplastic +' KG'}} </h2>
                </li>
                <li> Total Target Plastic to Save
                    <h2> {{home[0].totaltarget +' KG'}} </h2>
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
  
  data(){
    return{
        home: []
        }
  },
  methods:{
    fetchItems:function(){
      database.collection('home').get().then((querySnapShot)=>{
        let item={}
        querySnapShot.forEach(doc=>{
            item=doc.data()
            item.id=doc.id
            this.home.push(item) 
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
    position: absolute;
    left: 3%;
}
#chart{
  height:300px;
  width:70%;
  padding:30px;
  float:left;
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
}
</style>