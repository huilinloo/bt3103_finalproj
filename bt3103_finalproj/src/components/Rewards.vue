<template>
    <div id = "rewards">
        <div class = "pts_desc">
            <h2>You have </h2>
            <b id = "num_pts">{{this.points}}</b><span id = "pts">Pts</span>
        </div>
        <br>
        <br><br>
        <div id="reward-types">
        <ul>
            <li v-for="(reward, idx) in rewards" :key="reward.name">
                <img v-bind:src="reward.url">
                <h3>{{reward.name}}</h3> 
                <h4>{{reward.value}} points</h4><br>
                <button id="redeem" v-bind:reward="idx" v-on:click="clicked(idx)">Redeem Pts</button>
            </li>
        </ul>
        </div>
    </div>
</template>
<script>
import database from '../firebase.js'
import firebase from 'firebase/app'
import fs from 'firebase'

export default {
    data() {
        return {
            points: 0,
            rewards:[
                {name: "Gong Cha $3 voucher", value: 500, url:"http://www.gong-cha-sg.com/wp-content/uploads/2017/11/1.png"},
                {name: "Seastainable Straw Set", value:500, url:"https://cdn.shopify.com/s/files/1/2505/0888/products/straw-silver_b6f94502-7a86-4ee9-8a62-04ec20208ce5_2048x.png?v=1563447283"},
                {name: "FairPrice $5 voucher", value: 1000, url:"https://oroinc.com/b2b-ecommerce/wp-content/uploads/sites/3/2019/07/fairprice-1500x1500-1.png"}
            ],
            userid: ""
        }
    },
    methods: {
    clicked: function(index) {
        var reward = this.rewards[index];
        if (this.points >= reward.value) {
            alert("Redemption successful. Take a photo of this page and show to the respective merchant");
            var updatedPoints = this.points - reward.value;
            database.collection('users').doc(this.userid).update({redeemed: firebase.firestore.FieldValue.arrayUnion(reward.name)})
            database.collection('users').doc(this.userid).update({
                points: updatedPoints
            });
            this.$router.push('History')
        } else{
            alert("Redemption unsuccessful. Save more plastic!")
        }
    },
    fetchData: function() {
        this.userid = fs.auth().currentUser.uid;
        database.collection('users').doc(this.userid).get().then(snapshot => {
            this.points = snapshot.data().points;
        });
             
    }
    },
    created() {
        this.fetchData();
    }
}
</script>
<style scoped>
h2 {
    font-size: 30px;
}
#redeem {
    background-color: #4CAF50;
    border: none;
    color: white;
    border-radius: 10px;
    font-size: 24px;
    transition-duration: 0.4s;
    padding: 10px 50px;
}

#redeem:hover {
    background-color: white;
    color: black;
    border: 2px solid #4CAF50;
}

#num_pts {
    font-size: 60px;
    padding-right: 10px;
    padding-bottom: 20px;
}

#pts {
    font-size: 30px;
}
img {
    max-height: 300px;
    height: 70%;
    width: auto;
    border:black;
}
.reward-types {
    display: table;
    margin: 0 auto;
}
ul{
    justify-content: center;
    list-style-type: none;
    display: flex;
}
li{
    padding: 10px;
}
/*
.featured {
    text-align: left;
}
*/
</style>