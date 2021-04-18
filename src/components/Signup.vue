<template>
  <div id="app">
    <img src="https://i.postimg.cc/4xwY4sR5/wolrd-environmental-day-copy-2.jpg" align="left">
    <div v-if="error" class="alert alert-danger">{{error}}</div>
    <form action="#" @submit.prevent="submit">
      <div class="input_container">
        <h3><Strong>Create Account</Strong></h3><br>
        <label for="name">Username:</label>

          <input id="name"
            type="name"
            class="form-control form-control-lg"
            name="name"
            required
            v-model="form.name"
          />

          <label for="email">Email Address:</label>
          <input
            id="email"
            type="email"
            class="form-control form-control-lg"
            name="email"
            required
            v-model="form.email"
          />

          <label for="phone">Phone Number: </label><br>
          <input id="phone" 
            type="text" 
            class="form-control form-control-lg" 
            name="phone" 
            v-model="form.phone"
            required>

          <label for="password">Password</label>
          <input id="password"
            type="password"
            class="form-control form-control-lg"
            name="password"
            @input="checkPassword"
            required
            v-model="password" 
            v-on:click="displayMsg()" 
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          />
          <br>

          <ul>
            <li v-bind:class="{ is_valid: contains_eight_characters }">8 Characters</li>
            <li v-bind:class="{ is_valid: contains_number }">Contains Number</li>
            <li v-bind:class="{ is_valid: contains_uppercase }">Contains Uppercase</li>
            <li v-bind:class="{ is_valid: contains_special_character }">Contains Special Character</li>
          </ul>  
          
          <div class="checkmark_container" v-bind:class="{ show_checkmark: valid_password }">		
            <svg width="50%" height="50%" viewBox="0 0 140 100">
              <path class="checkmark" v-bind:class="{ checked: valid_password }" d="M10,50 l25,40 l95,-70" />
              </svg>
          </div>	
                
          <button type="submit" class="btn btn-success btn-lg btn-block">Sign Up</button>

      </div>
    </form>
  </div>
</template>


<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone:"",
      },
      error: null,
      password: "",
      password_length: 0,
      contains_eight_characters: false,
      contains_number: false,
      contains_uppercase: false,
      contains_special_character: false,
      valid_password: false
    };
  },
  methods: {
    checkPassword() {
      this.password_length = this.password.length;
      //eslint-disable-next-line
      const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
      if (this.password_length > 8) {
        this.contains_eight_characters = true;
      } else {
        this.contains_eight_characters = false;
			}
      this.contains_number = /\d/.test(this.password);
      this.contains_uppercase = /[A-Z]/.test(this.password);
			this.contains_special_character = format.test(this.password); 
      if (this.contains_eight_characters === true &&
        this.contains_special_character === true &&
        this.contains_uppercase === true && this.contains_number === true) {
          this.valid_password = true;			
      } else {
        this.valid_password = false;
      }
    },
    submit() {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.form.email, this.password)
                .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                var uid = user.uid;
                //add to users collection
                firebase.firestore().collection("users").doc(uid).set({
                  email: this.form.email,
                  list_friend: [],
                  password: this.password,
                  phone: this.form.phone,
                  points: 0,
                  startdate: this.startdate,
                  thisweek: 0,
                  totalplastic: 0,
                  username: this.form.name,
                  weeklygoal: 0,
                  list_plastic: {},
                  plastic_cat: {}
                });
                alert("Successfully signed up! Please login.")
                this.$router.push('/login');
              })
              .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                  alert('The password is too weak.');
                } else {
                  alert(errorMessage);
                }
                console.log(error);
            });
        },

        getStartDate: function() {
          var today = new Date();
          var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
          this.startdate = date;
        }
    },
    mounted() {
      this.getStartDate()
    }
};
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
  padding-top: 100px
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

/* Checkmark & Strikethrough --------- */

.is_valid { color: rgba(136, 152, 170, 0.8); }
.is_valid:before { width: 100%; }

.checkmark_container {
	border-radius: 50%;
	position: absolute;
	top: -15px; right: -15px;
	background: #2ecc71;
	width: 50px; height: 50px;
	visibility: hidden;
	opacity: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: opacity .4s ease;
}

.show_checkmark {
  visibility: visible;
  opacity: 1;
}

.checkmark {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: white;
  stroke-width: 15;
  stroke-linecap: round;
  stroke-dasharray: 180;
  stroke-dashoffset: 180;
}

.checked { animation: draw 0.5s ease forwards; }

@keyframes draw {
  to { stroke-dashoffset: 0; }
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

</style>