<template>
<div id="app">
  <img src="https://i.postimg.cc/4xwY4sR5/wolrd-environmental-day-copy-2.jpg" align="left">
    <form ref= "anyName" action="#" @submit.prevent="addPoints">
	<div class="input_container">
        <h3><Strong>Add Customer Points</Strong></h3><br>
        <label for="phone">Phone Number: </label><br>
        <input type="text" id="phone" class="form-control form-control-lg" v-model="phone" required>
        <p v-if="phone != ''">{{"Username is " + this.username}}</p>
        <br><br>
        <label for="points">Points Earned: </label><br>
        <input type="number" class="form-control form-control-lg" v-model.number="new_points" v-on:click="checkPhone()" required/>
        <br>

        <p id = "allocation"><b>Information on points allocation</b></p>
        <table id = "info">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Amount of Points</th>
          </tr>
          <tr>
            <td>Straw</td>
            <td>1</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Plastic Bag</td>
            <td>1</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Plastic Container</td>
            <td>1</td>
            <td>20</td>
          </tr>
        </table>
        <br>
        <button type="submit" class="btn btn-success btn-lg btn-block" v-on:click="addPoints()">Submit</button>
        <br>
  </div>
    </form>
</div>
</template>

<script>
import database from '../firebase.js'

export default {
    data(){
        return{
            phone: '',
            users: [],
            username: '',
            sameNumber: false,
            new_points: 0,
            id: "",
            curr_points: null,
            curr_plastic: null
        }
    },
    methods:{
        fetchItem:function(){
          database.collection('users').get().then((querySnapShot)=>{
            let item={}
            querySnapShot.forEach(doc=>{
              item=doc.data()
              item.id=doc.id
              this.users.push([item.id,item])
            })      
          })    
        },   
        //Check if the phone number entered is valid
        checkPhone: function() {
          for (var i = 0; i < this.users.length; i++) {
            var user = this.users[i]
            if (user[1].phone == this.phone) {
                this.sameNumber = true
                this.username = user[1].username
                this.id = user[0]
                //console.log(this.id)
                this.curr_points = user[1].points
                this.curr_plastic = user[1].totalplastic
                //console.log(this.curr_points)
                //console.log(typeof this.curr_points)
            }
          }
          if (this.sameNumber == false) {
              this.username = "not found"
          }
        },
        addPoints: function() {
            if (this.sameNumber == false) {
                alert("Invalid phone number!");
                this.$router.push('/merchant-inputs') //why cannot?
            } else {
                //straw: 5g, 5 points
                //plastic bag: 10g, 10 points
                //plastic container: 20g, 20 points
                var updated_points = this.curr_points + this.new_points
                //console.log(this.new_points)
                //console.log(typeof updated_points)
                database.collection("users").doc(this.id).update({
                    points: updated_points,
                    totalplastic: this.curr_plastic + this.new_points
                });
                alert("Successfully added points!");
                this.username = '';
                this.new_points = 0;
                this.$refs.anyName.reset();
            }
        }
    },
    created() {
        this.fetchItem()
    } 
}
</script>

<style scoped>
/* Basic Config --------- */

html { box-sizing: border-box; }

*, *:before, *:after { box-sizing: inherit; }

html, body {
	height: 100%;
	width: 100%;
	margin: 0;
	padding: 0;
}

img {
  padding-left: 200px;
  height: 800px;
}

body {
	font-family: 'Open Sans', sans-serif;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #ff6b6b;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

ul {
	padding-left: 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

li { 
	margin-bottom: 8px;
	color: #525f7f;
	position: relative;
}

li:before {
  content: "";
	width: 0%; height: 2px;
	background: #2ecc71;
	position: absolute;
	left: 0; top: 50%;
	display: block;
	transition: all .6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

#app { width: 400px; }


/* Password Input --------- */

.input_container {
	position: relative;
	padding: 30px;
	box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
	border-radius: 6px;
	background: #FFF;
    position:absolute;
    top:25%;
    left:65%;
    margin-top:-50px; /* this is half the height of your div*/  
    margin-left:-100px; /*this is half of width of your div*/
}

/* Style all input fields */
input {
  width: 500px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
}

/* Style the submit button */
input[type=submit] {
  background-color: #4CAF50;
  color: white;
}

/* The message box is shown when the user clicks on the password field */
#message {
  display:none;
  background: #f1f1f1;
  color: #000;
  position: relative;
  padding: 20px;
  margin-top: 10px;
}

#message p {
  padding: 10px 35px;
  font-size: 18px;
}

#info {
    width: 100%;
    font-size: 15px;
    border: none;
    border-collapse: collapse;
}

th {
  text-align:center;
}

#allocation {
  color: red;
  text-decoration: underline;
}
</style>