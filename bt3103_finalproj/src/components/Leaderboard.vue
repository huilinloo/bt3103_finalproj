<template>
    <div id = "leaderboard">
        <div class = "header">
            <img class = "header__img" src = "https://www.freeiconspng.com/thumbs/leaderboard-icon/leaderboard-icon-9.png">
            <div class = "header__text">
                <h1> Leaderboard </h1>
                <p><i> Save more plastic to climb up the leaderboard! </i></p>
                <!--<p>#BYO #ZeroWasteNation </p>-->
            </div>
        </div>
        <div class = "top10_sg">
            <p id = "textsg">Top 10 <br><br><br> Singapore</p>
        </div>
        <div class = "top10_friends">
            <p id = "textfriends">Top 10 <br><br><br> Friends</p>
        </div>

        <div class = "sg">
            <table>
                <tr>
                    <th><img src = "https://image.flaticon.com/icons/png/512/15/15643.png" class = "rank_img"> Rank</th>
                    <th><img src = "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" class = "user_img"> User</th>
                    <th><img src = "https://cdn4.iconfinder.com/data/icons/plastic-bag/100/plastic_bag-06-512.png" class = "plastic_img"> Total Plastic Saved</th>
                </tr>
                <tr v-for="(user, index) in sortArrays(sg)" :key = "index">
                    <td class = "position"><b>{{index+1}}</b></td>
                    <td>{{user.name}}</td>
                    <td>{{user.total_plastic}}</td>
                </tr>
            </table>
        </div>
        <div class = "vl"></div>
        <div class = "friends">
            <table>
                <tr>
                    <th><img src = "https://image.flaticon.com/icons/png/512/15/15643.png" class = "rank_img"> Rank</th>
                    <th><img src = "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png" class = "user_img"> User</th>
                    <th><img src = "https://cdn4.iconfinder.com/data/icons/plastic-bag/100/plastic_bag-06-512.png" class = "plastic_img"> Total Plastic Saved</th>
                </tr>
                <tr v-for="(user, index) in sortArrays(friends)" :key = "index">
                    <td class = "position"><b>{{index+1}}</b></td>
                    <td>{{user.name}}</td>
                    <td>{{user.total_plastic}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import database from '../firebase.js'

export default {
    data() {
        return {
            sg: [],
            friends: []
        }
    },
    methods: {
        fetchData: function() {
            database.collection('leaderboard').doc('qalKACH2NQF9vxhOrCDL').collection('friends').get().then(snapshot =>
                snapshot.docs.forEach(doc => {
                    var friend = doc.data()
                    console.log(friend)
                    this.friends.push(friend)
                }));
            database.collection('leaderboard').doc('qalKACH2NQF9vxhOrCDL').collection('singapore').get().then(snapshot => 
                snapshot.docs.forEach(doc => {
                    var user = doc.data()
                    console.log(user)
                    this.sg.push(user)
                }));
        },
        sortArrays: function(arrays) {
            return arrays.sort((a, b) => b.total_plastic - a.total_plastic);
        }
    },
    mounted() {
        this.fetchData()
    }
}
</script>

<style scoped>
h1 {
    font-size: 100px;
}

.sg {
    float: left;
    width: 49.5%;
    padding-top: 50px;
}

.friends {
    float: right;
    width: 49.7%;
    padding-top: 50px;
}

.header {
    text-align: center;
    margin-bottom: -100px
}

.header__img {
    margin-bottom: 150px;
    width: 500px;
    vertical-align: middle;
}

.header__text {
    display: inline-block;
    font-size: 30px;
}

.rank_img, .user_img, .plastic_img {
    width: 50px;
    height: 50px;
}


#textfriends, #textsg {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: white;
    font-size: 60px;
    font-weight: 700;
    line-height: 26.4px;
}

.vl {
    float: left;
    border-left: 5px solid;
    height: 1000px;
    width: 0.1%;
    display: inline-block;
}

.top10_sg {
    float: left;
    width: 50%;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #3CB371;
}

.top10_friends {
    float: right;
    width: 50%;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #3CB371;
    
}

table {
    //border-radius: 6px;
    //margin-left: auto;
    //margin-right: auto;
    //width: 1200px;
    //background: #90EE90;
    table-layout:fixed;
    width: 100%;
    //border: 1px solid black;
    font-size: 30px;
}

th{
    padding-top: 10px;
    padding-bottom: 10px;
}

td {
    //padding-top: 20px;
    //padding-bottom: 20px;
    padding:10px 25px 10px 25px;
}

.position {
    color: #228B22;
}
/*
// Gold
tr:nth-child(2) {
    background: gold;
}

//Silver
tr:nth-child(3) {
    background: #c0c0c0;
}

//Bronze
tr:nth-child(4) {
    background: #cd7f32;
}

*/
</style>