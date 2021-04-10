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
                    <td>{{user.username}}</td>
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
                    <td>{{user.username}}</td>
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
            friends: [],
            friends_username: []
        }
    },
    methods: {
        fetchData: function() {
            database.collection('users').doc('1').get().then(snapshot => {
                this.friends_username = snapshot.data().list_friend;
                //console.log(this.friends_username);
                //console.log(this.friends_username.length);
                //console.log(typeof this.friends_username);
                for (var index in this.friends_username) {
                    console.log(this.friends_username[index]);
                    database.collection('users').where('username', '==', this.friends_username[index]).get().then(querySnapshot => {
                        querySnapshot.forEach((doc) => {
                            var plastic = doc.data().totalplastic;
                            this.friends.push({username: doc.data().username, total_plastic: plastic});
                    }) 
                    });
                }
                });

            database.collection('users').get().then(snapshot => {
                snapshot.docs.forEach(doc => {
                    var user = doc.data()
                    console.log(user)
                    this.sg.push({username: user.username, total_plastic: user.totalplastic})
                })
            });
        },
        sortArrays: function(arrays) {
            return arrays.sort((a, b) => b.total_plastic - a.total_plastic).slice(0, 10);
        }
    },
    mounted() {
        this.fetchData()
    }
}
</script>

<style scoped>
h1 {
    font-size: 80px;
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
    font-size: 50px;
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
    table-layout:fixed;
    width: 100%;
    font-size: 25px;
    border: none;
    border-collapse: collapse;
}

th{
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 30px;
}

td {
    padding:40px 25px 10px 25px;
}

table tr:hover {
    background-color: #ddd;
}

td:first-child, th:first-child {
  border-radius: 10px 0 0 10px;
}

td:last-child, th:last-child {
  border-radius: 0 10px 10px 0;
}

.position {
    color: #228B22;
}

tr:nth-child(2) {
    border-radius: 10px;
    background-color: gold;
}

tr:nth-child(3) {
    background-color: silver;
}

tr:nth-child(4) {
    background-color: #cd7f32;
}
</style>