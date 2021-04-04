<template>
    <div id = "leaderboard">
        <div class = "sg">
            <p id = "textsg">Singapore</p>
            <p class = "description" >Points earned today</p>
            <br><br><br>
            <table>
                <tr>
                    <th>Position</th>
                    <th>User</th>
                    <th>Points</th>
                </tr>
                <tr v-for="(user, index) in sortArrays(sg)" :key = "index">
                    <td class = "position"><b>{{index+1}}</b></td>
                    <td>{{user.name}}</td>
                    <td>{{user.points}}</td>
                </tr>
            </table>
        </div>
        <div class = "vl"></div>
        <div class = "friends">
            <p id = "textfriends">Friends</p>
            <p class = "description">Points earned today</p>
            <br><br><br>
            <table>
                <tr>
                    <th>Position</th>
                    <th>User</th>
                    <th>Points</th>
                </tr>
                <tr v-for="(user, index) in sortArrays(friends)" :key = "index">
                    <td class = "position"><b>{{index+1}}</b></td>
                    <td>{{user.name}}</td>
                    <td>{{user.points}}</td>
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
            /*
            database.collection('leaderboard').doc('march_29').get().then(snapshot => {
                snapshot.docs.forEach(doc => {
                    var date = snapshot.data();
                    console.log(date);                   

                })
            */
            database.collection('leaderboard').doc('march_29').collection('friends').get().then(snapshot =>
                snapshot.docs.forEach(doc => {
                    var friend = doc.data()
                    console.log(friend)
                    this.friends.push(friend)
                }));
            database.collection('leaderboard').doc('march_29').collection('singapore').get().then(snapshot => 
                snapshot.docs.forEach(doc => {
                    var user = doc.data()
                    console.log(user)
                    this.sg.push(user)
                }));
        },
        sortArrays: function(arrays) {
            return arrays.sort((a, b) => b.points - a.points);
        }
    },
    mounted() {
        this.fetchData()
    }
}
</script>

<style scoped>
.sg {
    float: left;
    width: 49%;
}

#textfriends, #textsg {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: green;
    font-size: 64px;
    font-weight: 700;
    line-height: 26.4px;
}

.description {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}

.vl {
    float: left;
    border-left: 3px solid green;
    height: 1000px;
    width: 1%;
}

.friends {
    float: right;
    width: 49%;
}

table {
    border-radius: 6px;
    margin-left: auto;
    margin-right: auto;
    width: 700px;
    //background: #90EE90;
    border: 1px solid black;
    font-size: 28px;
}

th{
    padding-top: 10px;
    padding-bottom: 10px;
}

td {
    padding-top: 20px;
    padding-bottom: 20px;
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