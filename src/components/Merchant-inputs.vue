<template>
  <div id="app">
    <img
      src="https://i.postimg.cc/4xwY4sR5/wolrd-environmental-day-copy-2.jpg"
      align="left"
    />
    <form ref="anyName" action="#" @submit.prevent="addPoints">
      <div class="input_container">
        <h3><Strong>Add Customer Points</Strong></h3>
        <br />
        <label style="font-size: 20px;" for="phone">Phone Number: </label><br />
        <input
          type="text"
          id="phone"
          class="form-control form-control-lg"
          v-model.lazy="phone"
          required
        />
        <p v-if="checkPhone() == true">{{ "Username is " + this.username }}</p>
        <br /><br />
        <label style="font-size: 20px;" for="points">Points Earned: </label
        ><br />
        <!--<input type="number" class="form-control form-control-lg" v-model.number.lazy="new_points" v-on:click="checkPhone()" required/>-->
        <br />

        <!--<p id = "allocation"><b>Information on points allocation</b></p>-->
        <form id="my_form"></form>
        <table id="info">
          <tr>
            <th>Item</th>
            <th>Amount of Points per item</th>
            <th>Quantity</th>
          </tr>
          <tr>
            <td>Straw</td>
            <td>5</td>
            <td>
              <input
                min="0"
                type="number"
                v-model.number.lazy="straw_qty"
                style="width: 50px;height = 20px"
                required
              />
            </td>
          </tr>
          <tr>
            <td>Plastic Bag</td>
            <td>10</td>
            <td>
              <input
                min="0"
                type="number"
                v-model.number.lazy="pb_qty"
                style="width: 50px"
                required
              />
            </td>
          </tr>
          <tr>
            <td>Plastic Container</td>
            <td>20</td>
            <td>
              <input
                min="0"
                type="number"
                v-model.number.lazy="pc_qty"
                style="width: 50px"
                required
              />
            </td>
          </tr>
        </table>

        <br />
        <span style="font-size: 20px;"> Total points: {{ calc_total }}</span>
        <br />
        <button type="submit" class="btn btn-success btn-lg btn-block">
          Submit
        </button>
        <br />
      </div>
    </form>
  </div>
</template>

<script>
import database from "../firebase.js";
//import firebase from 'firebase/app'

export default {
  data() {
    return {
      phone: "",
      users: [],
      username: "",
      sameNumber: false,
      new_points: 0,
      id: "",
      curr_points: null,
      curr_plastic: null,
      date: null,
      list_plastic: null,
      straw_qty: 0,
      pb_qty: 0,
      pc_qty: 0,
      updated_points: 0,
      updated_plastic: 0,
      plastic_cat: null,
    };
  },
  computed: {
    calc_total: function() {
      return this.straw_qty * 5 + this.pb_qty * 10 + this.pc_qty * 20;
    },
  },
  methods: {
    fetchItem: function() {
      database
        .collection("users")
        .get()
        .then((querySnapShot) => {
          let item = {};
          querySnapShot.forEach((doc) => {
            item = doc.data();
            item.id = doc.id;
            this.users.push([item.id, item]);
          });
        });
    },
    //Check if the phone number entered is valid
    checkPhone: function() {
      for (var i = 0; i < this.users.length; i++) {
        var user = this.users[i];
        if (user[1].phone == this.phone) {
          this.sameNumber = true;
          this.username = user[1].username;
          this.id = user[0];
          //console.log(this.id)
        }
      }
      if (this.sameNumber == false) {
        this.username = "not found";
        return false;
      }
      return true;
    },
    addPoints: function() {
      if (this.sameNumber == false) {
        alert("Invalid phone number!");
        this.$router.push("/merchant-inputs"); //why cannot?
      } else {
        this.new_points = this.calc_total;
        console.log(this.new_points);
        for (var i = 0; i < this.users.length; i++) {
          var user = this.users[i];
          if (user[1].phone == this.phone) {
            this.curr_points = user[1].points;
            this.curr_plastic = user[1].totalplastic;
            this.list_plastic = user[1].list_plastic;
            this.plastic_cat = user[1].plastic_cat;
          }
        }

        console.log("list of plastic" + this.list_plastic);
        console.log("current amount of points" + this.curr_points);
        console.log("type of curr_points" + typeof this.curr_points);

        //update points and plastic field
        this.updated_points = this.curr_points + this.new_points;
        this.updated_plastic = this.curr_plastic + this.new_points;
        console.log("new points" + this.new_points);
        console.log("updated amt of points" + this.updated_points);

        //if user makes 2nd purchase on the same day, this.date should exist in this.list_plastic object already
        if (this.date in this.list_plastic) {
          this.list_plastic[this.date] =
            this.list_plastic[this.date] + this.new_points;
        }

        //if user makes 1st purchase today, add this.date key and this.new_points field
        else {
          this.list_plastic[this.date] = this.new_points;
        }

        //update by plastic category
        this.plastic_cat["straw"] =
          this.plastic_cat["straw"] + this.straw_qty * 5;
        this.plastic_cat["plastic_bag"] =
          this.plastic_cat["plastic_bag"] + this.pb_qty * 10;
        this.plastic_cat["plastic_container"] =
          this.plastic_cat["plastic_container"] + this.pc_qty * 20;

        console.log("updated list of plastic" + this.list_plastic);

        database
          .collection("users")
          .doc(this.id)
          .update({
            points: this.updated_points,
            totalplastic: this.updated_plastic,
            list_plastic: this.list_plastic,
            plastic_cat: this.plastic_cat,
          });
        alert("Successfully added points!");
        //location.reload();
        //this.username = '';
        //this.new_points = null;
        //this.$refs.anyName.reset();
      }
    },
    getTodaysDate: function() {
      var today = new Date();
      this.date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
    },
  },
  created() {
    this.fetchItem();
    this.getTodaysDate();
  },
};
</script>

<style scoped>
/* Basic Config --------- */

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

html,
body {
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
  font-family: "Open Sans", sans-serif;
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
  width: 0%;
  height: 2px;
  background: #2ecc71;
  position: absolute;
  left: 0;
  top: 50%;
  display: block;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

#app {
  width: 400px;
}

/* Password Input --------- */

.input_container {
  position: relative;
  padding: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 6px;
  background: #fff;
  position: absolute;
  top: 25%;
  left: 65%;
  margin-top: -50px; /* this is half the height of your div*/
  margin-left: -100px; /*this is half of width of your div*/
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
input[type="submit"] {
  background-color: #4caf50;
  color: white;
}

/* The message box is shown when the user clicks on the password field */
#message {
  display: none;
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
  text-align: center;
}

#allocation {
  color: red;
  text-decoration: underline;
}
</style>
